'use client'
import { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { LogOut, Home, RefreshCw, ChevronLeft, ChevronRight, X, Save } from 'lucide-react'
import { toast } from 'sonner'
import api from '@/lib/axios'
import { Contact, ContactStatus } from '@/types'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import AdminStats from '@/components/admin/AdminStats'
import AdminFilters from '@/components/admin/AdminFilters'
import ContactTable from '@/components/admin/ContactTable'
import AdminNav from '@/components/admin/Navbar'

export default function AdminPanel() {
  const router = useRouter()
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [projectFilter, setProjectFilter] = useState('all')
  const [sortBy, setSortBy] = useState('newest')
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [editingContact, setEditingContact] = useState<Contact | null>(null)
  const [editForm, setEditForm] = useState({ budget: '', status: 'new' as ContactStatus })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  useEffect(() => {
    loadContacts()
  }, [])

  const loadContacts = async () => {
    try {
      setLoading(true)
      const response = await api.get('/admin/contacts')
      if (response.data.success) {
        setContacts(response.data.contacts)
        toast.success(`Contacts refreshed successfully! Found ${response.data.contacts.length} contacts. 🔄`)
      }
    } catch (error) {
      console.error('Failed to load contacts:', error)
      toast.error('Failed to load contacts. Please try again later. ❌')
    } finally {
      setLoading(false)
    }
  }

  const filteredContacts = useMemo(() => {
    return contacts.filter(contact => {
      const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesStatus = statusFilter === 'all' || contact.status === statusFilter
      const matchesProject = projectFilter === 'all' || contact.projectType === projectFilter

      return matchesSearch && matchesStatus && matchesProject
    }).sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name)
        case 'status':
          return a.status.localeCompare(b.status)
        default:
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      }
    })
  }, [contacts, searchTerm, statusFilter, projectFilter, sortBy])

  const paginatedContacts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return filteredContacts.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredContacts, currentPage, itemsPerPage])

  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage)

  const handleLogout = () => {
    localStorage.removeItem('admin-token')
    document.cookie = 'admin-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    router.push('/auth')
  }

  const handleView = (contact: Contact) => {
    setSelectedContact(contact)
  }

  const handleEdit = (contact: Contact) => {
    setEditingContact(contact)
    setEditForm({
      budget: contact.budget || '',
      status: contact.status
    })
  }

  const handleSaveEdit = async () => {
    if (!editingContact) return

    try {
      setIsSubmitting(true)
      const response = await api.put(`/admin/contacts/${editingContact._id}`, editForm)

      if (response.data.success) {
        setContacts(contacts.map(c =>
          c._id === editingContact._id
            ? { ...c, ...editForm, updatedAt: new Date().toISOString() }
            : c
        ))
        setEditingContact(null)
        toast.success(`Contact "${editingContact.name}" has been updated successfully! ✅`)
      }
    } catch (error) {
      console.error('Failed to update contact:', error)
      toast.error('Failed to update contact. Please try again later. ❌')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDelete = async (id: string) => {
    const contactToDelete = contacts.find(c => c._id === id)
    const contactName = contactToDelete?.name || 'Contact'
    
    if (!confirm(`Are you sure you want to delete "${contactName}"? This action cannot be undone.`)) return

    try {
      await api.delete(`/admin/contacts/${id}`)
      setContacts(contacts.filter(c => c._id !== id))
      toast.success(`Contact "${contactName}" has been deleted successfully! 🗑️`)
    } catch (error) {
      console.error('Failed to delete contact:', error)
      toast.error('Failed to delete contact. Please try again later. ❌')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-2 border-cyan-600 border-t-transparent rounded-full"
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <AdminNav 
        router={router}
        handleLogout={handleLogout}
        loadContacts={loadContacts}
        loading={loading}
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-4">
        <AdminStats contacts={contacts} />
        <AdminFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          projectFilter={projectFilter}
          setProjectFilter={setProjectFilter}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <ContactTable
          contacts={paginatedContacts}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6"
        >
          <div className="flex items-center gap-4">
            <p className="text-sm text-slate-600">
              Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredContacts.length)} of {filteredContacts.length} contacts
            </p>

            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-600">Show:</span>
              <Select value={itemsPerPage.toString()} onValueChange={(value) => {
                setItemsPerPage(Number(value))
                setCurrentPage(1)
              }}>
                <SelectTrigger className="w-20 h-8">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {totalPages > 1 && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-2 border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="px-3 py-2 bg-cyan-600 text-white rounded-lg text-sm">
                {currentPage} of {totalPages}
              </span>

              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="p-2 border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </motion.div>
      </main>

      {/* Contact Detail Modal */}
      {selectedContact && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedContact(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4">Contact Details</h2>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-slate-600">Name</label>
                <p className="text-slate-800">{selectedContact.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-600">Email</label>
                <p className="text-slate-800">{selectedContact.email}</p>
              </div>
              {selectedContact.phone && (
                <div>
                  <label className="text-sm font-medium text-slate-600">Phone</label>
                  <p className="text-slate-800">{selectedContact.phone}</p>
                </div>
              )}
              <div>
                <label className="text-sm font-medium text-slate-600">Project Type</label>
                <p className="text-slate-800">{selectedContact.projectType || 'N/A'}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-600">Budget</label>
                <p className="text-slate-800">{selectedContact.budget || 'N/A'}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-600">Message</label>
                <p className="text-slate-800">{selectedContact.message}</p>
              </div>
            </div>
            <button
              onClick={() => setSelectedContact(null)}
              className="mt-4 w-full py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Edit Modal */}
      {editingContact && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setEditingContact(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl p-6 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Edit Contact</h2>
              <button
                onClick={() => setEditingContact(null)}
                className="p-1 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Budget</label>
                <input
                  type="text"
                  value={editForm.budget}
                  onChange={(e) => setEditForm({ ...editForm, budget: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter budget"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Status</label>
                <Select value={editForm.status} onValueChange={(value: ContactStatus) => setEditForm({ ...editForm, status: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="contacted">Contacted</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setEditingContact(null)}
                className="flex-1 py-2 px-4 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEdit}
                disabled={isSubmitting}
                className="flex-1 py-2 px-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    Save
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
