import style from '@/styles/Contact.module.css'
import Contact from './Contact'
import Hero from './Hero'

export default function page() {
  return (
    <div className={style.main}>
        <Hero />
        <Contact />
    </div>
  )
}
