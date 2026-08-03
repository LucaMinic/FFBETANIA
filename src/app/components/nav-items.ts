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
  { label: 'Case di Fraternità', to: '/cosa-facciamo/case-di-fraternita' },
  {
    label: 'Fondazione',
    to: '/fondazione',
    children: [{ label: 'Media', to: '/media' }],
  },
  { label: 'Contatti', to: '/contatti' },
]
