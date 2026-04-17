"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

interface BandProps {
    issmall?: boolean
}

function Band({ issmall = true }: BandProps) {
    // Compact variant used on inner pages
    if (issmall) {
        return (
            <div className="py-4 md:py-6">
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                        {[
                            "12+ Years Experience",
                            "SaaS Product Focus",
                            "Web + Mobile + Desktop",
                            "AI-Integrated Features"
                        ].map((item) => (
                            <div key={item} className="text-center text-xs md:text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl py-3 px-2">
                                {item}
                            </div>
                        ))}
                    </div>
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
                            Collaboration Highlights
                        </span>
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        >
                            <Sparkles className="w-6 h-6" />
                        </motion.div>
                    </div>
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Product Engineering{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Highlights
                        </span>
                    </h3>
                    <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Outcomes across websites, SaaS products, Chrome extensions, and Ionic apps.
                    </p>
                </motion.div>

                {/* Enhanced Stats section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-12 md:mt-20"
                >
                    {[
                        { number: "12+ Years", label: "Product Experience", color: "from-blue-500 to-blue-700" },
                        { number: "7+", label: "Major Features Shipped", color: "from-emerald-500 to-emerald-700" },
                        { number: "35%", label: "Engagement Growth", color: "from-purple-500 to-purple-700" },
                        { number: "45%", label: "Workflow Efficiency Lift", color: "from-amber-500 to-amber-700" }
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