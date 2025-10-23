'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, CheckCircle, Rocket, Zap, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import axios from 'axios'
import { ServicePopupProps } from '@/types'


export function ServicePopup({ isOpen, onClose, projectType }: ServicePopupProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await axios.post('/api/public', {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        projectType: projectType,        
      })
      toast.success("Request sent successfully! We'll get back to you soon. 📧")
      
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => {
        setIsSubmitted(false)
        onClose()
      }, 1000)
      
    } catch (error) {
      console.error('Error submitting form:', error)
      toast.error('Failed to send request. Please try again later. ❌')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleClose = () => {
    if (!isSubmitting) {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 z-[500]"
        onClick={handleClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-white rounded-2xl w-full max-w-md max-h-[95vh] overflow-hidden shadow-2xl relative"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/30 via-white to-yellow-50/20"></div>

          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-6 left-6 text-2xl z-10"
          >
            🚀
          </motion.div>

          <div className="relative z-20">
            <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-5 text-white relative">
              <button
                onClick={handleClose}
                disabled={isSubmitting}
                className="absolute top-3 right-3 p-1.5 hover:bg-white/20 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
                <h2 className="text-2xl font-bold">Get {projectType} ✨</h2>
              </div>
              <p className="text-cyan-100 text-sm">Tell us about your {projectType.toLowerCase()} needs 🎯</p>
            </div>

            <div className="p-5 overflow-y-auto max-h-[calc(95vh-120px)]">
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-8"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 360, 0] 
                    }}
                    transition={{ duration: 1.5 }}
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-3" />
                  </motion.div>
                  <motion.h3 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold text-slate-800 mb-2"
                  >
                    Request Sent! 🎉
                  </motion.h3>
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-slate-600"
                  >
                    Check your toast notification! 📧
                  </motion.p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-slate-700 text-sm font-medium mb-1.5">
                      Full Name 🧑
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02, borderColor: "#06b6d4" }}
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 text-sm font-medium mb-1.5">
                      Email Address 📧
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02, borderColor: "#06b6d4" }}
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 text-sm font-medium mb-1.5">
                      Project Requirements 💡
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.02, borderColor: "#06b6d4" }}
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all resize-none text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder={`Tell us about your ${projectType.toLowerCase()} requirements, timeline, and any specific features you need...`}
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-sm ${
                      isSubmitting 
                        ? 'bg-cyan-400 cursor-not-allowed opacity-80' 
                        : 'bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700'
                    } text-white`}
                  >
                    <motion.span 
                      className="flex items-center justify-center gap-2"
                      key={isSubmitting ? 'loading' : 'default'}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending... ⏳
                        </>
                      ) : (
                        <>
                          Send Request 🚀
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </motion.span>
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}