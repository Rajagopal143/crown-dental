import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

const CircularTextSpinner = () => {
    const text = "SPINNING TEXT EFFECT"; // Your text here
    const characters = text.split("");
    const radius = 100; // Radius of the circle

    // For drag interaction
    const rotate = useMotionValue(0);
    const rotateX = useTransform(rotate, (value) => -value);
    useEffect(() => {
        const animation = setInterval(() => {
            rotate.set(rotate.get() + 1);
        }, 50);

        return () => clearInterval(animation);
    }, []);

    return (
        <div className="flex items-center justify-center min-h-[300px]">
            <motion.div
                className="relative w-[200px] h-[200px]"
                style={{ rotate }}
                drag
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                dragElastic={0.1}
            >
                {characters.map((char, index) => {
                    const angle = (index * 360) / characters.length;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;

                    return (
                        <motion.span
                            key={index}
                            className="absolute text-lg font-bold text-blue-600 origin-[0_100px]"
                            style={{
                                left: '100px',
                                top: '100px',
                                rotate: angle,
                                x,
                                y,
                                rotateX, // Counter-rotate text to keep it upright
                            }}
                            whileHover={{ scale: 1.2, color: '#ff0000' }}
                        >
                            {char}
                        </motion.span>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default CircularTextSpinner;