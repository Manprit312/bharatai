import { useState, useRef, useEffect } from 'react'

export interface Message {
    id: number
    text: string
    sender: 'user' | 'bot'
    timestamp: string
    type?: 'text' | 'services' | 'form' | 'quickReplies' | 'typing'
    data?: any
}

export interface UserData {
    name: string
    email: string
    phone: string
    service: string
    message: string
}

const faqs = [
    { 
        question: "How long does development take?",
        answer: "Development timeline varies based on project complexity:\n\n• Simple websites: 2-4 weeks\n• Web applications: 6-12 weeks\n• Mobile apps: 8-16 weeks\n• Enterprise solutions: 3-6 months\n\nWe provide detailed timelines after analyzing your requirements. Most projects are delivered 20% faster than industry average!" 
    },
    { 
        question: "What are your pricing options?",
        answer: "Our pricing is tailored to your specific needs:\n\n• Startup Package: $5K - $15K\n• Business Package: $15K - $50K\n• Enterprise Package: $50K+\n\nWe offer:\n✓ Fixed-price projects\n✓ Hourly consulting ($75-150/hr)\n✓ Monthly retainers\n✓ Free initial consultation\n\nLet's discuss your project for an accurate quote!" 
    },
    { 
        question: "Do you provide ongoing support?",
        answer: "Yes! We provide comprehensive support:\n\n• 30 days free post-launch support\n• Monthly maintenance packages\n• 24/7 emergency support\n• Regular updates and security patches\n• Performance monitoring\n\nOur support packages start from $500/month." 
    },
    { 
        question: "What technologies do you use?",
        answer: "We use cutting-edge technologies:\n\n**Frontend:**\n• React, Vue.js, Angular\n• Next.js, Nuxt.js\n• TypeScript, JavaScript\n\n**Backend:**\n• Node.js, Python, PHP\n• Express, Django, Laravel\n\n**Mobile:**\n• React Native, Flutter\n• iOS, Android native\n\n**Cloud & DevOps:**\n• AWS, Google Cloud, Azure\n• Docker, Kubernetes\n\nWe choose the best tech stack for your specific needs!" 
    }
]

