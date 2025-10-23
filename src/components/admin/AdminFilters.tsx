'use client'
import { motion } from 'framer-motion'
import { Search, ArrowUpDown, Filter, Briefcase, Tag } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface AdminFiltersProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  statusFilter: string
  setStatusFilter: (status: string) => void
  projectFilter: string
  setProjectFilter: (project: string) => void
  sortBy: string
  setSortBy: (sort: string) => void
}

const FILTERS = {
  status: [
    { value: 'all', label: 'All Status', icon: '📋' },
    { value: 'new', label: 'New', icon: '🟡' },
    { value: 'contacted', label: 'Contacted', icon: '🔵' },
    { value: 'in-progress', label: 'In Progress', icon: '🟠' },
    { value: 'completed', label: 'Completed', icon: '🟢' },
    { value: 'cancelled', label: 'Cancelled', icon: '🔴' }
  ],
  project: [
    { value: 'all', label: 'All Projects', icon: '🎯' },
    { value: 'web-dev', label: 'Web Development', icon: '💻' },
    { value: 'mobile-app', label: 'Mobile App', icon: '📱' },
    { value: 'ecommerce', label: 'E-commerce', icon: '🛒' },
    { value: 'blockchain', label: 'Blockchain', icon: '⛓️' },
    { value: 'other', label: 'Other', icon: '🎯' }
  ]
}

const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest First', icon: '📅' },
  { value: 'oldest', label: 'Oldest First', icon: '📆' },
  { value: 'name', label: 'Name A-Z', icon: '🔤' },
  { value: 'status', label: 'Status', icon: '🏷️' }
]

export default function AdminFilters({
  searchTerm, setSearchTerm, statusFilter, setStatusFilter,
  projectFilter, setProjectFilter, sortBy, setSortBy
}: AdminFiltersProps) {
  
  const clearFilters = () => {
    setSearchTerm('')
    setStatusFilter('all')
    setProjectFilter('all')
    setSortBy('newest')
  }

  const hasActiveFilters = searchTerm || statusFilter !== 'all' || projectFilter !== 'all' || sortBy !== 'newest'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl border border-slate-200 shadow-sm mb-6 overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-slate-600" />
          <h3 className="font-semibold text-slate-800">Filters & Search</h3>
        </div>
        {hasActiveFilters && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={clearFilters}
            className="text-sm text-cyan-600 hover:text-cyan-700 font-medium bg-cyan-50 hover:bg-cyan-100 px-3 py-1.5 rounded-lg transition-all duration-200"
          >
            Clear All
          </motion.button>
        )}
      </div>

      {/* Filters Grid */}
      <div className="p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search Input */}
          <div className="flex-1 lg:max-w-md">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Search Contacts
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                placeholder="Search by name, email, or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 text-sm placeholder-slate-400 transition-all duration-200 bg-slate-50 hover:bg-white focus:bg-white"
              />
            </div>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Status Filter */}
            <div className="min-w-[140px]">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Status
              </label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="h-12 bg-slate-50 hover:bg-white border-slate-300 focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-200">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-slate-500" />
                    <SelectValue placeholder="All Status" />
                  </div>
                </SelectTrigger>
                <SelectContent className="max-h-48 overflow-y-auto">
                  {FILTERS.status.map(option => (
                    <SelectItem 
                      key={option.value} 
                      value={option.value} 
                      className="text-sm hover:bg-slate-50 focus:bg-slate-50 px-2 py-1.5"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">{option.icon}</span>
                        <span>{option.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Project Filter */}
            <div className="min-w-[140px]">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Project Type
              </label>
              <Select value={projectFilter} onValueChange={setProjectFilter}>
                <SelectTrigger className="h-12 bg-slate-50 hover:bg-white border-slate-300 focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-200">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-slate-500" />
                    <SelectValue placeholder="All Projects" />
                  </div>
                </SelectTrigger>
                <SelectContent className="max-h-48 overflow-y-auto">
                  {FILTERS.project.map(option => (
                    <SelectItem 
                      key={option.value} 
                      value={option.value} 
                      className="text-sm hover:bg-slate-50 focus:bg-slate-50 px-2 py-1.5"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">{option.icon}</span>
                        <span>{option.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
                </Select>
            </div>
          </div>
        </div>

        {/* Sort Options - Full Width Row */}
        <div className="mt-4 pt-4 border-t border-slate-200">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Sort By
          </label>
          <div className="max-w-xs">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="h-12 bg-slate-50 hover:bg-white border-slate-300 focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-200">
                <div className="flex items-center gap-2">
                  <ArrowUpDown className="w-4 h-4 text-slate-500" />
                  <SelectValue placeholder="Sort contacts" />
                </div>
              </SelectTrigger>
              <SelectContent className="max-h-48 overflow-y-auto">
                {SORT_OPTIONS.map(option => (
                  <SelectItem 
                    key={option.value} 
                    value={option.value} 
                    className="text-sm hover:bg-slate-50 focus:bg-slate-50 px-2 py-1.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-base">{option.icon}</span>
                      <span>{option.label}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-4 pt-4 border-t border-slate-200"
          >
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-slate-600 font-medium">Active filters:</span>
              
              {searchTerm && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-1 bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full text-xs font-medium"
                >
                  🔍 Search: "{searchTerm}"
                </motion.span>
              )}
              
              {statusFilter !== 'all' && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                >
                  🏷️ Status: {FILTERS.status.find(s => s.value === statusFilter)?.label}
                </motion.span>
              )}
              
              {projectFilter !== 'all' && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-1 bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium"
                >
                  💼 Project: {FILTERS.project.find(p => p.value === projectFilter)?.label}
                </motion.span>
              )}
              
              {sortBy !== 'newest' && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium"
                >
                  📊 Sort: {SORT_OPTIONS.find(s => s.value === sortBy)?.label}
                </motion.span>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}