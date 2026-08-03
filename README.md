# FFBetania

Progetto React + TypeScript + Vite. Stack e struttura allineati al progetto
gemello **FFB-SALVADOR**: Tailwind CSS v4, alias `@` per `src`, routing con
`react-router` e cartelle organizzate sotto `src/app/`.

## Stack

- **React 19 + TypeScript + Vite**
- **Tailwind CSS v4** (via `@tailwindcss/vite`, nessun `tailwind.config.js`:
  temi e token colore sono definiti in `src/styles/theme.css` con `@theme inline`)
- **react-router** (`createBrowserRouter`, pacchetto unificato — non
  `react-router-dom`) con basename `import.meta.env.BASE_URL`
- **lucide-react** per le icone, **clsx** + **tailwind-merge** (utility `cn()`
  in `src/app/components/ui/utils.ts`) e **class-variance-authority** come
  base pronta per aggiungere componenti in stile shadcn/ui
- **Context API custom** per le lingue (`src/app/context/LanguageContext.tsx`),
  stesso pattern di FFB-SALVADOR — niente react-i18next

## Avvio in locale

```bash
npm install
npm run dev
```

Il sito sarà disponibile su `http://localhost:5173`.

## Build pulita

Per una build "da zero" (rimuove `dist` e la cache di Vite, reinstalla le
dipendenze da `package-lock.json` con `npm ci`, poi builda e verifica l'output):

```bash
npm run build:clean
```

equivalente a lanciare direttamente:

```bash
./build.sh
```

## Pubblicazione su GitHub Pages

```bash
npm run deploy
```

`predeploy` esegue la build e poi `scripts/copy-404.mjs`, che duplica
`dist/index.html` in `dist/404.html`. `deploy` pubblica `dist` sul branch
`gh-pages` tramite `gh-pages`.

### Routing su GitHub Pages

Il progetto usa `createBrowserRouter` (URL "pulite", es. `/about`, non
`/#/about`), come FFB-SALVADOR. GitHub Pages però non gestisce nativamente le
route lato client: su refresh o link diretto a una sotto-pagina risponderebbe
con un vero 404. Per questo `predeploy` copia `index.html` in `404.html` prima
del deploy — GitHub Pages serve quella copia per qualunque path sconosciuto, il
bundle si carica comunque e React Router gestisce la route corretta lato
client.

### Placeholder già impostati

- `vite.config.ts` → `base: '/FFBETANIA/'`
- `package.json` → `"homepage": "https://Lucaminic.github.io/FFBETANIA/"`

Se in futuro rinomini il repository, aggiorna entrambi questi valori.

## Come aggiungere una nuova pagina

1. Crea il componente della pagina in `src/app/pages/NuovaPagina.tsx`:

   ```tsx
   import { useT } from '../context/LanguageContext'

   export function NuovaPagina() {
     const t = useT()
     return (
       <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
         <h1 className="text-3xl font-bold text-[var(--deep-blue)]">
           {t({ it: 'Titolo', en: 'Title' })}
         </h1>
       </section>
     )
   }
   ```

2. Aggiungi la route in `src/app/routes.tsx` dentro `children` (con
   `lazy` per il code-splitting, stesso pattern usato per `about`):

   ```tsx
   { path: 'nuova-pagina', lazy: () => import('./pages/NuovaPagina').then((m) => ({ Component: m.NuovaPagina })) }
   ```

3. Aggiungi il link nella nav di `src/app/components/Header.tsx` (array
   `navItems`) e, se serve, in `Footer.tsx`.

4. Le traduzioni non vivono in file JSON separati: si passano inline a
   `t({ it: '...', en: '...' })` nel punto in cui servono, come in
   `HomePage.tsx` / `AboutPage.tsx`.

## Struttura principale

```
src/
  app/
    App.tsx            RouterProvider
    routes.tsx          configurazione centralizzata delle route
    layouts/
      RootLayout.tsx    Header + Outlet + Footer, avvolge LanguageProvider
    context/
      LanguageContext.tsx  Context it/en + hook useT()
    components/
      Header.tsx, Footer.tsx, Button.tsx, ScrollToTop.tsx, LanguageSwitcher.tsx
      ui/
        utils.ts        cn() (clsx + tailwind-merge)
    pages/
      HomePage.tsx, AboutPage.tsx
  styles/
    index.css           entry point, importa gli altri file in ordine
    fonts.css            font Nunito (Google Fonts)
    tailwind.css          import di Tailwind v4 + tw-animate-css
    theme.css            token colore shadcn + palette brand (deep-blue,
                          warm-orange, warm-red, beige, soft-green)
    globals.css          fix scroll-behavior
  assets/                immagini e risorse statiche
```
