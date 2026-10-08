import { useEffect, useRef, useState } from 'react'

// true once the element has scrolled into view (instantly true for reduced-motion users)
export default function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || typeof IntersectionObserver === 'undefined') { setSeen(true); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect() } }, { threshold, rootMargin: '0px 0px -6% 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return [ref, seen]
}
