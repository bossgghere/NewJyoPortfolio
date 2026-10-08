import { useEffect, useState } from 'react'

// thin gradient bar at the very top that fills as you read down the page
export default function ScrollProgress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    let raf = 0
    const update = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        setP(max > 0 ? Math.min(1, window.scrollY / max) : 0)
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('scroll', update); window.removeEventListener('resize', update) }
  }, [])
  return <div className="scrollProgress" style={{ transform: `scaleX(${p})` }} aria-hidden="true" />
}
