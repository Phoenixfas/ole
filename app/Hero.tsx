import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

export default function Hero() {
  return (
    <div className='hero'>
        <ParallaxProvider>
            <Parallax speed={-50} className="hero__img">
                <Image src='/images/home/hero/ertaale.jpg' alt="erta ale" fill />
            </Parallax>
            <Parallax speed={-30} className="hero__img">
                <Image src='/images/home/hero/embers.png' alt="embers" fill />
            </Parallax>
        </ParallaxProvider>
        <div className="hero__text">
            <motion.div initial={{x: -500, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 5, stiffness: 50, bounce: 0.8, type: "spring" }} className="hero__text__title">
                ONE LOVE ETHIOPIA TOURS
            </motion.div>
            <motion.div initial={{y: 200, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 5, delay: .3, stiffness: 50, bounce: 0.8, type: "spring" }} className="hero__text__desc">
                Experience the wonders of Ethiopia and unlock your sense of adventure with us.
                <Link href='/tours' className="hero__text__descBtn"><FaArrowRight size={30} /> Explore Now</Link>
            </motion.div>
        </div>
    </div>
  )
}
