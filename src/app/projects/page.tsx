'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/Navbar'
import { ContactPopup } from '@/components/ContactPopup'
import { TextAnimate } from "@/components/ui/text-animate"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { OrbitingCircles } from "@/components/ui/orbiting-circles"
import { useScheduleCall } from '@/hooks/useScheduleCall'
import { ExternalLink, Github, Filter, Code, Server, Layers, TrendingUp, Award, Calendar, MessageCircle } from 'lucide-react'
import { projects, techStackIcons, Project } from '@/consts/projects'
import TechStack from '@/consts/techstack'

function ProjectsPage() {
    const [orbitRadii, setOrbitRadii] = useState({ inner: 50, middle: 85, outer: 120 })

    React.useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 768) {
                setOrbitRadii({ inner: 80, middle: 130, outer: 180 })
            } else {
                setOrbitRadii({ inner: 50, middle: 85, outer: 120 })
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    const [activeFilter, setActiveFilter] = useState('all')
    const [isContactPopupOpen, setIsContactPopupOpen] = useState(false)
    const { scheduleCall } = useScheduleCall()

    const categories = [
        { id: 'all', name: 'All Projects', icon: Layers },
        { id: 'web', name: 'Web Apps', icon: Code },
        { id: 'mobile', name: 'Mobile Apps', icon: Server },
        { id: 'ecommerce', name: 'E-commerce', icon: TrendingUp },
        { id: 'blockchain', name: 'Blockchain', icon: Award }
    ]

    const filteredProjects = activeFilter === 'all' 
        ? projects 
        : projects.filter(project => project.category === activeFilter)

    const getCategoryColor = (category: string) => {
        const colors = {
            'web': 'bg-blue-100 text-blue-600',
            'mobile': 'bg-cyan-100 text-cyan-600',
            'ecommerce': 'bg-yellow-100 text-yellow-600',
            'blockchain': 'bg-purple-100 text-purple-600'
        }
        return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-600'
    }

    const handleScheduleCall = async () => {
        const now = new Date()
        const callTime = new Date(now.getTime() + 24 * 60 * 60 * 1000)
        callTime.setHours(14, 0, 0, 0)
        const endTime = new Date(callTime.getTime() + 60 * 60 * 1000)

        await scheduleCall({
            title: 'Project Discussion Call',
            description: 'Let\'s discuss your project requirements and how we can help you achieve your goals.',
            startTime: callTime.toISOString(),
            endTime: endTime.toISOString(),
        })
    }

    // Get featured tech stack for orbiting circles (3 rings with 6 icons each)
    const featuredTechStack = TechStack.slice(0, 30)

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <motion.section 
                className="pt-20 md:pt-24 pb-4 md:pb-6 px-4 md:px-6 lg:px-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-6 md:mb-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.4 }}
                            className="flex items-center justify-center gap-2 text-blue-600 mt-6 md:mt-3 mb-3 md:mb-4"
                        >
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            >
                                <Award className="w-4 h-4 md:w-5 md:h-5" />
                            </motion.div>
                            <motion.span 
                                className="text-xs md:text-sm font-medium tracking-wider uppercase"
                                initial={{ letterSpacing: "0.1em" }}
                                animate={{ letterSpacing: "0.2em" }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                Our Work
                            </motion.span>
                            <motion.div
                                animate={{ rotate: [0, -360] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            >
                                <Award className="w-4 h-4 md:w-5 md:h-5" />
                            </motion.div>
                        </motion.div>

                        <motion.div 
                            className="text-2xl md:text-3xl lg:text-5xl font-bold text-black mb-3 md:mb-4"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.3 }}
                        >
                            <TextAnimate animation="slideUp" by="word">
                                Project
                            </TextAnimate>
                            {" "}
                            <motion.span 
                                className="text-blue-600"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.8, type: "spring", bounce: 0.5 }}
                            >
                                Showcase
                            </motion.span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <TextAnimate
                                className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto px-4"
                                animation="slideUp"
                                by="word"
                            >
                                Explore our portfolio of successful projects across web, mobile, and enterprise solutions
                            </TextAnimate>
                        </motion.div>
                    </div>

                    {/* Tech Stack Orbiting Circles - Enhanced Animations */}
                    <motion.div 
                        className="flex justify-center mb-4 md:mb-6"
                        initial={{ opacity: 0, scale: 0.3, rotateY: 180 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1.2, delay: 0.8, type: "spring", bounce: 0.4 }}
                    >
                        <div className="relative flex items-center justify-center w-64 h-64 md:w-96 md:h-96">
                            {/* Center icon */}
                            <motion.div 
                                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center z-50 shadow-lg"
                                initial={{ scale: 0, rotate: -360, opacity: 0 }}
                                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 1.2, type: "spring", bounce: 0.6 }}
                                whileHover={{ 
                                    scale: 1.2, 
                                    rotate: 360,
                                    boxShadow: "0 0 30px rgba(37, 99, 235, 0.5)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <motion.div
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                >
                                    <Code className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                                </motion.div>
                            </motion.div>
                            
                            {/* Inner ring - 6 icons */}
                            <OrbitingCircles
                                className="border-none"
                                duration={20}
                                radius={orbitRadii.inner}
                                reverse={false}
                            >
                                {featuredTechStack.slice(0, 6).map((tech, index) => {
                                    const IconComponent = tech.icon
                                    return (
                                        <motion.div 
                                            key={`inner-${tech.name}`}
                                            className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 aspect-square flex-shrink-0 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden ${tech.color}`}
                                            whileHover={{ 
                                                scale: 1.3, 
                                                y: -4,
                                                rotate: 15,
                                                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                                                transition: { duration: 0.2 }
                                            }}
                                            initial={{ scale: 0, rotate: -180, opacity: 0 }}
                                            animate={{ scale: 1, rotate: 0, opacity: 1 }}
                                            transition={{ 
                                                duration: 0.6, 
                                                delay: 1.4 + index * 0.1, 
                                                type: "spring",
                                                bounce: 0.5
                                            }}
                                            style={{ zIndex: 40 }}
                                        >
                                            <motion.div
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <IconComponent className="w-4 h-4 md:w-6 md:h-6 object-contain mx-auto my-auto" />
                                            </motion.div>
                                        </motion.div>
                                    )
                                })}
                            </OrbitingCircles>

                            {/* Middle ring - 6 icons */}
                            <OrbitingCircles
                                className="border-none"
                                duration={25}
                                radius={orbitRadii.middle}
                                reverse={true}
                            >
                                {featuredTechStack.slice(6, 15).map((tech, index) => {
                                    const IconComponent = tech.icon
                                    return (
                                        <motion.div 
                                            key={`middle-${tech.name}`}
                                            className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 aspect-square flex-shrink-0 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 ${tech.color}`}
                                            whileHover={{ 
                                                scale: 1.3, 
                                                y: -4,
                                                rotate: -15,
                                                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                                                transition: { duration: 0.2 }
                                            }}
                                            initial={{ scale: 0, rotate: 180, opacity: 0 }}
                                            animate={{ scale: 1, rotate: 0, opacity: 1 }}
                                            transition={{ 
                                                duration: 0.6, 
                                                delay: 1.6 + index * 0.1, 
                                                type: "spring",
                                                bounce: 0.5
                                            }}
                                            style={{ zIndex: 30 }}
                                        >
                                            <motion.div
                                                whileHover={{ rotate: -360 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                                            </motion.div>
                                        </motion.div>
                                    )
                                })}
                            </OrbitingCircles>

                            {/* Outer ring - 6 icons */}
                            <OrbitingCircles
                                className="border-none"
                                duration={30}
                                radius={orbitRadii.outer}
                                reverse={false}
                            >
                                {featuredTechStack.slice(15, 30).map((tech, index) => {
                                    const IconComponent = tech.icon
                                    return (
                                        <motion.div 
                                            key={`outer-${tech.name}`}
                                            className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 aspect-square flex-shrink-0 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 ${tech.color}`}
                                            whileHover={{ 
                                                scale: 1.3, 
                                                y: -4,
                                                rotate: 15,
                                                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                                                transition: { duration: 0.2 }
                                            }}
                                            initial={{ scale: 0, rotate: -270, opacity: 0 }}
                                            animate={{ scale: 1, rotate: 0, opacity: 1 }}
                                            transition={{ 
                                                duration: 0.6, 
                                                delay: 1.8 + index * 0.1, 
                                                type: "spring",
                                                bounce: 0.5
                                            }}
                                            style={{ zIndex: 20 }}
                                        >
                                            <motion.div
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                                            </motion.div>
                                        </motion.div>
                                    )
                                })}
                            </OrbitingCircles>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Navigation Filters */}
            <motion.section 
                className="py-4 md:py-6 bg-gray-50"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                        {categories.map((category, index) => {
                            const IconComponent = category.icon
                            return (
                                <motion.button
                                    key={category.id}
                                    onClick={() => setActiveFilter(category.id)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`flex items-center space-x-2 px-3 md:px-4 py-2 md:py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                                        activeFilter === category.id
                                            ? 'bg-blue-600 text-white shadow-lg'
                                            : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200 hover:border-blue-300'
                                    }`}
                                >
                                    <motion.div
                                        animate={activeFilter === category.id ? { rotate: 360 } : { rotate: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <IconComponent className="w-4 h-4" />
                                    </motion.div>
                                    <span className="hidden sm:inline">{category.name}</span>
                                    <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                                </motion.button>
                            )
                        })}
                    </div>
                </div>
            </motion.section>

            {/* Projects Grid */}
            <motion.section 
                className="py-6 md:py-8 bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeFilter}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
                        >
                            {filteredProjects.map((project: Project, index: number) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ 
                                        duration: 0.5, 
                                        delay: index * 0.1,
                                        type: "spring",
                                        bounce: 0.3
                                    }}
                                    whileHover={{ 
                                        y: -4, 
                                        scale: 1.02,
                                        transition: { duration: 0.2 }
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all duration-300 group"
                                >
                                    <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute top-2 right-2">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${getCategoryColor(project.category)}`}>
                                                {project.category}
                                            </span>
                                        </div>
                                        {project.status && (
                                            <div className="absolute top-2 left-2">
                                                <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                                                    project.status === 'completed' 
                                                        ? 'bg-green-100/90 text-green-700'
                                                        : project.status === 'ongoing'
                                                        ? 'bg-amber-100/90 text-amber-700'
                                                        : 'bg-blue-100/90 text-blue-700'
                                                }`}>
                                                    <div className={`w-1.5 h-1.5 rounded-full ${
                                                        project.status === 'completed' 
                                                            ? 'bg-green-500'
                                                            : project.status === 'ongoing'
                                                            ? 'bg-amber-500'
                                                            : 'bg-blue-500'
                                                    }`}></div>
                                                    <span className="capitalize">{project.status}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-4">
                                        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack with Overlapping Icons */}
                                        <div className="mb-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Tech Stack</span>
                                                <span className="text-xs text-gray-400">{project.techStack.length} techs</span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="flex -space-x-1.5">
                                                    {project.techStack.slice(0, 4).map((tech, techIndex) => {
                                                        const TechIcon = techStackIcons[tech] || Code
                                                        return (
                                                            <div
                                                                key={techIndex}
                                                                className="w-6 h-6 sm:w-7 sm:h-7 bg-white rounded-full border-2 border-white shadow-sm flex items-center justify-center text-blue-600 relative"
                                                                style={{ zIndex: 10 - techIndex }}
                                                                title={tech}
                                                            >
                                                                <TechIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                                            </div>
                                                        )
                                                    })}
                                                    {project.techStack.length > 4 && (
                                                        <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gray-100 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-gray-600 text-xs font-medium">
                                                            +{project.techStack.length - 4}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Action Buttons - Fixed Alignment */}
                                        <div className="flex gap-2">
                                            {project.liveUrl && (
                                                <InteractiveHoverButton className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200">
                                                    <div className="flex items-center justify-center gap-1.5">
                                                        <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                                                        <span>Demo</span>
                                                    </div>
                                                </InteractiveHoverButton>
                                            )}
                                            {project.githubUrl && (
                                                <InteractiveHoverButton className="flex-1 border border-gray-300 hover:border-blue-600 hover:bg-blue-50 text-gray-700 hover:text-blue-600 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200">
                                                    <div className="flex items-center justify-center gap-1.5">
                                                        <Github className="w-3.5 h-3.5 flex-shrink-0" />
                                                        <span>Code</span>
                                                    </div>
                                                </InteractiveHoverButton>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-12">
                            <Filter className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">No projects found</h3>
                            <p className="text-gray-500">Try selecting a different category</p>
                        </div>
                    )}
                </div>
            </motion.section>

            {/* CTA Section - Mobile First */}
            <motion.section 
                className="py-6 md:py-8 bg-gray-50"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 text-center"
                    >
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base mb-6 max-w-2xl mx-auto leading-relaxed">
                            Let's discuss your ideas and create something amazing together
                        </p>
                        
                        {/* Mobile: Stack vertically, Desktop: Side by side - Fixed Alignment */}
                        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md sm:max-w-none mx-auto">
                            <InteractiveHoverButton 
                                onClick={() => setIsContactPopupOpen(true)}
                                className="w-full sm:flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
                            >
                                <div className="flex items-center justify-center gap-2">
                                    <MessageCircle className="w-4 h-4 flex-shrink-0" />
                                    <span>Start Project</span>
                                </div>
                            </InteractiveHoverButton>
                            <InteractiveHoverButton 
                                onClick={handleScheduleCall}
                                className="w-full sm:flex-1 border-2 border-blue-600 hover:bg-blue-50 text-blue-600 px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
                            >
                                <div className="flex items-center justify-center gap-2">
                                    <Calendar className="w-4 h-4 flex-shrink-0" />
                                    <span>Schedule Call</span>
                                </div>
                            </InteractiveHoverButton>
                        </div>

                        {/* Trust indicators */}
                        <motion.div 
                            className="flex items-center justify-center space-x-6 mt-6 pt-4 border-t border-gray-100"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            {[
                                { value: "24h", label: "Response" },
                                { value: "100%", label: "Satisfaction" },
                                { value: "50+", label: "Projects" }
                            ].map((item, index) => (
                                <motion.div 
                                    key={item.label}
                                    className="text-center"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ 
                                        duration: 0.5, 
                                        delay: 0.6 + index * 0.1,
                                        type: "spring",
                                        bounce: 0.6
                                    }}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                >
                                    <div className="text-lg font-bold text-blue-600">{item.value}</div>
                                    <div className="text-xs text-gray-500">{item.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Contact Popup */}
            <ContactPopup 
                isOpen={isContactPopupOpen} 
                onClose={() => setIsContactPopupOpen(false)} 
            />
        </div>
    )
}

export default ProjectsPage
