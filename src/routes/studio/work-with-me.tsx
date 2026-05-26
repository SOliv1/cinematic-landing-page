import { createFileRoute } from '@tanstack/react-router'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import { StudioPageLayout } from '@/components/StudioPageLayout'

export const Route = createFileRoute('/studio/work-with-me')({
  component: WorkWithMePage,
})

type ContactFields = {
  name: string
  email: string
  projectType: string
  message: string
  'bot-field': string
}

const initialFields: ContactFields = {
  name: '',
  email: '',
  projectType: '',
  message: '',
  'bot-field': '',
}

function encodeForm(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&')
}

function WorkWithMePage() {
  const [fields, setFields] = useState<ContactFields>(initialFields)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFields((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm({
          'form-name': 'studio-contact',
          ...fields,
        }),
      })

      if (!response.ok) {
        throw new Error('Contact form submission failed')
      }

      setFields(initialFields)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <StudioPageLayout
      title="Work With Me"
      subtitle="A soft, atmospheric contact page."
    >
      <main className="work-page fade-in">
        <section className="work-intro">
          <p className="work-kicker">Quiet enquiries</p>
          <h2 className="work-title">Tell me what you are imagining.</h2>
          <p className="work-lead">
            Use this form for project enquiries, early access, collaborations, or
            questions about Daily Orb: Reflections. Your message is handled through
            the site form, so your private inbox does not need to appear here.
          </p>
        </section>

        <section className="work-about">
          <p className="work-kicker">About Daily Orb</p>
          <h2 className="work-about-title">Reflections in Light</h2>
          <p className="work-about-text">
            Daily Orb: Reflections is part of the Reflections in Light family, a
            collection of calm, intentional digital spaces designed to support
            clarity, emotional rhythm, and gentle daily practice.
          </p>
          <p className="work-about-text">
            Daily Orb: Reflections is shaped around three principles:
          </p>

          <ol className="work-principles">
            <li>
              <span className="work-principle-marker">01</span>
              <div>
                <strong>Clarity</strong>
                <p>
                  A single thought, delivered without clutter. A moment that
                  stands on its own.
                </p>
              </div>
            </li>
            <li>
              <span className="work-principle-marker">02</span>
              <div>
                <strong>Continuity</strong>
                <p>A rhythm you can trust. A daily return to centre.</p>
              </div>
            </li>
            <li>
              <span className="work-principle-marker">03</span>
              <div>
                <strong>Lightness</strong>
                <p>
                  A design that stays out of the way. Soft colour, minimal
                  structure, and a sense of breathing room.
                </p>
              </div>
            </li>
          </ol>

          <div className="work-credit">
            <p>Designed for calm, focus, and emotional clarity.</p>
            <p>
              As part of the Reflections in Light family, this app is one
              expression of a wider intention: creating digital spaces that feel
              peaceful, spacious, and emotionally safe. More projects will join
              this family over time, each with its own focus but sharing the same
              quiet ethos.
            </p>
            <p>
              Thank you for being here and for making space for reflection in your
              day.
            </p>
          </div>
        </section>

        <form
          className="work-contact-form"
          name="studio-contact"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="studio-contact" />
          <p className="work-honeypot">
            <label>
              Do not fill this out if you are human
              <input
                name="bot-field"
                value={fields['bot-field']}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </label>
          </p>

          <div className="work-form-grid">
            <label className="work-field" htmlFor="contact-name">
              <span>Name</span>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={fields.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </label>

            <label className="work-field" htmlFor="contact-email">
              <span>Email</span>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={fields.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </label>
          </div>

          <label className="work-field" htmlFor="contact-project-type">
            <span>What is this about?</span>
            <select
              id="contact-project-type"
              name="projectType"
              value={fields.projectType}
              onChange={handleChange}
              required
            >
              <option value="">Choose one</option>
              <option value="Project enquiry">Project enquiry</option>
              <option value="Early access">Early access</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Question">Question</option>
            </select>
          </label>

          <label className="work-field" htmlFor="contact-message">
            <span>Message</span>
            <textarea
              id="contact-message"
              name="message"
              value={fields.message}
              onChange={handleChange}
              rows={7}
              required
            />
          </label>

          <div className="work-form-footer">
            <button
              className="work-submit"
              type="submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>
            <p className="work-form-note" aria-live="polite">
              {status === 'sent' && 'Thank you. Your message has been sent.'}
              {status === 'error' && 'Something went wrong. Please try again in a moment.'}
              {status === 'idle' && 'Messages can be forwarded to a private inbox or alias from Netlify.'}
              {status === 'sending' && 'Sending your message securely through the site form.'}
            </p>
          </div>
        </form>
      </main>
    </StudioPageLayout>
  )
}
