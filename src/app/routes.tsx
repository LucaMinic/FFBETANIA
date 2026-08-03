import { createBrowserRouter } from 'react-router'
import { RootLayout } from './layouts/RootLayout'
import { HomePage } from './pages/HomePage'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: RootLayout,
      children: [
        { index: true, Component: HomePage },

        // Chi siamo
        {
          path: 'chi-siamo',
          lazy: () => import('./pages/chi-siamo/ChiSiamoPage').then((m) => ({ Component: m.ChiSiamoPage })),
        },
        {
          path: 'chi-siamo/carisma',
          lazy: () => import('./pages/chi-siamo/CarismaPage').then((m) => ({ Component: m.CarismaPage })),
        },
        {
          path: 'chi-siamo/padre-pancrazio',
          lazy: () =>
            import('./pages/chi-siamo/PadrePancrazioPage').then((m) => ({ Component: m.PadrePancrazioPage })),
        },
        {
          path: 'chi-siamo/storia',
          lazy: () => import('./pages/chi-siamo/StoriaPage').then((m) => ({ Component: m.StoriaPage })),
        },

        // Famiglia di Betania
        {
          path: 'famiglia-di-betania',
          lazy: () =>
            import('./pages/famiglia-di-betania/FamigliaDiBetaniaPage').then((m) => ({
              Component: m.FamigliaDiBetaniaPage,
            })),
        },
        {
          path: 'famiglia-di-betania/giovani-di-betania',
          lazy: () =>
            import('./pages/famiglia-di-betania/GiovaniDiBetaniaPage').then((m) => ({
              Component: m.GiovaniDiBetaniaPage,
            })),
        },
        {
          path: 'famiglia-di-betania/gruppo-ancilla-domini',
          lazy: () =>
            import('./pages/famiglia-di-betania/GruppoAncillaDominiPage').then((m) => ({
              Component: m.GruppoAncillaDominiPage,
            })),
        },
        {
          path: 'famiglia-di-betania/oblati',
          lazy: () => import('./pages/famiglia-di-betania/OblatiPage').then((m) => ({ Component: m.OblatiPage })),
        },
        {
          path: 'famiglia-di-betania/vivi-la-tua-vocazione',
          lazy: () =>
            import('./pages/famiglia-di-betania/VivilaTuaVocazionePage').then((m) => ({
              Component: m.VivilaTuaVocazionePage,
            })),
        },

        // Cosa facciamo
        {
          path: 'cosa-facciamo',
          lazy: () => import('./pages/cosa-facciamo/CosaFacciamoPage').then((m) => ({ Component: m.CosaFacciamoPage })),
        },
        {
          path: 'cosa-facciamo/case-di-fraternita',
          lazy: () =>
            import('./pages/cosa-facciamo/CaseDiFraternitaPage').then((m) => ({ Component: m.CaseDiFraternitaPage })),
        },
        {
          path: 'cosa-facciamo/mensa-dei-poveri',
          lazy: () =>
            import('./pages/cosa-facciamo/MensaDeiPoveriPage').then((m) => ({ Component: m.MensaDeiPoveriPage })),
        },
        {
          path: 'cosa-facciamo/sostegno-alle-famiglie',
          lazy: () =>
            import('./pages/cosa-facciamo/SostegnoAlleFamigliePage').then((m) => ({
              Component: m.SostegnoAlleFamigliePage,
            })),
        },
        {
          path: 'cosa-facciamo/raccolta-smistamento-distribuzione',
          lazy: () =>
            import('./pages/cosa-facciamo/RaccoltaSmistamentoDistribuzionePage').then((m) => ({
              Component: m.RaccoltaSmistamentoDistribuzionePage,
            })),
        },

        // Progetto Brasile
        {
          path: 'progetto-brasile',
          lazy: () => import('./pages/ProgettoBrasilePage').then((m) => ({ Component: m.ProgettoBrasilePage })),
        },

        // Sostienici
        {
          path: 'sostienici',
          lazy: () => import('./pages/sostienici/SostieniciPage').then((m) => ({ Component: m.SostieniciPage })),
        },
        {
          path: 'sostienici/dona-ora',
          lazy: () => import('./pages/sostienici/DonaOraPage').then((m) => ({ Component: m.DonaOraPage })),
        },
        {
          path: 'sostienici/5x1000',
          lazy: () => import('./pages/sostienici/CinqueXMillePage').then((m) => ({ Component: m.CinqueXMillePage })),
        },
        {
          path: 'sostienici/progetti',
          lazy: () => import('./pages/sostienici/ProgettiPage').then((m) => ({ Component: m.ProgettiPage })),
        },
        {
          path: 'sostienici/sostegno-a-distanza',
          lazy: () =>
            import('./pages/sostienici/SostegnoADistanzaPage').then((m) => ({ Component: m.SostegnoADistanzaPage })),
        },
        {
          path: 'sostienici/dona-beni-o-servizi',
          lazy: () =>
            import('./pages/sostienici/DonaBeniOServiziPage').then((m) => ({ Component: m.DonaBeniOServiziPage })),
        },
        {
          path: 'sostienici/lasciti-solidali',
          lazy: () =>
            import('./pages/sostienici/LascitiSolidaliPage').then((m) => ({ Component: m.LascitiSolidaliPage })),
        },
        {
          path: 'sostienici/proponi-una-campagna',
          lazy: () =>
            import('./pages/sostienici/ProponiUnaCampagnaPage').then((m) => ({ Component: m.ProponiUnaCampagnaPage })),
        },

        // Media / Fondazione / Contatti
        {
          path: 'media',
          lazy: () => import('./pages/MediaPage').then((m) => ({ Component: m.MediaPage })),
        },
        {
          path: 'fondazione',
          lazy: () => import('./pages/FondazionePage').then((m) => ({ Component: m.FondazionePage })),
        },
        {
          path: 'contatti',
          lazy: () => import('./pages/ContattiPage').then((m) => ({ Component: m.ContattiPage })),
        },
        {
          path: 'privacy-policy',
          lazy: () => import('./pages/PrivacyPolicyPage').then((m) => ({ Component: m.PrivacyPolicyPage })),
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
)
