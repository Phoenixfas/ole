import Link from 'next/link'
import React from 'react'
import { useAppSelector } from '@/redux/hooks'
import { FaInstagram, FaTelegram, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa'

export default function Footer() {
    const initHeroToggle = useAppSelector(state => state.initHeroToggle.value)

  return (
    <>
        {!initHeroToggle && (
            <div className='footer'>
                <div className="footer__menu">
                    <Link href={'/'}>Home</Link>
                    <Link href={'/tours'}>Tours</Link>
                    <Link href={'/contact'}>Contact</Link>
                    <Link href={'/tips'}>Travel Tips</Link>
                    <Link href={'/gallery'}>Gallery</Link>
                    <hr color='#ffffff88' />
                </div>
                <div className="footer__about">
                    One Love Ethiopia is a premier tour and travel company based in Ethiopia, offering unique and personalized experiences for travelers looking to explore the rich history, culture, and natural beauty of the country. With a team of experienced guides and a commitment to sustainable tourism, One Love Ethiopia promises unforgettable adventures and meaningful connections.
                </div>
                <div className="footer__socials">
                    <Link target="_blank" href={"https://facebook.com/"}>
                        <FaFacebook size={30} />
                    </Link>
                    <Link target="_blank" href={"https://instagram.com/"}>
                        <FaInstagram size={30} />
                    </Link>
                    <Link target="_blank" href={"https://telegram.com"}>
                        <FaTelegram size={30} />
                    </Link>
                    <Link target="_blank" href={"https://linkedin.com/in"}>
                        <FaLinkedin size={30} />
                    </Link>
                    <Link target="_blank" href={"https://twitter.com/"}>
                        <FaTwitter size={30} />
                    </Link>
                </div>
                <div className="footer__copy">
                    <span>&copy; 2023 - All rights reserved | Designed and developed by <Link target="_blank" href={"https://afriopia.com"}>Afriopia Unified Systems</Link></span>
                </div>
            </div>
        )}
    </>
  )
}
