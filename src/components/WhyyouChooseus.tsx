"use client"
import Image from "next/image"
import { BlurFade } from "./ui/blur-fade"

export default function WhyChooseUs() {
    return (
        <section className="py-10">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <BlurFade delay={0.2} inView>
                        <p className="text-pblue font-semibold tracking-wider mb-4">
                            WHY CHOOSE US
                        </p>
                    </BlurFade>
                    <BlurFade delay={0.5} inView>
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-pblue bg-clip-text text-transparent">
                            Advanced Dental Diagnostics
                        </h2>
                    </BlurFade>
                    <BlurFade delay={0.7} inView>
                        <p className="text-gray-600 mt-4 text-lg">
                            Combining cutting-edge technology with compassionate care for your perfect smile
                        </p>
                    </BlurFade>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden space-y-8">
                    <div className="grid grid-cols-1">

                    {[
                        { title: 'Experienced Doctor', icon: '/dental-1.svg', delay: 0.5 },
                        { title: 'Emergency Services', icon: '/dental-2.svg', delay: 0.7, right: true },
                        { title: 'Personalized Care', icon: '/dental-3.svg', delay: 0.9 },
                    ].map((item, idx) => (
                        <BlurFade key={idx} delay={item.delay} inView>
                            <div className={`flex items-center gap-4 p-2 text-left `}>
                                <Image src={item.icon} width={40} height={40} alt={item.title} className="w-10 h-10" />
                                <div>
                                    <h3 className="font-bold text-pblue text-2xl">{item.title}</h3>
                                    <p className="text-ndark text-sm mt-1">
                                        The goal of our clinic is to provide friendly, caring dentistry and the highest level of care.
                                    </p>
                                </div>
                            </div>
                        </BlurFade>
                    ))}
                    </div>
                    <div className="mt-8 mx-auto">
                        <Image
                            src="/3dtooth.png"
                            alt="Tooth"
                            width={250}
                            height={250}
                            className="mx-auto"
                        />
                    </div>
                    <div className="grid grid-cols-1">

                    {[
                            { title: 'Positive Patient Reviews', icon: '/dental-4.svg', delay: 1.1, right: true },
                            { title: 'Flexible Payment Options', icon: '/dental-5.svg', delay: 1.3 },
                            { title: 'Latest Technology', icon: '/dental-6.svg', delay: 1.5, right: true },
                    ].map((item, idx) => (
                        <BlurFade key={idx} delay={item.delay} inView>
                            <div className={`flex items-center gap-4 p-2 text-left `}>
                                <Image src={item.icon} width={40} height={40} alt={item.title} className="w-10 h-10" />
                                <div>
                                    <h3 className="font-bold text-pblue text-2xl">{item.title}</h3>
                                    <p className="text-ndark text-sm mt-1">
                                        The goal of our clinic is to provide friendly, caring dentistry and the highest level of care.
                                    </p>
                                </div>
                            </div>
                        </BlurFade>
                    ))}
                    </div>
                    
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:block relative mx-auto max-w-5xl h-[500px]">
                    <Image
                        src="/3dtooth.png"
                        alt="Tooth"
                        width={350}
                        height={350}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    />

                    {/* Left Column Items */}
                    <BlurFade delay={1} inView className="absolute top-10 left-10 w-80">
                        <div className="flex flex-row-reverse items-center gap-4 text-right">
                            <Image src="/dental-1.svg" width={40} height={40} alt="Doctor" className="w-10 h-10" />
                            <div>
                                <h3 className="font-semibold text-pblue">Experienced Doctor</h3>
                                <p className="text-ndark text-sm mt-1">The goal of our clinic is to provide friendly, caring dentistry and the highest level of care.</p>
                            </div>
                        </div>
                    </BlurFade>

                    <BlurFade delay={1.4} inView className="absolute top-52 -left-10 -translate-y-1/2 w-80">
                        <div className="flex flex-row-reverse items-center gap-4 text-right">
                            <Image src="/dental-3.svg" width={40} height={40} alt="Care" className="w-10 h-10" />
                            <div>
                                <h3 className="font-semibold text-pblue">Personalized Care</h3>
                                <p className="text-ndark text-sm mt-1">The goal of our clinic is to provide friendly, caring dentistry and the highest level of care.</p>
                            </div>
                        </div>
                    </BlurFade>

                    <BlurFade delay={1.8} inView className="absolute bottom-10 left-10 w-80">
                        <div className="flex flex-row-reverse items-center gap-4 text-right">
                            <Image src="/dental-5.svg" width={40} height={40} alt="Payment" className="w-10 h-10" />
                            <div>
                                <h3 className="font-semibold text-pblue">Flexible Payment Options</h3>
                                <p className="text-ndark text-sm mt-1">The goal of our clinic is to provide friendly, caring dentistry and the highest level of care.</p>
                            </div>
                        </div>
                    </BlurFade>

                    {/* Right Column Items */}
                    <BlurFade delay={1.2} inView className="absolute top-10 right-10 w-80">
                        <div className="flex items-center gap-4 text-left">
                            <Image src="/dental-2.svg" width={40} height={40} alt="Emergency" className="w-10 h-10" />
                            <div>
                                <h3 className="font-semibold text-pblue">Emergency Services</h3>
                                <p className="text-ndark text-sm mt-1">The goal of our clinic is to provide friendly, caring dentistry and the highest level of care.</p>
                            </div>
                        </div>
                    </BlurFade>

                    <BlurFade delay={1.6} inView className="absolute top-52 -right-10 -translate-y-1/2 w-80">
                        <div className="flex items-center gap-4 text-left">
                            <Image src="/dental-4.svg" width={40} height={40} alt="Reviews" className="w-10 h-10" />
                            <div>
                                <h3 className="font-semibold text-pblue">Positive Patient Reviews</h3>
                                <p className="text-ndark text-sm mt-1">The goal of our clinic is to provide friendly, caring dentistry and the highest level of care.</p>
                            </div>
                        </div>
                    </BlurFade>

                    <BlurFade delay={2} inView className="absolute bottom-10 right-10 w-80">
                        <div className="flex items-center gap-4 text-left">
                            <Image src="/dental-6.svg" width={40} height={40} alt="Technology" className="w-10 h-10" />
                            <div>
                                <h3 className="font-semibold text-pblue">Latest Technology</h3>
                                <p className="text-ndark text-sm mt-1">The goal of our clinic is to provide friendly, caring dentistry and the highest level of care.</p>
                            </div>
                        </div>
                    </BlurFade>
                </div>
            </div>
        </section>
    )
}