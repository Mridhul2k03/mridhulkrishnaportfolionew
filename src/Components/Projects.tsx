import React, { useState } from 'react';
import { ExternalLink, Github, Filter, ChevronRight, Code, Eye, Sparkles, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'e-commerce' | 'health-app' | 'static-website' | 'CRMS';
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

interface SiteOption {
  id: number;
  name: string;
  url: string;
  logo?: string;
  description: string;
}

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [siteOptions, setSiteOptions] = useState<SiteOption[]>([]);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform s',
      description: 'Full-featured online shopping platform',
      longDescription: 'A modern e-commerce solution with real-time inventory, payment processing, and admin dashboard. Built with microservices architecture.',
      technologies: ['React js & ts', 'Django', 'MySQL', 'Redis', 'Stripe', 'JWT'],
      category: 'e-commerce',
      githubUrl: 'https://github.com/username/ecommerce',
      liveUrl: 'https://demo-ecommerce.com',
      imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&q=80'
    },
    {
      id: 2,
      title: 'Health/Job Portals',
      description: 'Mobile application',
      longDescription: 'Cross-platform mobile app',
      technologies: ['React js & ts', 'Django', 'MySQL', 'Redis', 'Flutter', 'JWT'],
      category: 'health-app',
      githubUrl: 'https://github.com/username/fitness-app',
      liveUrl: 'https://fitness.demo.com',
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&q=80'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Modern portfolio with 3D animations',
      longDescription: 'Interactive portfolio featuring Three.js animations, smooth transitions, and dark mode support.',
      technologies: ['React js & ts', 'Django', 'MySQL', 'Redis', 'Stripe', 'JWT'],
      category: 'static-website',
      githubUrl: 'https://github.com/username/portfolio',
      liveUrl: 'https://myportfolio.com',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&q=80'
    },
    {
      id: 4,
      title: 'Task Management Dashboard',
      description: 'Collaborative project management tool',
      longDescription: 'Feature-rich dashboard for team collaboration with real-time updates, file sharing, and progress tracking.',
      technologies: ['React js & ts', 'Django', 'MySQL', 'Redis', 'JWT'],
      category: 'CRMS',
      githubUrl: 'https://github.com/username/task-manager',
      liveUrl: 'https://tasks.demo.com',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&q=80'
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'e-commerce', label: 'E-Commerce' },
    { id: 'health-app', label: 'Health App' },
    { id: 'static-website', label: 'Static Website' },
    { id: 'CRMS', label: 'CRMS' },
  ];

  // Mock site options for different projects
  const getSiteOptionsForProject = (projectId: number): SiteOption[] => {
    switch (projectId) {
      case 1: // E-Commerce
        return [
          {
            id: 1,
            name: 'Speedine',
            url: 'https://speedine.in/',
            logo: 'https://speedine.in/speedine_logo.png',
            description: 'E-Commerce Website'
          },
          {
            id: 2,
            name: 'Super Marine ',
            url: 'https://www.supermarinerental.com/',
            logo: 'https://www.supermarinerental.com/logo-icon.png',
            description: 'Super Marine Website'
          }
        ];
      case 2: // Health App
        return [
          {
            id: 1,
            name: 'HappyCoupleSolution',
            url: 'https://happy-couple-new.vercel.app/',
            logo: 'https://happy-couple-new.vercel.app/Foot-Logo.png',
            description: 'HappyCoupleSolution Website'
          },
          {
            id: 2,
            name: 'Students Gigs',
            url: 'https://www.studentsgigs.com/',
            logo: 'https://studentsgigs.com/Tab-icon.png',
            description: 'Students Gigs Website and Android app'
          }
        ];
      case 3: // Portfolio
        return [
          {
            id: 1,
            name: 'Kemach Equipments',
            url: 'https://www.kemachequipments.com/',
            logo: 'https://www.kemachequipments.com/KEMACH%20LOGO%20web-01.png',
            description: 'Kemach Equipments Website'
          },
          {
            id: 2,
            name: 'Mocs Footwear',
            url: 'https://www.mocs.in/',
            logo: 'https://www.mocs.in/Mocs%20Logo.png',
            description: 'Mocs Footwear Website'
          },
          {
            id: 3,
            name: 'Warrior Footwear',
            url: 'https://www.warriorind.in/',
            logo: 'https://www.warriorind.in/Warrior%20logo%20Png-01.png',
            description: 'Warrior Footwear Website'
          }
        ];
      case 4: // Task Management
        return [
          {
            id: 1,
            name: 'Exedu CRM',
            url: 'https://www.exedu.in/',
            logo: 'https://www.exedu.in/exedu-favicon.jpg',
            description: 'Exedu CRM Website'
          },
          {
            id: 2,
            name: 'Exbot CRM',
            url: 'https://www.exbot.in/',
            logo: 'https://www.exbot.in/Fav-icon-png.png',
            description: 'Exbot CRM Website'
          },
          {
            id: 3,
            name: 'Extechnology CRM',
            url: 'https://www.extechnology.in/',
            logo: 'https://www.extechnology.in/Group%20(6).svg',
            description: 'Extechnology CRM Website'
          },
          {
            id: 4,
            name: 'Speedine CRM',
            url: 'https://www.speedine.in/',
            logo: 'https://www.speedine.in/speedine_logo.png',
            description: 'Speedine CRM Website'
          }
        ];
      default:
        return [];
    }
  };

  const handlePreviewClick = (project: Project) => {
    setCurrentProject(project);
    setSiteOptions(getSiteOptionsForProject(project.id));
    setModalOpen(true);
  };

  const handleSiteClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentProject(null);
    setSiteOptions([]);
  };

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <section id="projects" className="min-h-screen py-20 px-4 bg-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-800 rounded-full">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-400 tracking-wide">FEATURED WORK</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Showcasing innovative solutions that blend cutting-edge technology with exceptional design
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-7 py-3.5 rounded-full font-medium transition-all duration-300 border ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-white border-cyan-500/50 shadow-lg shadow-cyan-500/20'
                    : 'bg-gray-900/50 text-gray-400 border-gray-800 hover:bg-gray-800/50 hover:text-white hover:border-gray-700'
                } backdrop-blur-sm`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image with Overlay */}
                <div className="relative h-52 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                  )}
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 text-xs font-semibold bg-black/80 backdrop-blur-sm rounded-full border border-gray-800 text-cyan-300">
                      {project.category.toUpperCase()}
                    </span>
                  </div>
                  
                  {/* Live Demo Badge */}
                  {project.liveUrl && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1.5 text-xs font-semibold bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full border border-green-500/30 text-green-400">
                        LIVE DEMO
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-7">
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 font-medium">
                        {project.description}
                      </p>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-cyan-500 transition-transform duration-300 ${
                      hoveredProject === project.id ? 'translate-x-2' : ''
                    }`} />
                  </div>

                  <p className="text-gray-500 text-sm mb-7 line-clamp-2 leading-relaxed">
                    {project.longDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-gray-800/50 text-gray-300 text-xs font-medium rounded-lg border border-gray-800 hover:border-cyan-500/30 hover:text-cyan-300 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-5 pt-6 border-t border-gray-800">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group/link"
                      >
                        <div className="p-2 bg-gray-800 rounded-lg group-hover/link:bg-gradient-to-r group-hover/link:from-cyan-500/20 group-hover/link:to-blue-500/20">
                          <Code className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium">View Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <button
                        onClick={() => handlePreviewClick(project)}
                        className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors ml-auto group/link"
                      >
                        <div className="p-2 bg-gray-800 rounded-lg group-hover/link:bg-gradient-to-r group-hover/link:from-green-500/20 group-hover/link:to-emerald-500/20">
                          <Eye className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium">Live Preview</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Site Selection Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="p-7 border-b border-gray-800">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {currentProject?.title}
                  </h3>
                  <p className="text-gray-400">Select a site to preview</p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2.5 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Sites List */}
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              <div className="space-y-3">
                {siteOptions.map((site) => (
                  <button
                    key={site.id}
                    onClick={() => handleSiteClick(site.url)}
                    className="w-full group"
                  >
                    <div className="flex items-center p-4 bg-gray-800/30 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 group-hover:scale-[1.02]">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-900 rounded-lg text-2xl mr-4 group-hover:bg-cyan-500/20 transition-colors">
                        <img src={site.logo} alt="" />
                      </div>
                      <div className="flex-1 text-left">
                        <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {site.name}
                        </h4>
                        <p className="text-sm text-gray-400 mt-1">
                          {site.description}
                        </p>
                        <p className="text-xs text-cyan-400 mt-2 font-mono truncate">
                          {site.url.replace(/^https?:\/\//, '')}
                        </p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors ml-4" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-800 bg-gradient-to-t from-black/50 to-transparent">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">
                  Click any site to open in a new tab
                </p>
                <button
                  onClick={closeModal}
                  className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;