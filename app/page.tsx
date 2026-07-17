import Link from "next/link"
import Image from "next/image"
import { listLandings } from "@/lib/api"

export const revalidate = 300

export const metadata = {
  title: "Dr. Oliveira Advocacia — Direito à Saúde",
  description: "Orientação jurídica em Direito à Saúde: negativa de cobertura, carência, reajuste, reembolso e mais.",
}

export default async function Home() {
  const list = await listLandings()

  return (
    <>
      <header className="border-b border-[#e4e0d7] bg-[#f6f4ef]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Image src="/logo/logo-horizontal.png" alt="Dr. Oliveira Advocacia" width={220} height={44} className="h-9 w-auto" priority />
          <a href="https://wa.me/5511930819577" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[#082533] px-4 py-2 text-sm font-bold text-[#efebe6]">WhatsApp</a>
        </div>
      </header>

      <main className="bg-[linear-gradient(165deg,#082533,#081b26)] text-[#efebe6]">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ccab76]">Direito à Saúde</p>
          <h1 className="mt-4 font-serif text-3xl font-bold md:text-5xl">Seus direitos junto ao plano de saúde</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#aeb8bd]">Negativa de cobertura, carência, reajuste, reembolso e outros temas. Escolha o assunto para saber como agir.</p>
        </div>
        {list.length > 0 ? (
          <div className="mx-auto max-w-5xl px-5 pb-20">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((l) => (
                <Link key={l.slug} href={`/${l.slug}`} className="rounded-xl border border-[#ccab76]/30 bg-white/5 p-5 transition-colors hover:border-[#ccab76]/60">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#ccab76]">{l.eyebrow}</p>
                  <p className="mt-2 font-serif text-lg font-bold text-[#efebe6]">{l.titleLead}</p>
                  <span className="mt-3 inline-block text-sm text-[#ccab76]">Ver mais →</span>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-3xl px-5 pb-20 text-center text-[#aeb8bd]">As páginas serão exibidas aqui em breve.</div>
        )}
      </main>

      <footer className="bg-[#0a212e] px-5 py-6 text-center text-[11px] text-[#8a97a0]">
        Dr. Carlos Fernando L. de Oliveira — OAB/SP 524.997 · OAB/PE 24.469 · Conteúdo informativo em conformidade com o Provimento OAB 205/2021.
      </footer>
    </>
  )
}
