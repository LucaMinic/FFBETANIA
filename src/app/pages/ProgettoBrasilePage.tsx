import { Link } from 'react-router'
import { YouTubeEmbed } from '../components/YouTubeEmbed'
import { PageHero } from '../components/PageHero'
import { useT } from '../context/LanguageContext'
import asilo from '../../assets/progetto-brasile/asilo.jpg'
import cimg from '../../assets/progetto-brasile/cimg93731.jpeg'
import progettoScuola from '../../assets/progetto-brasile/progetto-scuola.jpg'
import crecheSalvador from '../../assets/progetto-brasile/creche-salvador-2024.png'

interface LocalizedString {
  it: string
  en: string
  de: string
  pt: string
}

interface Tappa {
  nome: LocalizedString
  fatto: boolean
}

const tappe: Tappa[] = [
  { nome: { it: 'Nido (4 mesi - 2 anni)', en: 'Nursery (4 months - 2 years)', de: 'Krippe (4 Monate – 2 Jahre)', pt: 'Berçário (4 meses - 2 anos)' }, fatto: true },
  { nome: { it: 'Scuola infantile (3-5 anni)', en: 'Kindergarten (3-5 years)', de: 'Kindergarten (3–5 Jahre)', pt: 'Educação infantil (3-5 anos)' }, fatto: true },
  { nome: { it: 'Scuola elementare (6-10 anni)', en: 'Elementary school (6-10 years)', de: 'Grundschule (6–10 Jahre)', pt: 'Ensino fundamental I (6-10 anos)' }, fatto: false },
  { nome: { it: 'Scuola media (11-14 anni)', en: 'Middle school (11-14 years)', de: 'Mittelschule (11–14 Jahre)', pt: 'Ensino fundamental II (11-14 anos)' }, fatto: false },
  { nome: { it: 'Scuole superiori (15-18 anni)', en: 'High school (15-18 years)', de: 'Oberschule (15–18 Jahre)', pt: 'Ensino médio (15-18 anos)' }, fatto: false },
]

