'use client'
import React from 'react'
import { motion } from 'framer-motion'
import TechStack from '@/consts/techstack' 
import { TextAnimate } from "@/components/ui/text-animate"
import { Marquee } from "@/components/ui/marquee"
import { RoughNotation } from "react-rough-notation"

function Technology() {
    const firstRow = TechStack.slice(0, Math.ceil(TechStack.length / 3))
    const secondRow = TechStack.slice(Math.ceil(TechStack.length / 3), Math.ceil(TechStack.length * 2 / 3))
    const thirdRow = TechStack.slice(Math.ceil(TechStack.length * 2 / 3))

    const TechCard = ({ tech, index }: { tech: any, index: number }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.02 }}
            whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
            }}
            className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-lg transition-all duration-300 w-40 mx-2 flex-shrink-0"
        >
            <div className={`p-3 rounded-lg bg-yellow-100 mb-3 ${tech.color}`}>
                <tech.icon className="w-6 h-6" />
            </div>
            <h3 className="text-black font-semibold text-sm mb-1 text-center">{tech.name}</h3>
            <p className="text-gray-600 text-xs text-center">{tech.description}</p>
        </motion.div>
    )

    return (
        <section className="py-24 bg-gradient-to-r from-yellow-50/40 via-white to-cyan-50/30 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/10 via-transparent to-transparent"></div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-2 text-blue-600 mb-4"
                    >
                        <div className="w-8 h-px bg-blue-600"></div>
                        <span className="text-sm font-medium tracking-wider uppercase">Our Tech Stack</span>
                        <div className="w-8 h-px bg-blue-600"></div>
                    </motion.div>

                    <TextAnimate
                        className="text-3xl md:text-5xl font-bold text-black mb-6"
                        animation="slideUp"
                        by="word"
                    >
                        Powered by Cutting-Edge Technologies
                    </TextAnimate>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mb-6"
                    >
                        <RoughNotation
                            type="underline"
                            show={true}
                            color="#eab308"
                            animationDelay={1000}
                        >
                            <span className="text-black text-2xl font-semibold">Innovation at Every Layer</span>
                        </RoughNotation>
                    </motion.div>

                    <TextAnimate
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                        animation="slideUp"
                        by="word"
                    >
                        We leverage the latest and most powerful technologies to build 
                        scalable, secure, and high-performance solutions for your business.
                    </TextAnimate>
                </div>

                {/* Technology Marquees */}
                <div className="space-y-6 overflow-hidden">
                    {/* First Row - Right to Left */}
                    <div className="relative">
                        <Marquee className="py-3" reverse={false} speed={30}>
                            {firstRow.map((tech, index) => (
                                <TechCard key={`first-${tech.name}-${index}`} tech={tech} index={index} />
                            ))}
                        </Marquee>
                    </div>

                    {/* Second Row - Left to Right */}
                    <div className="relative">
                        <Marquee className="py-3" reverse={true} speed={35}>
                            {secondRow.map((tech, index) => (
                                <TechCard key={`second-${tech.name}-${index}`} tech={tech} index={index} />
                            ))}
                        </Marquee>
                    </div>

                    {/* Third Row - Right to Left */}
                    <div className="relative">
                        <Marquee className="py-3" reverse={false} speed={25}>
                            {thirdRow.map((tech, index) => (
                                <TechCard key={`third-${tech.name}-${index}`} tech={tech} index={index} />
                            ))}
                        </Marquee>
                    </div>
                </div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    <div className="text-center p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
                        <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                        <div className="text-gray-600">Technologies</div>
                    </div>
                    <div className="text-center p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
                        <div className="text-3xl font-bold text-cyan-500 mb-2">5+</div>
                        <div className="text-gray-600">Years Experience</div>
                    </div>
                    <div className="text-center p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
                        <div className="text-3xl font-bold text-yellow-500 mb-2">100%</div>
                        <div className="text-gray-600">Modern Stack</div>
                    </div>
                    <div className="text-center p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
                        <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                        <div className="text-gray-600">Updates</div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Technology
