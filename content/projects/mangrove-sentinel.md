---
title: 'Mangrove Sentinel'
code: 'PRJ-014'
year: '2026'
role: 'Lead hardware + firmware'
order: 1
description: 'A solar-powered, solar-cheap water-quality node that survives salt, storms and curious crabs — deployed across 40 km of coastline.'
tags: ['Embedded C', 'LoRaWAN', 'PCB design', 'Solar']
image: '/img/p-mangrove.jpg'
imageAlt: 'A compact solar-powered monitoring device mounted on a wooden post above clear mangrove water'
stats:
  - { label: 'Nodes deployed', value: '62' }
  - { label: 'Uptime', value: '99.2%' }
  - { label: 'Unit cost', value: '$38' }
---

### The problem

Coastal teams were sampling water by boat once a month. By the time the lab
results came back, an algae bloom had already come and gone.

### What we built

- A conformal-coated board in a **3D-printed ASA housing** rated IP68.
- Salinity, turbidity and temperature sampled every 10 minutes.
- LoRaWAN uplink to a single solar gateway per estuary — no SIM cards.
- A firmware watchdog that self-heals after brownouts during monsoon weeks.
