// Fetch das landings a partir da API do Payload (site principal).
// SEMPRE server-side (SSR/ISR) — o subdomínio entrega HTML auto-contido,
// sem chamadas do navegador ao domínio principal (isolamento de Ads).

const BASE = process.env.NEXT_PUBLIC_API_BASE || "https://droliveira.adv.br"
const CLUSTER = process.env.NEXT_PUBLIC_CLUSTER || "saude"

export type Landing = {
  slug: string
  eyebrow?: string
  titleLead: string
  titleHighlight?: string
  sub?: string
  contextTitle?: string
  contextText?: string
  alerts?: { texto: string }[]
  painTitle?: string
  painText?: string
  steps?: { titulo: string; descricao: string }[]
  videoUrl?: string
  videoTitle?: string
  mediaIntro?: string
  media?: { kicker?: string; headline?: string; source?: string; date?: string; url?: string; print?: { url?: string } }[]
  authorityText?: string
  receives?: { texto: string }[]
  faq?: { q: string; a: string }[]
  footerTagline?: string
  whatsappText?: string
  ctaHero?: string
  ctaMid?: string
  ctaFinal?: string
  serviceType?: string
  metaTitle?: string
  metaDescription?: string
}

export async function getLanding(slug: string): Promise<Landing | null> {
  try {
    const res = await fetch(`${BASE}/api/landings/${encodeURIComponent(slug)}`, { next: { revalidate: 300 } })
    if (!res.ok) return null
    const json = await res.json()
    return (json.landing as Landing) || null
  } catch {
    return null
  }
}

type LandingIndex = Pick<Landing, "slug" | "eyebrow" | "titleLead">

export async function listLandings(): Promise<LandingIndex[]> {
  try {
    const res = await fetch(`${BASE}/api/landings?cluster=${CLUSTER}`, { next: { revalidate: 300 } })
    if (!res.ok) return []
    const json = await res.json()
    const docs = (json.docs as LandingIndex[]) || []
    // O índice do subdomínio mostra só as canônicas (A). Variações B usam a
    // convenção de slug terminando em "-b": existem por URL, mas ficam fora da home.
    return docs.filter((l) => !l.slug.endsWith("-b"))
  } catch {
    return []
  }
}
