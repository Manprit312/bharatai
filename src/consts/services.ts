import { Code, Cog, Database, Cloud, Brain, TestTube, BarChart3, Layers } from "lucide-react"

const services = [
    {
        icon: '/icons/mobile-app.png',
        title: 'Mobile App Development',
        body: 'Create powerful iOS and Android applications with cutting-edge technology and user-friendly interfaces. From concept to deployment, we ensure smooth performance, scalability, and seamless integration.',
        features: ['Native iOS & Android', 'Cross-Platform Solutions', 'App Store Optimization'],
        url: '#mobile-app'
    },
    {
        icon: '/icons/website.png',
        title: 'Website Development',
        body: 'Build responsive, fast, and SEO-optimized websites that drive business growth and engagement. We focus on modern design, intuitive navigation, and cross-browser compatibility.',
        features: ['Responsive Design', 'SEO Optimization', 'Performance Focused'],
        url: '#website'
    },
    {
        icon: '/icons/ecom.png',
        title: 'E-commerce Solutions',
        body: 'Develop robust online stores with secure payment systems and inventory management. Our solutions include product catalogs, advanced search, and mobile-friendly checkout experiences.',
        features: ['Secure Payments', 'Inventory Management', 'Analytics Dashboard'],
        url: '#ecommerce'
    },
    {
        icon: '/icons/blockchin.png',
        title: 'Blockchain Development',
        body: 'Build decentralized applications and smart contracts with blockchain technology. We specialize in secure, transparent, and scalable blockchain solutions tailored to your industry.',
        features: ['Smart Contracts', 'DeFi Platforms', 'NFT Marketplaces'],
        url: '#blockchain'
    },
    {
        icon: '/icons/native.png',
        title: 'Native App Development',
        body: 'Create high-performance cross-platform applications with a native user experience. Our team ensures apps are optimized for both iOS and Android devices with smooth UI/UX.',
        features: ['Cross-Platform', 'Native Performance', 'Unified Codebase'],
        url: '#native'
    },
    {
        icon: '/icons/digtalm.png',
        title: 'Digital Marketing',
        body: 'Boost your online presence with comprehensive digital marketing strategies. From SEO to social media management, we help you reach your target audience effectively.',
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
        name: 'AI/ML',
        icon: Brain,
        color: 'text-cyan-600',
        bgColor: 'bg-cyan-50',
        borderColor: 'border-cyan-200',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&w=800&q=80',
        description: 'Advanced AI and machine learning frameworks for intelligent applications.'
    },
    {
        id: 'testing',
        name: 'Testing',
        icon: TestTube,
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-200',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&w=800&q=80',
        description: 'Comprehensive testing frameworks to ensure code quality and reliability.'
    },
    {
        id: 'monitoring',
        name: 'Monitoring',
        icon: BarChart3,
        color: 'text-cyan-600',
        bgColor: 'bg-cyan-50',
        borderColor: 'border-cyan-200',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&w=800&q=80',
        description: 'Monitoring and observability tools for system performance tracking.'
    },
    {
        id: 'web3',
        name: 'Web3 & APIs',
        icon: Layers,
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-200',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&w=800&q=80',
        description: 'Web3 technologies and APIs for decentralized applications and blockchain integration.'
    }
]

export default services


export { categories }