'use client'

import { useMotionValue, useTransform, motion } from 'framer-motion';

const Card = ({ icon, title, desc }: { icon: JSX.Element, title: string, desc: string }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    return (
    <div style={{ perspective: 2000 }}>
        <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: 'grabbing' }}
        className='bg-white space-y-3 z-20 rounded-lg hover:cursor-grab backdrop-blur-lg
        [ p-4 ]
        [ bg-gradient-to-b from-white/60 to-white/30 ]
        [ border-[1px] border-solid border-white border-opacity-30 ]
        [ shadow-black/10 shadow-sm ]'
        >

        <div className="text-indigo-600 pb-3">
            {icon}
        </div>
        <h4 className="text-lg text-gray-800 font-semibold">
            {title}
        </h4>
        <p>
            {desc}
        </p>

        </motion.div>
    </div>
    );
};

export default Card;