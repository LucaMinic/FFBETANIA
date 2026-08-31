import { useState } from 'react'
import { Link } from 'react-router'
import { Copy, Check } from 'lucide-react'
import { PageHero } from '../../components/PageHero'
import { useT } from '../../context/LanguageContext'
import asilo from '../../../assets/progetto-brasile/asilo.jpg'
import flagBrasil from '../../../assets/sostienici/flag-brasil.png'
import flagItalia from '../../../assets/sostienici/flag-italia.png'
import flagEu from '../../../assets/sostienici/flag-eu.svg'
import qrPix from '../../../assets/sostienici/qr-pix.jpeg'

interface LocalizedString {
  it: string
  en: string
  de: string
  pt: string
}

interface Importo {
  euro: number
  copertura: LocalizedString
}

const importi: Importo[] = [
  {
    euro: 40,
    copertura: { it: '1/3 dei costi reali', en: '1/3 of the real costs', de: '1/3 der tatsächlichen Kosten', pt: '1/3 dos custos reais' },
  },
  {
    euro: 80,
    copertura: { it: '2/3 dei costi reali', en: '2/3 of the real costs', de: '2/3 der tatsächlichen Kosten', pt: '2/3 dos custos reais' },
  },
  {
    euro: 120,
    copertura: {
      it: "l'intera spesa mensile",
      en: 'the entire monthly cost',
      de: 'die gesamten monatlichen Kosten',
      pt: 'toda a despesa mensal',
    },
  },
]

