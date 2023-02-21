import Image from 'next/image'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import tours from '@/data/tours'
import Link from 'next/link'

export default function Adventures() {
    const tours1 = tours.slice(0, 4)
    const tours2 = tours.slice(4, 8)
  return (
    <div className='adventures'>
        <h1><i>Adventures</i> to get you inspired</h1>
        <div className='adventures_cardsContainer'>
            <Cards t={tours1} alignLeft={false} />
            <Cards t={tours2} alignLeft={true} />
        </div>
    </div>
  )
}


const Cards = ({t, alignLeft}: {t: any, alignLeft: boolean}) => {
    return (
        <div className={`adventures__cardsHolder ${alignLeft ? "left" : "right"}`}>
            {t.map((tour: any, index: any) => (
                <div key={index} className='adventures_card'>
                    <div className="adventures__cardImg">
                        <Image src={tour.image} alt={tour.name} fill />
                    </div>
                    <Link href={"/"} className="adventures__cardInfo">
                        <p>0{tour.id}</p>
                        <h2>{tour.name}</h2>
                        <span><BsArrowRight size={35} /></span>
                    </Link>
                </div>
            ))}
        </div>
    )
}
