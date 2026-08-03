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
    ],
  },
  {
    label: 'Famiglia di Betania',
    to: '/famiglia-di-betania',
    children: [
      { label: 'Giovani di Betania', to: '/famiglia-di-betania/giovani-di-betania' },
      { label: 'Gruppi Ancilla Domini', to: '/famiglia-di-betania/gruppo-ancilla-domini' },
      { label: 'Oblati', to: '/famiglia-di-betania/oblati' },
      { label: 'Vivi la tua vocazione', to: '/famiglia-di-betania/vivi-la-tua-vocazione' },
    ],
  },
  {
    label: 'Cosa facciamo',
    to: '/cosa-facciamo',
    children: [{ label: 'Dove siamo (Case di Fraternità)', to: '/cosa-facciamo/case-di-fraternita' }],
  },
  { label: 'Progetto Brasile', to: '/progetto-brasile' },
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
  { label: 'Media', to: '/media' },
  { label: 'Fondazione', to: '/fondazione' },
  { label: 'Contatti', to: '/contatti' },
]
