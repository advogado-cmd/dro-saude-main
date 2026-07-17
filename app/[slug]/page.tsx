import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getLanding, listLandings } from "@/lib/api"
import { DroLanding } from "@/components/DroLanding"

export const revalidate = 300

export async function generateStaticParams() {
  const list = await listLandings()
  return list.map((l) => ({ slug: l.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const l = await getLanding(slug)
  if (!l) return { title: "Página não encontrada" }
  return {
    title: l.metaTitle || l.titleLead,
    description: l.metaDescription || l.sub || undefined,
    alternates: { canonical: `/${slug}` },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const landing = await getLanding(slug)
  if (!landing) notFound()
  return <DroLanding landing={landing} />
}
