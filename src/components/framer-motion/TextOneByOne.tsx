import React from 'react';
import { motion } from 'framer-motion';
import { ClassValue } from 'clsx';

const AnimatedWords = ({ text,Classname }:{text:string,Classname:string}) => {
    // Split the text into words
    const words = text.split(' ');

    // Container variants without reverse staggering
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Delay between each word
            },
        },
    };

    // Word variants: slide in from the left (starting point)
    const wordVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10,
            },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', flexWrap: 'wrap' }}
            className={Classname|| ""}
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    variants={wordVariants}
                    style={{ marginRight: '8px' }} // Spacing between words
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default AnimatedWords;
