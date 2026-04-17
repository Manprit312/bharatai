'use client'
import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, User, Bot, Smartphone, Globe, Code, Palette, ShoppingCart, Brain, Zap, Shield, Users, ArrowRight } from 'lucide-react'

const quickReplies = [
    { text: "Services", action: "services" },
    { text: "Pricing", action: "pricing" },
    { text: "Timeline", action: "timeline" },
    { text: "Contact", action: "contact" }
]

const faqs = [
    { 
        question: "How long does development take?",
        answer: "Development timeline varies based on project complexity:\n\n• Simple websites: 2-4 weeks\n• Web applications: 6-12 weeks\n• Mobile apps: 8-16 weeks\n• Enterprise solutions: 3-6 months\n\nWe provide detailed timelines after analyzing your requirements. Most projects are delivered 20% faster than industry average!" 
    },
    { 
        question: "What are your pricing options?",
        answer: "Pricing is tailored to scope and timeline:\n\n• Starter Projects: ₹65,000 - ₹1,65,000\n• Growth Projects: ₹1,65,000 - ₹5,00,000\n• Advanced Products: ₹5,00,000+\n\nAvailable models:\n✓ Fixed-price projects\n✓ Hourly consulting (₹2,000-₹5,000/hr)\n✓ Monthly retainers\n✓ Free initial consultation\n\nLet's discuss your project for an accurate quote!" 
    },
    { 
        question: "Do you provide ongoing support?",
        answer: "Yes! Comprehensive support is available:\n\n• 30 days free post-launch support\n• Monthly maintenance packages\n• Priority issue handling\n• Regular updates and security patches\n• Performance monitoring\n\nSupport packages start from ₹10,000/month." 
    },
    { 
        question: "What technologies do you use?",
        answer: "I use technologies from real shipped projects:\n\n**Frontend:**\n• React, Next.js\n• TypeScript, JavaScript\n• Tailwind CSS, Framer Motion\n\n**Backend & Data:**\n• Node.js, Express.js\n• MongoDB, Firebase\n\n**Mobile/Desktop:**\n• Ionic, React Native, Flutter\n• Electron.js\n\n**Deployment & Integrations:**\n• Vercel, GitHub Actions, Cloudinary\n• Stripe, PayPal, OpenAI API\n\nI choose from this stack based on project goals." 
    }
]

const services = [
    { name: "Mobile App Development", description: "iOS & Android apps" },
    { name: "Web Application Development", description: "Custom web solutions" },
    { name: "Custom Software Development", description: "Tailored software solutions" },
    { name: "UI/UX Design", description: "Beautiful, user-friendly designs" },
    { name: "E-commerce Development", description: "Online stores & marketplaces" },
    { name: "AI & Machine Learning", description: "Intelligent solutions" },
    { name: "API Development", description: "Robust backend services" },
    { name: "Cybersecurity Solutions", description: "Secure your digital assets" }
]

interface Message {
    id: number
    text: string
    sender: 'user' | 'bot'
    timestamp: string
    type?: 'text' | 'services' | 'form' | 'quickReplies' | 'typing'
    data?: any
}

interface UserData {
    name: string
    email: string
    phone: string
    service: string
    message: string
}

