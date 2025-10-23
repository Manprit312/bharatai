'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { X, Star, Users, Trophy, Rocket, ArrowRight } from 'lucide-react'
import Image from 'next/image'
// import { triggerSideCannonConfetti } from './confetti'

interface WelcomePopupProps {
    isOpen: boolean
    onClose: () => void
}

export const WelcomePopup: React.FC<WelcomePopupProps> = ({ isOpen, onClose }) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const router = useRouter()

    // useEffect(() => {
    //     if (isOpen) {
    //         setTimeout(() => {
    //             triggerSideCannonConfetti()
    //         }, 500)
    //     }
    // }, [isOpen])

    const slides = [
        {
            title: "Welcome to BharatAI Software! 🚀",
            subtitle: "Transform Your Ideas Into Reality",
            description: "We're a premium software development company specializing in cutting-edge digital solutions.",
            image: "/image/hero.png",
            stats: [
                { icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />, label: "Happy Clients", value: "100+" },
                { icon: <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />, label: "Projects", value: "500+" },
                { icon: <Star className="w-4 h-4 sm:w-5 sm:h-5" />, label: "Rating", value: "5.0" }
            ]
        },
        {
            title: "Our Expertise 💡",
            subtitle: "Full-Stack Development Solutions",
            description: "From mobile apps to enterprise software, we deliver exceptional digital experiences.",
            image: "/image/computer.jpg",
            features: [
                "🔥 Mobile App Development",
                "⚡ Web Development",
                "🛒 E-commerce Solutions",
                "🔐 Blockchain Development",
                "🤖 AI Solutions",
                "☁️ Cloud Services"
            ]
        },
        {
            title: "Ready to Start? 🎯",
            subtitle: "Let's Build Something Amazing Together",
            description: "Join hundreds of satisfied clients who trusted us with their digital transformation.",
            image: "/image/team_1.jpg",
            cta: true
        }
    ]

    useEffect(() => {
        if (!isOpen) return

        const timer = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % slides.length)
        }, 4000)

        return () => clearInterval(timer)
    }, [isOpen, slides.length])

    const handleGetStarted = () => {
        router.push('/contact-us')
        onClose()
    }

    const handleExploreServices = () => {
        router.push('/service')
        onClose()
    }

    if (!isOpen) return null

    const currentSlideData = slides[currentSlide]

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center py-2 px-2 sm:p-4"
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0, y: 50 }}
                    transition={{ type: "spring", duration: 0.6 }}
                    className="bg-white rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[96vh] sm:h-auto relative shadow-2xl overflow-hidden"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 sm:top-6 sm:right-6 z-20 bg-white/90 backdrop-blur-sm rounded-full p-1.5 sm:p-2 hover:bg-white transition-colors shadow-lg"
                    >
                        <X size={16} className="sm:w-5 sm:h-5 text-slate-600" />
                    </button>

                    <div className="absolute top-3 left-3 sm:top-6 sm:left-6 z-10 flex space-x-1.5 sm:space-x-2">
                        {slides.map((_, index) => (
                            <motion.div
                                key={index}
                                className={`h-1.5 sm:h-2 rounded-full ${index === currentSlide ? 'bg-cyan-500' : 'bg-gray-300'
                                    }`}
                                animate={{ width: index === currentSlide ? 20 : 6 }}
                                transition={{ duration: 0.3 }}
                            />
                        ))}
                    </div>

                    <div className="flex flex-col lg:grid lg:grid-cols-2 h-full min-h-[400px] sm:min-h-[500px]">
                        <div className="order-2 lg:order-1 py-2 pb-8 px-3 sm:p-6 lg:p-12 flex flex-col justify-center flex-1">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentSlide}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 30 }}
                                    transition={{ duration: 0.5 }}
                                    className="h-full flex flex-col justify-center"
                                >
                                    <motion.h2
                                        className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-800 mb-1 sm:mb-4 leading-tight"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        {currentSlideData.title}
                                    </motion.h2>

                                    <motion.h3
                                        className="text-base sm:text-lg lg:text-xl text-cyan-600 font-semibold mb-1 sm:mb-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        {currentSlideData.subtitle}
                                    </motion.h3>
                                    <motion.p
                                        className="text-sm sm:text-base text-slate-600 mb-2 sm:mb-6 leading-relaxed"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        {currentSlideData.description}
                                    </motion.p>

                                    {currentSlideData.stats && (
                                        <motion.div
                                            className="grid grid-cols-3 gap-2 sm:gap-4 mb-2 sm:mb-6"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            {currentSlideData.stats.map((stat, index) => (
                                                <div key={index} className="text-center">
                                                    <div className="flex justify-center mb-1 sm:mb-2 text-cyan-500">
                                                        {stat.icon}
                                                    </div>
                                                    <div className="font-bold text-sm sm:text-lg text-slate-800">{stat.value}</div>
                                                    <div className="text-xs sm:text-xs text-slate-600 leading-tight">{stat.label}</div>
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}

                                    {currentSlideData.features && (
                                        <motion.div
                                            className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 mb-2 sm:mb-6"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            {currentSlideData.features.map((feature, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="text-xs sm:text-sm text-slate-700 flex items-center py-0.5"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.6 + index * 0.1 }}
                                                >
                                                    {feature}
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    )}

                                    {currentSlideData.cta && (
                                        <motion.div
                                            className="flex flex-col sm:flex-row gap-2 sm:gap-4"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            <motion.button
                                                onClick={handleGetStarted}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-4 py-2.5 rounded-lg sm:rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all text-sm sm:text-base"
                                            >
                                                Get Started <ArrowRight size={16} className="sm:w-4 sm:h-4" />
                                            </motion.button>

                                            <motion.button
                                                onClick={handleExploreServices}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="border-2 border-yellow-400 hover:border-yellow-500 text-slate-800 px-4 py-2.5 rounded-lg sm:rounded-xl font-semibold hover:bg-yellow-50 transition-all text-sm sm:text-base bg-white"
                                            >
                                                Explore Services
                                            </motion.button>
                                        </motion.div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="order-1 lg:order-2 relative bg-gradient-to-br from-cyan-50 to-yellow-50 overflow-hidden h-48 sm:h-64 lg:h-auto min-h-[200px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentSlide}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.6 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={currentSlideData.image}
                                        alt={currentSlideData.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                                    <motion.div
                                        animate={{
                                            y: [0, -10, 0],
                                            rotate: [0, 2, 0]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-lg"
                                    >
                                        <Rocket className="w-4 h-4 sm:w-6 sm:h-6 text-cyan-500" />
                                    </motion.div>

                                    <motion.div
                                        animate={{
                                            y: [0, 10, 0],
                                            x: [0, 5, 0]
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 1
                                        }}
                                        className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-lg"
                                    >
                                        <Star className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-500" />
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="absolute flex bottom-2 sm:bottom-6 left-1/2 transform -translate-x-1/2 space-x-1.5 sm:space-x-2 z-10">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${index === currentSlide
                                    ? 'bg-cyan-500 scale-125'
                                    : 'bg-slate-300 hover:bg-slate-400'
                                    }`}
                            />
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}