import style from "@/styles/About.module.css";
import About from "./About";
import Hero from "./Hero";


export default function page() {
  return (
    <div className={style.main}>
        <Hero />
        <About />
    </div>
  )
}
