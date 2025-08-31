export type Project = {
  slug: string
  name: string
  summary: string
  url: string
  stack: string[]
}

export type ExperienceItem = {
  company: string
  link?: string
  title: string
  start: string
  end?: string
  points: string[]
}
