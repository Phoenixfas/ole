import style from "@/styles/About.module.css"
import Image from "next/image"
import { FaCheckCircle } from "react-icons/fa"

export default function Services() {
  return (
    <div className={style.about}>
        {/* <div className={style.about__logo}>
            <Image src="/images/logo/logo_text_light.png" alt="One Love Ethiopia Tours" width={500} height={500} />
        </div> */}
        {/* <div className={style.about__desc}>
            <p>Our primary focus is on tourism and transportation services, including car rentals, airport transfers, and tour packages. We have a wide range of well-maintained and comfortable vehicles, including sedans, SUVs, vans, and buses that are perfect for any type of travel, from short trips around the city to longer excursions across the country.</p>
        </div> */}
        <div className={style.about__services}>
            <div className={style.serviceList}>
                <h2>TOURS</h2>
                <ul>
                    <li><FaCheckCircle color="white" /> <span>Package tours for groups and individuals.</span></li>
                    <li><FaCheckCircle color="white" /> <span>Thematic tours (immersion, family, photo, gastronomy, bird watching, trail, adventure, etc.)</span></li>
                    <li><FaCheckCircle color="white" /> <span>Tailor-made tours.</span></li>
                    <li><FaCheckCircle color="white" /> <span>Excursions</span></li>
                </ul>
            </div>
            <div className={style.serviceList}>
                <h2>GUIDING & LOGISTICS SERVICES</h2>
                <ul>
                    <li><FaCheckCircle color="white" /> <span>Guiding service (speaking different languages).</span></li>
                    <li><FaCheckCircle color="white" /> <span>Expert support (archaeologist, art, ornithologist, etc.)</span></li>
                    <li><FaCheckCircle color="white" /> <span>Logistical support for documentary filming & lectures.</span></li>
                </ul>
            </div>
            <div className={style.serviceList}>
                <h2>CAR & CAMPING EQUIPMENT RENTAL</h2>
                <ul>
                    <li><FaCheckCircle color="white" /> <span>Vehicle rental with driver (4WD, mini-buses, buses).</span></li>
                    <li><FaCheckCircle color="white" /> <span>Rental of camping equipment</span></li>
                </ul>
            </div>
            <div className={style.serviceList}>
                <h2>BOOKING SERVICES</h2>
                <ul>
                    <li><FaCheckCircle color="white" /> <span>Flight tickets reservations (for internal flights).</span></li>
                    <li><FaCheckCircle color="white" /> <span>Hotel booking.</span></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
