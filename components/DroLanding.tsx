import type { ReactNode } from "react"
import Image from "next/image"
import {
  MessageCircle,
  Scale,
  Search,
  FileCheck2,
  ShieldCheck,
  AlertTriangle,
  Check,
  Newspaper,
  HelpCircle,
  Landmark,
  PlayCircle,
  type LucideIcon,
} from "lucide-react"
import type { Landing } from "@/lib/api"

const WA_BASE = "https://wa.me/5511930819577?text="
const NAVY_GRAD = "bg-[linear-gradient(165deg,#082533,#081b26)]"
const STEP_ICONS: LucideIcon[] = [Search, FileCheck2, ShieldCheck]

function toEmbed(u?: string): string {
  if (!u) return ""
  if (u.includes("/embed/")) return u
  const m = u.match(/(?:youtu\.be\/|v=|\/shorts\/)([A-Za-z0-9_-]{11})/)
  return m ? `https://www.youtube.com/embed/${m[1]}` : u
}

function Cta({ text, children }: { text?: string; children: ReactNode }) {
  const href = WA_BASE + encodeURIComponent(text || "Olá, gostaria de orientação.")
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#ccab76] px-7 py-4 text-base font-bold text-[#082533] transition-colors hover:bg-[#ccab76]/90 sm:text-lg"
    >
      <MessageCircle className="h-5 w-5" aria-hidden />
      {children}
    </a>
  )
}

