/// <reference types="vite/client" />

type RawCourse = {
  code: string
  title: string
  faculty: string
  description: string
  requirements: string | null
  prereqs: string
  coreqs: string
  antireqs: string
  termsOffered: string[]
  minLevel: string
  finalized: boolean
}

type Course = {
  code: string
  title: string
  faculty: string
  description: string
  requirements: string | null
  prereqs: string
  coreqs: string
  antireqs: string
  termsOffered: string[]
  minLevel: string
  finalized: boolean
  statistics: {
    liked: string
    easy: string
    useful: string
    lastUpdated: string
  }
}

type GradeCourse = Course & { grade: string }

type Term = {
  index: number
  code: string
  season: "Spring" | "Fall" | "Winter"
  year: string
  courses: GradeCourse[]
}

type Requirement = {
  operator: "&" | "|"
  operands: (string | Requirement)[]
}

interface ImportMetaEnv {
  readonly VITE_SERVER_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
