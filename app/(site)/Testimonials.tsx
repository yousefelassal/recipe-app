'use client'
import Image from 'next/image';
import { useState } from 'react';
import { Client } from '@/types/Client';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials({clients}: {clients: Client[]}) {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState('right');

    let client = clients[index];

    let hasPrev = index > 0;
    let hasNext = index < clients.length - 1;

    function handleNext(){
        setDirection('right')
        if(hasNext){
            setIndex(index + 1);
        }
    }

    function handlePrev(){
        setDirection('left')
        if(hasPrev){
            setIndex(index - 1);
        }
    }

    const slideVariants = {
        hiddenRight: {
          x: "50%",
          opacity: 0,
        },
        hiddenLeft: {
          x: "-50%",
          opacity: 0,
        },
        visible: {
          x: "0",
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        },
        exit: {
          opacity: 0,
          scale: 0.85,
          transition: {
            duration: 0.2,
          },
        },
      };

  return (
    <section>
        <div className="max-w-6xl px-6 py-10 mx-auto overflow-hidden">
            <p className="text-xl font-medium text-indigo-500 ">Testimonials</p>

            <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
                What clients are saying
            </h1>

            <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                <div className="absolute w-full bg-indigo-600 -z-10 md:h-96 rounded-2xl overflow-hidden"></div>
                <AnimatePresence>
                        <motion.div
                            variants={slideVariants}
                            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                            animate="visible"
                            exit="exit"
                            key={index}
                        >
                <div className="w-full p-6 bg-indigo-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                
                    <Image 
                        className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" 
                        src={client.image}
                        alt="client photo"
                        width={400}
                        height={400}
                        />
                    
                    <div className="mt-2 md:mx-6">
                    
                        <div>
                            <p className="text-xl font-medium tracking-tight text-white">{client.name}</p>
                            <p className="text-indigo-200 ">{client.job}</p>
                        </div>

                        <p className="mt-4 text-lg h-52 md:h-48 leading-relaxed text-white md:text-xl"> “{client.testimony}”.</p>

                        <div className="flex items-center justify-between mt-6 md:justify-start">
                            <button 
                                title="left arrow"
                                className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-indigo-400"
                                onClick={handlePrev}
                                disabled={!hasPrev}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button 
                                title="right arrow"
                                className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-indigo-400"
                                onClick={handleNext}
                                disabled={!hasNext}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                </motion.div>
                </AnimatePresence>
            </main>
        </div>
    </section>
  )
}
