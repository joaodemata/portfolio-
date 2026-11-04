import { useRef, useState, type FormEvent } from 'react'
import { Mail, Send } from 'lucide-react'

export function ContactForm() {
  const [status, setStatus] = useState<
    'idle' | 'pending' | 'error' | 'success'
  >('idle')
  const submitting = useRef(false)

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (submitting.current || status === 'success') return
    const body = new URLSearchParams()
    new FormData(event.currentTarget).forEach((value, key) =>
      body.append(key, String(value)),
    )
    submitting.current = true
    setStatus('pending')
    try {
      const response = await fetch('/contact.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
        signal: AbortSignal.timeout(15000),
      })
      if (!response.ok || /\bdata-netlify\s*=/i.test(await response.text()))
        throw new Error('Message was not accepted')
      setStatus('success')
    } catch {
      setStatus('error')
    } finally {
      submitting.current = false
    }
  }

  return (
    <div className="ticks border-2 border-jungle bg-[#fbf6ea] p-6 text-jungle sm:p-10">
      <div className="mb-8 flex items-center justify-between">
        <p className="spec text-ink/50">Form TX-01 · Transmission</p>
        <p className="spec text-mango">● Channel open</p>
      </div>
      {status === 'success' ? (
        <div className="py-8 text-center">
          <Mail aria-hidden="true" className="mx-auto mb-4 h-10 w-10 text-mango" />
          <h2 className="mb-2 font-display text-3xl font-extrabold tracking-tight">
            Message received
          </h2>
          <p role="status" className="mb-8 text-ink/70">
            Thanks for reaching out. Your message was accepted — expect a reply
            within two working days (or one, if the surf is flat).
          </p>
          <button
            type="button"
            className="contact-button"
            onClick={() => setStatus('idle')}
          >
            Send another message
          </button>
        </div>
      ) : (
        <form
          name="contact"
          method="POST"
          action="/contact.html"
          data-netlify="true"
          netlify-honeypot="bot-field"
          aria-busy={status === 'pending'}
          onSubmit={submit}
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Leave this empty
              <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>
          <fieldset
            disabled={status === 'pending'}
            className="min-w-0 space-y-8 disabled:opacity-70"
          >
            <legend className="sr-only">Your message</legend>
            <div>
              <label
                htmlFor="name"
                className="spec block text-ink/60"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                required
                maxLength={100}
                className="contact-input"
                placeholder="Ada Lovelace"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="spec block text-ink/60"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                className="contact-input"
                placeholder="ada@station.org"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="spec block text-ink/60"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                maxLength={5000}
                rows={6}
                className="contact-input"
                placeholder="Site, problem, timeline, how wet it gets…"
              />
            </div>
            <button type="submit" className="contact-button">
              <Send aria-hidden="true" size={16} />
              {status === 'pending' ? 'Sending…' : 'Send message'}
            </button>
          </fieldset>
          <p role="status" className="sr-only">
            {status === 'pending' ? 'Sending your message…' : ''}
          </p>
          {status === 'error' && (
            <p role="alert" className="border-l-4 border-hibiscus pl-4 text-ink/80">
              We couldn’t confirm your message. Your details are still here;
              please try again. Local previews don’t process submissions.
            </p>
          )}
        </form>
      )}
    </div>
  )
}
