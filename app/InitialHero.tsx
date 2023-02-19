'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { toggleInitHero } from '@/redux/slices/initHeroToggleSlice';

const progVariant = {
    init: {
        width: "0%",
    },
    anim: {
        width: "100%",
        transition: {
            duration: 5,
            ease: "linear"
        }
    }
}

export default function InitialHero() {
    const dispatch = useAppDispatch();
    const initHeroToggle = useAppSelector(state => state.initHeroToggle.value);
    const [disable, setDisable] = useState(false);

    const [slide, setSlide] = useState(0);
    
    useEffect(() => {
        if(disable) {
            dispatch(toggleInitHero(false));
        }

        setSlide(1);
        const slider: any = document.getElementById('hero_slider');
        let slides = document.querySelectorAll('.initHero__img');
        let pos = 2;
        function slide () {
            setSlide(pos);
            if (pos >= 5) {
                setDisable(true);
                clearInterval(interval);
            }
            pos++
        }
    
        let interval =  setInterval(slide , 5000);
    
    }, [disable])
    

  return (
    <>
        <AnimatePresence>
            {initHeroToggle && (
                <motion.div initial={{opacity: 0}} animate={{ opacity: 1 }} exit={{opacity:0}} transition={{duration: .3, ease: "linear"}} className='initHero' >
                    <div className="initHero__imgContainer">
                        <div id='hero_slider' className="initHero__imgsSlider">
                            <AnimatePresence>
                                {slide === 1 && (
                                    <motion.div key={1} initial={{filter: "brightness(0.2)", scale: 1.1}} animate={{filter: ["brightness(0.2)", "brightness(1)", "brightness(1)", "brightness(1)", "brightness(1)", "brightness(1)", "brightness(1)", "brightness(0.2)"], scale: [1.1, 1]}} transition={{duration: 5, ease: "easeInOut"}} className="initHero__img">
                                        <Image src='/images/home/hero/lalibela.jpg' alt='hero' fill />
                                        {/* <div className="initHero__textContainer">
                                            <div className="initHero__text">
                                                <H1 lines={["Escape to", "Paradise"]} />
                                            </div>
                                        </div> */}
                                    </motion.div>
                                )}
                                {slide === 2 && (
                                    <motion.div key={2} initial={{filter: "brightness(0.2)", scale: 1.1}} animate={{filter: ["brightness(0.2)", "brightness(1)", "brightness(1)", "brightness(1)", "brightness(1)", "brightness(1)", "brightness(1)", "brightness(0.2)"], scale: [1.1, 1]}} transition={{duration: 5, ease: "easeInOut"}} className="initHero__img">
                                        <Image src='/images/home/hero/gondar.jpg' alt='hero' fill />
                                        {/* <div className="initHero__textContainer">
                                            <div className="initHero__text">
                                                <H1 lines={["Discover", "Hidden Gems"]} />
                                            </div>
                                        </div> */}
                                    </motion.div>
                                )}
                                {slide === 3 && (
                                    <motion.div key={3} initial={{filter: "brightness(0.2)", scale: 1.1}} animate={{filter: ["brightness(0.2)", "brightness(1)", "brightness(1)", "brightness(1)", "brightness(1)", "brightness(1)", "brightness(1)", "brightness(0.2)"], scale: [1.1, 1]}} transition={{duration: 5, ease: "easeInOut"}} className="initHero__img">
                                        <Image src='/images/home/hero/omo.png' alt='hero' fill />
                                        {/* <div className="initHero__textContainer">
                                            <div className="initHero__text">
                                                <H1 lines={["Create", "Memories That", "Last a Lifetime"]} />
                                            </div>
                                        </div> */}
                                    </motion.div>
                                )}
                                {slide === 4 && (
                                    <motion.div key={4} initial={{filter: "brightness(0.2)", scale: 1.1}} animate={{filter: ["brightness(0.2)", "brightness(1)", "brightness(1)", "brightness(1)", "brightness(1)", "brightness(1)", "brightness(1)", "brightness(0.2)"], scale: [1.1, 1]}} transition={{duration: 5, ease: "easeInOut"}} className="initHero__img">
                                        <Image src='/images/home/hero/danakil.jpg' alt='hero' fill />
                                        {/* <div className="initHero__textContainer">
                                            <div className="initHero__text">
                                                <H1 lines={["Unforgettable", "Experiences"]} />
                                            </div>
                                        </div> */}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className="initHero__textContainer">
                        {slide === 1 && <div className="initHero__text">
                            <H1 lines={["Escape to", "Paradise"]} />
                        </div>}
                        {slide === 2 && <div className="initHero__text">
                            <H1 lines={["Discover", "Hidden Gems"]} />
                        </div>}
                        {slide === 3 && <div className="initHero__text">
                            <H1 lines={["Create", "Memories That", "Last a Lifetime"]} />
                        </div>}
                        {slide === 4 && <div className="initHero__text">
                            <H1 lines={["Unforgettable", "Experiences"]} />
                        </div>}
                    </div>
                    <div className="initHero__progContainer">
                        <div className="initHero__prog">
                            <div className="initHero__prog__outer">
                                {slide === 1 && <motion.div variants={progVariant} initial={'init'} animate={'anim'} className={`initHero__prog__inner`}></motion.div>}
                            </div>
                        </div>
                        <div className="initHero__prog">
                            <div className="initHero__prog__outer">
                                {slide === 2 && <motion.div variants={progVariant} initial={'init'} animate={'anim'} className={`initHero__prog__inner`}></motion.div>}
                            </div>
                        </div>
                        <div className="initHero__prog">
                            <div className="initHero__prog__outer">
                                {slide === 3 && <motion.div variants={progVariant} initial={'init'} animate={'anim'} className={`initHero__prog__inner`}></motion.div>}
                            </div>
                        </div>
                        <div className="initHero__prog">
                            <div className="initHero__prog__outer">
                                {slide === 4 && <motion.div variants={progVariant} initial={'init'} animate={'anim'} className={`initHero__prog__inner`}></motion.div>}
                            </div>
                        </div>
                    </div>
                    <div className="initHero__skip">
                        <div className="initHero__skipBtn" onClick={() => dispatch(toggleInitHero(false))}>
                            Skip
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </>
  )
}


const H1 = ({ lines}: {lines: any}) => {

    const containerVariants = {
      hidden: {
        opacity: 0,
        y: 100
      },
      visible: {
        opacity: [0, 1, 1, 1, 1, 1, 1, 0],
        y: [100, 0, 0, 0, 0, 0, 0, 0],
        transition: {
            duration: 5,
            ease: 'linear',
          staggerChildren: 0.3 // Add a slight delay between each line
        }
      }
    }
  
    const itemVariants = {
      hidden: {
        opacity: 0,
        y: 100
      },
      visible: {
        opacity: 1,
        y: 0
      }
    }
  
  
    return (
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {lines.map((line: any, index: any) => (
          <>
            <motion.span
                key={index}
                variants={itemVariants}
            >
                {line}
            </motion.span>
            <br />
          </>
        ))}
      </motion.h1>
    );
  };
  