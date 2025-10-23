'use client'
import { motion } from 'framer-motion'
import { Eye, Edit, Trash2, MoreVertical, User, Mail, Phone, Briefcase, DollarSign, Calendar, Tag } from 'lucide-react'

import { Contact, ContactStatus } from '@/types'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ContactTableProps {
  contacts: Contact[]
  onView: (contact: Contact) => void
  onEdit: (contact: Contact) => void
  onDelete: (id: string) => void
}

const STATUS_COLORS: Record<ContactStatus, string> = {
  new: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  contacted: 'bg-blue-100 text-blue-800 border-blue-200',
  'in-progress': 'bg-orange-100 text-orange-800 border-orange-200',
  completed: 'bg-green-100 text-green-800 border-green-200',
  cancelled: 'bg-red-100 text-red-800 border-red-200'
}

export default function ContactTable({ contacts, onView, onEdit, onDelete }: ContactTableProps) {

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white rounded-xl border border-slate-200 overflow-hidden"
      >
        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left p-4 font-medium text-slate-700 min-w-[200px]">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Contact
                  </div>
                </th>
                <th className="text-left p-4 font-medium text-slate-700 min-w-[120px]">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    Project
                  </div>
                </th>
                <th className="text-left p-4 font-medium text-slate-700 min-w-[100px]">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Budget
                  </div>
                </th>
                <th className="text-left p-4 font-medium text-slate-700 min-w-[120px]">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    Status
                  </div>
                </th>
                <th className="text-left p-4 font-medium text-slate-700 min-w-[100px]">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Date
                  </div>
                </th>
                <th className="text-center p-4 font-medium text-slate-700 w-[80px]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <motion.tr
                  key={contact._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-slate-100 hover:bg-slate-50"
                >
                  <td className="p-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-slate-400" />
                        <p className="font-medium text-slate-800">{contact.name}</p>
                      </div>
                      <div className="flex items-center gap-2 ml-6">
                        <Mail className="w-3 h-3 text-slate-400" />
                        <p className="text-sm text-slate-600">{contact.email}</p>
                      </div>
                      {contact.phone && (
                        <div className="flex items-center gap-2 ml-6">
                          <Phone className="w-3 h-3 text-slate-400" />
                          <p className="text-sm text-slate-600">{contact.phone}</p>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-slate-400" />
                      <span className="text-sm text-slate-700">{contact.projectType || 'N/A'}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-slate-400" />
                      <span className="text-sm text-slate-700">{contact.budget || 'N/A'}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium border ${STATUS_COLORS[contact.status]}`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${STATUS_COLORS[contact.status].replace('bg-', 'bg-').replace('100', '500')}`}></div>
                      <span className="capitalize">{contact.status.replace('-', ' ')}</span>
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span className="text-sm text-slate-600">{formatDate(contact.createdAt)}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex justify-center">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="p-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-40">
                          <DropdownMenuItem onClick={() => onView(contact)}>
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => onEdit(contact)}>
                            <Edit className="w-4 h-4 mr-2" />
                            Edit Contact
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => onDelete(contact._id)}
                            className="text-red-600 focus:text-red-600"
                          >
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-3 p-3">
          {contacts.map((contact, index) => (
            <motion.div
              key={contact._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="border border-slate-200 rounded-lg p-3 bg-white"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <User className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    <h3 className="font-medium text-slate-800 truncate">{contact.name}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600 mb-1">
                    <Mail className="w-3 h-3 text-slate-400 flex-shrink-0" />
                    <span className="truncate">{contact.email}</span>
                  </div>
                  {contact.phone && (
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <Phone className="w-3 h-3 text-slate-400 flex-shrink-0" />
                      <span>{contact.phone}</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 ml-2 flex-shrink-0">
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${STATUS_COLORS[contact.status]}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${STATUS_COLORS[contact.status].replace('bg-', 'bg-').replace('100', '500')}`}></div>
                    <span className="capitalize">{contact.status.replace('-', ' ')}</span>
                  </span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="p-1 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40">
                      <DropdownMenuItem onClick={() => onView(contact)}>
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => onEdit(contact)}>
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Contact
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={() => onDelete(contact._id)}
                        className="text-red-600 focus:text-red-600"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-1 text-xs">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-3 h-3 text-slate-400 flex-shrink-0" />
                  <span className="text-slate-600">Project:</span>
                  <span className="text-slate-800 truncate">{contact.projectType || 'N/A'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-3 h-3 text-slate-400 flex-shrink-0" />
                  <span className="text-slate-600">Budget:</span>
                  <span className="text-slate-800 truncate">{contact.budget || 'N/A'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-3 h-3 text-slate-400 flex-shrink-0" />
                  <span className="text-slate-600">Date:</span>
                  <span className="text-slate-800">{formatDate(contact.createdAt)}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
