#!/bin/bash
# Deploy do subdomínio saúde: nova home completa + suporte a A/B (layout B).
# Pause o iCloud antes de rodar.
set +e
cd "$(dirname "$0")"
pkill -9 git 2>/dev/null; rm -f .git/index.lock
GIT_LITERAL_PATHSPECS=1 git add app/page.tsx lib/api.ts components/DroLandingB.tsx "app/[slug]/page.tsx"
git commit -m "feat: home completa do subdominio saude + suporte A/B (DroLandingB + switch por layout)"
git push origin HEAD:main
echo "OK — Vercel vai publicar saude.droliveira.adv.br automaticamente."
