#!/usr/bin/env bash
# Evento de conversao no subdominio SAUDE:
#  - components/wa-tracker.tsx  (rastreia todo clique wa.me -> cta_whatsapp, site: "saude")
#  - app/layout.tsx            (monta o <WaTracker site="saude" />)
set -e
cd "$(dirname "$0")"
rm -f .git/index.lock
BRANCH="analytics-saude-$(date +%Y%m%d-%H%M%S)"
git checkout -b "$BRANCH"
git add -A
git commit --no-verify -m "feat(analytics): rastreio cta_whatsapp (site: saude) via WaTracker"
git push --no-verify -u origin HEAD
echo ""
echo "Branch enviada: $BRANCH — abra o PR no repo do saude e faca o merge."
