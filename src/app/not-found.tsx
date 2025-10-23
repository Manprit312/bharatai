'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Search, Mail } from 'lucide-react'
import Link from 'next/link'
import { useContactPopup } from '@/components/ContactPopup'

export default function NotFound() {
  const { openPopup, ContactPopup } = useContactPopup()

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50/30 via-white to-cyan-50/20 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <div className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-yellow-500 mb-4">
            404
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-yellow-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Oops! Page Not Found
          </h1>
          
          <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Home className="w-5 h-5" />
                Go Home
              </motion.button>
            </Link>

            <Link href="javascript:history.back()">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 border-2 border-yellow-400 hover:bg-yellow-50 text-slate-800 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </motion.button>
            </Link>
          </div>

          {/* Additional Help */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Need Help?
            </h3>
            <p className="text-slate-600 mb-6">
              Can't find what you're looking for? Our team is here to help you navigate our services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/">
                <button className="flex items-center gap-2 bg-yellow-100 hover:bg-yellow-200 text-slate-800 px-4 py-2 rounded-lg font-medium transition-colors">
                  <Search className="w-4 h-4" />
                  Browse Services
                </button>
              </Link>
              
              <button
                onClick={openPopup}
                className="flex items-center gap-2 bg-cyan-100 hover:bg-cyan-200 text-slate-800 px-4 py-2 rounded-lg font-medium transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contact Us
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-yellow-500/10 rounded-full blur-2xl -z-10"></div>
      </div>
      
      <ContactPopup />
    </div>
  )
}
