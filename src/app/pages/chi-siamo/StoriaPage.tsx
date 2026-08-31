import { PageHero } from '../../components/PageHero'
import { PageCta } from '../../components/PageCta'
import { useT } from '../../context/LanguageContext'
import pentecoste from '../../../assets/padre-pancrazio/pentecoste-1982-inaugurazione.jpg'
import camaldoli from '../../../assets/padre-pancrazio/camaldoli-1976.jpg'
import casaMadreStorica from '../../../assets/case-di-fraternita/terlizzi/casa-madre-terlizzi-2005-storica.jpg'
import sanQuirino from '../../../assets/case-di-fraternita/san-quirino/san-quirino-casa-4.jpg'
import cellaDiNoceto from '../../../assets/case-di-fraternita/cella-di-noceto/casa-cella-di-noceto-esterno.jpeg'
import aschaffenburg from '../../../assets/case-di-fraternita/aschaffenburg/convento-aschaffenburg-1.jpg'
import asiloSalvador from '../../../assets/case-di-fraternita/salvador-de-bahia/asilo-nossa-senhora-aparecida.jpg'
import conventoBarana from '../../../assets/case-di-fraternita/verona/convento-barana-1.jpg'
import eremoLeggiuno from '../../../assets/case-di-fraternita/leggiuno/eremo-santa-caterina-del-sasso-1.jpg'

interface LocalizedString {
  it: string
  en: string
  de: string
  pt: string
}

interface Milestone {
  date: string
  text: LocalizedString
  img?: string
  imgAlt?: string
}

