import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getLanding, listLandings } from "@/lib/api"
import { DroLanding } from "@/components/DroLanding"
import { DroLandingB } from "@/components/DroLandingB"

export const revalidate = 300

export async function generateStaticParams() {
  const list = await listLandings()
  return list.map((l) => ({ slug: l.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const l = await getLanding(slug)
  if (!l) return { title: "Página não encontrada", robots: { index: false, follow: false } }
  const site = process.env.NEXT_PUBLIC_SITE_URL
  const title = l.metaTitle || l.titleLead
  const description = l.metaDescription || l.sub || undefined
  return {
    metadataBase: site ? new URL(site) : undefined,
    title,
    description,
    alternates: { canonical: `/${slug.endsWith("-b") ? slug.slice(0, -2) : slug}` },
    robots: slug.endsWith("-b") ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      type: "website",
      title,
      description,
      url: `/${slug}`,
      siteName: "Dr. Oliveira Advocacia",
      locale: "pt_BR",
    },
    twitter: { card: "summary_large_image", title, description },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const landing = await getLanding(slug)
  if (!landing) notFound()
  return slug.endsWith("-b") ? <DroLandingB landing={landing} /> : <DroLanding landing={landing} />
}
