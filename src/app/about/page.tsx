'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import { TextAnimate } from "@/components/ui/text-animate"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { useContactPopup } from "@/components/ContactPopup"
import { useScheduleCall } from '@/hooks/useScheduleCall'
import { RoughNotation } from "react-rough-notation"
import { ArrowRight, Users, Award, Target, Zap, Heart, Globe, Code, Lightbulb, Calendar } from 'lucide-react'
import Band from '@/components/Home/Band'

function AboutPage() {
    const { openPopup, ContactPopup } = useContactPopup()
    const { scheduleCall } = useScheduleCall()

    const handleScheduleCall = () => {
        const tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        tomorrow.setHours(10, 0, 0, 0)
        
        const endTime = new Date(tomorrow)
        endTime.setHours(11, 0, 0, 0)
        
        scheduleCall({
            title: 'Portfolio Discussion - Manprit Dev',
            description: 'Discuss your product goals, technical scope, and project requirements.',
            startTime: tomorrow.toISOString(),
            endTime: endTime.toISOString()
        })
    }
    const stats = [
        { icon: Users, value: "12+ Years", label: "Hands-On Experience", color: "text-blue-600" },
        { icon: Award, value: "7+", label: "Major Features Shipped", color: "text-cyan-500" },
        { icon: Globe, value: "45%", label: "Teacher Productivity Lift", color: "text-yellow-500" },
        { icon: Code, value: "35%", label: "UI Engagement Growth", color: "text-purple-600" }
    ]

    const values = [
        {
            icon: Target,
            title: "Excellence",
            description: "I value clean architecture, readable code, and reliable delivery standards."
        },
        {
            icon: Heart,
            title: "Passion",
            description: "I enjoy solving complex product problems and turning them into simple user flows."
        },
        {
            icon: Lightbulb,
            title: "Innovation",
            description: "I apply modern tooling thoughtfully to improve performance and team productivity."
        },
        {
            icon: Users,
            title: "Collaboration",
            description: "I work closely with founders, designers, and developers to ship confidently."
        }
    ]

    const team = [
        {
            name: "Synex Tech Labs",
            role: "Full Stack Developer (May 2025 - Present)",
            image: "/image/project.png",
            description: "Built a production website, e-commerce admin dashboard, and multi-service platform with measurable UX and delivery improvements."
        },
        {
            name: "Appsmartz",
            role: "Fullstack Developer (2023 - May 2025)",
            image: "/image/computer.jpg",
            description: "Shipped 7 major features across web and desktop systems, including Chrome extensions and payment-integrated products."
        },
        {
            name: "Deliverables Agency",
            role: "Frontend Developer (2022 - 2023)",
            image: "/image/mvp.jpg",
            description: "Contributed to AI-assisted products, optimized Electron app performance, and implemented secure Stripe/PayPal workflows."
        },
        {
            name: "Specialized Product Work",
            role: "Chrome Extensions, Electron, and SaaS Systems",
            image: "/image/trans.png",
            description: "Built products like unMix, Edzipp tools, and AI-powered workflows focused on practical user outcomes."
        }
    ]

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Navbar />

            <section className="pt-32 pb-20 px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-yellow-50/40 via-white to-cyan-50/30">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/20 via-white to-white"></div>
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 text-blue-600"
                                >
                                    <div className="w-8 h-px bg-blue-600"></div>
                                    <span className="text-sm font-medium tracking-wider uppercase">About Manprit Dev</span>
                                </motion.div>

                                <div className="text-3xl md:text-5xl font-bold text-black leading-tight">
                                    <TextAnimate animation="slideUp" by="word">
                                        Building the
                                    </TextAnimate>
                                    {" "}
                                    <span className="text-cyan-500">Future</span>
                                    {" "}
                                    <TextAnimate animation="slideUp" by="word">
                                        of Technology
                                    </TextAnimate>
                                </div>

                                <TextAnimate
                                    className="text-xl text-gray-600 leading-relaxed"
                                    animation="slideUp"
                                    by="word"
                                >
                                    I am a full-stack developer focused on turning ideas into
                                    reliable digital products that create measurable business impact.
                                </TextAnimate>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <InteractiveHoverButton 
                                    onClick={handleScheduleCall}
                                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold"
                                >
                                    <span className="flex items-center gap-2">
                                        <Calendar className="w-5 h-5" />
                                        Schedule a Call
                                        <ArrowRight className="w-5 h-5" />
                                    </span>
                                </InteractiveHoverButton>

                                <InteractiveHoverButton 
                                    onClick={openPopup}
                                    className="border-2 border-purple-600 hover:border-cyan-500 text-black px-8 py-4 rounded-xl font-semibold bg-transparent"
                                >
                                    Contact Me
                                </InteractiveHoverButton>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative space-y-6"
                        >
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <img
                                    src="/image/team_1.jpg"
                                    alt="About section visual"
                                    className="rounded-2xl shadow-2xl border border-gray-200 w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-blue-600/10 rounded-2xl"></div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-r from-cyan-50/30 via-cyan-50/20 to-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center p-8 bg-gray-100/50 rounded-2xl border border-gray-200"
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="p-4 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-xl">
                                        <stat.icon className={`w-8 h-8 ${stat.color}`} />
                                    </div>
                                </div>
                                <div className="text-3xl font-bold text-black mb-2">{stat.value}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-gradient-to-bl from-cyan-50/50 via-white to-cyan-50/40 relative">
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative"
                        >
                            <img
                                src="/image/project.png"
                                alt="Portfolio project snapshot"
                                className="rounded-2xl shadow-2xl border border-gray-200 w-full h-auto"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="space-y-8"
                        >
                            <div className="space-y-6">
                                <div className="text-3xl font-bold text-black">
                                    <TextAnimate animation="slideUp" by="word">
                                        My
                                    </TextAnimate>
                                    {" "}
                                    <RoughNotation
                                        type="underline"
                                        show={true}
                                        color="#7c3aed"
                                        animationDelay={500}
                                    >
                                        <span className="text-cyan-500">Journey</span>
                                    </RoughNotation>
                                </div>

                                <div className="space-y-4 text-gray-600 leading-relaxed">
                                    <p>
                                        My journey started with frontend development and quickly expanded into full-stack
                                        product engineering, where I focused on building scalable and user-friendly SaaS experiences.
                                    </p>
                                    <p>
                                        Over the years, I have worked across React, Next.js, Node.js, Electron, and Chrome
                                        extensions, shipping production features that improved engagement and usability.
                                    </p>
                                    <p>
                                        Today, I focus on product-quality delivery: writing maintainable code, integrating
                                        APIs and payments securely, and helping teams move from idea to launch with confidence.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gradient-to-r from-cyan-50/30 via-cyan-50/20 to-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <TextAnimate
                            className="text-3xl md:text-5xl font-bold text-black mb-6"
                            animation="slideUp"
                            by="word"
                        >
                            Core Values
                        </TextAnimate>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The principles that guide how I build products and collaborate.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="text-center p-8 bg-gray-100/50 rounded-2xl border border-gray-200 hover:border-blue-600/50 transition-all duration-300"
                            >
                                <div className="flex justify-center mb-6">
                                    <div className="p-4 bg-blue-600/20 rounded-xl">
                                        <value.icon className="w-8 h-8 text-blue-600" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-black mb-4">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gradient-to-tr from-cyan-50/40 via-cyan-50/30 to-white relative">
                <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <div className="text-3xl md:text-5xl font-bold text-black mb-6">
                            <TextAnimate animation="slideUp" by="word">
                                Career
                            </TextAnimate>
                            {" "}
                            <span className="text-cyan-500 underline decoration-purple-600">Highlights</span>
                        </div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Key milestones and responsibilities across my professional journey.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="text-center p-6 bg-gray-100/50 rounded-2xl border border-gray-200 hover:border-cyan-500/50 transition-all duration-300"
                            >
                                <div className="mb-6">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-24 h-24 rounded-full mx-auto border-4 border-gray-600 hover:border-cyan-500 transition-colors duration-300"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-black mb-2">{member.name}</h3>
                                <p className="text-cyan-500 font-medium mb-3">{member.role}</p>
                                <p className="text-gray-600 text-sm">{member.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-gradient-to-r from-gray-50/50 via-white to-cyan-50/30 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="flex items-center justify-center gap-2 text-blue-600 mb-4"
                        >
                            <div className="w-8 h-px bg-blue-600"></div>
                            <span className="text-sm font-medium tracking-wider uppercase">Trusted by</span>
                        </motion.div>
                        <TextAnimate
                            className="text-3xl md:text-4xl font-bold text-black mb-4"
                            animation="slideUp"
                            by="word"
                        >
                            Industry Leaders
                        </TextAnimate>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            I have had the privilege of working with teams across diverse product categories
                        </p>
                    </div>
                    
                    <Band issmall={true} />
                </div>
            </section>

            <section className="py-24 bg-gradient-to-br from-cyan-50/50 via-cyan-50/30 to-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="bg-gray-100/30 rounded-2xl p-12 border border-gray-200"
                    >
                        <TextAnimate
                            className="text-3xl font-bold text-black mb-6"
                            animation="slideUp"
                            by="word"
                        >
                            Ready to Work Together?
                        </TextAnimate>

                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Let's discuss how my product engineering approach can help bring your vision to life.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <InteractiveHoverButton 
                                onClick={openPopup}
                                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold"
                            >
                                <span className="flex items-center gap-2">
                                    Start a Project
                                    <ArrowRight className="w-5 h-5" />
                                </span>
                            </InteractiveHoverButton>

                            <InteractiveHoverButton 
                                onClick={handleScheduleCall}
                                className="border-2 border-purple-600 hover:border-cyan-500 text-black px-8 py-4 rounded-xl font-semibold bg-transparent"
                            >
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5" />
                                    Schedule Call
                                </span>
                            </InteractiveHoverButton>
                        </div>
                    </motion.div>
                </div>
            </section>
            <ContactPopup />
        </div>
    )
}

export default AboutPage