const milestones: Milestone[] = [
  {
    date: '1973',
    text: {
      it: 'Fra Pancrazio viene ordinato sacerdote e trasferito a Civitanova Marche.',
      en: 'Brother Pancrazio is ordained a priest and transferred to Civitanova Marche.',
      de: 'Bruder Pancrazio wird zum Priester geweiht und nach Civitanova Marche versetzt.',
      pt: 'Frei Pancrazio é ordenado sacerdote e transferido para Civitanova Marche.',
    },
  },
  {
    date: '1975',
    text: {
      it: "P. Pancrazio fonda alcuni gruppi di preghiera, all'interno dei quali nasce l'esigenza e il desiderio di una forma stabile di vita fraterna.",
      en: 'Father Pancrazio founds several prayer groups, within which the need and desire for a stable form of fraternal life is born.',
      de: 'Pater Pancrazio gründet mehrere Gebetsgruppen, aus denen das Bedürfnis und der Wunsch nach einer stabilen Form brüderlichen Lebens entsteht.',
      pt: 'O Padre Pancrazio funda alguns grupos de oração, dentro dos quais nasce a necessidade e o desejo de uma forma estável de vida fraterna.',
    },
    img: camaldoli,
    imgAlt: 'Camaldoli 1976 - gruppo con padre Pancrazio',
  },
  {
    date: '1982',
    text: {
      it: "Nel giorno di Pentecoste a Terlizzi (BA), con un primo piccolo gruppo di sorelle, incomincia l'esperienza di vita comune.",
      en: 'On the day of Pentecost in Terlizzi (BA), with a first small group of sisters, the experience of common life begins.',
      de: 'Am Pfingsttag in Terlizzi (BA) beginnt mit einer ersten kleinen Gruppe von Schwestern die Erfahrung des gemeinsamen Lebens.',
      pt: 'No dia de Pentecostes em Terlizzi (BA), com um primeiro pequeno grupo de irmãs, começa a experiência de vida comum.',
    },
    img: pentecoste,
    imgAlt: 'Pentecoste 30.05.82 - Inaugurazione ufficiale FFB',
  },
  {
    date: '8 dicembre 1998',
    text: {
      it: 'L\'Associazione di fedeli "Casa Betania" diviene Istituto di vita consacrata con il nome di "Fraternità Francescana di Betania".',
      en: 'The association of the faithful "Casa Betania" becomes an Institute of Consecrated Life under the name "Fraternità Francescana di Betania".',
      de: 'Der Gläubigenverband „Casa Betania“ wird zum Institut des geweihten Lebens unter dem Namen „Fraternità Francescana di Betania“.',
      pt: 'A Associação de fiéis "Casa Betania" torna-se Instituto de vida consagrada com o nome de "Fraternità Francescana di Betania".',
    },
    img: casaMadreStorica,
    imgAlt: 'Casa Madre di Terlizzi',
  },
  {
    date: '14 novembre 2006',
    text: {
      it: "Si apre il Giubileo della Fraternità per il venticinquesimo anno di fondazione, chiuso il 10 dicembre 2007.",
      en: 'The Jubilee of the Fraternity opens for the twenty-fifth anniversary of its founding, closing on 10 December 2007.',
      de: 'Das Jubiläum der Fraternität zum fünfundzwanzigsten Gründungsjahr wird eröffnet und am 10. Dezember 2007 geschlossen.',
      pt: 'Abre-se o Jubileu da Fraternidade pelo vigésimo quinto ano de fundação, encerrado em 10 de dezembro de 2007.',
    },
  },
  {
    date: '1998-2002',
    text: {
      it: 'Il 30 maggio 1998 apre la Casa di San Quirino (PN); il 5 maggio 2002 la prima Casa oltreconfine a Rovio (Ticino, Svizzera); inizia la presenza a Loreto.',
      en: 'On 30 May 1998 the House of San Quirino (PN) opens; on 5 May 2002 the first House beyond the border in Rovio (Ticino, Switzerland); the presence in Loreto begins.',
      de: 'Am 30. Mai 1998 eröffnet das Haus San Quirino (PN); am 5. Mai 2002 das erste Haus jenseits der Grenze in Rovio (Tessin, Schweiz); die Präsenz in Loreto beginnt.',
      pt: 'Em 30 de maio de 1998 abre a Casa de San Quirino (PN); em 5 de maio de 2002 a primeira Casa além-fronteira em Rovio (Ticino, Suíça); começa a presença em Loreto.',
    },
    img: sanQuirino,
    imgAlt: 'Casa San Quirino',
  },
  {
    date: '2004-2007',
    text: {
      it: 'Aprono le Case di Cella di Noceto (PR) e Roma (2004); custodia del Santuario della Madonna della Libera a Partanna (2005) e del Santuario di Santa Maria delle Vertighe a Monte San Savino (2007).',
      en: 'The Houses of Cella di Noceto (PR) and Rome open (2004); custodianship of the Shrine of the Madonna della Libera in Partanna (2005) and of the Shrine of Santa Maria delle Vertighe in Monte San Savino (2007).',
      de: 'Die Häuser Cella di Noceto (PR) und Rom eröffnen (2004); Übernahme der Obhut über das Heiligtum der Madonna della Libera in Partanna (2005) und des Heiligtums Santa Maria delle Vertighe in Monte San Savino (2007).',
      pt: 'Abrem as Casas de Cella di Noceto (PR) e Roma (2004); guarda do Santuário da Madonna della Libera em Partanna (2005) e do Santuário de Santa Maria delle Vertighe em Monte San Savino (2007).',
    },
    img: cellaDiNoceto,
    imgAlt: 'Casa di Cella di Noceto',
  },
  {
    date: '2009',
    text: {
      it: "50° anniversario del programma di vita donato da p. Pio: mandato missionario ai primi 5 membri per Würzburg, Germania (dal 2013 ad Aschaffenburg).",
      en: '50th anniversary of the rule of life given by Padre Pio: missionary mandate for the first 5 members to Würzburg, Germany (from 2013 in Aschaffenburg).',
      de: '50. Jahrestag des von Pater Pio geschenkten Lebensprogramms: Missionsauftrag für die ersten 5 Mitglieder nach Würzburg, Deutschland (ab 2013 in Aschaffenburg).',
      pt: '50º aniversário do programa de vida doado pelo Padre Pio: mandato missionário aos primeiros 5 membros para Würzburg, Alemanha (a partir de 2013 em Aschaffenburg).',
    },
    img: aschaffenburg,
    imgAlt: 'Convento di Aschaffenburg',
  },
  {
    date: '10 ottobre 2012',
    text: {
      it: "Mandato missionario ai primi 10 missionari per Salvador de Bahia, Brasile. Il 12 ottobre 2014 inaugurazione dell'Asilo Nossa Senhora Aparecida.",
      en: 'Missionary mandate for the first 10 missionaries to Salvador de Bahia, Brazil. On 12 October 2014, inauguration of the Nossa Senhora Aparecida Nursery School.',
      de: 'Missionsauftrag für die ersten 10 Missionare nach Salvador de Bahia, Brasilien. Am 12. Oktober 2014 Einweihung des Kindergartens Nossa Senhora Aparecida.',
      pt: 'Mandato missionário aos primeiros 10 missionários para Salvador da Bahia, Brasil. Em 12 de outubro de 2014, inauguração da Creche Nossa Senhora Aparecida.',
    },
    img: asiloSalvador,
    imgAlt: 'Asilo Nossa Senhora Aparecida - Salvador de Bahia',
  },
  {
    date: '6 ottobre 2013',
    text: {
      it: 'Presa di possesso del Convento del Barana, a Verona.',
      en: 'Taking possession of the Convento del Barana, in Verona.',
      de: 'Übernahme des Klosters del Barana in Verona.',
      pt: 'Tomada de posse do Convento del Barana, em Verona.',
    },
    img: conventoBarana,
    imgAlt: 'Convento del Barana - Verona',
  },
  {
    date: '1 aprile 2019',
    text: {
      it: "Custodia e animazione pastorale dell'Eremo di Santa Caterina del Sasso, a Leggiuno (VA).",
      en: 'Custodianship and pastoral animation of the Hermitage of Santa Caterina del Sasso, in Leggiuno (VA).',
      de: 'Obhut und seelsorgliche Betreuung der Einsiedelei Santa Caterina del Sasso in Leggiuno (VA).',
      pt: 'Guarda e animação pastoral do Eremitério de Santa Caterina del Sasso, em Leggiuno (VA).',
    },
    img: eremoLeggiuno,
    imgAlt: 'Eremo di Santa Caterina del Sasso - Leggiuno',
  },
  {
    date: '2022',
    text: {
      it: '40° anniversario della Fraternità Francescana di Betania.',
      en: '40th anniversary of the Fraternità Francescana di Betania.',
      de: '40. Jahrestag der Fraternità Francescana di Betania.',
      pt: '40º aniversário da Fraternità Francescana di Betania.',
    },
  },
  {
    date: '18 maggio 2023',
    text: {
      it: 'Nomina del nuovo Governo generale della Fraternità Francescana di Betania.',
      en: 'Appointment of the new General Government of the Fraternità Francescana di Betania.',
      de: 'Ernennung der neuen Generalleitung der Fraternità Francescana di Betania.',
      pt: 'Nomeação do novo Governo geral da Fraternità Francescana di Betania.',
    },
  },
]

