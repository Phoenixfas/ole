'use client'
import { useAppSelector } from '@/redux/hooks'
import '../styles/Home.css'
import Adventures from './Adventures'
import Hero from './Hero'
import InitialHero from './InitialHero'
import PicModal from './PicModal'
import Pics from './Pics'
import TipModal from './TipModal'
import Tips from './Tips'


export default function Home() {
  const initHeroToggle = useAppSelector(state => state.initHeroToggle.value)
  return (
    <main className='main'>
      <InitialHero />
      {!initHeroToggle && (
        <>
          <TipModal />
          <PicModal />
          <Hero />
          <Adventures />
          <Tips />
          <Pics />
        </>
      )}
    </main>
  )
}
