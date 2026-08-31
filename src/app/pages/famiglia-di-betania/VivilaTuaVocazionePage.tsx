import { PlaceholderForm } from '../../components/PlaceholderForm'
import { PageHero } from '../../components/PageHero'
import { useT } from '../../context/LanguageContext'
import vitaFraterna from '../../../assets/chi-siamo/vita-fraterna-2026.png'

export function VivilaTuaVocazionePage() {
  const t = useT()
  return (
    <>
      <PageHero
        image={vitaFraterna}
        title={t({ it: 'Vivi la tua vocazione', en: 'Live your vocation', de: 'Lebe deine Berufung', pt: 'Viva a sua vocação' })}
        subtitle={t({
          it: 'Lasciati interpellare dalla chiamata di Dio: scrivici per il tuo cammino di discernimento.',
          en: "Let yourself be challenged by God's call: write to us about your discernment journey.",
          de: 'Lass dich vom Ruf Gottes ansprechen: Schreib uns für deinen Unterscheidungsweg.',
          pt: 'Deixe-se interpelar pelo chamado de Deus: escreva-nos sobre o seu caminho de discernimento.',
        })}
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
      <blockquote className="border-l-4 border-[var(--warm-orange)] pl-4 italic text-gray-600 mb-4 text-left max-w-md mx-auto">
        {t({
          it: '«Abbi la certezza che, se riconosci una chiamata di Dio e la segui, ciò sarà la cosa che darà pienezza alla tua vita.» — Papa Francesco',
          en: '"Be certain that if you recognize a call from God and follow it, this will be the thing that gives fullness to your life." — Pope Francis',
          de: '„Sei dir gewiss: Wenn du einen Ruf Gottes erkennst und ihm folgst, wird das dein Leben zur Fülle bringen.“ — Papst Franziskus',
          pt: '«Tenha a certeza de que, se reconheces um chamado de Deus e o segues, isso será aquilo que dará plenitude à tua vida.» — Papa Francisco',
        })}
      </blockquote>
      <blockquote className="border-l-4 border-[var(--warm-orange)] pl-4 italic text-gray-600 mb-10 text-left max-w-md mx-auto">
        {t({
          it: '«Signore, cosa vuoi che io faccia per te? Va\', Francesco, ripara la mia casa.» — San Francesco in dialogo con Gesù',
          en: '"Lord, what do you want me to do for you? Go, Francis, repair my house." — St. Francis in dialogue with Jesus',
          de: '„Herr, was willst du, dass ich für dich tue? Geh, Franziskus, stelle mein Haus wieder her.“ — Der heilige Franziskus im Dialog mit Jesus',
          pt: '«Senhor, o que queres que eu faça por ti? Vai, Francisco, repara a minha casa.» — São Francisco em diálogo com Jesus',
        })}
      </blockquote>

      <p className="text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
        {t({
          it: 'Lo Spirito Santo continua a suscitare vocazioni di speciale consacrazione al servizio suo e della Chiesa, nella quale è inserita e vive la nostra Fraternità. Se desideri approfondire il tuo discernimento vocazionale nel nostro Istituto, scrivici.',
          en: 'The Holy Spirit continues to raise up vocations of special consecration to his service and to the service of the Church, in which our Fraternity is situated and lives. If you wish to deepen your vocational discernment in our Institute, write to us.',
          de: 'Der Heilige Geist ruft weiterhin zu Berufungen besonderer Weihe für seinen Dienst und den Dienst der Kirche auf, in die unsere Fraternität eingebettet ist und in der sie lebt. Wenn du deine Berufungsunterscheidung in unserem Institut vertiefen möchtest, schreib uns.',
          pt: 'O Espírito Santo continua a suscitar vocações de consagração especial ao seu serviço e ao da Igreja, na qual está inserida e vive a nossa Fraternidade. Se deseja aprofundar o seu discernimento vocacional no nosso Instituto, escreva-nos.',
        })}
      </p>

      <PlaceholderForm submitLabel={t({ it: 'Invia', en: 'Send', de: 'Senden', pt: 'Enviar' })} contactEmail="info@ffbetania.net" />
      </section>
    </>
  )
}
