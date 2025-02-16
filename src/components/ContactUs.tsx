"use client"
import { motion } from "framer-motion"
import { BlurFade } from "./ui/blur-fade"
import { MapPinHouse, Phone } from "lucide-react"
import { Button } from "./ui/button"

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function ContactNow() {
    return (
        <section id="contact" className=" min-h-screen flex justify-center items-center px-28">
            <div className="container mx-auto px-4">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-8 items-center"
                >
                    <motion.div initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }} className="rounded-lg overflow-hidden shadow">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24175.851514782265!2d-0.15289076044921854!3d51.507341599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876056dcdcb07fd%3A0x3d7d1f3d9a72fd0a!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1675690224526!5m2!1sen!2suk"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </motion.div>
                    <div>
                        <BlurFade delay={0.2} inView>
                            
                        <h4 className="text-pblue font-semibold mb-2">CONTACT NOW</h4>
                        </BlurFade>
                        <BlurFade delay={0.5} inView>

                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="text-pblue">Get Free</span>  Professional Consultation
                        </h2>
                        </BlurFade>
                        <BlurFade delay={0.7} inView>

                            <p className="text-gray-600 mb-6 flex gap-2">
                                <MapPinHouse className="text-pblue"/>
                            241 Robert Road, New York, USA
                        </p>
                        </BlurFade>
                        <div className="space-y-3 text-gray-600 mb-6">
                            <BlurFade delay={1} inView>

                            <div className="flex items-center gap-2 ">
                                <Phone className="text-pblue" />
                                (+12) 3456 7890
                            </div>
                            </BlurFade>
                            <BlurFade delay={1.2} inView>

                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-pblue" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.25 3h-14.5C3.784 3 3 3.784 3 4.75v14.5c0 .966.784 1.75 1.75 1.75h14.5c.966 0 1.75-.784 1.75-1.75V4.75c0-.966-.784-1.75-1.75-1.75zm-7.25 11.913L5.821 8.734c-.282-.224-.069-.677.282-.677h11.794c.351 0 .564.453.282.677l-6.179 6.179c-.293.293-.768.293-1.061 0z" />
                                </svg>
                                info@domain.com
                            </div>
                            </BlurFade>
                        </div>
                        <BlurFade delay={1.5} inView>

                        <Button className="px-6 py-3 bg-pblue text-white rounded-md hover:bg-cyan-700 transition">
                            Make An Appointment
                            </Button>
                        </BlurFade>

                    </div>
                </motion.div>
            </div>
        </section>
    )
}
