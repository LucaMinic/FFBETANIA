import { CampagnaLayout } from '../../../components/CampagnaLayout'
import { useT } from '../../../context/LanguageContext'
import thumb from '../../../../assets/sostienici/thumb-dispensa.png'

export function AccoglienzaInDispensaPage() {
  const t = useT()
  return (
    <CampagnaLayout
      titolo="Accoglienza in Dispensa – FFB Terlizzi"
      immagine={thumb}
      heroAlt="Accoglienza in Dispensa, FFB Terlizzi"
      raccolti="€ 322"
      paragrafi={[
        t({
          it: '"Accoglienza in Dispensa" sostiene le famiglie e le persone in difficoltà attraverso il lavoro quotidiano di solidarietà della Fraternità Francescana di Betania a Terlizzi, che distribuisce pacchi alimentari con l\'aiuto di numerosi volontari.',
          en: '"Accoglienza in Dispensa" (Welcome in the Pantry) supports families and people in need through the daily work of solidarity of the Fraternità Francescana di Betania in Terlizzi, which distributes food parcels with the help of many volunteers.',
          de: '„Accoglienza in Dispensa“ (Aufnahme in der Vorratskammer) unterstützt Familien und bedürftige Menschen durch die tägliche solidarische Arbeit der Fraternità Francescana di Betania in Terlizzi, die mit Hilfe zahlreicher Freiwilliger Lebensmittelpakete verteilt.',
          pt: '"Accoglienza in Dispensa" (Acolhimento na Despensa) apoia famílias e pessoas em dificuldade através do trabalho diário de solidariedade da Fraternità Francescana di Betania em Terlizzi, que distribui cestas básicas com a ajuda de numerosos voluntários.',
        }),
        t({
          it: 'Nel febbraio 2023 la Fraternità ha inaugurato una nuova struttura con un magazzino per la raccolta alimentare e uno spazio dedicato alla preparazione e distribuzione dei pacchi, pensato per essere più efficiente e più rispettoso della dignità e della privacy delle persone accolte, comprensivo di un ufficio per l\'ascolto e il supporto di chi chiede aiuto.',
          en: 'In February 2023 the Fraternity inaugurated a new facility with a warehouse for collecting food and a space dedicated to preparing and distributing parcels, designed to be more efficient and more respectful of the dignity and privacy of the people welcomed, including an office for listening to and supporting those asking for help.',
          de: 'Im Februar 2023 weihte die Fraternität eine neue Einrichtung ein, mit einem Lager für die Lebensmittelsammlung und einem Bereich für die Vorbereitung und Verteilung der Pakete, konzipiert für mehr Effizienz und mehr Respekt vor der Würde und Privatsphäre der aufgenommenen Menschen, einschließlich eines Büros zum Zuhören und zur Unterstützung derer, die um Hilfe bitten.',
          pt: 'Em fevereiro de 2023, a Fraternidade inaugurou uma nova estrutura com um armazém para a recolha de alimentos e um espaço dedicado à preparação e distribuição das cestas, pensado para ser mais eficiente e mais respeitador da dignidade e privacidade das pessoas acolhidas, incluindo um gabinete de escuta e apoio a quem pede ajuda.',
        }),
        t({
          it: 'Il sostegno mensile raggiunge centinaia di persone attraverso un aiuto concreto e un accompagnamento umano: ogni donazione permette di continuare questo servizio essenziale.',
          en: 'The monthly support reaches hundreds of people through concrete help and human companionship: every donation makes it possible to continue this essential service.',
          de: 'Die monatliche Unterstützung erreicht Hunderte von Menschen durch konkrete Hilfe und menschliche Begleitung: Jede Spende ermöglicht es, diesen wesentlichen Dienst fortzusetzen.',
          pt: 'O apoio mensal chega a centenas de pessoas através de ajuda concreta e acompanhamento humano: cada doação permite continuar este serviço essencial.',
        }),
      ]}
      relatedLabel={t({ it: 'Casa di Terlizzi', en: 'House of Terlizzi', de: 'Haus Terlizzi', pt: 'Casa de Terlizzi' })}
      relatedTo="/cosa-facciamo/case-di-fraternita/terlizzi"
    />
  )
}