export function SostegnoADistanzaPage() {
  const t = useT()
  const [copiedPix, setCopiedPix] = useState(false)
  const [copiedIban, setCopiedIban] = useState(false)

  const copy = (text: string, setCopied: (v: boolean) => void) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <PageHero
        image={asilo}
        title={t({ it: 'Sostegno a distanza', en: 'Long-distance support', de: 'Patenschaften', pt: 'Apadrinhamento à distância' })}
        subtitle={t({
          it: 'Aiuta un bambino del Progetto Brasile a crescere, studiare e sognare un futuro migliore.',
          en: 'Help a child from the Brazil Project grow, study and dream of a better future.',
          de: 'Hilf einem Kind des Brasilien-Projekts, aufzuwachsen, zu lernen und von einer besseren Zukunft zu träumen.',
          pt: 'Ajude uma criança do Projeto Brasil a crescer, estudar e sonhar com um futuro melhor.',
        })}
        imageAlt="Asilo Nossa Senhora Aparecida"
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <p className="text-lg text-gray-600 leading-relaxed text-center mb-12">
        {t({
          it: "Con il sostegno a distanza puoi aiutare un bambino a ricevere un'istruzione adeguata, sostenendo le spese vive per le sue attività formative presso il",
          en: 'With long-distance support you can help a child receive an adequate education, covering the actual costs of their formative activities at the',
          de: 'Mit einer Patenschaft kannst du einem Kind helfen, eine angemessene Bildung zu erhalten, indem du die tatsächlichen Kosten für seine Bildungsaktivitäten im Rahmen des',
          pt: 'Com o apadrinhamento à distância você pode ajudar uma criança a receber uma educação adequada, custeando as despesas das suas atividades formativas no',
        })}{' '}
        <Link to="/progetto-brasile" className="text-[var(--warm-orange)] font-semibold">
          {t({ it: 'Progetto Brasile', en: 'Brazil Project', de: 'Brasilien-Projekt', pt: 'Projeto Brasil' })}
        </Link>
        {t({ it: ', a Salvador de Bahia.', en: ', in Salvador de Bahia.', de: ' übernimmst, in Salvador de Bahia.', pt: ', em Salvador da Bahia.' })}
      </p>

      <div className="grid sm:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-2">
            {t({ it: 'Chi sostieni', en: 'Who you support', de: 'Wen du unterstützt', pt: 'Quem você apoia' })}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {t({
              it: 'Un bambino dai 4 mesi ai 5 anni e 11 mesi delle favelas del quartiere di São Cristóvão, Salvador de Bahia.',
              en: 'A child aged 4 months to 5 years and 11 months from the favelas of the São Cristóvão district, Salvador de Bahia.',
              de: 'Ein Kind im Alter von 4 Monaten bis 5 Jahren und 11 Monaten aus den Favelas des Stadtteils São Cristóvão, Salvador de Bahia.',
              pt: 'Uma criança de 4 meses a 5 anos e 11 meses das favelas do bairro de São Cristóvão, Salvador da Bahia.',
            })}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-2">
            {t({ it: 'Cosa riceverai', en: 'What you will receive', de: 'Was du erhältst', pt: 'O que você vai receber' })}
          </h2>
          <ul className="text-gray-600 space-y-1 list-disc list-inside">
            <li>{t({ it: 'Foto del bambino e della sua classe', en: 'Photo of the child and their class', de: 'Foto des Kindes und seiner Klasse', pt: 'Foto da criança e da sua turma' })}</li>
            <li>{t({ it: 'Attestato di sostegno a distanza', en: 'Long-distance support certificate', de: 'Patenschaftsurkunde', pt: 'Certificado de apadrinhamento à distância' })}</li>
            <li>{t({ it: 'Rapporto annuale', en: 'Annual report', de: 'Jahresbericht', pt: 'Relatório anual' })}</li>
            <li>{t({ it: 'Aggiornamenti sui progetti', en: 'Project updates', de: 'Projekt-Updates', pt: 'Atualizações sobre os projetos' })}</li>
            <li>{t({ it: 'Attestato fiscale (su richiesta)', en: 'Tax certificate (on request)', de: 'Steuerbescheinigung (auf Anfrage)', pt: 'Certificado fiscal (mediante pedido)' })}</li>
          </ul>
        </div>
      </div>

      <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-4 text-center">
        {t({ it: 'Servizi inclusi', en: 'Services included', de: 'Inbegriffene Leistungen', pt: 'Serviços incluídos' })}
      </h2>
      <div className="grid sm:grid-cols-2 gap-4 mb-12">
        <div className="rounded-2xl border border-gray-100 p-5">
          <h3 className="font-bold text-[var(--deep-blue)] mb-1">
            {t({ it: 'Scuola a tempo pieno', en: 'Full-time school', de: 'Ganztagsschule', pt: 'Escola em tempo integral' })}
          </h3>
          <p className="text-sm text-gray-500">{t({ it: 'Dalle 7:30 alle 16:30.', en: '7:30 am to 4:30 pm.', de: '7:30 bis 16:30 Uhr.', pt: 'Das 7h30 às 16h30.' })}</p>
        </div>
        <div className="rounded-2xl border border-gray-100 p-5">
          <h3 className="font-bold text-[var(--deep-blue)] mb-1">
            {t({ it: 'Attività ordinarie', en: 'Regular activities', de: 'Regelmäßige Aktivitäten', pt: 'Atividades regulares' })}
          </h3>
          <p className="text-sm text-gray-500">
            {t({
              it: 'Educative, per lo sviluppo di socialità, valori e motricità.',
              en: 'Educational, for the development of social skills, values and motor skills.',
              de: 'Pädagogisch, zur Entwicklung von Sozialkompetenz, Werten und motorischen Fähigkeiten.',
              pt: 'Educativas, para o desenvolvimento da socialização, valores e motricidade.',
            })}
          </p>
        </div>
        <div className="rounded-2xl border border-gray-100 p-5">
          <h3 className="font-bold text-[var(--deep-blue)] mb-1">
            {t({ it: 'Cinque pasti al giorno', en: 'Five meals a day', de: 'Fünf Mahlzeiten am Tag', pt: 'Cinco refeições por dia' })}
          </h3>
          <p className="text-sm text-gray-500">
            {t({ it: 'Colazione, due merende, pranzo e cena.', en: 'Breakfast, two snacks, lunch and dinner.', de: 'Frühstück, zwei Snacks, Mittag- und Abendessen.', pt: 'Café da manhã, dois lanches, almoço e jantar.' })}
          </p>
        </div>
        <div className="rounded-2xl border border-gray-100 p-5">
          <h3 className="font-bold text-[var(--deep-blue)] mb-1">
            {t({ it: 'Attività speciali', en: 'Special activities', de: 'Besondere Aktivitäten', pt: 'Atividades especiais' })}
          </h3>
          <p className="text-sm text-gray-500">
            {t({
              it: 'Gite, formazione specializzata, supporto psicologico, divise.',
              en: 'Field trips, specialized training, psychological support, uniforms.',
              de: 'Ausflüge, Fachschulungen, psychologische Unterstützung, Schuluniformen.',
              pt: 'Passeios, formação especializada, apoio psicológico, uniformes.',
            })}
          </p>
        </div>
      </div>

      <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-4 text-center">
        {t({ it: 'Importi di sostegno mensile', en: 'Monthly support amounts', de: 'Monatliche Unterstützungsbeträge', pt: 'Valores de apadrinhamento mensal' })}
      </h2>
      <div className="grid sm:grid-cols-3 gap-4 mb-16">
        {importi.map((i) => (
          <div key={i.euro} className="rounded-2xl bg-[var(--beige)] p-6 text-center">
            <p className="text-2xl font-bold text-[var(--deep-blue)]">{i.euro} €</p>
            <p className="text-sm text-gray-600 mt-1">{t(i.copertura)}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-3 text-center">
        {t({ it: 'Come attivare il sostegno', en: 'How to activate your support', de: 'Wie du eine Patenschaft aktivierst', pt: 'Como ativar o apadrinhamento' })}
      </h2>
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 mb-10">
        <p className="text-gray-600 leading-relaxed mb-3">
          {t({ it: 'Per attivare il sostegno, scrivi a', en: 'To activate your support, write to', de: 'Um eine Patenschaft zu aktivieren, schreib an', pt: 'Para ativar o apadrinhamento, escreva para' })}{' '}
          <a href="mailto:segretariato.missioni@ffbetania.net" className="text-[var(--deep-blue)] font-semibold hover:underline">
            segretariato.missioni@ffbetania.net
          </a>{' '}
          {t({ it: 'indicando:', en: 'indicating:', de: 'und gib an:', pt: 'indicando:' })}
        </p>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-1 text-gray-600 mb-3 list-disc list-inside">
          <li>{t({ it: 'nome e cognome', en: 'first and last name', de: 'Vor- und Nachname', pt: 'nome e sobrenome' })}</li>
          <li>{t({ it: 'email e/o numero di telefono', en: 'email and/or phone number', de: 'E-Mail und/oder Telefonnummer', pt: 'e-mail e/ou número de telefone' })}</li>
          <li>{t({ it: 'formula di sostegno scelta (40 €, 80 € o 120 € al mese)', en: 'chosen support amount (€40, €80 or €120 per month)', de: 'gewählter Unterstützungsbetrag (40 €, 80 € oder 120 € pro Monat)', pt: 'valor de apadrinhamento escolhido (40 €, 80 € ou 120 € por mês)' })}</li>
          <li>{t({ it: 'indirizzo', en: 'address', de: 'Adresse', pt: 'endereço' })}</li>
          <li>{t({ it: 'data', en: 'date', de: 'Datum', pt: 'data' })}</li>
          <li>{t({ it: 'data di inizio del sostegno', en: 'start date of support', de: 'Startdatum der Patenschaft', pt: 'data de início do apadrinhamento' })}</li>
        </ul>
        <p className="text-gray-500 italic text-sm">
          {t({
            it: "Un nostro fratello o una nostra sorella ti contatterà per accompagnarti nell'attivazione del sostegno.",
            en: 'One of our brothers or sisters will contact you to guide you through activating your support.',
            de: 'Einer unserer Brüder oder Schwestern wird dich kontaktieren, um dich bei der Aktivierung deiner Patenschaft zu begleiten.',
            pt: 'Um dos nossos irmãos ou irmãs entrará em contato para o acompanhar na ativação do apadrinhamento.',
          })}
        </p>
      </div>

      <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-4 text-center">
        {t({ it: 'Scegli la modalità in base al tuo paese', en: 'Choose the method based on your country', de: 'Wähle die Methode je nach deinem Land', pt: 'Escolha a forma conforme o seu país' })}
      </h2>
      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        <div className="rounded-2xl border-l-4 border-[var(--soft-green)] bg-white p-6 shadow-sm">
          <h3 className="flex items-center gap-2 font-bold text-[var(--deep-blue)] mb-4">
            <img src={flagBrasil} alt="Brasile" className="w-7 h-auto rounded shadow-sm" />
            {t({ it: 'Se sostieni dal Brasile', en: 'If supporting from Brazil', de: 'Wenn du aus Brasilien unterstützt', pt: 'Se você apoiar do Brasil' })}
          </h3>
          <div className="bg-[var(--beige)] rounded-xl p-4 mb-3">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">PIX</p>
            <div className="flex items-center gap-2">
              <code className="flex-1 text-sm font-mono text-[var(--deep-blue)] break-all">21610717/0001-25</code>
              <button
                type="button"
                onClick={() => copy('21610717/0001-25', setCopiedPix)}
                aria-label={t({ it: 'Copia chiave PIX', en: 'Copy PIX key', de: 'PIX-Schlüssel kopieren', pt: 'Copiar chave PIX' })}
                className="p-2 rounded-lg bg-[var(--soft-green)] text-white hover:brightness-90 transition-all shrink-0"
              >
                {copiedPix ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2">Fundação Betânia Onlus</p>
            <img src={qrPix} alt="QR Code PIX" className="w-28 h-28 object-contain mx-auto mt-3 bg-white rounded-lg border border-gray-200 p-1" />
          </div>
          <div className="text-sm text-gray-600 space-y-0.5">
            <p className="font-semibold text-[var(--deep-blue)]">ITAÚ</p>
            <p>
              {t({ it: 'Agenzia', en: 'Branch', de: 'Filiale', pt: 'Agência' })}: <span className="font-mono">7421</span>
            </p>
            <p>
              {t({ it: 'C/C', en: 'Account', de: 'Konto', pt: 'C/C' })}: <span className="font-mono">30014-1</span>
            </p>
          </div>
        </div>

        <div className="rounded-2xl border-l-4 border-[var(--deep-blue)] bg-white p-6 shadow-sm">
          <h3 className="flex items-center gap-2 font-bold text-[var(--deep-blue)] mb-4 flex-wrap">
            <span className="flex items-center gap-1">
              <img src={flagItalia} alt="Italia" className="w-7 h-auto rounded shadow-sm" />
              <img src={flagEu} alt="Unione Europea" className="w-7 h-auto rounded shadow-sm" />
            </span>
            {t({ it: "Se sostieni dall'Italia o dalla UE", en: 'If supporting from Italy or the EU', de: 'Wenn du aus Italien oder der EU unterstützt', pt: 'Se você apoiar da Itália ou da UE' })}
          </h3>
          <p className="text-sm text-gray-500 mb-1">{t({ it: 'Beneficiario', en: 'Beneficiary', de: 'Empfänger', pt: 'Beneficiário' })}</p>
          <p className="text-sm font-semibold text-[var(--deep-blue)] mb-3">
            Fraternità Francescana di Betania Fondazione ETS
          </p>
          <p className="text-sm text-gray-500 mb-1">{t({ it: 'Banca', en: 'Bank', de: 'Bank', pt: 'Banco' })}</p>
          <p className="text-sm font-medium text-[var(--deep-blue)] mb-3">INTESA SANPAOLO S.P.A</p>
          <p className="text-sm text-gray-500 mb-1">IBAN</p>
          <div className="flex items-center gap-2 mb-3">
            <code className="flex-1 text-sm font-mono text-[var(--deep-blue)] break-all">IT44X0306909606100000150294</code>
            <button
              type="button"
              onClick={() => copy('IT44X0306909606100000150294', setCopiedIban)}
              aria-label={t({ it: 'Copia IBAN', en: 'Copy IBAN', de: 'IBAN kopieren', pt: 'Copiar IBAN' })}
              className="p-2 rounded-lg bg-[var(--deep-blue)] text-white hover:brightness-90 transition-all shrink-0"
            >
              {copiedIban ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          <p className="text-sm text-gray-500 mb-1">{t({ it: 'Causale', en: 'Reason for payment', de: 'Verwendungszweck', pt: 'Finalidade' })}</p>
          <p className="text-sm italic text-[var(--deep-blue)]">
            {t({
              it: 'Sostegno a distanza — nome e cognome (del donatore)',
              en: 'Long-distance support — donor\'s first and last name',
              de: 'Patenschaft — Vor- und Nachname (des Spenders)',
              pt: 'Apadrinhamento à distância — nome e sobrenome (do doador)',
            })}
          </p>
        </div>
      </div>

      <p className="text-center text-gray-500 italic">
        {t({
          it: 'Il sostegno a distanza rappresenta un piccolo gesto che dona speranza in un futuro migliore sia al bambino che alla sua comunità.',
          en: 'Long-distance support is a small gesture that gives hope for a better future to both the child and their community.',
          de: 'Die Patenschaft ist eine kleine Geste, die sowohl dem Kind als auch seiner Gemeinschaft Hoffnung auf eine bessere Zukunft schenkt.',
          pt: 'O apadrinhamento à distância representa um pequeno gesto que dá esperança num futuro melhor tanto para a criança como para a sua comunidade.',
        })}
      </p>
      </section>
    </>
  )
}
