export interface NavChild {
  label: string
  to: string
}

export interface NavItem {
  label: string
  to: string
  children?: NavChild[]
}

export const navItems: NavItem[] = [
  {
    label: 'Chi siamo',
    to: '/chi-siamo',
    children: [
      { label: 'Il nostro carisma', to: '/chi-siamo/carisma' },
      { label: 'Padre Pancrazio', to: '/chi-siamo/padre-pancrazio' },
      { label: 'La nostra storia', to: '/chi-siamo/storia' },
      { label: 'Famiglia di Betania', to: '/famiglia-di-betania' },
    ],
  },
  {
    label: 'Attività di solidarietà',
    to: '/cosa-facciamo',
    children: [
      { label: 'Mensa dei poveri', to: '/cosa-facciamo/mensa-dei-poveri' },
      { label: 'Sostegno alle famiglie', to: '/cosa-facciamo/sostegno-alle-famiglie' },
      { label: 'Raccolta, smistamento e distribuzione', to: '/cosa-facciamo/raccolta-smistamento-distribuzione' },
      { label: 'Progetto Brasile', to: '/progetto-brasile' },
    ],
  },
  {
    label: 'Sostienici',
    to: '/sostienici',
    children: [
      { label: 'Dona ora', to: '/sostienici/dona-ora' },
      { label: '5x1000', to: '/sostienici/5x1000' },
      { label: 'I nostri progetti', to: '/sostienici/progetti' },
      { label: 'Sostegno a distanza', to: '/sostienici/sostegno-a-distanza' },
      { label: 'Dona beni o servizi', to: '/sostienici/dona-beni-o-servizi' },
      { label: 'Lasciti solidali', to: '/sostienici/lasciti-solidali' },
      { label: 'Proponi la tua campagna', to: '/sostienici/proponi-una-campagna' },
    ],
  },
  {
    label: 'Case di Fraternità',
    to: '/cosa-facciamo/case-di-fraternita',
    children: [
      { label: 'Casa Madre — Terlizzi', to: '/cosa-facciamo/case-di-fraternita/terlizzi' },
      { label: 'Casa San Quirino', to: '/cosa-facciamo/case-di-fraternita/san-quirino' },
      { label: 'Casa di Rovio', to: '/cosa-facciamo/case-di-fraternita/rovio' },
      { label: 'Loreto', to: '/cosa-facciamo/case-di-fraternita/loreto' },
      { label: 'Cella di Noceto', to: '/cosa-facciamo/case-di-fraternita/cella-di-noceto' },
      { label: 'Roma', to: '/cosa-facciamo/case-di-fraternita/roma' },
      { label: 'Partanna', to: '/cosa-facciamo/case-di-fraternita/partanna' },
      { label: 'Monte San Savino', to: '/cosa-facciamo/case-di-fraternita/monte-san-savino' },
      { label: 'Aschaffenburg', to: '/cosa-facciamo/case-di-fraternita/aschaffenburg' },
      { label: 'Salvador de Bahia', to: '/cosa-facciamo/case-di-fraternita/salvador-de-bahia' },
      { label: 'Verona', to: '/cosa-facciamo/case-di-fraternita/verona' },
      { label: 'Leggiuno', to: '/cosa-facciamo/case-di-fraternita/leggiuno' },
    ],
  },
  {
    label: 'Fondazione',
    to: '/fondazione',
    children: [{ label: 'Media', to: '/media' }],
  },
  { label: 'Contatti', to: '/contatti' },
]
