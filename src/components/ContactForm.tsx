import { useRef, useState, type FormEvent } from 'react'
import { Mail, Send } from 'lucide-react'
import { useT } from '../lib/i18n'

export function ContactForm() {
  const t = useT()
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
        <p className="spec text-ink/50">{t.form.header}</p>
        <p className="spec text-mango">{t.form.open}</p>
      </div>
      {status === 'success' ? (
        <div className="py-8 text-center">
          <Mail
            aria-hidden="true"
            className="mx-auto mb-4 h-10 w-10 text-mango"
          />
          <h2 className="mb-2 font-display text-3xl font-extrabold tracking-tight">
            {t.form.receivedTitle}
          </h2>
          <p role="status" className="mb-8 text-ink/70">
            {t.form.receivedText}
          </p>
          <button
            type="button"
            className="contact-button"
            onClick={() => setStatus('idle')}
          >
            {t.form.another}
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
              {t.form.honeypot}
              <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>
          <fieldset
            disabled={status === 'pending'}
            className="min-w-0 space-y-8 disabled:opacity-70"
          >
            <legend className="sr-only">{t.form.legend}</legend>
            <div>
              <label htmlFor="name" className="spec block text-ink/60">
                {t.form.name}
              </label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                required
                maxLength={100}
                className="contact-input"
                placeholder={t.form.namePlaceholder}
              />
            </div>
            <div>
              <label htmlFor="email" className="spec block text-ink/60">
                {t.form.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                className="contact-input"
                placeholder={t.form.emailPlaceholder}
              />
            </div>
            <div>
              <label htmlFor="message" className="spec block text-ink/60">
                {t.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                required
                maxLength={5000}
                rows={6}
                className="contact-input"
                placeholder={t.form.messagePlaceholder}
              />
            </div>
            <button type="submit" className="contact-button">
              <Send aria-hidden="true" size={16} />
              {status === 'pending' ? t.form.sending : t.form.send}
            </button>
          </fieldset>
          <p role="status" className="sr-only">
            {status === 'pending' ? t.form.sendingStatus : ''}
          </p>
          {status === 'error' && (
            <p
              role="alert"
              className="border-l-4 border-hibiscus pl-4 text-ink/80"
            >
              {t.form.error}
            </p>
          )}
        </form>
      )}
    </div>
  )
}
