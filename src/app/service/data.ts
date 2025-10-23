import { Smartphone, Globe, ShoppingCart, Blocks, Code, TrendingUp, Bot, Headphones } from "lucide-react"

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
        technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
        pricing: 'Starting from $15,000',
        timeline: '8-16 weeks',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&w=600&q=80'
    },
    {
        id: 'website-development',
        icon: Globe,
        title: 'Website Development',
        shortDesc: 'Modern Web Solutions',
        description: 'Build responsive, fast, and SEO-optimized websites that drive business growth and provide exceptional user experiences.',
        features: [
            'Responsive Web Design',
            'Progressive Web Apps (PWA)',
            'SEO Optimization',
            'Performance Optimization',
            'Content Management Systems',
            'API Integration'
        ],
        technologies: ['React', 'Next.js', 'Vue.js', 'Node.js', 'TypeScript'],
        pricing: 'Starting from $8,000',
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
        technologies: ['Shopify', 'WooCommerce', 'Magento', 'Stripe', 'PayPal'],
        pricing: 'Starting from $12,000',
        timeline: '6-14 weeks',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&w=600&q=80'
    },
    {
        id: 'blockchain-development',
        icon: Blocks,
        title: 'Blockchain Development',
        shortDesc: 'Decentralized Applications',
        description: 'Build secure, transparent, and scalable blockchain solutions including DeFi platforms, NFT marketplaces, and smart contracts.',
        features: [
            'Smart Contract Development',
            'DeFi Platform Creation',
            'NFT Marketplace Development',
            'Cryptocurrency Integration',
            'Blockchain Consulting',
            'Security Auditing'
        ],
        technologies: ['Solidity', 'Web3.js', 'Ethereum', 'Polygon', 'IPFS'],
        pricing: 'Starting from $25,000',
        timeline: '12-20 weeks',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&w=600&q=80'
    },
    {
        id: 'native-app-development',
        icon: Smartphone,
        title: 'Native App Development',
        shortDesc: 'Cross-Platform Apps',
        description: 'Build high-performance native applications that leverage platform-specific features for optimal user experience.',
        features: [
            'iOS App Development (Swift)',
            'Android App Development (Kotlin)',
            'Cross-Platform Solutions',
            'App Store Deployment',
            'Performance Optimization',
            'Platform-Specific Features'
        ],
        technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Xamarin'],
        pricing: 'Starting from $18,000',
        timeline: '10-18 weeks',
        image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&w=600&q=80'
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
        technologies: ['Python', 'Java', '.NET', 'AWS', 'Docker'],
        pricing: 'Starting from $20,000',
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
        technologies: ['Google Analytics', 'Google Ads', 'Facebook Ads', 'SEMrush', 'Mailchimp'],
        pricing: 'Starting from $3,000/month',
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
        technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face'],
        pricing: 'Starting from $30,000',
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