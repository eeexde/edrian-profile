import type { Project } from './types'

export const projects: Project[] = [
  {
    slug: 'portfolio',
    name: 'Developer Portfolio',
    summary: 'This website. Accessible, responsive, and fast. ~100 Lighthouse performance.',
    url: './',
    stack: ['React', 'TypeScript', 'Vite']
  },
  {
    slug: 'toonify',
    name: 'Toonify',
    summary: 'Personal Manwha reader fetched from ScraperGo API with Bubble.io mobile app support.',
    url: 'https://toonify-91893.bubbleapps.io/version-test',
    stack: ['Bubble.io', 'Mobile', 'API']
  }
]
