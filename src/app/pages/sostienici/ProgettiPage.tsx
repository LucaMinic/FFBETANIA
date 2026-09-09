import { Link } from 'react-router'
import { PageHero } from '../../components/PageHero'
import { PageCta } from '../../components/PageCta'
import { AnimatedSection } from '../../components/AnimatedSection'
import { useT } from '../../context/LanguageContext'
import progettoScuola from '../../../assets/progetto-brasile/progetto-scuola.jpg'
import thumbScuolaBrasile from '../../../assets/sostienici/thumb-scuola-brasile.png'
import thumbGiubileoGdb from '../../../assets/sostienici/thumb-giubileo-gdb.png'
import thumbDispensa from '../../../assets/sostienici/thumb-dispensa.png'
import thumbValentina from '../../../assets/sostienici/thumb-valentina.png'
import thumbProgettoBrasile from '../../../assets/sostienici/thumb-progetto-brasile.png'

interface LocalizedString {
  it: string
  en: string
  de: string
  pt: string
}

interface Campagna {
  titolo: LocalizedString
  descrizione: LocalizedString
  immagine: string
  raccolti: string
  obiettivo?: string
  conclusa?: boolean
  to: string
}

const campagne: Campagna[] = [
  {
    titolo: {
      it: 'Insieme costruiamo una scuola e un futuro',
      en: 'Together we build a school and a future',
      de: 'Gemeinsam bauen wir eine Schule und eine Zukunft',
      pt: 'Juntos construímos uma escola e um futuro',
    },
    descrizione: {
      it: 'La costruzione della scuola a São Cristóvão, Salvador de Bahia: aule, laboratori, biblioteca e mensa per circa 300 studenti.',
      en: 'Building the school in São Cristóvão, Salvador de Bahia: classrooms, workshops, a library and a canteen for around 300 students.',
      de: 'Der Bau der Schule in São Cristóvão, Salvador de Bahia: Klassenzimmer, Werkstätten, eine Bibliothek und eine Mensa für rund 300 Schüler.',
      pt: 'A construção da escola em São Cristóvão, Salvador da Bahia: salas de aula, laboratórios, biblioteca e refeitório para cerca de 300 estudantes.',
    },
    immagine: thumbScuolaBrasile,
    raccolti: '€ 11.720',
    to: '/sostienici/progetti/insieme-costruiamo-una-scuola-e-un-futuro',
  },
  {
    titolo: {
      it: 'I GdB di Salvador hanno un sogno',
      en: 'The GdB of Salvador have a dream',
      de: 'Die GdB von Salvador haben einen Traum',
      pt: 'Os GdB de Salvador têm um sonho',
    },
    descrizione: {
      it: 'Il viaggio dei Giovani di Betania di Salvador de Bahia al Giubileo 2025 di Roma, per incontrare il Papa e migliaia di giovani da tutto il mondo.',
      en: 'The journey of the Young People of Betania from Salvador de Bahia to the 2025 Jubilee in Rome, to meet the Pope and thousands of young people from around the world.',
      de: 'Die Reise der Jugend von Betania aus Salvador de Bahia zum Jubiläum 2025 in Rom, um den Papst und Tausende junger Menschen aus aller Welt zu treffen.',
      pt: 'A viagem dos Jovens de Betânia de Salvador da Bahia ao Jubileu de 2025 em Roma, para encontrar o Papa e milhares de jovens de todo o mundo.',
    },
    immagine: thumbGiubileoGdb,
    raccolti: '€ 18.238',
    obiettivo: '€ 18.000',
    conclusa: true,
    to: '/sostienici/progetti/i-gdb-di-salvador-hanno-un-sogno',
  },
  {
    titolo: {
      it: 'Accoglienza in Dispensa – FFB Terlizzi',
      en: 'Accoglienza in Dispensa – FFB Terlizzi',
      de: 'Accoglienza in Dispensa – FFB Terlizzi',
      pt: 'Accoglienza in Dispensa – FFB Terlizzi',
    },
    descrizione: {
      it: 'Il magazzino e lo spazio dedicato alla distribuzione dei pacchi alimentari alle famiglie in difficoltà di Terlizzi, con più dignità e privacy.',
      en: 'The warehouse and the space dedicated to distributing food parcels to families in need in Terlizzi, with more dignity and privacy.',
      de: 'Das Lager und der Raum für die Verteilung von Lebensmittelpaketen an bedürftige Familien in Terlizzi, mit mehr Würde und Privatsphäre.',
      pt: 'O armazém e o espaço dedicado à distribuição de cestas básicas às famílias em dificuldade em Terlizzi, com mais dignidade e privacidade.',
    },
    immagine: thumbDispensa,
    raccolti: '€ 322',
    to: '/sostienici/progetti/accoglienza-in-dispensa-ffb-terlizzi',
  },
  {
    titolo: {
      it: 'Aiutiamo Valentina – Salvador de Bahia',
      en: "Let's help Valentina – Salvador de Bahia",
      de: 'Helfen wir Valentina – Salvador de Bahia',
      pt: 'Vamos ajudar Valentina – Salvador da Bahia',
    },
    descrizione: {
      it: 'Una bombola di gas per cucinare in sicurezza: la salute respiratoria di Valentina, una bimba di un anno curata più volte per broncopolmonite.',
      en: 'A gas cylinder to cook safely: the respiratory health of Valentina, a one-year-old girl treated several times for bronchopneumonia.',
      de: 'Eine Gasflasche zum sicheren Kochen: die Atemwegsgesundheit von Valentina, einem einjährigen Mädchen, das mehrfach wegen Bronchopneumonie behandelt wurde.',
      pt: 'Um botijão de gás para cozinhar com segurança: a saúde respiratória de Valentina, uma menina de um ano tratada várias vezes por broncopneumonia.',
    },
    immagine: thumbValentina,
    raccolti: '€ 1.770',
    obiettivo: '€ 1.000',
    conclusa: true,
    to: '/sostienici/progetti/aiutiamo-valentina-salvador-de-bahia',
  },
  {
    titolo: {
      it: 'Progetto Brasile – Salvador de Bahia',
      en: 'Brazil Project – Salvador de Bahia',
      de: 'Brasilien-Projekt – Salvador de Bahia',
      pt: 'Projeto Brasil – Salvador da Bahia',
    },
    descrizione: {
      it: 'Il centro di accoglienza per bambini e giovani delle favelas: sviluppo spirituale, educativo, sanitario e professionale.',
      en: 'The welcome center for children and young people from the favelas: spiritual, educational, health and professional development.',
      de: 'Das Aufnahmezentrum für Kinder und Jugendliche aus den Favelas: geistliche, schulische, gesundheitliche und berufliche Entwicklung.',
      pt: 'O centro de acolhida para crianças e jovens das favelas: desenvolvimento espiritual, educativo, sanitário e profissional.',
    },
    immagine: thumbProgettoBrasile,
    raccolti: '€ 4.302',
    to: '/sostienici/progetti/progetto-brasile-salvador-de-bahia',
  },
]

