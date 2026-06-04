import { createFileRoute } from '@tanstack/react-router'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import { StudioPageLayout } from '@/components/StudioPageLayout'

export const Route = createFileRoute('/studio/work-with-me')({
  head: () => ({
    meta: [
      { title: 'Work With Me — Seasonal.Studio' },
      {
        property: 'og:title',
        content: 'Work With Me — Seasonal.Studio',
      },
      {
        property: 'og:description',
        content: 'Collaborate with an independent UK studio crafting atmospheric, cinematic web apps and slow-tech digital experiences.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://seasonal.studio/studio/work-with-me' },
      { property: 'og:image', content: 'https://seasonal.studio/og/seasonal-studio-preview.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Work With Me — Seasonal.Studio' },
      {
        name: 'twitter:description',
        content: 'Collaborate with an independent UK studio crafting atmospheric, cinematic web apps and slow-tech digital experiences.',
      },
      { name: 'twitter:image', content: 'https://seasonal.studio/og/seasonal-studio-preview.png' },
    ],
  }),
  component: WorkWithMePage,
})

type ContactFields = {
  name: string
  email: string
  recipientEmail: string
  projectType: string
  message: string
  'bot-field': string
}

const initialFields: ContactFields = {
  name: '',
  email: '',
  recipientEmail: 'saraoliver316@gmail.com',
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
          <p className="work-kicker">Thoughtful enquiries</p>
          <h2 className="work-title">Tell me what you are imagining.</h2>
          <p className="work-lead">
            Send a note about collaborations, project enquiries, early access, or
            questions about any of the Reflections in Light spaces. Your message is
            handled through the site form and can be routed to my private inbox.
          </p>
          <div className="work-intro-actions">
            <a className="work-form-jump" href="#studio-contact-form">
              Go to message form
            </a>
            <a className="work-form-jump" href="mailto:saraoliver316@gmail.com">
              Email Sara directly
            </a>
            <a
              className="work-orb-link"
              href="https://soliv1.github.io/Daily-Reflections-App/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Daily Orb: Reflections
            </a>
          </div>
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
            It is a complimentary companion to this studio: a smaller daily space
            for prompts, mindful check-ins, and reflective moments.
          </p>
          <div className="work-install-card">
            <h3>Save it as a companion app</h3>
            <p>
              Daily Orb: Reflections can be saved to your phone, tablet, laptop,
              or desktop from the browser.
            </p>
            <ul>
              <li>
                <strong>iPhone or iPad:</strong> open the app in Safari, tap Share,
                then choose Add to Home Screen.
              </li>
              <li>
                <strong>Android:</strong> open the app, tap the browser menu, then
                choose Add to Home screen or Install app.
              </li>
              <li>
                <strong>Laptop or desktop:</strong> open it in Chrome or Edge, then
                choose Install app or Create shortcut from the address bar or
                browser menu.
              </li>
            </ul>
          </div>
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
              shared ethos.
            </p>
            <p>
              Thank you for being here and for making space for reflection in your
              day.
            </p>
          </div>
        </section>

          <form
            id="studio-contact-form"
            className="work-contact-form"
            name="studio-contact"
            method="POST"
            action="/contact-form.html"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >

          <div className="work-form-heading">
            <p className="work-kicker">Send a message</p>
            <h2>Collaborations, questions, and enquiries</h2>
            <p>
              Use the form below for collaborations, project ideas, app questions,
              early access, or anything you would like to explore.
            </p>
          </div>

          <input type="hidden" name="form-name" value="studio-contact" />
          <input type="hidden" name="recipientEmail" value={fields.recipientEmail} />
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
              {status === 'idle' && 'Messages are captured by Netlify Forms for saraoliver316@gmail.com.'}
              {status === 'sending' && 'Sending your message securely through the site form.'}
            </p>
          </div>
        </form>
      </main>
    </StudioPageLayout>
  )
}
