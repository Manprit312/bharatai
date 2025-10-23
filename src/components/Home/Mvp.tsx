'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { TextAnimate } from "@/components/ui/text-animate"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { RoughNotation } from "react-rough-notation"
import { ArrowRight, Rocket, Clock, DollarSign, Users, CheckCircle, Zap, Calendar } from 'lucide-react'
import { useScheduleCall } from '@/hooks/useScheduleCall'

function Mvp() {
    const { scheduleCall } = useScheduleCall()
    
    const handleScheduleCall = () => {
        const tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        tomorrow.setHours(10, 0, 0, 0)
        
        const endTime = new Date(tomorrow)
        endTime.setHours(11, 0, 0, 0)
        
        scheduleCall({
            title: 'MVP Consultation - BharatAI Software',
            description: 'Discuss your MVP idea and create a roadmap to bring it to market quickly and efficiently.',
            startTime: tomorrow.toISOString(),
            endTime: endTime.toISOString()
        })
    }

    const mvpFeatures = [
        {
            icon: Clock,
            title: "Rapid Development",
            description: "Get your MVP to market in 4-8 weeks with our agile development process."
        },
        {
            icon: DollarSign,
            title: "Cost-Effective",
            description: "Minimize initial investment while maximizing learning and validation opportunities."
        },
        {
            icon: Users,
            title: "User-Focused",
            description: "Build features that matter most to your target audience and validate assumptions."
        },
        {
            icon: Zap,
            title: "Scalable Foundation",
            description: "Architecture designed to grow with your business as you add more features."
        }
    ]

    const process = [
        { step: "01", title: "Discovery", description: "Understand your vision and define core features" },
        { step: "02", title: "Design", description: "Create user-friendly interfaces and experiences" },
        { step: "03", title: "Develop", description: "Build your MVP with modern technologies" },
        { step: "04", title: "Deploy", description: "Launch and gather real user feedback" }
    ]

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-100/10 via-transparent to-transparent"></div>
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-2 text-blue-600 mb-6"
                    >
                        <Rocket className="w-5 h-5" />
                        <span className="text-sm font-medium tracking-wider uppercase">MVP Development</span>
                        <Rocket className="w-5 h-5" />
                    </motion.div>

                    <div className="text-3xl md:text-5xl font-bold text-black mb-6">
                        Launch Your{" "}
                        <RoughNotation
                            type="underline"
                            show={true}
                            color="#7c3aed"
                            animationDelay={1000}
                        >
                            <span className='text-cyan-500'>MVP Fast</span>
                        </RoughNotation>
                        {" "}& Smart
                    </div>

                    <TextAnimate
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                        animation="slideUp"
                        by="word"
                    >
                        Turn your innovative ideas into market-ready products with our streamlined
                        MVP development process. Validate, learn, and scale efficiently.
                    </TextAnimate>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="space-y-6">
                            <TextAnimate
                                className="text-3xl font-bold text-black"
                                animation="slideUp"
                                by="word"
                            >
                                Why Choose Our MVP Development?
                            </TextAnimate>

                            <p className="text-gray-600 text-lg leading-relaxed">
                                We help startups and enterprises validate their ideas quickly and cost-effectively.
                                Our MVP approach focuses on core functionality while maintaining scalability for future growth.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {mvpFeatures.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start space-x-4"
                                >
                                    <div className="flex-shrink-0 p-3 bg-blue-600/20 rounded-xl">
                                        <feature.icon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-black font-semibold text-lg mb-2">{feature.title}</h3>
                                        <p className="text-gray-600">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <InteractiveHoverButton className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300">
                                <span className="flex items-center gap-2">
                                    Start Your MVP
                                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                                </span>
                            </InteractiveHoverButton>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative space-y-6"
                    >
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                alt="MVP Development Process"
                                width={600}
                                height={400}
                                className="rounded-2xl shadow-2xl border border-gray-200"
                            />
                            <div className="absolute inset-0 bg-yellow-500/10 rounded-2xl"></div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="w-full max-w-xs mx-auto"
                        >
                            <Image
                                src="/image/mvp.jpg"
                                alt="MVP Illustration"
                                width={250}
                                height={150}
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-gray-200 shadow-lg"
                        >
                            <div className="text-2xl font-bold text-cyan-500">4-8</div>
                            <div className="text-gray-600 text-sm">Weeks</div>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <TextAnimate
                        className="text-3xl font-bold text-black text-center mb-12"
                        animation="slideUp"
                        by="word"
                    >
                        Our MVP Development Process
                    </TextAnimate>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="relative mb-6">
                                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-black font-bold text-lg">{item.step}</span>
                                    </div>
                                    {index < process.length - 1 && (
                                        <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gray-700 transform -translate-y-1/2"></div>
                                    )}
                                </div>
                                <h3 className="text-black font-semibold text-xl mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-center bg-gray-100/30 rounded-2xl p-12 border border-gray-200"
                >
                    <TextAnimate
                        className="text-3xl font-bold text-black mb-4"
                        animation="slideUp"
                        by="word"
                    >
                        Ready to Build Your MVP?
                    </TextAnimate>

                    <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                        Let's discuss your idea and create a roadmap to bring your MVP to market quickly and efficiently.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <InteractiveHoverButton className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold">
                            <span className="flex items-center gap-2">
                                Get Started Now
                                <Rocket className="w-5 h-5" />
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
                </motion.div>
            </div>
        </section>
    )
}

export default Mvp
