import { motion } from 'framer-motion';
import { ArrowRight } from 'heroicons-react'; // Install heroicons-react or use another icon library
import { ArrowRightCircle } from 'lucide-react';

const AboutSection = () => {
    const features = [
        'Experienced Team',
        'State-Of-The-Art Technology',
        'Comprehensive Services',
        'Emergency Dental Services',
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-background to-blue-50/30 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center mb-12"
                >
                    <h2 className="text-3xl font-bold uppercase text-blue-600 mb-4 tracking-wide">
                        ABOUT US
                    </h2>
                    <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl font-bold text-gray-800 mb-6"
                    >
                        Your Journey to a Healthier Smile Begins Here
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-lg text-gray-600 mb-8"
                    >
                        The goal of our clinic is to provide friendly, caring dentistry and the highest level of
                        general, cosmetic, and specialist dental treatments. With dental practices throughout the world.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: index * 0.1,
                                type: 'spring',
                                stiffness: 100,
                                damping: 15
                            }}
                            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                        >
                            <div className="text-center">
                                <h3 className="text-lg font-semibold text-gray-800">{feature}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto hover:shadow-lg transition-all"
                    >
                        Read More About Us
                        <ArrowRightCircle className="w-4 h-4" />
                    </motion.button>
                </motion.div>

                {/* Animated background elements */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(4)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"
                            initial={{
                                scale: 0,
                                opacity: 0,
                                x: Math.random() * 100 - 50 + "%",
                                y: Math.random() * 100 - 50 + "%"
                            }}
                            animate={{
                                scale: 1,
                                opacity: 0.1,
                                rotate: Math.random() * 360
                            }}
                            transition={{
                                duration: 20 + Math.random() * 10,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;