function Kicker({ icon: Icon, onDark, children }: { icon: LucideIcon; onDark?: boolean; children: ReactNode }) {
  return (
    <p className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] ${onDark ? "text-[#ccab76]" : "text-[#9a7635]"}`}>
      <Icon className="h-4 w-4" aria-hidden />
      {children}
    </p>
  )
}

export function DroLanding({ landing: d }: { landing: Landing }) {
  const wa = d.whatsappText
  const chat = [
    { me: true, text: `Olá! Vim pela página sobre ${(d.serviceType || "o tema").toLowerCase()}. Pode me orientar?` },
    { me: false, text: "Olá! Claro. Me conte rapidamente a sua situação que já direciono o seu caso." },
    { me: true, text: "Perfeito. Quando podemos conversar?" },
    { me: false, text: "Podemos agora mesmo por aqui, com sigilo. 👇" },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", serviceType: d.serviceType || d.titleLead, areaServed: "Brasil" },
      d.faq && d.faq.length
        ? { "@type": "FAQPage", mainEntity: d.faq.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })) }
        : null,
    ].filter(Boolean),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-[#e4e0d7] bg-[#f6f4ef]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="/" className="flex items-center">
            <Image src="/logo/logo-horizontal.png" alt="Dr. Oliveira Advocacia" width={220} height={44} className="h-9 w-auto" priority />
          </a>
          <nav className="flex items-center gap-5">
            <a href="#faq" className="hidden text-sm font-semibold text-[#082533] sm:block">Perguntas</a>
            <a href={WA_BASE + encodeURIComponent(wa || "Olá, gostaria de orientação.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#082533] px-4 py-2 text-sm font-bold text-[#efebe6]">
              <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className={`${NAVY_GRAD} text-[#efebe6]`}>
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:py-20 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              {d.eyebrow ? <Kicker icon={Scale} onDark>{d.eyebrow}</Kicker> : null}
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-[#ccab76]">
                <span className="rounded-full border border-[#ccab76]/30 bg-[#ccab76]/10 px-3 py-1">OAB/SP 524.997</span>
                <span className="rounded-full border border-[#ccab76]/30 bg-[#ccab76]/10 px-3 py-1">OAB/PE 24.469</span>
                <span className="rounded-full border border-[#ccab76]/30 bg-[#ccab76]/10 px-3 py-1">Atendimento humano</span>
              </div>
              <h1 className="mt-6 font-serif text-3xl font-bold leading-tight md:text-5xl">
                {d.titleLead} {d.titleHighlight ? <span className="text-[#ccab76]">{d.titleHighlight}</span> : null}
              </h1>
              {d.sub ? <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#aeb8bd]">{d.sub}</p> : null}
              <div className="mt-8">
                <Cta text={wa}>{d.ctaHero || "Falar com o escritório"}</Cta>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="overflow-hidden rounded-2xl border-2 border-[#ccab76]/60 shadow-2xl">
                <Image src="/team/dr-oliveira-duotone.jpg" alt="Dr. Oliveira, advogado" width={1000} height={1241} className="h-auto w-full" priority />
              </div>
              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-[#aeb8bd]">
                <Scale className="h-4 w-4 text-[#ccab76]" aria-hidden /> Dr. Oliveira · atuação técnica e próxima
              </div>
            </div>
          </div>
        </section>

        {/* CONTEXTO */}
        {d.contextTitle ? (
          <section className="bg-[#f6f4ef]">
            <div className="mx-auto max-w-4xl px-5 py-14 md:py-16">
              <Kicker icon={AlertTriangle}>Por que isso importa</Kicker>
              <h2 className="mt-3 font-serif text-2xl font-bold text-[#082533] md:text-3xl">{d.contextTitle}</h2>
              {d.contextText ? <p className="mt-4 text-[#54636c]">{d.contextText}</p> : null}
              {d.alerts && d.alerts.length ? (
                <ul className="mt-6 space-y-3">
                  {d.alerts.map((a, i) => (
                    <li key={i} className="flex items-start gap-3 rounded-lg border border-[#e4e0d7] bg-white p-4">
                      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#082533]">
                        <AlertTriangle className="h-3.5 w-3.5 text-[#ccab76]" aria-hidden />
                      </span>
                      <span className="text-sm text-[#54636c]">{a.texto}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              <div className="mt-8"><Cta text={wa}>Analisar a minha situação</Cta></div>
            </div>
          </section>
        ) : null}

        {/* DOR */}
        {d.painTitle ? (
          <section className="bg-[#efebe6]">
            <div className="mx-auto max-w-4xl px-5 py-14 md:py-16">
              <div className="border-l-4 border-[#ccab76] pl-5">
                <h2 className="font-serif text-2xl font-bold text-[#082533] md:text-3xl">{d.painTitle}</h2>
                {d.painText ? <p className="mt-4 text-[#54636c]">{d.painText}</p> : null}
              </div>
            </div>
          </section>
        ) : null}

        {/* COMO ATUAMOS */}
        {d.steps && d.steps.length ? (
          <section className="bg-white">
            <div className="mx-auto max-w-5xl px-5 py-14 md:py-16">
              <Kicker icon={Scale}>Como atuamos</Kicker>
              <h2 className="mt-3 font-serif text-2xl font-bold text-[#082533] md:text-3xl">Um caminho claro, do começo ao fim</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {d.steps.map((s, i) => {
                  const Icon = STEP_ICONS[i % STEP_ICONS.length]
                  return (
                    <div key={i} className="rounded-xl border border-[#e4e0d7] bg-white p-6">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#ccab76] bg-[#082533]">
                          <Icon className="h-6 w-6 text-[#ccab76]" aria-hidden />
                        </div>
                        <span className="font-serif text-2xl font-bold text-[#ccab76]">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <h3 className="mt-4 font-serif text-lg font-bold text-[#082533]">{s.titulo}</h3>
                      <p className="mt-2 text-sm text-[#54636c]">{s.descricao}</p>
                    </div>
                  )
                })}
              </div>
              <div className="mt-10 text-center"><Cta text={wa}>{d.ctaMid || "Analisar o meu caso"}</Cta></div>
            </div>
          </section>
        ) : null}

        {/* VÍDEO */}
        {d.videoUrl ? (
          <section className="bg-[#efebe6]">
            <div className="mx-auto max-w-4xl px-5 py-14 md:py-16">
              <Kicker icon={PlayCircle}>Em vídeo</Kicker>
              <h2 className="mt-3 font-serif text-2xl font-bold text-[#082533] md:text-3xl">{d.videoTitle || "Entenda o tema em poucos minutos"}</h2>
              <div className="mt-8 overflow-hidden rounded-2xl border-2 border-[#ccab76]/60 shadow-lg">
                <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                  <iframe className="absolute inset-0 h-full w-full" src={toEmbed(d.videoUrl)} title={d.videoTitle || "Vídeo"} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {/* ATENDIMENTO / WHATSAPP */}
        <section className={`${NAVY_GRAD} text-[#efebe6]`}>
          <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-14 md:py-16 lg:grid-cols-2">
            <div>
              <Kicker icon={MessageCircle} onDark>Atendimento direto</Kicker>
              <h2 className="mt-3 font-serif text-2xl font-bold md:text-3xl">Fale pelo WhatsApp, com sigilo</h2>
              <p className="mt-4 text-[#aeb8bd]">Sem formulário longo e sem intermediário. Você explica a situação e recebe uma orientação inicial sobre os próximos passos.</p>
              <div className="mt-8"><Cta text={wa}>Iniciar conversa</Cta></div>
            </div>
            <div className="mx-auto w-full max-w-xs">
              <div className="overflow-hidden rounded-[2rem] border-4 border-[#0a212e] bg-[#efebe6] shadow-2xl">
                <div className="flex items-center gap-2 bg-[#082533] px-4 py-3 text-[#efebe6]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ccab76] text-xs font-bold text-[#082533]">DO</span>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold">Dr. Oliveira Advocacia</p>
                    <p className="text-[10px] text-[#aeb8bd]">online</p>
                  </div>
                </div>
                <div className="space-y-2 px-3 py-4">
                  {chat.map((m, i) => (
                    <div key={i} className={m.me ? "flex justify-end" : "flex justify-start"}>
                      <p className={"max-w-[80%] rounded-2xl px-3 py-2 text-xs leading-snug " + (m.me ? "bg-[#ccab76]/90 text-[#082533]" : "bg-white text-[#082533]")}>{m.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NA MÍDIA */}
        {d.media && d.media.length ? (
          <section className="bg-white">
            <div className="mx-auto max-w-5xl px-5 py-14 md:py-16">
              <Kicker icon={Newspaper}>Na mídia · repercussão do tema</Kicker>
              <h2 className="mt-3 font-serif text-2xl font-bold text-[#082533] md:text-3xl">O assunto em pauta</h2>
              {d.mediaIntro ? <p className="mt-3 max-w-2xl text-[#54636c]">{d.mediaIntro}</p> : null}
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {d.media.map((m, i) => (
                  <article key={i} className="overflow-hidden rounded-xl border border-[#e4e0d7] bg-white">
                    {m.print?.url ? (
                      <div className="relative h-40 w-full bg-[#0a212e]">
                        <Image src={m.print.url} alt={m.headline || "Notícia"} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
                      </div>
                    ) : (
                      <div className="flex items-center justify-between bg-[#0a212e] px-4 py-2 text-[11px] uppercase tracking-wider text-[#aeb8bd]">
                        <span className="flex items-center gap-1.5"><Newspaper className="h-3.5 w-3.5 text-[#ccab76]" aria-hidden /> Notícia</span>
                      </div>
                    )}
                    <div className="p-5">
                      {m.kicker ? <p className="text-[11px] font-semibold uppercase tracking-wider text-[#9a7635]">{m.kicker}</p> : null}
                      <h3 className="mt-2 font-serif text-base font-bold leading-snug text-[#082533]">{m.headline}</h3>
                      <p className="mt-4 border-t border-[#e4e0d7] pt-3 text-[11px] text-[#8a97a0]">Fonte: {m.source} — {m.date}</p>
                    </div>
                  </article>
                ))}
              </div>
              <p className="mt-4 text-xs text-[#8a97a0]">Reprodução de fatos noticiados pela imprensa, para fins informativos.</p>
            </div>
          </section>
        ) : null}

        {/* AUTORIDADE */}
        <section className="bg-[#efebe6]">
          <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-14 md:py-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="overflow-hidden rounded-2xl border-2 border-[#ccab76] shadow-lg">
                <Image src="/team/dr-oliveira.jpg" alt="Dr. Oliveira, advogado" width={1000} height={1241} className="h-auto w-full" />
              </div>
            </div>
            <div>
              <Kicker icon={Landmark}>Quem conduz o seu caso</Kicker>
              <h2 className="mt-3 font-serif text-2xl font-bold text-[#082533] md:text-3xl">Dr. Oliveira</h2>
              {d.authorityText ? <p className="mt-4 text-[#54636c]">{d.authorityText}</p> : null}
              {d.receives && d.receives.length ? (
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
              ) : null}
              <div className="mt-8"><Cta text={wa}>Falar com o Dr. Oliveira</Cta></div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {d.faq && d.faq.length ? (
          <section id="faq" className="bg-white">
            <div className="mx-auto max-w-3xl px-5 py-14 md:py-16">
              <Kicker icon={HelpCircle}>Perguntas frequentes</Kicker>
              <h2 className="mt-3 font-serif text-2xl font-bold text-[#082533] md:text-3xl">Tire suas dúvidas</h2>
              <div className="mt-8 space-y-3">
                {d.faq.map((item, i) => (
                  <details key={i} className="group rounded-lg border border-[#e4e0d7] bg-white p-5">
                    <summary className="cursor-pointer list-none font-serif text-lg font-semibold text-[#082533]">
                      <span className="flex items-center justify-between gap-4">
                        {item.q}
                        <span className="text-[#9a7635] transition-transform group-open:rotate-45">+</span>
                      </span>
                    </summary>
                    <p className="mt-3 leading-relaxed text-[#54636c]">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* CTA FINAL */}
        <section className={`${NAVY_GRAD} text-[#efebe6]`}>
          <div className="mx-auto max-w-3xl px-5 py-16 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#ccab76]">
              <MessageCircle className="h-6 w-6 text-[#ccab76]" aria-hidden />
            </div>
            <h2 className="font-serif text-2xl font-bold md:text-3xl">Fale com quem entende do assunto</h2>
            <p className="mt-3 text-[#aeb8bd]">Converse com o escritório sobre a sua situação — com sigilo e orientação clara sobre os próximos passos.</p>
            <div className="mt-8"><Cta text={wa}>{d.ctaFinal || "Buscar os meus direitos"}</Cta></div>
            <p className="mt-4 text-xs text-[#aeb8bd]/70">Conteúdo informativo, em conformidade com o Provimento OAB 205/2021. Não constitui promessa de resultado. Cada caso exige análise individual.</p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0a212e] text-[#aeb8bd]">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 py-12 md:grid-cols-3">
          <div>
            <Image src="/logo/logo-footer.png" alt="Dr. Oliveira Advocacia" width={200} height={48} className="h-11 w-auto" />
            <p className="mt-3 max-w-xs text-sm leading-relaxed">{d.footerTagline || "Advocacia com foco em Direito à Saúde. Atuação técnica, próxima e com acompanhamento de cada caso."}</p>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#ccab76]">Contato</p>
            <p className="text-sm leading-8">WhatsApp: (11) 93081-9577<br />advogado@droliveira.adv.br</p>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#ccab76]">Institucional</p>
            <p className="text-sm leading-8"><a href="/politica-de-privacidade" className="hover:text-[#efebe6]">Política de Privacidade</a><br /><a href="/" className="hover:text-[#efebe6]">Início</a></p>
          </div>
        </div>
        <div className="border-t border-white/10 px-5 py-4 text-center text-[11px] text-[#8a97a0]">
          Dr. Carlos Fernando L. de Oliveira — OAB/SP 524.997 · OAB/PE 24.469 · Conteúdo informativo em conformidade com o Provimento OAB 205/2021.
        </div>
      </footer>
    </>
  )
}
