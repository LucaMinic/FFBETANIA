import { PageHero } from '../../components/PageHero'
import pasti from '../../../assets/cosa-facciamo/pasti.jpg'

export function RaccoltaSmistamentoDistribuzionePage() {
  return (
    <>
      <PageHero
        image={pasti}
        title="Raccolta, smistamento e distribuzione"
        subtitle="Il lavoro quotidiano che rende possibile ogni gesto di solidarietà."
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <p className="text-gray-600 leading-relaxed mb-4">
        I fratelli della Fraternità si muovono ogni giorno per raccogliere generi alimentari e altri prodotti che le
        aziende scartano o destinano a scopi sociali, in collaborazione con il Banco Alimentare, aziende alimentari,
        ipermercati, mercati generali ortofrutticoli, aziende agricole e benefattori privati.
      </p>
      <p className="text-gray-600 leading-relaxed mb-4">
        Il centro di raccolta gestisce il flusso alimentare giornaliero: riceve, stocca e sistema i beni ricevuti da
        queste istituzioni e dalla generosità di amici e benefattori, utilizzandoli poi per le diverse attività di
        solidarietà della Fraternità.
      </p>
      <p className="text-gray-600 leading-relaxed mb-4">
        Da 40 anni facciamo esperienza di questo "miracolo della Divina Provvidenza" che continua quotidianamente. Il
        fondatore ci ha sempre stimolato a fare "sempre più e sempre meglio", citando le parole di Gesù: "Cercate
        anzitutto il Regno di Dio e tutte queste cose vi saranno date in sovrappiù" (Mt 6,33).
      </p>
      <blockquote className="border-l-4 border-[var(--warm-orange)] pl-4 italic text-gray-600">
        "Il Signore è fedele alle sue promesse; a noi è solo richiesto di rispondere con generosità ai suoi inviti."
      </blockquote>
      </section>
    </>
  )
}
