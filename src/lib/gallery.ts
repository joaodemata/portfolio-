import type { Locale } from './i18n'

type Localized = Record<Locale, string>

export type GalleryItem = {
  id: string
  src: string
  tag: Localized
  title: Localized
  alt: Localized
  story: Localized
  width: number
  height: number
}

/** Photos from my own LinkedIn posts. Drop new files in public/img and add an entry here. */
export const gallery: GalleryItem[] = [
  {
    id: 'generators',
    src: '/img/generator-commissioning.jpg',
    tag: { en: 'Power systems', es: 'Sistemas de potencia' },
    title: {
      en: 'Paralleling two FG Wilson gensets',
      es: 'Sincronización de dos plantas FG Wilson',
    },
    alt: {
      en: 'A blue FG Wilson diesel generator in a plant room, with a laptop connected for commissioning',
      es: 'Un generador diésel FG Wilson azul en una sala de máquinas, con un portátil conectado para la puesta en marcha',
    },
    story: {
      en: 'First phase of retrofitting a closed-transition transfer for two FG Wilson generators (P900E1 and P688E1) able to run in parallel. The Woodward EGCP-2 controllers were replaced with InteliGen NTC base boxes and InteliVision 5 screens to monitor, protect, synchronise and control each genset breaker, plus an InteliMains controller to synchronise the pair with the grid. The transfer cells run on a Modicon M340 PLC and the cooling auxiliaries on a Twido PLC.',
      es: 'Primera fase de la renovación de una transferencia de transición cerrada para dos plantas eléctricas FG Wilson (P900E1 y P688E1) capaces de trabajar en paralelo. Los controladores Woodward EGCP-2 se sustituyeron por InteliGen NTC con pantallas InteliVision 5 para monitorizar, proteger, sincronizar y controlar el interruptor de cada grupo electrógeno, más un InteliMains que sincroniza el par con la red. Las celdas de transferencia funcionan con un PLC Modicon M340 y los auxiliares de refrigeración con un PLC Twido.',
    },
    width: 800,
    height: 997,
  },
  {
    id: 'thesis',
    src: '/img/thesis-approval.jpg',
    tag: { en: 'Milestone', es: 'Hito' },
    title: {
      en: 'Thesis approved with honours',
      es: 'Tesis aprobada con mención honorífica',
    },
    alt: {
      en: 'Joao holding his approved thesis in front of a large tree on the UNIMET campus',
      es: 'Joao sosteniendo su tesis aprobada frente a un gran árbol en el campus de la UNIMET',
    },
    story: {
      en: '“Design of a robust controller for a magnetic levitation system of a sphere” — my electrical engineering thesis at Universidad Metropolitana, with Christian Ramos and our tutor Pedro Teppa. Honours for an original robust-control modelling method, a new contribution to fault-tolerant optimal control, and extensive, well-documented MATLAB work on a nonlinear, unstable system.',
      es: '“Diseño de un controlador robusto para un sistema de flotación magnética de una esfera” — mi trabajo de grado de ingeniería eléctrica en la Universidad Metropolitana, junto a Christian Ramos y nuestro tutor Pedro Teppa. Mención honorífica por una metodología original para modelar control robusto, un aporte novedoso al control óptimo tolerante a fallas y un uso extenso y bien documentado de MATLAB sobre un sistema no lineal e inestable.',
    },
    width: 800,
    height: 1066,
  },
]
