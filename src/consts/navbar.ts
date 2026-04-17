import { FaReact, FaNodeJs, FaJava, FaGitAlt } from 'react-icons/fa'
import {
  SiPwa,
  SiFlutter,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiIonic,
  SiExpress,
  SiOpenai,
  SiKotlin,
  SiGoogleads,
  SiGoogleanalytics,
  SiGoogleplay,
  SiGooglesearchconsole,
  SiGooglechrome,
  SiReact,
} from 'react-icons/si'

const services = [
  { name: 'Mobile App Development', icon: '/icons/mobile-app.png', description: 'iOS & Android Apps' },
  { name: 'Website Development', icon: '/icons/website.png', description: 'Modern Web Solutions' },
  { name: 'E-commerce Solutions', icon: '/icons/ecom.png', description: 'Online Store Development' },
  { name: 'Native App Development', icon: '/icons/native.png', description: 'Cross-Platform Apps' },
  { name: 'Digital Marketing', icon: '/icons/digtalm.png', description: 'SEO & Social Media' },
  { name: 'AI Solutions', icon: '/icons/ai.png', description: 'Machine Learning & AI' },
  // { name: 'Customer Service', icon: '/icons/customer-service.png', description: '24/7 Support Solutions' }
]

const technologies = [
  { name: 'React', icon: FaReact, color: 'text-blue-400', description: 'Frontend Library' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-black', description: 'React Framework' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500', description: 'Type Safety' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500', description: 'Server Runtime' },
  { name: 'Express.js', icon: SiExpress, color: 'text-gray-700', description: 'API Framework' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600', description: 'NoSQL Database' },
  { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500', description: 'Backend Service' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400', description: 'Styling' },
  { name: 'React Native', icon: SiReact, color: 'text-cyan-400', description: 'Mobile Apps' },
  { name: 'Flutter', icon: SiFlutter, color: 'text-blue-300', description: 'Cross-Platform SDK' },
  { name: 'Ionic', icon: SiIonic, color: 'text-blue-400', description: 'Hybrid App Framework' },
  { name: 'Kotlin', icon: SiKotlin, color: 'text-purple-500', description: 'Android Development' },
  { name: 'Java', icon: FaJava, color: 'text-red-600', description: 'Android Development' },
  { name: 'PWA', icon: SiPwa, color: 'text-purple-400', description: 'Progressive Web Apps' },
  { name: 'Web Extensions', icon: SiGooglechrome, color: 'text-green-500', description: 'Browser Extensions' },
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-500', description: 'Version Control' },
  { name: 'Google Analytics', icon: SiGoogleanalytics, color: 'text-orange-500', description: 'Analytics' },
  { name: 'Google Ads', icon: SiGoogleads, color: 'text-blue-500', description: 'Paid Campaigns' },
  { name: 'AdMob', icon: SiGoogleads, color: 'text-green-500', description: 'In-App Ads' },
  { name: 'Search Console', icon: SiGooglesearchconsole, color: 'text-emerald-600', description: 'Search Performance' },
  { name: 'Play Store', icon: SiGoogleplay, color: 'text-cyan-500', description: 'Android Publishing' },
  { name: 'OpenAI API', icon: SiOpenai, color: 'text-emerald-500', description: 'AI Integrations' },
]


export { services, technologies };
