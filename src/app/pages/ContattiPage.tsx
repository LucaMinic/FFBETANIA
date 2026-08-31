import { PlaceholderForm } from '../components/PlaceholderForm'
import { PageHero } from '../components/PageHero'
import { useT } from '../context/LanguageContext'
import heroImg from '../../assets/cosa-facciamo/case-di-fraternita-hero.jpg'

export function ContattiPage() {
  const t = useT()
  return (
    <>
      <PageHero
        image={heroImg}
        title={t({ it: 'Contatti', en: 'Contact', de: 'Kontakt', pt: 'Contato' })}
        subtitle={t({
          it: 'Scrivici, vieni a trovarci o seguici sui social: siamo felici di ascoltarti.',
          en: 'Write to us, come visit, or follow us on social media: we’re happy to hear from you.',
          de: 'Schreib uns, besuche uns oder folge uns in den sozialen Medien: wir hören dir gerne zu.',
          pt: 'Escreva-nos, venha nos visitar ou siga-nos nas redes sociais: temos o prazer de ouvir você.',
        })}
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-4 text-center">
        {t({
          it: 'Lasciaci un messaggio o la tua richiesta di preghiera',
          en: 'Leave us a message or your prayer request',
          de: 'Hinterlasse uns eine Nachricht oder dein Gebetsanliegen',
          pt: 'Deixe-nos uma mensagem ou o seu pedido de oração',
        })}
      </h2>
      <div className="mb-16">
        <PlaceholderForm
          submitLabel={t({ it: 'Invia', en: 'Send', de: 'Senden', pt: 'Enviar' })}
          contactEmail="info@ffbetania.net"
        />
      </div>

      <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-4 text-center">Fraternità Francescana di Betania</h2>
      <div className="grid sm:grid-cols-2 gap-6 mb-16 max-w-lg mx-auto">
        <div className="rounded-2xl border border-gray-100 p-5 text-center">
          <p className="font-bold text-[var(--deep-blue)] mb-1">
            {t({ it: 'Curia Generalizia', en: 'General Curia', de: 'Generalkurie', pt: 'Cúria Geral' })}
          </p>
          <p className="text-sm text-gray-500">Via Pasquale Fiore 143 – 70038 Terlizzi (BA)</p>
          <p className="text-sm text-gray-500">CF 93017320727</p>
          <p className="text-sm text-gray-500 mt-2">
            <a href="mailto:info@ffbetania.net" className="text-[var(--warm-orange)] font-semibold">
              info@ffbetania.net
            </a>
          </p>
          <p className="text-sm text-gray-500">
            <a href="tel:+390803517712" className="text-[var(--warm-orange)] font-semibold">
              080 351 77 12
            </a>
          </p>
        </div>
        <div className="rounded-2xl border border-gray-100 p-5 text-center">
          <p className="font-bold text-[var(--deep-blue)] mb-1">Fraternità Francescana di Betania Fondazione ETS</p>
          <p className="text-sm text-gray-500">Via Pasquale Fiore 143 – 70038 Terlizzi (BA)</p>
          <p className="text-sm text-gray-500">CF 93346130722</p>
          <p className="text-sm text-gray-500 mt-2">
            <a href="mailto:fondazione@ffbetania.net" className="text-[var(--warm-orange)] font-semibold">
              fondazione@ffbetania.net
            </a>
          </p>
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden mb-16">
        <iframe
          title="Sede FFBetania - Terlizzi"
          src="https://www.google.com/maps?q=41.13272957928831,16.532682215222547&z=15&output=embed"
          className="w-full h-80 border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-4 text-center">
        {t({ it: 'Seguici su', en: 'Follow us on', de: 'Folge uns auf', pt: 'Siga-nos em' })}
      </h2>
      <div className="flex items-center justify-center gap-6">
        <a
          href="https://www.facebook.com/ffbetania/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--deep-blue)] hover:text-[var(--warm-orange)] font-semibold"
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com/ffbetania/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--deep-blue)] hover:text-[var(--warm-orange)] font-semibold"
        >
          Instagram
        </a>
        <a
          href="https://www.youtube.com/channel/UC8bXgMxN36jQXagDdPpOwRA"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--deep-blue)] hover:text-[var(--warm-orange)] font-semibold"
        >
          YouTube
        </a>
      </div>
      </section>
    </>
  )
}
