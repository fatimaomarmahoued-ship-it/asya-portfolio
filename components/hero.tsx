import { ArrowUpRight, Code2, Link as LinkIcon, AtSign } from 'lucide-react'

const stack = ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js']

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pt-32 pb-20 sm:px-8 sm:pt-40 sm:pb-28"
    >
      {/* subtle radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
      />
      <div className="mx-auto max-w-6xl">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 font-mono text-xs text-muted-foreground">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          Available for freelance work
        </p>

        <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Hi, I&apos;m Asya — I build{' '}
          <span className="text-primary">fast, accessible</span> interfaces for
          the modern web.
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          A front-end web developer focused on turning complex ideas into clean,
          performant, and delightful user experiences.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            View my work
            <ArrowUpRight className="size-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Get in touch
          </a>
          <div className="ml-1 flex items-center gap-1">
            {[
              { icon: Code2, label: 'GitHub' },
              { icon: LinkIcon, label: 'LinkedIn' },
              { icon: AtSign, label: 'Twitter' },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-8 font-mono text-xs text-muted-foreground">
          <span className="text-foreground/70">Currently working with</span>
          {stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
