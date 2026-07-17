import Image from "next/image"

export const metadata = {
  title: "Política de Privacidade | Dr. Oliveira Advocacia",
  robots: { index: false },
}

const H2 = "mt-8 font-serif text-xl font-bold text-[#082533]"
const H3 = "mt-5 font-serif text-lg font-semibold text-[#082533]"
const P = "mt-3 leading-relaxed"
const UL = "mt-3 list-disc space-y-1 pl-5"

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
        <p className="mt-2 text-sm">Última atualização: Dezembro de 2024</p>

        <p className={P}>
          O escritório <strong>Dr. Oliveira Advocacia &amp; Associados</strong> (CNPJ: [inserir CNPJ]) está comprometido com a
          proteção da privacidade e dos dados pessoais de seus clientes, visitantes e usuários do site{" "}
          <strong>www.droliveira.adv.br</strong>, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)
          e demais legislações aplicáveis.
        </p>
        <p className={P}>
          Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos seus dados pessoais, bem como seus
          direitos em relação a essas informações.
        </p>

        <h2 className={H2}>1. Controlador e Encarregado de Dados (DPO)</h2>
        <p className={P}><strong>Controlador de Dados:</strong></p>
        <ul className={UL}>
          <li>Nome: Dr. Oliveira Advocacia &amp; Associados</li>
          <li>E-mail: contato@droliveira.adv.br</li>
          <li>Endereço: Alameda Santos, nº 705 - Sala 35 - Jardim Paulista, São Paulo - SP, 01419-001</li>
        </ul>
        <p className={P}><strong>Encarregado de Proteção de Dados (DPO):</strong></p>
        <ul className={UL}>
          <li>E-mail: privacidade@droliveira.adv.br</li>
          <li>Telefone: +55 11 93081-9577</li>
        </ul>

        <h2 className={H2}>2. Dados Pessoais Coletados</h2>
        <h3 className={H3}>2.1. Dados Fornecidos Diretamente</h3>
        <ul className={UL}>
          <li><strong>Dados de identificação:</strong> nome completo, CPF, RG, data de nascimento</li>
          <li><strong>Dados de contato:</strong> e-mail, telefone, WhatsApp, endereço</li>
          <li><strong>Dados profissionais:</strong> empresa, cargo, área de atuação</li>
          <li><strong>Dados da consulta:</strong> descrição do caso, documentos anexados, mensagens trocadas</li>
        </ul>
        <h3 className={H3}>2.2. Dados Coletados Automaticamente</h3>
        <ul className={UL}>
          <li><strong>Dados de navegação:</strong> endereço IP, tipo de navegador, sistema operacional, páginas visitadas, data e hora de acesso</li>
          <li><strong>Cookies e tecnologias similares:</strong> cookies de sessão, de preferência e analíticos</li>
          <li><strong>Dados de dispositivo:</strong> modelo do dispositivo, identificadores únicos, informações de rede</li>
        </ul>

        <h2 className={H2}>3. Finalidade do Tratamento de Dados</h2>
        <ul className={UL}>
          <li><strong>Prestação de serviços jurídicos:</strong> análise de casos, elaboração de peças, representação judicial</li>
          <li><strong>Comunicação:</strong> responder consultas, enviar atualizações sobre processos e comunicados</li>
          <li><strong>Marketing (mediante consentimento):</strong> newsletters, conteúdo informativo, materiais educativos</li>
          <li><strong>Melhoria do site:</strong> análise de uso, otimização de funcionalidades, experiência do usuário</li>
          <li><strong>Cumprimento de obrigações legais:</strong> atendimento a determinações judiciais, fiscais e regulatórias</li>
          <li><strong>Publicidade direcionada:</strong> exibição de anúncios relevantes através do Google Ads</li>
          <li><strong>Segurança:</strong> prevenção de fraudes e proteção contra acessos não autorizados</li>
        </ul>

        <h2 className={H2}>4. Base Legal para o Tratamento de Dados</h2>
        <ul className={UL}>
          <li><strong>Consentimento (Art. 7º, I):</strong> comunicações de marketing e cookies não essenciais</li>
          <li><strong>Execução de contrato (Art. 7º, V):</strong> prestação de serviços jurídicos contratados</li>
          <li><strong>Obrigação legal (Art. 7º, II):</strong> cumprimento de determinações legais e regulatórias</li>
          <li><strong>Legítimo interesse (Art. 7º, IX):</strong> análise de navegação, segurança e melhoria dos serviços</li>
          <li><strong>Exercício regular de direitos (Art. 7º, VI):</strong> defesa em processos judiciais e administrativos</li>
        </ul>

        <h2 className={H2}>5. Compartilhamento de Dados</h2>
        <ul className={UL}>
          <li><strong>Google LLC:</strong> publicidade (Google Ads), análise (Google Analytics) e infraestrutura</li>
          <li><strong>Tribunais e órgãos públicos:</strong> quando necessário à prestação de serviços jurídicos</li>
          <li><strong>Prestadores de serviços:</strong> hospedagem, e-mail marketing, sistemas de gestão</li>
          <li><strong>Parceiros de tecnologia:</strong> Vercel (hospedagem), Resend (e-mail), WhatsApp Business</li>
        </ul>
        <p className={P}>
          Todos os parceiros são contratualmente obrigados a tratar os dados em conformidade com a LGPD e a manter medidas de
          segurança adequadas.
        </p>

        <h2 className={H2}>6. Cookies e Tecnologias de Rastreamento</h2>
        <h3 className={H3}>6.1. Cookies Essenciais</h3>
        <p className={P}>Necessários ao funcionamento básico do site (sessão, segurança). Não requerem consentimento.</p>
        <h3 className={H3}>6.2. Cookies de Desempenho e Análise</h3>
        <p className={P}>Google Analytics: análise de tráfego e comportamento, para melhorar a experiência e o conteúdo.</p>
        <h3 className={H3}>6.3. Cookies de Publicidade</h3>
        <p className={P}>Google Ads e DoubleClick: anúncios personalizados, remarketing e otimização de campanhas.</p>
        <h3 className={H3}>6.4. Gerenciamento de Cookies</h3>
        <ul className={UL}>
          <li>Google Ads Settings: https://adssettings.google.com</li>
          <li>Google Analytics Opt-out: https://tools.google.com/dlpage/gaoptout</li>
        </ul>
        <p className={P}><em>A desativação de cookies pode afetar a funcionalidade do site e a sua experiência de navegação.</em></p>

        <h2 className={H2}>7. Google Ads e Publicidade Direcionada</h2>
        <p className={P}>Utilizamos o Google Ads para exibir anúncios sobre nossos serviços em sites de terceiros. O Google pode usar cookies para:</p>
        <ul className={UL}>
          <li>Exibir anúncios com base em visitas anteriores ao site (remarketing)</li>
          <li>Medir o desempenho de campanhas publicitárias</li>
          <li>Evitar a exibição repetitiva de anúncios</li>
          <li>Detectar e prevenir fraudes em cliques</li>
        </ul>
        <p className={P}>O Google processa dados conforme sua Política de Privacidade: https://policies.google.com/privacy</p>

        <h2 className={H2}>8. Armazenamento e Segurança dos Dados</h2>
        <p className={P}>Seus dados são armazenados em servidores seguros no Brasil e/ou em data centers internacionais de parceiros (Google Cloud, Vercel) que cumprem padrões internacionais de segurança.</p>
        <p className={P}><strong>Medidas de Segurança:</strong></p>
        <ul className={UL}>
          <li>Criptografia de dados em trânsito (SSL/TLS)</li>
          <li>Controles de acesso baseados em funções</li>
          <li>Monitoramento de segurança 24/7</li>
          <li>Backups regulares e recuperação de desastres</li>
          <li>Treinamento de equipe em proteção de dados</li>
          <li>Auditorias periódicas de segurança</li>
        </ul>

        <h2 className={H2}>9. Prazo de Retenção de Dados</h2>
        <ul className={UL}>
          <li><strong>Clientes ativos:</strong> durante o contrato e por 5 anos após o término (prazos prescricionais)</li>
          <li><strong>Consultas não convertidas:</strong> até 2 anos após o último contato</li>
          <li><strong>Newsletter:</strong> até a revogação do consentimento</li>
          <li><strong>Logs de acesso:</strong> 6 meses (Lei 12.965/2014 - Marco Civil da Internet)</li>
          <li><strong>Cookies:</strong> conforme cada tipo (geralmente 1-24 meses)</li>
        </ul>
        <p className={P}>Após esses prazos, os dados são anonimizados ou eliminados com segurança, salvo obrigação legal de retenção por prazo superior.</p>

        <h2 className={H2}>10. Seus Direitos sob a LGPD</h2>
        <ul className={UL}>
          <li><strong>Confirmação e acesso</strong> aos dados armazenados</li>
          <li><strong>Correção</strong> de dados incompletos, inexatos ou desatualizados</li>
          <li><strong>Anonimização ou eliminação</strong> de dados desnecessários ou excessivos</li>
          <li><strong>Portabilidade</strong> a outro prestador de serviço</li>
          <li><strong>Eliminação</strong> dos dados tratados com consentimento</li>
          <li><strong>Informação</strong> sobre compartilhamento</li>
          <li><strong>Revogação do consentimento</strong> a qualquer momento</li>
          <li><strong>Oposição</strong> ao tratamento com base em legítimo interesse</li>
          <li><strong>Revisão de decisões automatizadas</strong></li>
        </ul>
        <p className={P}>Para exercer estes direitos, contate o DPO em <strong>privacidade@droliveira.adv.br</strong>. Responderemos em até 15 dias.</p>

        <h2 className={H2}>11. Sigilo Profissional Advocatício</h2>
        <p className={P}>Além da LGPD, as informações compartilhadas no âmbito da prestação de serviços jurídicos estão protegidas pelo <strong>sigilo profissional advocatício</strong>, conforme o Estatuto da Advocacia (Lei 8.906/94, arts. 7º e 34), o Código de Ética da OAB (arts. 30 a 35) e a Constituição Federal (art. 5º, XIV). Esse sigilo é absoluto e prevalece mesmo após o término da relação profissional.</p>

        <h2 className={H2}>12. Transferência Internacional de Dados</h2>
        <p className={P}>Alguns parceiros (Google LLC, Vercel Inc.) estão nos Estados Unidos. A transferência está fundamentada em cláusulas contratuais padrão aprovadas pela ANPD, certificações de privacidade e garantias de proteção conforme a LGPD.</p>

        <h2 className={H2}>13. Menores de Idade</h2>
        <p className={P}>O site não é destinado a menores de 18 anos e não coletamos conscientemente dados de menores sem consentimento dos responsáveis. Ao tomarmos conhecimento, eliminaremos tais informações imediatamente.</p>

        <h2 className={H2}>14. Alterações nesta Política</h2>
        <p className={P}>Podemos atualizar esta Política periodicamente. Alterações significativas serão comunicadas por aviso no site, e-mail aos cadastrados e atualização da data no topo desta página.</p>

        <h2 className={H2}>15. Legislação Aplicável e Foro</h2>
        <p className={P}>Esta Política é regida pela legislação brasileira, especialmente pela LGPD (Lei 13.709/2018), Marco Civil da Internet (Lei 12.965/2014) e CDC (Lei 8.078/1990). Fica eleito o foro da comarca de São Paulo/SP.</p>

        <h2 className={H2}>16. Autoridade Nacional de Proteção de Dados (ANPD)</h2>
        <p className={P}>Se seus direitos não forem adequadamente respeitados, você pode apresentar reclamação à ANPD: https://www.gov.br/anpd</p>

        <h2 className={H2}>17. Contato</h2>
        <p className={P}>
          <strong>Dr. Oliveira Advocacia &amp; Associados</strong> — Encarregado de Proteção de Dados (DPO)<br />
          E-mail: privacidade@droliveira.adv.br<br />
          Telefone/WhatsApp: +55 11 93081-9577<br />
          Site: www.droliveira.adv.br
        </p>
        <p className={P}><strong>Versão:</strong> 2.0 · <strong>Última atualização:</strong> Dezembro de 2024</p>

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
