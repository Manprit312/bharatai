import { motion, AnimatePresence } from 'framer-motion'
import { Home, RefreshCw, LogOut, Menu, X } from 'lucide-react'
import { useState } from 'react'

interface AdminNavProps {
  router: any
  loadContacts: () => void
  loading: boolean
  handleLogout: () => void
}

export default function AdminNav({ router, loadContacts, loading, handleLogout }: AdminNavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const actionButtons = [
    {
      icon: Home,
      label: 'Home',
      action: () => router.push('/'),
      variant: 'ghost' as const
    },
    {
      icon: RefreshCw,
      label: 'Refresh',
      action: loadContacts,
      variant: 'ghost' as const,
      loading: loading
    },
    {
      icon: LogOut,
      label: 'Logout',
      action: handleLogout,
      variant: 'danger' as const
    }
  ]

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand Section */}
            <div className="flex-shrink-0">
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-slate-800">
                  Admin Panel
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 hidden sm:block">
                  Manage contacts and leads
                </p>
              </div>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              {actionButtons.map((button) => (
                <motion.button
                  key={button.label}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={button.action}
                  disabled={button.loading}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    button.variant === 'danger'
                      ? 'bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 border border-red-200'
                      : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100 border border-slate-200 hover:border-slate-300'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  <button.icon className={`w-4 h-4 ${button.loading ? 'animate-spin' : ''}`} />
                  <span>{button.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-800 hover:bg-slate-100 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-slate-200 bg-white"
            >
              <div className="px-4 py-3 space-y-2">
                {/* Mobile Action Buttons */}
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Actions
                  </p>
                  {actionButtons.map((button) => (
                    <motion.button
                      key={button.label}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        button.action()
                        if (button.label !== 'Refresh') {
                          setIsMobileMenuOpen(false)
                        }
                      }}
                      disabled={button.loading}
                      className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium transition-colors border ${
                        button.variant === 'danger'
                          ? 'text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200'
                          : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50 border-slate-200'
                      } disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      <button.icon className={`w-5 h-5 ${button.loading ? 'animate-spin' : ''}`} />
                      {button.label}
                    </motion.button>
                  ))}
                </div>

                {/* Mobile Footer */}
                <div className="pt-3 border-t border-slate-200">
                  <p className="text-xs text-slate-500 text-center">
                    Manage contacts and leads
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  )
}