'use client'
import style from '@/styles/Contact.module.css'
import Link from 'next/link'
import { SiGmail } from "react-icons/si"
import { MdLocationPin, MdCall } from  "react-icons/md"


export default function Contact() {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert('submitted')
    }
  return (
    <div className={style.contact}>
        <div className={style.mapHolder}>
            <div className={style.mapouter}>
                <div className={style.gmap_canvas}>
                    <iframe
                        className={style.gmap_iframe}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight={0}
                        marginWidth={0}
                        src="https://maps.google.com/maps?width=650&amp;height=242&amp;hl=en&amp;q=9.000358217387392, 38.7879154142762&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                </div>
            </div>
        </div>


        <div className={style.contact__cardsContainer}>
            <Link href={"mailto:"}>
                <div className={style.contact__card}>
                <div className={style.contact__icon}>
                    <SiGmail className={style.team__icon} size={50} />
                </div>
                <h3>Mail Here</h3>
                <p>hello@olet.com</p>
                </div>
            </Link>
            <Link
                href={
                "https://www.google.com.et/maps/place/Kaldi's+Coffee/@9.0003084,38.7877521,20z/data=!4m5!3m4!1s0x164b85ba01780cc5:0x6b9f759d06cec764!8m2!3d9.0003136!4d38.7879323?hl=en"
                }
            >
                <div className={style.contact__card}>
                <div className={style.contact__icon}>
                    <MdLocationPin className={style.team__icon} size={50} />
                </div>
                <h3>Visit Here</h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, animi?
                </p>
                </div>
            </Link>

            <Link href={"tel:+251 911 121 314"}>
                <div className={style.contact__card}>
                <div className={style.contact__icon}>
                    <MdCall className={style.team__icon} size={50} />
                </div>
                <h3>Call Here</h3>
                <p>+251-911-121-314</p>
                <p>+251-911-121-314</p>
                </div>
            </Link>
        </div>

        <div className={style.message__container}>
        <div className={style.message}>
            <form className={style.message__form}  onSubmit={onSubmit}>
                <label>Name</label>
                <input required type="text" name="user_name" />
                <label>Email</label>
                <input required type="text" name="user_email"/>
                <label>Subject</label>
                <input required type="text" name="user_subject"/>
                <label>Message</label>
                <textarea required name="message"></textarea>
                <button>Send</button>
                {/* {done && (
                    <p className={style.m_done}>Your message has been sent. Thank you!</p>
                )} */}
            </form>
        </div>
    </div>
    </div>
  )
}
