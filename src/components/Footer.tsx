import React from 'react'
import Image from 'next/image'
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

function Footer() {
    const quickLinks = [
        { label: 'Home', href: '/' },
        { label: 'Hire Me', href: '/hire-freelance-developer' },
        { label: 'About', href: '/about' },
        { label: 'Projects', href: '/projects' },
        { label: 'Technologies', href: '/technologies' },
        { label: 'Contact', href: '/contact-us' },
    ]

    const featuredWork = [
        { label: 'unMix Desktop App', href: 'https://apps.microsoft.com/detail/xpdnxlwj897k37?hl=en-US&gl=US' },
        { label: 'GameSee.gg', href: 'https://gamesee.gg/' },
        { label: 'Charged Health', href: 'https://charged.health/' },
        { label: 'Cloz App', href: 'https://app.cloz.pro/' },
    ]

    return (
        <footer className="bg-slate-950 text-slate-200 pt-14 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                    <div className="space-y-5">
                        <div className="flex items-center space-x-3">
                            
                            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                Manprit Dev
                            </h3>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            I build scalable SaaS products, production-ready web apps, and extension-based tools
                            with a focus on clean architecture, performance, and user experience.
                        </p>
                        <div className="flex space-x-3">
                            <a
                                href="https://github.com/Manprit312"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                                aria-label="GitHub profile"
                            >
                                <Github size={18} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/manprit-k-b164a01b0/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors duration-300 text-white"
                                aria-label="LinkedIn profile"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href="mailto:mnprt312@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300 text-white"
                                aria-label="Email Manprit"
                            >
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-slate-300 hover:text-blue-300 transition-colors duration-200 text-sm"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-white">Featured Work</h4>
                        <ul className="space-y-3">
                            {featuredWork.map((work) => (
                                <li key={work.href}>
                                    <a
                                        href={work.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-300 hover:text-cyan-300 transition-colors duration-200 text-sm"
                                    >
                                        {work.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-white">Contact</h4>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <MapPin size={20} className="text-yellow-400 mt-1 flex-shrink-0" />
                                <div className="text-slate-300 text-sm">
                                    <p>Mohali, Punjab, India</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone size={20} className="text-blue-400 flex-shrink-0" />
                                <a
                                    href="tel:+918264874761"
                                    className="text-slate-300 hover:text-blue-300 transition-colors duration-200 text-sm"
                                >
                                   +91 82648 74761
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail size={20} className="text-purple-400 flex-shrink-0" />
                                <a
                                    href="mailto:mnprt312@gmail.com"
                                    className="text-slate-300 hover:text-purple-300 transition-colors duration-200 text-sm"
                                >mnprt312@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                        <p className="text-sm text-slate-400">
                            © 2026 Manprit Dev. Built with focus and consistency.
                        </p>
                        <p className="text-xs text-slate-500">
                            Open to full-time roles, freelance, and product collaborations.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
