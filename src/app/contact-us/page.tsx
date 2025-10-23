'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/Navbar'
import { TextAnimate } from "@/components/ui/text-animate"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { RoughNotation } from "react-rough-notation"
import { Mail, Phone, MapPin, MessageCircle, Clock, Zap, ArrowRight, Calendar, Plus, Minus, Send, User, Building } from 'lucide-react'
import ContactCard from '@/components/ContactCard'
import faqs from '@/consts/faqs'
import { useScheduleCall } from '@/hooks/useScheduleCall'

function ContactPage() {
    const { scheduleCall } = useScheduleCall()
    const [openFAQ, setOpenFAQ] = useState<string | null>(null)

    const toggleFAQ = (id: string) => {
        setOpenFAQ(openFAQ === id ? null : id)
    }
    
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

    const contactMethods = [
        {
            icon: Mail,
            title: "Email Us",
            value: "hello@miladosoftware.com",
            description: "Send us an email anytime",
            color: "text-blue-600",
            bgColor: "bg-blue-500/20"
        },
        {
            icon: Phone,
            title: "Call Us",
            value: "+1 (555) 123-4567",
            description: "Mon-Fri from 8am to 6pm",
            color: "text-cyan-600",
            bgColor: "bg-cyan-500/20"
        },
        {
            icon: MapPin,
            title: "Visit Us",
            value: "123 Tech Street, Digital City, DC 12345",
            description: "Our main office location",
            color: "text-yellow-600",
            bgColor: "bg-yellow-500/20"
        }
    ]

    const offices = [
        {
            city: "New York",
            address: "123 Tech Street, NY 10001",
            phone: "+1 (555) 123-4567",
            image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&w=400&q=80"
        },
        {
            city: "London",
            address: "456 Innovation Ave, London SW1A 1AA",
            phone: "+44 20 7946 0958",
            image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&w=400&q=80"
        },
        {
            city: "Tokyo",
            address: "789 Future Blvd, Tokyo 100-0001",
            phone: "+81 3-1234-5678",
            image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&w=400&q=80"
        }
    ]

    const services = [
        { name: "Web Development", icon: "🌐" },
        { name: "Mobile Apps", icon: "📱" },
        { name: "Cloud Solutions", icon: "☁️" },
        { name: "AI Integration", icon: "🤖" }
    ]

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-cyan-50/20"></div>
                <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-8 md:mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center justify-center gap-2 text-blue-600 mb-4 md:mb-6"
                        >
                            <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                            <span className="text-xs md:text-sm font-medium tracking-wider uppercase">Get In Touch</span>
                            <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                        </motion.div>

                        <div className="text-2xl md:text-3xl lg:text-5xl font-bold text-black mb-4 md:mb-6">
                            <span className="inline-block">
                                <TextAnimate animation="slideUp" by="word">
                                    Let's Build Something
                                </TextAnimate>
                                {" "}
                                <span className="underline decoration-blue-600 text-yellow-500">Amazing</span>
                                {" "}
                                <TextAnimate animation="slideUp" by="word">
                                    Together
                                </TextAnimate>
                            </span>
                        </div>

                        <TextAnimate
                            className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4"
                            animation="slideUp"
                            by="word"
                        >
                            Ready to transform your ideas into reality? We're here to help you every step of the way.
                            Get in touch and let's start building your next great project.
                        </TextAnimate>
                    </div>

                    {/* Contact Methods */}
                    <div className="md:grid md:grid-cols-3 md:gap-8 mb-8 md:mb-16">
                        {contactMethods.map((method, index) => (
                            <motion.div
                                key={method.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="
                                    flex items-center p-3 mb-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg
                                    md:flex-col md:text-center md:p-8 md:mb-0 md:bg-white/90 md:rounded-2xl
                                "
                            >
                                <div className={`
                                    w-10 h-10 ${method.bgColor} rounded-lg flex items-center justify-center flex-shrink-0
                                    md:w-16 md:h-16 md:rounded-xl md:mx-auto md:mb-3
                                `}>
                                    <method.icon className={`w-5 h-5 ${method.color} md:w-8 md:h-8`} />
                                </div>
                                <div className="flex-1 md:flex-none ml-3 md:ml-0">
                                    <h3 className="text-base font-bold text-black mb-1 md:text-xl md:mb-2">{method.title}</h3>
                                    <p className="text-blue-600 font-medium text-sm mb-0.5 md:text-base md:mb-2">{method.value}</p>
                                    <p className="text-gray-600 text-xs md:text-sm">{method.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Info Section */}
            <section className="py-12 md:py-24 bg-gradient-to-br from-cyan-50/30 via-blue-50/20 to-white relative">
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
                        {/* Contact Form */}
                        <ContactCard/>

                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="space-y-4 md:space-y-8"
                        >
                            {/* Business Hours */}
                            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-4 md:p-8 shadow-sm">
                                <div className="flex items-center space-x-3 mb-4 md:mb-6">
                                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                                    <h3 className="text-lg md:text-xl font-bold text-black">Business Hours</h3>
                                </div>
                                <div className="space-y-2 md:space-y-3 text-gray-600 text-sm md:text-base">
                                    <div className="flex justify-between">
                                        <span>Monday - Friday</span>
                                        <span className="text-blue-600 font-medium">8:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Saturday</span>
                                        <span className="text-blue-600 font-medium">9:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday</span>
                                        <span className="text-gray-500">Closed</span>
                                    </div>
                                    <div className="pt-3 md:pt-4 border-t border-gray-200">
                                        <p className="text-xs md:text-sm text-gray-600">
                                            Emergency support available 24/7 for existing clients
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Response Time */}
                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-4 md:p-8">
                                <div className="flex items-center space-x-3 mb-3 md:mb-4">
                                    <Zap className="w-5 h-5 md:w-6 md:h-6 text-yellow-600" />
                                    <h3 className="text-lg md:text-xl font-bold text-black">Quick Response</h3>
                                </div>
                                <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
                                    We respond to all inquiries within 24 hours. For urgent matters,
                                    call us directly for immediate assistance.
                                </p>
                                <div className="flex items-center space-x-2 text-blue-600">
                                    <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                                    <span className="text-xs md:text-sm font-medium">Usually responds within 2-4 hours</span>
                                </div>
                            </div>

                            {/* Services Quick Links */}
                            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-4 md:p-8 shadow-sm">
                                <h3 className="text-lg md:text-xl font-bold text-black mb-4 md:mb-6">Our Services</h3>
                                <div className="grid grid-cols-2 gap-3 md:gap-4">
                                    {services.map((service, index) => (
                                        <motion.div
                                            key={service.name}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-center space-x-2 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg hover:from-blue-100 hover:to-cyan-100 transition-all duration-300 cursor-pointer"
                                        >
                                            <span className="text-lg">{service.icon}</span>
                                            <span className="text-sm md:text-base text-black font-medium">{service.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQ */}
                            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-4 md:p-8 shadow-sm">
                                <h3 className="text-lg md:text-xl font-bold text-black mb-4 md:mb-6">Frequently Asked Questions</h3>
                                <div className="space-y-3 md:space-y-4">
                                    {faqs.slice(0, 3).map((faq, index) => (
                                        <motion.div
                                            key={faq.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                                        >
                                            <button
                                                onClick={() => toggleFAQ(faq.id)}
                                                className="w-full px-4 md:px-6 py-4 md:py-6 text-left flex items-center justify-between hover:bg-blue-50/50 rounded-xl transition-colors duration-200"
                                            >
                                                <h4 className="text-sm md:text-lg font-semibold text-black pr-4">
                                                    {faq.question}
                                                </h4>
                                                <div className={`flex-shrink-0 p-1 rounded-full transition-all duration-300 ${openFAQ === faq.id
                                                    ? 'bg-blue-100 text-blue-600 rotate-180'
                                                    : 'bg-yellow-100 text-yellow-600'
                                                    }`}>
                                                    {openFAQ === faq.id ? (
                                                        <Minus className="w-4 h-4 md:w-5 md:h-5" />
                                                    ) : (
                                                        <Plus className="w-4 h-4 md:w-5 md:h-5" />
                                                    )}
                                                </div>
                                            </button>

                                            <AnimatePresence>
                                                {openFAQ === faq.id && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="px-4 md:px-6 pb-4 md:pb-6">
                                                            <div className="pt-2 border-t border-gray-100">
                                                                <p className="text-gray-600 leading-relaxed mt-3 md:mt-4 text-xs md:text-sm">
                                                                    {faq.answer}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Office Locations */}
            <section className="py-12 md:py-24 bg-gradient-to-br from-purple-50/30 via-blue-50/20 to-white relative">
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-8 md:mb-16">
                        <div className="text-2xl md:text-3xl lg:text-5xl font-bold text-black mb-4 md:mb-6">
                            <span className="inline-block">
                                Our{" "}
                                <RoughNotation
                                    type="underline"
                                    show={true}
                                    color="#7c3aed"
                                    animationDelay={500}
                                >
                                    <span className="text-blue-600">Global</span>
                                </RoughNotation>
                                {" "}Presence
                            </span>
                        </div>
                        <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                            With offices around the world, we're always close to our clients.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                        {offices.map((office, index) => (
                            <motion.div
                                key={office.city}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl"
                            >
                                <div className="relative h-32 md:h-48">
                                    <img
                                        src={office.image}
                                        alt={office.city}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                    <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4">
                                        <h3 className="text-lg md:text-2xl font-bold text-white drop-shadow-lg">{office.city}</h3>
                                    </div>
                                </div>
                                <div className="p-4 md:p-6">
                                    <div className="space-y-2 md:space-y-3">
                                        <div className="flex items-start space-x-3">
                                            <MapPin className="w-4 h-4 md:w-5 md:h-5 text-blue-600 mt-0.5" />
                                            <p className="text-gray-600 text-sm md:text-base">{office.address}</p>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <Phone className="w-4 h-4 md:w-5 md:h-5 text-cyan-600" />
                                            <p className="text-gray-600 text-sm md:text-base">{office.phone}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 md:py-24 bg-gradient-to-br from-yellow-50/30 via-blue-50/20 to-white relative">
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 md:p-12 border border-blue-200 shadow-lg"
                    >
                        <TextAnimate
                            className="text-2xl md:text-3xl font-bold text-black mb-4 md:mb-6"
                            animation="slideUp"
                            by="word"
                        >
                            Ready to Start Your Project?
                        </TextAnimate>

                        <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
                            Don't wait any longer. Let's discuss your project and create something amazing together.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                            <InteractiveHoverButton 
                                onClick={handleScheduleCall}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-sm md:text-base transition-all duration-300"
                            >
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                                    Schedule a Call
                                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                                </span>
                            </InteractiveHoverButton>

                            <InteractiveHoverButton className="border-2 border-blue-600 hover:border-yellow-500 hover:bg-yellow-50 text-blue-600 hover:text-yellow-600 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold bg-transparent text-sm md:text-base transition-all duration-300">
                                View Our Work
                            </InteractiveHoverButton>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default ContactPage
