import { FaReact, FaVuejs, FaNodeJs, FaPython, FaLaravel, FaJava, FaPhp, FaAws, FaDocker, FaGitAlt } from "react-icons/fa"
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFlutter, SiPwa, SiFramer, SiStorybook, SiDjango, SiSpring, SiRust, SiGo, SiCplusplus, SiC, SiMongodb, SiPostgresql, SiRedis, SiFirebase, SiSupabase, SiGraphql, SiSolidity, SiEthereum, SiKubernetes, SiVercel, SiHeroku, SiNetlify, SiAnsible, SiTerraform, SiJenkins, SiGithubactions, SiGitlab, SiTensorflow, SiPytorch, SiNumpy, SiPandas, SiJupyter, SiJest, SiMocha, SiCypress, SiPrometheus, SiGrafana } from "react-icons/si"

const TechStack = [
    // --- Frontend ---
    { name: 'React', icon: FaReact, color: 'text-blue-400', description: 'Frontend Library' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-black', description: 'React Framework' },
    { name: 'Vue.js', icon: FaVuejs, color: 'text-green-400', description: 'Progressive Framework' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500', description: 'Type Safety' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400', description: 'CSS Framework' },
    { name: 'Flutter', icon: SiFlutter, color: 'text-blue-300', description: 'Cross-Platform SDK' },
    { name: 'PWA', icon: SiPwa, color: 'text-purple-400', description: 'Progressive Web Apps' },
    { name: 'Framer Motion', icon: SiFramer, color: 'text-pink-500', description: 'Animations' },
    { name: 'Storybook', icon: SiStorybook, color: 'text-red-400', description: 'UI Component Testing' },

    // --- Backend ---
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500', description: 'Server Runtime' },
    { name: 'Python', icon: FaPython, color: 'text-yellow-400', description: 'Backend Language' },
    { name: 'Django', icon: SiDjango, color: 'text-green-700', description: 'Python Framework' },
    { name: 'Laravel', icon: FaLaravel, color: 'text-red-500', description: 'PHP Framework' },
    { name: 'Spring Boot', icon: SiSpring, color: 'text-green-600', description: 'Java Framework' },
    { name: 'Java', icon: FaJava, color: 'text-red-600', description: 'Enterprise Language' },
    { name: 'PHP', icon: FaPhp, color: 'text-indigo-500', description: 'Backend Language' },
    { name: 'Rust', icon: SiRust, color: 'text-orange-500', description: 'System Programming' },
    { name: 'Go', icon: SiGo, color: 'text-cyan-600', description: 'Backend Language' },
    { name: 'C++', icon: SiCplusplus, color: 'text-blue-600', description: 'System Language' },
    { name: 'C', icon: SiC, color: 'text-gray-400', description: 'Low-level Language' },

    // --- Databases ---
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600', description: 'NoSQL Database' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-600', description: 'SQL Database' },
    { name: 'Redis', icon: SiRedis, color: 'text-red-400', description: 'In-Memory Store' },
    { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500', description: 'Backend Service' },
    { name: 'Supabase', icon: SiSupabase, color: 'text-green-500', description: 'Open-source Firebase Alternative' },

    // --- APIs & Web3 ---
    { name: 'GraphQL', icon: SiGraphql, color: 'text-pink-400', description: 'Query Language' },
    { name: 'Solidity', icon: SiSolidity, color: 'text-gray-500', description: 'Smart Contracts' },
    { name: 'Ethereum', icon: SiEthereum, color: 'text-purple-500', description: 'Blockchain Platform' },

    // --- Cloud & Deployment ---
    { name: 'AWS', icon: FaAws, color: 'text-orange-400', description: 'Cloud Platform' },
    { name: 'Docker', icon: FaDocker, color: 'text-blue-500', description: 'Containerization' },
    { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-400', description: 'Orchestration' },
    { name: 'Vercel', icon: SiVercel, color: 'text-black', description: 'Deployment Platform' },
    { name: 'Heroku', icon: SiHeroku, color: 'text-purple-500', description: 'PaaS Deployment' },
    { name: 'Netlify', icon: SiNetlify, color: 'text-green-500', description: 'Hosting & CI/CD' },
    { name: 'Ansible', icon: SiAnsible, color: 'text-red-500', description: 'IT Automation' },
    { name: 'Terraform', icon: SiTerraform, color: 'text-purple-400', description: 'Infrastructure as Code' },

    // --- DevOps & CI/CD ---
    { name: 'Jenkins', icon: SiJenkins, color: 'text-red-600', description: 'CI/CD Tool' },
    { name: 'GitHub Actions', icon: SiGithubactions, color: 'text-black', description: 'CI/CD Pipeline' },
    { name: 'GitLab', icon: SiGitlab, color: 'text-orange-600', description: 'DevOps Platform' },
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-500', description: 'Version Control' },

    // --- AI/ML ---
    { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-500', description: 'ML Framework' },
    { name: 'PyTorch', icon: SiPytorch, color: 'text-red-600', description: 'Deep Learning Framework' },
    { name: 'NumPy', icon: SiNumpy, color: 'text-blue-500', description: 'Numerical Computing' },
    { name: 'Pandas', icon: SiPandas, color: 'text-green-500', description: 'Data Analysis' },
    { name: 'Jupyter', icon: SiJupyter, color: 'text-orange-400', description: 'Data Science Notebook' },

    // --- Testing ---
    { name: 'Jest', icon: SiJest, color: 'text-pink-500', description: 'JavaScript Testing' },
    { name: 'Mocha', icon: SiMocha, color: 'text-brown-500', description: 'JS Test Framework' },
    { name: 'Cypress', icon: SiCypress, color: 'text-green-500', description: 'End-to-End Testing' },

    // --- Monitoring ---
    { name: 'Prometheus', icon: SiPrometheus, color: 'text-red-500', description: 'Monitoring System' },
    { name: 'Grafana', icon: SiGrafana, color: 'text-orange-500', description: 'Data Visualization' },
]


const categorizedTech = {
    frontend: TechStack.filter(tech =>
        ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind', 'Flutter', 'PWA', 'Framer Motion', 'Storybook'].includes(tech.name)
    ),
    backend: TechStack.filter(tech =>
        ['Node.js', 'Python', 'Django', 'Laravel', 'Spring Boot', 'Java', 'PHP', 'Rust', 'Go', 'C++', 'C'].includes(tech.name)
    ),
    database: TechStack.filter(tech =>
        ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase', 'Supabase'].includes(tech.name)
    ),
    cloud: TechStack.filter(tech =>
        ['AWS', 'Docker', 'Kubernetes', 'Vercel', 'Heroku', 'Netlify', 'Ansible', 'Terraform', 'Jenkins', 'GitHub Actions', 'GitLab', 'Git'].includes(tech.name)
    ),
    ai: TechStack.filter(tech =>
        ['TensorFlow', 'PyTorch', 'NumPy', 'Pandas', 'Jupyter'].includes(tech.name)
    ),
    testing: TechStack.filter(tech =>
        ['Jest', 'Mocha', 'Cypress'].includes(tech.name)
    ),
    monitoring: TechStack.filter(tech =>
        ['Prometheus', 'Grafana'].includes(tech.name)
    ),
    web3: TechStack.filter(tech =>
        ['GraphQL', 'Solidity', 'Ethereum'].includes(tech.name)
    )
}

export default TechStack

export { categorizedTech }