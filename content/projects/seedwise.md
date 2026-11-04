---
title: 'Seedwise'
code: 'PRJ-026'
year: '2026'
role: 'Solo — backend + frontend'
order: 1
description: 'A market-opportunity engine: TradingView alerts open opportunities, and a Go core keeps checking their conditions against live market data until they activate, expire or are cancelled.'
tags: ['Go', 'MongoDB', 'React', 'TypeScript', 'Webhooks', 'WebSockets']
github: 'https://github.com/joaodemata/c-trd'
liveUrl: 'https://app.seedwise.io'
image: '/img/seedwise-logo.svg'
imageAlt: 'Seedwise logo: a seedling growing a gold coin'
stats:
  - { label: 'Evaluation cycle', value: '1 min' }
  - { label: 'Market data APIs', value: '03' }
  - { label: 'Lifecycle states', value: '05' }
---

### How it works

A TradingView alert hits `POST /hook/trigger` and opens an opportunity. Every
minute a cron job picks up the conditions that are due, evaluates them with a
pool of workers against Finnhub, Alpha Vantage and Polymarket, and promotes the
opportunity once every condition is active.

- **C-TRD core** — Go standard library `net/http`, no framework.
- Results are saved in batches, each inside **one MongoDB transaction**; a failed batch only releases its lock and retries next cycle.
- **F-CTRD frontend** — React + TypeScript dashboard for opportunities, triggers with version history, conditions and Google Trends uploads.
- Every API call returns a typed `ApiResult<T>` instead of throwing, with tracking codes shared between frontend and core.
