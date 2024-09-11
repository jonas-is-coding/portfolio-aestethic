'use client';

import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import { PICTURES } from '@/constants';

const ZoomParallax = () => {
    
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const pictures = PICTURES(scrollYProgress);

    return (
        <div ref={container} className="h-[300vh] relative w-full">
            <div className="sticky overflow-hidden top-0 h-screen">
                {pictures.map(({ src, scale }, index) => (
                    <motion.div 
                        key={index} 
                        style={{ scale }} 
                        className={`w-full h-full top-0 absolute flex items-center justify-center nth-child-${index + 1}`}
                    >
                        <div className="relative w-[25vw] h-[25vh] imageContainer">
                            <Image
                                src={src}
                                fill
                                alt="image"
                                placeholder='blur'
                                className='object-cover'
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default ZoomParallax