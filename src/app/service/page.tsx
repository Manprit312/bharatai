'use client'
import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import { TextAnimate } from "@/components/ui/text-animate"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { ServicePopup } from '@/components/ServicePopup'
import { ContactPopup } from '@/components/ContactPopup'
import { ArrowRight, CheckCircle, Star, Calendar } from 'lucide-react'
import { useScheduleCall } from '@/hooks/useScheduleCall'
import services from './data'

function ServicePage() {
    const [activeSection, setActiveSection] = useState('mobile-app-development')
    const [servicePopup, setServicePopup] = useState({ isOpen: false, projectType: '' })
    const [contactPopup, setContactPopup] = useState(false)
    const { scheduleCall } = useScheduleCall()

    const handleScheduleCall = () => {
        const tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        tomorrow.setHours(10, 0, 0, 0)
        
        const endTime = new Date(tomorrow)
        endTime.setHours(11, 0, 0, 0)
        
        scheduleCall({
            title: 'Service Consultation - BharatAI Software',
            description: 'Discuss which services are right for your project and get a custom solution.',
            startTime: tomorrow.toISOString(),
            endTime: endTime.toISOString()
        })
    }

    const memoizedServices = useMemo(() => services, [])

    const handleScroll = useCallback(() => {
        const sections = memoizedServices.map(service => document.getElementById(service.id))
        const scrollPosition = window.scrollY + 200
        for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i]
            if (section && section.offsetTop <= scrollPosition) {
                setActiveSection(memoizedServices[i].id)
                break
            }
        }
    }, [memoizedServices])

    useEffect(() => {
        let ticking = false
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll()
                    ticking = false
                })
                ticking = true
            }
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [handleScroll])

    const scrollToSection = useCallback((sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            const navbar = document.querySelector('nav')
            const navbarHeight = navbar ? navbar.offsetHeight : 80
            const elementPosition = element.offsetTop - navbarHeight - 20
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            })
        }
    }, [])

    const openServicePopup = useCallback((projectType: string) => {
        setServicePopup({ isOpen: true, projectType })
    }, [])

    const closeServicePopup = useCallback(() => {
        setServicePopup({ isOpen: false, projectType: '' })
    }, [])

    return (
    <div className="min-h-screen bg-white overflow-x-hidden">
            <Navbar />

            <div className="fixed left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
                <div className="bg-white/90 backdrop-blur-sm border border-blue-200 rounded-2xl p-3 lg:p-4 shadow-2xl max-w-xs">
                    <h3 className="text-black font-bold mb-3 lg:mb-4 text-center text-xs lg:text-sm">Services</h3>
                    <div className="space-y-1">
                        {memoizedServices.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => scrollToSection(service.id)}
                                className={`flex items-center space-x-2 lg:space-x-3 w-full p-2 lg:p-2.5 rounded-lg transition-all duration-200 text-left group ${activeSection === service.id
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'text-gray-600 hover:text-black hover:bg-blue-50'
                                    }`}
                            >
                                <service.icon className="w-3 h-3 lg:w-4 lg:h-4 flex-shrink-0" />
                                <span className="text-xs font-medium truncate">{service.title}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="ml-0 lg:ml-64 xl:ml-80 px-0 sm:px-0">
                <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-yellow-50/20"></div>
                    <div className="absolute top-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="text-center mb-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center justify-center mt-4 sm:mt-0 gap-2 text-blue-600 mb-4 sm:mb-6"
                            >
                                <Star className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span className="text-xs sm:text-sm font-medium tracking-wider uppercase">Our Services</span>
                                <Star className="w-4 h-4 sm:w-5 sm:h-5" />
                            </motion.div>

                            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
                                <span className="inline-block">
                                    <TextAnimate animation="slideUp" by="word">
                                        Comprehensive
                                    </TextAnimate>
                                    {" "}
                                    <span className="text-cyan-500 underline decoration-yellow-500">Digital Solutions</span>
                                </span>
                            </div>

                            <TextAnimate
                                className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4"
                                animation="slideUp"
                                by="word"
                            >
                                From mobile apps to AI solutions, we provide end-to-end digital services
                                that transform your business and drive growth in the digital age.
                            </TextAnimate>
                        </div>
                    </div>
                </section>

                {memoizedServices.map((service, index) => (
                    <section
                        key={service.id}
                        id={service.id}
                        className={`py-8 sm:py-10 md:py-12 relative ${index % 2 === 0 ? 'bg-white' : 'bg-cyan-50/30'}`}
                    >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className={`space-y-6 sm:space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                                >
                                    <div className="space-y-4 sm:space-y-6">
                                        <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                                            <div className="p-3 sm:p-4 bg-blue-50 rounded-xl border border-blue-200 w-fit">
                                                <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                                            </div>
                                            <div>
                                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">{service.title}</h2>
                                                <p className="text-cyan-500 text-sm sm:text-base">{service.shortDesc}</p>
                                            </div>
                                        </div>

                                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                                            {service.description}
                                        </p>

                                        <div className="space-y-3">
                                            <h3 className="text-base sm:text-lg font-semibold text-black">Key Features:</h3>
                                            <div className="grid grid-cols-1 gap-2">
                                                {service.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center space-x-2">
                                                        <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                                                        <span className="text-gray-600 text-sm sm:text-base">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <h3 className="text-base sm:text-lg font-semibold text-black">Technologies:</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {service.technologies.map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-2 sm:px-3 py-1 bg-white border border-blue-200 text-gray-600 rounded-full text-xs sm:text-sm"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 sm:p-6 bg-white/80 rounded-xl border border-blue-200">
                                            <div>
                                                <h4 className="text-xs sm:text-sm font-medium text-gray-600 mb-1">Starting Price</h4>
                                                <p className="text-base sm:text-lg font-bold text-blue-600">{service.pricing}</p>
                                            </div>
                                            <div>
                                                <h4 className="text-xs sm:text-sm font-medium text-gray-600 mb-1">Timeline</h4>
                                                <p className="text-base sm:text-lg font-bold text-cyan-500">{service.timeline}</p>
                                            </div>
                                        </div>

                                        <InteractiveHoverButton 
                                            onClick={() => openServicePopup(service.title)}
                                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold w-full sm:w-auto"
                                        >
                                            <span className="flex items-center justify-center gap-2">
                                                Get Started
                                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </span>
                                        </InteractiveHoverButton>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                                >
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="rounded-2xl shadow-2xl border border-blue-200 w-full h-auto"
                                        />
                                        <div className="absolute inset-0 bg-yellow-500/5 rounded-2xl"></div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                ))}

                <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-50/40 via-white to-yellow-50/30 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white/80 rounded-2xl p-8 sm:p-10 md:p-12 border border-blue-200 shadow-xl"
                        >
                            <TextAnimate
                                className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6"
                                animation="slideUp"
                                by="word"
                            >
                                Ready to Transform Your Business?
                            </TextAnimate>

                            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                                Let's discuss which services are right for your project and create a custom solution.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <InteractiveHoverButton 
                                    onClick={() => setContactPopup(true)}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold w-full sm:w-auto"
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        Start Your Project
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </span>
                                </InteractiveHoverButton>

                                <InteractiveHoverButton 
                                    onClick={handleScheduleCall}
                                    className="border-2 border-purple-600 hover:border-yellow-500 hover:bg-yellow-50 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold bg-transparent w-full sm:w-auto"
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                                        Schedule Consultation
                                    </span>
                                </InteractiveHoverButton>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>

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

export default ServicePage
