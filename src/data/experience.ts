import type { ExperienceItem } from './types'

export const experience: ExperienceItem[] = [
  {
    company: 'Acme Corp',
    link: 'https://acme.dev',
    title: 'Frontend Engineer',
    start: 'Jan 2023',
    end: 'Present',
    points: [
      'Led migration to Vite + SWC, reducing cold starts by 58%.',
      'Built design system components with TS and a11y best practices.',
      'Shipped performance budget CI checks using Lighthouse CI.'
    ]
  },
  {
    company: 'Globex',
    title: 'Software Engineer',
    start: 'Aug 2021',
    end: 'Dec 2022',
    points: [
      'Developed dashboards in React with data virtualisation.',
      'Introduced Vitest + React Testing Library end-to-end.',
      'Mentored two interns on TS fundamentals.'
    ]
  }
]
