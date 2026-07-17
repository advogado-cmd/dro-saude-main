# DRO Saúde — app de landings do subdomínio

App Next.js (App Router) que renderiza as landing pages de **Direito à Saúde** no subdomínio, buscando o conteúdo da **API do Payload** do site principal. As páginas são editadas no Payload (`/narsimha` → coleção Landings) e este app apenas consome e renderiza.

## Por que isolado do domínio principal
As páginas de Ads de saúde ficam no subdomínio para não afetar a classificação de Ads do domínio institucional. O fetch da API é **server-side (SSR/ISR)** — o HTML entregue no subdomínio é auto-contido, sem chamadas do navegador ao domínio principal.

## Rodar local
```
npm install
cp .env.example .env.local   # ajuste as variáveis se necessário
npm run dev
```
Abra http://localhost:3000 (índice) ou http://localhost:3000/planos-de-saude (uma landing).

## Testar o build (antes de deploy)
```
npm run build
```
Se passar, está pronto para a Vercel.

## Variáveis de ambiente (Vercel)
- `NEXT_PUBLIC_API_BASE` — base da API do Payload (padrão: https://droliveira.adv.br)
- `NEXT_PUBLIC_CLUSTER` — `saude` (ou `criminal` para o app de criminal)
- `NEXT_PUBLIC_GTM_ID` — GTM próprio deste subdomínio (opcional, isolado)

## Deploy
Projeto Vercel próprio, apontando o(s) domínio(s) do subdomínio de saúde. Configure as variáveis acima. O mesmo app serve outro cluster (ex.: criminal) trocando `NEXT_PUBLIC_CLUSTER` em outro projeto/domínio.

## Estrutura
- `app/[slug]/page.tsx` — renderiza uma landing pelo slug (SSR/ISR).
- `app/page.tsx` — índice das landings do cluster.
- `components/DroLanding.tsx` — componente da landing (header/footer próprios, logo oficial, vídeo, mídia, FAQ, CTAs).
- `lib/api.ts` — fetch server-side da API do Payload.
