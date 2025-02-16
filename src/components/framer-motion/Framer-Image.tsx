import { motion } from 'framer-motion';

interface RevealImageProps {
    imageUrl: string;
    altText?: string;
}

const RevealImage = ({ imageUrl, altText = '' }: RevealImageProps) => {
    return (
        <div className="overflow-hidden relative">
            <motion.img
                src={imageUrl}
                alt={altText}
                className="w-full h-full object-cover"
                initial={{
                    opacity: 0,
                    y: '100%', // Start from bottom (100% of container height)
                    scale: 1.1 // Optional slight zoom effect
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1
                }}
                transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 20,
                    mass: 0.5,
                    delay: 0.2
                }}
                viewport={{ once: true }} // Only animate once
            />
        </div>
    );
};

export default RevealImage;