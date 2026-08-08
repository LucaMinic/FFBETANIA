import { Link } from 'react-router'
import { HandHeart, DoorOpen, Users } from 'lucide-react'
import { AnimatedImage, AnimatedSection } from '../AnimatedSection'
import { YouTubeEmbed } from '../YouTubeEmbed'
import preghiera from '../../../assets/case-di-fraternita/salvador-de-bahia/momento-preghiera-salvador.jpg'
import accoglienza from '../../../assets/cosa-facciamo/servizio-cucina-mensa.png'
import vitaFraterna from '../../../assets/case-di-fraternita/partanna/comunita-settembre-2024.png'

const pilastri = [
  {
    icon: HandHeart,
    titolo: 'Preghiera',
    immagine: preghiera,
    citazione: 'Essa aveva una sorella di nome Maria la quale, sedutasi ai piedi di Gesù, ascoltava la sua Parola',
    riferimento: 'Lc 10,38-42',
  },
  {
    icon: DoorOpen,
    titolo: 'Accoglienza',
    immagine: accoglienza,
    citazione: 'Mentre erano in cammino, entrò in un villaggio e una donna di nome Marta, lo accolse nella sua casa',
    riferimento: 'Lc 10,38-42',
  },
  {
    icon: Users,
    titolo: 'Vita fraterna',
    immagine: vitaFraterna,
    citazione: 'Ecco quanto è buono e quanto è soave che i fratelli vivano insieme',
    riferimento: 'Sal 133',
  },
]

export function UnaVitaDaRisorti() {
  return (
    <section className="py-16 sm:py-24 bg-[var(--deep-blue)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <p className="text-sm font-semibold text-[var(--warm-orange)] uppercase tracking-wide text-center mb-2">
            I tre pilastri del carisma
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Una vita da risorti</h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-12 items-center mb-16 sm:mb-20">
          <AnimatedImage>
            <div className="shadow-xl rounded-[2rem] overflow-hidden">
              <YouTubeEmbed videoId="DoXUvPcTUwY" title="Fraternità Francescana di Betania - Una vita da risorti" />
            </div>
          </AnimatedImage>
          <AnimatedSection direction="right" delay={0.15}>
            <p className="text-white/90 leading-relaxed mb-4">
              Con la nostra consacrazione rispondiamo all'Amore di Dio che ci ha chiamato, incarnandolo nel nostro
              oggi attraverso i tre pilastri del carisma della Fraternità: la preghiera, l'accoglienza e la vita
              fraterna.
            </p>
            <p className="text-white/90 leading-relaxed mb-6">
              Vivere insieme come una famiglia nel Signore dà senso alla nostra vita, con la preghiera che ci spinge
              a donarci e ad essere tutti Suoi e l'accoglienza che ci apre al mondo.
            </p>
            <Link
              to="/chi-siamo/carisma"
              className="inline-block px-6 py-2.5 rounded-xl bg-white text-[var(--deep-blue)] font-medium shadow-md hover:shadow-lg transition-all"
            >
              Scopri di più
            </Link>
          </AnimatedSection>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {pilastri.map((p, i) => (
            <AnimatedSection key={p.titolo} delay={i * 0.1}>
              <div className="h-full rounded-[1.5rem] bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img src={p.immagine} alt={p.titolo} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <p.icon className="w-6 h-6 text-[var(--warm-orange)] mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">{p.titolo}</h3>
                  <p className="text-white/80 italic text-sm leading-relaxed">&ldquo;{p.citazione}&rdquo;</p>
                  <p className="text-white/50 text-xs mt-2">{p.riferimento}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
