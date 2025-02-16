"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { BlurFade } from "./ui/blur-fade"
import { CircleCheck } from "lucide-react"

export default function AboutSection() {
    return (
        <section id="aboutus" className="py-10 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 max-sm:gap-40 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative">
                            <div className="flex flex-wrap gap-4">
                                <Image
                                    src="/about-us-img-1.jpg"
                                    width={400}
                                    height={250}
                                    alt="Dentist 1"
                                    className="rounded-[50px] shadow-md bg-white p-2"
                                />
                                <Image
                                    src="/about-us-img-2.jpg"
                                    width={400}
                                    height={250}
                                    alt="Dentist 2"
                                    className="rounded-[50px] absolute p-2 -right-[10px] -bottom-[100px] bg-white shadow-md"
                                />
                                <motion.div
                                    className=" absolute w-10 h-10 left-[10px] -bottom-[100px] "

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
                                        width={100}
                                        height={100}
                                        alt="Dentist 2"
                                        className=" "
                                    />
                                </motion.div>
                                <Image
                                    src="/icon-star-1.svg"
                                    width={100}
                                    height={100}
                                    alt="Dentist 2"
                                    className=" absolute w-20 h-20 opacity-20 left-[40px] -bottom-[80px]  "
                                />

                            </div>
                        </div>
                    </motion.div>
                    <div>
                        <h4 className="text-cyan-600 font-semibold mb-2">About Us</h4>
                        <BlurFade delay={0.25} inView>

                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pred">
                                Your Journey to a Healthier Smile Begins Here
                            </h2>
                        </BlurFade>
                        <BlurFade delay={0.5} inView>

                            <p className="text-gray-600 mb-6">
                                The goal of our clinic is to provide friendly, caring dentistry and
                                the highest level of general, cosmetic, and specialist dental
                                treatments. With dental practices throughout the world.
                            </p>
                        </BlurFade>
                        <ul className="grid grid-cols-2 gap-2 mb-6  list-inside text-gray-700">
                            <BlurFade delay={0.6} inView>
                                <li className="flex gap-2"> <CircleCheck color="#1C3C90" /> Experienced Team</li>

                            </BlurFade>
                            <BlurFade delay={0.7} inView>
                                <li className="flex gap-2"> <CircleCheck color="#1C3C90" /> State-Of-The-Art Technology</li>

                            </BlurFade>
                            <BlurFade delay={0.8} inView>
                                <li className="flex gap-2"> <CircleCheck color="#1C3C90" /> Comprehensive Services</li>

                            </BlurFade>
                            <BlurFade delay={0.9} inView>
                                <li className="flex gap-2"> <CircleCheck color="#1C3C90" /> Emergency Dental Services</li>

                            </BlurFade>

                        </ul>
                        <button className="px-6 py-3 bg-pblue text-white rounded-md hover:bg-cyan-700 transition">
                            Read More About Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
