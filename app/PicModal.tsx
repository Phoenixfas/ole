'use client'
import React from 'react'
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { AnimatePresence, motion } from 'framer-motion'
import { AiOutlineClose } from 'react-icons/ai'
import { togglePicModal } from '@/redux/slices/picModalToggleSlice'
import Image from 'next/image'

export default function PicModal() {
    const dispatch = useAppDispatch()
    const picToggled = useAppSelector(state => state.picModalToggle.value)
    const activePic = useAppSelector(state => state.activePic)

  return (
    <AnimatePresence>
        {picToggled && (
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}  className='pic__modal'>
                <motion.div initial={{y: "100%"}} animate={{y: "0%"}} exit={{y: "100%"}} className="pic__modalContainer">
                    <div className="pic__modal__close" onClick={() => dispatch(togglePicModal())}><AiOutlineClose size={30} /></div>
                    <div className="pic__modalContent">
                        <Image src={activePic.image} alt={activePic.location} width={500} height={500} />
                        <p>{activePic.location}</p>
                    </div>
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
  )
}