function Chat() {
    const [isOpen, setIsOpen] = useState(false)
    const [currentStep, setCurrentStep] = useState('initial')
    const [isTyping, setIsTyping] = useState(false)
    const [userData, setUserData] = useState<UserData>({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    })
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Hello! 👋 I'm your portfolio assistant for Manprit Dev. I can help with projects, tech stack, and collaboration details.",
            sender: 'bot',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            type: 'quickReplies'
        }
    ])
    const [inputMessage, setInputMessage] = useState('')
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const serviceIcons = [Smartphone, Globe, Code, Palette, ShoppingCart, Brain, Zap, Shield]

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    const addMessage = (text: string, sender: 'user' | 'bot', type: 'text' | 'services' | 'form' | 'quickReplies' | 'typing' = 'text', data?: any) => {
        const newMessage: Message = {
            id: Date.now(),
            text,
            sender,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            type,
            data
        }
        setMessages(prev => [...prev, newMessage])
    }

    const simulateTyping = (callback: () => void, delay = 1500) => {
        setIsTyping(true)
        setTimeout(() => {
            setIsTyping(false)
            callback()
        }, delay)
    }

    const formatMessage = (text: string) => {
        // Split by double newlines for paragraphs
        const paragraphs = text.split('\n\n')
        
        return paragraphs.map((paragraph, index) => {
            // Check if paragraph contains bullet points
            if (paragraph.includes('•') || paragraph.includes('✓')) {
                const lines = paragraph.split('\n')
                return (
                    <div key={index} className={index > 0 ? 'mt-3' : ''}>
                        {lines.map((line, lineIndex) => {
                            if (line.trim().startsWith('•') || line.trim().startsWith('✓')) {
                                return (
                                    <div key={lineIndex} className="flex items-start space-x-2 mb-1">
                                        <span className="text-blue-600 mt-0.5 flex-shrink-0">
                                            {line.trim().startsWith('•') ? '•' : '✓'}
                                        </span>
                                        <span>{line.replace(/^[•✓]\s*/, '')}</span>
                                    </div>
                                )
                            } else if (line.trim()) {
                                return (
                                    <div key={lineIndex} className={line.includes('**') ? 'font-semibold mb-1' : 'mb-1'}>
                                        {line.replace(/\*\*(.*?)\*\*/g, '$1')}
                                    </div>
                                )
                            }
                            return null
                        })}
                    </div>
                )
            } else {
                // Regular paragraph
                return (
                    <div key={index} className={index > 0 ? 'mt-3' : ''}>
                        {paragraph.replace(/\*\*(.*?)\*\*/g, '$1')}
                    </div>
                )
            }
        })
    }

    const handleQuickReply = (action: string) => {
        switch (action) {
            case 'services':
                addMessage("I'd like to see your services", 'user')
                simulateTyping(() => {
                    addMessage("Here are the main services. Click any service to learn more:", 'bot', 'services')
                })
                break
            case 'pricing':
                addMessage("What are your pricing options?", 'user')
                simulateTyping(() => {
                    addMessage(faqs[1].answer, 'bot', 'quickReplies')
                })
                break
            case 'timeline':
                addMessage("How long does development take?", 'user')
                simulateTyping(() => {
                    addMessage(faqs[0].answer, 'bot', 'quickReplies')
                })
                break
            case 'contact':
                addMessage("How can I contact you?", 'user')
                simulateTyping(() => {
                    addMessage("Here's how you can reach me:\n\n📧 Email: mnprt312@gmail.com\n📞 Phone: +91 82648 74761\n🌐 Website: manprit.dev\n📍 Location: Mohali, Punjab, India\n\n💬 Availability:\nMon-Sat (IST)\n\nI usually respond within one business day.", 'bot', 'quickReplies')
                })
                break
        }
    }

    const handleServiceSelect = (service: string) => {
        setUserData(prev => ({ ...prev, service }))
        addMessage(`I'm interested in ${service}`, 'user')
        
        simulateTyping(() => {
                    addMessage(`Excellent choice! ${service} is a strong fit for my portfolio work. Let me collect a few details so I can respond with a tailored approach.`, 'bot')
            setTimeout(() => {
                addMessage('Please fill out this quick form (takes less than 2 minutes):', 'bot', 'form')
                setCurrentStep('form')
            }, 1000)
        })
    }

    const handleFormSubmit = async () => {
        if (!userData.name || !userData.email) {
            addMessage('Please fill in at least your name and email to continue.', 'bot')
            return
        }

        try {
            await new Promise(resolve => setTimeout(resolve, 1000))
            
            addMessage('🎉 Perfect! Your details were submitted successfully. I will get back to you soon with relevant next steps.', 'bot')
            setCurrentStep('completed')
        } catch (error) {
            addMessage('Sorry, there was a connection error. Please try again or contact me directly at mnprt312@gmail.com', 'bot')
        }
    }

    const handleSendMessage = () => {
        if (inputMessage.trim()) {
            addMessage(inputMessage, 'user')
            const message = inputMessage.toLowerCase()
            setInputMessage('')

            simulateTyping(() => {
                if (message.includes('service') || message.includes('what do you do') || message.includes('offer')) {
                    addMessage('Here are the main services offered for product development:', 'bot', 'services')
                } else if (message.includes('price') || message.includes('cost') || message.includes('budget')) {
                    addMessage(faqs[1].answer, 'bot', 'quickReplies')
                } else if (message.includes('time') || message.includes('long') || message.includes('duration')) {
                    addMessage(faqs[0].answer, 'bot', 'quickReplies')
                } else if (message.includes('support') || message.includes('maintenance')) {
                    addMessage(faqs[2].answer, 'bot', 'quickReplies')
                } else if (message.includes('technology') || message.includes('tech') || message.includes('stack')) {
                    addMessage(faqs[3].answer, 'bot', 'quickReplies')
                } else if (message.includes('contact') || message.includes('call') || message.includes('email')) {
                    addMessage("Here's how you can reach me:\n\n📧 Email: mnprt312@gmail.com\n📞 Phone: +91 82648 74761\n🌐 Website: manprit.dev\n📍 Location: Mohali, Punjab, India\n\n💬 Availability:\nMon-Sat (IST)\n\nI usually respond within one business day.", 'bot', 'quickReplies')
                } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
                    addMessage("Hello! Great to meet you! 👋 I'm here to help you find the perfect solution for your project. What can I help you with today?", 'bot', 'quickReplies')
                } else if (message.includes('about') || message.includes('company') || message.includes('who are you')) {
                    addMessage("Manprit Dev is a SaaS-focused full-stack portfolio specializing in:\n\n🚀 Web & SaaS Applications\n🧩 Chrome Extensions\n⚙️ Full-Stack Product Features\n💳 Secure payment/API integrations\n\nWhat kind of project are you planning?", 'bot', 'services')
                } else if (message.includes('portfolio') || message.includes('work') || message.includes('project') || message.includes('example')) {
                    addMessage("I have delivered projects across multiple product types:\n\n🌐 SaaS web apps and dashboards\n🧠 AI-integrated workflows\n🧩 Chrome extensions\n💼 Admin and business panels\n\nWould you like to discuss your requirements?", 'bot', 'services')
                } else if (message.includes('team') || message.includes('developer') || message.includes('experience')) {
                    addMessage("I am a full-stack developer with 12+ years of experience in React, Next.js, Node.js, TypeScript, and product-focused delivery. Ready to discuss your project?", 'bot', 'services')
                } else {
                    addMessage("Thanks for your message! I'd love to help. Would you like to explore service areas or ask a specific question?", 'bot', 'quickReplies')
                }
            })
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSendMessage()
        }
    }

    const renderMessage = (message: Message) => {
        if (message.type === 'services') {
            return (
                <div className="space-y-2">
                                    <div className="text-sm text-black mb-3">Areas I Can Help With:</div>
                    <div className="space-y-2">
                        {services.slice(0, 6).map((service, index) => {
                            const IconComponent = serviceIcons[index]
                            return (
                                <motion.button
                                    key={service.name}
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    onClick={() => handleServiceSelect(service.name)}
                                    className="w-full flex items-center space-x-3 p-2 hover:bg-gray-50 rounded text-left transition-colors duration-200"
                                >
                                    <IconComponent className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                    <span className="text-sm text-gray-700">{service.name}</span>
                                </motion.button>
                            )
                        })}
                    </div>
                </div>
            )
        }

        if (message.type === 'quickReplies') {
            return (
                <div className="space-y-3">
                    <div className="text-sm leading-relaxed text-black">
                        {formatMessage(message.text)}
                    </div>
                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                        {quickReplies.map((reply) => (
                            <motion.button
                                key={reply.text}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleQuickReply(reply.action)}
                                className="px-2.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm hover:shadow-md transition-all duration-300 flex items-center space-x-1"
                            >
                                <span>{reply.text}</span>
                                <ArrowRight className="w-3 h-3" />
                            </motion.button>
                        ))}
                    </div>
                </div>
            )
        }

        if (message.type === 'form') {
            return (
                <div className="space-y-2">
                    <input
                        type="text"
                        placeholder="Your Name *"
                        value={userData.name}
                        onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:border-blue-600 focus:outline-none transition-colors bg-white"
                    />
                    <input
                        type="email"
                        placeholder="Your Email *"
                        value={userData.email}
                        onChange={(e) => setUserData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:border-blue-600 focus:outline-none transition-colors bg-white"
                    />
                    <input
                        type="tel"
                        placeholder="Phone (Optional)"
                        value={userData.phone}
                        onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:border-blue-600 focus:outline-none transition-colors bg-white"
                    />
                    <textarea
                        placeholder="Tell me about your project requirements..."
                        value={userData.message}
                        onChange={(e) => setUserData(prev => ({ ...prev, message: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:border-blue-600 focus:outline-none h-16 resize-none transition-colors bg-white"
                    />
                    <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={handleFormSubmit}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded text-sm transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                        <Send className="w-4 h-4" />
                        <span>Submit Request</span>
                    </motion.button>
                    <p className="text-xs text-gray-500 text-center">
                        🔒 Your information is secure and confidential
                    </p>
                </div>
            )
        }

        return (
            <div className="text-sm leading-relaxed text-white">
                {formatMessage(message.text)}
            </div>
        )
    }

    return (
        <>
            {/* Chat Button - Hidden when chat is open */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{
                            scale: 1,
                            rotate: 0,
                            y: [0, -4, 0]
                        }}
                        exit={{ scale: 0, rotate: -180 }}
                        transition={{
                            scale: { duration: 0.5, ease: "backOut" },
                            rotate: { duration: 0.8, ease: "backOut" },
                            y: {
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-10 group"
                    >
                        <div className="absolute -inset-2 sm:-inset-3 rounded-full bg-blue-600/20 animate-pulse"></div>
                        <div className="absolute -inset-1 sm:-inset-2 rounded-full bg-blue-600/30 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>

                        <motion.button
                            onClick={() => setIsOpen(true)}
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0 0 20px rgba(37, 99, 235, 0.6)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="relative bg-blue-600 hover:bg-yellow-500 text-white p-3 sm:p-4 rounded-full shadow-xl transition-all duration-300 transform overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            <motion.div
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
                            </motion.div>
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="fixed bottom-2 right-2 sm:bottom-4 sm:right-4 lg:right-6 w-[calc(100vw-1rem)] sm:w-80 lg:w-96 h-[85vh] sm:h-[500px] lg:h-[600px] max-h-[600px] bg-white border border-gray-200 rounded-xl sm:rounded-2xl shadow-xl z-50 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-blue-600 p-2 sm:p-3 text-white flex-shrink-0">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0"
                                    >
                                        <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                    </motion.div>
                                    <div>
                                        <h3 className="font-medium text-xs sm:text-sm">Manprit Dev Assistant</h3>
                                        <div className="flex items-center space-x-1">
                                            <motion.div
                                                animate={{ scale: [1, 1.5, 1] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                                className="w-1.5 h-1.5 bg-green-400 rounded-full"
                                            ></motion.div>
                                            <p className="text-xs opacity-90">Online now</p>
                                        </div>
                                    </div>
                                </div>
                                <motion.button
                                    onClick={() => setIsOpen(false)}
                                    whileHover={{ rotate: 90, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-1 sm:p-1.5 text-white/80 hover:text-white hover:bg-white/20 rounded-lg transition-all duration-200"
                                >
                                    <X className="w-4 h-4" />
                                </motion.button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div 
                            className="flex-1 overflow-y-auto p-2 sm:p-3 space-y-3 bg-gray-50/30 [&::-webkit-scrollbar]:hidden" 
                            style={{
                                scrollbarWidth: 'none', 
                                msOverflowStyle: 'none'
                            }}
                        >
                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`flex items-start space-x-1 sm:space-x-2 max-w-[90%] sm:max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                                        <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0 ${message.sender === 'user'
                                            ? 'bg-gray-700'
                                            : 'bg-blue-600'
                                            }`}>
                                            {message.sender === 'user' ? (
                                                <User className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                                            ) : (
                                                <Bot className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                                            )}
                                        </div>
                                        <div className={`p-2 sm:p-2.5 rounded-lg sm:rounded-xl ${message.sender === 'user'
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-white border border-gray-200 text-black'
                                            }`}>
                                            {renderMessage(message)}
                                            {message.type !== 'services' && message.type !== 'form' && (
                                                <p className={`text-xs mt-2 ${message.sender === 'user'
                                                    ? 'text-blue-200'
                                                    : 'text-white'
                                                    }`}>
                                                    {message.timestamp}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                            
                            {/* Typing Indicator */}
                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex justify-start"
                                >
                                    <div className="flex items-start space-x-1 sm:space-x-2">
                                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center bg-blue-600">
                                            <Bot className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                                        </div>
                                        <div className="bg-white border border-gray-200 p-2 sm:p-2.5 rounded-lg sm:rounded-xl">
                                            <div className="flex space-x-1">
                                                <motion.div
                                                    animate={{ scale: [1, 1.5, 1] }}
                                                    transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                                                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full"
                                                />
                                                <motion.div
                                                    animate={{ scale: [1, 1.5, 1] }}
                                                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                                                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full"
                                                />
                                                <motion.div
                                                    animate={{ scale: [1, 1.5, 1] }}
                                                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                                                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-2 sm:p-3 bg-white border-t border-gray-200 flex-shrink-0">
                            <div className="flex items-center space-x-1 sm:space-x-2">
                                <input
                                    type="text"
                                    value={inputMessage}
                                    onChange={(e) => setInputMessage(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Ask me about projects, stack, or collaboration..."
                                    className="flex-1 px-3 py-2.5 bg-gray-100 border border-gray-300 rounded-lg text-sm text-black placeholder-gray-500 focus:border-blue-600 focus:outline-none transition-colors duration-200"
                                />
                                <motion.button
                                    onClick={handleSendMessage}
                                    disabled={!inputMessage.trim()}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send className="w-4 h-4" />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Chat