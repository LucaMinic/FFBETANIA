import { Link } from 'react-router'
import { PageHero } from '../../components/PageHero'
import { PageCta } from '../../components/PageCta'
import { useT } from '../../context/LanguageContext'
import progettoScuola from '../../../assets/progetto-brasile/progetto-scuola.jpg'

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
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
      <p className="text-lg text-gray-500 mb-4">
        {t({
          it: 'Le campagne di raccolta fondi attive saranno presto disponibili qui, gestite tramite il nostro nuovo sistema di raccolta fondi.',
          en: 'Active fundraising campaigns will soon be available here, managed through our new fundraising system.',
          de: 'Aktive Spendenkampagnen werden hier bald verfügbar sein, verwaltet über unser neues Spendensystem.',
          pt: 'As campanhas de arrecadação de fundos ativas estarão em breve disponíveis aqui, geridas através do nosso novo sistema de arrecadação.',
        })}
      </p>
      <p className="text-gray-400 text-sm">
        {t({ it: 'Nel frattempo puoi scoprire', en: 'In the meantime you can discover', de: 'In der Zwischenzeit kannst du', pt: 'Enquanto isso você pode conhecer' })}{' '}
        <Link to="/progetto-brasile" className="text-[var(--warm-orange)] font-semibold">
          {t({ it: 'il Progetto Brasile', en: 'the Brazil Project', de: 'das Brasilien-Projekt entdecken', pt: 'o Projeto Brasil' })}
        </Link>{' '}
        {t({
          it: 'o contattarci per conoscere le iniziative in corso.',
          en: 'or contact us to learn about ongoing initiatives.',
          de: 'oder uns kontaktieren, um mehr über laufende Initiativen zu erfahren.',
          pt: 'ou contatar-nos para conhecer as iniciativas em curso.',
        })}
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
