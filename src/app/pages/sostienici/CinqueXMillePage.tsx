import { PageHero } from '../../components/PageHero'
import { useT } from '../../context/LanguageContext'
import banner from '../../../assets/sostienici/5x1000-banner.png'
import plasticoScuola from '../../../assets/sostienici/5x1000-plastico-scuola.png'
import locandinaPdf from '../../../assets/sostienici/locandina-5x1000-2026.pdf'

export function CinqueXMillePage() {
  const t = useT()
  return (
    <>
      <PageHero
        image={banner}
        title="5x1000"
        subtitle={t({
          it: 'Non ti costa nulla, ma per noi fa una grande differenza.',
          en: "It costs you nothing, but it makes a big difference for us.",
          de: 'Es kostet dich nichts, aber für uns macht es einen großen Unterschied.',
          pt: 'Não custa nada a você, mas para nós faz uma grande diferença.',
        })}
        imageAlt="5x1000 Fondazione Betania ETS"
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
      <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
        {t({
          it: 'Destina il tuo 5x1000 alla Fondazione Betania Onlus/ETS: non ti costa nulla, ma per noi fa una grande differenza. Basta indicare il nostro codice fiscale nella tua dichiarazione dei redditi.',
          en: 'Designate your 5x1000 to Fondazione Betania Onlus/ETS (Italian tax return only): it costs you nothing, but it makes a big difference for us. Just write our tax code on your Italian tax return.',
          de: 'Bestimme dein italienisches 5x1000 für die Fondazione Betania Onlus/ETS: Es kostet dich nichts, macht für uns aber einen großen Unterschied. Trage einfach unsere Steuernummer in deine italienische Steuererklärung ein.',
          pt: 'Destine o seu 5x1000 (imposto italiano) à Fondazione Betania Onlus/ETS: não custa nada, mas para nós faz uma grande diferença. Basta indicar o nosso código fiscal na sua declaração de rendimentos na Itália.',
        })}
      </p>

      <div className="inline-block rounded-2xl bg-[var(--beige)] px-8 py-6 mb-10">
        <p className="text-sm text-gray-500 mb-1">
          {t({ it: 'Codice Fiscale', en: 'Tax Code', de: 'Steuernummer', pt: 'Código Fiscal' })}
        </p>
        <p className="text-2xl font-bold text-[var(--deep-blue)] tracking-wide">93346130722</p>
        <p className="text-sm text-gray-500 mt-1">Fondazione Betania Onlus</p>
      </div>

      <img
        src={plasticoScuola}
        alt="Progetto scuola Brasile - esempio di utilizzo dei fondi"
        className="w-full max-h-96 object-cover rounded-2xl mb-4"
      />
      <p className="text-sm text-gray-500 mb-10">
        {t({
          it: 'Un esempio concreto: i fondi del 5x1000 contribuiscono anche alla realizzazione della scuola per il Progetto Brasile a Salvador de Bahia.',
          en: 'A concrete example: 5x1000 funds also contribute to building the school for the Brazil Project in Salvador de Bahia.',
          de: 'Ein konkretes Beispiel: Die Mittel aus dem 5x1000 tragen auch zum Bau der Schule für das Brasilien-Projekt in Salvador de Bahia bei.',
          pt: 'Um exemplo concreto: os fundos do 5x1000 também contribuem para a construção da escola do Projeto Brasil em Salvador da Bahia.',
        })}
      </p>

      <a
        href={locandinaPdf}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2.5 rounded-xl bg-[var(--deep-blue)] text-white font-medium shadow-md hover:shadow-lg transition-all"
      >
        {t({ it: 'Scarica la locandina 5x1000', en: 'Download the 5x1000 flyer', de: 'Lade das 5x1000-Plakat herunter', pt: 'Baixe o cartaz do 5x1000' })}
      </a>
      </section>
    </>
  )
}
