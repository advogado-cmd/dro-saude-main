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
  laws?: { label: string; url: string }[]
}

// Base legal por slug (fallback em código). Enquanto não for preenchida no
// Payload, o app usa este mapa. Se a landing já trouxer `laws` do Payload, ele
// prevalece. URLs oficiais (Planalto) verificadas.
const L = {
  planos: { label: "Lei dos Planos de Saúde (Lei nº 9.656/1998)", url: "https://www.planalto.gov.br/ccivil_03/leis/l9656.htm" },
  rol: { label: "Atualização do Rol da ANS (Lei nº 14.454/2022)", url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14454.htm" },
  cdc: { label: "Código de Defesa do Consumidor (Lei nº 8.078/1990)", url: "https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm" },
  sus: { label: "Lei do SUS (Lei nº 8.080/1990)", url: "https://www.planalto.gov.br/ccivil_03/leis/l8080.htm" },
  tea: { label: "Lei Berenice Piana — TEA (Lei nº 12.764/2012)", url: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12764.htm" },
  cc: { label: "Código Civil (Lei nº 10.406/2002)", url: "https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm" },
}
const LAWS_BY_SLUG: Record<string, { label: string; url: string }[]> = {
  "advogado-planos-de-saude": [L.planos, L.rol],
  "advogado-negativa-de-cobertura": [L.planos, L.rol],
  "advogado-negativa-de-cirurgia": [L.planos, L.rol],
  "advogado-home-care": [L.planos, L.rol],
  "advogado-saude-mental": [L.planos, L.rol],
  "advogado-carencia-plano-de-saude": [L.planos, L.cdc],
  "advogado-reajuste-abusivo": [L.planos, L.cdc],
  "advogado-plano-cancelado": [L.planos, L.cdc],
  "advogado-urgencia-emergencia": [L.planos, L.cdc],
  "advogado-medicamento-alto-custo": [L.sus, L.planos],
  "advogado-autismo-tea": [L.tea, L.planos],
  "advogado-erro-medico": [L.cc, L.cdc],
  "advogado-direito-medico": [L.cc, L.cdc],
  "advogado-fertilizacao-in-vitro": [L.planos],
}

export async function getLanding(slug: string): Promise<Landing | null> {
  try {
    const res = await fetch(`${BASE}/api/landings/${encodeURIComponent(slug)}`, { next: { revalidate: 300 } })
    if (!res.ok) return null
    const json = await res.json()
    const landing = (json.landing as Landing) || null
    if (landing && (!landing.laws || landing.laws.length === 0) && LAWS_BY_SLUG[slug]) {
      landing.laws = LAWS_BY_SLUG[slug]
    }
    return landing
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
