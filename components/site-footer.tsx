import { Code2, Link as LinkIcon, AtSign, Terminal } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <Terminal className="size-4" />
          </span>
          <span>asya.dev</span>
        </a>

        <p className="order-last text-center text-sm text-muted-foreground sm:order-none">
          &copy; {new Date().getFullYear()} Asya. Built with care &amp; caffeine.
        </p>

        <div className="flex items-center gap-1">
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
    </footer>
  )
}
