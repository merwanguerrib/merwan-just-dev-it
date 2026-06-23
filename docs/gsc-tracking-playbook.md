# Google Search Console Tracking Playbook (FR/EN)

## Goal
Track SEO performance separately for English and French pages after the service-page rollout.

## Scope filters
- FR homepage: `https://justdevit.agency/`
- EN homepage: `https://justdevit.agency/en/`
- FR services: `https://justdevit.agency/services/`
- EN services: `https://justdevit.agency/en/services/`

Use **Performance > Search results** and set:
- Search type: `Web`
- Date: `Last 28 days` (compare with previous period)

## Weekly dashboard (by language)
Create 2 saved views:

1. FR view
- Filter page by regex:
  - `^https://justdevit\\.agency/(services/.*)?$`
  - Exclude `/en/`
- KPI: Clicks, Impressions, CTR, Average position

2. EN view
- Filter page by regex:
  - `^https://justdevit\\.agency/en/(services/.*)?$`
- KPI: Clicks, Impressions, CTR, Average position

## Target queries to monitor

### EN
- `freelance full-stack developer marseille`
- `website development marseille`
- `ai automation developer`
- `n8n workflow integration`

### FR
- `développeur full-stack marseille`
- `développement website marseille`
- `automatisation ia`
- `intégration n8n`

In GSC, add query filters one by one and track trend direction every week.

## Success thresholds (first 8 weeks)
- Impressions trending up on both EN and FR service folders.
- CTR >= 2.5% on branded + service-intent queries.
- Average position moving toward top 20 for non-branded service queries.
- No sudden index drop on `/services/*` or `/en/services/*`.

## Technical checks after deploy
- URL Inspection on:
  - `/services/website/`
  - `/services/app/`
  - `/services/ai-automation/`
  - `/services/n8n/`
  - `/en/services/website/`
  - `/en/services/app/`
  - `/en/services/ai-automation/`
  - `/en/services/n8n/`
- Confirm:
  - Canonical = self
  - Alternate pages detected
  - Page indexed
  - Crawled successfully

## Cadence
- Weekly: KPI review by language
- Bi-weekly: query expansion check
- Monthly: internal linking and metadata refresh
