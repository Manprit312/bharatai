import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJava, FaGitAlt, FaMobileAlt, FaStore } from "react-icons/fa"
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFlutter,
  SiPwa,
  SiFramer,
  SiMongodb,
  SiFirebase,
  SiGithubactions,
  SiVercel,
  SiCloudinary,
  SiJavascript,
  SiIonic,
  SiReact,
  SiElectron,
  SiOpenai,
  SiStripe,
  SiPaypal,
  SiExpress,
  SiKotlin,
  SiGoogleads,
  SiGoogleanalytics,
  SiGoogleplay,
  SiGooglesearchconsole,
  SiGooglechrome,
} from "react-icons/si"

const TechStack = [
  // Frontend and product UI
  { name: 'React', icon: FaReact, color: 'text-blue-400', description: 'Frontend Library' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-black', description: 'React Framework' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400', description: 'Core Language' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500', description: 'Type Safety' },
  { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500', description: 'Markup' },
  { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500', description: 'Styling' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400', description: 'Utility-First CSS' },
  { name: 'Framer Motion', icon: SiFramer, color: 'text-pink-500', description: 'Animations' },
  { name: 'PWA', icon: SiPwa, color: 'text-purple-400', description: 'Progressive Web Apps' },

  // Mobile, desktop, and extension ecosystem
  { name: 'Mobile Applications', icon: FaMobileAlt, color: 'text-slate-700', description: 'End-to-End App Delivery' },
  { name: 'Ionic', icon: SiIonic, color: 'text-blue-400', description: 'Hybrid App Framework' },
  { name: 'React Native', icon: SiReact, color: 'text-cyan-400', description: 'Native Mobile Apps' },
  { name: 'Flutter', icon: SiFlutter, color: 'text-blue-300', description: 'Cross-Platform SDK' },
  { name: 'Kotlin', icon: SiKotlin, color: 'text-purple-500', description: 'Android Development' },
  { name: 'Java', icon: FaJava, color: 'text-red-600', description: 'Android and Backend Language' },
  { name: 'Web Extensions', icon: SiGooglechrome, color: 'text-green-500', description: 'Browser Extensions' },
  { name: 'Electron.js', icon: SiElectron, color: 'text-sky-400', description: 'Desktop Apps' },

  // Backend and APIs
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500', description: 'Server Runtime' },
  { name: 'Express.js', icon: SiExpress, color: 'text-gray-700', description: 'API Framework' },
  { name: 'OpenAI API', icon: SiOpenai, color: 'text-emerald-500', description: 'AI Integrations' },

  // Data and BaaS
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600', description: 'NoSQL Database' },
  { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500', description: 'Realtime Backend' },

  // Deployment and payments
  { name: 'Vercel', icon: SiVercel, color: 'text-black', description: 'Deployment Platform' },
  { name: 'GitHub Actions', icon: SiGithubactions, color: 'text-blue-500', description: 'CI/CD Automation' },
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-500', description: 'Version Control' },
  { name: 'Cloudinary', icon: SiCloudinary, color: 'text-blue-500', description: 'Media Management' },
  { name: 'Google Analytics', icon: SiGoogleanalytics, color: 'text-orange-500', description: 'Traffic and Behavior Analytics' },
  { name: 'Google Ads', icon: SiGoogleads, color: 'text-blue-500', description: 'Paid Growth Campaigns' },
  { name: 'AdMob', icon: SiGoogleads, color: 'text-green-500', description: 'In-App Ads Monetization' },
  { name: 'Search Console', icon: SiGooglesearchconsole, color: 'text-emerald-600', description: 'Search Performance Monitoring' },
  { name: 'App Stores', icon: FaStore, color: 'text-indigo-500', description: 'App Distribution and Optimization' },
  { name: 'Play Store', icon: SiGoogleplay, color: 'text-cyan-500', description: 'Android Publishing' },
  { name: 'Stripe', icon: SiStripe, color: 'text-indigo-500', description: 'Payment Processing' },
  { name: 'PayPal', icon: SiPaypal, color: 'text-blue-600', description: 'Global Payments' },
]


const categorizedTech = {
  frontend: TechStack.filter((tech) =>
    ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion', 'PWA'].includes(tech.name)
  ),
  backend: TechStack.filter((tech) => ['Node.js', 'Express.js'].includes(tech.name)),
  mobile: TechStack.filter((tech) => ['Mobile Applications', 'Ionic', 'React Native', 'Flutter', 'Kotlin', 'Java', 'App Stores', 'Play Store'].includes(tech.name)),
  desktop: TechStack.filter((tech) => ['Electron.js'].includes(tech.name)),
  database: TechStack.filter((tech) => ['MongoDB', 'Firebase'].includes(tech.name)),
  cloud: TechStack.filter((tech) => ['Vercel', 'GitHub Actions', 'Git', 'Cloudinary', 'Google Analytics', 'Google Ads', 'Search Console', 'AdMob'].includes(tech.name)),
  ai: TechStack.filter((tech) => ['OpenAI API'].includes(tech.name)),
  integrations: TechStack.filter((tech) => ['Stripe', 'PayPal', 'Web Extensions'].includes(tech.name)),
}

export default TechStack

export { categorizedTech }