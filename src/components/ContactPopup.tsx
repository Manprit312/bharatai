'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, Send, CheckCircle, Rocket, Zap } from 'lucide-react'

import { PopupProps, ContactFormData } from '@/types'

interface ContactPopupProps extends PopupProps {}

export function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  const initialFormData = React.useMemo(() => ({
    firstName: '',
    lastName: '',
    email: '',
    projectType: 'Web Development',
    message: ''
  }), [])
  const [formData, setFormData] = useState(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1000))

    const submission = {
      id: Date.now().toString(),
      ...formData,
      timestamp: new Date().toISOString()
    }

    const existing = JSON.parse(localStorage.getItem('contactSubmissions') || '[]')
    existing.unshift(submission)
    localStorage.setItem('contactSubmissions', JSON.stringify(existing))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData(initialFormData)

    setTimeout(() => {
      setIsSubmitted(false)
      onClose()
    }, 2000)
  }, [formData, initialFormData, onClose])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }, [])

  if (!isOpen || !mounted) return null

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 z-[9999]"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-white rounded-2xl w-full max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-5xl max-h-[95vh] overflow-hidden shadow-2xl relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-yellow-50/20"></div>
          <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-yellow-100/20 rounded-full blur-xl"></div>

          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-6 left-6 text-2xl z-10"
          >
            🚀
          </motion.div>

          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="absolute top-16 right-20 text-xl z-10 hidden sm:block"
          >
            ⭐
          </motion.div>

          <motion.div
            animate={{
              y: [0, -6, 0],
              rotate: [0, 3, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
            className="absolute bottom-20 right-8 text-xl z-10 hidden md:block"
          >
            💫
          </motion.div>

          <div className="flex flex-col lg:flex-row relative z-20">
            <div className="flex-1">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 sm:p-5 text-white relative">
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 p-1.5 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="flex items-center gap-3 mb-2">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Rocket className="w-6 h-6" />
                  </motion.div>
                  <h2 className="text-xl sm:text-2xl font-bold">Start Your Project ✨</h2>
                </div>
                <p className="text-blue-100 text-sm">Tell us about your project and we'll get back to you within 24 hours 🎯</p>
              </div>

              <div className="p-4 sm:p-5 overflow-y-auto max-h-[calc(95vh-120px)] lg:max-h-[calc(95vh-100px)]">
                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-6 sm:py-8"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-3" />
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">Message Sent! 🎉</h3>
                    <p className="text-gray-600">We'll get back to you within 24 hours 📧</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1.5">
                          First Name 👤
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-all text-sm"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1.5">
                          Last Name 📝
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-all text-sm"
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1.5">
                        Email Address 📧
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-all text-sm"
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1.5">
                        Project Type 🚀
                      </label>
                      <div className="relative">
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full pl-3 pr-8 py-2.5 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-all bg-white appearance-none text-sm"
                        >
                          <option>💻 Web Development</option>
                          <option>📱 Mobile App</option>
                          <option>🛒 E-commerce</option>
                          <option>⛓️ Blockchain</option>
                          <option>🎯 Other</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1.5">
                        Project Description 💡
                      </label>
                      <textarea
                        rows={3}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-all resize-none text-sm"
                        placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
                        required
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                    >
                      <span className="flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            >
                              <Zap className="w-4 h-4" />
                            </motion.div>
                            Sending... ⏳
                          </>
                        ) : (
                          <>
                            Send Message 🚀
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </span>
                    </motion.button>
                  </form>
                )}
              </div>
            </div>

            <div className="hidden lg:flex lg:w-80 xl:w-96 bg-gradient-to-br from-cyan-50 to-yellow-50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/30 to-yellow-100/30"></div>
              <div className="relative z-10 p-6 flex flex-col justify-center items-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mb-4"
                >
                  <Image
                    src="/image/rocket.jpg"
                    alt="Launch your project"
                    width={280}
                    height={200}
                    className="object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-center"
                >
                  <h3 className="text-xl font-bold text-black mb-2">Ready to Launch? 🚀</h3>
                  <p className="text-gray-600 text-sm">Let's build something amazing together!</p>

                  <div className="flex justify-center gap-2 mt-4">
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                      className="text-2xl"
                    >
                      ⭐
                    </motion.span>
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                      className="text-2xl"
                    >
                      💫
                    </motion.span>
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                      className="text-2xl"
                    >
                      🎯
                    </motion.span>
                  </div>
                </motion.div>
              </div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-10 right-6 text-3xl"
              >
                🎨
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, -8, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
                className="absolute bottom-16 left-6 text-2xl"
              >
                💻
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  )
}

export function useContactPopup() {
  const [isOpen, setIsOpen] = useState(false)

  const openPopup = () => setIsOpen(true)
  const closePopup = () => setIsOpen(false)

  return {
    isOpen,
    openPopup,
    closePopup,
    ContactPopup: (props: Omit<ContactPopupProps, 'isOpen' | 'onClose'>) => (
      <ContactPopup {...props} isOpen={isOpen} onClose={closePopup} />
    )
  }
}
