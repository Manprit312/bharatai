import { IconType } from 'react-icons'
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiTailwindcss,
  SiFlutter,
  SiSolidity,
  SiWeb3Dotjs,
  SiEthereum,
  SiStripe,
  SiFramer,
  SiGooglemaps,
  SiSanity
} from 'react-icons/si'
import { FaReact } from 'react-icons/fa'

export interface Project {
  id: string
  title: string
  description: string
  category: 'web' | 'mobile' | 'ecommerce' | 'blockchain'
  image: string
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
  status: 'completed' | 'ongoing' | 'upcoming'
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce platform with advanced features including payment integration, inventory management, and analytics dashboard.',
    category: 'ecommerce',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: 'https://demo-ecommerce.com',
    status: 'completed'
  },
  {
    id: '2',
    title: 'Food Delivery App',
    description: 'Cross-platform mobile app for food delivery with real-time tracking, payment integration, and restaurant management.',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&h=400&fit=crop',
    techStack: ['React Native', 'Firebase', 'Google Maps', 'Stripe'],
    liveUrl: 'https://foodapp-demo.com',
    status: 'completed'
  },
  {
    id: '3',
    title: 'Corporate Website',
    description: 'Professional corporate website with CMS, blog functionality, and contact management system.',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    techStack: ['Next.js', 'TypeScript', 'Tailwind', 'Sanity'],
    liveUrl: 'https://corporate-demo.com',
    status: 'completed'
  },
  {
    id: '4',
    title: 'DeFi Trading Platform',
    description: 'Decentralized finance platform with smart contracts, token staking, and yield farming features.',
    category: 'blockchain',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
    techStack: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
    status: 'ongoing'
  },
  {
    id: '5',
    title: 'Healthcare App',
    description: 'Mobile healthcare application for patient management, telemedicine, and appointment scheduling.',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
    techStack: ['Flutter', 'Firebase', 'Node.js'],
    status: 'ongoing'
  },
  {
    id: '6',
    title: 'Portfolio Website',
    description: 'Modern portfolio website with animations, dark mode, and responsive design.',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    techStack: ['Next.js', 'Framer Motion', 'Tailwind', 'TypeScript'],
    liveUrl: 'https://portfolio-demo.com',
    status: 'completed'
  },
  {
    id: '7',
    title: 'Fashion Store',
    description: 'E-commerce platform for fashion with AR try-on features and personalized recommendations.',
    category: 'ecommerce',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
    techStack: ['React', 'Node.js', 'PostgreSQL'],
    status: 'upcoming'
  },
  {
    id: '8',
    title: 'NFT Marketplace',
    description: 'Blockchain-based NFT marketplace with minting, trading, and auction features.',
    category: 'blockchain',
    image: 'https://images.unsplash.com/photo-1640161704729-cbe966a08476?w=600&h=400&fit=crop',
    techStack: ['Solidity', 'React', 'Ethereum'],
    status: 'upcoming'
  },
  {
    id: '9',
    title: 'Learning Management System',
    description: 'Comprehensive LMS platform with course management, student tracking, and interactive learning modules.',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'],
    liveUrl: 'https://lms-demo.com',
    status: 'completed'
  },
  {
    id: '10',
    title: 'Fitness Tracker App',
    description: 'Mobile fitness application with workout tracking, nutrition monitoring, and social features.',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    techStack: ['React Native', 'Firebase', 'Node.js'],
    status: 'ongoing'
  },
  {
    id: '11',
    title: 'Real Estate Platform',
    description: 'Property listing and management platform with virtual tours and mortgage calculator.',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    techStack: ['React', 'Node.js', 'MongoDB', 'Google Maps'],
    liveUrl: 'https://realestate-demo.com',
    status: 'completed'
  },
  {
    id: '12',
    title: 'Crypto Wallet',
    description: 'Secure cryptocurrency wallet with multi-chain support and DeFi integration.',
    category: 'blockchain',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=400&fit=crop',
    techStack: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
    status: 'ongoing'
  },
  {
    id: '13',
    title: 'Travel Booking Platform',
    description: 'Comprehensive travel booking system with flight, hotel, and package reservations.',
    category: 'ecommerce',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    status: 'upcoming'
  },
  {
    id: '14',
    title: 'Event Management App',
    description: 'Mobile app for event scheduling, ticket booking, and attendee management with QR check-in.',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=600&h=400&fit=crop',
    techStack: ['Flutter', 'Firebase', 'Stripe'],
    status: 'completed'
  },
  {
    id: '15',
    title: 'AI Content Generator',
    description: 'Web app that generates blog posts, SEO text, and images using AI APIs.',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
    techStack: ['Next.js', 'TypeScript', 'Tailwind', 'Sanity'],
    status: 'ongoing'
  },
  {
    id: '16',
    title: 'Music Streaming App',
    description: 'Cross-platform music app with playlists, offline downloads, and AI-based recommendations.',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop',
    techStack: ['React Native', 'Node.js', 'PostgreSQL'],
    status: 'upcoming'
  },
  {
    id: '17',
    title: 'DAO Governance Platform',
    description: 'Blockchain platform for decentralized voting, proposals, and treasury management.',
    category: 'blockchain',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&h=400&fit=crop',
    techStack: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
    status: 'upcoming'
  },
  {
    id: '18',
    title: 'Online Learning Mobile App',
    description: 'Mobile-first LMS app with gamified learning and progress tracking.',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&h=400&fit=crop',
    techStack: ['Flutter', 'Firebase', 'Node.js'],
    status: 'ongoing'
  },
  {
    id: '19',
    title: 'Job Recruitment Platform',
    description: 'Web app for job listings, candidate profiles, and application tracking system.',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop',
    techStack: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind'],
    status: 'completed'
  },
  {
    id: '20',
    title: 'Crowdfunding Platform',
    description: 'Decentralized crowdfunding platform enabling tokenized fundraising campaigns.',
    category: 'blockchain',
    image: 'https://images.unsplash.com/photo-1639149888905-fb39731f2a2b?w=600&h=400&fit=crop',
    techStack: ['Solidity', 'React', 'Ethereum'],
    status: 'ongoing'
  }
]

export const techStackIcons: Record<string, IconType> = {
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'Node.js': SiNodedotjs,
  'TypeScript': SiTypescript,
  'MongoDB': SiMongodb,
  'PostgreSQL': SiPostgresql,
  'Firebase': SiFirebase,
  'Tailwind': SiTailwindcss,
  'React Native': FaReact,
  'Flutter': SiFlutter,
  'Solidity': SiSolidity,
  'Web3.js': SiWeb3Dotjs,
  'Ethereum': SiEthereum,
  'Stripe': SiStripe,
  'Google Maps': SiGooglemaps,
  'Sanity': SiSanity,
  'Framer Motion': SiFramer
}
