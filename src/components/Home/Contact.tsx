'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { TextAnimate } from "@/components/ui/text-animate"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react'
import ContactCard from '../ContactCard'

function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        projectType: 'Web Development',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        await new Promise(resolve => setTimeout(resolve, 1000))

        const submission = {
            id: Date.now().toString(),
            ...formData,
            timestamp: new Date().toISOString()
        }

        const existing = JSON.parse(localStorage.getItem('contactSubmissions') || '[]')
        existing.unshift(submission)
        localStorage.setItem('contactSubmissions', JSON.stringify(existing))

        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            projectType: 'Web Development',
            message: ''
        })

        setTimeout(() => setIsSubmitted(false), 3000)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const contactInfo = [
        {
            icon: Mail,
            title: "Email Us",
            value: "hello@miladosoftware.com",
            description: "Send us an email anytime",
            color: "text-blue-600"
        },
        {
            icon: Phone,
            title: "Call Us",
            value: "+1 (555) 123-4567",
            description: "Mon-Fri from 8am to 6pm",
            color: "text-purple-600"
        },
        {
            icon: MapPin,
            title: "Visit Us",
            value: "123 Tech Street, Digital City",
            description: "Our office location",
            color: "text-cyan-500"
        }
    ]

    return (
        <section className="py-24 bg-gradient-to-br from-yellow-50/30 via-white to-cyan-50/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/10 via-transparent to-transparent"></div>
            <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-2 text-blue-600 mb-6"
                    >
                        <MessageCircle className="w-5 h-5" />
                        <span className="text-sm font-medium tracking-wider uppercase">Get In Touch</span>
                        <MessageCircle className="w-5 h-5" />
                    </motion.div>

                    <TextAnimate
                        className="text-3xl md:text-5xl font-bold text-black mb-6"
                        animation="slideUp"
                        by="word"
                    >
                        Let's Build Something Amazing Together
                    </TextAnimate>

                    <TextAnimate
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                        animation="slideUp"
                        by="word"
                    >
                        Ready to start your next project? We'd love to hear from you.
                        Send us a message and we'll respond as soon as possible.
                    </TextAnimate>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <ContactCard/> 

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-600 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className={`p-3 bg-yellow-100 rounded-xl ${info.color}`}>
                                            <info.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-black font-semibold text-lg mb-1">{info.title}</h3>
                                            <p className="text-blue-600 font-medium mb-1">{info.value}</p>
                                            <p className="text-gray-600 text-sm">{info.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg"
                        >
                            <div className="flex items-center space-x-3 mb-4">
                                <Clock className="w-6 h-6 text-blue-600" />
                                <h3 className="text-black font-semibold text-lg">Business Hours</h3>
                            </div>
                            <div className="space-y-2 text-gray-600">
                                <div className="flex justify-between">
                                    <span>Monday - Friday</span>
                                    <span>8:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Saturday</span>
                                    <span>9:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sunday</span>
                                    <span>Closed</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="bg-gradient-to-r from-yellow-100 to-cyan-100 border border-yellow-300 rounded-2xl p-6"
                        >
                            <h3 className="text-black font-semibold text-lg mb-2">Quick Response Guarantee</h3>
                            <p className="text-gray-700 text-sm">
                                We respond to all inquiries within 24 hours. For urgent matters,
                                call us directly for immediate assistance.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
