export type GalleryCategory = 'Field' | 'Build' | 'Flora' | 'Fauna'

export type GalleryItem = {
  id: string
  src: string
  title: string
  caption: string
  category: GalleryCategory
  coords: string
  width: number
  height: number
}

/** Field photographs. Drop new files in public/img and add an entry here. */
export const gallery: GalleryItem[] = [
  {
    id: 'station',
    src: '/img/hero.jpg',
    title: 'Lagoon Station 03',
    caption: 'Stilted research modules, solar roofs, 340 m truss walkway.',
    category: 'Build',
    coords: '08°31′N 83°17′W',
    width: 1376,
    height: 768,
  },
  {
    id: 'monstera',
    src: '/img/g-monstera.jpg',
    title: 'Load paths',
    caption: 'Monstera deliciosa — nature’s own truss diagram.',
    category: 'Flora',
    coords: '08°33′N 83°21′W',
    width: 896,
    height: 1200,
  },
  {
    id: 'drone',
    src: '/img/g-drone.jpg',
    title: 'Canopy survey, 05:42',
    caption: 'Mapping flight before the mist burns off.',
    category: 'Field',
    coords: '08°38′N 83°26′W',
    width: 1200,
    height: 896,
  },
  {
    id: 'toucan',
    src: '/img/g-toucan.jpg',
    title: 'Site inspector',
    caption: 'Ramphastos sulfuratus, unannounced visit to pipe run 7.',
    category: 'Fauna',
    coords: '08°29′N 83°15′W',
    width: 896,
    height: 1200,
  },
  {
    id: 'workbench',
    src: '/img/g-workbench.jpg',
    title: 'Bench, open air',
    caption: 'Rework station 40 m from the high-tide line.',
    category: 'Build',
    coords: '08°32′N 83°18′W',
    width: 1200,
    height: 896,
  },
  {
    id: 'reef',
    src: '/img/g-reef.jpg',
    title: 'Instrument package R-2',
    caption: 'Temperature + pH logger, 9 m depth, month 14.',
    category: 'Field',
    coords: '08°27′N 83°12′W',
    width: 1024,
    height: 1024,
  },
  {
    id: 'bridge',
    src: '/img/g-bridge.jpg',
    title: 'Canopy walk',
    caption: 'Cable-stayed footbridge, 28 m above the forest floor.',
    category: 'Build',
    coords: '08°41′N 83°29′W',
    width: 896,
    height: 1200,
  },
  {
    id: 'surf',
    src: '/img/g-surf.jpg',
    title: 'Wave period study',
    caption: 'Black sand, 11 s swell, drone at 120 m.',
    category: 'Field',
    coords: '08°24′N 83°08′W',
    width: 1376,
    height: 768,
  },
  {
    id: 'turbine',
    src: '/img/g-turbine.jpg',
    title: 'Micro-wind pilot',
    caption: '3 kW turbine on the headland, golden hour.',
    category: 'Build',
    coords: '08°35′N 83°22′W',
    width: 1200,
    height: 896,
  },
  {
    id: 'blueprint',
    src: '/img/g-blueprint.jpg',
    title: 'Rev C, with mango',
    caption: 'Leaf-form solar canopy, drafted the slow way.',
    category: 'Flora',
    coords: '08°32′N 83°18′W',
    width: 1024,
    height: 1024,
  },
]

export const galleryCategories: GalleryCategory[] = [
  'Field',
  'Build',
  'Flora',
  'Fauna',
]
