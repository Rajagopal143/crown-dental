import { motion } from "framer-motion";
import Image from "next/image";

export const HeroSection = () => {
   
    return (
        <section className="relative flex items-center justify-center shadow-md max-sm:mt-28">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-4 text-center z-10  "
            >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-left space-y-6 relative">
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#E0212B] to-[#1C3C90] bg-clip-text text-transparent">
                            Experience Dental Excellence with a Gentle Touch
                        </h1>
                        <p className="text-ndark">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg transition-shadow"
                        >
                            Make an Appointment
                        </motion.button>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="relative "
                    >
                        <motion.div
                            className="w-10 h-10 absolute z-10 top-[200px] left-20"

                            initial={{ opacity: 0, x: 50, scale: 1 }}
                            animate={{ opacity: 1, x: 0, scale: [1, 1.2, 1] }}
                            transition={{
                                opacity: { delay: 0.2, duration: 0.8 },
                                x: { delay: 0.2, duration: 0.8 },
                                scale: {
                                    duration: 1,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    repeatType: "loop",
                                },
                            }}
                        >
                            <Image
                                src="/icon-star-1.svg"
                                width={1000}
                                height={1000}
                                alt="Logo"
                            />
                        </motion.div>

                        <Image src="/hero-img.png" width={1000} height={1000} alt="Logo" className="w-full p-28 max-sm:p-10" />
                    </motion.div>
                </div>
            </motion.div>
        </section>

    )
}