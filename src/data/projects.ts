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
  },
  {
    slug: 'onetradingsocial',
    name: 'One Trading Social',
    summary: 'A trading social network platform built with Bubble.io, featuring real-time updates and user interactions.',
    url: 'https://onetradingsocial.bubbleapps.io/version-test',
    stack: ['Bubble.io', 'Mobile', 'API']
  },
  {
    slug: 'firstencoding',
    name: 'First Encoding',
    summary: 'Internal employee management system for First Encoding, built with Bubble.io to streamline operations.',
    url: 'https://firstencoding.app/',
    stack: ['Bubble.io', 'Mobile', 'API', 'AHK', 'Registry', 'Limited Device']
  },
  {
    slug: 'minapro',
    name: 'MINA Pro',
    summary: 'Loan management system for MINA Pro, developed using Bubble.io to enhance client servicing and tracking.',
    url: 'https://minapro.io',
    stack: ['Bubble.io', 'Mobile', 'API', 'Make.com', 'OpenAI', 'XML']
  }
]
