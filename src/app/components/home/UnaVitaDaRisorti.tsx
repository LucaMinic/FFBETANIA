import { Link } from 'react-router'
import { HandHeart, DoorOpen, Users } from 'lucide-react'
import { AnimatedSection } from '../AnimatedSection'
import { YouTubeEmbed } from '../YouTubeEmbed'
import { useT } from '../../context/LanguageContext'
import preghiera from '../../../assets/case-di-fraternita/salvador-de-bahia/momento-preghiera-salvador.jpg'
import accoglienza from '../../../assets/cosa-facciamo/servizio-cucina-mensa.png'
import vitaFraterna from '../../../assets/case-di-fraternita/partanna/comunita-settembre-2024.png'

const pilastri = [
  {
    icon: HandHeart,
    titolo: { it: 'Preghiera', en: 'Prayer', de: 'Gebet', pt: 'Oração' },
    immagine: preghiera,
    citazione: {
      it: 'Essa aveva una sorella di nome Maria la quale, sedutasi ai piedi di Gesù, ascoltava la sua Parola',
      en: 'She had a sister called Mary, who sat at the Lord’s feet listening to what he said',
      de: 'Sie hatte eine Schwester namens Maria; die setzte sich dem Herrn zu Füßen und hörte seinen Worten zu',
      pt: 'Ela tinha uma irmã chamada Maria, que, sentada aos pés do Senhor, ouvia a sua palavra',
    },
    riferimento: 'Lc 10,38-42',
  },
  {
    icon: DoorOpen,
    titolo: { it: 'Accoglienza', en: 'Hospitality', de: 'Gastfreundschaft', pt: 'Acolhimento' },
    immagine: accoglienza,
    citazione: {
      it: 'Mentre erano in cammino, entrò in un villaggio e una donna di nome Marta, lo accolse nella sua casa',
      en: 'As Jesus and his disciples were on their way, he came to a village where a woman named Martha opened her home to him',
      de: 'Als sie weiterzogen, kam er in ein Dorf. Eine Frau namens Marta nahm ihn bei sich auf',
      pt: 'Enquanto caminhavam, Jesus entrou numa aldeia, e certa mulher, chamada Marta, o recebeu em sua casa',
    },
    riferimento: 'Lc 10,38-42',
  },
  {
    icon: Users,
    titolo: { it: 'Vita fraterna', en: 'Fraternal life', de: 'Brüderliches Leben', pt: 'Vida fraterna' },
    immagine: vitaFraterna,
    citazione: {
      it: 'Ecco quanto è buono e quanto è soave che i fratelli vivano insieme',
      en: 'Behold, how good and how pleasant it is for brethren to dwell together in unity',
      de: 'Siehe, wie fein und lieblich ist’s, wenn Brüder einträchtig beieinander wohnen',
      pt: 'Oh! Quão bom e quão suave é que os irmãos vivam em união',
    },
    riferimento: 'Sal 133',
  },
]

export function UnaVitaDaRisorti() {
  const t = useT()
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <p className="text-sm font-semibold text-[var(--warm-orange)] uppercase tracking-wide text-center mb-2">
            {t({
              it: 'I tre pilastri del carisma',
              en: 'The three pillars of the charism',
              de: 'Die drei Säulen des Charismas',
              pt: 'Os três pilares do carisma',
            })}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)] text-center mb-4">
            {t({
              it: 'Una vita da risorti',
              en: 'A risen life',
              de: 'Ein auferstandenes Leben',
              pt: 'Uma vida de ressuscitados',
            })}
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto leading-relaxed mb-14 sm:mb-16">
            {t({
              it: "Con la nostra consacrazione rispondiamo all'Amore di Dio che ci ha chiamato, vivendo ogni giorno i tre pilastri del carisma della Fraternità: la preghiera, l'accoglienza e la vita fraterna.",
              en: "With our consecration we respond to the Love of God who called us, living out every day the three pillars of the Fraternity's charism: prayer, hospitality and fraternal life.",
              de: 'Mit unserer Weihe antworten wir auf die Liebe Gottes, der uns berufen hat, und leben jeden Tag die drei Säulen des Charismas der Fraternität: Gebet, Gastfreundschaft und brüderliches Leben.',
              pt: 'Com a nossa consagração respondemos ao Amor de Deus que nos chamou, vivendo todos os dias os três pilares do carisma da Fraternidade: a oração, o acolhimento e a vida fraterna.',
            })}
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-x-8 gap-y-12 mb-16 sm:mb-20">
          {pilastri.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div
                className={`group aspect-[4/3] rounded-[2rem] overflow-hidden shadow-[0_12px_40px_-16px_rgba(93,74,58,0.35)] hover:shadow-[0_28px_60px_-16px_rgba(212,151,108,0.5)] hover:-translate-y-2 transition-all duration-500 ease-out ${i % 2 === 0 ? 'hover:rotate-[0.5deg]' : 'hover:rotate-[-0.5deg]'}`}
              >
                <img
                  src={p.immagine}
                  alt={t(p.titolo)}
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="flex items-center gap-3 mt-6 mb-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--beige)] shrink-0">
                  <p.icon className="w-5 h-5 text-[var(--warm-orange)]" />
                </span>
                <h3 className="text-2xl font-bold text-[var(--deep-blue)]">{t(p.titolo)}</h3>
              </div>
              <span className="block text-4xl leading-none text-[var(--warm-orange-light)] font-serif mb-1" aria-hidden="true">
                &ldquo;
              </span>
              <p className="text-lg text-[var(--deep-blue)]/90 italic leading-snug -mt-3 mb-2">{t(p.citazione)}</p>
              <p className="text-gray-400 text-xs">{p.riferimento}</p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="max-w-xl mx-auto text-center">
            <div className="rounded-[2rem] overflow-hidden shadow-lg mb-6">
              <YouTubeEmbed videoId="DoXUvPcTUwY" title="Fraternità Francescana di Betania - Una vita da risorti" />
            </div>
            <Link
              to="/chi-siamo/carisma"
              className="inline-block px-6 py-2.5 rounded-xl bg-[var(--deep-blue)] text-white font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              {t({ it: 'Scopri di più', en: 'Learn more', de: 'Mehr erfahren', pt: 'Saiba mais' })}
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
