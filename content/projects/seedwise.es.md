---
locale: es
title: 'Seedwise'
code: 'PRJ-026'
year: '2026'
role: 'En solitario — backend + frontend'
order: 1
description: 'Un motor de oportunidades de mercado: las alertas de TradingView abren oportunidades y un núcleo en Go evalúa sus condiciones contra datos de mercado en vivo hasta que se activan, expiran o se cancelan.'
tags: ['Go', 'MongoDB', 'React', 'TypeScript', 'Webhooks', 'WebSockets']
github: 'https://github.com/joaodemata/c-trd'
liveUrl: 'https://app.seedwise.io'
image: '/img/seedwise-logo.svg'
imageAlt: 'Logo de Seedwise: un brote que hace crecer una moneda de oro'
stats:
  - { label: 'Ciclo de evaluación', value: '1 min' }
  - { label: 'APIs de mercado', value: '03' }
  - { label: 'Estados del ciclo', value: '05' }
---

### Cómo funciona

Una alerta de TradingView llega a `POST /hook/trigger` y abre una oportunidad.
Cada minuto un cron toma las condiciones pendientes, las evalúa con un pool de
workers contra Finnhub, Alpha Vantage y Polymarket, y promueve la oportunidad
cuando todas sus condiciones están activas.

- **Núcleo C-TRD** — librería estándar de Go `net/http`, sin framework.
- Los resultados se guardan por lotes, cada uno dentro de **una transacción de MongoDB**; si un lote falla solo libera su bloqueo y se reintenta en el siguiente ciclo.
- **Frontend F-CTRD** — panel en React + TypeScript para oportunidades, triggers con historial de versiones, condiciones y carga de Google Trends.
- Cada llamada a la API devuelve un `ApiResult<T>` tipado en lugar de lanzar errores, con códigos de rastreo compartidos entre frontend y núcleo.
