import { createBrowserRouter } from 'react-router'
import { RootLayout } from './layouts/RootLayout'
import { HomePage } from './pages/HomePage'
import { ComingSoon } from './components/ComingSoon'

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
        { path: 'famiglia-di-betania', element: <ComingSoon title="Famiglia di Betania" /> },
        {
          path: 'famiglia-di-betania/giovani-di-betania',
          element: <ComingSoon title="Giovani di Betania" />,
        },
        {
          path: 'famiglia-di-betania/gruppo-ancilla-domini',
          element: <ComingSoon title="Gruppi Ancilla Domini" />,
        },
        { path: 'famiglia-di-betania/oblati', element: <ComingSoon title="Oblati" /> },
        {
          path: 'famiglia-di-betania/vivi-la-tua-vocazione',
          element: <ComingSoon title="Vivi la tua vocazione" />,
        },

        // Cosa facciamo
        { path: 'cosa-facciamo', element: <ComingSoon title="Cosa facciamo" /> },
        { path: 'cosa-facciamo/case-di-fraternita', element: <ComingSoon title="Dove siamo" /> },

        // Progetto Brasile
        { path: 'progetto-brasile', element: <ComingSoon title="Progetto Brasile" /> },

        // Sostienici
        { path: 'sostienici', element: <ComingSoon title="Sostienici" /> },
        { path: 'sostienici/dona-ora', element: <ComingSoon title="Dona ora" /> },
        { path: 'sostienici/5x1000', element: <ComingSoon title="5x1000" /> },
        { path: 'sostienici/progetti', element: <ComingSoon title="I nostri progetti" /> },
        { path: 'sostienici/sostegno-a-distanza', element: <ComingSoon title="Sostegno a distanza" /> },
        { path: 'sostienici/dona-beni-o-servizi', element: <ComingSoon title="Dona beni o servizi" /> },
        { path: 'sostienici/lasciti-solidali', element: <ComingSoon title="Lasciti solidali" /> },
        { path: 'sostienici/proponi-una-campagna', element: <ComingSoon title="Proponi la tua campagna" /> },

        // Media / Fondazione / Contatti
        { path: 'media', element: <ComingSoon title="Media" /> },
        { path: 'fondazione', element: <ComingSoon title="Fondazione" /> },
        { path: 'contatti', element: <ComingSoon title="Contatti" /> },
        { path: 'privacy-policy', element: <ComingSoon title="Privacy Policy" /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
)
