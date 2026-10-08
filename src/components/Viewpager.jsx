import React, { useRef } from 'react'
import clamp from 'lodash-es/clamp'
import { useDrag } from '@use-gesture/react'
import { useSprings, animated, to } from '@react-spring/web'

// returns a copy of the array with the item at `from` moved to index `to`
const swap = (arr, from, to) => {
  const next = arr.slice()
  next.splice(to, 0, next.splice(from, 1)[0])
  return next
}

const ROW = 64 // vertical pitch of one skill row (56px card + 8px gap)

// Returns fitting styles for dragged/idle items
const fn = (order, active, originalIndex, curIndex, y) => (index) =>
  active && index === originalIndex
    ? { y: curIndex * ROW + y, scale: 1.03, zIndex: 1, shadow: 15, immediate: (key) => key === 'y' || key === 'zIndex' }
    : { y: order.indexOf(index) * ROW, scale: 1, zIndex: 0, shadow: 1, immediate: false }

export default function DraggableList({ items }) {
  const order = useRef(items.map((_, index) => index)) // current item order, as indices
  const [springs, api] = useSprings(items.length, fn(order.current)) // one spring per item
  const bind = useDrag(({ args: [originalIndex], active, movement: [, y] }) => {
    const curIndex = order.current.indexOf(originalIndex)
    const curRow = clamp(Math.round((curIndex * ROW + y) / ROW), 0, items.length - 1)
    const newOrder = swap(order.current, curIndex, curRow)
    api.start(fn(newOrder, active, originalIndex, curIndex, y)) // springs animate without re-rendering
    if (!active) order.current = newOrder
  })
  return (
    <div className="content" style={{ height: items.length * ROW - 8 }}>
      {springs.map(({ zIndex, shadow, y, scale }, i) => (
        <animated.div
          {...bind(i)}
          key={i}
          style={{
            zIndex,
            touchAction: 'pan-y',
            boxShadow: shadow.to((s) => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`),
            transform: to([y, scale], (y, s) => `translate3d(0,${y}px,0) scale(${s})`),
          }}
        >
          <span className="skillLabel">{items[i][0]}</span>
          <span className="skillItems">{items[i][1]}</span>
        </animated.div>
      ))}
    </div>
  )
}
