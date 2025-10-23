'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { TextAnimate } from "@/components/ui/text-animate"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { RoughNotation } from "react-rough-notation"
import { ArrowRight, Code, Smartphone, Globe, Shield, Zap, Users, Calendar } from 'lucide-react'
import { useContactPopup } from "@/components/ContactPopup"
import { useScheduleCall } from "@/hooks/useScheduleCall"

function Solutions() {
    const { openPopup, ContactPopup } = useContactPopup()
    const { scheduleCall } = useScheduleCall()

    const handleScheduleCall = () => {
        const tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        tomorrow.setHours(10, 0, 0, 0)

        const endTime = new Date(tomorrow)
        endTime.setHours(11, 0, 0, 0)

        scheduleCall({
            title: 'Consultation Call - BharatAI Software',
            description: 'Discuss your project requirements and get a custom solution tailored to your business needs.',
            startTime: tomorrow.toISOString(),
            endTime: endTime.toISOString()
        })
    }

    const solutions = [
        {
            icon: Code,
            title: "Custom Software Development",
            description: "Tailored solutions built from scratch to meet your unique business requirements.",
            color: "text-blue-600"
        },
        {
            icon: Smartphone,
            title: "Mobile-First Approach",
            description: "Responsive designs that work seamlessly across all devices and platforms.",
            color: "text-cyan-500"
        },
        {
            icon: Globe,
            title: "Scalable Architecture",
            description: "Future-proof solutions that grow with your business and adapt to changing needs.",
            color: "text-yellow-500"
        },
        {
            icon: Shield,
            title: "Enterprise Security",
            description: "Bank-level security protocols to protect your data and user information.",
            color: "text-purple-600"
        },
        {
            icon: Zap,
            title: "Performance Optimization",
            description: "Lightning-fast applications optimized for speed and user experience.",
            color: "text-yellow-500"
        },
        {
            icon: Users,
            title: "24/7 Support",
            description: "Round-the-clock technical support and maintenance for peace of mind.",
            color: "text-blue-600"
        }
    ]

    return (
        <section className="py-24 bg-gradient-to-tr from-cyan-50/40 via-white to-yellow-50/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-100/10 via-transparent to-transparent"></div>
            <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-2 text-blue-600 mb-6"
                    >
                        <div className="w-8 h-px bg-blue-600"></div>
                        <span className="text-sm font-medium tracking-wider uppercase">Our Solutions</span>
                        <div className="w-8 h-px bg-blue-600"></div>
                    </motion.div>

                    <div className="text-3xl md:text-5xl font-bold text-black mb-6 flex flex-wrap justify-center items-center gap-2">
                        <TextAnimate
                            animation="slideUp"
                            by="word"
                        >
                            Complete
                        </TextAnimate>
                        <RoughNotation
                            type="underline"
                            show={true}
                            color="#7c3aed"
                            strokeWidth={3}
                            animationDelay={1000}
                        >
                            <span className="text-cyan-500 mx-3">End-to-End</span>
                        </RoughNotation>
                        <TextAnimate
                            animation="slideUp"
                            by="word"
                        >
                            Solutions
                        </TextAnimate>
                    </div>

                    <TextAnimate
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                        animation="slideUp"
                        by="word"
                    >
                        From initial concept to final deployment and beyond, we provide comprehensive
                        solutions that cover every aspect of your digital transformation journey.
                    </TextAnimate>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={solution.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                            className="group relative"
                        >
                            <div className="h-full p-8 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-2xl hover:border-blue-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/10">
                                <div className="mb-6">
                                    <div className={`w-16 h-16 bg-gray-100/50 rounded-xl flex items-center justify-center group-hover:bg-blue-600/20 transition-colors duration-300`}>
                                        <solution.icon className={`w-8 h-8 ${solution.color}`} />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                    {solution.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    {solution.description}
                                </p>

                                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ArrowRight className="w-5 h-5 text-cyan-500" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white/30 rounded-2xl p-8 md:p-12 border border-gray-300"
                >
                    {/* Mobile Layout (default) */}
                    <div className="block lg:hidden">
                        <div className="text-center">
                            <div className="flex justify-center mb-6">
                                <motion.img
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.7 }}
                                    src="/image/trans.png"
                                    alt="Transform Illustration"
                                    className="w-32 h-auto object-contain drop-shadow-md rounded-2xl"
                                    loading="lazy"
                                />
                            </div>
                            
                            <TextAnimate
                                className="text-2xl md:text-3xl font-bold text-black mb-4"
                                animation="slideUp"
                                by="word"
                            >
                                Ready to Transform Your Business?
                            </TextAnimate>

                            <p className="text-gray-600 text-base md:text-lg mb-8">
                                Let's discuss how our solutions can help you achieve your goals and drive growth.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <InteractiveHoverButton
                                    onClick={openPopup}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold"
                                >
                                    <span className="flex items-center gap-2">
                                        Get Started Now
                                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                                    </span>
                                </InteractiveHoverButton>

                                <InteractiveHoverButton
                                    onClick={handleScheduleCall}
                                    className="border-2 border-purple-600 hover:border-yellow-500 text-black px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold bg-transparent"
                                >
                                    <span className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                                        Schedule Consultation
                                    </span>
                                </InteractiveHoverButton>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Layout (lg and above) */}
                    <div className="hidden lg:block">
                        <div className="grid grid-cols-12 gap-8 items-center">
                            {/* Content Column */}
                            <div className="col-span-8">
                                <TextAnimate
                                    className="text-3xl xl:text-4xl font-bold text-black mb-4"
                                    animation="slideUp"
                                    by="word"
                                >
                                    Ready to Transform Your Business?
                                </TextAnimate>

                                <p className="text-gray-600 text-lg xl:text-xl mb-8 max-w-2xl">
                                    Let's discuss how our solutions can help you achieve your goals and drive growth.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <InteractiveHoverButton
                                        onClick={openPopup}
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold"
                                    >
                                        <span className="flex items-center gap-2">
                                            Get Started Now
                                            <ArrowRight className="w-5 h-5" />
                                        </span>
                                    </InteractiveHoverButton>

                                    <InteractiveHoverButton
                                        onClick={handleScheduleCall}
                                        className="border-2 border-purple-600 hover:border-yellow-500 text-black px-8 py-4 rounded-xl font-semibold bg-transparent"
                                    >
                                        <span className="flex items-center gap-2">
                                            <Calendar className="w-5 h-5" />
                                            Schedule Consultation
                                        </span>
                                    </InteractiveHoverButton>
                                </div>
                            </div>

                            {/* Image Column */}
                            <div className="col-span-4 flex justify-center">
                                <motion.img
                                    initial={{ opacity: 0, scale: 0.8, x: 30 }}
                                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                    transition={{ delay: 0.7, duration: 0.6 }}
                                    whileHover={{ 
                                        scale: 1.05,
                                        rotate: 2,
                                        transition: { duration: 0.3 }
                                    }}
                                    src="/image/trans.png"
                                    alt="Transform Illustration"
                                    className="w-40 xl:w-48 h-auto object-contain drop-shadow-md rounded-2xl"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
                <ContactPopup />
            </div>
        </section>
    )
}

export default Solutions