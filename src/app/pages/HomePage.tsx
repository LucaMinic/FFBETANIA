import { Hero } from '../components/home/Hero'
import { ChiSiamoIntro } from '../components/home/ChiSiamoIntro'
import { NumberStats } from '../components/home/NumberStats'
import { DoveSiamoTeaser } from '../components/home/DoveSiamoTeaser'
import { ComeAiutiamo } from '../components/home/ComeAiutiamo'
import { BrasileSpotlight } from '../components/home/BrasileSpotlight'
import { RiconoscimentiIstituzionali } from '../components/home/RiconoscimentiIstituzionali'
import { NewsPreview } from '../components/home/NewsPreview'
import { SostieniciCta } from '../components/home/SostieniciCta'

export function HomePage() {
  return (
    <>
      <Hero />
      <ChiSiamoIntro />
      <NumberStats />
      <DoveSiamoTeaser />
      <ComeAiutiamo />
      <BrasileSpotlight />
      <RiconoscimentiIstituzionali />
      <NewsPreview />
      <SostieniciCta />
    </>
  )
}
