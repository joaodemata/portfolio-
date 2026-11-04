---
title: 'Tidewatch Telemetry'
code: 'PRJ-009'
year: '2024'
role: 'Full-stack + data pipeline'
order: 3
description: 'A rugged, offline-first dashboard that lets research boat crews see live sensor data without a single bar of signal.'
tags: ['TypeScript', 'React', 'Rust', 'Time-series']
image: '/img/p-telemetry.jpg'
imageAlt: 'A rugged tablet showing telemetry graphs on the teak deck of a research boat'
stats:
  - { label: 'Sensors / vessel', value: '24' }
  - { label: 'Sync latency', value: '< 2 s' }
  - { label: 'Offline buffer', value: '30 days' }
---

### How it works

A small Rust daemon on the boat ingests serial sensor streams and writes them to
an append-only log. The dashboard reads that log locally and syncs to shore the
moment the vessel finds connectivity.

- Sunlight-readable, high-contrast UI designed for wet gloves.
- Conflict-free sync so three boats can annotate the same dataset.
