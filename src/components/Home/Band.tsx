"use client"
import React from 'react'
import { motion } from 'framer-motion'
import {
    Zap,
    Rocket,
    Globe,
    Shield,
    Cpu,
    Cloud,
    Smartphone,
    Database,
    Code,
    Layers,
    Sparkles
} from 'lucide-react'

interface BandProps {
    issmall?: boolean
}

function Band({ issmall = true }: BandProps) {
    const brands = [
        { name: "TechCorp", icon: Zap, color: "bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700", smallColor: "bg-gradient-to-br from-blue-500 to-blue-700" },
        { name: "InnovateLab", icon: Rocket, color: "bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700", smallColor: "bg-gradient-to-br from-cyan-500 to-cyan-700" },
        { name: "DigitalFlow", icon: Globe, color: "bg-gradient-to-br from-amber-500 via-orange-600 to-red-600", smallColor: "bg-gradient-to-br from-yellow-500 to-yellow-700" },
        { name: "FutureTech", icon: Shield, color: "bg-gradient-to-br from-violet-500 via-purple-600 to-fuchsia-700", smallColor: "bg-gradient-to-br from-purple-500 to-purple-700" },
        { name: "CloudWorks", icon: Cloud, color: "bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700", smallColor: "bg-gradient-to-br from-blue-500 to-blue-700" },
        { name: "DataCore", icon: Database, color: "bg-gradient-to-br from-teal-500 via-emerald-600 to-green-700", smallColor: "bg-gradient-to-br from-cyan-500 to-cyan-700" },
        { name: "CodeLab", icon: Code, color: "bg-gradient-to-br from-yellow-500 via-orange-600 to-red-600", smallColor: "bg-gradient-to-br from-yellow-500 to-yellow-700" },
        { name: "SmartTech", icon: Smartphone, color: "bg-gradient-to-br from-pink-500 via-rose-600 to-red-700", smallColor: "bg-gradient-to-br from-purple-500 to-purple-700" },
        { name: "CpuMax", icon: Cpu, color: "bg-gradient-to-br from-indigo-500 via-blue-600 to-purple-700", smallColor: "bg-gradient-to-br from-blue-500 to-blue-700" },
        { name: "LayerStack", icon: Layers, color: "bg-gradient-to-br from-cyan-500 via-teal-600 to-emerald-700", smallColor: "bg-gradient-to-br from-cyan-500 to-cyan-700" }
    ]

    const MarqueeContent = () => (
        <div className="relative">
            {/* Blur effects */}
            <div className="block absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
            <div className="block absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none"></div>

            <div className={`overflow-hidden ${issmall ? 'py-2' : 'py-6 md:py-10'}`}>
                <motion.div
                    className={`flex ${issmall ? 'space-x-3 md:space-x-6' : 'space-x-8 md:space-x-16'}`}
                    animate={{ 
                        x: [`0%`, `-50%`]
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25,
                            ease: "linear",
                        },
                    }}
                >
                    {/* First set of brands */}
                    <div className={`flex items-center ${issmall ? 'space-x-3 md:space-x-6' : 'space-x-8 md:space-x-16'} flex-shrink-0`}>
                        {brands.map((brand, index) => {
                            const IconComponent = brand.icon
                            return (
                                <motion.div
                                    key={`first-${index}`}
                                    className={`flex items-center ${issmall ? 'space-x-2 md:space-x-3' : 'space-x-4 md:space-x-6'} group cursor-pointer`}
                                    whileHover={issmall ? {} : { scale: 1.08, y: -2 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                >
                                    <div className={[
                                        issmall ? 'w-4 h-4 md:w-5 md:h-5 flex-shrink-0' : 'w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24',
                                        'flex items-center justify-center transition-all duration-500',
                                        issmall ? '' : brand.color,
                                        issmall ? '' : 'rounded-3xl shadow-xl group-hover:shadow-2xl',
                                        issmall ? '' : 'group-hover:rotate-12 group-hover:scale-110',
                                        issmall ? '' : 'border-2 border-white/30 backdrop-blur-sm',
                                        issmall ? '' : 'ring-4 ring-transparent group-hover:ring-white/20'
                                    ].filter(Boolean).join(' ')}>
                                        <IconComponent className={`${issmall ? 'w-4 h-4 md:w-5 md:h-5 text-gray-600' : 'w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white drop-shadow-lg'}`} />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <span className={[
                                            'font-bold whitespace-nowrap transition-all duration-300 leading-tight',
                                            issmall ? 'text-xs md:text-sm text-black group-hover:text-blue-600' : 'text-lg md:text-xl lg:text-2xl text-gray-800 group-hover:text-blue-700 group-hover:scale-105'
                                        ].join(' ')}>
                                            {brand.name}
                                        </span>
                                        {!issmall && (
                                            <div className="flex items-center space-x-1.5 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                                <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                                                <span className="text-sm font-medium text-gray-600 tracking-wide">Trusted Partner</span>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>

                    {/* Duplicate set for seamless loop */}
                    <div className={`flex items-center ${issmall ? 'space-x-3 md:space-x-6' : 'space-x-8 md:space-x-16'} flex-shrink-0`}>
                        {brands.map((brand, index) => {
                            const IconComponent = brand.icon
                            return (
                                <motion.div
                                    key={`second-${index}`}
                                    className={`flex items-center ${issmall ? 'space-x-2 md:space-x-3' : 'space-x-4 md:space-x-6'} group cursor-pointer`}
                                    whileHover={issmall ? {} : { scale: 1.08, y: -2 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                >
                                    <div className={[
                                        issmall ? 'w-4 h-4 md:w-5 md:h-5 flex-shrink-0' : 'w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24',
                                        'flex items-center justify-center transition-all duration-500',
                                        issmall ? '' : brand.color,
                                        issmall ? '' : 'rounded-3xl shadow-xl group-hover:shadow-2xl',
                                        issmall ? '' : 'group-hover:rotate-12 group-hover:scale-110',
                                        issmall ? '' : 'border-2 border-white/30 backdrop-blur-sm',
                                        issmall ? '' : 'ring-4 ring-transparent group-hover:ring-white/20'
                                    ].filter(Boolean).join(' ')}>
                                        <IconComponent className={`${issmall ? 'w-4 h-4 md:w-5 md:h-5 text-gray-600' : 'w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white drop-shadow-lg'}`} />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <span className={[
                                            'font-bold whitespace-nowrap transition-all duration-300 leading-tight',
                                            issmall ? 'text-xs md:text-sm text-black group-hover:text-blue-600' : 'text-lg md:text-xl lg:text-2xl text-gray-800 group-hover:text-blue-700 group-hover:scale-105'
                                        ].join(' ')}>
                                            {brand.name}
                                        </span>
                                        {!issmall && (
                                            <div className="flex items-center space-x-1.5 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                                <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                                                <span className="text-sm font-medium text-gray-600 tracking-wide">Trusted Partner</span>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    )

    // If issmall is true, return only the marquee without background
    if (issmall) {
        return (
            <div className={`${issmall ? 'py-2 md:py-4' : 'py-12 md:py-20'}`}>
                <div className={`max-w-7xl mx-auto ${issmall ? 'px-2 md:px-4' : 'px-4 md:px-6 lg:px-8'} relative z-10`}>
                    <MarqueeContent />
                </div>
            </div>
        )
    }

    // Full version with background and all sections
    return (
        <section className="py-16 md:py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 relative overflow-hidden">
            {/* Enhanced Background decorations */}
            <div className="absolute top-0 left-1/4 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/8 to-pink-600/8 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-br from-emerald-500/6 to-teal-600/6 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 right-0 w-72 h-72 bg-gradient-to-br from-amber-500/8 to-orange-600/8 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-12 md:mb-20"
                >
                    <div className="flex items-center justify-center gap-3 text-blue-600 mb-6">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        >
                            <Sparkles className="w-6 h-6" />
                        </motion.div>
                        <span className="text-base font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Our Partners
                        </span>
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        >
                            <Sparkles className="w-6 h-6" />
                        </motion.div>
                    </div>
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Trusted by{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Leading Brands
                        </span>
                    </h3>
                    <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Join hundreds of companies that trust us with their digital transformation journey and innovative solutions
                    </p>
                </motion.div>

                <MarqueeContent />

                {/* Enhanced Stats section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-12 md:mt-20"
                >
                    {[
                        { number: "500+", label: "Happy Clients", color: "from-blue-500 to-blue-700" },
                        { number: "1000+", label: "Projects Done", color: "from-emerald-500 to-emerald-700" },
                        { number: "50+", label: "Team Members", color: "from-purple-500 to-purple-700" },
                        { number: "99%", label: "Success Rate", color: "from-amber-500 to-amber-700" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center p-6 md:p-8 bg-white/80 backdrop-blur-lg rounded-3xl border-2 border-white/60 hover:border-gradient-to-r transition-all duration-500 hover:shadow-2xl relative overflow-hidden group"
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {/* Animated background gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                            
                            <div className={`text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 md:mb-3`}>
                                {stat.number}
                            </div>
                            <div className="text-sm md:text-base text-gray-700 font-semibold tracking-wide">
                                {stat.label}
                            </div>
                            
                            {/* Subtle shine effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Band