import scuolaInizioLavori from '../../assets/news/scuola-inizio-lavori-2026.jpg'
import scuolaPreghiera from '../../assets/news/scuola-preghiera-bimbi-2026.jpg'
import ritiroVacanze1 from '../../assets/news/ritiro-vacanze-2026.jpeg'
import ritiroVacanze2 from '../../assets/news/ritiro-vacanze-2026-2.jpeg'
import libroPadrePancrazio from '../../assets/news/libro-padre-pancrazio-2026.jpg'
import mattarellaCover from '../../assets/news/mattarella-visita-2024-cover.jpg'
import mattarella1 from '../../assets/news/mattarella-visita-2024-1.jpg'
import mattarella2 from '../../assets/news/mattarella-visita-2024-2.jpg'
import mattarella3 from '../../assets/news/mattarella-visita-2024-3.jpg'

export interface NewsImage {
  src: string
  alt: string
}

export interface NewsArticle {
  slug: string
  titolo: string
  categoria: string
  data: string
  dataOrdinamento: string
  immagineCopertina: string
  immagineAlt: string
  paragrafi: string[]
  immaginiCorpo?: NewsImage[]
  videoId?: string
  relatedLabel?: string
  relatedTo?: string
}

// Contenuti in italiano soltanto: sul sito originale ffbetania.net/news/
// l'archivio notizie non ha mai avuto una versione en/de/pt.
export const newsArticles: NewsArticle[] = [
  {
    slug: 'la-scuola-prende-forma-i-lavori-sono-iniziati',
    titolo: 'La scuola prende forma: i lavori sono iniziati!',
    categoria: 'Progetto Brasile',
    data: 'Luglio 2026',
    dataOrdinamento: '2026-07-01',
    immagineCopertina: scuolaInizioLavori,
    immagineAlt: 'Inizio dei lavori di costruzione della scuola in Brasile',
    paragrafi: [
      'Come già ormai saprete, sono ufficialmente iniziati i lavori per la costruzione della nuova scuola. In queste prime settimane è stata avviata la realizzazione delle fondamenta: il primo passo concreto verso un progetto che porterà nuove opportunità a tanti giovani brasiliani.',
      "Siamo profondamente felici di vedere prendere forma questo sogno del nostro fondatore, un'opera che offrirà istruzione, accoglienza e speranza alle nuove generazioni.",
    ],
    immaginiCorpo: [
      { src: scuolaPreghiera, alt: 'Bambini in preghiera con i membri della Fraternità sul cantiere della scuola in Brasile' },
    ],
    relatedLabel: 'Insieme costruiamo una scuola e un futuro',
    relatedTo: '/sostienici/progetti/insieme-costruiamo-una-scuola-e-un-futuro',
  },
  {
    slug: 'ritiro-vacanza-familiari-2026',
    titolo: 'Ritiro-vacanza familiari 2026',
    categoria: 'Vita fraterna',
    data: '28 aprile 2026',
    dataOrdinamento: '2026-04-28',
    immagineCopertina: ritiroVacanze1,
    immagineAlt: 'Locandina del ritiro-vacanza familiari "Rinati alla luce", agosto 2026',
    paragrafi: [
      'La Fraternità Francescana di Betania invita i familiari di Betania e amici, famiglie o singoli, al ritiro-vacanza estivo "Rinati alla luce" — "In cammino con San Francesco: conversione, lode, missione", a Nocera Umbra dall\'1 all\'8 agosto 2026.',
      "Sarà un'occasione per condividere momenti di fraternità e preghiera, divertimento e condivisione. Per informazioni e iscrizioni: Helvia, 347 410 4201.",
    ],
    immaginiCorpo: [
      { src: ritiroVacanze2, alt: 'Seconda locandina del ritiro-vacanza familiari "Rinati alla luce", agosto 2026' },
    ],
  },
  {
    slug: 'padre-pancrazio-vita-di-un-uomo-di-dio-fratello-e-padre',
    titolo: 'Padre Pancrazio. Vita di un uomo di Dio, fratello e padre',
    categoria: 'Pubblicazioni',
    data: 'Marzo 2026',
    dataOrdinamento: '2026-03-01',
    immagineCopertina: libroPadrePancrazio,
    immagineAlt: 'Copertina del libro "Padre Pancrazio. Vita di un uomo di Dio, fratello e padre"',
    paragrafi: [
      'Siamo felici di comunicarvi che è stato pubblicato il nuovo libro dedicato a Padre Pancrazio, fondatore della nostra Fraternità Francescana di Betania, Cappuccino e uomo di Dio, che con la sua vita ha testimoniato il Vangelo in modo concreto, semplice e profondamente fraterno.',
      '"Padre Pancrazio. Vita di un uomo di Dio, fratello e padre" è un libro realizzato dalla Fraternità Francescana di Betania che ripercorre il cammino umano e spirituale del fondatore: dall\'infanzia segnata da una fede autentica, agli anni della formazione cappuccina, fino all\'esperienza a Loreto e alla nascita della Fraternità. Attraverso ricordi, testimonianze e scritti, emerge il volto di un padre e di un fratello, capace ancora oggi di parlare al cuore e di indicare una strada di comunione, minorità e speranza.',
      "Il volume è disponibile su vari siti online. Un'occasione preziosa per conoscere più da vicino la sua storia e lasciarsi accompagnare dalla sua eredità spirituale.",
    ],
    relatedLabel: 'Padre Pancrazio',
    relatedTo: '/chi-siamo/padre-pancrazio',
  },
  {
    slug: 'visita-del-presidente-mattarella-alla-nostra-fraternita-in-brasile',
    titolo: 'Il Presidente Mattarella in Brasile',
    categoria: 'Progetto Brasile',
    data: '19 luglio 2024',
    dataOrdinamento: '2024-07-19',
    immagineCopertina: mattarellaCover,
    immagineAlt: 'Il Presidente della Repubblica Sergio Mattarella in visita alla Fraternità FFB Salvador de Bahia',
    paragrafi: [
      'Carissimi amici, siamo felici di condividervi questa esperienza: venerdì 19 luglio 2024 abbiamo avuto il piacere di ricevere la visita del Presidente della Repubblica, Sergio Mattarella, presso la nostra Missione in Brasile.',
      "Il Capo dello Stato si trovava nel Paese in occasione del 150° anniversario dell'emigrazione italiana, un viaggio dedicato all'incontro con le diverse realtà italiane presenti sul territorio. Come tappa conclusiva del suo percorso, ha scelto di visitare anche la nostra Fraternità e l'asilo.",
      "È stata un'esperienza carica di emozione e di grande grazia.",
    ],
    immaginiCorpo: [
      { src: mattarella1, alt: 'Il Presidente Mattarella accolto alla Fraternità FFB Salvador de Bahia' },
      { src: mattarella2, alt: "Il Presidente Mattarella con i bambini dell'asilo FFB Salvador de Bahia" },
      { src: mattarella3, alt: 'Visita del Presidente Mattarella alla Fraternità FFB Salvador de Bahia' },
    ],
    videoId: 'CzXoQBaOHis',
    relatedLabel: 'Progetto Brasile',
    relatedTo: '/progetto-brasile',
  },
]

export function getNewsArticle(slug: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.slug === slug)
}
