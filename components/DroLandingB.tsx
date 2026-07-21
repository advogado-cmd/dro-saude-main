import type { ReactNode } from "react"
import Image from "next/image"
import { MessageCircle, Scale, Check, AlertTriangle, HelpCircle } from "lucide-react"
import type { Landing } from "@/lib/api"

const WA_BASE = "https://wa.me/5511930819577?text="
const NAVY_GRAD = "bg-[linear-gradient(165deg,#082533,#081b26)]"

function WaCta({ text, children, block }: { text?: string; children: ReactNode; block?: boolean }) {
  const href = WA_BASE + encodeURIComponent(text || "Olá, gostaria de orientação.")
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        "inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-7 py-4 text-base font-bold text-white transition-colors hover:bg-[#20ba5a] sm:text-lg" +
        (block ? " w-full" : "")
      }
    >
      <MessageCircle className="h-5 w-5" aria-hidden />
      {children}
    </a>
  )
}

// Layout B — curto e direto (página de captura). Usa os mesmos dados da coleção.
export function DroLandingB({ landing: d }: { landing: Landing }) {
  const wa = d.whatsappText

  const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "").replace(/\/$/, "")
  const pageUrl = SITE ? `${SITE}/${d.slug}` : undefined
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        name: "Dr. Oliveira Advocacia",
        ...(pageUrl ? { url: pageUrl } : {}),
        areaServed: "Brasil",
        telephone: "+5511930819577",
        email: "advogado@droliveira.adv.br",
        knowsAbout: d.serviceType || d.titleLead,
        provider: { "@type": "Attorney", name: "Dr. Carlos Fernando L. de Oliveira" },
      },
      d.faq && d.faq.length
        ? { "@type": "FAQPage", mainEntity: d.faq.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })) }
        : null,
    ].filter(Boolean),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HEADER */}
      <header className="border-b border-[#e4e0d7] bg-[#f6f4ef]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
          <a href="/" className="flex items-center">
            <Image src="/logo/logo-horizontal.png" alt="Dr. Oliveira Advocacia" width={220} height={44} className="h-9 w-auto" priority />
          </a>
          <a href={WA_BASE + encodeURIComponent(wa || "Olá, gostaria de orientação.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#20ba5a]">
            <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp
          </a>
        </div>
      </header>

      <main className="pb-24 sm:pb-0">
        {/* HERO + CONTATO (acima da dobra) */}
        <section className={`${NAVY_GRAD} text-[#efebe6]`}>
          <div className="mx-auto grid max-w-5xl items-start gap-10 px-5 py-14 md:py-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              {d.eyebrow ? (
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#ccab76]">
                  <Scale className="h-4 w-4" aria-hidden /> {d.eyebrow}
                </p>
              ) : null}
              <h1 className="mt-4 font-serif text-3xl font-bold leading-tight md:text-4xl">
                {d.titleLead} {d.titleHighlight ? <span className="text-[#ccab76]">{d.titleHighlight}</span> : null}
              </h1>
              {d.sub ? <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#aeb8bd]">{d.sub}</p> : null}

              {d.alerts && d.alerts.length ? (
                <ul className="mt-6 space-y-2">
                  {d.alerts.slice(0, 3).map((a, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#dfe5e8]">
                      <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#ccab76]" aria-hidden />
                      {a.texto}
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-8 hidden sm:block">
                <WaCta text={wa}>{d.ctaHero || "Falar com um advogado agora"}</WaCta>
              </div>
            </div>

            {/* Cartão de contato */}
            <div className="rounded-2xl border border-[#ccab76]/40 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ccab76] text-sm font-bold text-[#082533]">DO</span>
                <div>
                  <p className="font-serif text-lg font-bold">Atendimento direto</p>
                  <p className="text-xs text-[#aeb8bd]">Resposta com sigilo, sem intermediário</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-[#aeb8bd]">
                Conte a sua situação pelo WhatsApp e receba uma orientação inicial sobre os próximos passos.
              </p>
              <div className="mt-6">
                <WaCta text={wa} block>{d.ctaMid || "Iniciar conversa"}</WaCta>
              </div>
              <div className="mt-5 flex flex-wrap gap-2 text-[11px] text-[#ccab76]">
                <span className="rounded-full border border-[#ccab76]/30 bg-[#ccab76]/10 px-3 py-1">OAB/SP 524.997</span>
                <span className="rounded-full border border-[#ccab76]/30 bg-[#ccab76]/10 px-3 py-1">Atendimento nacional</span>
              </div>
            </div>
          </div>
        </section>

        {/* O QUE VOCÊ RECEBE */}
        {d.receives && d.receives.length ? (
          <section className="bg-[#f6f4ef]">
            <div className="mx-auto max-w-4xl px-5 py-12">
              <h2 className="font-serif text-xl font-bold text-[#082533] md:text-2xl">Como podemos ajudar</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {d.receives.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#54636c]">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#082533]">
                      <Check className="h-3 w-3 text-[#ccab76]" aria-hidden />
                    </span>
                    {r.texto}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        {/* FAQ curto */}
        {d.faq && d.faq.length ? (
          <section id="faq" className="bg-white">
            <div className="mx-auto max-w-3xl px-5 py-12">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#9a7635]">
                <HelpCircle className="h-4 w-4" aria-hidden /> Perguntas frequentes
              </p>
              <div className="mt-6 space-y-3">
                {d.faq.slice(0, 4).map((item, i) => (
                  <details key={i} className="group rounded-lg border border-[#e4e0d7] bg-white p-5">
                    <summary className="cursor-pointer list-none font-serif text-base font-semibold text-[#082533]">
                      <span className="flex items-center justify-between gap-4">
                        {item.q}
                        <span className="text-[#9a7635] transition-transform group-open:rotate-45">+</span>
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-[#54636c]">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* CTA FINAL */}
        <section className={`${NAVY_GRAD} text-center text-[#efebe6]`}>
          <div className="mx-auto max-w-2xl px-5 py-14">
            <h2 className="font-serif text-2xl font-bold md:text-3xl">Fale com o escritório agora</h2>
            <p className="mt-3 text-[#aeb8bd]">Orientação com sigilo sobre a sua situação.</p>
            <div className="mt-7 flex justify-center"><WaCta text={wa}>{d.ctaFinal || "Falar no WhatsApp"}</WaCta></div>
            <p className="mt-4 text-xs text-[#aeb8bd]/70">Conteúdo informativo, em conformidade com o Provimento OAB 205/2021. Não constitui promessa de resultado.</p>
          </div>
        </section>
      </main>

      <footer className="bg-[#0a212e] px-5 py-6 text-center text-[11px] text-[#8a97a0]">
        Dr. Carlos Fernando L. de Oliveira — OAB/SP 524.997 · OAB/PE 24.469 · Conteúdo informativo em conformidade com o Provimento OAB 205/2021.
      </footer>

      {/* BARRA FIXA MOBILE */}
      <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-[#ccab76]/40 bg-[#082533]/95 p-3 backdrop-blur sm:hidden">
        <a
          href={WA_BASE + encodeURIComponent(wa || "Olá, gostaria de orientação.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-base font-bold text-white"
        >
          <MessageCircle className="h-5 w-5" aria-hidden />
          {d.ctaHero || "Falar no WhatsApp"}
        </a>
      </div>
    </>
  )
}
