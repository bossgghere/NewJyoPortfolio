import { useState } from 'react'
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded'

// Light is the default. The choice is remembered, and index.html applies it before first paint.
export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light')
  const dark = theme === 'dark'

  const toggle = () => {
    const next = dark ? 'light' : 'dark'
    const root = document.documentElement
    root.classList.add('theme-anim')            // lets colours cross-fade for a moment
    root.dataset.theme = next
    setTheme(next)
    try { localStorage.setItem('theme', next) } catch (e) { /* private mode: fine */ }
    window.setTimeout(() => root.classList.remove('theme-anim'), 600)
  }

  return (
    <button type="button" className="themeToggle" role="switch" aria-checked={dark} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'} onClick={toggle}>
      <span className="themeKnob">{dark ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}</span>
    </button>
  )
}
