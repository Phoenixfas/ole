'use client'
import { useAppSelector } from '@/redux/hooks'
import style from '../styles/Home.module.css'
import Adventures from './Adventures'
import Hero from './Hero'
import InitialHero from './InitialHero'
import Pics from './Pics'
import Tips from './Tips'


export default function Home() {
  const initHeroToggle = useAppSelector(state => state.initHeroToggle.value)
  return (
    <main className={style.main}>
      <InitialHero />
      {!initHeroToggle && (
        <>
          <Hero />
          <Adventures />
          <Tips />
          <Pics />
        </>
      )}
    </main>
  )
}
