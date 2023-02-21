'use client'
import { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { pics } from '@/data/pics'
import Image from 'next/image'
import { useAppDispatch } from '@/redux/hooks'
import { togglePicModal } from '@/redux/slices/picModalToggleSlice'
import { changeActivePic } from '@/redux/slices/activePicSlice'

export default function Pics() {
    const dispatch = useAppDispatch()

    const p1 = pics.slice(0, 3)
    const p2 = pics.slice(3, 6)
    const p3 = pics.slice(6, 9)

    const options = { delay: 3000 } // Options
    const autoplayRoot = (emblaRoot:any) => emblaRoot.parentElement // Root node
    // @ts-ignore
    const autoplay = Autoplay(options, autoplayRoot)
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay])


    useEffect(() => {
        if (emblaApi) {
          // Embla API is ready
        }
      }, [emblaApi])
    
  return (
    <div className='pics'>
        <h1>Some of the memories captured by our customers</h1>
        <div ref={emblaRef} className='embla'>
            <div className='embla__container'>
                <div className='embla__slide'>
                    <div className="pics__container">
                        {p1.map((pic: any, index: any) => (
                            <div key={index} className="pic_card" onClick={() => {
                                dispatch(togglePicModal())
                                dispatch(changeActivePic(pic))
                            }}>
                                <Image src={pic.image} alt={pic.location} width={500} height={500} />
                                <p>{pic.location}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
