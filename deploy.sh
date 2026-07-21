#!/bin/bash
set +e
cd "$(dirname "$0")"
pkill -9 git 2>/dev/null; rm -f .git/index.lock
GIT_LITERAL_PATHSPECS=1 git add app/[slug]/page.tsx components/DroLanding.tsx
git commit -m "feat(landing): CTA fixo mobile + schema LegalService/Breadcrumb + OG/canonical"
git push origin HEAD:main
echo "OK — Vercel vai fazer o deploy do dro-saude-main automaticamente."
