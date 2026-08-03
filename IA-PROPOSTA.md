# Proposta nuova architettura di navigazione (IA) — FFBETANIA

Basata sull'inventario completo in `content-inventory/` (sito italiano). Obiettivo: stessi contenuti del sito attuale, organizzati in modo più chiaro per il visitatore, risolvendo le sovrapposizioni/ambiguità trovate nel sito esistente.

---

## 1. Problemi concreti del sito attuale (perché serve un redesign dell'IA)

1. **Due pagine quasi omonime con URL quasi identici**: `/attivita-solidarieta/` ("Attività di solidarietà" — cosa facciamo: mensa, sostegno famiglie, raccolta) e `/attivita-di-solidarieta/` ("Cosa puoi fare tu" — come donare: 5x1000, campagne, lasciti). Stesso nome quasi identico, contenuto completamente diverso (uno racconta cosa fa la Fraternità, l'altro chiede soldi). Fonte di confusione anche per chi gestisce il sito.
2. **Percorsi di donazione sparsi in 6 punti diversi**: Dona ora, 5x1000, le 5 pagine campagna, Dona beni/servizi, Lasciti solidali, Sostegno a distanza (dentro Progetto Brasile) — nessun punto unico "voglio aiutare, dove clicco?".
3. **"Famiglia di Betania" mescola pubblici molto diversi** senza distinzione chiara: adolescenti (Giovani di Betania), gruppi di preghiera (Ancilla Domini), laici consacrati (Oblati), famiglie — tutti sotto un hub generico.
4. **Contenuti duplicati/ripetuti in più pagine**: il Progetto Brasile è raccontato (con testi diversi) sia in "Attività di solidarietà" sia in "Fondazione" sia nella sua pagina dedicata sia in 3 delle 5 campagne.
5. **"Case di Fraternità" è una pagina debole**: solo una mappa (peraltro non estraibile, sarà placeholder) senza reale contenuto testuale sulle singole case — mentre nella cronologia storica e in 7 pagine "orfane" inglesi esiste materiale reale su queste case, oggi non valorizzato.
6. **Nessuna distinzione tra "chi siamo / cosa facciamo / come aiutare"**: è lo schema standard di un sito no-profit e nel sito attuale è solo parzialmente presente.

---

## 2. Nuova architettura — VERSIONE FINALE (decisioni prese in §4)

```
Home
├── Chi siamo
│   ├── Il nostro carisma        (Preghiera, Accoglienza, Vita Fraterna)
│   ├── Padre Pancrazio           (fondatore)
│   └── La nostra storia          (cronologia + Governo generale)
├── Famiglia di Betania            ("cammina con noi", non è una richiesta di soldi)
│   ├── Giovani di Betania         (con le foto dei campi/eventi incorporate direttamente qui, non in una galleria separata)
│   ├── Gruppi Ancilla Domini      (con l'elenco dei 18 gruppi territoriali)
│   ├── Oblati
│   ├── Gruppo Nazareth / Gruppi di famiglie   (sezioni dentro l'hub, come oggi)
│   └── Vivi la tua vocazione      (discernimento — PLACEHOLDER form)
├── Cosa facciamo                  (ex "Attività di solidarietà", senza più sovrapporsi a "Sostienici")
│   ├── Mensa dei poveri / Sostegno alle famiglie / Raccolta e distribuzione
│   ├── Dove siamo (Case di Fraternità)   (PLACEHOLDER mappa/elenco, contenuto storico come testo di supporto)
│   └── Progetto Brasile           (Asilo N.S. Aparecida, Scuola in costruzione, cronologia lavori — foto/video incorporati qui)
├── Sostienici                     (hub UNICO per ogni forma di aiuto)
│   ├── Dona ora                   (PLACEHOLDER modulo)
│   ├── 5x1000
│   ├── I nostri progetti (campagne)   → schede: Scuola Brasile, Dispensa Terlizzi, Progetto Brasile generico (+ 2 campagne concluse archiviate: Giubileo GdB Salvador, Aiutiamo Valentina)
│   ├── Sostegno a distanza        (adozione a distanza bambino Brasile — cross-link da Progetto Brasile)
│   ├── Dona beni o servizi
│   ├── Lasciti solidali
│   └── Proponi la tua campagna di raccolta fondi
└── Fondazione                     (entità legale/ETS, trasparenza, bilanci, statuto)
    ├── Media                      (video + Pubblicazioni: bollettino Ancilla Domini, 18 PDF)
    └── Contatti                   (recapiti + PLACEHOLDER form + mappa sede)

Footer (tutte le pagine): dati legali Fraternità + Fondazione, Privacy Policy, social, selettore lingua, link rapidi 5x1000/Dona ora
```

**Nav di primo livello: 5 voci** (Chi siamo, Famiglia di Betania, Cosa facciamo, Sostienici, Fondazione) — consolidata da un impianto iniziale di 8, spostando Media e Contatti come sottovoci di Fondazione (le 3 sono le pagine più "istituzionali/di servizio") e Progetto Brasile come sottovoce di Cosa facciamo (dopo una fase in cui era stato promosso a voce singola, poi riportato sotto per snellire ulteriormente la nav).

**Decisioni applicate (vedi §4 per il dettaglio):**
- **Archivio Notizie**: NON migrato ora come pagine dedicate. Un piccolo teaser con 3 notizie reali è comunque presente in home ("Ultime notizie"), senza link a singole pagine articolo — l'archivio completo resta per il futuro CMS.
- **Gallerie fotografiche**: NON consolidate in un'unica pagina. Le foto restano distribuite nelle pagine di contesto (es. le foto dei campi GdB dentro "Giovani di Betania", le foto del cantiere dentro "Progetto Brasile"). Le gallerie di eventi istituzionali generici senza una pagina di contesto ovvia (convegni, professioni, ordinazioni) restano fuori scope per ora, insieme all'archivio news.
- **Progetto Brasile**: sottovoce di "Cosa facciamo" (nav consolidata a 5 voci).
- **"Il Segreto del Frate"**: diventerà un futuro articolo/news (quando ci sarà il CMS) — non costruito ora.

---

## 3. Mappa contenuti vecchio → nuovo (niente va perso)

| Contenuto attuale | URL attuale | Nuova collocazione |
|---|---|---|
| La nostra vita (hub) | /la-nostra-vita/ | Chi siamo (contenuto distribuito tra le 3 sotto-pagine) |
| Padre Pancrazio | /il-fondatore/ | Chi siamo → Padre Pancrazio |
| Carisma | /carisma/ | Chi siamo → Il nostro carisma |
| Storia + Governo generale | (dentro /la-nostra-vita/) | Chi siamo → La nostra storia |
| Vivi la tua vocazione | (dentro /la-nostra-vita/) | Famiglia di Betania → Vivi la tua vocazione |
| Famiglia di Betania (hub) | /famiglia-di-betania/ | Famiglia di Betania (hub) |
| Giovani di Betania | /famiglia-di-betania/giovani-di-betania/ | Famiglia di Betania → Giovani di Betania |
| Gruppo Ancilla Domini | /famiglia-di-betania/gruppo-ancilla-domini/ | Famiglia di Betania → Gruppi Ancilla Domini |
| Oblati | /famiglia-di-betania/oblati/ | Famiglia di Betania → Oblati |
| Attività di solidarietà (mensa/famiglie/raccolta) | /attivita-solidarieta/ | Cosa facciamo |
| Progetto Brasile | /progetto-brasile/ | Cosa facciamo → Progetto Brasile |
| Case di Fraternità | /case-di-fraternita/ | Cosa facciamo → Dove siamo (placeholder) |
| Cosa puoi fare tu (hub) | /attivita-di-solidarieta/ | **Sciolta**: contenuto distribuito nelle voci di "Sostienici" sotto |
| Dona ora | /dona-ora/ | Sostienici → Dona ora (placeholder) |
| 5x1000 | /5x1000/ | Sostienici → 5x1000 |
| 5 campagne crowdfunding | /campagne/... | Sostienici → I nostri progetti (con stato "attiva"/"conclusa") |
| Sostegno a distanza | (dentro /progetto-brasile/) | Sostienici → Sostegno a distanza (cross-link da Progetto Brasile) |
| Dona beni o servizi | (dentro /attivita-di-solidarieta/) | Sostienici → Dona beni o servizi |
| Lasciti solidali | (dentro /attivita-di-solidarieta/) | Sostienici → Lasciti solidali |
| Proponi solidarietà | (dentro /attivita-di-solidarieta/) | Sostienici → Proponi la tua campagna |
| Media (video, ex hub) | /media/ | Media → Video |
| Archivio News (~171 articoli) | /news/ | **Fuori scope** — gestito in futuro con CMS dedicato |
| Gallerie fotografiche (~55-60) | /project/... | **Non consolidate**: quelle con una pagina di contesto ovvia (es. campi GdB) restano incorporate lì; le altre (eventi istituzionali generici) fuori scope per ora, insieme alle news |
| Ancilla Domini (18 PDF) | /articoli-ancilla-domini/ | Media → Pubblicazioni |
| "Il Segreto del Frate" (birra solidale, dentro Progetto Brasile) | (dentro /progetto-brasile/) | **Fuori scope** — diventerà un futuro articolo/news |
| Fondazione | /fondazione/ | Fondazione (invariata) |
| Contattaci | /contattaci/ | Contatti |
| Newsletter | (ancora in home) | Modulo nel footer o in Contatti (placeholder) |
| AncillApp | link esterno | Link esterno nel footer, come oggi |
| Privacy Policy | /privacy-policy/ | Footer (invariata) |

---

## 4. Decisioni (prese)

1. **Archivio Notizie (~171 articoli)**: fuori scope, gestito in futuro con un CMS dedicato. Teaser con 3 notizie reali in home, senza pagine di dettaglio.
2. **Gallerie fotografiche (~55-60 eventi)**: non consolidate in un'unica pagina. Foto distribuite nelle pagine di contesto pertinenti.
3. **Progetto Brasile**: sottovoce di "Cosa facciamo" (nav consolidata a 5 voci di primo livello).
4. **"Il Segreto del Frate"**: diventerà un futuro articolo/news, tralasciato per ora.
5. **Media e Contatti**: sottovoci di "Fondazione", per ridurre le voci di primo livello da 8 a 5.

---

## 5. Prossimo passo

Struttura confermata. Ora si passa all'implementazione: aggiornare `src/app/routes.tsx` con le nuove pagine, i componenti `Header`/`Footer` con la nuova nav, e popolare i contenuti dai file di `content-inventory/`, sezione per sezione, così da poter validare man mano.
