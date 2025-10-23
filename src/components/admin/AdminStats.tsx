'use client'
import { motion } from 'framer-motion'
import { Mail, Calendar, User } from 'lucide-react'
import { Contact } from '@/types'

interface AdminStatsProps {
  contacts: Contact[]
}

const STATS = [
  {
    key: 'total',
    label: 'Total',
    icon: Mail,
    color: 'bg-cyan-50 border-cyan-200',
    iconColor: 'text-cyan-600',
    getValue: (contacts: Contact[]) => contacts.length
  },
  {
    key: 'new',
    label: 'New',
    icon: Calendar,
    color: 'bg-yellow-50 border-yellow-200',
    iconColor: 'text-yellow-600',
    getValue: (contacts: Contact[]) => contacts.filter(c => c.status === 'new').length
  },
  {
    key: 'completed',
    label: 'Completed',
    icon: User,
    color: 'bg-green-50 border-green-200',
    iconColor: 'text-green-600',
    getValue: (contacts: Contact[]) => contacts.filter(c => c.status === 'completed').length
  }
]

export default function AdminStats({ contacts }: AdminStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {STATS.map((stat, index) => (
        <motion.div
          key={stat.key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`${stat.color} border rounded-xl p-4 hover:shadow-md transition-shadow`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-slate-800">{stat.getValue(contacts)}</p>
            </div>
            <stat.icon className={`w-8 h-8 ${stat.iconColor}`} />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