export const useChat = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [currentStep, setCurrentStep] = useState('initial')
    const [isTyping, setIsTyping] = useState(false)
    const [inputMessage, setInputMessage] = useState('')
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
            text: "Hello! 👋 I'm Alex, your AI assistant at KABULE TECH. I'm here to help you find the perfect solution for your project!",
            sender: 'bot',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            type: 'quickReplies'
        }
    ])
    const messagesEndRef = useRef<HTMLDivElement>(null)

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

    const handleQuickReply = (action: string) => {
        switch (action) {
            case 'services':
                addMessage("I'd like to see your services", 'user')
                simulateTyping(() => {
                    addMessage("Here are our main services. Click on any service to learn more:", 'bot', 'services')
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
                    addMessage("Here's how you can reach us:\n\n📧 Email: hello@kabuletech.com\n📞 Phone: +1 (555) 123-4567\n🌐 Website: www.kabuletech.com\n📍 Address: 123 Tech Street, Digital City\n\n💬 Business Hours:\nMon-Fri 9AM-6PM EST\n\nWe typically respond within 2-4 hours during business hours. Feel free to reach out anytime!", 'bot', 'quickReplies')
                })
                break
        }
    }

    const handleServiceSelect = (service: string) => {
        setUserData(prev => ({ ...prev, service }))
        addMessage(`I'm interested in ${service}`, 'user')
        
        simulateTyping(() => {
            addMessage(`Excellent choice! ${service} is one of our specialties. We've helped 100+ clients with similar projects. Let me collect some details to provide you with a personalized quote.`, 'bot')
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
            
            addMessage('🎉 Perfect! Your information has been submitted successfully. Our expert team will contact you within 2-4 hours with a detailed proposal and next steps.', 'bot')
            setCurrentStep('completed')
        } catch (error) {
            addMessage('Sorry, there was a connection error. Please try again or contact us directly at hello@kabuletech.com', 'bot')
        }
    }

    const handleSendMessage = () => {
        if (inputMessage.trim()) {
            addMessage(inputMessage, 'user')
            const message = inputMessage.toLowerCase()
            setInputMessage('')

            simulateTyping(() => {
                if (message.includes('service') || message.includes('what do you do') || message.includes('offer')) {
                    addMessage('Here are our main services. We specialize in creating innovative digital solutions:', 'bot', 'services')
                } else if (message.includes('price') || message.includes('cost') || message.includes('budget')) {
                    addMessage(faqs[1].answer, 'bot', 'quickReplies')
                } else if (message.includes('time') || message.includes('long') || message.includes('duration')) {
                    addMessage(faqs[0].answer, 'bot', 'quickReplies')
                } else if (message.includes('support') || message.includes('maintenance')) {
                    addMessage(faqs[2].answer, 'bot', 'quickReplies')
                } else if (message.includes('technology') || message.includes('tech') || message.includes('stack')) {
                    addMessage(faqs[3].answer, 'bot', 'quickReplies')
                } else if (message.includes('contact') || message.includes('call') || message.includes('email')) {
                    addMessage("Here's how you can reach us:\n\n📧 Email: hello@kabuletech.com\n📞 Phone: +1 (555) 123-4567\n🌐 Website: www.kabuletech.com\n📍 Address: 123 Tech Street, Digital City\n\n💬 Business Hours:\nMon-Fri 9AM-6PM EST\n\nWe typically respond within 2-4 hours during business hours. Feel free to reach out anytime!", 'bot', 'quickReplies')
                } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
                    addMessage("Hello! Great to meet you! 👋 I'm here to help you find the perfect solution for your project. What can I help you with today?", 'bot', 'quickReplies')
                } else if (message.includes('about') || message.includes('company') || message.includes('who are you')) {
                    addMessage("KABULE TECH is a leading software development company specializing in:\n\n🚀 Custom Web & Mobile Applications\n💼 Enterprise Solutions\n🎨 UI/UX Design\n☁️ Cloud Services\n🔐 Cybersecurity\n\nWe've helped 100+ businesses transform their ideas into successful digital products. What project can we help you with?", 'bot', 'services')
                } else if (message.includes('portfolio') || message.includes('work') || message.includes('project') || message.includes('example')) {
                    addMessage("We've successfully delivered projects across various industries:\n\n📱 Mobile Apps: E-commerce, Healthcare, Education\n🌐 Web Applications: SaaS platforms, Dashboards\n🏢 Enterprise: CRM, ERP, Custom Solutions\n🎮 Games: Mobile & Web-based\n\nEach project is tailored to client needs with modern tech stack. Would you like to discuss your specific requirements?", 'bot', 'services')
                } else if (message.includes('team') || message.includes('developer') || message.includes('experience')) {
                    addMessage("Our expert team includes:\n\n👨💻 Senior Developers (5+ years exp)\n🎨 UI/UX Designers\n🔧 DevOps Engineers\n📊 Project Managers\n🔍 QA Specialists\n\nWe follow agile methodology and maintain 98% client satisfaction rate. Ready to start your project?", 'bot', 'services')
                } else {
                    addMessage("Thanks for your message! I'd love to help you with that. Would you like to explore our services or do you have a specific question?", 'bot', 'quickReplies')
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

    return {
        isOpen,
        setIsOpen,
        currentStep,
        setCurrentStep,
        isTyping,
        inputMessage,
        setInputMessage,
        userData,
        setUserData,
        messages,
        messagesEndRef,
        addMessage,
        simulateTyping,
        handleQuickReply,
        handleServiceSelect,
        handleFormSubmit,
        handleSendMessage,
        handleKeyPress
    }
}
