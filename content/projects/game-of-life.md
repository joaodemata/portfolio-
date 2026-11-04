---
title: 'Game of Life Engine'
code: 'PRJ-025'
year: '2026'
role: 'Backend + frontend'
order: 5
description: 'Conway’s Game of Life computed server-side: each generation is a MongoDB aggregation, streamed to the browser over Socket.IO.'
tags: ['Node.js', 'Socket.IO', 'MongoDB', 'Aggregation pipelines']
github: 'https://github.com/joaodemata/c-gof'
stats:
  - { label: 'Transport', value: 'Socket.IO' }
  - { label: 'Compute', value: 'MongoDB' }
  - { label: 'Runs until', value: '0 alive' }
---

The client sends an initial grid with `start_game`; the core computes every
generation with a `$lookup` aggregation and emits a `change` event per step,
then `finish` with the iteration count once every cell is dead.

Frontend: [f-gof](https://github.com/joaodemata/f-gof).
