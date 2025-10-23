'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { TextAnimate } from "@/components/ui/text-animate"
import { Marquee } from "@/components/ui/marquee"
import { RoughNotation } from "react-rough-notation"
import { Star, Quote, Users, Award, ArrowRight } from 'lucide-react'
import { InteractiveHoverButton } from '../ui/interactive-hover-button'
import { useContactPopup } from "@/components/ContactPopup"
import testimonials from '@/consts/testimonials'

function Clients() {
    const { openPopup, ContactPopup } = useContactPopup()
    const stats = [
        { icon: Users, value: "500+", label: "Happy Clients" },
        { icon: Award, value: "98%", label: "Success Rate" },
        { icon: Star, value: "4.9/5", label: "Client Rating" }
    ]

    const TestimonialCard = ({ testimonial, index }: { testimonial: any, index: number }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-100/50 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 hover:border-blue-600/50 transition-all duration-300 w-96 mx-4 flex-shrink-0"
        >
            <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
            </div>

            <Quote className="w-8 h-8 text-blue-600 mb-4" />

            <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.content}"
            </p>

            <div className="flex items-center space-x-4">
                <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-gray-600"
                />
                <div>
                    <h4 className="text-black font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
            </div>
        </motion.div>
    )

    return (
        <section className="py-24 bg-gradient-to-bl from-yellow-50/40 via-white to-cyan-50/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-100/10 via-transparent to-transparent"></div>
            <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-2 text-blue-600 mb-6"
                    >
                        <Star className="w-5 h-5" />
                        <span className="text-sm font-medium tracking-wider uppercase">Client Testimonials</span>
                        <Star className="w-5 h-5" />
                    </motion.div>

                    <div className="flex flex-wrap justify-center items-center text-3xl md:text-5xl font-bold text-black mb-6 gap-2">
                        <TextAnimate
                            animation="slideUp"
                            by="word"
                        >
                            What Our
                        </TextAnimate>
                        <RoughNotation
                            type="underline"
                            show={true}
                            color="#eab308"
                            strokeWidth={3}
                            animationDelay={1000}
                        >
                            <span className="text-black mx-3">Clients Say</span>
                        </RoughNotation>
                        <TextAnimate
                            animation="slideUp"
                            by="word"
                        >
                            About Us
                        </TextAnimate>
                    </div>

                    <TextAnimate
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                        animation="slideUp"
                        by="word"
                    >
                        Don't just take our word for it. Here's what our satisfied clients
                        have to say about working with BharatAI Software.
                    </TextAnimate>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center p-8 bg-white/30 rounded-2xl border border-gray-300"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="p-4 bg-blue-600/20 rounded-xl">
                                    <stat.icon className="w-8 h-8 text-blue-600" />
                                </div>
                            </div>
                            <div className="text-3xl font-bold text-black mb-2">{stat.value}</div>
                            <div className="text-gray-600">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="overflow-hidden">
                    <Marquee className="py-4" pauseOnHover>
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <TestimonialCard
                                key={`${testimonial.name}-${index}`}
                                testimonial={testimonial}
                                index={index}
                            />
                        ))}
                    </Marquee>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-16 bg-white/30 rounded-2xl p-12 border border-gray-300"
                >
                    <TextAnimate
                        className="text-3xl font-bold text-black mb-4"
                        animation="slideUp"
                        by="word"
                    >
                        Join Our Growing List of Satisfied Clients
                    </TextAnimate>

                    <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                        Experience the same level of excellence and dedication that has made
                        our clients successful in their digital transformation journey.
                    </p>

                    <InteractiveHoverButton
                        onClick={openPopup}
                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <span className="flex items-center gap-2">
                            Start Your Project Today
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                        </span>
                    </InteractiveHoverButton>
                    <ContactPopup />
                </motion.div>
            </div>
        </section>
    )
}

export default Clients
