'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { TextAnimate } from "@/components/ui/text-animate"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { ArrowRight, CheckCircle, Zap, Target, Users } from 'lucide-react'
import { useContactPopup } from "@/components/ContactPopup"
import Image from 'next/image'

function Transform() {
    const { openPopup, ContactPopup } = useContactPopup()
    const features = [
        {
            icon: Target,
            title: "Strategic Planning",
            description: "We analyze your business goals and create tailored digital strategies."
        },
        {
            icon: Zap,
            title: "Rapid Development",
            description: "Fast-track your project with our agile development methodology."
        },
        {
            icon: Users,
            title: "Expert Team",
            description: "Work with seasoned professionals who deliver exceptional results."
        }
    ]

    return (
        <section className="py-12 md:py-16 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
            <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-yellow-500/5 rounded-full blur-3xl"></div>
            
            <div className="max-w-7xl mx-auto px-4 lg:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 md:space-y-8"
                    >
                        <div className="space-y-4 md:space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-2 text-blue-600"
                            >
                                <div className="w-6 md:w-8 h-px bg-blue-600"></div>
                                <span className="text-xs md:text-sm font-medium tracking-wider uppercase">Why Choose Us</span>
                            </motion.div>

                            <TextAnimate
                                className="text-2xl md:text-4xl lg:text-5xl font-bold text-black leading-tight"
                                animation="slideUp"
                                by="word"
                            >
                                Transform Your Business with Digital Excellence 
                            </TextAnimate>

                            <TextAnimate
                                className="text-base md:text-lg text-gray-600 leading-relaxed"
                                animation="slideUp"
                                by="word"
                            >
                                We don't just build software – we craft digital experiences that 
                                drive growth, enhance efficiency, and position your business for 
                                long-term success in the digital landscape.
                            </TextAnimate>
                        </div>

                        <div className="space-y-3 md:space-y-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    className="flex items-start gap-3 md:gap-4"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl flex items-center justify-center">
                                        <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-base md:text-lg font-semibold text-black mb-1">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm md:text-base text-gray-600">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            <InteractiveHoverButton
                                onClick={openPopup}
                                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold text-base"
                            >
                                <span className="flex items-center gap-2">
                                    Start Your Journey
                                    <ArrowRight className="w-4 h-4" />
                                </span>
                            </InteractiveHoverButton>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative space-y-2"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="relative w-64 h-64 mx-auto lg:w-80 lg:h-80" 
                        >
                            <Image
                                src="/image/computer.jpg"
                                alt="Digital transformation technology"
                                width={320}
                                height={320}
                                className="w-full h-full object-cover rounded-lg"
                                priority
                            />
                        </motion.div>

                        <div className="grid grid-cols-2 gap-4 md:gap-6">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="p-4 md:p-6 bg-gray-100/50 backdrop-blur-sm border border-gray-200 rounded-2xl"
                            >
                                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1 md:mb-2">500+</div>
                                <div className="text-xs md:text-sm text-gray-600">Projects Completed</div>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5 }}
                                className="p-4 md:p-6 bg-gray-100/50 backdrop-blur-sm border border-gray-200 rounded-2xl"
                            >
                                <div className="text-2xl md:text-3xl font-bold text-yellow-500 mb-1 md:mb-2">98%</div>
                                <div className="text-xs md:text-sm text-gray-600">Client Satisfaction</div>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5 }}
                                className="p-4 md:p-6 bg-gray-100/50 backdrop-blur-sm border border-gray-200 rounded-2xl"
                            >
                                <div className="text-2xl md:text-3xl font-bold text-cyan-500 mb-1 md:mb-2">50+</div>
                                <div className="text-xs md:text-sm text-gray-600">Expert Developers</div>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5 }}
                                className="p-4 md:p-6 bg-gray-100/50 backdrop-blur-sm border border-gray-200 rounded-2xl"
                            >
                                <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1 md:mb-2">24/7</div>
                                <div className="text-xs md:text-sm text-gray-600">Support Available</div>
                            </motion.div>
                        </div>

                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-gradient-to-r from-blue-600 to-cyan-500 p-2 rounded-xl shadow-lg"
                        >
                            <Zap className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 bg-gradient-to-r from-yellow-500 to-purple-600 p-2 rounded-xl shadow-lg"
                        >
                            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            <ContactPopup />
        </section>
    )
}

export default Transform
