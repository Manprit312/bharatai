import { motion } from 'framer-motion'
import { Send, Loader2, CheckCircle } from 'lucide-react'
import React, { useState } from 'react'
import { InteractiveHoverButton } from './ui/interactive-hover-button'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import axios from 'axios'

const projectOptions = [
    { value: 'web-dev', label: '💻 Web Development' },
    { value: 'mobile-app', label: '📱 Mobile App' },
    { value: 'ecommerce', label: '🛒 E-commerce' },
    { value: 'blockchain', label: '⛓️ Blockchain' },
    { value: 'ai-ml', label: '🤖 AI/ML' },
    { value: 'digital-marketing', label: '📈 Digital Marketing' },
    { value: 'support-maintenance', label: '🛠️ Support & Maintenance' },
    { value: 'custom-software', label: '🧩 Custom Software' },
    { value: 'Customer Services', label: '👩💼 Customer Services' }
]

const budgetOptions = [
    { value: 'under-100', label: 'Under $100' },
    { value: '100-500', label: '$100 - $500' },
    { value: '500-1k', label: '$500 - $1K' },
    { value: '1k-5k', label: '$1K - $5K' },
    { value: '5k-10k', label: '$5K - $10K' },
    { value: '10k-25k', label: '$10K - $25K' },
    { value: '25k-50k', label: '$25K - $50K' },
    { value: '50k+', label: '$50K+' }
]

function ContactCard() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        details: ""
    })
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        if (error) setError("")
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError("")
        setSuccess(false)

        try {
            const res = await axios.post('/api/public', {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                projectType: formData.projectType,
                budget: formData.budget,
                message: formData.details
            })

            console.log('Form submitted:', res)
            setSuccess(true)

            setTimeout(() => {
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    projectType: "",
                    budget: "",
                    details: ""
                })
                setSuccess(false)
            }, 3000)

        } catch (error) {
            console.error('Form submission error:', error)
            setError("Failed to send message. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
        >
            <div>
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">Send us a message</h2>
                <p className="text-gray-600 text-sm md:text-base">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            <div className="bg-gray-100/50 backdrop-blur-sm border border-gray-200 rounded-xl p-4 md:p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-600 text-sm font-medium mb-2">
                            Full Name *
                        </label>
                        <motion.input
                            whileFocus={{ scale: 1.01 }}
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={loading}
                            className="w-full px-3 py-2 bg-white/50 border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            placeholder="John Doe"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 text-sm font-medium mb-2">
                            Email Address *
                        </label>
                        <motion.input
                            whileFocus={{ scale: 1.01 }}
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={loading}
                            className="w-full px-3 py-2 bg-white/50 border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 text-sm font-medium mb-2">
                            Phone Number
                        </label>
                        <motion.input
                            whileFocus={{ scale: 1.01 }}
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            disabled={loading}
                            className="w-full px-3 py-2 bg-white/50 border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            placeholder="+1 (555) 123-4567"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 text-sm font-medium mb-2">
                            Project Type
                        </label>
                        <Select
                            disabled={loading}
                            onValueChange={(value) =>
                                setFormData(prev => ({ ...prev, projectType: value }))
                            }
                            value={formData.projectType}
                        >
                            <SelectTrigger className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-black focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed">
                                <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg">
                                {projectOptions.map((item) => (
                                    <SelectItem key={item.value} value={item.value} className="px-3 py-2 hover:bg-gray-50 focus:bg-gray-50">
                                        {item.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <label className="block text-gray-600 text-sm font-medium mb-2">
                            Budget Range
                        </label>
                        <Select
                            disabled={loading}
                            onValueChange={(value) =>
                                setFormData(prev => ({ ...prev, budget: value }))
                            }
                            value={formData.budget}
                        >
                            <SelectTrigger className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-black focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed">
                                <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg">
                                {budgetOptions.map((item) => (
                                    <SelectItem key={item.value} value={item.value} className="px-3 py-2 hover:bg-gray-50 focus:bg-gray-50">
                                        {item.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <label className="block text-gray-600 text-sm font-medium mb-2">
                            Project Details *
                        </label>
                        <motion.textarea
                            whileFocus={{ scale: 1.01 }}
                            name="details"
                            value={formData.details}
                            onChange={handleChange}
                            rows={4}
                            required
                            disabled={loading}
                            className="w-full px-3 py-2 bg-white/50 border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                            placeholder="Tell us about your project, goals, and requirements..."
                        />
                    </div>

                    <motion.div
                        whileHover={!loading && !success ? { scale: 1.02 } : {}}
                        whileTap={!loading && !success ? { scale: 0.98 } : {}}
                    >
                        <InteractiveHoverButton
                            type="submit"
                            disabled={loading || success}
                            className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${success
                                    ? 'bg-green-500 hover:bg-green-500'
                                    : loading
                                        ? 'bg-blue-400 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
                                } text-white disabled:opacity-80`}
                        >
                            <motion.span
                                className="flex items-center justify-center gap-2"
                                key={loading ? 'loading' : success ? 'success' : 'default'}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : success ? (
                                    <>
                                        <CheckCircle className="w-4 h-4" />
                                        Message Sent!
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-4 h-4" />
                                    </>
                                )}
                            </motion.span>
                        </InteractiveHoverButton>
                    </motion.div>
                </form>
            </div>
        </motion.div>
    )
}

export default ContactCard
