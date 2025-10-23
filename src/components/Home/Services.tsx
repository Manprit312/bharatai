'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { TextAnimate } from "@/components/ui/text-animate"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { Marquee } from "@/components/ui/marquee"
import { RoughNotation } from "react-rough-notation"
import { ArrowRight, Sparkles } from 'lucide-react'
import { useContactPopup } from "@/components/ContactPopup"
import services from '@/consts/services'

function Services() {
    const { openPopup, ContactPopup } = useContactPopup()
    
    const ServiceCard = ({ service, index }: { service: any, index: number }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
                y: -8,
                transition: { duration: 0.3 }
            }}
            className="group relative w-80 sm:w-96 mx-3 sm:mx-4 flex-shrink-0"
        >
            <div className="h-full p-4 sm:p-6 bg-white border border-gray-200 rounded-2xl hover:border-blue-600 transition-all duration-500 hover:shadow-xl hover:shadow-blue-600/10 flex flex-col">
                {/* Icon */}
                <div className="relative mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-100 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-all duration-300 border border-yellow-200 group-hover:border-blue-300">
                        <img
                            src={service.icon}
                            alt={service.title}
                            className="w-8 h-8 sm:w-10 sm:h-10 filter group-hover:brightness-110 transition-all duration-300"
                        />
                    </div>
                    <div className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                    </div>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    {service.title}
                </h3>

                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {service.body}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 flex-grow">
                    {service.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-center text-xs sm:text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-500 rounded-full mr-2 sm:mr-3 group-hover:bg-purple-600 group-hover:scale-110 transition-all duration-300"></div>
                            {feature}
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-auto">
                    <InteractiveHoverButton className="w-full bg-yellow-50 border border-yellow-300 hover:border-blue-600 text-black hover:text-blue-700 py-2.5 sm:py-3 rounded-xl font-medium transition-all duration-300 text-sm hover:bg-blue-50">
                        Learn More
                    </InteractiveHoverButton>
                </div>
            </div>
        </motion.div>
    )

    return (
        <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-blue-50/30 via-white to-yellow-50/20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-yellow-50/20"></div>
            <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-96 md:h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-yellow-500/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-2 text-blue-600 mb-3 sm:mb-4 md:mb-6"
                    >
                        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="text-xs sm:text-sm font-medium tracking-wider uppercase">Our Services</span>
                        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                    </motion.div>

                    <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4 md:mb-6 flex flex-wrap justify-center items-center gap-1 sm:gap-2">
                        <TextAnimate
                            className=""
                            animation="slideUp"
                            by="word"
                        >
                            Comprehensive
                        </TextAnimate>
                        <RoughNotation
                            type="underline"
                            show={true}
                            color="#eab308"
                            animationDelay={1000}
                        >
                            <span className="text-black mx-1 sm:mx-2 md:mx-3">Digital Solutions</span>
                        </RoughNotation>
                        <TextAnimate
                            className=""
                            animation="slideUp"
                            by="word"
                        >
                            for Your Business
                        </TextAnimate>
                    </div>

                    <TextAnimate
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4"
                        animation="slideUp"
                        by="word"
                    >
                        From concept to deployment, we provide end-to-end digital solutions
                        that transform your ideas into powerful, scalable applications.
                    </TextAnimate>
                </div>

                {/* Services Cards - Moving Marquee */}
                <div className="overflow-hidden">
                    <Marquee className="py-4" pauseOnHover speed={100}>
                        {[...services, ...services].map((service, index) => (
                            <ServiceCard
                                key={`${service.title}-${index}`}
                                service={service}
                                index={index}
                            />
                        ))}
                    </Marquee>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-center mt-8 sm:mt-12 md:mt-16"
                >
                    <InteractiveHoverButton 
                        onClick={openPopup}
                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <span className="flex items-center gap-2">
                            Get Started Today
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                        </span>
                    </InteractiveHoverButton>
                </motion.div>
            </div>
            <ContactPopup />
        </section>
    )
}

export default Services
