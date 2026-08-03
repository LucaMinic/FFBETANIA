import donaBeni from '../../../assets/sostienici/dona-beni-servizi.jpg'

export function DonaBeniOServiziPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)] mb-6 text-center">Dona beni o servizi</h1>

      <img src={donaBeni} alt="Dona beni e servizi" className="w-full max-h-80 object-cover rounded-2xl mb-8" />

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
  )
}
