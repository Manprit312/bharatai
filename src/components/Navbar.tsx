'use client'
import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { services as servicesRaw, technologies as technologiesRaw } from '@/consts/navbar'
import { Menu, X, ChevronDown, Phone, ArrowRight, Home, User, Briefcase, Code, Mail, Calendar } from 'lucide-react'
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { useScheduleCall } from '@/hooks/useScheduleCall'


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isServicesOpen, setIsServicesOpen] = useState(false)
    const [isTechnologiesOpen, setIsTechnologiesOpen] = useState(false)
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(true)
    const [isMobileTechnologiesOpen, setIsMobileTechnologiesOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { scheduleCall } = useScheduleCall()

    const services = React.useMemo(() => servicesRaw, [])
    const technologies = React.useMemo(() => technologiesRaw, [])

    const handleScheduleCall = () => {
        const tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        tomorrow.setHours(10, 0, 0, 0)

        const endTime = new Date(tomorrow)
        endTime.setHours(11, 0, 0, 0)

        scheduleCall({
            title: 'Consultation Call - BharatAI Software',
            description: 'Schedule a consultation to discuss your project requirements and explore how we can help bring your vision to life.',
            startTime: tomorrow.toISOString(),
            endTime: endTime.toISOString()
        })
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleClickOutside = useCallback((event: any) => {
        if (isMenuOpen && !event.target.closest('.mobile-sidebar')) {
            setIsMenuOpen(false)
        }
    }, [isMenuOpen])

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [handleClickOutside])

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
            setIsMobileServicesOpen(true)
            setIsMobileTechnologiesOpen(false)
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMenuOpen])

    return (
        <>
            {/* Top Yellow Navbar - Always Visible */}
            <div className="fixed top-0 w-full z-50 bg-yellow-500 text-black py-2 px-4">
                <div className="max-w-7xl mx-auto flex items-center justify-center">
                    <div className="flex items-center space-x-3">
                        <Image
                            src="/image/logo.png"
                            alt="Canada Flag"
                            width={24}
                            height={24}
                            className="w-6 h-6 object-cover rounded-full"
                        />
                        <motion.div
                            animate={{
                                rotate: [0, 10, -10, 0],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                duration: 0.5,
                                repeat: Infinity,
                                repeatDelay: 1
                            }}
                        >
                            <Phone className="w-4 h-4 text-black" />
                        </motion.div>
                        <span className="text-sm font-semibold text-black">+91 6202018140</span>
                    </div>
                </div>
            </div>

            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-8 w-full z-40 transition-all duration-300 ${isMenuOpen
                        ? 'bg-white border-b border-gray-200 shadow-lg'
                        : scrolled
                            ? 'bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-2xl'
                            : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center space-x-3"
                        >
                            <div className="relative">
                                <Image
                                    src="/image/logo.png"
                                    alt="KABULE TECH Logo"
                                    width={60}
                                    height={50}
                                    className="rounded-xl"
                                    priority
                                />
                                <div className="absolute inset-0 bg-blue-600/20 rounded-xl"></div>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-black">BharatAI Software</h1>
                                <p className="text-xs text-blue-600">Software Solutions</p>
                            </div>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            <motion.a
                                whileHover={{ y: -2 }}
                                href="/"
                                className="flex items-center space-x-2 text-black hover:text-blue-600 font-medium transition-colors duration-200"
                            >
                                <Home className="w-4 h-4" />
                                <span>Home</span>
                            </motion.a>

                            <motion.a
                                whileHover={{ y: -2 }}
                                href="/about"
                                className="flex items-center space-x-2 text-black hover:text-blue-600 font-medium transition-colors duration-200"
                            >
                                <User className="w-4 h-4" />
                                <span>About</span>
                            </motion.a>

                            {/* Services Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => setIsServicesOpen(true)}
                                onMouseLeave={() => setIsServicesOpen(false)}
                            >
                                <motion.a
                                    whileHover={{ y: -2 }}
                                    href="/service"
                                    className="flex items-center space-x-1 text-black hover:text-blue-600 font-medium transition-colors duration-200"
                                >
                                    <Briefcase className="w-4 h-4" />
                                    <span>Services</span>
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                                </motion.a>

                                <AnimatePresence>
                                    {isServicesOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl p-6"
                                        >
                                            <div className="grid grid-cols-1 gap-3">
                                                {services.map((service) => {
                                                    // Create service ID for URL fragment
                                                    const serviceId = service.name.toLowerCase()
                                                        .replace(/\s+/g, '-')
                                                        .replace(/&/g, '')
                                                        .replace(/[^a-z0-9-]/g, '');

                                                    return (
                                                        <motion.a
                                                            key={service.name}
                                                            whileHover={{ x: 4 }}
                                                            href={`/service#${serviceId}`}
                                                            className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-100/50 transition-colors duration-200"
                                                        >
                                                            <Image
                                                                src={service.icon}
                                                                alt={service.name}
                                                                width={24}
                                                                height={24}
                                                                className="w-6 h-6"
                                                            />
                                                            <div>
                                                                <div className="text-black font-medium text-sm">{service.name}</div>
                                                                <div className="text-gray-600 text-xs">{service.description}</div>
                                                            </div>
                                                        </motion.a>
                                                    );
                                                })}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Technologies Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => setIsTechnologiesOpen(true)}
                                onMouseLeave={() => setIsTechnologiesOpen(false)}
                            >
                                <motion.a
                                    whileHover={{ y: -2 }}
                                    href="/technologies"
                                    className="flex items-center space-x-1 text-black hover:text-cyan-500 font-medium transition-colors duration-200"
                                >
                                    <Code className="w-4 h-4" />
                                    <span>Technologies</span>
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isTechnologiesOpen ? 'rotate-180' : ''}`} />
                                </motion.a>

                                <AnimatePresence>
                                    {isTechnologiesOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute top-full left-0 mt-2 w-[500px] bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl p-6"
                                        >
                                            <div className="grid grid-cols-3 gap-3">
                                                {technologies.slice(0, 20).map((tech) => {
                                                    // Create tech ID for URL fragment
                                                    const techId = tech.name.toLowerCase()
                                                        .replace(/\s+/g, '-')
                                                        .replace(/\./g, '')
                                                        .replace(/[^a-z0-9-]/g, '');

                                                    return (
                                                        <motion.a
                                                            key={tech.name}
                                                            whileHover={{ scale: 1.02 }}
                                                            href={`/technologies#${techId}`}
                                                            className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-100/50 transition-colors duration-200"
                                                        >
                                                            <tech.icon className={`w-5 h-5 ${tech.color}`} />
                                                            <div>
                                                                <div className="text-black font-medium text-sm">{tech.name}</div>
                                                                <div className="text-gray-600 text-xs">{tech.description}</div>
                                                            </div>
                                                        </motion.a>
                                                    );
                                                })}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <motion.a
                                whileHover={{ y: -2 }}
                                href="/contact-us"
                                className="flex items-center space-x-2 text-black hover:text-blue-600 font-medium transition-colors duration-200"
                            >
                                <Mail className="w-4 h-4" />
                                <span>Contact</span>
                            </motion.a>
                        </div>

                        {/* Right Side - Schedule Call Button & Mobile Menu */}
                        <div className="flex items-center space-x-4">
                            {/* Schedule Call Button */}
                            <InteractiveHoverButton
                                onClick={handleScheduleCall}
                                className="hidden lg:flex bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 text-white px-4 py-2 rounded-lg font-semibold shadow-sm transition-all duration-150 text-base items-center gap-0.5"
                            >
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    Schedule a Call
                                </span>
                            </InteractiveHoverButton>

                            {/* Mobile Menu Button */}
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="lg:hidden p-2 text-black hover:text-cyan-500 transition-colors duration-200"
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/20 z-30 lg:hidden"
                            onClick={() => setIsMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="mobile-sidebar fixed top-24 right-0 h-[calc(100vh-6rem)] w-full bg-white border-l border-gray-300 z-40 lg:hidden overflow-y-auto"
                        >
                            <div className="p-6 pb-20 flex flex-col h-full">

                                <nav className="space-y-4 flex-1">

                                    <a href="/" className="flex items-center space-x-3 text-black hover:text-cyan-500 font-medium py-2 transition-colors duration-200">
                                        <Home className="w-5 h-5" />
                                        <span>Home</span>
                                    </a>
                                    {/* Mobile Services Dropdown */}
                                    <div className="space-y-2">
                                        <button
                                            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                            className="flex items-center justify-between w-full text-black hover:text-cyan-500 font-medium py-2 transition-colors duration-200"
                                        >
                                            <div className="flex items-center space-x-3">
                                                <Briefcase className="w-5 h-5" />
                                                <span>Services</span>
                                            </div>
                                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                                        </button>
                                        <AnimatePresence>
                                            {isMobileServicesOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="pl-4 space-y-2 overflow-hidden"
                                                >
                                                    {services.map((service) => {
                                                        const serviceId = service.name.toLowerCase()
                                                            .replace(/\s+/g, '-')
                                                            .replace(/&/g, '')
                                                            .replace(/[^a-z0-9-]/g, '');

                                                        return (
                                                            <a
                                                                key={service.name}
                                                                href={`/service#${serviceId}`}
                                                                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100/50 transition-colors duration-200"
                                                                onClick={() => setIsMenuOpen(false)}
                                                            >
                                                                <Image
                                                                    src={service.icon}
                                                                    alt={service.name}
                                                                    width={20}
                                                                    height={20}
                                                                    className="w-5 h-5"
                                                                />
                                                                <div>
                                                                    <div className="text-black text-sm">{service.name}</div>
                                                                    <div className="text-gray-600 text-xs">{service.description}</div>
                                                                </div>
                                                            </a>
                                                        );
                                                    })}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Mobile Technologies Dropdown */}
                                    <div className="space-y-2">
                                        <button
                                            onClick={() => setIsMobileTechnologiesOpen(!isMobileTechnologiesOpen)}
                                            className="flex items-center justify-between w-full text-black hover:text-cyan-500 font-medium py-2 transition-colors duration-200"
                                        >
                                            <div className="flex items-center space-x-3">
                                                <Code className="w-5 h-5" />
                                                <span>Technologies</span>
                                            </div>
                                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileTechnologiesOpen ? 'rotate-180' : ''}`} />
                                        </button>
                                        <AnimatePresence>
                                            {isMobileTechnologiesOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="pl-4 space-y-2 overflow-hidden max-h-80 overflow-y-auto"
                                                >
                                                    {technologies.map((tech) => {
                                                        const techId = tech.name.toLowerCase()
                                                            .replace(/\s+/g, '-')
                                                            .replace(/\./g, '')
                                                            .replace(/[^a-z0-9-]/g, '');

                                                        return (
                                                            <a
                                                                key={tech.name}
                                                                href={`/technologies#${techId}`}
                                                                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100/50 transition-colors duration-200"
                                                                onClick={() => setIsMenuOpen(false)}
                                                            >
                                                                <tech.icon className={`w-4 h-4 ${tech.color}`} />
                                                                <div>
                                                                    <div className="text-black text-sm">{tech.name}</div>
                                                                    <div className="text-gray-600 text-xs">{tech.description}</div>
                                                                </div>
                                                            </a>
                                                        );
                                                    })}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>


                                    <a href="/about" className="flex items-center space-x-3 text-black hover:text-cyan-500 font-medium py-2 transition-colors duration-200">
                                        <User className="w-5 h-5" />
                                        <span>About</span>
                                    </a>

                                    <a href="/contact-us" className="flex items-center space-x-3 text-black hover:text-cyan-500 font-medium py-2 transition-colors duration-200">
                                        <Mail className="w-5 h-5" />
                                        <span>Contact</span>
                                    </a>
                                </nav>

                                {/* Schedule Call Button - Mobile (Bottom) */}
                                {/* <div className="mt-auto pt-6">
                                    <InteractiveHoverButton 
                                        onClick={handleScheduleCall}
                                        className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg"
                                    >
                                        <span className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            Schedule a Call
                                        </span>
                                    </InteractiveHoverButton>
                                </div> */}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar
