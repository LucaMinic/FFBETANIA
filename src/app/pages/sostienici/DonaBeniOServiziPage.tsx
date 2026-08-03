import { PageHero } from '../../components/PageHero'
import donaBeni from '../../../assets/sostienici/dona-beni-servizi.jpg'

export function DonaBeniOServiziPage() {
  return (
    <>
      <PageHero
        image={donaBeni}
        title="Dona beni o servizi"
        subtitle="Aziende e professionisti possono sostenerci donando prodotti o competenze."
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <p className="text-gray-600 leading-relaxed mb-4">
        Sei un'azienda o un professionista? Scegli di sostenere il nostro servizio di solidarietà anche donando i
        tuoi prodotti o offrendo beni e servizi.
      </p>
      <p className="text-gray-600 leading-relaxed mb-4">
        Puoi offrire prodotti di prima necessità da destinare direttamente a chi assistiamo quotidianamente nelle
        nostre Fraternità, oppure mezzi che potrebbero esserci utili per svolgere al meglio le nostre attività
        benefiche (attrezzature, mezzi tecnologici, arredamenti, ecc.).
      </p>
      <p className="text-gray-600 leading-relaxed mb-10">
        Oltre ai beni è possibile donare dei servizi, come consulenze professionali (legali, tecniche o
        amministrative) o prestazioni d'opera a titolo gratuito. È un modo alternativo ma molto importante per
        aiutarci a cambiare la vita di molti fratelli e sorelle bisognosi.
      </p>

      <p className="text-center text-gray-500">
        Contattaci a{' '}
        <a href="mailto:fondazione@ffbetania.net" className="text-[var(--warm-orange)] font-semibold">
          fondazione@ffbetania.net
        </a>
      </p>
      </section>
    </>
  )
}
