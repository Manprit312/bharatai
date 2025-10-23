export interface ContactSubmission {
  id: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  projectType: string
  message: string
  timestamp: string
  status: 'new' | 'contacted' | 'completed'
  company?: string
}

export const demoSubmissions: ContactSubmission[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@techcorp.com',
    phone: '+1 (555) 123-4567',
    projectType: 'Web Development',
    message: 'We need a modern e-commerce website with payment integration and inventory management. Looking for a complete solution.',
    timestamp: '2024-01-15T10:30:00Z',
    status: 'new',
    company: 'TechCorp Inc.'
  },
  {
    id: '2',
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.j@startup.io',
    phone: '+1 (555) 987-6543',
    projectType: 'Mobile App',
    message: 'Looking to develop a cross-platform mobile app for our food delivery service. Need iOS and Android versions.',
    timestamp: '2024-01-14T14:20:00Z',
    status: 'contacted',
    company: 'FoodieApp Startup'
  },
  {
    id: '3',
    firstName: 'Michael',
    lastName: 'Chen',
    email: 'mchen@digitalagency.com',
    phone: '+1 (555) 456-7890',
    projectType: 'E-commerce',
    message: 'Client needs a Shopify store redesign with custom features and third-party integrations.',
    timestamp: '2024-01-13T09:15:00Z',
    status: 'completed',
    company: 'Digital Marketing Agency'
  },
  {
    id: '4',
    firstName: 'Emily',
    lastName: 'Rodriguez',
    email: 'emily.r@fintech.com',
    phone: '+1 (555) 321-0987',
    projectType: 'Blockchain',
    message: 'We want to create a DeFi platform with smart contracts and token staking functionality.',
    timestamp: '2024-01-12T16:45:00Z',
    status: 'new',
    company: 'FinTech Solutions'
  },
  {
    id: '5',
    firstName: 'David',
    lastName: 'Wilson',
    email: 'dwilson@consulting.biz',
    phone: '+1 (555) 654-3210',
    projectType: 'Web Development',
    message: 'Need a professional website for our consulting firm with client portal and booking system.',
    timestamp: '2024-01-11T11:30:00Z',
    status: 'contacted',
    company: 'Wilson Consulting'
  },
  {
    id: '6',
    firstName: 'Lisa',
    lastName: 'Anderson',
    email: 'lisa@healthtech.org',
    phone: '+1 (555) 789-0123',
    projectType: 'Mobile App',
    message: 'Healthcare app for patient management and telemedicine consultations. HIPAA compliance required.',
    timestamp: '2024-01-10T13:20:00Z',
    status: 'new',
    company: 'HealthTech Innovations'
  },
  {
    id: '7',
    firstName: 'Robert',
    lastName: 'Taylor',
    email: 'rtaylor@ecommerce.shop',
    phone: '+1 (555) 234-5678',
    projectType: 'E-commerce',
    message: 'Multi-vendor marketplace platform with advanced analytics and seller dashboard.',
    timestamp: '2024-01-09T08:45:00Z',
    status: 'completed',
    company: 'E-commerce Solutions'
  },
  {
    id: '8',
    firstName: 'Amanda',
    lastName: 'Brown',
    email: 'amanda@nonprofit.org',
    phone: '+1 (555) 876-5432',
    projectType: 'Web Development',
    message: 'Simple website for our nonprofit organization with donation system and volunteer registration.',
    timestamp: '2024-01-08T15:10:00Z',
    status: 'contacted',
    company: 'Community Helpers NPO'
  },
  {
    id: '9',
    firstName: 'James',
    lastName: 'Garcia',
    email: 'jgarcia@realestate.com',
    phone: '+1 (555) 345-6789',
    projectType: 'Web Development',
    message: 'Real estate platform with property listings, virtual tours, and agent management system.',
    timestamp: '2024-01-07T12:00:00Z',
    status: 'new',
    company: 'Premier Real Estate'
  },
  {
    id: '10',
    firstName: 'Jessica',
    lastName: 'Martinez',
    email: 'jessica@edtech.edu',
    phone: '+1 (555) 567-8901',
    projectType: 'Mobile App',
    message: 'Educational app for kids with interactive learning modules and progress tracking for parents.',
    timestamp: '2024-01-06T10:25:00Z',
    status: 'contacted',
    company: 'EduTech Learning'
  },
  {
    id: '11',
    firstName: 'Mark',
    lastName: 'Thompson',
    email: 'mark@fitness.app',
    phone: '+1 (555) 111-2222',
    projectType: 'Mobile App',
    message: 'Fitness tracking app with workout plans, nutrition tracking, and social features.',
    timestamp: '2024-01-05T09:30:00Z',
    status: 'new',
    company: 'FitLife Technologies'
  },
  {
    id: '12',
    firstName: 'Rachel',
    lastName: 'Davis',
    email: 'rachel@fashion.store',
    phone: '+1 (555) 333-4444',
    projectType: 'E-commerce',
    message: 'Fashion e-commerce platform with AR try-on features and personalized recommendations.',
    timestamp: '2024-01-04T14:15:00Z',
    status: 'contacted',
    company: 'StyleHub Fashion'
  }
]
