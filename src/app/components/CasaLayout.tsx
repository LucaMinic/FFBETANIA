import { Link } from 'react-router'
import { ArrowLeft, MapPin, Calendar, Mail, Phone, Clock, Facebook, Instagram, Youtube, ExternalLink } from 'lucide-react'
import { PageHero } from './PageHero'
import { AnimatedImage, AnimatedSection } from './AnimatedSection'
import { CasaLocationMap } from './CasaLocationMap'
import { GallerySlideshow } from './GallerySlideshow'
import { useT } from '../context/LanguageContext'

interface GalleriaImg {
  src: string
  alt: string
}

interface CasaLayoutProps {
  nome: string
  luogo: string
  anno: string
  note?: string
  heroImage: string
  heroAlt: string
  paragrafi: string[]
  galleria: GalleriaImg[]
  indirizzo: string
  email: string
  telefono: string
  lat: number
  lng: number
  orari?: string[]
  contentNotice?: string
}

const telHref = (tel: string) => `tel:${tel.replace(/[^\d+]/g, '')}`

export function CasaLayout({
  nome,
  luogo,
  anno,
  note,
  heroImage,
  heroAlt,
  paragrafi,
  galleria,
  indirizzo,
  email,
  telefono,
  lat,
  lng,
  orari,
  contentNotice,
}: CasaLayoutProps) {
  const t = useT()
  const capitoli = paragrafi.map((testo, i) => ({ testo, img: galleria[i] }))
  const altreImmagini = galleria.slice(paragrafi.length)
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`

  return (
    <>
      <PageHero image={heroImage} title={nome} subtitle={luogo} imageAlt={heroAlt} />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Link
          to="/cosa-facciamo/case-di-fraternita"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--warm-orange)] hover:text-[var(--warm-orange-light)] mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t({
            it: 'Tutte le Case di Fraternità',
            en: 'All Houses of Fraternity',
            de: 'Alle Häuser der Fraternität',
            pt: 'Todas as Casas de Fraternidade',
          })}
        </Link>

        <AnimatedSection immediate>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 rounded-xl bg-[var(--beige)] px-4 py-2.5">
              <MapPin className="w-4 h-4 text-[var(--warm-orange)] shrink-0" />
              <span className="text-sm text-gray-600">{luogo}</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-[var(--beige)] px-4 py-2.5">
              <Calendar className="w-4 h-4 text-[var(--warm-orange)] shrink-0" />
              <span className="text-sm text-gray-600">
                {t({ it: 'dal', en: 'since', de: 'seit', pt: 'desde' })} {anno}
                {note ? ` — ${note}` : ''}
              </span>
            </div>
          </div>
          <p className="text-lg text-[var(--deep-blue)] font-medium italic leading-relaxed mb-16 max-w-2xl">
            {t({
              it: 'Chi viene a Betania non rimane spettatore: qui trovi una famiglia che prega, accoglie e cammina con te.',
              en: 'Those who come to Betania do not remain spectators: here you find a family that prays, welcomes and walks with you.',
              de: 'Wer nach Betania kommt, bleibt nicht Zuschauer: Hier findest du eine Familie, die betet, aufnimmt und mit dir geht.',
              pt: 'Quem vem a Betânia não permanece espectador: aqui você encontra uma família que reza, acolhe e caminha com você.',
            })}
          </p>
        </AnimatedSection>

        {capitoli.map(({ testo, img }, i) => (
          <div
            key={i}
            className={`mb-16 sm:mb-20 ${img ? 'grid sm:grid-cols-2 gap-8 sm:gap-12 items-center' : ''}`}
          >
            {img && (
              <AnimatedImage delay={0.1}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full h-72 sm:h-80 object-cover rounded-[2rem] shadow-lg ${i % 2 === 1 ? 'sm:order-last' : ''}`}
                />
              </AnimatedImage>
            )}
            <AnimatedSection direction={i % 2 === 1 ? 'left' : 'right'} delay={0.15}>
              <p className="text-gray-600 leading-relaxed">{testo}</p>
            </AnimatedSection>
          </div>
        ))}

        {contentNotice && <p className="text-xs text-gray-400 italic -mt-10 mb-16">{contentNotice}</p>}

        <AnimatedSection>
          <blockquote className="relative rounded-[2rem] bg-[var(--beige)] px-8 py-10 sm:px-14 sm:py-14 mb-16 sm:mb-20 text-center">
            <span className="block text-5xl sm:text-6xl text-[var(--warm-orange)]/40 font-serif leading-none mb-2">
              &ldquo;
            </span>
            <p className="text-lg sm:text-xl text-[var(--deep-blue)] font-medium italic leading-relaxed max-w-2xl mx-auto -mt-6 mb-4">
              {t({
                it: "Non sii talmente dedito all'attività di Marta da dimenticare il silenzio di Maria; la Vergine Madre che sì ben concilia l'uno e l'altro ufficio ti sia di dolce modello e di ispirazione.",
                en: 'Do not be so devoted to the activity of Martha that you forget the silence of Mary; may the Virgin Mother, who so well reconciles the one office with the other, be your sweet model and inspiration.',
                de: 'Sei nicht so sehr der Tätigkeit der Marta hingegeben, dass du das Schweigen der Maria vergisst; die Jungfrau und Mutter, die beide Ämter so gut vereint, sei dir liebevolles Vorbild und Inspiration.',
                pt: 'Não sejas tão dedicado à atividade de Marta a ponto de esqueceres o silêncio de Maria; a Virgem Mãe, que tão bem concilia um e outro ofício, seja para ti doce modelo e inspiração.',
              })}
            </p>
            <footer className="text-sm text-gray-500">
              {t({
                it: 'San Pio a Padre Pancrazio — il cuore del nostro carisma, vissuto ogni giorno anche qui',
                en: 'St. Pio to Father Pancrazio — the heart of our charism, lived out here too, every day',
                de: 'Pater Pio zu Pater Pancrazio — das Herz unseres Charismas, auch hier Tag für Tag gelebt',
                pt: 'São Pio ao Padre Pancrazio — o coração do nosso carisma, vivido também aqui todos os dias',
              })}
            </footer>
          </blockquote>
        </AnimatedSection>

        {altreImmagini.length > 0 && (
          <AnimatedSection>
            <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-6">
              {t({
                it: 'Altri momenti di vita della Casa',
                en: 'More moments from life at the House',
                de: 'Weitere Momente aus dem Leben des Hauses',
                pt: 'Outros momentos da vida da Casa',
              })}
            </h2>
            <div className="mb-16 sm:mb-20">
              <GallerySlideshow immagini={altreImmagini} />
            </div>
          </AnimatedSection>
        )}

        {orari && orari.length > 0 && (
          <AnimatedSection>
            <div className="rounded-2xl bg-[var(--beige)] p-6 sm:p-8 mb-16 sm:mb-20">
              <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[var(--warm-orange)]" />
                {t({
                  it: 'Orari e vita della comunità',
                  en: 'Schedule and community life',
                  de: 'Zeiten und Gemeinschaftsleben',
                  pt: 'Horários e vida da comunidade',
                })}
              </h2>
              <ul className="space-y-2.5">
                {orari.map((o, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--warm-orange)] mt-1.5 shrink-0" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        )}

        <AnimatedSection>
          <div className="rounded-[2rem] bg-gradient-to-br from-[var(--deep-blue)] to-[#4a5a69] p-8 sm:p-12 mb-16 sm:mb-20 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {t({ it: 'Vieni a trovarci', en: 'Come visit us', de: 'Besuche uns', pt: 'Venha nos visitar' })}
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-6 leading-relaxed">
              {t({
                it: `Le porte di ${nome} sono sempre aperte a chi cerca preghiera, silenzio o semplicemente una parola di conforto. Se senti il desiderio di venire, scrivici o chiamaci: saremo felici di accoglierti.`,
                en: `The doors of ${nome} are always open to those seeking prayer, silence or simply a word of comfort. If you feel the desire to come, write or call us: we will be happy to welcome you.`,
                de: `Die Türen von ${nome} stehen immer allen offen, die Gebet, Stille oder einfach ein tröstendes Wort suchen. Wenn du den Wunsch verspürst zu kommen, schreib oder ruf uns an: wir heißen dich gerne willkommen.`,
                pt: `As portas de ${nome} estão sempre abertas a quem procura oração, silêncio ou simplesmente uma palavra de conforto. Se sentir vontade de vir, escreva-nos ou ligue-nos: teremos o prazer de acolher você.`,
              })}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-br from-[#f5b942] via-[#f7c968] to-[#f5b942] text-white font-medium shadow-md hover:shadow-lg transition-all"
              >
                <Mail className="w-4 h-4" />
                {t({ it: 'Scrivici', en: 'Write to us', de: 'Schreib uns', pt: 'Escreva-nos' })}
              </a>
              <a
                href={telHref(telefono)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/40 text-white font-medium hover:bg-white/20 transition-all"
              >
                <Phone className="w-4 h-4" />
                {t({ it: 'Chiamaci', en: 'Call us', de: 'Ruf uns an', pt: 'Ligue para nós' })}
              </a>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-6">
            {t({ it: 'Dove siamo', en: 'Where we are', de: 'Wo wir sind', pt: 'Onde estamos' })}
          </h2>
          <div className="grid sm:grid-cols-2 gap-8 mb-16 sm:mb-20">
            <CasaLocationMap lat={lat} lng={lng} nome={nome} />
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--warm-orange)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--deep-blue)]">
                    {t({ it: 'Indirizzo', en: 'Address', de: 'Adresse', pt: 'Endereço' })}
                  </p>
                  <p className="text-sm text-gray-600">{indirizzo}</p>
                </div>
              </div>
              <a href={`mailto:${email}`} className="flex items-center gap-3 hover:text-[var(--warm-orange)]">
                <Mail className="w-5 h-5 text-[var(--warm-orange)] shrink-0" />
                <span className="text-sm text-gray-600">{email}</span>
              </a>
              <a href={telHref(telefono)} className="flex items-center gap-3 hover:text-[var(--warm-orange)]">
                <Phone className="w-5 h-5 text-[var(--warm-orange)] shrink-0" />
                <span className="text-sm text-gray-600">{telefono}</span>
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--warm-orange)] mt-2"
              >
                {t({ it: 'Apri in Google Maps', en: 'Open in Google Maps', de: 'In Google Maps öffnen', pt: 'Abrir no Google Maps' })}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="rounded-2xl border border-gray-100 p-6 sm:p-8 mb-16 sm:mb-20 text-center">
            <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-4">
              {t({ it: 'Seguici', en: 'Follow us', de: 'Folge uns', pt: 'Siga-nos' })}
            </h2>
            <p className="text-sm text-gray-500 mb-5">
              {t({
                it: 'Resta aggiornato sulla vita della Fraternità Francescana di Betania sui nostri canali social.',
                en: 'Stay up to date on the life of the Fraternità Francescana di Betania on our social channels.',
                de: 'Bleib über das Leben der Fraternità Francescana di Betania auf unseren Social-Media-Kanälen auf dem Laufenden.',
                pt: 'Mantenha-se atualizado sobre a vida da Fraternità Francescana di Betania nos nossos canais sociais.',
              })}
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://www.facebook.com/ffbetania/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-3 rounded-full bg-[var(--beige)] text-[var(--deep-blue)] hover:bg-[var(--warm-orange)] hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/ffbetania/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-3 rounded-full bg-[var(--beige)] text-[var(--deep-blue)] hover:bg-[var(--warm-orange)] hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC8bXgMxN36jQXagDdPpOwRA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-3 rounded-full bg-[var(--beige)] text-[var(--deep-blue)] hover:bg-[var(--warm-orange)] hover:text-white transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-6 text-center">
            <h2 className="font-bold text-[var(--deep-blue)] mb-2">
              {t({ it: 'News da', en: 'News from', de: 'Neuigkeiten aus', pt: 'Notícias de' })} {nome}
            </h2>
            <p className="text-gray-500 text-sm">
              {t({
                it: 'Le notizie e gli aggiornamenti da questa Casa saranno pubblicati qui a breve.',
                en: 'News and updates from this House will be published here soon.',
                de: 'Neuigkeiten und Updates aus diesem Haus werden hier in Kürze veröffentlicht.',
                pt: 'As notícias e atualizações desta Casa serão publicadas aqui em breve.',
              })}
            </p>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
