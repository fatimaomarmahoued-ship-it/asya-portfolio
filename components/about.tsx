const facts = [
  { value: '6+', label: 'Years building for the web' },
  { value: '40+', label: 'Projects shipped' },
  { value: '20+', label: 'Happy clients' },
]

const skills = [
  'React & Next.js',
  'TypeScript',
  'Design Systems',
  'Accessibility (a11y)',
  'Performance',
  'Animation & Motion',
  'REST & GraphQL',
  'Testing',
]

export function About() {
  return (
    <section id="about" className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 font-mono text-sm text-primary">// about me</p>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              I care about the details that make an interface feel effortless.
            </h2>
            <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                I&apos;m a front-end developer who loves the intersection of
                design and engineering. For me, great work isn&apos;t just about
                shipping features — it&apos;s about the micro-interactions,
                loading states, and edge cases that most people never notice but
                everyone feels.
              </p>
              <p>
                I specialize in building component-driven applications with
                React and TypeScript, obsessing over performance budgets and
                accessibility so that everyone gets a first-class experience,
                regardless of device or ability.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-card px-3 py-1.5 font-mono text-xs text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 self-start sm:grid-cols-3 lg:grid-cols-1">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="text-3xl font-semibold tracking-tight text-primary">
                  {fact.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {fact.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
