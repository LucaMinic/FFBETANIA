import { useState, type FormEvent } from 'react'
import { useT } from '../context/LanguageContext'

interface PlaceholderFormProps {
  submitLabel: string
  contactEmail: string
  withMessage?: boolean
}

export function PlaceholderForm({ submitLabel, contactEmail, withMessage = true }: PlaceholderFormProps) {
  const t = useT()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto text-left space-y-4">
      <div>
        <label className="block text-sm font-semibold text-[var(--deep-blue)] mb-1">
          {t({ it: 'Nome', en: 'Name', de: 'Name', pt: 'Nome' })}
        </label>
        <input
          type="text"
          className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--warm-orange)]"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-[var(--deep-blue)] mb-1">Email</label>
        <input
          type="email"
          className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--warm-orange)]"
        />
      </div>
      {withMessage && (
        <div>
          <label className="block text-sm font-semibold text-[var(--deep-blue)] mb-1">
            {t({ it: 'Messaggio', en: 'Message', de: 'Nachricht', pt: 'Mensagem' })}
          </label>
          <textarea
            rows={4}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--warm-orange)]"
          />
        </div>
      )}

      <button
        type="submit"
        className="px-6 py-2.5 rounded-xl bg-gradient-to-br from-[#f5b942] via-[#f7c968] to-[#f5b942] text-white font-medium shadow-md hover:shadow-lg transition-all"
      >
        {submitLabel}
      </button>

      {submitted && (
        <p className="text-sm text-gray-500">
          {t({
            it: 'Questo modulo sarà presto collegato al nostro gestionale. Nel frattempo scrivici a',
            en: 'This form will soon be connected to our system. In the meantime, write to us at',
            de: 'Dieses Formular wird bald mit unserem System verbunden. In der Zwischenzeit schreib uns an',
            pt: 'Este formulário será em breve ligado ao nosso sistema. Enquanto isso, escreva-nos para',
          })}{' '}
          <a href={`mailto:${contactEmail}`} className="text-[var(--warm-orange)] font-semibold">
            {contactEmail}
          </a>
          .
        </p>
      )}
    </form>
  )
}
