import type { MetadataRoute } from "next"
import { listLandings } from "@/lib/api"

// Base do subdomínio (isolado do domínio principal). Sobrescreve por env se preciso.
const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://saude.droliveira.adv.br"

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const landings = await listLandings() // já exclui variações "-b"

  const staticUrls: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    {
      url: `${SITE}/politica-de-privacidade`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]

  const landingUrls: MetadataRoute.Sitemap = landings.map((l) => ({
    url: `${SITE}/${l.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }))

  return [...staticUrls, ...landingUrls]
}
