export interface SocialLink {
    icon: any
    href: string
    label: string
  }
  
  export interface NavItem {
    id: string
    label: string
    icon: any
  }
  
  export interface Experience {
    title: string
    company: string
    companyType: string
    period: string
    achievements: {
      text: string
      highlights?: string[]
    }[]
  }
  
  export interface Skill {
    category: string
    items: string[]
  }
  
  export interface Project {
    title: string
    link: string
    technologies: string
    description?: string
    bulletPoints: string[]
  }
  
  export interface ContactInfo {
    location: string
    phone: string
    email: string
    leetcode: string
  }