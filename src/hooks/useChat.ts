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
        answer: "Pricing is tailored to scope and timeline:\n\n• Starter Projects: ₹65,000 - ₹1,65,000\n• Growth Projects: ₹1,65,000 - ₹5,00,000\n• Advanced Products: ₹5,00,000+\n\nAvailable models:\n✓ Fixed-price projects\n✓ Hourly consulting (₹2,000-₹5,000/hr)\n✓ Monthly retainers\n✓ Free initial consultation\n\nLet's discuss your project for an accurate quote!" 
    },
    { 
        question: "Do you provide ongoing support?",
        answer: "Yes! Comprehensive support is available:\n\n• 30 days free post-launch support\n• Monthly maintenance packages\n• Priority issue handling\n• Regular updates and security patches\n• Performance monitoring\n\nSupport packages start from ₹10,000/month." 
    },
    { 
        question: "What technologies do you use?",
        answer: "I use technologies from real shipped projects:\n\n**Frontend:**\n• React, Next.js\n• TypeScript, JavaScript\n• Tailwind CSS, Framer Motion\n\n**Backend & Data:**\n• Node.js, Express.js\n• MongoDB, Firebase\n\n**Mobile/Desktop:**\n• Ionic, React Native, Flutter\n• Electron.js\n\n**Deployment & Integrations:**\n• Vercel, GitHub Actions, Cloudinary\n• Stripe, PayPal, OpenAI API\n\nI choose from this stack based on your project needs." 
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
            text: "Hello! 👋 I'm your portfolio assistant for Manprit Dev. I can help with projects, stack, and collaboration details.",
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
                    addMessage("Here's how you can reach me:\n\n📧 Email: mnprt312@gmail.com\n📞 Phone: +91 82648 74761\n🌐 Website: manprit.dev\n📍 Location: Mohali, Punjab, India\n\n💬 Availability:\nMon-Sat (IST)", 'bot', 'quickReplies')
                })
                break
        }
    }

    const handleServiceSelect = (service: string) => {
        setUserData(prev => ({ ...prev, service }))
        addMessage(`I'm interested in ${service}`, 'user')
        
        simulateTyping(() => {
            addMessage(`Excellent choice! ${service} aligns well with my portfolio work. Let me collect a few details and share a suitable approach.`, 'bot')
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
            
            addMessage('🎉 Perfect! Your information has been submitted successfully. I will follow up shortly with next steps.', 'bot')
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
                    addMessage("Here's how you can reach me:\n\n📧 Email: mnprt312@gmail.com\n📞 Phone: +91 82648 74761\n🌐 Website: manprit.dev\n📍 Location: Mohali, Punjab, India\n\n💬 Availability:\nMon-Sat (IST)", 'bot', 'quickReplies')
                } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
                    addMessage("Hello! Great to meet you! 👋 I'm here to help you find the perfect solution for your project. What can I help you with today?", 'bot', 'quickReplies')
                } else if (message.includes('about') || message.includes('company') || message.includes('who are you')) {
                    addMessage("Manprit Dev is a SaaS-focused full-stack portfolio specializing in web apps, Chrome extensions, and product engineering. What project can I help with?", 'bot', 'services')
                } else if (message.includes('portfolio') || message.includes('work') || message.includes('project') || message.includes('example')) {
                    addMessage("Successful deliveries span multiple categories:\n\n📱 Mobile Apps: e-commerce, healthcare, education\n🌐 Web Applications: SaaS platforms and dashboards\n🏢 Business Tools: CRM and custom systems\n🎮 Interactive Products: web-based experiences\n\nWould you like to discuss your specific requirements?", 'bot', 'services')
                } else if (message.includes('team') || message.includes('developer') || message.includes('experience')) {
                    addMessage("I work as a full-stack developer with product ownership across planning, implementation, and delivery. Ready to start your project?", 'bot', 'services')
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
