import type { Project } from './types'

export const projects: Project[] = [
  {
    slug: 'portfolio',
    name: 'Developer Portfolio',
    summary: 'This website. Accessible, responsive, and fast. ~100 Lighthouse performance.',
    url: 'https://yourdomain.dev',
    stack: ['React', 'TypeScript', 'Vite']
  },
  {
    slug: 'taskmate',
    name: 'TaskMate',
    summary: 'A minimal task manager with offline support and keyboard-first UX.',
    url: 'https://github.com/yourhandle/taskmate',
    stack: ['React', 'Vite', 'IndexedDB', 'PWA']
  },
  {
    slug: 'charts',
    name: 'Charts Kit',
    summary: 'Lightweight chart utilities with composable primitives.',
    url: 'https://npmjs.com/package/@your/charts-kit',
    stack: ['TypeScript', 'Rollup']
  }
]