export function ProgettoBrasilePage() {
  const t = useT()
  return (
    <>
      <PageHero
        image={asilo}
        title={t({ it: 'Progetto Brasile', en: 'Brazil Project', de: 'Brasilien-Projekt', pt: 'Projeto Brasil' })}
        subtitle={t({
          it: "Un centro di accoglienza per l'infanzia a Salvador de Bahia.",
          en: 'A childcare center in Salvador de Bahia.',
          de: 'Ein Aufnahmezentrum für Kinder in Salvador de Bahia.',
          pt: 'Um centro de acolhimento infantil em Salvador da Bahia.',
        })}
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <p className="text-gray-600 leading-relaxed mb-12">
        {t({
          it: 'L\'iniziativa nasce dal proposito del fondatore padre Pancrazio di creare "un centro di accoglienza e ospitalità per i giovani che vivono in favelas", affrontando situazioni di disagio attraverso una formazione evangelica secondo i principi della comunità.',
          en: 'The initiative was born from the purpose of the founder, Father Pancrazio, to create "a welcoming and hospitable center for young people living in favelas", addressing situations of hardship through evangelical formation according to the community\'s principles.',
          de: 'Die Initiative entstand aus dem Vorhaben des Gründers, Pater Pancrazio, „ein Aufnahme- und Gastfreundschaftszentrum für Jugendliche aus den Favelas“ zu schaffen, um Notsituationen durch eine evangelische Bildung gemäß den Grundsätzen der Gemeinschaft zu begegnen.',
          pt: 'A iniciativa nasce do propósito do fundador Padre Pancrazio de criar "um centro de acolhida e hospitalidade para os jovens que vivem nas favelas", enfrentando situações de dificuldade através de uma formação evangélica segundo os princípios da comunidade.',
        })}
      </p>

      <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-3">
        {t({ it: 'Dove siamo', en: 'Where we are', de: 'Wo wir sind', pt: 'Onde estamos' })}
      </h2>
      <p className="text-gray-600 leading-relaxed mb-12">
        {t({
          it: "La struttura si trova a Salvador de Bahia, nel quartiere di São Cristóvão, vicino all'aeroporto internazionale. L'area ospita circa duecentomila abitanti in vari gradi di povertà, con una popolazione prevalentemente giovane: il 70% ha meno di 25 anni. Trasmettiamo educazione scolastica, valori e competenze culturali per offrire prospettive di futuro più dignitose.",
          en: 'The facility is located in Salvador de Bahia, in the São Cristóvão district, near the international airport. The area is home to about two hundred thousand residents in varying degrees of poverty, with a predominantly young population: 70% are under 25. We provide schooling, values and cultural skills to offer more dignified prospects for the future.',
          de: 'Die Einrichtung befindet sich in Salvador de Bahia, im Stadtteil São Cristóvão, nahe dem internationalen Flughafen. Das Gebiet beherbergt etwa zweihunderttausend Einwohner in unterschiedlichen Armutsgraden, mit einer überwiegend jungen Bevölkerung: 70 % sind unter 25 Jahre alt. Wir vermitteln schulische Bildung, Werte und kulturelle Kompetenzen, um würdigere Zukunftsperspektiven zu bieten.',
          pt: 'A estrutura situa-se em Salvador da Bahia, no bairro de São Cristóvão, perto do aeroporto internacional. A área abriga cerca de duzentos mil habitantes em vários graus de pobreza, com uma população predominantemente jovem: 70% tem menos de 25 anos. Transmitimos educação escolar, valores e competências culturais para oferecer perspectivas de futuro mais dignas.',
        })}
      </p>

      <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-3">
        {t({ it: 'Il progetto', en: 'The project', de: 'Das Projekt', pt: 'O projeto' })}
      </h2>
      <p className="text-gray-600 leading-relaxed mb-6">
        {t({
          it: "L'obiettivo è la realizzazione di un centro formativo dalla prima infanzia fino al completamento degli studi superiori, secondo le normative brasiliane, con interventi che toccano la dimensione spirituale, il percorso culturale-professionale e la salute.",
          en: 'The goal is to establish a training center from early childhood through to the completion of secondary education, in accordance with Brazilian regulations, with interventions touching the spiritual dimension, the cultural-professional path and health.',
          de: 'Ziel ist die Schaffung eines Bildungszentrums von der frühen Kindheit bis zum Abschluss der Oberstufe, gemäß den brasilianischen Vorschriften, mit Maßnahmen, die die geistliche Dimension, den kulturell-beruflichen Weg und die Gesundheit betreffen.',
          pt: 'O objetivo é a realização de um centro formativo desde a primeira infância até a conclusão do ensino médio, segundo as normas brasileiras, com intervenções que tocam a dimensão espiritual, o percurso cultural-profissional e a saúde.',
        })}
      </p>
      <div className="space-y-2 mb-12">
        {tappe.map((tappa, i) => (
          <div key={i} className="flex items-center gap-3">
            <span
              className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                tappa.fatto ? 'bg-[var(--soft-green)]' : 'bg-gray-300'
              }`}
            />
            <span className={tappa.fatto ? 'text-gray-700' : 'text-gray-400'}>{t(tappa.nome)}</span>
            {tappa.fatto && (
              <span className="text-xs text-[var(--soft-green)] font-semibold">
                {t({ it: 'realizzato', en: 'completed', de: 'realisiert', pt: 'realizado' })}
              </span>
            )}
          </div>
        ))}
      </div>
      <img src={progettoScuola} alt="Progetto scuola Brasile Betania" className="w-full max-h-80 object-cover rounded-2xl mb-16" />

      <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-3">
        {t({ it: 'Asilo', en: 'Nursery School', de: 'Kindergarten', pt: 'Creche' })}
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        {t({
          it: "La struttura accoglie fino a 120 bambini dai 4 mesi ai 5 anni di età ed è considerata di elevata qualità dalla comunità locale e dalle istituzioni, con un'offerta comparabile ai migliori asili privati cittadini, inclusi cinque pasti giornalieri completamente gratuiti.",
          en: 'The facility welcomes up to 120 children from 4 months to 5 years of age and is considered of high quality by the local community and institutions, with an offering comparable to the city\'s best private nurseries, including five fully free daily meals.',
          de: 'Die Einrichtung nimmt bis zu 120 Kinder im Alter von 4 Monaten bis 5 Jahren auf und gilt bei der örtlichen Gemeinschaft und den Institutionen als von hoher Qualität, mit einem Angebot, das mit den besten privaten Kindergärten der Stadt vergleichbar ist, einschließlich fünf komplett kostenloser täglicher Mahlzeiten.',
          pt: 'A estrutura acolhe até 120 crianças de 4 meses a 5 anos de idade e é considerada de alta qualidade pela comunidade local e pelas instituições, com uma oferta comparável às melhores creches particulares da cidade, incluindo cinco refeições diárias totalmente gratuitas.',
        })}
      </p>
      <p className="text-gray-600 leading-relaxed mb-8">
        {t({
          it: "Questo servizio è possibile grazie a finanziamenti europei (principalmente da Italia, Svizzera e Germania) e al sostegno del comune di Salvador per il servizio di pubblica utilità. L'approccio educativo enfatizza la formazione continua del personale e il coinvolgimento frequente dei genitori nelle attività didattiche.",
          en: 'This service is possible thanks to European funding (mainly from Italy, Switzerland and Germany) and the support of the municipality of Salvador for the public utility service. The educational approach emphasizes ongoing staff training and the frequent involvement of parents in teaching activities.',
          de: 'Dieser Dienst wird durch europäische Finanzierungen (vor allem aus Italien, der Schweiz und Deutschland) sowie durch die Unterstützung der Gemeinde Salvador für den gemeinnützigen Dienst ermöglicht. Der pädagogische Ansatz legt Wert auf die kontinuierliche Weiterbildung des Personals und die häufige Einbindung der Eltern in die pädagogischen Aktivitäten.',
          pt: 'Este serviço é possível graças a financiamentos europeus (principalmente da Itália, Suíça e Alemanha) e ao apoio do município de Salvador para o serviço de utilidade pública. A abordagem educativa enfatiza a formação contínua da equipe e o envolvimento frequente dos pais nas atividades didáticas.',
        })}
      </p>
      <div className="grid sm:grid-cols-2 gap-4 mb-16">
        <img src={cimg} alt="Asilo Nossa Senhora Aparecida" className="w-full h-56 object-cover rounded-2xl" />
        <img src={crecheSalvador} alt="Creche FFB Salvador 2024" className="w-full h-56 object-cover rounded-2xl" />
      </div>

      <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-6">
        {t({ it: 'Il progetto raccontato', en: 'The project told', de: 'Das Projekt erzählt', pt: 'O projeto contado' })}
      </h2>
      <div className="grid sm:grid-cols-3 gap-4 mb-16">
        <YouTubeEmbed videoId="2Sg-SVqwCCQ" title="Progetto Brasile - video 1" />
        <YouTubeEmbed videoId="RyMMmTmqHPs" title="Progetto Brasile - video 2" />
        <YouTubeEmbed videoId="kErK6B0u6H8" title="Progetto Brasile - video 3" />
      </div>

      <div className="rounded-2xl bg-[var(--beige)] p-8 text-center">
        <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-2">
          {t({ it: 'Sostieni un bambino a distanza', en: 'Support a child from a distance', de: 'Unterstütze ein Kind aus der Ferne', pt: 'Apadrinhe uma criança à distância' })}
        </h2>
        <p className="text-gray-600 mb-6">
          {t({
            it: "Con il sostegno a distanza puoi aiutare un bambino a ricevere un'istruzione adeguata, sostenendo le spese vive per le sue attività formative.",
            en: 'With long-distance support you can help a child receive an adequate education, covering the actual costs of their formative activities.',
            de: 'Mit einer Patenschaft kannst du einem Kind helfen, eine angemessene Bildung zu erhalten, indem du die tatsächlichen Kosten für seine Bildungsaktivitäten übernimmst.',
            pt: 'Com o apadrinhamento à distância você pode ajudar uma criança a receber uma educação adequada, custeando as despesas das suas atividades formativas.',
          })}
        </p>
        <Link
          to="/sostienici/sostegno-a-distanza"
          className="inline-block px-6 py-2.5 rounded-xl bg-gradient-to-br from-[#f5b942] via-[#f7c968] to-[#f5b942] text-white font-medium shadow-md hover:shadow-lg transition-all"
        >
          {t({ it: 'Scopri come', en: 'Find out how', de: 'Erfahre wie', pt: 'Descubra como' })}
        </Link>
      </div>
      </section>
    </>
  )
}
