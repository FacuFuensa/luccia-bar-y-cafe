import { HeroSection } from '@/components/home/HeroSection'
import { AboutSnippet } from '@/components/home/AboutSnippet'
import { FeaturedCards } from '@/components/home/FeaturedCards'
import { HoursBanner } from '@/components/home/HoursBanner'
import { InstagramGrid } from '@/components/home/InstagramGrid'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSnippet />
      <FeaturedCards />
      <HoursBanner />
      <InstagramGrid />
    </>
  )
}
