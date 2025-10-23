import React from 'react'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react'

function Footer() {
    const services = [
        'Mobile App Development',
        'Website Development',
        'E-commerce Solutions',
        'Blockchain Development',
        'AI Solutions',
        'Digital Marketing'
    ]

    const companyLinks = [
        'About Us',
        'Our Team',
        'Careers',
        'Contact',
        'Privacy Policy',
        'Terms of Service'
    ]

    return (
        <footer className="bg-black text-white pt-16 pb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <Image
                                src="/image/logo.png"
                                alt="BharatAI Software Logo"
                                width={70}
                                height={50}
                                className="rounded-lg"
                            />
                            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                                BharatAI Software
                            </h3>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            We are a leading software development company specializing in innovative digital solutions.
                            From mobile apps to blockchain technology, we transform ideas into powerful digital experiences.
                        </p>
                        {/* Social Media Icons */}
                        <div className="flex space-x-4">
                            <a
                                href="https://www.facebook.com/aydpm.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="https://www.instagram.com/aydpm.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-yellow-500 transition-all duration-300 text-white"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ankit-yadav-aydpm/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-300 text-white"
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-white">Our Services</h4>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                                    >
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-white">Company</h4>
                        <ul className="space-y-3">
                            {companyLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-white">Contact Us</h4>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <MapPin size={20} className="text-yellow-500 mt-1 flex-shrink-0" />
                                <div className="text-gray-300 text-sm">
                                    <p> Block 51, Bara Bazar Road , ORN, Karol Bagh , Delhi</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone size={20} className="text-blue-500 flex-shrink-0" />
                                <a
                                    href="tel:+91 6202018140"
                                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                                >
                                   +91 6202018140
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail size={20} className="text-purple-500 flex-shrink-0" />
                                <a
                                    href="mailto:founder@aydpm.in"
                                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm"
                                >founder@aydpm.in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Copyright */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-yellow-500 text-sm font-medium">
                            © 2025 BharatAI Software. All rights reserved.
                        </p>
                        {/* <p className="text-gray-400 text-sm">
                            Crafted with ❤️ for innovation and excellence
                        </p> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
