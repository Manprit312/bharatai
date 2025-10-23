'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { TextAnimate } from "@/components/ui/text-animate"
import { RoughNotation } from "react-rough-notation"
import { Marquee } from "@/components/ui/marquee"
import { ExternalLink, Github, Eye, Calendar, CheckCircle, Clock } from 'lucide-react'
import { projects, techStackIcons, Project } from '@/consts/projects'

function Projects() {
  const [activeTab, setActiveTab] = useState<string>('web')

  const tabs = [
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'blockchain', label: 'Blockchain' }
  ]

  const filteredProjects = projects.filter(project => project.category === activeTab)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700 border-green-200'
      case 'ongoing': return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'upcoming': return 'bg-blue-100 text-blue-700 border-blue-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-3 h-3" />
      case 'ongoing': return <Clock className="w-3 h-3" />
      case 'upcoming': return <Calendar className="w-3 h-3" />
      default: return null
    }
  }

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text
  }

  const ProjectCard = ({ project, index }: { project: Project, index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-600 transition-all duration-500 flex-shrink-0"
      style={{
        width: '320px',
        height: '480px'
      }}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="absolute top-4 right-4">
          <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(project.status)}`}>
            {getStatusIcon(project.status)}
            {project.status}
          </span>
        </div>

        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/90 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/90 rounded-full hover:bg-cyan-500 hover:text-white transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <div className="p-6 h-60 flex flex-col">
        <div className="h-14 mb-3">
          <h3 className="text-xl font-bold text-black group-hover:text-blue-700 transition-colors duration-300 line-clamp-2 leading-tight">
            {project.title}
          </h3>
        </div>

        <div className="h-16 mb-4">
          <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">
            {truncateText(project.description, 120)}
          </p>
        </div>

        <div className="flex-1">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Tech Stack</h4>
          <div className="flex flex-wrap gap-1.5 max-h-20 overflow-hidden">
            {project.techStack.slice(0, 4).map((tech, idx) => {
              const IconComponent = techStackIcons[tech]
              return (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 px-2.5 py-1 bg-yellow-50 border border-yellow-200 rounded-lg hover:bg-yellow-100 transition-colors duration-200"
                >
                  {IconComponent && (
                    <IconComponent className="w-3.5 h-3.5 text-gray-600 flex-shrink-0" />
                  )}
                  <span className="text-xs font-medium text-gray-700 truncate">
                    {tech}
                  </span>
                </div>
              )
            })}
            {project.techStack.length > 4 && (
              <div className="flex items-center justify-center px-2.5 py-1 bg-gray-100 border border-gray-200 rounded-lg">
                <span className="text-xs font-medium text-gray-600">
                  +{project.techStack.length - 4}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section className="py-24 bg-gradient-to-br from-yellow-50/30 via-white to-cyan-50/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/10 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-blue-600 mb-6"
          >
            <div className="w-8 h-px bg-blue-600"></div>
            <span className="text-sm font-medium tracking-wider uppercase">Our Portfolio</span>
            <div className="w-8 h-px bg-blue-600"></div>
          </motion.div>

          <div className="text-3xl md:text-5xl font-bold text-black mb-6 flex flex-wrap justify-center items-center gap-2">
            <TextAnimate
              animation="slideUp"
              by="word"
            >
              Featured
            </TextAnimate>
            <RoughNotation
              type="underline"
              show={true}
              color="#eab308"
              animationDelay={1000}
            >
              <span className="text-black mx-3">Projects</span>
            </RoughNotation>
            <TextAnimate
              animation="slideUp"
              by="word"
            >
              & Solutions
            </TextAnimate>
          </div>

          <TextAnimate
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            animation="slideUp"
            by="word"
          >
            Explore our diverse portfolio of successful projects across web development,
            mobile applications, e-commerce platforms, and blockchain solutions.
          </TextAnimate>
        </div>

        <div className="mb-2">
          <div className="flex justify-center">
            <div className="flex gap-2 sm:gap-4 mb-8 overflow-x-auto scrollbar-hide max-w-full px-4">
              <div className="flex gap-2 sm:gap-4 min-w-max">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 sm:px-6 py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 whitespace-nowrap flex-shrink-0 ${activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-600 hover:bg-blue-50'
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden"
        >
          <Marquee speed={150} className="py-4">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="mx-4">
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </Marquee>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
