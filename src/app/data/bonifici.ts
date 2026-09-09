export interface Bonifico {
  banca: string
  beneficiario: string
  iban: string
}

export const bonifici: Bonifico[] = [
  {
    banca: 'Intesa Sanpaolo S.P.A',
    beneficiario: 'Fraternità Francescana di Betania Fondazione ETS',
    iban: 'IT48O0306909606100000106797',
  },
  {
    banca: "Banca Popolare dell'Emilia Romagna — filiale di Molfetta",
    beneficiario: 'Fraternità Francescana di Betania Fondazione ETS',
    iban: 'IT75F0538741562000002260111',
  },
]
