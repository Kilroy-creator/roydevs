import React, { useState } from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with secure payment integration, inventory management, and user authentication.',
      image: '🛍️',
      tech: ['React', 'Python', 'PostgreSQL', 'Stripe'],
      tags: ['React', 'Backend'],
      link: 'https://github.com',
      demo: '#',
      featured: true,
      stats: {
        rating: 4.9,
        downloads: '2.5k',
        stars: 284
      }
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Real-time collaborative task management with team features, task assignments, and progress tracking.',
      image: '✅',
      tech: ['React', 'Firebase', 'Tailwind'],
      tags: ['React'],
      link: 'https://github.com',
      demo: '#',
      featured: false,
      stats: {
        rating: 4.8,
        downloads: '1.8k',
        stars: 156
      }
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Interactive dashboard with real-time data visualization, charts, and comprehensive analytics reporting.',
      image: '📊',
      tech: ['React', 'Python', 'MongoDB'],
      tags: ['React', 'Backend'],
      link: 'https://github.com',
      demo: '#',
      featured: true,
      stats: {
        rating: 4.7,
        downloads: '3.1k',
        stars: 342
      }
    },
    {
      id: 4,
      title: 'AI Content Generator',
      description: 'AI-powered content generation tool using modern APIs for automated content creation and optimization.',
      image: '🤖',
      tech: ['React', 'Python', 'OpenAI API'],
      tags: ['React', 'Backend'],
      link: 'https://github.com',
      demo: '#',
      featured: false,
      stats: {
        rating: 4.9,
        downloads: '4.2k',
        stars: 512
      }
    },
    {
      id: 5,
      title: 'Social Media Analytics',
      description: 'Track and analyze social media performance across multiple platforms with detailed insights and reporting.',
      image: '📱',
      tech: ['React', 'Node.js', 'MongoDB'],
      tags: ['React', 'Backend'],
      link: 'https://github.com',
      demo: '#',
      featured: false,
      stats: {
        rating: 4.6,
        downloads: '1.2k',
        stars: 98
      }
    },
    {
      id: 6,
      title: 'Weather Forecast App',
      description: 'Beautiful weather application with real-time forecasts, location-based data, and interactive weather maps.',
      image: '🌤️',
      tech: ['React', 'Weather API', 'Tailwind'],
      tags: ['React'],
      link: 'https://github.com',
      demo: '#',
      featured: false,
      stats: {
        rating: 4.5,
        downloads: '890',
        stars: 67
      }
    }
  ];

  const tags = ['All', 'React', 'Backend'];
  const filtered = filter === 'All' ? projects : projects.filter(p => p.tags.includes(filter));
  const featured = filtered.filter(p => p.featured);
  const regular = filtered.filter(p => !p.featured);

  return (
    <section id="work" className="py-20 bg-gradient-to-br from-slate-900 to-slate-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Selected Work</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Projects I've built and shipped to production. Each one represents quality code and attention to detail.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex gap-3 justify-center mb-12 flex-wrap">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-200 ${
                filter === tag
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        {featured.length > 0 && (
          <>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Star size={24} className="text-cyan-400" />
              Featured
            </h3>
            <div className="grid grid-cols-1 gap-6 mb-12">
              {featured.map(project => (
                <div
                  key={project.id}
                  className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-300"></div>

                  <div className="relative p-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="text-6xl">{project.image}</div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                          <div className="flex items-center gap-1 bg-slate-700/50 px-3 py-1 rounded-full">
                            <Star size={16} className="text-yellow-400" fill="currentColor" />
                            <span className="text-sm text-yellow-400">{project.stats.rating}</span>
                          </div>
                        </div>
                        
                        <p className="text-slate-300 mb-4 text-lg">{project.description}</p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map(tech => (
                            <span 
                              key={tech} 
                              className="px-3 py-1 bg-slate-700/50 text-cyan-300 text-sm rounded-full border border-cyan-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Stats */}
                        <div className="flex gap-6 mb-6">
                          <div>
                            <p className="text-slate-400 text-sm">Downloads</p>
                            <p className="text-cyan-400 font-bold">{project.stats.downloads}</p>
                          </div>
                          <div>
                            <p className="text-slate-400 text-sm">Stars</p>
                            <p className="text-cyan-400 font-bold">{project.stats.stars}</p>
                          </div>
                        </div>

                        {/* Links */}
                        <div className="flex gap-4 flex-wrap">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-2 bg-slate-700 text-slate-300 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-200 font-medium"
                          >
                            <Github size={18} /> View Code
                          </a>
                          <a
                            href={project.demo}
                            className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-200 font-medium"
                          >
                            <ExternalLink size={18} /> Live Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Regular Projects Grid */}
        {regular.length > 0 && (
          <>
            {featured.length > 0 && (
              <h3 className="text-2xl font-bold text-white mb-6">Other Projects</h3>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regular.map(project => (
                <div
                  key={project.id}
                  className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col"
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-300"></div>

                  <div className="relative p-6 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-5xl">{project.image}</div>
                      <div className="flex items-center gap-1 bg-slate-700/50 px-2 py-1 rounded-lg">
                        <Star size={14} className="text-yellow-400" fill="currentColor" />
                        <span className="text-xs text-yellow-400 font-medium">{project.stats.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-400 mb-4 text-sm flex-grow">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map(tech => (
                        <span 
                          key={tech} 
                          className="px-2 py-1 bg-slate-700/50 text-cyan-300 text-xs rounded-full border border-cyan-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex gap-4 text-sm mb-6">
                      <div className="text-slate-400">
                        <span className="text-cyan-400 font-bold">{project.stats.downloads}</span> downloads
                      </div>
                      <div className="text-slate-400">
                        <span className="text-cyan-400 font-bold">{project.stats.stars}</span> stars
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-4 border-t border-slate-700">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium flex-1 justify-center py-2 hover:bg-slate-700/50 rounded-lg"
                      >
                        <Github size={18} /> Code
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium flex-1 justify-center py-2 hover:bg-slate-700/50 rounded-lg"
                      >
                        <ExternalLink size={18} /> Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">No projects found in this category.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-6">
            Want to see more? Check out my GitHub for additional projects and contributions.
          </p>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-200 font-medium"
          >
            <Github size={20} />
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
}