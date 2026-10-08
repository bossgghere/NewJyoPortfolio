import { cloneElement } from 'react'
import useReveal from '../hooks/useReveal'

// Wraps ONE dom element and fades/slides it in the first time it scrolls into view.
// variant="fade" skips the slide (used where the element already animates its own position).
export default function Reveal({ children, delay = 0, variant = 'up' }) {
  const [ref, seen] = useReveal()
  const className = ['reveal', variant === 'fade' ? 'reveal-fade' : '', seen ? 'in' : '', children.props.className || ''].filter(Boolean).join(' ')
  return cloneElement(children, { ref, className, style: { ...children.props.style, transitionDelay: seen ? `${delay}ms` : '0ms' } })
}