export function StoriaPage() {
  const t = useT()
  return (
    <>
      <PageHero
        image={pentecoste}
        title={t({ it: 'La nostra storia', en: 'Our history', de: 'Unsere Geschichte', pt: 'Nossa história' })}
        subtitle={t({
          it: 'Dalla prima comunità del 1982 a oggi: le tappe della Fraternità.',
          en: 'From the first community in 1982 to today: the milestones of the Fraternity.',
          de: 'Von der ersten Gemeinschaft 1982 bis heute: die Etappen der Fraternität.',
          pt: 'Da primeira comunidade de 1982 até hoje: as etapas da Fraternidade.',
        })}
        imageAlt="Pentecoste 30.05.82 - Inaugurazione ufficiale FFB"
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <ol className="relative border-l-2 border-[var(--beige-dark)] pl-6 space-y-8 mb-16">
        {milestones.map((m, i) => (
          <li key={i} className="relative">
            <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-[var(--warm-orange)]" />
            <div className={m.img ? 'sm:flex sm:items-center sm:gap-6' : undefined}>
              <div className="flex-1">
                <p className="font-bold text-[var(--deep-blue)]">{m.date}</p>
                <p className="text-gray-600 leading-relaxed">{t(m.text)}</p>
              </div>
              {m.img && (
                <img
                  src={m.img}
                  alt={m.imgAlt}
                  className="w-full sm:w-40 h-28 object-cover rounded-xl shadow-sm mt-3 sm:mt-0 shrink-0"
                />
              )}
            </div>
          </li>
        ))}
      </ol>

      <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-4">
        {t({
          it: 'Governo generale della Fraternità',
          en: 'General Government of the Fraternity',
          de: 'Generalleitung der Fraternität',
          pt: 'Governo geral da Fraternidade',
        })}
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        {t({
          it: 'In seguito al V Capitolo Generale Ordinario, vissuto nel mese di maggio 2023, il governo generale della FFB è composto da:',
          en: 'Following the 5th Ordinary General Chapter, held in May 2023, the general government of the FFB is composed of:',
          de: 'Nach dem V. Ordentlichen Generalkapitel im Mai 2023 setzt sich die Generalleitung der FFB wie folgt zusammen:',
          pt: 'Na sequência do V Capítulo Geral Ordinário, realizado em maio de 2023, o governo geral da FFB é composto por:',
        })}
      </p>
      <ul className="text-gray-600 space-y-1">
        <li>fra Angelo Tolardo — {t({ it: 'Ministro generale', en: 'General Minister', de: 'Generalminister', pt: 'Ministro geral' })}</li>
        <li>fra Gregorio Merendino — {t({ it: 'Vicario generale', en: 'General Vicar', de: 'Generalvikar', pt: 'Vigário geral' })}</li>
        <li>sor. Sarah Zanoni — {t({ it: 'consigliera generale', en: 'general councillor', de: 'Generalrätin', pt: 'conselheira geral' })}</li>
        <li>fra Antonio Surano — {t({ it: 'consigliere generale', en: 'general councillor', de: 'Generalrat', pt: 'conselheiro geral' })}</li>
        <li>sor. Maria Francesca Gavirati — {t({ it: 'consigliera generale', en: 'general councillor', de: 'Generalrätin', pt: 'conselheira geral' })}</li>
      </ul>

      <PageCta
        title={t({ it: 'Vuoi saperne di più sul nostro fondatore?', en: 'Want to know more about our founder?', de: 'Möchtest du mehr über unseren Gründer erfahren?', pt: 'Quer saber mais sobre o nosso fundador?' })}
        text={t({
          it: 'Scopri la vita di Padre Pancrazio Gaudioso e il carisma che ha dato origine alla nostra Fraternità.',
          en: 'Discover the life of Father Pancrazio Gaudioso and the charism that gave rise to our Fraternity.',
          de: 'Entdecke das Leben von Pater Pancrazio Gaudioso und das Charisma, das unserer Fraternität ihren Ursprung gab.',
          pt: 'Conheça a vida do Padre Pancrazio Gaudioso e o carisma que deu origem à nossa Fraternidade.',
        })}
        primaryLabel={t({ it: 'Padre Pancrazio', en: 'Father Pancrazio', de: 'Pater Pancrazio', pt: 'Padre Pancrazio' })}
        primaryTo="/chi-siamo/padre-pancrazio"
        secondaryLabel={t({ it: 'Il nostro carisma', en: 'Our charism', de: 'Unser Charisma', pt: 'Nosso carisma' })}
        secondaryTo="/chi-siamo/carisma"
      />
      </section>
    </>
  )
}