export function ProgettiPage() {
  const t = useT()
  return (
    <>
      <PageHero
        image={progettoScuola}
        title={t({ it: 'I nostri progetti', en: 'Our projects', de: 'Unsere Projekte', pt: 'Nossos projetos' })}
        subtitle={t({
          it: 'Le campagne di raccolta fondi della Fraternità Francescana di Betania.',
          en: 'The fundraising campaigns of the Fraternità Francescana di Betania.',
          de: 'Die Spendenkampagnen der Fraternità Francescana di Betania.',
          pt: 'As campanhas de arrecadação de fundos da Fraternità Francescana di Betania.',
        })}
      />
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-gray-600 leading-relaxed">
            {t({
              it: 'Ecco alcuni dei progetti che abbiamo realizzato insieme a voi. La raccolta fondi online sarà presto attiva, collegata al nostro nuovo sistema di gestione delle campagne: nel frattempo questa pagina mostra i progetti a titolo di esempio.',
              en: 'Here are some of the projects we have carried out together with you. Online fundraising will soon be active, connected to our new campaign management system: in the meantime this page shows the projects as an example.',
              de: 'Hier sind einige der Projekte, die wir gemeinsam mit euch verwirklicht haben. Die Online-Spendensammlung wird bald aktiv sein, verbunden mit unserem neuen Kampagnen-Verwaltungssystem: in der Zwischenzeit zeigt diese Seite die Projekte beispielhaft.',
              pt: 'Aqui estão alguns dos projetos que realizámos convosco. A angariação de fundos online estará em breve ativa, ligada ao nosso novo sistema de gestão de campanhas: entretanto, esta página apresenta os projetos a título de exemplo.',
            })}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {campagne.map((c, i) => (
            <AnimatedSection key={c.titolo.it} delay={i * 0.05}>
              <Link
                to={c.to}
                className="group block rounded-2xl overflow-hidden border border-gray-100 h-full flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="h-40 overflow-hidden relative">
                  <img
                    src={c.immagine}
                    alt={t(c.titolo)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {c.conclusa && (
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 text-[var(--deep-blue)] text-xs font-semibold shadow">
                      {t({ it: 'Obiettivo raggiunto', en: 'Goal reached', de: 'Ziel erreicht', pt: 'Objetivo alcançado' })}
                    </span>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-[var(--deep-blue)] mb-2 group-hover:text-[var(--warm-orange)] transition-colors">
                    {t(c.titolo)}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 flex-1">{t(c.descrizione)}</p>

                  <div className="mb-2">
                    <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden mb-1.5">
                      <div
                        className="h-full rounded-full bg-[var(--warm-orange)]"
                        style={{ width: c.conclusa ? '100%' : '55%' }}
                      />
                    </div>
                    <p className="text-xs text-gray-500">
                      <span className="font-semibold text-[var(--deep-blue)]">
                        {t({ it: `${c.raccolti} raccolti`, en: `${c.raccolti} raised`, de: `${c.raccolti} gesammelt`, pt: `${c.raccolti} arrecadados` })}
                      </span>
                      {c.obiettivo && ` · ${t({ it: 'obiettivo', en: 'goal', de: 'Ziel', pt: 'objetivo' })} ${c.obiettivo}`}
                    </p>
                  </div>

                  <span className="text-sm font-semibold text-[var(--warm-orange)]">
                    {c.conclusa
                      ? t({ it: 'Scopri la storia →', en: 'Discover the story →', de: 'Entdecke die Geschichte →', pt: 'Descubra a história →' })
                      : t({ it: 'Scopri il progetto →', en: 'Discover the project →', de: 'Entdecke das Projekt →', pt: 'Descubra o projeto →' })}
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mb-16">
          {t({ it: 'Vuoi proporre una campagna tua?', en: 'Want to propose your own campaign?', de: 'Möchtest du eine eigene Kampagne vorschlagen?', pt: 'Quer propor a sua própria campanha?' })}{' '}
          <Link to="/sostienici/proponi-una-campagna" className="text-[var(--warm-orange)] font-semibold">
            {t({ it: 'Scopri come fare', en: 'Find out how', de: 'Erfahre wie', pt: 'Descubra como' })}
          </Link>
        </p>

        <PageCta
          title={t({ it: 'Non aspettare, il bisogno è oggi', en: "Don't wait, the need is today", de: 'Warte nicht, die Not ist heute', pt: 'Não espere, a necessidade é hoje' })}
          text={t({
            it: 'Anche senza una campagna attiva, ogni donazione sostiene subito il nostro servizio quotidiano di solidarietà.',
            en: 'Even without an active campaign, every donation immediately supports our daily service of solidarity.',
            de: 'Auch ohne aktive Kampagne unterstützt jede Spende sofort unseren täglichen karitativen Dienst.',
            pt: 'Mesmo sem uma campanha ativa, cada doação apoia imediatamente o nosso serviço diário de solidariedade.',
          })}
          primaryLabel={t({ it: 'Dona ora', en: 'Donate now', de: 'Jetzt spenden', pt: 'Doe agora' })}
          primaryTo="/sostienici/dona-ora"
          secondaryLabel={t({ it: 'Progetto Brasile', en: 'Brazil Project', de: 'Brasilien-Projekt', pt: 'Projeto Brasil' })}
          secondaryTo="/progetto-brasile"
        />
      </section>
    </>
  )
}
