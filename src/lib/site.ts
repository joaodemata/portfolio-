import { messages } from './messages'

/** Language-neutral identity. Translated copy lives in `messages.ts`. */
export const site = {
  name: 'Joao Da Mata',
  shortName: 'JdM',
  role: messages.en.role,
  description:
    'Joao Da Mata — electrical engineer building high-scale backends, payment gateways and PLC automation for car-body production lines.',
  coordinates: '40°25′N 03°42′W',
  timeZone: 'UTC +01:00',
  email: 'joao.demata.andres@gmail.com',
}

/** Edit these to point at your real profiles. */
export const socials = [
  {
    id: 'github',
    label: 'GitHub',
    handle: '@joaodemata',
    href: 'https://github.com/joaodemata',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'in/joao-de-mata-sirizzotti',
    href: 'https://www.linkedin.com/in/joao-de-mata-sirizzotti-4b1608205/',
  },
  {
    id: 'email',
    label: 'Email',
    handle: site.email,
    href: `mailto:${site.email}`,
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
