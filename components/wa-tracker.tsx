"use client"

import { useEffect } from "react"

// Rastreador global de cliques em WhatsApp por delegação (fase de captura).
// Cobre TODOS os links wa.me do site sem precisar tocar nas landings (que são
// Server Components). Empurra o evento cta_whatsapp para o dataLayer -> GTM -> GA4.
export function WaTracker({ site }: { site: string }) {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const a = target?.closest?.('a[href*="wa.me/5511930819577"], a[href*="api.whatsapp.com"]') as HTMLAnchorElement | null
      if (!a) return
      const w = window as unknown as { dataLayer?: Record<string, unknown>[] }
      w.dataLayer = w.dataLayer || []
      w.dataLayer.push({ event: "cta_whatsapp", cta_location: "landing", site })
    }
    document.addEventListener("click", handler, true)
    return () => document.removeEventListener("click", handler, true)
  }, [site])
  return null
}
