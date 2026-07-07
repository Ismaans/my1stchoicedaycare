import { useState } from 'react'
import PageHero from '../components/PageHero'
import { CtaBand, Section } from '../components/ui'
import { Phone, Mail, Pin, Clock, Arrow } from '../components/icons'
import { ChevronDown } from 'lucide-react'
import { business, hours } from '../data/site'

const fieldClass =
  'w-full rounded-[10px] border border-sand bg-cream px-4 py-3 text-ink placeholder:text-ink/40 transition-colors focus:border-maroon focus:outline-none focus:ring-2 focus:ring-maroon/20'

const labelClass = 'mb-1.5 block text-sm font-semibold text-ink'

export default function Contact() {
  const [paymentOpen, setPaymentOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = (data.get('name') || '').toString().trim()

    const lines = [
      `Parent name: ${data.get('name') || ''}`,
      `Email: ${data.get('email') || ''}`,
      `Phone: ${data.get('phone') || ''}`,
      `Child's age: ${data.get('childAge') || ''}`,
      `Preferred start date: ${data.get('startDate') || ''}`,
      '',
      'Message:',
      `${data.get('message') || ''}`,
    ]

    const subject = encodeURIComponent(`New Inquiry from ${name || 'a parent'}`)
    const body = encodeURIComponent(lines.join('\n'))
    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your family"
        intro="Have a question about availability, schedules, or enrollment? Send a message or give us a call — we'd love to hear from you."
      />

      <Section tone="cream" className="py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* --------------------------------------------------- FORM */}
          <div className="rounded-[16px] border border-sand bg-mist/30 p-7 sm:p-9">
            <h2 className="text-2xl font-bold text-ink">Send us a message</h2>
            <p className="mt-2 text-sm text-ink/70">
              Fields marked with an asterisk (*) are required.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Your name *
                  </label>
                  <input id="name" name="name" type="text" required className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone *
                  </label>
                  <input id="phone" name="phone" type="tel" required className={fieldClass} />
                </div>
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  Email *
                </label>
                <input id="email" name="email" type="email" required className={fieldClass} />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="childAge" className={labelClass}>
                    Child's age
                  </label>
                  <input
                    id="childAge"
                    name="childAge"
                    type="text"
                    placeholder="e.g. 18 months"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="startDate" className={labelClass}>
                    Preferred start date
                  </label>
                  <input id="startDate" name="startDate" type="date" className={fieldClass} />
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us a little about your child and what you're looking for."
                  className={`${fieldClass} resize-y`}
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-maroon px-6 py-3.5 font-semibold text-blush shadow-[0_8px_24px_-12px_rgba(124,42,53,0.7)] transition-all duration-200 hover:bg-maroon-deep hover:-translate-y-0.5 sm:w-auto"
              >
                Submit
                <Arrow className="h-4 w-4" />
              </button>

              <p className="text-sm text-ink/60">
                Clicking submit will open your email app to send us your message.
              </p>
            </form>
          </div>

          {/* ----------------------------------------------- DETAILS */}
          <div className="space-y-6">
            <div className="rounded-[16px] border border-sand bg-cream p-7">
              <h2 className="text-lg font-semibold text-ink">Get in touch</h2>
              <ul className="mt-5 space-y-5">
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-mist text-maroon">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-medium uppercase tracking-wide text-ink/55">Phone</p>
                    <a
                      href={business.phoneHref}
                      className="font-semibold text-maroon underline decoration-sand underline-offset-2 transition-colors duration-200 hover:text-maroon-deep hover:decoration-maroon"
                    >
                      {business.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-mist text-maroon">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-medium uppercase tracking-wide text-ink/55">Email</p>
                    <a
                      href={business.gmailHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-maroon underline decoration-sand underline-offset-2 transition-colors duration-200 hover:text-maroon-deep hover:decoration-maroon"
                    >
                      {business.emailDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-mist text-maroon">
                    <Pin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-medium uppercase tracking-wide text-ink/55">
                      Address
                    </p>
                    <a
                      href={business.mapsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-maroon underline decoration-sand underline-offset-2 transition-colors duration-200 hover:text-maroon-deep hover:decoration-maroon"
                    >
                      {business.area}
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-[16px] border border-sand bg-cream p-7">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-maroon" />
                <h2 className="text-lg font-semibold text-ink">Hours</h2>
              </div>
              <table className="mt-5 w-full text-sm">
                <caption className="sr-only">Weekly opening hours</caption>
                <tbody>
                  {hours.map((h) => {
                    const closed = h.time === 'Closed'
                    return (
                      <tr key={h.day} className="border-t border-sand first:border-t-0">
                        <th scope="row" className="py-2.5 text-left font-medium text-ink">
                          {h.day}
                        </th>
                        <td
                          className={`py-2.5 text-right ${
                            closed ? 'text-ink/45' : 'font-medium text-ink/85'
                          }`}
                        >
                          {h.time}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            <div className="rounded-[16px] border border-sand bg-mist/40 p-6">
              <h3 className="font-semibold text-ink">Enrollment</h3>
              <p className="mt-2 text-sm text-ink/75">
                Contact us to learn more about the enrollment process.
              </p>
            </div>
          </div>
        </div>

        {/* Payment info — secondary panel below the form, not beside it. */}
        <div className="mt-12 rounded-[16px] border border-sand bg-mist/30">
          <button
            type="button"
            onClick={() => setPaymentOpen((v) => !v)}
            aria-expanded={paymentOpen}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-sand/20"
          >
            <span>
              <span className="block text-sm font-semibold text-ink">Payment information</span>
              <span className="mt-0.5 block text-xs text-ink/60">
                For reference only — no payment is collected through this site.
              </span>
            </span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-ink/50 transition-transform duration-200 ${
                paymentOpen ? 'rotate-180' : ''
              }`}
            />
          </button>
          {paymentOpen && (
            <div className="border-t border-sand px-6 pb-6 pt-4">
              <p className="text-sm text-ink/75">
                We accept Zelle, checks, and cash. Payment details are shared during enrollment —
                this is informational only, not a payment form.
              </p>
              <p className="mt-4 flex items-baseline gap-2 text-sm">
                <span className="rounded-full bg-maroon/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-maroon">
                  Zelle
                </span>
                <span className="font-semibold text-ink">{business.zelleNumber}</span>
              </p>
            </div>
          )}
        </div>
      </Section>

      <CtaBand headline="Ready to get started?" />
    </>
  )
}
