import { Link, createFileRoute } from '@tanstack/react-router'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import { StudioPageLayout } from '@/components/StudioPageLayout'

export const Route = createFileRoute('/studio/customer-experience')({
  head: () => ({
    meta: [
      { title: 'Customer Experience Review — Seasonal.Studio' },
      {
        property: 'og:title',
        content: 'Customer Experience Review — Seasonal.Studio',
      },
      {
        property: 'og:description',
        content: 'A fresh pair of eyes on your digital business. Customer experience review for clarity, confidence and discovery.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://seasonal.studio/studio/customer-experience' },
      { property: 'og:image', content: 'https://seasonal.studio/og/seasonal-studio-preview.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Customer Experience Review — Seasonal.Studio' },
      {
        name: 'twitter:description',
        content: 'A fresh pair of eyes on your digital business. Customer experience review for clarity, confidence and discovery.',
      },
      { name: 'twitter:image', content: 'https://seasonal.studio/og/seasonal-studio-preview.png' },
    ],
  }),
  component: CustomerExperiencePage,
})

type ContactFields = {
  name: string
  email: string
  recipientEmail: string
  message: string
  'bot-field': string
}

const initialFields: ContactFields = {
  name: '',
  email: '',
  recipientEmail: 'hello@seasonal.studio',
  message: '',
  'bot-field': '',
}

function encodeForm(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&')
}

function CustomerExperiencePage() {
  const [fields, setFields] = useState<ContactFields>(initialFields)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
          'form-name': 'customer-experience-review',
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
      title="Customer Experience Review"
      subtitle="A fresh pair of eyes on your business."
    >
      <main className="cx-page fade-in">
        <section className="cx-hero">
          <div className="cx-hero-content">
            <p className="cx-kicker">A Fresh Pair of Eyes</p>
            <h1 className="cx-hero-title">Customer Experience Review</h1>
            <p className="cx-hero-lead">
              Your business may be familiar to you. It isn't familiar to your customer.
            </p>
          </div>
        </section>

        <section className="cx-proposition">
          <div className="cx-proposition-content">
            <p className="cx-proposition-text">
              I experience your website and digital customer journey as a new customer would, 
              noticing what feels clear and inviting, where interest may hesitate, and the details 
              that can affect trust, discovery and action.
            </p>
            <p className="cx-proposition-text">
              You receive a concise visual review of what is working, what deserves attention, and the 
              opportunities I believe are worth exploring.
            </p>
          </div>
        </section>

        <section className="cx-what-i-look">
          <h2 className="cx-section-title">What I Look At</h2>
          <ul className="cx-focus-list">
            <li>First impression</li>
            <li>Navigation</li>
            <li>Browsing</li>
            <li>Enquiry</li>
            <li>Mobile experience</li>
            <li>Language</li>
            <li>Trust</li>
            <li>Moments of hesitation</li>
            <li>Opportunities for discovery</li>
          </ul>
        </section>

        <section className="cx-what-you-receive">
          <h2 className="cx-section-title">What You Receive</h2>
          <ul className="cx-deliverables-list">
            <li>A clear visual customer journey</li>
            <li>My observations</li>
            <li>The three priorities I think matter most</li>
            <li>Practical recommendations</li>
          </ul>
        </section>

        <section className="cx-pricing">
          <div className="cx-price-card">
            <div className="cx-price-amount">£150</div>
            <p className="cx-price-description">Customer Experience Review</p>
            <a href="#cx-review-form" className="cx-review-button">
              Request a review →
            </a>
          </div>
        </section>

        <section className="cx-from-observation">
          <h2 className="cx-section-title">From Observation to Action</h2>
          <p className="cx-observation-text">
            This review isn't abstract feedback—it's grounded in real interaction. By experiencing your 
            site as a customer would, I can identify where clarity breaks down, where confidence wavers, 
            and where small changes can make meaningful differences.
          </p>
          <p className="cx-observation-text">
            The result is a clear roadmap for improvement, tailored to the specific patterns and moments 
            that shape how customers perceive, trust, and engage with your business.
          </p>
        </section>

        {/* Testimonial Section - When CharmChase example is ready */}
        {/* 
        <section className="cx-testimonial">
          <div className="cx-testimonial-content">
            <blockquote className="cx-testimonial-quote">
              "Your feedback was genuinely very helpful… It's always great to hear an outside perspective, 
              especially from someone who takes the time to look at the details."
            </blockquote>
            <p className="cx-testimonial-attribution">Tim, CharmChase</p>
          </div>
        </section>
        */}

        <form
          id="cx-review-form"
          className="cx-contact-form"
          name="customer-experience-review"
          method="POST"
          action="/contact-form.html"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <div className="cx-form-heading">
            <h2>Request a Review</h2>
            <p>
              Tell me a bit about your business and what you'd like me to look at.
            </p>
          </div>

          <input type="hidden" name="form-name" value="customer-experience-review" />
          <input type="hidden" name="recipientEmail" value={fields.recipientEmail} />
          <p className="cx-honeypot">
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

          <div className="cx-form-grid">
            <label className="cx-field" htmlFor="cx-name">
              <span>Name</span>
              <input
                id="cx-name"
                type="text"
                name="name"
                value={fields.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </label>

            <label className="cx-field" htmlFor="cx-email">
              <span>Email</span>
              <input
                id="cx-email"
                type="email"
                name="email"
                value={fields.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </label>
          </div>

          <label className="cx-field" htmlFor="cx-message">
            <span>Tell me about your business and what you'd like me to review</span>
            <textarea
              id="cx-message"
              name="message"
              value={fields.message}
              onChange={handleChange}
              rows={6}
              required
            />
          </label>

          <div className="cx-form-footer">
            <button
              className="cx-submit"
              type="submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send request'}
            </button>
            <p className="cx-form-note" aria-live="polite">
              {status === 'sent' && "Thank you. I've received your request."}
              {status === 'error' && 'Something went wrong. Please try again in a moment.'}
              {status === 'idle' && 'Your request will be sent directly to hello@seasonal.studio.'}
              {status === 'sending' && 'Sending your request securely.'}
            </p>
          </div>
        </form>

        <div className="cx-back-link">
          <Link to="/studio/work-with-me" className="cx-back-button">
            ← Back to Work With Me
          </Link>
        </div>
      </main>
    </StudioPageLayout>
  )
}
