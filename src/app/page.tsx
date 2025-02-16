"use client"
import { Footerdemo } from "@/components/ui/footer-section";
import { NavBar, NavItem } from "@/components/ui/tubelight-navbar";
import { Briefcase, FileText, HomeIcon, Phone, ServerCog, User } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedWords from "@/components/framer-motion/TextOneByOne";
import Image from "next/image";
import RevealImage from "@/components/framer-motion/Framer-Image";
import AboutSection from "@/components/AboutSection";
import CircularTextSpinner from "@/components/SpinnerText";

export default function Home() {
  const navItems = [
    { name: 'Home', url: '#', icon: HomeIcon },
    { name: 'Services', url: '#service', icon: Briefcase },
    { name: 'Doctors', url: '#', icon: FileText },
    { name: 'Treatments', url: '#', icon: ServerCog }, 
    { name: 'Contact', url: '#', icon: Phone }
  ]
  const services = 
    [
    {
      icon: '/tooth-svgrepo-com.svg',
      title: 'General Dentistry',
      description: 'Complete oral health evaluation and preventive care'
    },
    {
      icon: '/stethoscope-svgrepo-com.svg',
      title: 'Dental Checkups',
      description: 'Regular examinations and professional cleaning'
    },
    {
      icon: '/syringe-svgrepo-com.svg',
      title: 'Pain Management',
      description: 'Advanced anesthesia techniques for comfort'
    },
    {
      icon: '/tooth.png',
      title: 'Orthodontics',
      description: 'Modern braces and aligner treatments'
    },
    {
      icon: '/window.svg',
      title: 'Dental Implants',
      description: 'Permanent tooth replacement solutions'
    },
    {
      icon: '/globe.svg',
      title: 'Emergency Care',
      description: '24/7 urgent dental services'
    },
              ]
  return (
    <>
      <NavBar items={navItems} />
      <Image src="/final_logo.jpg" width={70} height={70} alt="Logo" className="fixed top-4 left-4 z-20 p-2 bg-white rounded-lg"/>
      <main className="min-h-screen ">
        {/* Hero Section */}
        <section className="relative flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 text-center z-10  "
          > 
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left space-y-6 ">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  Experience Dental Excellence with a Gentle Touch
                </h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
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
                className=""
              >
                <Image src="/hero-img.png" width={1000} height={1000} alt="Logo" className="w-full p-24 mt-6" />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-b from-background to-cyan-50/30 relative overflow-hidden" >
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"
            >
              Our Services
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {services.map((service:any, index:any) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="group bg-background p-8 rounded-3xl shadow-2xl border border-border/20 hover:border-cyan-200/40 transition-all relative overflow-hidden"
                >
                  {/* Glowing overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(400px_at_var(--x)_var(--y),rgba(8,145,178,0.15)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon container */}
                  <motion.div
                    className="mb-6 relative"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="w-10 h-10 object-contain filter brightness-0 invert"
                      />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>

                    {/* Read More section */}
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-border/20">
                        <ul className="list-disc pl-5 text-sm text-cyan-800/90">
                          {service.details?.map((detail:any, i:any) => (
                            <li key={i} className="mb-2">{detail}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>

                    {/* Read More button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 mt-4"
                    >
                      <span className="font-semibold">Read More</span>
                      <svg
                        className="w-4 h-4 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
      </section>
      </main>
      <AboutSection/>

      <Footerdemo/>
    </>
  );
}
