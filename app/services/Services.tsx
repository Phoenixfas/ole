import style from "@/styles/About.module.css"
import Image from "next/image"

export default function Services() {
  return (
    <div className={style.about}>
        <div className={style.about__logo}>
            <Image src="/images/logo/logo_text_light.png" alt="One Love Ethiopia Tours" width={500} height={500} />
        </div>
        <div className={style.about__desc}>
            <p>Our primary focus is on tourism and transportation services, including car rentals, airport transfers, and tour packages. We have a wide range of well-maintained and comfortable vehicles, including sedans, SUVs, vans, and buses that are perfect for any type of travel, from short trips around the city to longer excursions across the country.</p>
        </div>
        <div className={style.about__services}>
            <h1>SERVICES</h1>
            <div className={style.service}>
                <div className={style.serviceList__l}>
                    <h2>TOURS</h2>
                    <ul>
                        <li>Package tours for groups and individuals.</li>
                        <li>Thematic tours (immersion, family, photo, gastronomy, bird watching, trail, adventure, etc.)</li>
                        <li>Tailor-made tours.</li>
                        <li>Excursions</li>
                    </ul>
                </div>
                <div className={style.serviceList__r}>
                    <h2>GUIDING & LOGISTICS SERVICES</h2>
                    <ul>
                        <li>Guiding service (speaking different languages).</li>
                        <li>Expert support (archaeologist, art, ornithologist, etc.)</li>
                        <li>Logistical support for documentary filming & lectures.</li>
                    </ul>
                </div>
            </div>
            <div className={style.service}>
                <div className={style.serviceList__r}>
                    <h2>CAR & CAMPING EQUIPMENT RENTAL</h2>
                    <ul>
                        <li>Vehicle rental with driver (4WD, mini-buses, buses).</li>
                        <li>Rental of camping equipment</li>
                    </ul>
                </div>
                <div className={style.serviceList__l}>
                    <h2>BOOKING SERVICES</h2>
                    <ul>
                        <li>Flight tickets reservations (for internal flights).</li>
                        <li>Hotel booking.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
