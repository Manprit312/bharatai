import { Code, Cog, Database, Cloud, Brain, Smartphone, Monitor, CreditCard } from "lucide-react"

const services = [
    {
        icon: '/icons/mobile-app.png',
        title: 'Mobile App Development',
        body: 'Create powerful iOS and Android applications with user-friendly interfaces. From concept to deployment, each app is built for smooth performance and scalability.',
        features: ['Native iOS & Android', 'Cross-Platform Solutions', 'App Store Optimization'],
        url: '#mobile-app'
    },
    {
        icon: '/icons/website.png',
        title: 'Web Apps',
        body: 'Build modern, fast, and scalable web applications with strong UX and maintainable code architecture.',
        features: ['Responsive UX', 'Secure APIs', 'Performance Focused'],
        url: '#web-apps'
    },
    {
        icon: '/icons/ecom.png',
        title: 'E-commerce Solutions',
        body: 'Develop robust online stores with secure payment systems and inventory management. Deliverables include product catalogs, advanced search, and mobile-friendly checkout.',
        features: ['Secure Payments', 'Inventory Management', 'Analytics Dashboard'],
        url: '#ecommerce'
    },
    {
        icon: '/icons/native.png',
        title: 'Desktop Apps',
        body: 'Build desktop software with reliable performance and intuitive experiences for business and power users.',
        features: ['Electron-Based Apps', 'Cross-Platform Builds', 'Offline Support'],
        url: '#desktop-apps'
    },
    {
        icon: '/icons/native.png',
        title: 'Ionic Apps',
        body: 'Develop robust Ionic applications for Android and iOS with reusable components and production-ready architecture.',
        features: ['Ionic + TypeScript', 'Mobile-First UX', 'Fast Iteration'],
        url: '#ionic-apps'
    },
    {
        icon: '/icons/website.png',
        title: 'PWA Apps',
        body: 'Convert products into installable progressive web apps with offline support and app-like behavior.',
        features: ['Installable Web App', 'Offline Caching', 'Push-Ready Foundation'],
        url: '#pwa-apps'
    },
    {
        icon: '/icons/ai.png',
        title: 'Chrome Extensions',
        body: 'Design and build Chrome extensions that automate workflows and extend product functionality in-browser.',
        features: ['Manifest V3', 'Extension UI/UX', 'API Integrations'],
        url: '#chrome-extensions'
    },
    {
        icon: '/icons/digtalm.png',
        title: 'Digital Marketing',
        body: 'Boost your online presence with practical digital marketing strategy, from SEO foundations to social media execution.',
        features: ['SEO & SEM', 'Social Media', 'Content Strategy'],
        url: '#digital-marketing'
    }
]


const categories = [
    {
        id: 'frontend',
        name: 'Frontend',
        icon: Code,
        color: 'text-cyan-600',
        bgColor: 'bg-cyan-50',
        borderColor: 'border-cyan-200',
        image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&w=800&q=80',
        description: 'Modern frontend technologies for creating stunning user interfaces and experiences.'
    },
    {
        id: 'backend',
        name: 'Backend',
        icon: Cog,
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-200',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&w=800&q=80',
        description: 'Robust backend technologies for building scalable and secure server-side applications.'
    },
    {
        id: 'mobile',
        name: 'Mobile Apps',
        icon: Smartphone,
        color: 'text-cyan-600',
        bgColor: 'bg-cyan-50',
        borderColor: 'border-cyan-200',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&w=800&q=80',
        description: 'Cross-platform and hybrid mobile technologies used to ship polished app experiences.'
    },
    {
        id: 'desktop',
        name: 'Desktop Apps',
        icon: Monitor,
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-200',
        image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&w=800&q=80',
        description: 'Desktop product stack for building reliable apps with modern web technologies.'
    },
    {
        id: 'database',
        name: 'Databases',
        icon: Database,
        color: 'text-cyan-600',
        bgColor: 'bg-cyan-50',
        borderColor: 'border-cyan-200',
        image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&w=800&q=80',
        description: 'Reliable database solutions for efficient data storage and management.'
    },
    {
        id: 'cloud',
        name: 'Cloud & DevOps',
        icon: Cloud,
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-200',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&w=800&q=80',
        description: 'Cloud platforms and DevOps tools for deployment, scaling, and automation.'
    },
    {
        id: 'ai',
        name: 'AI Integrations',
        icon: Brain,
        color: 'text-cyan-600',
        bgColor: 'bg-cyan-50',
        borderColor: 'border-cyan-200',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&w=800&q=80',
        description: 'Practical AI integrations for smart product workflows and automation features.'
    },
    {
        id: 'integrations',
        name: 'Payments & Integrations',
        icon: CreditCard,
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-200',
        image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?ixlib=rb-4.0.3&w=800&q=80',
        description: 'Production integrations for payments, subscriptions, and third-party product workflows.'
    }
]

export default services


export { categories }