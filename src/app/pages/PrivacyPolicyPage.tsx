import { PageHero } from '../components/PageHero'
import { useT } from '../context/LanguageContext'
import famigliari from '../../assets/famiglia-di-betania/famigliari.jpg'

export function PrivacyPolicyPage() {
  const t = useT()
  return (
    <>
      <PageHero
        image={famigliari}
        title="Privacy Policy"
        subtitle={t({
          it: 'Informativa sul trattamento dei dati personali (GDPR 679/2016).',
          en: 'Notice on the processing of personal data (GDPR 679/2016).',
          de: 'Hinweis zur Verarbeitung personenbezogener Daten (DSGVO 679/2016).',
          pt: 'Aviso sobre o tratamento de dados pessoais (RGPD 679/2016).',
        })}
      />
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <p className="text-sm text-gray-400 text-center mb-12">
        {t({ it: 'Aggiornata a gennaio 2022.', en: 'Last updated January 2022.', de: 'Zuletzt aktualisiert im Januar 2022.', pt: 'Atualizada em janeiro de 2022.' })}
      </p>

      <p className="text-gray-600 leading-relaxed mb-12">
        {t({
          it: 'La presente informativa descrive le modalità di trattamento dei dati personali degli utenti che accedono al sito web e ai servizi offerti per le attività caritative, religiose e culturali della Fraternità Francescana di Betania.',
          en: "This notice describes how the personal data of users who access the website and the services offered for the charitable, religious and cultural activities of the Fraternità Francescana di Betania are processed.",
          de: 'Dieser Hinweis beschreibt die Verarbeitung personenbezogener Daten der Nutzer, die auf die Website und die für die karitativen, religiösen und kulturellen Aktivitäten der Fraternità Francescana di Betania angebotenen Dienste zugreifen.',
          pt: 'O presente aviso descreve as modalidades de tratamento dos dados pessoais dos utilizadores que acedem ao site web e aos serviços oferecidos para as atividades caritativas, religiosas e culturais da Fraternità Francescana di Betania.',
        })}
      </p>

      <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-3">
        1. {t({ it: 'Contitolari del trattamento', en: 'Joint data controllers', de: 'Gemeinsam Verantwortliche', pt: 'Corresponsáveis pelo tratamento' })}
      </h2>
      <p className="text-gray-600 leading-relaxed mb-3">
        {t({
          it: 'I contitolari del trattamento sono la',
          en: 'The joint data controllers are',
          de: 'Die gemeinsam Verantwortlichen für die Verarbeitung sind die',
          pt: 'Os corresponsáveis pelo tratamento são a',
        })}{' '}
        <strong>Fraternità Francescana di Betania Fondazione ETS</strong> (CF 93346130722){' '}
        {t({ it: 'e la', en: 'and the', de: 'und die', pt: 'e a' })} <strong>Fraternità Francescana di Betania</strong> (CF 93017320727),{' '}
        {t({
          it: 'entrambe con sede in Via Pasquale Fiore 143, 70038 Terlizzi (BA). Contatto:',
          en: 'both based at Via Pasquale Fiore 143, 70038 Terlizzi (BA), Italy. Contact:',
          de: 'beide mit Sitz in Via Pasquale Fiore 143, 70038 Terlizzi (BA), Italien. Kontakt:',
          pt: 'ambas com sede em Via Pasquale Fiore 143, 70038 Terlizzi (BA), Itália. Contato:',
        })}{' '}
        <a href="mailto:privacy@ffbetania.net" className="text-[var(--warm-orange)] font-semibold">
          privacy@ffbetania.net
        </a>
        .
      </p>
      <p className="text-gray-600 leading-relaxed mb-8">
        {t({
          it: "Il trattamento avviene presso la sede dei contitolari, tramite personale autorizzato per la manutenzione e l'aggiornamento del sito.",
          en: 'Processing takes place at the headquarters of the joint controllers, by personnel authorized for the maintenance and updating of the site.',
          de: 'Die Verarbeitung erfolgt am Sitz der gemeinsam Verantwortlichen durch für die Wartung und Aktualisierung der Website autorisiertes Personal.',
          pt: 'O tratamento ocorre na sede dos corresponsáveis, através de pessoal autorizado para a manutenção e atualização do site.',
        })}
      </p>

      <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-3">
        2. {t({ it: 'Finalità del trattamento e base giuridica', en: 'Purposes of processing and legal basis', de: 'Zwecke der Verarbeitung und Rechtsgrundlage', pt: 'Finalidades do tratamento e base jurídica' })}
      </h2>
      <p className="text-gray-600 leading-relaxed mb-3">
        {t({
          it: "La navigazione del sito, l'interazione sui social media e l'utilizzo delle piattaforme di raccolta fondi comportano il trattamento di dati come nome, cognome, codice fiscale, indirizzo e città di residenza, email — nel rispetto del principio di minimizzazione previsto dall'art. 5 del GDPR.",
          en: 'Browsing the site, interacting on social media and using fundraising platforms involves the processing of data such as first name, last name, tax code, address and city of residence, email — in compliance with the data minimization principle set out in Art. 5 of the GDPR.',
          de: 'Das Durchsuchen der Website, die Interaktion in sozialen Medien und die Nutzung von Spendenplattformen umfassen die Verarbeitung von Daten wie Vorname, Nachname, Steuernummer, Adresse und Wohnort, E-Mail — unter Beachtung des in Art. 5 DSGVO vorgesehenen Grundsatzes der Datenminimierung.',
          pt: 'A navegação no site, a interação nas redes sociais e a utilização das plataformas de arrecadação de fundos implicam o tratamento de dados como nome, sobrenome, código fiscal, endereço e cidade de residência, e-mail — no respeito do princípio de minimização previsto no art. 5.º do RGPD.',
        })}
      </p>
      <p className="text-gray-600 leading-relaxed mb-8">
        {t({
          it: 'Le basi giuridiche del trattamento sono: l\'esecuzione di un contratto (art. 6.1.c GDPR), l\'adempimento di obblighi legali e fiscali legati alle attività caritative, e il legittimo interesse (art. 6.1.e/f GDPR) per la tutela dei nostri diritti davanti alle autorità competenti.',
          en: 'The legal bases for processing are: the performance of a contract (Art. 6.1.c GDPR), compliance with legal and tax obligations related to charitable activities, and legitimate interest (Art. 6.1.e/f GDPR) for the protection of our rights before the competent authorities.',
          de: 'Die Rechtsgrundlagen der Verarbeitung sind: die Erfüllung eines Vertrags (Art. 6 Abs. 1 lit. c DSGVO), die Erfüllung rechtlicher und steuerlicher Pflichten im Zusammenhang mit karitativen Tätigkeiten sowie das berechtigte Interesse (Art. 6 Abs. 1 lit. e/f DSGVO) zum Schutz unserer Rechte vor den zuständigen Behörden.',
          pt: 'As bases jurídicas do tratamento são: a execução de um contrato (art. 6.1.c RGPD), o cumprimento de obrigações legais e fiscais ligadas às atividades caritativas, e o interesse legítimo (art. 6.1.e/f RGPD) para a tutela dos nossos direitos perante as autoridades competentes.',
        })}
      </p>

      <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-3">
        3. {t({ it: 'Categorie di dati', en: 'Categories of data', de: 'Datenkategorien', pt: 'Categorias de dados' })}
      </h2>
      <p className="text-gray-600 leading-relaxed mb-3">
        {t({
          it: "La sola navigazione del sito non richiede l'invio di alcun dato. Il conferimento di informazioni è necessario solo per effettuare donazioni o richiedere informazioni sulle nostre attività.",
          en: 'Simply browsing the site does not require sending any data. Providing information is only necessary to make donations or request information about our activities.',
          de: 'Das bloße Durchsuchen der Website erfordert keine Übermittlung von Daten. Die Angabe von Informationen ist nur erforderlich, um Spenden zu tätigen oder Informationen über unsere Aktivitäten anzufordern.',
          pt: 'A simples navegação no site não requer o envio de nenhum dado. O fornecimento de informações é necessário apenas para efetuar doações ou solicitar informações sobre as nossas atividades.',
        })}
      </p>
      <p className="text-gray-600 leading-relaxed mb-3">
        {t({
          it: 'I sistemi informatici acquisiscono automaticamente, durante il normale esercizio, alcuni dati la cui trasmissione è implicita nei protocolli di comunicazione internet (nome del sito, orario, data, tipo di browser e sistema operativo, pagina di provenienza, indirizzo IP), utilizzati a fini statistici anonimi, di verifica del corretto funzionamento del sito e di accertamento di eventuali reati informatici.',
          en: 'During normal operation, our IT systems automatically acquire certain data whose transmission is implicit in internet communication protocols (site name, time, date, browser and operating system type, referring page, IP address), used for anonymous statistical purposes, to verify the correct functioning of the site, and to ascertain any computer crimes.',
          de: 'Unsere IT-Systeme erfassen während des normalen Betriebs automatisch bestimmte Daten, deren Übermittlung in den Internetkommunikationsprotokollen implizit enthalten ist (Name der Website, Uhrzeit, Datum, Browser- und Betriebssystemtyp, Herkunftsseite, IP-Adresse), die zu anonymen statistischen Zwecken, zur Überprüfung der ordnungsgemäßen Funktion der Website und zur Feststellung möglicher Computerstraftaten verwendet werden.',
          pt: 'Os sistemas informáticos adquirem automaticamente, durante o funcionamento normal, alguns dados cuja transmissão está implícita nos protocolos de comunicação da internet (nome do site, horário, data, tipo de navegador e sistema operativo, página de proveniência, endereço IP), utilizados para fins estatísticos anónimos, de verificação do correto funcionamento do site e de averiguação de eventuais crimes informáticos.',
        })}
      </p>
      <p className="text-gray-600 leading-relaxed mb-3">
        {t({
          it: "I dati forniti volontariamente inviando un'email a uno degli indirizzi indicati sul sito vengono raccolti per rispondere alla richiesta.",
          en: 'Data voluntarily provided by sending an email to one of the addresses indicated on the site are collected in order to respond to the request.',
          de: 'Daten, die freiwillig durch das Senden einer E-Mail an eine der auf der Website angegebenen Adressen bereitgestellt werden, werden gesammelt, um die Anfrage zu beantworten.',
          pt: 'Os dados fornecidos voluntariamente ao enviar um e-mail para um dos endereços indicados no site são recolhidos para responder ao pedido.',
        })}
      </p>
      <p className="text-gray-600 leading-relaxed mb-8">
        {t({
          it: "I dati raccolti non vengono mai comunicati a terzi senza il consenso esplicito dell'utente, salvo quanto necessario per l'adempimento di obblighi di legge, e non sono soggetti a diffusione. Non trattiamo dati personali al di fuori dell'Unione Europea.",
          en: "The collected data are never disclosed to third parties without the user's explicit consent, except as necessary to comply with legal obligations, and are not subject to dissemination. We do not process personal data outside the European Union.",
          de: 'Die erhobenen Daten werden ohne die ausdrückliche Zustimmung des Nutzers niemals an Dritte weitergegeben, außer soweit dies zur Erfüllung gesetzlicher Pflichten erforderlich ist, und unterliegen keiner Verbreitung. Wir verarbeiten keine personenbezogenen Daten außerhalb der Europäischen Union.',
          pt: 'Os dados recolhidos nunca são comunicados a terceiros sem o consentimento explícito do utilizador, exceto quando necessário para o cumprimento de obrigações legais, e não estão sujeitos a divulgação. Não tratamos dados pessoais fora da União Europeia.',
        })}
      </p>

      <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-3">
        4. {t({ it: 'Cookie', en: 'Cookies', de: 'Cookies', pt: 'Cookies' })}
      </h2>
      <p className="text-gray-600 leading-relaxed mb-3">
        {t({
          it: 'Questo sito utilizza esclusivamente cookie tecnici necessari al funzionamento e, dove sono incorporati video di YouTube (pagine Media, Carisma, Progetto Brasile), i cookie di terze parti impostati da YouTube per la riproduzione dei video (es.',
          en: 'This site uses exclusively technical cookies necessary for its operation and, where YouTube videos are embedded (Media, Carisma, Progetto Brasile pages), third-party cookies set by YouTube to play the videos (e.g.',
          de: 'Diese Website verwendet ausschließlich technisch notwendige Cookies sowie, wo YouTube-Videos eingebettet sind (Seiten Media, Carisma, Progetto Brasile), Cookies Dritter, die von YouTube zur Wiedergabe der Videos gesetzt werden (z. B.',
          pt: 'Este site utiliza exclusivamente cookies técnicos necessários ao funcionamento e, onde estão incorporados vídeos do YouTube (páginas Media, Carisma, Progetto Brasile), cookies de terceiros definidos pelo YouTube para a reprodução dos vídeos (ex.',
        })}{' '}
        <code>CONSENT</code>, <code>VISITOR_INFO1_LIVE</code>, <code>YSC</code>, <code>yt-remote-*</code>).{' '}
        {t({
          it: 'Non utilizziamo cookie di profilazione pubblicitaria propri.',
          en: 'We do not use our own advertising profiling cookies.',
          de: 'Wir verwenden keine eigenen Werbe-Profiling-Cookies.',
          pt: 'Não utilizamos cookies de perfilamento publicitário próprios.',
        })}
      </p>
      <p className="text-gray-500 text-sm mb-8">
        {t({
          it: "Nota: questa pagina sostituisce l'elenco cookie del vecchio sito (legato a plugin WordPress non più in uso su questa piattaforma) con quello effettivamente in uso sul sito attuale.",
          en: 'Note: this page replaces the cookie list of the old site (linked to WordPress plugins no longer in use on this platform) with the one actually in use on the current site.',
          de: 'Hinweis: Diese Seite ersetzt die Cookie-Liste der alten Website (bezogen auf WordPress-Plugins, die auf dieser Plattform nicht mehr verwendet werden) durch die tatsächlich auf der aktuellen Website verwendete.',
          pt: 'Nota: esta página substitui a lista de cookies do site antigo (ligada a plugins WordPress já não utilizados nesta plataforma) pela efetivamente em uso no site atual.',
        })}
      </p>

      <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-3">
        5. {t({ it: 'Processo decisionale automatizzato', en: 'Automated decision-making', de: 'Automatisierte Entscheidungsfindung', pt: 'Processo de decisão automatizado' })}
      </h2>
      <p className="text-gray-600 leading-relaxed mb-8">
        {t({
          it: 'La Fraternità Francescana di Betania e la Fondazione Betania ETS non adottano processi decisionali automatizzati o di profilazione.',
          en: 'The Fraternità Francescana di Betania and the Fondazione Betania ETS do not adopt automated decision-making or profiling processes.',
          de: 'Die Fraternità Francescana di Betania und die Fondazione Betania ETS wenden keine automatisierten Entscheidungsprozesse oder Profiling an.',
          pt: 'A Fraternità Francescana di Betania e a Fondazione Betania ETS não adotam processos de decisão automatizados ou de perfilamento.',
        })}
      </p>

      <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-3">
        6. {t({ it: 'I tuoi diritti', en: 'Your rights', de: 'Deine Rechte', pt: 'Os seus direitos' })}
      </h2>
      <p className="text-gray-600 leading-relaxed mb-3">
        {t({
          it: 'Hai diritto di richiedere in qualsiasi momento informazioni sui dati personali conservati, la loro origine, le finalità e modalità del trattamento, il periodo di conservazione, nonché di richiederne la correzione, cancellazione, o la limitazione del trattamento, e di opporti al trattamento stesso.',
          en: 'You have the right to request, at any time, information about the personal data stored, their origin, the purposes and methods of processing, the retention period, as well as to request their correction, deletion, or restriction of processing, and to object to the processing itself.',
          de: 'Du hast das Recht, jederzeit Informationen über die gespeicherten personenbezogenen Daten, deren Herkunft, die Zwecke und Modalitäten der Verarbeitung sowie die Aufbewahrungsfrist anzufordern, ebenso wie deren Berichtigung, Löschung oder Einschränkung der Verarbeitung zu verlangen und der Verarbeitung selbst zu widersprechen.',
          pt: 'Você tem o direito de solicitar a qualquer momento informações sobre os dados pessoais conservados, a sua origem, as finalidades e modalidades do tratamento, o período de conservação, bem como solicitar a sua correção, cancelamento, ou a limitação do tratamento, e opor-se ao próprio tratamento.',
        })}
      </p>
      <p className="text-gray-600 leading-relaxed mb-8">
        {t({ it: 'Le richieste possono essere inviate a', en: 'Requests can be sent to', de: 'Anfragen können gesendet werden an', pt: 'Os pedidos podem ser enviados para' })}{' '}
        <a href="mailto:privacy@ffbetania.net" className="text-[var(--warm-orange)] font-semibold">
          privacy@ffbetania.net
        </a>
        .{' '}
        {t({
          it: 'Hai inoltre diritto di proporre reclamo al Garante per la Protezione dei Dati Personali (Via Monte Citorio 121, Roma), secondo le modalità indicate su',
          en: 'You also have the right to lodge a complaint with the Italian Data Protection Authority (Garante per la Protezione dei Dati Personali, Via Monte Citorio 121, Rome), following the procedures indicated on',
          de: 'Du hast außerdem das Recht, Beschwerde bei der italienischen Datenschutzbehörde (Garante per la Protezione dei Dati Personali, Via Monte Citorio 121, Rom) einzulegen, gemäß den auf',
          pt: 'Você também tem o direito de apresentar reclamação junto à Autoridade de Proteção de Dados italiana (Garante per la Protezione dei Dati Personali, Via Monte Citorio 121, Roma), segundo as modalidades indicadas em',
        })}{' '}
        <a
          href="https://www.garanteprivacy.it"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--warm-orange)] font-semibold"
        >
          www.garanteprivacy.it
        </a>
        {t({ it: '.', en: '.', de: ' angegebenen Vorgaben.', pt: '.' })}
      </p>

      <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-3">
        7. {t({ it: 'Sicurezza dei dati', en: 'Data security', de: 'Datensicherheit', pt: 'Segurança dos dados' })}
      </h2>
      <p className="text-gray-600 leading-relaxed mb-8">
        {t({
          it: 'Adottiamo misure tecniche e organizzative adeguate a garantire la sicurezza dei dati, proteggendoli da divulgazione non autorizzata, modifica accidentale o intenzionale, perdita o distruzione. Le misure sono riviste e aggiornate periodicamente.',
          en: 'We adopt appropriate technical and organizational measures to ensure data security, protecting it from unauthorized disclosure, accidental or intentional alteration, loss or destruction. The measures are periodically reviewed and updated.',
          de: 'Wir treffen angemessene technische und organisatorische Maßnahmen, um die Sicherheit der Daten zu gewährleisten und sie vor unbefugter Offenlegung, versehentlicher oder vorsätzlicher Veränderung, Verlust oder Zerstörung zu schützen. Die Maßnahmen werden regelmäßig überprüft und aktualisiert.',
          pt: 'Adotamos medidas técnicas e organizacionais adequadas para garantir a segurança dos dados, protegendo-os de divulgação não autorizada, alteração acidental ou intencional, perda ou destruição. As medidas são revistas e atualizadas periodicamente.',
        })}
      </p>

      <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-3">
        8. {t({ it: 'Periodo di conservazione', en: 'Retention period', de: 'Aufbewahrungsfrist', pt: 'Período de conservação' })}
      </h2>
      <p className="text-gray-600 leading-relaxed mb-12">
        {t({
          it: 'I dati personali sono conservati per il tempo necessario al raggiungimento delle finalità per cui sono stati raccolti, nel rispetto degli obblighi di legge. Quando non sono più necessari, vengono regolarmente cancellati.',
          en: 'Personal data are retained for the time necessary to achieve the purposes for which they were collected, in compliance with legal obligations. When no longer necessary, they are regularly deleted.',
          de: 'Personenbezogene Daten werden für die Zeit aufbewahrt, die zur Erreichung der Zwecke, für die sie erhoben wurden, erforderlich ist, unter Einhaltung gesetzlicher Pflichten. Sobald sie nicht mehr benötigt werden, werden sie regelmäßig gelöscht.',
          pt: 'Os dados pessoais são conservados pelo tempo necessário para alcançar as finalidades para as quais foram recolhidos, no respeito das obrigações legais. Quando já não são necessários, são regularmente eliminados.',
        })}
      </p>

      <div className="grid sm:grid-cols-2 gap-6 border-t border-gray-100 pt-8">
        <div>
          <p className="font-bold text-[var(--deep-blue)]">Fraternità Francescana di Betania</p>
          <p className="text-sm text-gray-500">Via Pasquale Fiore 143 – 70038 Terlizzi (BA)</p>
          <p className="text-sm text-gray-500">CF 93017320727 · info@ffbetania.net · 080 351 77 12</p>
        </div>
        <div>
          <p className="font-bold text-[var(--deep-blue)]">Fraternità Francescana di Betania Fondazione ETS</p>
          <p className="text-sm text-gray-500">Via Pasquale Fiore 143 – 70038 Terlizzi (BA)</p>
          <p className="text-sm text-gray-500">CF 93346130722 · fondazione@ffbetania.net</p>
        </div>
      </div>
      </section>
    </>
  )
}
