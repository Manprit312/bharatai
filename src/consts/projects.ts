import { IconType } from 'react-icons'
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiFirebase,
  SiStripe,
  SiTailwindcss,
  SiElectron,
  SiGooglechrome,
  SiIonic,
  SiKotlin,
  SiGoogleads,
  SiGoogleanalytics,
  SiGoogleplay,
  SiGooglesearchconsole
} from 'react-icons/si'
import { FaJava, FaReact } from 'react-icons/fa'

export interface Project {
  id: string
  title: string
  description: string
  category: 'web' | 'desktop' | 'extension' | 'app'
  image: string
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
  status: 'completed' | 'ongoing'
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'unMix Desktop Application',
    description: 'Desktop application published on Microsoft Store for audio separation workflows with product-focused user experience.',
    category: 'desktop',
    image: '/image/project.png',
    techStack: ['Electron', 'React', 'Node.js', 'Stripe'],
    liveUrl: 'https://apps.microsoft.com/detail/xpdnxlwj897k37?hl=en-US&gl=US',
    status: 'completed'
  },
  {
    id: '2',
    title: 'E-commerce Website',
    description: 'Next.js based e-commerce storefront with product-first UX and conversion-focused layout.',
    category: 'web',
    image: '/image/project.png',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://ecommerce-website-eight-mu.vercel.app/',
    status: 'completed'
  },
  {
    id: '3',
    title: 'Multi Service Booking Platform',
    description: 'Service booking platform for multiple categories with streamlined user flows.',
    category: 'web',
    image: '/image/trans.png',
    techStack: ['Next.js', 'React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://multiservices-alpha.vercel.app/',
    status: 'completed'
  },
  {
    id: '4',
    title: 'TechVoult Website (PWA)',
    description: 'Modern company website with PWA capabilities and responsive service presentation.',
    category: 'web',
    image: '/image/hero.png',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://tech-voult.vercel.app/',
    status: 'completed'
  },
  {
    id: '5',
    title: 'TechVoult Admin Panel',
    description: 'Admin dashboard implementation for operational analytics and content workflows.',
    category: 'web',
    image: '/image/computer.png',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://tech-voult-admin-panel.vercel.app/',
    status: 'completed'
  },
  {
    id: '6',
    title: 'GeneVeda Biosciences',
    description: 'Service and research website with strong information architecture for bioscience offerings.',
    category: 'web',
    image: '/image/computer.jpg',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://geneveda-biosciences.vercel.app/',
    status: 'completed'
  },
  {
    id: '7',
    title: 'E-commerce Admin Dashboard',
    description: 'Admin-focused dashboard for e-commerce operations and internal business workflows.',
    category: 'web',
    image: '/image/project.png',
    techStack: ['Next.js', 'React', 'TypeScript'],
    liveUrl: 'https://ecommerce-admin-dashboard-red-two.vercel.app/',
    status: 'completed'
  },
  {
    id: '8',
    title: 'GameSee: Livestream & Esports',
    description: 'Associated with AppSmartz (Aug 2020 - Present). Mobile livestream platform for gameplay sharing, esports tournaments, pro-gamer interaction, and gaming tips discovery.',
    category: 'app',
    image: '/image/computer.jpg',
    techStack: ['Kotlin', 'Firebase', 'Google Analytics', 'Google Ads', 'Play Store'],
    liveUrl: 'https://play.google.com/store/apps/details?id=tv.gamesee&hl=en_US',
    status: 'ongoing'
  },
  {
    id: '9',
    title: 'Appsmartz Website',
    description: 'Company website delivered with responsive layouts and performance-first frontend implementation.',
    category: 'web',
    image: '/image/hero.png',
    techStack: ['React', 'JavaScript', 'Tailwind'],
    liveUrl: 'https://appsmartz.com/',
    status: 'completed'
  },
  {
    id: '10',
    title: 'Storyboats',
    description: 'React/Next.js website with frontend enhancements and user-friendly content flow.',
    category: 'web',
    image: '/image/team_2.jpg',
    techStack: ['Next.js', 'React', 'TypeScript'],
    liveUrl: 'https://storyboats.com/',
    status: 'completed'
  },
  {
    id: '11',
    title: 'App Screen Recorder Website',
    description: 'Product website for a screen recording tool with clean UI and conversion-oriented layout.',
    category: 'web',
    image: '/image/computer.png',
    techStack: ['React', 'JavaScript', 'Tailwind'],
    liveUrl: 'https://appscreenrecorder.com/',
    status: 'completed'
  },
  {
    id: '12',
    title: 'Screen Recorder Chrome Extension',
    description: 'Chrome extension for screen recording and browser-based productivity workflows.',
    category: 'extension',
    image: '/image/rocket.jpg',
    techStack: ['Chrome Extension', 'React', 'TypeScript'],
    liveUrl: 'https://chromewebstore.google.com/detail/screen-recorder/hniebljpgcogalllopnjokppmgbhaden?hl=en&pli=1',
    status: 'completed'
  },
  {
    id: '13',
    title: 'ASO Tool by Appahead',
    description: 'Chrome extension built for app store optimization workflows and market visibility support.',
    category: 'extension',
    image: '/image/team_3.jpg',
    techStack: ['Chrome Extension', 'JavaScript', 'Analytics'],
    liveUrl: 'https://chromewebstore.google.com/detail/aso-tool-by-appahead/lieclbckelnmnnbgpoabacgheecgamkd',
    status: 'completed'
  },
  {
    id: '14',
    title: 'Vocal Remover - Music Separator',
    description: 'Chrome extension for 2/4 stem audio separation with workflow-focused browser UX.',
    category: 'extension',
    image: '/image/mvp.jpg',
    techStack: ['Chrome Extension', 'Firebase', 'Stripe'],
    liveUrl: 'https://chromewebstore.google.com/detail/vocal-remover-music-separ/bdgbhdnmgjkbpedemhmphgfjabmoagbk',
    status: 'completed'
  },
  {
    id: '15',
    title: 'Screen Recorder',
    description: 'Associated with AppSmartz (Jun 2019 - Present). Mobile screen recorder app with front camera support and live streaming to multiple platforms.',
    category: 'app',
    image: '/image/project.png',
    techStack: ['Kotlin', 'Firebase', 'Google Ads', 'AdMob', 'Play Store'],
    liveUrl: 'https://appscreenrecorder.com/',
    status: 'ongoing'
  },
  {
    id: '16',
    title: 'unMix : Vocal Remover',
    description: 'Associated with AppSmartz (May 2024 - Jan 2025). AI-powered music separator for vocals, instrumental, drums, and bass extraction with high-quality stem results.',
    category: 'app',
    image: '/image/mvp.jpg',
    techStack: ['Kotlin', 'Firebase', 'Google Analytics', 'Project Management'],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.vocalremover.unmix&hl=en_US',
    status: 'completed'
  },
  {
    id: '17',
    title: 'Radio Fm',
    description: 'Associated with AppSmartz (Oct 2017 - Jun 2019). Mobile radio streaming application focused on reliable playback and broad station accessibility.',
    category: 'app',
    image: '/image/hero.png',
    techStack: ['Kotlin', 'Java', 'Firebase', 'Play Store'],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.radio.fmradio&hl=en',
    status: 'completed'
  },
  {
    id: '18',
    title: 'Charged Health (Ionic App)',
    description: 'Health assistant product with AI-powered flows built as an Ionic application.',
    category: 'app',
    image: '/image/project.png',
    techStack: ['Ionic', 'TypeScript', 'Firebase'],
    liveUrl: 'https://charged.health/',
    status: 'completed'
  },
  {
    id: '19',
    title: 'Cloz (Ionic App)',
    description: 'AI-assisted wardrobe management application built with Ionic app architecture.',
    category: 'app',
    image: '/image/mvp.jpg',
    techStack: ['Ionic', 'TypeScript', 'React'],
    liveUrl: 'https://app.cloz.pro/',
    status: 'completed'
  }
]

export const techStackIcons: Record<string, IconType> = {
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'Node.js': SiNodedotjs,
  'TypeScript': SiTypescript,
  'JavaScript': SiJavascript,
  'MongoDB': SiMongodb,
  'Firebase': SiFirebase,
  'Tailwind': SiTailwindcss,
  'Electron': SiElectron,
  'Chrome Extension': SiGooglechrome,
  'Ionic': SiIonic,
  'Kotlin': SiKotlin,
  'Java': FaJava,
  'Stripe': SiStripe,
  'Analytics': FaReact,
  'Google Ads': SiGoogleads,
  'AdMob': SiGoogleads,
  'Google Analytics': SiGoogleanalytics,
  'Play Store': SiGoogleplay,
  'Search Console': SiGooglesearchconsole,
  'Project Management': FaReact
}
