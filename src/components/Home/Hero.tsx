'use client'
import React, { useState, useEffect, useCallback, useMemo, memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { ArrowRight, Sparkles, Zap } from 'lucide-react'
import { useRouter } from 'next/navigation'
import TechStack from '@/consts/techstack'

const TextAnimate = dynamic(() => import("@/components/ui/text-animate").then(mod => ({ default: mod.TextAnimate })), {
    loading: () => <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-black leading-tight animate-pulse bg-gray-200 rounded h-12 w-96"></div>,
    ssr: false
})
const InteractiveHoverButton = dynamic(() => import("@/components/ui/interactive-hover-button").then(mod => ({ default: mod.InteractiveHoverButton })), {
    ssr: false
})
const AvatarCircles = dynamic(() => import("@/components/ui/avatar-circles").then(mod => ({ default: mod.AvatarCircles })), {
    ssr: false
})
const RoughNotation = dynamic(() => import("react-rough-notation").then(mod => ({ default: mod.RoughNotation })), {
    ssr: false
})
const Marquee = dynamic(() => import("@/components/ui/marquee").then(mod => ({ default: mod.Marquee })), {
    ssr: false
})

const TEXTS = [
    'DIGITAL EXPERIENCES',
    'INNOVATIVE SOLUTIONS',
    'POWERFUL WEBSITES',
    'MOBILE APPLICATIONS',
    'SCALABLE PLATFORMS'
] as const

const clients = [
    { imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice", profileUrl: "" },
    { imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob", profileUrl: "" },
    { imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie", profileUrl: "" },
    { imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Diana", profileUrl: "" },
    { imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Eva", profileUrl: "" }
]

const statsData = [
    { value: "500+", label: "Projects Delivered", color: "text-blue-600", bgColor: "bg-blue-50" },
    { value: "98%", label: "Client Satisfaction", color: "text-yellow-500", bgColor: "bg-yellow-50" },
    { value: "24/7", label: "Support Available", color: "text-purple-600", bgColor: "bg-purple-50" }
]

const BackgroundElements = memo(() => (
    <>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/30 via-white to-yellow-50/20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2563eb20_1px,transparent_1px),linear-gradient(to_bottom,#eab30820_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    </>
))
BackgroundElements.displayName = 'BackgroundElements'

const FloatingParticles = memo(({ shouldReduceMotion }: { shouldReduceMotion: boolean }) => {
    const particles = useMemo(() =>
        [...Array(shouldReduceMotion ? 6 : 12)].map((_, i) => ({
            id: i,
            className: i % 4 === 0 ? 'bg-blue-600' :
                i % 4 === 1 ? 'bg-cyan-500' :
                    i % 4 === 2 ? 'bg-yellow-500' : 'bg-purple-600',
            left: `${10 + (i * 7)}%`,
            top: `${20 + (i * 6)}%`,
        })), [shouldReduceMotion]
    )

    return (
        <>
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    animate={shouldReduceMotion ? {} : {
                        y: [0, -100, 0],
                        x: [0, Math.sin(particle.id) * 50, 0],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 6 + particle.id * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: particle.id * 0.3
                    }}
                    className={`absolute w-1 h-1 md:w-2 md:h-2 rounded-full ${particle.className}`}
                    style={{
                        left: particle.left,
                        top: particle.top,
                    }}
                />
            ))}
        </>
    )
})
FloatingParticles.displayName = 'FloatingParticles'

const AnimatedShapes = memo(({ shouldReduceMotion }: { shouldReduceMotion: boolean }) => {
    if (shouldReduceMotion) return null

    return (
        <>
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/4 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-blue-600/20 rounded-full blur-3xl"
            />

            <motion.div
                animate={{
                    x: [0, -80, 0],
                    y: [0, 60, 0],
                    scale: [1, 0.8, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-yellow-500/20 rounded-full blur-3xl"
            />

            <motion.div
                animate={{
                    x: [0, -60, 0],
                    y: [0, -80, 0],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-1/2 right-1/3 w-32 h-32 md:w-48 md:h-48 bg-cyan-500/15 rounded-full blur-2xl"
            />

            <motion.div
                animate={{
                    x: [0, 70, 0],
                    y: [0, 40, 0],
                    scale: [1, 1.5, 1],
                }}
                transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute bottom-1/3 left-1/3 w-40 h-40 md:w-56 md:h-56 bg-purple-600/15 rounded-full blur-2xl"
            />

            <motion.div
                animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-blue-600/30 rounded-lg"
            />

            <motion.div
                animate={{
                    rotate: [360, 0],
                    x: [0, 30, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-1/3 right-1/6 w-12 h-12 border-2 border-yellow-500/30 rounded-full"
            />
        </>
    )
})
AnimatedShapes.displayName = 'AnimatedShapes'


const TechStackMarquee = memo(({ isDesktop }: { isDesktop: boolean }) => {
    const techStackItems = useMemo(() =>
        TechStack.map((tech, index) => {
            const IconComponent = tech.icon
            return (
                <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.02 }}
                    whileHover={{
                        scale: 1.05,
                        y: -5,
                        transition: { duration: isDesktop ? 0.1 : 0.2 }
                    }}
                    className={isDesktop
                        ? "flex items-center justify-center px-2 py-2 bg-white border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-lg transition-all duration-300 mx-2 flex-shrink-0"
                        : "flex flex-col items-center p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-lg transition-all duration-300 w-40 mx-2 flex-shrink-0"
                    }
                >
                    <div className={`${isDesktop ? 'rounded-md' : 'p-3 rounded-lg bg-yellow-100 mb-3'} ${tech.color}`}>
                        <IconComponent className="w-6 h-6" />
                    </div>
                    {!isDesktop && (
                        <>
                            <h3 className="text-black font-semibold text-sm mb-1 text-center">{tech.name}</h3>
                            <p className="text-gray-600 text-xs text-center">{tech.description}</p>
                        </>
                    )}
                </motion.div>
            )
        }), [isDesktop])

    return (
        <div className="relative">
            <Marquee className="py-3" reverse={false} speed={50}>
                {techStackItems}
            </Marquee>
        </div>
    )
})
TechStackMarquee.displayName = 'TechStackMarquee'

const StatsGrid = memo(() => {
    return (
        <div className="grid grid-cols-3 gap-4 md:gap-6 pt-8 mt-6">
            {statsData.map((stat, index) => (
                <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: 1.6 + index * 0.2,
                        type: "spring",
                        bounce: 0.6
                    }}
                    whileHover={{
                        scale: 1.05,
                        y: -5,
                        transition: { duration: 0.2 }
                    }}
                    className={`text-center p-4 rounded-xl ${stat.bgColor} border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300`}
                >
                    <motion.div
                        className={`text-xl md:text-2xl lg:text-3xl font-bold ${stat.color} mb-1`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.8 + index * 0.2, type: "spring", bounce: 0.8 }}
                    >
                        {stat.value}
                    </motion.div>
                    <div className="text-gray-600 text-xs md:text-sm font-medium">
                        {stat.label}
                    </div>
                </motion.div>
            ))}
        </div>
    )
})
StatsGrid.displayName = 'StatsGrid'


const HeroImageSection = memo(() => {
    return (
        <div className="relative z-10">
            <div className="relative">
                <div className="rounded-3xl overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-yellow-500/20 rounded-3xl"></div>
                    <img
                        src="/image/computer.png"
                        alt="Premium Software Development"
                        width={600}
                        height={600}
                        loading="eager"
                        decoding="async"
                        className="w-full h-full object-cover shadow-2xl border-2 brightness-110 border-white/30 rounded-3xl transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10 rounded-3xl"></div>

                    {/* Glowing border effect */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-600/50 via-cyan-500/50 to-yellow-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -m-0.5 -z-10 blur-sm"></div>
                </div>
            </div>
        </div>
    )
})
HeroImageSection.displayName = 'HeroImageSection'


const FloatingBadges = memo(() => {
    return (
        <>
            <motion.div
                animate={{
                    y: [0, -12, 0],
                    rotateY: [0, 180, 360],
                    rotateX: [0, 12, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 p-3 rounded-xl shadow-2xl z-20"
                style={{
                    background: 'linear-gradient(145deg, rgba(37, 99, 235, 0.95), rgba(37, 99, 235, 0.8))',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 14px 28px -8px rgba(37, 99, 235, 0.3)',
                    transform: 'perspective(1000px)',
                }}
            >
                <Zap className="w-5 h-5 text-white" />
            </motion.div>

            <motion.div
                animate={{
                    y: [0, 12, 0],
                    rotateY: [360, 180, 0],
                    rotateZ: [0, 10, 0],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 p-3 z-50 rounded-xl shadow-2xl"
                style={{
                    background: 'linear-gradient(145deg, rgba(234, 179, 8, 0.95), rgba(234, 179, 8, 0.8))',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 14px 28px -8px rgba(234, 179, 8, 0.3)',
                    transform: 'perspective(1000px)',
                }}
            >
                <Sparkles className="w-5 h-5 text-white" />
            </motion.div>

            <motion.div
                animate={{
                    x: [0, 10, 0],
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                className="absolute top-1/4 -left-4 px-3 py-2 rounded-full shadow-lg z-20"
                style={{
                    background: 'linear-gradient(145deg, rgba(6, 182, 212, 0.9), rgba(6, 182, 212, 0.7))',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
            >
                <span className="text-white text-xs font-bold">React</span>
            </motion.div>

            <motion.div
                animate={{
                    x: [0, -10, 0],
                    y: [0, 10, 0],
                    rotate: [0, -5, 0],
                }}
                transition={{ duration: 7, repeat: Infinity, delay: 2 }}
                className="absolute bottom-1/4 -right-4 px-3 py-2 rounded-full shadow-lg z-20"
                style={{
                    background: 'linear-gradient(145deg, rgba(168, 85, 247, 0.9), rgba(168, 85, 247, 0.7))',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
            >
                <span className="text-white text-xs font-bold">Next.js</span>
            </motion.div>
        </>
    )
})
FloatingBadges.displayName = 'FloatingBadges'


const ClientShowcase = memo(() => {
    return (
        <div className="flex items-center gap-4 pt-6">
            <AvatarCircles
                numPeople={495}
                avatarUrls={clients}
            />
            <div className="text-sm text-gray-600">
                <div className="font-semibold text-gray-800">Trusted by 500+ clients</div>
                <div className="text-xs">Join successful businesses worldwide</div>
            </div>
        </div>
    )
})
ClientShowcase.displayName = 'ClientShowcase'

function Hero() {
    const [currentText, setCurrentText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const router = useRouter()
    const shouldReduceMotion = useReducedMotion()

    const updateText = useCallback(() => {
        const current = TEXTS[currentIndex]

        if (isDeleting) {
            setCurrentText(prev => current.substring(0, prev.length - 1))
        } else {
            setCurrentText(prev => current.substring(0, prev.length + 1))
        }
    }, [currentIndex, isDeleting])

    useEffect(() => {
        const current = TEXTS[currentIndex]
        let timeoutId: NodeJS.Timeout

        if (!isDeleting && currentText === current) {
            timeoutId = setTimeout(() => setIsDeleting(true), 2000)
        } else if (isDeleting && currentText === '') {
            setIsDeleting(false)
            setCurrentIndex(prev => (prev + 1) % TEXTS.length)
        } else {
            if (isDeleting) {
                timeoutId = setTimeout(updateText, 50)
            } else {
                timeoutId = setTimeout(updateText, 100)
            }
        }

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
        }
    }, [currentText, isDeleting, currentIndex, updateText])

    const displayText = useMemo(() => currentText, [currentText])

    const handleContactClick = useCallback(() => {
        router.push('/contact-us')
    }, [router])

    const handlePortfolioClick = useCallback(() => {
        router.push('/projects')
    }, [router])

    return (
        <div className="min-h-screen flex items-center bg-white py-12 px-4 lg:px-6 relative overflow-hidden">
            <BackgroundElements />
            <AnimatedShapes shouldReduceMotion={!!shouldReduceMotion} />
            <FloatingParticles shouldReduceMotion={!!shouldReduceMotion} />

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center py-2 border-dashed mt-16 md:mt-16 mb-4 justify-center gap-2 text-black border-2 border-blue-600 bg-yellow-50 rounded-full px-3 w-fit mx-auto"
                >
                    <Sparkles className="w-4 h-4" />
                    <span className="text-xs md:text-sm font-medium tracking-wider uppercase">Premium Software Solutions</span>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                    {/* Left Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 order-2 lg:order-1 mt-3 md:mt-0"
                    >
                        <div className="space-y-4 md:space-y-6">
                            <TextAnimate
                                className="text-2xl md:text-4xl lg:text-5xl font-bold text-black leading-tight"
                                animation="slideUp"
                                by="character"
                            >
                                We Transform IDEAS INTO
                            </TextAnimate>

                            <div className="flex items-center">
                                <RoughNotation
                                    type="highlight"
                                    show={true}
                                    color="#eab308"
                                    animationDelay={1000}
                                    animationDuration={1500}
                                >
                                    <span className="text-2xl md:text-4xl lg:text-5xl font-bold text-black">
                                        {displayText}
                                        <span className="animate-pulse text-blue-600">|</span>
                                    </span>
                                </RoughNotation>
                            </div>

                            <TextAnimate
                                className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl"
                                animation="slideUp"
                                by="word"
                            >
                                Empowering businesses with cutting-edge technology solutions.
                                From mobile apps to enterprise platforms, we deliver excellence
                                that drives growth and innovation.
                            </TextAnimate>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.75 }}
                            className="lg:hidden overflow-hidden"
                        >
                            <TechStackMarquee isDesktop={false} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <InteractiveHoverButton
                                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                                onClick={handleContactClick}
                            >
                                <span className="flex items-center gap-2">
                                    Start Your Project
                                    <ArrowRight className="w-5 h-5" />
                                </span>
                            </InteractiveHoverButton>

                            <InteractiveHoverButton
                                onClick={handlePortfolioClick}
                                className="border-2 border-cyan-500 hover:border-cyan-600 hover:bg-cyan-50 text-black px-8 py-4 rounded-xl font-semibold text-base bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                <span className="flex items-center gap-2">
                                    <Zap className="w-5 h-5 text-cyan-500" />
                                    View Portfolio
                                </span>
                            </InteractiveHoverButton>
                        </motion.div>

                        {/* Client Showcase */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                        >
                            <ClientShowcase />
                        </motion.div>

                        {/* Technology Icons Marquee */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.3 }}
                            className="hidden lg:block overflow-hidden"
                        >
                            <TechStackMarquee isDesktop={true} />
                        </motion.div>

                        {/* Enhanced Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4 }}
                        >
                            <StatsGrid />
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative order-1 lg:order-2"
                    >
                        <HeroImageSection />
                        <FloatingBadges />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default memo(Hero)
