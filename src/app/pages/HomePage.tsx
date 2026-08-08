import { Hero } from '../components/home/Hero'
import { ChiSiamoIntro } from '../components/home/ChiSiamoIntro'
import { UnaVitaDaRisorti } from '../components/home/UnaVitaDaRisorti'
import { FamigliaDiBetaniaTeaser } from '../components/home/FamigliaDiBetaniaTeaser'
import { NumberStats } from '../components/home/NumberStats'
import { ComeAiutiamo } from '../components/home/ComeAiutiamo'
import { DoveSiamoTeaser } from '../components/home/DoveSiamoTeaser'
import { BrasileSpotlight } from '../components/home/BrasileSpotlight'
import { RiconoscimentiIstituzionali } from '../components/home/RiconoscimentiIstituzionali'
import { NewsPreview } from '../components/home/NewsPreview'
import { SostieniciCta } from '../components/home/SostieniciCta'

export function HomePage() {
  return (
    <>
      <Hero />
      <ChiSiamoIntro />
      <UnaVitaDaRisorti />
      <FamigliaDiBetaniaTeaser />
      <NumberStats />
      <ComeAiutiamo />
      <DoveSiamoTeaser />
      <BrasileSpotlight />
      <RiconoscimentiIstituzionali />
      <NewsPreview />
      <SostieniciCta />
    </>
  )
}
