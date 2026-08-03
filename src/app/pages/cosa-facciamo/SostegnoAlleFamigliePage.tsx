import { PageHero } from '../../components/PageHero'
import sostegnoFamiglie from '../../../assets/cosa-facciamo/sostegno-alle-famiglie.jpg'

export function SostegnoAlleFamigliePage() {
  return (
    <>
      <PageHero
        image={sostegnoFamiglie}
        title="Sostegno alle famiglie"
        subtitle="Accanto a chi vive momenti di difficoltà, con ascolto e concretezza."
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <p className="text-gray-600 leading-relaxed mb-4">
        Incontriamo ogni giorno padri di famiglia che hanno perso il lavoro, madri sole, famiglie numerose e anziani
        in difficoltà economiche. Li accogliamo tutti con amore, ascoltando innanzitutto i loro bisogni e le
        motivazioni che li spingono a chiedere aiuto.
      </p>
      <p className="text-gray-600 leading-relaxed mb-4">
        Distribuiamo mensilmente pacchi alimentari ricchi, preparati con attenzione e cura, contenenti pasta, riso,
        olio, legumi, latte e biscotti ricevuti dal Banco Alimentare, oltre a tanta altra provvidenza che il Signore
        ci manda nella sua infinita Misericordia. Quando possibile, doniamo anche vestiario e prodotti per l'infanzia
        a donne incinte o con bambini piccoli.
      </p>
      <p className="text-gray-600 leading-relaxed mb-4">
        Spesso, in questo tipo di sostegno, ci aiutano altre mamme, creando una vera e propria rete di solidarietà.
        Nel servizio cerchiamo di offrire una parola di conforto e di incoraggiamento, in particolar modo nelle
        situazioni più difficili, attraverso gesti semplici come chiamare le persone per nome e ricordare le loro
        storie.
      </p>
      <blockquote className="border-l-4 border-[var(--warm-orange)] pl-4 italic text-gray-600">
        "Condividere ciò che la Provvidenza ci fa pervenire è per noi motivo di grande gioia, un dono nel quale
        vediamo la mano buona di Dio all'opera."
      </blockquote>
      </section>
    </>
  )
}
