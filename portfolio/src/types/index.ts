export type Role = 'developer' | 'pm' | 'entrepreneur' | 'artist'

export interface Project {
  id: string
  title: string
  description: string
  role: Role
  tags: string[]
  url?: string
  github?: string
  year: number
  featured?: boolean
}

export interface Experience {
  company: string
  position: string
  period: string
  description: string[]
  stack: string[]
}

export interface NavLink {
  label: string
  href: string
}