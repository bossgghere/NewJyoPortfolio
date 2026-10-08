import { useEffect, useState } from 'react'
import dp from '../assets/img/dp.jpg'

// Tiny welcome screen: her photo in a terminal-style card, a pulsing ring and a thin progress line.
// It waits for the page + fonts (at least ~1.3s so it never just flashes, at most ~4s), then fades out.
export default function Loader() {
  const [leaving, setLeaving] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const MIN = reduce ? 300 : 1300, MAX = 4000, start = performance.now()
    let timer
    const finish = () => {
      setLeaving(true)
      document.documentElement.classList.add('ready')
      timer = window.setTimeout(() => setGone(true), 700)
    }
    const pageLoaded = new Promise((res) => document.readyState === 'complete' ? res() : window.addEventListener('load', res, { once: true }))
    const fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()
    Promise.race([Promise.all([pageLoaded, fontsReady]), new Promise((res) => window.setTimeout(res, MAX))])
      .then(() => { timer = window.setTimeout(finish, Math.max(0, MIN - (performance.now() - start))) })
    return () => window.clearTimeout(timer)
  }, [])

  if (gone) return null
  return (
    <div className={`loader ${leaving ? 'leaving' : ''}`} role="status" aria-label="Loading portfolio">
      <div className="loaderCard idCard">
        <div className="footerCardBar">
          <h1><strong style={{ color: '#FE5E58' }}> .</strong></h1>
          <h1><strong style={{ color: '#FEBD2C' }}>.</strong></h1>
          <h1><strong style={{ color: '#27C841' }}> .</strong></h1>
          <span className="expFile">hello.sh</span>
        </div>
        <div className="loaderBody">
          <div className="loaderPhoto">
            <span className="loaderRing" />
            <img src={dp} alt="Jyoshika Reddy" />
            <span className="loaderSpark" style={{ top: -6, right: -14 }}>✦</span>
            <span className="loaderSpark" style={{ bottom: 4, left: -18, animationDelay: '0.7s', fontSize: '60%' }}>✦</span>
          </div>
          <h1>Jyoshika Reddy</h1>
          <p className="cartoonText">~ one sec, adding the sparkles</p>
          <div className="loaderTrack"><span className="loaderFill" /></div>
        </div>
      </div>
    </div>
  )
}
