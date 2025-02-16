"use client"
import Image from "next/image"
import { BlurFade } from "./ui/blur-fade"

export default function WhyChooseUs() {
    return (
        <section className="py-10 ">
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
                <div className="relative mx-auto max-w-5xl h-[500px]">
                    <Image
                        src="/3dtooth.png"
                        alt="Tooth"
                        width={350}
                        height={350}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                    <BlurFade delay={1} inView className="absolute top-10 left-10 w-80 text-right">

                        <div className="">
                            <h3 className="font-semibold text-pblue">
                                Experienced Doctor
                            </h3>
                            <p className="text-ndark text-sm mt-1">
                                The goal of our clinic is to provide friendly, caring dentistry and the highest level of care.
                            </p>
                        </div>
                    </BlurFade>
                    <BlurFade delay={1.4} inView className="absolute top-52 -left-10  -translate-y-1/2 w-80 text-right">

                        <div >
                            <h3 className="font-semibold text-pblue">
                                Personalized Care
                            </h3>
                            <p className="text-ndark text-sm mt-1">
                                The goal of our clinic is to provide friendly, caring dentistry and the highest level of care.
                            </p>
                        </div>
                    </BlurFade>

                    <BlurFade delay={1.8} inView className="absolute bottom-10 left-10 w-80 text-right">

                        <div >
                            <h3 className="font-semibold text-pblue">
                                Flexible Payment Options
                            </h3>
                            <p className="text-ndark text-sm mt-1">
                                The goal of our clinic is to provide friendly, caring dentistry and the highest level of care.
                            </p>
                        </div>
                    </BlurFade>

                    <BlurFade delay={1.2} inView className="absolute top-10 right-10 w-80 text-left">

                        <div>
                            <h3 className="font-semibold text-pblue">
                                Emergency Services
                            </h3>
                            <p className="text-ndark text-sm mt-1">
                                The goal of our clinic is to provide friendly, caring dentistry and the highest level of care.
                            </p>
                        </div>
                    </BlurFade>

                    <BlurFade delay={1.6} inView className="absolute top-52 -right-10 -translate-y-1/2 w-80 text-left    ">

                        <div >
                            <h3 className="font-semibold text-pblue">
                                Positive Patient Reviews
                            </h3>
                            <p className="text-ndark text-sm mt-1">
                                The goal of our clinic is to provide friendly, caring dentistry and the highest level of care.
                            </p>
                        </div>
                    </BlurFade>

                    <BlurFade delay={2} inView className="absolute bottom-10 right-10 w-80 text-left">

                        <div >
                            <h3 className="font-semibold text-pblue">
                                Latest Technology
                            </h3>
                            <p className="text-ndark text-sm mt-1">
                                The goal of our clinic is to provide friendly, caring dentistry and the highest level of care.
                            </p>
                        </div>
                    </BlurFade>

                </div>
            </div>
        </section>
    )
}
