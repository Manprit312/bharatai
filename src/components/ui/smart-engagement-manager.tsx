'use client'
import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { ContactPopup } from '@/components/ContactPopup'
import { WelcomePopup } from './welcome-popup'

export const SmartEngagementManager: React.FC = () => {
  const pathname = usePathname()
  const [activePopup, setActivePopup] = useState<string | null>(null)
  const [visitTime, setVisitTime] = useState(0)
  const [pageViews, setPageViews] = useState(0)
  const [scrollPercent, setScrollPercent] = useState(0)
  const [shownPopups, setShownPopups] = useState<Set<string>>(new Set())

  const isAdminRoute = useMemo(() => pathname.startsWith('/admin'), [pathname])

  const pageRules: Record<string, { welcome?: number; contact?: number; exit: boolean }> = useMemo(() => ({
    '/': { welcome: 2, contact: 120, exit: true },
    '/about': { contact: 120, exit: true },
    '/service': { contact: 120, exit: true },
    '/technologies': { contact: 120, exit: true },
    '/contact-us': { exit: false },
  }), [])

  const handleScroll = useCallback(() => {
    const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    setScrollPercent(scrolled)
  }, [])

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    const rules = pageRules[pathname as keyof typeof pageRules] || pageRules['/']
    if (e.clientY <= 0 && rules.exit && visitTime > 30 && !shownPopups.has('exit')) {
      setActivePopup('exit')
      setShownPopups(prev => new Set([...prev, 'exit']))
    }
  }, [visitTime, pathname, shownPopups, pageRules])

  useEffect(() => {
    if (isAdminRoute) return
    setVisitTime(0)
    setPageViews(prev => prev + 1)
  }, [pathname, isAdminRoute])

  useEffect(() => {
    if (isAdminRoute) return
    const timer = setInterval(() => {
      if (activePopup !== 'welcome') {
        setVisitTime(prev => prev + 1)
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [activePopup, isAdminRoute])

  useEffect(() => {
    if (isAdminRoute) return
    
    // Throttle scroll events
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledHandleScroll)
  }, [isAdminRoute, handleScroll])

  useEffect(() => {
    if (isAdminRoute) return
    const rules = pageRules[pathname as keyof typeof pageRules] || pageRules['/']

    if (rules.welcome && visitTime === rules.welcome && !shownPopups.has('welcome') && pathname === '/') {
      setActivePopup('welcome')
      setShownPopups(prev => new Set([...prev, 'welcome']))
    }

    if (rules.contact && ((visitTime === rules.contact) || (scrollPercent > 70 && visitTime > 60)) && !shownPopups.has('contact')) {
      setActivePopup('contact')
      setShownPopups(prev => new Set([...prev, 'contact']))
    }

    if (pageViews >= 3 && !shownPopups.has('contact') && visitTime > 30) {
      setActivePopup('contact')
      setShownPopups(prev => new Set([...prev, 'contact']))
    }
  }, [visitTime, scrollPercent, pageViews, pathname, shownPopups, isAdminRoute, pageRules])

  useEffect(() => {
    if (isAdminRoute) return

    document.addEventListener('mouseleave', handleMouseLeave, { passive: true })
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [handleMouseLeave, isAdminRoute])

  const closePopup = useCallback(() => setActivePopup(null), [])

  if (isAdminRoute) return null

  return (
    <>
      <WelcomePopup isOpen={activePopup === 'welcome'} onClose={closePopup} />
      <ContactPopup isOpen={activePopup === 'contact' || activePopup === 'exit'} onClose={closePopup} />
    </>
  )
}
