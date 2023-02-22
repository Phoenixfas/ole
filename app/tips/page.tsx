import style from '../../styles/Tips.module.css'
import React from 'react'
import Hero from './Hero'
import TipsList from './TipsList'

export default function page() {
  return (
    <div className={style.main}>
      <Hero />
      <TipsList />
    </div>
  )
}
