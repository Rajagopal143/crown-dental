import { motion } from "framer-motion";
import Image from "next/image";

export const HeroSection = () => {
   
    return (
        <section id="home" className="relative flex  mt-0  shadow-md max-sm:mt-28 max-md:mt-28 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-4 text-center z-10  "
            >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-left space-y-6 relative">
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#E0212B] to-[#1C3C90] bg-clip-text text-transparent max-sm:text-center">
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
                    <div className="relative ">
                        <Image
                            src="/hero-icon-1.svg"
                            width={1000}
                            height={1000}
                            alt="Logo"
                            className="absolute w-10 h-10 right-14 top-32 rounded-full bg-white shadow-lg p-4 box-content"
                        />
                        <Image
                            src="/hero-icon-2.svg"
                            width={1000}
                            height={1000}
                            alt="Logo"
                            className="absolute w-10 h-10 left-14 top-72 rounded-full bg-white shadow-lg p-4 box-content "
                        />
                        <Image
                            src="/hero-icon-3.svg"
                            width={1000} 
                            height={1000}
                            alt="Logo"
                            className="absolute w-10 h-10 bottom-10 right-14 rounded-full bg-white shadow-lg p-4 box-content "
                        />
                        <motion.div
                            className="w-40 h-16 absolute z-10 bottom-[110px] left-20 flex gap-4 justify-center items-center bg-white rounded-lg"
                            initial={{ x: 0 }}
                            animate={{
                                x: [0, 20, 0], // Move from 0 → 20px → 0
                                transition: {
                                    x: {
                                        duration: 2,
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                        repeatType: "loop"
                                    }
                                }
                            }}
                        >
                            <Image
                                src="/dantist-doctor-img.jpg"
                                width={1000}
                                height={1000}
                                alt="Logo"
                                className=" w-12 h-12 rounded-lg"
                            />
                            <div >

                            <h1 className="font-semibold text-[14px] text-pblue">
                                Dr. Clara Lee
                            </h1>
                                <p className="font- text-[12px] text-left">Dantist</p>
                            </div>
                        </motion.div>
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
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className=" "
                    >

                        <Image src="/hero-img.png" width={1000} height={1000} alt="Logo" className="w-full px-20 max-sm:p-10 " />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
                    <Image
                        src="/icon-star-1.svg"
                        width={1000}
                        height={1000}
                        alt="Logo"
                        className="absolute w-16 h-16 opacity-20 bottom-0 left-10"
                    />
        </section>

    )
}