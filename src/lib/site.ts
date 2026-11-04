export const site = {
  name: 'Joao Da Mata',
  shortName: 'JdM',
  role: 'Backend & automation engineer',
  tagline: 'Systems that don’t stop.',
  description:
    'Joao Da Mata — electrical engineer building high-scale backends, payment gateways and PLC automation for car-body production lines.',
  summary:
    'Electrical engineer with a dual career: national payment gateways in Node.js on one side, Body in White production lines for Jaguar Land Rover and Volvo on the other. I build mission-critical systems from scratch.',
  location: 'Madrid, Spain',
  coordinates: '40°25′N 03°42′W',
  timeZone: 'UTC +01:00',
  email: 'joao.demata.andres@gmail.com',
  availability: 'Open to relocation & on-site work worldwide',
}

/** Edit these to point at your real profiles. */
export const socials = [
  {
    id: 'github',
    label: 'GitHub',
    handle: '@joaodemata',
    href: 'https://github.com/joaodemata',
    note: 'Go, Node.js & TypeScript projects',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'in/joao-de-mata-sirizzotti',
    href: 'https://www.linkedin.com/in/joao-de-mata-sirizzotti-4b1608205/',
    note: 'Career log & references',
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
