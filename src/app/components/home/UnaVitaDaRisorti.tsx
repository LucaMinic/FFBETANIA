import { Link } from 'react-router'
import { HandHeart, DoorOpen, Users } from 'lucide-react'
import { AnimatedImage, AnimatedSection } from '../AnimatedSection'
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
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)] text-center mb-12">
            {t({
              it: 'Una vita da risorti',
              en: 'A risen life',
              de: 'Ein auferstandenes Leben',
              pt: 'Uma vida de ressuscitados',
            })}
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-12 items-center mb-16 sm:mb-20">
          <AnimatedImage>
            <div className="shadow-xl rounded-[2rem] overflow-hidden">
              <YouTubeEmbed videoId="DoXUvPcTUwY" title="Fraternità Francescana di Betania - Una vita da risorti" />
            </div>
          </AnimatedImage>
          <AnimatedSection direction="right" delay={0.15}>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t({
                it: "Con la nostra consacrazione rispondiamo all'Amore di Dio che ci ha chiamato, incarnandolo nel nostro oggi attraverso i tre pilastri del carisma della Fraternità: la preghiera, l'accoglienza e la vita fraterna.",
                en: 'With our consecration we respond to the Love of God who called us, embodying it in our today through the three pillars of the Fraternity’s charism: prayer, hospitality and fraternal life.',
                de: 'Mit unserer Weihe antworten wir auf die Liebe Gottes, der uns berufen hat, und leben sie heute durch die drei Säulen des Charismas der Fraternität: Gebet, Gastfreundschaft und brüderliches Leben.',
                pt: 'Com a nossa consagração respondemos ao Amor de Deus que nos chamou, encarnando-o hoje através dos três pilares do carisma da Fraternidade: a oração, o acolhimento e a vida fraterna.',
              })}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t({
                it: "Vivere insieme come una famiglia nel Signore dà senso alla nostra vita, con la preghiera che ci spinge a donarci e ad essere tutti Suoi e l'accoglienza che ci apre al mondo.",
                en: 'Living together as a family in the Lord gives meaning to our life, with prayer urging us to give ourselves and to be all His, and hospitality opening us to the world.',
                de: 'Das gemeinsame Leben als Familie im Herrn gibt unserem Leben Sinn: Das Gebet treibt uns an, uns hinzugeben und ganz Sein zu sein, und die Gastfreundschaft öffnet uns der Welt.',
                pt: 'Viver juntos como uma família no Senhor dá sentido à nossa vida, com a oração que nos impulsiona a nos doar e a sermos todos Seus, e o acolhimento que nos abre ao mundo.',
              })}
            </p>
            <Link
              to="/chi-siamo/carisma"
              className="inline-block px-6 py-2.5 rounded-xl bg-[var(--deep-blue)] text-white font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              {t({ it: 'Scopri di più', en: 'Learn more', de: 'Mehr erfahren', pt: 'Saiba mais' })}
            </Link>
          </AnimatedSection>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {pilastri.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div
                className={`group relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-[0_12px_40px_-16px_rgba(0,0,0,0.5)] hover:shadow-[0_28px_60px_-16px_rgba(212,151,108,0.5)] hover:-translate-y-2 transition-all duration-500 ease-out ${i % 2 === 0 ? 'hover:rotate-[0.5deg]' : 'hover:rotate-[-0.5deg]'}`}
              >
                <img
                  src={p.immagine}
                  alt={t(p.titolo)}
                  className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-125 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-blue)] via-[var(--deep-blue)]/50 to-[var(--deep-blue)]/10 group-hover:via-[var(--deep-blue)]/65 transition-all duration-500" />

                <div className="absolute inset-x-0 bottom-0 p-7">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 ease-out">
                    <p.icon className="w-5 h-5 text-[var(--warm-orange-light)]" />
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{t(p.titolo)}</h3>
                  <p className="text-white/85 italic text-sm leading-relaxed">&ldquo;{t(p.citazione)}&rdquo;</p>
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
