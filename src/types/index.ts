export interface Contact {
  _id: string
  name: string
  email: string
  phone?: string
  projectType?: string
  budget?: string
  message: string
  status: 'new' | 'contacted' | 'in-progress' | 'completed' | 'cancelled'
  createdAt: string
  updatedAt: string
}

export type ContactStatus = Contact['status']

export interface ApiResponse<T = any> {
  success: boolean
  message?: string
  data?: T
  error?: string
}

export interface ContactsResponse extends ApiResponse {
  contacts: Contact[]
}

export interface FilterOptions {
  status: string
  project: string
  date: string
  search: string
}

export interface SortOptions {
  field: 'newest' | 'name' | 'status' | 'budget'
  order: 'asc' | 'desc'
}

export interface PopupProps {
  isOpen: boolean
  onClose: () => void
}

export interface ServicePopupProps extends PopupProps {
  projectType: string
}

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  projectType?: string
  message: string
  budget?: string
}

// Auth types
export interface AuthCredentials {
  username: string
  password: string
}

export interface AuthResponse extends ApiResponse {
  token: string
}
