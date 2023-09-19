export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Steps from '@/components/steps'
import Pricing from '@/components/pricing'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Steps/>
      <Zigzag />
      <Pricing/>
      <Testimonials />
      <Newsletter />
    </>
  )
}
