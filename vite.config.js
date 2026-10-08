import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Social crawlers (WhatsApp, LinkedIn, X) need an absolute og:image URL.
// On Vercel the production domain is injected at build time, so we fill it in automatically.
// Elsewhere, set SITE_URL (e.g. https://jyoshika.dev); with neither, the path stays relative.
const siteUrl = process.env.SITE_URL
  || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : '')

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'site-url',
      transformIndexHtml: (html) => {
        // no known domain (local dev): drop the tags that must be absolute, keep the rest relative
        if (!siteUrl) html = html.replace(/^.*(?:og:url|rel="canonical").*\n/gm, '')
        return html.replaceAll('__SITE_URL__', siteUrl)
      },
    },
  ],
})
