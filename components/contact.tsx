'use client'

import { useState } from 'react'
import { ArrowUpRight, Check, Mail } from 'lucide-react'

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 rounded-3xl border border-border bg-card p-6 sm:p-10 lg:grid-cols-2 lg:p-14">
          <div className="flex flex-col justify-between gap-8">
            <div>
              <p className="mb-3 font-mono text-sm text-primary">// contact</p>
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Let&apos;s build something great together.
              </h2>
              <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
                Have a project in mind or just want to say hi? Drop me a message
                and I&apos;ll get back to you within a day or two.
              </p>
            </div>

            <a
              href="mailto:hello@asya.dev"
              className="inline-flex w-fit items-center gap-3 rounded-2xl border border-border bg-background px-5 py-4 transition-colors hover:border-primary/40"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Mail className="size-5" />
              </span>
              <span className="text-left">
                <span className="block text-xs text-muted-foreground">
                  Email me directly
                </span>
                <span className="block font-mono text-sm">hello@asya.dev</span>
              </span>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" htmlFor="name">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Doe"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60"
                />
              </Field>
              <Field label="Email" htmlFor="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60"
                />
              </Field>
            </div>
            <Field label="Subject" htmlFor="subject">
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Project inquiry"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60"
              />
            </Field>
            <Field label="Message" htmlFor="message">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me a little about what you're working on…"
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60"
              />
            </Field>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {sent ? (
                <>
                  Message sent
                  <Check className="size-4" />
                </>
              ) : (
                <>
                  Send message
                  <ArrowUpRight className="size-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="font-mono text-xs text-muted-foreground">{label}</span>
      {children}
    </label>
  )
}
