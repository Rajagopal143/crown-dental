"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const teamMembers = [
    {
        name: "Dr. Johan Joe",
        title: "Lead Dentist",
        image: "/team-1.jpg"
    },
    {
        name: "Dr. Mike Johnson",
        title: "Senior Dentist",
        image: "/team-2.jpg"
    },
    {
        name: "Dr. Alison Banson",
        title: "Orthodontist",
        image: "/team-3.jpg"
    },
    {
        name: "Dr. Christopher Case",
        title: "Periodontist",
        image: "/team-4.jpg"
    }
]

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

export default function TeamSection() {
    return (
        <section id="doctor" className="py-10 min-h-screen">
            <div className="container mx-auto px-4 text-center">
                <motion.h4
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-cyan-600 font-semibold tracking-wider"
                >
                    OUR TEAM
                </motion.h4>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mt-2 text-pblue"
                >
                    Our Friendly Dentists Team
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-gray-600 mt-2 mb-10"
                >
                    We are committed to sustainability, eco-friendly initiatives.
                </motion.p>
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-4 "
                >
                    {teamMembers.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay:1+ 0.2*i }}
                            viewport={{ once: true }}
                            className=""
                        >
                            <div className="relative w-56 h-64 mx-auto mb-4 overflow-hidden">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover rounded-lg hover:scale-110 transition-all"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-pblue">{member.name}</h3>
                            <p className="text-ndark">{member.title}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
