'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Calendar, FolderOpen, Mail, User, Layers, Code2, Briefcase, Handshake } from 'lucide-react'
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { useScheduleCall } from '@/hooks/useScheduleCall'

const navLinks = [
  { href: '/', label: 'Home', icon: Layers },
  { href: '/about', label: 'About', icon: User },
  { href: '/service', label: 'Services', icon: Briefcase },
  { href: '/hire-freelance-developer', label: 'Hire Me', icon: Handshake },
  { href: '/projects', label: 'Projects', icon: FolderOpen },
  { href: '/technologies', label: 'Tech', icon: Code2 },
  { href: '/contact-us', label: 'Contact', icon: Mail },
] as const

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scheduleCall } = useScheduleCall()

  const handleScheduleCall = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(10, 0, 0, 0)

    const endTime = new Date(tomorrow)
    endTime.setHours(11, 0, 0, 0)

    scheduleCall({
      title: 'Portfolio Discussion - Manprit Dev',
      description: 'Let\'s discuss your product idea, technical scope, and execution plan.',
      startTime: tomorrow.toISOString(),
      endTime: endTime.toISOString(),
    })
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-md' : 'bg-white/70 backdrop-blur-lg'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <a href="/" className="group flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-md ring-1 ring-blue-200 transition-transform duration-300 group-hover:scale-105">
                <span className="text-sm font-extrabold tracking-wide">MK</span>
                <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-white" />
              </div>
              <div className="leading-tight">
                <p className="text-base font-bold text-slate-900">Manprit Dev</p>
                <p className="text-[11px] font-medium tracking-wide text-blue-600">SaaS Product Engineer</p>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

                     <div className="flex items-center gap-3">
              <InteractiveHoverButton
                onClick={handleScheduleCall}
                className="hidden lg:flex bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold"
              >
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Book a Call
                </span>
              </InteractiveHoverButton>

              <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 240 }}
              className="fixed top-0 right-0 w-80 max-w-[90vw] h-full bg-white border-l border-gray-200 z-50 lg:hidden"
            >
              <div className="p-6 pt-20 flex flex-col h-full">
                <nav className="space-y-3">
                  {navLinks.map((link) => {
                    const Icon = link.icon
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                        <span className="font-medium">{link.label}</span>
                      </a>
                    )
                  })}
                </nav>

                <div className="mt-auto pt-6">
                  <InteractiveHoverButton
                    onClick={handleScheduleCall}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Book a Call
                    </span>
                  </InteractiveHoverButton>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
