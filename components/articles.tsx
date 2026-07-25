import { ArrowUpRight } from 'lucide-react'

type Article = {
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  href: string
}

const articles: Article[] = [
  {
    title: 'Building accessible components from the ground up',
    excerpt:
      'A practical guide to keyboard navigation, focus management, and ARIA patterns that actually work.',
    category: 'Accessibility',
    date: 'Jun 2026',
    readTime: '8 min read',
    href: '#',
  },
  {
    title: 'The performance cost of your favorite React patterns',
    excerpt:
      'Context, memoization, and re-renders — measuring what really matters for perceived speed.',
    category: 'Performance',
    date: 'Apr 2026',
    readTime: '6 min read',
    href: '#',
  },
  {
    title: 'Designing a color system with OKLCH',
    excerpt:
      'Why perceptual color spaces make theming, contrast, and dark mode dramatically easier.',
    category: 'Design',
    date: 'Feb 2026',
    readTime: '5 min read',
    href: '#',
  },
]

export function Articles() {
  return (
    <section
      id="writing"
      className="scroll-mt-20 border-y border-border bg-card/40 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 font-mono text-sm text-primary">// writing</p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Latest articles
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Read the blog
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <a
              key={article.title}
              href={article.href}
              className="group flex flex-col rounded-3xl border border-border bg-background p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
                <span className="rounded-full bg-primary/12 px-2.5 py-1 text-primary">
                  {article.category}
                </span>
                <span>{article.date}</span>
              </div>
              <h3 className="mt-4 text-lg font-medium leading-snug tracking-tight text-balance transition-colors group-hover:text-primary">
                {article.title}
              </h3>
              <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                {article.excerpt}
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                <span>{article.readTime}</span>
                <span className="inline-flex items-center gap-1 text-foreground/80 transition-colors group-hover:text-primary">
                  Read
                  <ArrowUpRight className="size-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
