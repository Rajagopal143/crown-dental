import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const ServiceSection = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Create an Intersection Observer to detect when the section is in view
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once it's visible, we can unobserve if we don't want to trigger again
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 } // Adjust threshold as needed
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const services = [
        {
            icon: '/tooth-svgrepo-com.svg',
            title: 'General Dentistry',
            description: 'Complete oral health evaluation and preventive care',
            imageOnBack: "/about-us-img-1.jpg"
        },
        {
            icon: '/stethoscope-svgrepo-com.svg',
            title: 'Dental Checkups',
            description: 'Regular examinations and professional cleaning',
            imageOnBack: "/about-us-img-1.jpg"
        },
        {
            icon: '/syringe-svgrepo-com.svg',
            title: 'Pain Management',
            description: 'Advanced anesthesia techniques for comfort',
            imageOnBack: "/about-us-img-1.jpg"

        },
        {
            icon: '/tooth.png',
            title: 'Orthodontics',
            description: 'Modern braces and aligner treatments', imageOnBack: "/about-us-img-1.jpg"


        },
        {
            icon: '/window.svg',
            title: 'Dental Implants',
            description: 'Permanent tooth replacement solutions',
            imageOnBack: "/about-us-img-1.jpg"

        },
        {
            icon: '/globe.svg',
            title: 'Emergency Care',
            description: '24/7 urgent dental services', imageOnBack: "/about-us-img-1.jpg"
        },
    ]
    return (
        <section
            id="service"
            ref={sectionRef}
            className="py-20 bg-gradient-to-b from-background shadow-md relative overflow-hidden"
        >
            <div className="container mx-auto px-4 z-50">
                <h2 className="text-5xl font-bold text-center mb-5 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    Our Services
                </h2>

                <div className="grid md:grid-cols-3 gap-8 relative max-sm:grid-cols-2">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            // Use Tailwind classes for slide-up animation & fade-in
                            className={`
                relative w-full h-80 border border-border/20 rounded-3xl shadow-2xl
                transform transition-all duration-700 ease-out 
                ${isVisible
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-10'
                                }
              `}
                            // Delay each card a bit for a staggered effect
                            style={{ transitionDelay: `${index * 0.2}s` }}
                        >
                            <div className="group relative w-full h-full bg-background p-8 overflow-hidden rounded-3xl">
                                {/* Hover color fill from bottom to top */}
                                <div className="absolute bottom-0 left-0 w-full h-0 bg-lblue
                  group-hover:h-full transition-all duration-500 z-0"
                                />

                                {/* Card Content (z-10 so it sits above the color fill) */}
                                <div className="relative z-10 h-full flex flex-col">
                                    {/* Icon Container */}
                                    <div className="w-16 h-16 mb-6 bg-gradient-to-br from-pblue to-pblue rounded-xl flex items-center justify-center shadow-lg">
                                        <img
                                            src={service.icon}
                                            alt={service.title}
                                            className="w-10 h-10 object-contain filter brightness-0 invert"
                                        />
                                    </div>

                                    {/* Title & Description */}
                                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pblue to-nlight bg-clip-text text-transparent">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-6 flex-grow">
                                        {service.description}
                                    </p>

                                    {/* "Read More" Button */}
                                    <button className="text-cyan-600 hover:text-cyan-700 font-semibold relative z-10">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;
    