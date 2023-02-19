'use client'
import { useAppSelector } from '@/redux/hooks'
import '../styles/Home.css'
import Hero from './Hero'
import InitialHero from './InitialHero'


export default function Home() {
  const initHeroToggle = useAppSelector(state => state.initHeroToggle.value)
  return (
    <main className='main'>
      <InitialHero />
      {!initHeroToggle && (
        <>
          <Hero />
        </>
      )}
    </main>
  )
}
