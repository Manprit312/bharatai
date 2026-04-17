import { Smartphone, Globe, ShoppingCart, Code, TrendingUp, Bot, Headphones, Monitor, Puzzle } from "lucide-react"

const services = [
    {
        id: 'mobile-app-development',
        icon: Smartphone,
        title: 'Mobile App Development',
        shortDesc: 'iOS & Android Apps',
        description: 'Create powerful, native mobile applications that deliver exceptional user experiences across iOS and Android platforms.',
        features: [
            'Native iOS & Android Development',
            'Cross-Platform Solutions (React Native, Flutter)',
            'App Store Optimization',
            'Push Notifications & Analytics',
            'Offline Functionality',
            'Third-party Integrations'
        ],
        technologies: ['Mobile Applications', 'Kotlin', 'Java', 'React Native', 'Flutter', 'Firebase', 'AdMob', 'Google Ads', 'Google Analytics', 'App Stores', 'Play Store', 'Git'],
        pricing: 'Starting from ₹1,20,000',
        timeline: '8-16 weeks',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&w=600&q=80'
    },
    {
        id: 'website-development',
        icon: Globe,
        title: 'Web Apps',
        shortDesc: 'Modern Web Applications',
        description: 'Build responsive, fast, and scalable web applications that support product growth and reliable user workflows.',
        features: [
            'Responsive Product Interfaces',
            'Secure API Integrations',
            'SEO-Friendly Architecture',
            'Performance Optimization',
            'Authentication & Role Flows',
            'Dashboard & Admin Modules'
        ],
        technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS'],
        pricing: 'Starting from ₹35,000',
        timeline: '4-12 weeks',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&w=600&q=80'
    },
    {
        id: 'e-commerce-solutions',
        icon: ShoppingCart,
        title: 'E-commerce Solutions',
        shortDesc: 'Online Store Development',
        description: 'Develop robust online stores with secure payment systems, inventory management, and seamless shopping experiences.',
        features: [
            'Custom E-commerce Platforms',
            'Payment Gateway Integration',
            'Inventory Management',
            'Order Tracking System',
            'Multi-vendor Support',
            'Analytics & Reporting'
        ],
        technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'PayPal'],
        pricing: 'Starting from ₹85,000',
        timeline: '6-14 weeks',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&w=600&q=80'
    },
    {
        id: 'native-app-development',
        icon: Monitor,
        title: 'Desktop Apps',
        shortDesc: 'Windows/macOS Desktop Solutions',
        description: 'Build high-performance desktop applications with stable architecture and polished user experiences.',
        features: [
            'Cross-Platform Desktop Delivery',
            'Electron-Based Development',
            'Offline-First Capabilities',
            'Auto-Update Friendly Setup',
            'Performance Optimization',
            'Platform-Specific Integrations'
        ],
        technologies: ['Electron.js', 'React', 'TypeScript', 'Node.js', 'MongoDB'],
        pricing: 'Starting from ₹80,000',
        timeline: '10-18 weeks',
        image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&w=600&q=80'
    },
    {
        id: 'ionic-apps',
        icon: Smartphone,
        title: 'Ionic Apps',
        shortDesc: 'Hybrid iOS & Android Apps',
        description: 'Create Ionic applications with production-ready architecture, smooth UX, and maintainable codebases.',
        features: [
            'Ionic + Angular/React Stack',
            'Native Plugin Integrations',
            'Cross-Platform Delivery',
            'Store-Ready Build Pipeline',
            'Performance Optimization',
            'Push Notification Setup'
        ],
        technologies: ['Ionic', 'Mobile Applications', 'Kotlin', 'Java', 'React Native', 'Flutter', 'Firebase', 'AdMob', 'Google Ads', 'Google Analytics', 'App Stores', 'Play Store', 'Git'],
        pricing: 'Starting from ₹90,000',
        timeline: '8-14 weeks',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&w=600&q=80'
    },
    {
        id: 'pwa-apps',
        icon: Globe,
        title: 'PWA Apps',
        shortDesc: 'Installable Web Applications',
        description: 'Build progressive web apps that feel like native apps with offline support and installable experiences.',
        features: [
            'Installable Experience',
            'Offline Caching Strategy',
            'Background Sync Readiness',
            'Performance Optimization',
            'Push Notification Foundation',
            'App-Like Navigation'
        ],
        technologies: ['Next.js', 'React', 'TypeScript', 'PWA', 'Firebase'],
        pricing: 'Starting from ₹60,000',
        timeline: '4-8 weeks',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&w=600&q=80'
    },
    {
        id: 'chrome-extensions',
        icon: Puzzle,
        title: 'Chrome Extensions',
        shortDesc: 'Browser Productivity Extensions',
        description: 'Develop Chrome extensions for workflow automation, product utility features, and user productivity improvements.',
        features: [
            'Manifest V3 Development',
            'Browser API Integrations',
            'Extension UI/UX Design',
            'Secure Permission Handling',
            'Store Listing Preparation',
            'Post-Launch Improvements'
        ],
        technologies: ['Web Extensions', 'Chrome Extension', 'TypeScript', 'React', 'Firebase', 'Git', 'Google Analytics', 'Google Ads', 'Search Console'],
        pricing: 'Starting from ₹35,000',
        timeline: '3-6 weeks',
        image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&w=600&q=80'
    },
    {
        id: 'custom-software',
        icon: Code,
        title: 'Custom Software Development',
        shortDesc: 'Tailored Solutions',
        description: 'Develop bespoke software solutions tailored to your specific business needs and requirements.',
        features: [
            'Enterprise Software Solutions',
            'API Development & Integration',
            'Database Design & Optimization',
            'Cloud Migration Services',
            'Legacy System Modernization',
            'Microservices Architecture'
        ],
        technologies: ['Node.js', 'Express.js', 'MongoDB', 'Vercel', 'GitHub Actions'],
        pricing: 'Starting from ₹1,50,000',
        timeline: '10-24 weeks',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&w=600&q=80'
    },
    {
        id: 'digital-marketing',
        icon: TrendingUp,
        title: 'Digital Marketing',
        shortDesc: 'SEO & Social Media',
        description: 'Boost your online presence with comprehensive digital marketing strategies that drive traffic and conversions.',
        features: [
            'Search Engine Optimization (SEO)',
            'Social Media Marketing',
            'Pay-Per-Click (PPC) Advertising',
            'Content Marketing Strategy',
            'Email Marketing Campaigns',
            'Analytics & Performance Tracking'
        ],
        technologies: ['Google Analytics', 'Google Ads', 'Search Console', 'Firebase', 'Vercel', 'Cloudinary', 'OpenAI API', 'Git'],
        pricing: 'Starting from ₹12,000/month',
        timeline: 'Ongoing',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&w=600&q=80'
    },
    {
        id: 'ai-solutions',
        icon: Bot,
        title: 'AI Solutions',
        shortDesc: 'Machine Learning & AI',
        description: 'Implement cutting-edge AI and machine learning solutions to automate processes and gain valuable insights.',
        features: [
            'Machine Learning Models',
            'Natural Language Processing',
            'Computer Vision Solutions',
            'Chatbot Development',
            'Predictive Analytics',
            'AI Integration Services'
        ],
        technologies: ['OpenAI API', 'Node.js', 'Express.js', 'Firebase', 'MongoDB'],
        pricing: 'Starting from ₹1,80,000',
        timeline: '14-26 weeks',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&w=600&q=80'
    },
    // {
    //     id: 'customer-service',
    //     icon: Headphones,
    //     title: 'Customer Service',
    //     shortDesc: '24/7 Support Solutions',
    //     description: 'Comprehensive support and maintenance services to keep your applications running smoothly and securely.',
    //     features: [
    //         '24/7 Technical Support',
    //         'Regular Security Updates',
    //         'Performance Monitoring',
    //         'Bug Fixes & Patches',
    //         'Feature Enhancements',
    //         'Backup & Recovery Services'
    //     ],
    //     technologies: ['Monitoring Tools', 'CI/CD', 'DevOps', 'Cloud Services', 'Security Tools'],
    //     pricing: 'Starting from $2,000/month',
    //     timeline: 'Ongoing',
    //     image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&w=600&q=80'
    // }
]

export default services