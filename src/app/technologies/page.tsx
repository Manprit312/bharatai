'use client'
import React, { useState, useMemo, useCallback } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import { TextAnimate } from "@/components/ui/text-animate"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { RoughNotation } from "react-rough-notation"
import { Marquee } from "@/components/ui/marquee"
import { ServicePopup } from '@/components/ServicePopup'
import { ContactPopup } from '@/components/ContactPopup'
import TechStack, { categorizedTech } from '@/consts/techstack'
import { ArrowRight, Sparkles } from 'lucide-react'
import { categories } from '@/consts/services'

const Stats = [
    { value: `${TechStack.length}+`, label: 'Technologies', color: 'text-blue-600', bg: 'bg-blue-50' },
    { value: '8', label: 'Categories', color: 'text-yellow-500', bg: 'bg-yellow-50' },
    { value: '100%', label: 'Modern Stack', color: 'text-cyan-500', bg: 'bg-cyan-50' },
    { value: '24/7', label: 'Updates', color: 'text-purple-600', bg: 'bg-purple-50' }
]

function TechnologiesPage() {
    const [servicePopup, setServicePopup] = useState({ isOpen: false, projectType: '' })
    const [contactPopup, setContactPopup] = useState(false)

    const openServicePopup = useCallback((projectType: string) => {
        setServicePopup({ isOpen: true, projectType })
    }, [])

    const closeServicePopup = useCallback(() => {
        setServicePopup({ isOpen: false, projectType: '' })
    }, [])

    const TechCard = useCallback(({ tech, index }: { tech: any, index: number }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
            }}
            className={`relative group flex flex-col items-center p-3 sm:p-4 md:p-6 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl hover:border-yellow-500 transition-all duration-500 w-32 sm:w-40 md:w-48 mx-2 sm:mx-3 flex-shrink-0 hover:shadow-xl hover:shadow-yellow-500/20 ${tech.minWidth ? 'min-w-[10rem]' : ''}`}
        >
            <div className={`relative p-2 sm:p-3 md:p-4 rounded-xl bg-blue-50 mb-2 sm:mb-3 md:mb-4 ${tech.color} group-hover:scale-110 transition-transform duration-300 border border-blue-200`}>
                <tech.icon className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
            </div>
            <h3 className="text-black font-bold text-xs sm:text-sm md:text-base mb-1 sm:mb-2 text-center group-hover:text-blue-600 transition-colors duration-300">{tech.name}</h3>
            <p className="text-gray-600 text-xs leading-relaxed text-center">{tech.description}</p>
        </motion.div>
    ), [])

    const half = useMemo(() => Math.ceil(TechStack.length / 2), [])
    const firstRow = useMemo(() => TechStack.slice(0, half), [half])
    const secondRow = useMemo(() => TechStack.slice(half), [half])

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Navbar />

            <section className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-yellow-50/20"></div>
                <div className="absolute top-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-cyan-500/10 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-12 sm:mb-16 md:mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center justify-center gap-2 sm:gap-3 text-blue-600 mb-4 sm:mb-6 md:mb-8"
                        >
                            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
                            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase">Our Technology Arsenal</span>
                            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
                        </motion.div>

                        <div className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black text-black mb-4 sm:mb-6 md:mb-8 leading-tight">
                            <span className="inline-block">
                                <TextAnimate animation="slideUp" by="word">
                                    Cutting-Edge
                                </TextAnimate>
                                {" "}
                                <RoughNotation
                                    type="highlight"
                                    show={true}
                                    color="#eab308"
                                    animationDelay={1000}
                                >
                                    <span className="text-black mx-1 sm:mx-2 md:mx-4">Technologies</span>
                                </RoughNotation>
                            </span>
                        </div>

                        <TextAnimate
                            className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4"
                            animation="slideUp"
                            by="word"
                        >
                            We leverage the most advanced and reliable technologies to build scalable,
                            secure, and high-performance solutions that drive your business forward.
                        </TextAnimate>
                    </div>

                    <div className="space-y-6 overflow-hidden mb-12 sm:mb-16 md:mb-20 min-h-[10rem]">
                        <div className="relative">
                            <Marquee className="py-3" reverse={false} speed={30}>
                                {firstRow.map((tech, index) => (
                                    <TechCard key={`first-${tech.name}-${index}`} tech={tech} index={index} />
                                ))}
                            </Marquee>
                        </div>
                        <div className="relative">
                            <Marquee className="py-3" reverse={true} speed={35}>
                                {secondRow.map((tech, index) => (
                                    <TechCard key={`second-${tech.name}-${index}`} tech={tech} index={index} />
                                ))}
                            </Marquee>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-8"
                    >
                        {Stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className={`text-center p-3 sm:p-4 md:p-8 ${stat.bg} backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl border border-gray-200 hover:border-yellow-500 transition-all duration-300`}
                            >
                                <div className={`text-xl sm:text-2xl md:text-3xl font-black ${stat.color} mb-1 sm:mb-2 md:mb-3`}>{stat.value}</div>
                                <div className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {categories.map((category, categoryIndex) => (
                <section
                    key={category.id}
                    id={category.id}
                    className={`py-12 sm:py-16 md:py-20 lg:py-24 relative ${category.color === 'text-cyan-600' ? 'bg-white' : 'bg-yellow-50/30'}`}
                >
                    <div className="absolute inset-0 opacity-5">
                        <img
                            src={category.image}
                            alt={category.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-8 sm:mb-12 lg:mb-16">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="space-y-4 sm:space-y-6 md:space-y-8"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 md:gap-6">
                                    <div className={`p-3 sm:p-4 md:p-6 ${category.bgColor} rounded-xl sm:rounded-2xl md:rounded-3xl border ${category.borderColor} w-fit`}>
                                        <category.icon className={`w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 ${category.color}`} />
                                    </div>
                                    <div className="flex-1">
                                        <TextAnimate
                                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black mb-2"
                                            animation="slideUp"
                                            by="word"
                                        >
                                            {category.name}
                                        </TextAnimate>
                                        <div className={`w-8 sm:w-12 md:w-20 h-1 ${category.color.replace('text-', 'bg-')} rounded-full`}></div>
                                    </div>
                                </div>

                                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                                    {category.description}
                                </p>

                                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                                    <InteractiveHoverButton 
                                        onClick={() => openServicePopup(category.name)}
                                        className={`${category.color === 'text-cyan-600' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-yellow-500 hover:bg-yellow-600'} text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl md:rounded-2xl font-bold text-sm sm:text-base w-full sm:w-auto`}
                                    >
                                        <span className="flex items-center justify-center gap-2">
                                            Explore {category.name}
                                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                                        </span>
                                    </InteractiveHoverButton>
                                    <span className="text-gray-600 text-sm sm:text-base text-center sm:text-left">
                                        {categorizedTech[category.id as keyof typeof categorizedTech]?.length} technologies
                                    </span>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="relative order-first lg:order-none"
                            >
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative"
                                >
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl border border-blue-200 w-full h-48 sm:h-60 md:h-80 object-cover"
                                    />
                                    <div className={`absolute inset-0 ${category.bgColor} rounded-xl sm:rounded-2xl md:rounded-3xl opacity-20`}></div>

                                    <motion.div
                                        animate={{ y: [0, -8, 0] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        className={`absolute -top-3 -right-3 sm:-top-4 sm:-right-4 md:-top-6 md:-right-6 p-2 sm:p-3 md:p-4 ${category.bgColor} backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl border ${category.borderColor} shadow-lg`}
                                    >
                                        <category.icon className={`w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 ${category.color}`} />
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                            {categorizedTech[category.id as keyof typeof categorizedTech]?.map((tech, index) => (
                                <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{
                                        y: -10,
                                        transition: { duration: 0.3 }
                                    }}
                                    className="group relative"
                                >
                                    <div className={`h-full p-3 sm:p-4 md:p-6 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-xl sm:rounded-2xl hover:border-yellow-500 transition-all duration-500 hover:shadow-xl hover:shadow-yellow-500/20 text-center relative overflow-hidden`}>
                                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        <div className={`relative w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 ${category.bgColor} rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 border ${category.borderColor}`}>
                                            <tech.icon className={`w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 ${category.color}`} />
                                        </div>

                                        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-black mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                            {tech.name}
                                        </h3>
                                        <p className="text-gray-600 text-xs leading-relaxed">
                                            {tech.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-tr from-cyan-50/60 via-white to-yellow-50/40 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-yellow-50/20"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 border border-blue-200 shadow-2xl"
                    >
                        <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 md:mb-8"
                        >
                            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                        </motion.div>

                        <TextAnimate
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black mb-4 sm:mb-6 md:mb-8"
                            animation="slideUp"
                            by="word"
                        >
                            Ready to Build with Modern Tech?
                        </TextAnimate>

                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
                            Let's discuss which technologies are perfect for your project and create something amazing together.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center">
                            <InteractiveHoverButton 
                                onClick={() => setContactPopup(true)}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 rounded-lg sm:rounded-xl md:rounded-2xl font-bold text-sm sm:text-base md:text-lg shadow-lg w-full sm:w-auto"
                            >
                                <span className="flex items-center justify-center gap-2 sm:gap-3">
                                    Start Your Project
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                                </span>
                            </InteractiveHoverButton>

                            <InteractiveHoverButton className="border-2 border-purple-600 hover:border-yellow-500 hover:bg-yellow-50 text-black px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 rounded-lg sm:rounded-xl md:rounded-2xl font-bold text-sm sm:text-base md:text-lg bg-transparent backdrop-blur-sm w-full sm:w-auto">
                                Tech Consultation
                            </InteractiveHoverButton>
                        </div>
                    </motion.div>
                </div>
            </section>

            <ServicePopup 
                isOpen={servicePopup.isOpen}
                onClose={closeServicePopup}
                projectType={servicePopup.projectType}
            />
            
            <ContactPopup 
                isOpen={contactPopup}
                onClose={() => setContactPopup(false)}
            />
        </div>
    )
}

export default TechnologiesPage
