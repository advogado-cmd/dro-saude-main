import Image from "next/image"

export const metadata = {
  title: "Política de Privacidade | Dr. Oliveira Advocacia",
  robots: { index: false },
}

export default function Privacidade() {
  return (
    <>
      <header className="border-b border-[#e4e0d7] bg-[#f6f4ef]">
        <div className="mx-auto flex max-w-6xl items-center px-5 py-3">
          <a href="/"><Image src="/logo/logo-horizontal.png" alt="Dr. Oliveira Advocacia" width={220} height={44} className="h-9 w-auto" /></a>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-5 py-16 text-[#54636c]">
        <h1 className="font-serif text-3xl font-bold text-[#082533]">Política de Privacidade</h1>
        <p className="mt-6 leading-relaxed">
          Esta página respeita a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018). Os dados que você
          fornecer (por exemplo, ao iniciar uma conversa por WhatsApp) são utilizados exclusivamente para responder
          à sua solicitação e prestar orientação jurídica, com sigilo profissional.
        </p>
        <h2 className="mt-8 font-serif text-xl font-bold text-[#082533]">Uso dos dados</h2>
        <p className="mt-3 leading-relaxed">
          Não compartilhamos seus dados com terceiros para fins de marketing. Os dados são tratados pelo tempo
          necessário ao atendimento e às obrigações legais aplicáveis.
        </p>
        <h2 className="mt-8 font-serif text-xl font-bold text-[#082533]">Seus direitos</h2>
        <p className="mt-3 leading-relaxed">
          Você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer momento pelo e-mail
          advogado@droliveira.adv.br.
        </p>
        <p className="mt-10 text-sm">
          <a href="/" className="text-[#9a7635]">← Voltar ao início</a>
        </p>
      </main>
      <footer className="bg-[#0a212e] px-5 py-6 text-center text-[11px] text-[#8a97a0]">
        Dr. Carlos Fernando L. de Oliveira — OAB/SP 524.997 · OAB/PE 24.469
      </footer>
    </>
  )
}
