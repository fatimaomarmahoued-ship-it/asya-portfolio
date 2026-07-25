import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  href: string
}

const projects: Project[] = [
  {
    title: 'Insight Analytics',
    description:
      'A real-time analytics dashboard with customizable widgets, dark mode, and sub-100ms interactions.',
    image: '/projects/analytics-dashboard.png',
    tags: ['React', 'TypeScript', 'CSS3'],
    href: '#',
  },
  {
    title: 'Nova Storefront',
    description:
      'A headless e-commerce experience with instant search, optimistic cart updates, and a 98 Lighthouse score.',
    image: '/projects/ecommerce-app.png',
    tags: ['Next.js', 'JavaScript', 'HTML5'],
    href: '#',
  },
  {
    title: 'Converse AI',
    description:
      'A streaming AI chat interface with markdown rendering, syntax highlighting, and keyboard-first navigation.',
    image: '/projects/ai-chat.png',
    tags: ['React', 'TypeScript', 'CSS3'],
    href: '#',
  },
  {
    title: 'Atlas Design System',
    description:
      'An accessible, themeable component library powering a suite of internal tools across 5 product teams.',
    image: '/projects/design-system.png',
    tags: ['React', 'HTML5', 'CSS3'],
    href: '#',
  },
]

export function Projects() {
  return (
    <section id="work" className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 font-mono text-sm text-primary">// selected work</p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Featured projects
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            View all projects
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:border-primary/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={`${project.title} project preview`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-medium tracking-tight">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
