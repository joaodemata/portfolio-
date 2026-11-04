export const site = {
  name: 'João de Mata',
  shortName: 'JdM',
  role: 'Field engineer',
  tagline: 'Engineering for warm latitudes.',
  description:
    'João de Mata — field engineer building sensors, solar structures and software for the tropics.',
  summary:
    'I design hardware and software that has to survive salt spray, 90% humidity and monsoon storms — then ship it to places with no signal and no spare parts.',
  location: 'Puerto Jiménez, Costa Rica',
  coordinates: '08°32′N 83°18′W',
  email: 'hello@joaodemata.dev',
  availability: 'Booking field projects for Q1 2027',
}

/** Edit these to point at your real profiles. */
export const socials = [
  {
    id: 'github',
    label: 'GitHub',
    handle: '@joaodemata',
    href: 'https://github.com/joaodemata',
    note: 'Firmware, tooling & open hardware',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'in/joaodemata',
    href: 'https://www.linkedin.com/in/joaodemata',
    note: 'Career log & collaborations',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    handle: '@joaodemata',
    href: 'https://www.instagram.com/joaodemata',
    note: 'Field photos, mostly leaves',
  },
  {
    id: 'email',
    label: 'Email',
    handle: site.email,
    href: `mailto:${site.email}`,
    note: 'Fastest route to a reply',
  },
] as const

export function pageMeta(title: string, description: string) {
  const fullTitle = `${title} | ${site.name}`
  return {
    meta: [
      { title: fullTitle },
      { name: 'description', content: description },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
    ],
  }
}
