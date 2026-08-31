import { PageHero } from '../../components/PageHero'
import { PageCta } from '../../components/PageCta'
import { useT } from '../../context/LanguageContext'
import spiritualita from '../../../assets/sostienici/spiritualita-hero.jpg'

export function LascitiSolidaliPage() {
  const t = useT()
  return (
    <>
      <PageHero
        image={spiritualita}
        title={t({ it: 'Lasciti solidali', en: 'Legacy gifts', de: 'Vermächtnisse', pt: 'Legados solidários' })}
        subtitle={t({
          it: 'Un gesto che dura nel tempo e cambia in meglio la vita di tante persone.',
          en: 'A gesture that lasts over time and improves the lives of many people.',
          de: 'Eine Geste, die über die Zeit hinaus wirkt und das Leben vieler Menschen zum Besseren verändert.',
          pt: 'Um gesto que perdura no tempo e muda para melhor a vida de muitas pessoas.',
        })}
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
      <p className="text-gray-600 leading-relaxed mb-4 max-w-2xl mx-auto">
        {t({
          it: 'Inserire un lascito solidale nel proprio testamento è un atto di grande consapevolezza con cui scegli di tramandare i tuoi valori e gli ideali in cui credi, per dare valore al futuro e cambiare in meglio la vita di tante persone.',
          en: 'Including a legacy gift in your will is an act of great awareness, through which you choose to pass on your values and the ideals you believe in, to give value to the future and improve the lives of many people.',
          de: 'Ein Vermächtnis in das eigene Testament aufzunehmen ist ein Akt großen Bewusstseins, mit dem du dich entscheidest, deine Werte und die Ideale, an die du glaubst, weiterzugeben, um der Zukunft Wert zu verleihen und das Leben vieler Menschen zum Besseren zu verändern.',
          pt: 'Incluir um legado solidário no próprio testamento é um ato de grande consciência com o qual você escolhe transmitir os seus valores e os ideais em que acredita, para dar valor ao futuro e mudar para melhor a vida de muitas pessoas.',
        })}
      </p>
      <p className="text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
        {t({
          it: 'È un gesto semplice, ma di profonda generosità e responsabilità, con cui potrai sostenere il nostro servizio assicurando a tanti uomini, donne, bambini e famiglie nel bisogno un aiuto concreto e la prospettiva di un domani più sereno e felice.',
          en: 'It is a simple gesture, but one of profound generosity and responsibility, with which you can support our service, ensuring concrete help and the prospect of a more peaceful and happy tomorrow for many men, women, children and families in need.',
          de: 'Es ist eine einfache Geste, aber von tiefer Großzügigkeit und Verantwortung, mit der du unseren Dienst unterstützen kannst, indem du vielen bedürftigen Männern, Frauen, Kindern und Familien konkrete Hilfe und die Aussicht auf ein friedlicheres und glücklicheres Morgen sicherst.',
          pt: 'É um gesto simples, mas de profunda generosidade e responsabilidade, com o qual você poderá apoiar o nosso serviço, assegurando a muitos homens, mulheres, crianças e famílias em necessidade uma ajuda concreta e a perspectiva de um amanhã mais sereno e feliz.',
        })}
      </p>

      <blockquote className="border-l-4 border-[var(--warm-orange)] pl-4 italic text-gray-600 text-left max-w-md mx-auto mb-10">
        {t({
          it: 'Dona anche solo una piccola parte del tuo lascito e traccia per sempre un segno d\'amore nella vita di molti!',
          en: 'Give even just a small part of your legacy and leave a lasting mark of love in the lives of many!',
          de: 'Spende auch nur einen kleinen Teil deines Vermächtnisses und hinterlasse für immer ein Zeichen der Liebe im Leben vieler!',
          pt: 'Doe mesmo só uma pequena parte do seu legado e deixe para sempre uma marca de amor na vida de muitos!',
        })}
      </blockquote>

      <p className="text-gray-500">
        {t({ it: 'Per sapere come disporre un lascito, scrivici a', en: 'To find out how to arrange a legacy gift, write to us at', de: 'Um zu erfahren, wie du ein Vermächtnis regelst, schreib uns an', pt: 'Para saber como dispor um legado, escreva-nos para' })}{' '}
        <a href="mailto:fondazione@ffbetania.net" className="text-[var(--warm-orange)] font-semibold">
          fondazione@ffbetania.net
        </a>
      </p>

      <PageCta
        title={t({ it: 'Ogni forma di generosità ha valore', en: 'Every form of generosity has value', de: 'Jede Form der Großzügigkeit hat Wert', pt: 'Toda forma de generosidade tem valor' })}
        text={t({
          it: 'Se preferisci un gesto immediato, puoi sostenerci anche con una donazione diretta o destinandoci il tuo 5x1000.',
          en: 'If you prefer an immediate gesture, you can also support us with a direct donation or by designating your 5x1000 to us.',
          de: 'Wenn du eine sofortige Geste bevorzugst, kannst du uns auch mit einer Direktspende oder deinem 5x1000 unterstützen.',
          pt: 'Se preferir um gesto imediato, você também pode apoiar-nos com uma doação direta ou destinando-nos o seu 5x1000.',
        })}
        primaryLabel={t({ it: 'Tutti i modi per aiutare', en: 'All the ways to help', de: 'Alle Möglichkeiten zu helfen', pt: 'Todas as formas de ajudar' })}
        primaryTo="/sostienici"
        secondaryLabel={t({ it: 'Contattaci', en: 'Contact us', de: 'Kontaktiere uns', pt: 'Contate-nos' })}
        secondaryTo="/contatti"
      />
      </section>
    </>
  )
}
