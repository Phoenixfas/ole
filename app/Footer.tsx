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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, amet nobis totam assumenda earum mollitia dicta consequuntur officia tempore! Inventore possimus ex sint voluptas. Distinctio impedit, corrupti ea nulla reiciendis recusandae cupiditate dolorem eius exercitationem cumque sequi sed corporis doloribus qui ullam ut voluptas quae! Nihil, assumenda fugit error vero dolorum impedit, 
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
