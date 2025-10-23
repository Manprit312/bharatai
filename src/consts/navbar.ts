import { FaReact, FaVuejs, FaNodeJs, FaLaravel, FaPython, FaAws, FaDocker } from 'react-icons/fa'
import { SiPwa, SiFlutter, SiNextdotjs, SiTypescript, SiKubernetes, SiGraphql } from 'react-icons/si'

const services = [
  { name: 'Mobile App Development', icon: '/icons/mobile-app.png', description: 'iOS & Android Apps' },
  { name: 'Website Development', icon: '/icons/website.png', description: 'Modern Web Solutions' },
  { name: 'E-commerce Solutions', icon: '/icons/ecom.png', description: 'Online Store Development' },
  { name: 'Blockchain Development', icon: '/icons/blockchin.png', description: 'Decentralized Applications' },
  { name: 'Native App Development', icon: '/icons/native.png', description: 'Cross-Platform Apps' },
  { name: 'Digital Marketing', icon: '/icons/digtalm.png', description: 'SEO & Social Media' },
  { name: 'AI Solutions', icon: '/icons/ai.png', description: 'Machine Learning & AI' },
  // { name: 'Customer Service', icon: '/icons/customer-service.png', description: '24/7 Support Solutions' }
]

const technologies = [
  { name: 'React', icon: FaReact, color: 'text-blue-400', description: 'Frontend Library' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white', description: 'React Framework' },
  { name: 'Vue.js', icon: FaVuejs, color: 'text-green-400', description: 'Progressive Framework' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500', description: 'Type Safety' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500', description: 'Server Runtime' },
  { name: 'Python', icon: FaPython, color: 'text-yellow-400', description: 'Backend Language' },
  { name: 'Laravel', icon: FaLaravel, color: 'text-red-500', description: 'PHP Framework' },
  { name: 'Flutter', icon: SiFlutter, color: 'text-blue-300', description: 'Cross-Platform SDK' },
  { name: 'PWA', icon: SiPwa, color: 'text-purple-400', description: 'Progressive Web Apps' },
  { name: 'GraphQL', icon: SiGraphql, color: 'text-pink-400', description: 'Query Language' },
  { name: 'AWS', icon: FaAws, color: 'text-orange-400', description: 'Cloud Platform' },
  { name: 'Docker', icon: FaDocker, color: 'text-blue-500', description: 'Containerization' },
  { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-400', description: 'Orchestration' },
]


export { services, technologies };
