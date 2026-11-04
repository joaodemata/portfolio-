---
locale: es
title: 'Motor del Juego de la Vida'
code: 'PRJ-025'
year: '2026'
role: 'Backend + frontend'
order: 5
description: 'El Juego de la Vida de Conway calculado en el servidor: cada generación es una agregación de MongoDB, enviada al navegador por Socket.IO.'
tags: ['Node.js', 'Socket.IO', 'MongoDB', 'Pipelines de agregación']
github: 'https://github.com/joaodemata/c-gof'
stats:
  - { label: 'Transporte', value: 'Socket.IO' }
  - { label: 'Cómputo', value: 'MongoDB' }
  - { label: 'Corre hasta', value: '0 vivas' }
---

El cliente envía una grilla inicial con `start_game`; el núcleo calcula cada
generación con una agregación `$lookup` y emite un evento `change` por paso, y
`finish` con el número de iteraciones cuando todas las células mueren.

Frontend: [f-gof](https://github.com/joaodemata/f-gof).
