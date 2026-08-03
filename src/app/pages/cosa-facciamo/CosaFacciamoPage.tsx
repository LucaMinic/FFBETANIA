import { Link } from 'react-router'
import { YouTubeEmbed } from '../../components/YouTubeEmbed'
import pasti from '../../../assets/cosa-facciamo/pasti.jpg'
import mensaPoveri from '../../../assets/cosa-facciamo/mensa-poveri.jpg'
import sostegnoFamiglie from '../../../assets/cosa-facciamo/sostegno-alle-famiglie.jpg'
import servizioCucina from '../../../assets/cosa-facciamo/servizio-cucina-mensa.png'

export function CosaFacciamoPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)] mb-6 text-center">Cosa facciamo</h1>

      <blockquote className="border-l-4 border-[var(--warm-orange)] pl-4 italic text-gray-600 mb-6">
        "Ogni volta che avete fatto queste cose a uno solo di questi miei fratelli più piccoli, l'avete fatto a me."
        (Mt 25,40)
      </blockquote>

      <p className="text-gray-600 leading-relaxed mb-4">
        I fratelli e sorelle della FFB cercano di rispondere alle parole di Gesù attraverso il loro servizio
        quotidiano di solidarietà rivolto ai "piccoli" dei territori in cui sorgono le nostre Case. L'impegno
        s'inserisce in uno dei pilastri del carisma: l'accoglienza, attraverso cui il Signore chiama ad "allargare il
        cuore e ad allungare le braccia" verso chi vive povertà materiali e spirituali.
      </p>
      <p className="text-gray-500 text-sm italic mb-12">
        "L'uomo sogna e Dio realizza." — "L'Amore, quello con la A maiuscola, annulla le distanze." — Padre Pancrazio
      </p>

      <div className="grid sm:grid-cols-2 gap-8 items-center mb-16">
        <img src={mensaPoveri} alt="Mensa dei poveri" className="w-full h-64 object-cover rounded-2xl" />
        <div>
          <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-3">Mensa dei poveri</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            La Fraternità distribuisce pasti in alcune mense delle loro Case fin dai primi anni della loro esperienza.
            Giorno dopo giorno, cerchiamo di entrare in relazione con chi bussa alla nostra porta, donandogli un
            sorriso, una parola di conforto, un volto amico con cui parlare e condividere la propria storia.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Non esistono categorie astratte di poveri, ma persone con un volto, un nome, una storia. Nel volto di
            ognuno di questi fratelli, spesso segnato dalla fatica e dalla sofferenza, riconosciamo quello di Gesù che
            si identifica nel povero.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-8 items-center mb-16">
        <div className="sm:order-2">
          <img src={sostegnoFamiglie} alt="Sostegno alle famiglie" className="w-full h-64 object-cover rounded-2xl" />
        </div>
        <div className="sm:order-1">
          <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-3">Sostegno alle famiglie</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Incontriamo ogni giorno padri di famiglia che hanno perso il lavoro, madri sole, famiglie numerose e
            anziani in difficoltà economiche. Li accogliamo tutti con amore, ascoltando innanzitutto i loro bisogni.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Distribuiamo mensilmente pacchi alimentari ricchi (pasta, riso, olio, legumi, latte e biscotti) ricevuti
            dal Banco Alimentare, oltre a vestiario e prodotti per l'infanzia quando possibile. "Condividere ciò che
            la Provvidenza ci fa pervenire è per noi motivo di grande gioia."
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-8 items-center mb-8">
        <img src={pasti} alt="Raccolta e distribuzione" className="w-full h-64 object-cover rounded-2xl" />
        <div>
          <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-3">Raccolta, smistamento e distribuzione</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            I fratelli della Fraternità si muovono ogni giorno per raccogliere generi alimentari e altri prodotti che
            le aziende scartano o destinano a scopi sociali, in collaborazione con il Banco Alimentare, aziende
            alimentari, mercati generali e benefattori privati.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Da 40 anni facciamo esperienza di questo "miracolo della Divina Provvidenza" che continua quotidianamente:
            "Cercate anzitutto il Regno di Dio e tutte queste cose vi saranno date in sovrappiù" (Mt 6,33).
          </p>
        </div>
      </div>

      <img
        src={servizioCucina}
        alt="Servizio cucina mensa FFB Terlizzi"
        className="w-full max-h-80 object-cover rounded-2xl mb-16"
      />

      <div className="mb-16">
        <YouTubeEmbed videoId="GXxjvapi5bE" title="Attività di solidarietà FFB" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Link
          to="/progetto-brasile"
          className="rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
        >
          <h3 className="font-bold text-[var(--deep-blue)] mb-1">Progetto Brasile</h3>
          <p className="text-sm text-gray-500">Il centro di accoglienza a Salvador de Bahia.</p>
        </Link>
        <Link
          to="/cosa-facciamo/case-di-fraternita"
          className="rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
        >
          <h3 className="font-bold text-[var(--deep-blue)] mb-1">Dove siamo</h3>
          <p className="text-sm text-gray-500">Le nostre Case di Fraternità.</p>
        </Link>
      </div>
    </section>
  )
}
