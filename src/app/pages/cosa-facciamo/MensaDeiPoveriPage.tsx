import { PageHero } from '../../components/PageHero'
import mensaPoveri from '../../../assets/cosa-facciamo/mensa-poveri.jpg'
import servizioCucina from '../../../assets/cosa-facciamo/servizio-cucina-mensa.png'
import { YouTubeEmbed } from '../../components/YouTubeEmbed'

export function MensaDeiPoveriPage() {
  return (
    <>
      <PageHero
        image={mensaPoveri}
        title="Mensa dei poveri"
        subtitle="Un pasto, un sorriso, un volto amico: il nostro servizio quotidiano ai più bisognosi."
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <p className="text-gray-600 leading-relaxed mb-4">
        La Fraternità distribuisce pasti in alcune mense delle loro Case fin dai primi anni della loro esperienza.
        Giorno dopo giorno, cerchiamo di entrare in relazione con chi bussa alla nostra porta, donandogli un sorriso,
        una parola di conforto, un volto amico con cui parlare e condividere la propria storia.
      </p>
      <p className="text-gray-600 leading-relaxed mb-4">
        Non esistono categorie astratte di poveri, ma persone con un volto, un nome, una storia, che hanno bisogno non
        solo di aiuto materiale, ma di ascolto e riconoscimento della dignità. Parole semplici, che però danno la
        possibilità di sentirsi considerati nella propria dignità di persone: questo rappresenta spesso il primo
        passo verso l'incontro con Dio per molte persone, conducendo a una nuova vita e a ritornare a sorridere.
      </p>
      <blockquote className="border-l-4 border-[var(--warm-orange)] pl-4 italic text-gray-600 mb-12">
        "Nel volto di ognuno di questi fratelli, spesso segnato dalla fatica e dalla sofferenza, riconosciamo quello
        di Gesù che si identifica nel povero."
      </blockquote>

      <img
        src={servizioCucina}
        alt="Servizio cucina mensa FFB Terlizzi"
        className="w-full max-h-80 object-cover rounded-2xl mb-16"
      />

      <YouTubeEmbed videoId="GXxjvapi5bE" title="La mensa dei poveri FFB" />
      </section>
    </>
  )
}
