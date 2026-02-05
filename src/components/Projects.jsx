import React, { useState } from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';
import GlareHover from '../components/GlareHover';

// Simple CountUp for stats
const CountUpStat = ({ end, duration = 1500 }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.floor(end * progress);
      setCount(currentCount);

      if (progress === 1) {
        clearInterval(interval);
        setCount(end);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [end, duration]);

  return <span>{count}</span>;
};

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [hoveredId, setHoveredId] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Ona Daktari - E-Health Platform',
      description: 'A comprehensive telemedicine platform enabling seamless patient-doctor interactions with appointment booking, electronic medical records, and M-Pesa payment integration.',
      image: '🏥',
      tech: ['Vue.js 3', 'Laravel 11', 'PostgreSQL', 'Railway', 'Vercel', 'Firebase', 'M-Pesa API'],
      tags: ['Full Stack', 'Healthcare'],
      link: 'https://github.com/royhenry877/ona-daktari',
      demo: 'https://ona-daktari.vercel.app',
      featured: true,
      stats: {
        rating: 4.9,
        downloads: 5000,
        stars: 342
      }
    },
    {
      id: 2,
      title: 'Portfolio & Blog Platform',
      description: 'A modern developer portfolio with integrated blogging capabilities, dark/light theme toggle, and SEO optimization for maximum visibility.',
      image: '📝',
      tech: ['Vue.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
      tags: ['Full Stack', 'Frontend'],
      link: 'https://github.com/Kilroy-creator/roydevs.git',
      demo: 'https://roydevs.netlify.app/',
      featured: true,
      stats: {
        rating: 4.8,
        downloads: 1200,
        stars: 156
      }
    },
    {
      id: 3,
      title: 'Task Management SaaS',
      description: 'A collaborative task management platform for remote teams with real-time updates, team workspaces, and comprehensive productivity analytics.',
      image: '✅',
      tech: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Socket.io', 'AWS'],
      tags: ['Full Stack', 'Backend'],
      link: 'https://github.com/royhenry877/taskflow',
      demo: '#',  // No live demo yet
      featured: false,
      stats: {
        rating: 4.7,
        downloads: 800,
        stars: 92
      }
    },
    {
      id: 4,
      title: 'AI Content Generator',
      description: 'AI-powered content generation tool utilizing OpenAI API for automated content creation, optimization, and multi-format publishing.',
      image: '🤖',
      tech: ['React', 'Python', 'OpenAI API', 'FastAPI', 'PostgreSQL'],
      tags: ['Full Stack', 'Backend'],
      link: 'https://github.com/royhenry877/ai-content-generator',
      demo: '#',  // No live demo yet
      featured: false,
      stats: {
        rating: 4.9,
        downloads: 4200,
        stars: 512
      }
    },
    {
      id: 5,
      title: 'Social Media Analytics Dashboard',
      description: 'Comprehensive analytics platform tracking social media performance across multiple platforms with real-time insights and detailed reporting.',
      image: '📱',
      tech: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Social Media APIs'],
      tags: ['Full Stack', 'Frontend'],
      link: 'https://github.com/royhenry877/social-analytics',
      demo: '#',  // No live demo yet
      featured: false,
      stats: {
        rating: 4.6,
        downloads: 1200,
        stars: 98
      }
    },
    {
      id: 6,
      title: 'Weather Forecast Application',
      description: 'Beautiful weather application with real-time forecasts, location-based data, interactive weather maps, and severe weather alerts.',
      image: '🌤️',
      tech: ['React', 'OpenWeather API', 'Tailwind CSS', 'Mapbox', 'Redux'],
      tags: ['Frontend', 'React'],
      link: 'https://github.com/royhenry877/weather-app',
      demo: '#',  // No live demo yet
      featured: false,
      stats: {
        rating: 4.5,
        downloads: 890,
        stars: 67
      }
    }
  ];

  const tags = ['All', 'Full Stack', 'Frontend', 'Backend', 'Healthcare', 'React'];
  
  // Safe filtering
  const filtered = filter === 'All' 
    ? projects 
    : projects.filter(p => {
        const projectTags = p.tags || [];
        return projectTags.includes(filter);
      });

  const featured = filtered.filter(p => p.featured === true);
  const regular = filtered.filter(p => p.featured !== true);

  return (
    <section id="work" className="py-20 bg-gradient-to-br from-slate-900 to-slate-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 
            bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 
            text-transparent bg-clip-text">
            Selected Work
          </h2>

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
        {featured && featured.length > 0 && (
          <>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Star size={24} className="text-cyan-400" />
              Featured
            </h3>
            <div className="grid grid-cols-1 gap-6 mb-12">
              {featured.map(project => (
                <GlareHover 
                  key={project.id}
                  className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-300"></div>

                  <div className="relative p-7 md:p-9">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="text-5xl group-hover:scale-110 transition-transform duration-300">{project.image}</div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                          <div className="flex items-center gap-1 bg-slate-700/50 px-2.5 py-1 text-sm rounded-full group-hover:bg-cyan-500/20 transition-all">
                            <Star size={16} className="text-yellow-400" fill="currentColor" />
                            <span className="text-sm text-yellow-400">{project.stats?.rating || 4.5}</span>
                          </div>
                        </div>
                        
                        <p className="text-slate-300 mb-4 text-lg">{project.description}</p>

                        {/* Tech Stack */}
                        {project.tech && project.tech.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map(tech => (
                              <span 
                                key={tech} 
                                className="px-2.5 py-1 bg-slate-700/50 text-cyan-300 text-sm rounded-full border border-cyan-500/30 group-hover:bg-cyan-500/20 transition-all"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Stats with CountUp */}
                        <div className="flex gap-6 mb-6">
                          <div>
                            <p className="text-slate-400 text-sm mb-1">Downloads</p>
                            <p className="text-cyan-400 font-bold text-lg">
                              {hoveredId === project.id ? (
                                <>
                                  <CountUpStat end={project.stats?.downloads || 0} duration={800} />
                                  {hoveredId === project.id && '+'}
                                </>
                              ) : (
                                `${((project.stats?.downloads || 0) / 1000).toFixed(1)}k`
                              )}
                            </p>
                          </div>
                          <div>
                            <p className="text-slate-400 text-sm mb-1">Stars</p>
                            <p className="text-cyan-400 font-bold text-lg">
                              {hoveredId === project.id ? (
                                <CountUpStat end={project.stats?.stars || 0} duration={800} />
                              ) : (
                                project.stats?.stars || 0
                              )}
                            </p>
                          </div>
                        </div>

                        {/* Links */}
                        <div className="flex gap-4 flex-wrap">
                          <a
                            href={project.link || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-2 bg-slate-700 text-slate-300 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-200 font-medium"
                          >
                            <Github size={18} /> View Code
                          </a>
                          
                          {/* Only show demo if it's not # */}
                          {project.demo && project.demo !== '#' && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-200 font-medium group-hover:scale-105"
                            >
                              <ExternalLink size={18} /> Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </GlareHover>
              ))}
            </div>
          </>
        )}

        {/* Regular Projects Grid */}
        {regular && regular.length > 0 && (
          <>
            {featured && featured.length > 0 && (
              <h3 className="text-2xl font-bold text-white mb-6">Other Projects</h3>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regular.map(project => (
                <GlareHover
                  key={project.id}
                  className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-300"></div>

                  <div className="relative p-6 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-5xl group-hover:scale-110 transition-transform duration-300">{project.image}</div>
                      <div className="flex items-center gap-1 bg-slate-700/50 px-2 py-1 rounded-lg group-hover:bg-cyan-500/20 transition-all">
                        <Star size={14} className="text-yellow-400" fill="currentColor" />
                        <span className="text-xs text-yellow-400 font-medium">{project.stats?.rating || 4.5}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-400 mb-4 text-sm flex-grow">{project.description}</p>

                    {/* Tech Stack */}
                    {project.tech && project.tech.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map(tech => (
                          <span 
                            key={tech} 
                            className="px-2 py-1 bg-slate-700/50 text-cyan-300 text-xs rounded-full border border-cyan-500/30 group-hover:bg-cyan-500/20 transition-all"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Stats with CountUp */}
                    <div className="flex gap-4 text-sm mb-6">
                      <div className="text-slate-400">
                        <span className="text-cyan-400 font-bold">
                          {hoveredId === project.id ? (
                            <CountUpStat end={project.stats?.downloads || 0} duration={800} />
                          ) : (
                            `${((project.stats?.downloads || 0) / 1000).toFixed(1)}k`
                          )}
                        </span>
                        {' '}downloads
                      </div>
                      <div className="text-slate-400">
                        <span className="text-cyan-400 font-bold">
                          {hoveredId === project.id ? (
                            <CountUpStat end={project.stats?.stars || 0} duration={800} />
                          ) : (
                            project.stats?.stars || 0
                          )}
                        </span>
                        {' '}stars
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-4 border-t border-slate-700">
                      <a
                        href={project.link || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium flex-1 justify-center py-2 hover:bg-slate-700/50 rounded-lg"
                      >
                        <Github size={18} /> Code
                      </a>
                      
                      {/* Only show demo if it's not # */}
                      {project.demo && project.demo !== '#' && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium flex-1 justify-center py-2 hover:bg-slate-700/50 rounded-lg"
                        >
                          <ExternalLink size={18} /> Demo
                        </a>
                      )}
                    </div>
                  </div>
                </GlareHover>
              ))}
            </div>
          </>
        )}

        {/* Empty State */}
        {filtered && filtered.length === 0 && (
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
            href="https://github.com/royhenry877"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-200 font-medium group hover:scale-105"
          >
            <Github size={20} />
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
}