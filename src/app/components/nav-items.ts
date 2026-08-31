export interface LocalizedLabel {
  it: string
  en: string
  de: string
  pt: string
}

export interface NavChild {
  label: LocalizedLabel
  to: string
}

export interface NavItem {
  label: LocalizedLabel
  to: string
  children?: NavChild[]
}

export const navItems: NavItem[] = [
  {
    label: { it: 'Chi siamo', en: 'About us', de: 'Über uns', pt: 'Quem somos' },
    to: '/chi-siamo',
    children: [
      { label: { it: 'Il nostro carisma', en: 'Our charism', de: 'Unser Charisma', pt: 'Nosso carisma' }, to: '/chi-siamo/carisma' },
      { label: { it: 'Padre Pancrazio', en: 'Father Pancrazio', de: 'Pater Pancrazio', pt: 'Padre Pancrazio' }, to: '/chi-siamo/padre-pancrazio' },
      { label: { it: 'La nostra storia', en: 'Our history', de: 'Unsere Geschichte', pt: 'Nossa história' }, to: '/chi-siamo/storia' },
      { label: { it: 'Famiglia di Betania', en: 'Family of Betania', de: 'Familie von Betania', pt: 'Família de Betânia' }, to: '/famiglia-di-betania' },
    ],
  },
  {
    label: { it: 'Attività di solidarietà', en: 'What we do', de: 'Unsere Aktivitäten', pt: 'O que fazemos' },
    to: '/cosa-facciamo',
    children: [
      { label: { it: 'Mensa dei poveri', en: 'Soup kitchen', de: 'Armenküche', pt: "Refeitório dos pobres" }, to: '/cosa-facciamo/mensa-dei-poveri' },
      { label: { it: 'Sostegno alle famiglie', en: 'Support for families', de: 'Unterstützung für Familien', pt: 'Apoio às famílias' }, to: '/cosa-facciamo/sostegno-alle-famiglie' },
      { label: { it: 'Raccolta, smistamento e distribuzione', en: 'Collection, sorting and distribution', de: 'Sammlung, Sortierung und Verteilung', pt: 'Coleta, triagem e distribuição' }, to: '/cosa-facciamo/raccolta-smistamento-distribuzione' },
      { label: { it: 'Progetto Brasile', en: 'Brazil Project', de: 'Brasilien-Projekt', pt: 'Projeto Brasil' }, to: '/progetto-brasile' },
    ],
  },
  {
    label: { it: 'Sostienici', en: 'Support us', de: 'Unterstütze uns', pt: 'Apoie-nos' },
    to: '/sostienici',
    children: [
      { label: { it: 'Dona ora', en: 'Donate now', de: 'Jetzt spenden', pt: 'Doe agora' }, to: '/sostienici/dona-ora' },
      { label: { it: '5x1000', en: '5x1000', de: '5x1000', pt: '5x1000' }, to: '/sostienici/5x1000' },
      { label: { it: 'I nostri progetti', en: 'Our projects', de: 'Unsere Projekte', pt: 'Nossos projetos' }, to: '/sostienici/progetti' },
      { label: { it: 'Sostegno a distanza', en: 'Long-distance support', de: 'Patenschaften', pt: 'Apadrinhamento à distância' }, to: '/sostienici/sostegno-a-distanza' },
      { label: { it: 'Dona beni o servizi', en: 'Donate goods or services', de: 'Sachspenden oder Dienstleistungen', pt: 'Doe bens ou serviços' }, to: '/sostienici/dona-beni-o-servizi' },
      { label: { it: 'Lasciti solidali', en: 'Legacy gifts', de: 'Vermächtnisse', pt: 'Legados solidários' }, to: '/sostienici/lasciti-solidali' },
      { label: { it: 'Proponi la tua campagna', en: 'Propose your campaign', de: 'Schlage deine Kampagne vor', pt: 'Proponha sua campanha' }, to: '/sostienici/proponi-una-campagna' },
    ],
  },
  {
    label: { it: 'Case di Fraternità', en: 'Houses of Fraternity', de: 'Häuser der Fraternität', pt: 'Casas de Fraternidade' },
    to: '/cosa-facciamo/case-di-fraternita',
    children: [
      { label: { it: 'Casa Madre — Terlizzi', en: 'Mother House — Terlizzi', de: 'Mutterhaus — Terlizzi', pt: 'Casa Mãe — Terlizzi' }, to: '/cosa-facciamo/case-di-fraternita/terlizzi' },
      { label: { it: 'Casa San Quirino', en: 'Casa San Quirino', de: 'Haus San Quirino', pt: 'Casa San Quirino' }, to: '/cosa-facciamo/case-di-fraternita/san-quirino' },
      { label: { it: 'Casa di Rovio', en: 'Casa di Rovio', de: 'Haus Rovio', pt: 'Casa de Rovio' }, to: '/cosa-facciamo/case-di-fraternita/rovio' },
      { label: { it: 'Loreto', en: 'Loreto', de: 'Loreto', pt: 'Loreto' }, to: '/cosa-facciamo/case-di-fraternita/loreto' },
      { label: { it: 'Cella di Noceto', en: 'Cella di Noceto', de: 'Cella di Noceto', pt: 'Cella di Noceto' }, to: '/cosa-facciamo/case-di-fraternita/cella-di-noceto' },
      { label: { it: 'Roma', en: 'Rome', de: 'Rom', pt: 'Roma' }, to: '/cosa-facciamo/case-di-fraternita/roma' },
      { label: { it: 'Partanna', en: 'Partanna', de: 'Partanna', pt: 'Partanna' }, to: '/cosa-facciamo/case-di-fraternita/partanna' },
      { label: { it: 'Monte San Savino', en: 'Monte San Savino', de: 'Monte San Savino', pt: 'Monte San Savino' }, to: '/cosa-facciamo/case-di-fraternita/monte-san-savino' },
      { label: { it: 'Aschaffenburg', en: 'Aschaffenburg', de: 'Aschaffenburg', pt: 'Aschaffenburg' }, to: '/cosa-facciamo/case-di-fraternita/aschaffenburg' },
      { label: { it: 'Salvador de Bahia', en: 'Salvador de Bahia', de: 'Salvador de Bahia', pt: 'Salvador da Bahia' }, to: '/cosa-facciamo/case-di-fraternita/salvador-de-bahia' },
      { label: { it: 'Verona', en: 'Verona', de: 'Verona', pt: 'Verona' }, to: '/cosa-facciamo/case-di-fraternita/verona' },
      { label: { it: 'Leggiuno', en: 'Leggiuno', de: 'Leggiuno', pt: 'Leggiuno' }, to: '/cosa-facciamo/case-di-fraternita/leggiuno' },
    ],
  },
  {
    label: { it: 'Fondazione', en: 'Foundation', de: 'Stiftung', pt: 'Fundação' },
    to: '/fondazione',
    children: [{ label: { it: 'Media', en: 'Media', de: 'Medien', pt: 'Mídia' }, to: '/media' }],
  },
  { label: { it: 'Contatti', en: 'Contact', de: 'Kontakt', pt: 'Contato' }, to: '/contatti' },
]
