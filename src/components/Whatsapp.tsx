"use client"
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

function Whatsapp() {
    const handleWhatsAppClick = () => {
        window.open('https://wa.me/1234567890', '_blank')
    }

    return (
        <div
            onClick={handleWhatsAppClick}
            className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 group cursor-pointer"
        >
            <div className="absolute -inset-2 sm:-inset-3 rounded-full bg-green-400/20 animate-pulse"></div>
            <div className="absolute -inset-1 sm:-inset-2 rounded-full bg-green-400/30 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
            <button
                className="relative bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-xl transition-all duration-300 transform overflow-hidden"
                style={{ outline: 'none', border: 'none' }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <FaWhatsapp
                    size={24}
                    className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 text-white transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                />
            </button>
        </div>
    )
}

export default Whatsapp