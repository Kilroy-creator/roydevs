import React, { useState } from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';

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
      tech: ['Vue.js 3', 'Laravel 11', 'PostgreSQL', 'Railway'],
      tags: ['Full Stack', 'Healthcare'],
      link: 'https://github.com/Kilroy-creator/ona-daktari-frontend.git',
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
      tech: ['Vue.js', 'Tailwind CSS', 'Node.js', 'Express.js'],
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
      title: 'FarmTech Kenya',
      description: 'Agricultural technology platform designed to empower Kenyan farmers with modern farming solutions, market access, and digital tools for sustainable agriculture.',
      image: '🌾',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      tags: ['Frontend', 'Agriculture Tech'],
      link: 'https://github.com/Kilroy-creator/farmTech-Kenya-HTML.git',
      demo: 'https://farmingtech.netlify.app/login.html',
      featured: false,
      stats: {
        rating: 4.6,
        downloads: 450,
        stars: 68
      }
    },
    {
      id: 4,
      title: 'School Institute Management System',
      description: 'Comprehensive school management platform with student records, attendance tracking, grade management, and administrative tools for educational institutions.',
      image: '🎓',
      tech: ['React', 'Node.js', 'Flask', 'Python'],
      tags: ['Full Stack', 'Backend', 'Education'],
      link: 'https://github.com/PKMDroid/School-Institute-Management-System.git',
      demo: 'https://final-project-phase-4-094b.onrender.com/',
      featured: false,
      stats: {
        rating: 4.8,
        downloads: 1200,
        stars: 156
      }
    },
    {
      id: 5,
      title: 'Social Media Analytics Dashboard',
      description: 'Comprehensive analytics platform tracking social media performance across multiple platforms with real-time insights and detailed reporting.',
      image: '📱',
      tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      tags: ['Full Stack', 'Frontend'],
      link: 'https://github.com/royhenry877/social-analytics',
      demo: '#',
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
      tech: ['React', 'OpenWeather API', 'Tailwind CSS', 'Mapbox'],
      tags: ['Frontend', 'React'],
      link: 'https://github.com/royhenry877/weather-app',
      demo: '#',
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
    <section id="work" style={{ width: '100%', overflowX: 'hidden' }} className="py-20 bg-gradient-to-br from-slate-900 to-slate-950 relative">
      <div style={{ width: '100%', maxWidth: '100%', overflowX: 'hidden' }} className="mx-auto">
        {/* Header */}
        <div style={{ paddingLeft: '1rem', paddingRight: '1rem' }} className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4
            bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500
            text-transparent bg-clip-text">
            Selected Work
          </h2>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Projects I've built and shipped to production. Each one represents quality code and attention to detail.
          </p>
        </div>

        {/* Filter Tags - Responsive */}
        <div style={{ paddingLeft: '1rem', paddingRight: '1rem', overflowX: 'auto' }} className="flex gap-2 justify-center mb-12 flex-wrap">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-3 sm:px-5 py-2 rounded-full font-medium transition-all duration-200 text-xs sm:text-sm flex-shrink-0 ${
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
            <h3 style={{ paddingLeft: '1rem', paddingRight: '1rem' }} className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Star size={24} className="text-cyan-400" />
              Featured
            </h3>
            <div style={{ paddingLeft: '1rem', paddingRight: '1rem' }} className="mb-12">
              <div className="grid grid-cols-1 gap-6">
                {featured.map(project => (
                  <div
                    key={project.id}
                    className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
                    style={{ overflow: 'hidden', width: '100%' }}
                    onMouseEnter={() => setHoveredId(project.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-300"></div>

                    <div className="relative p-4 sm:p-6">
                      <div className="flex flex-col md:flex-row gap-4 items-start">
                        <div className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">{project.image}</div>

                        <div style={{ minWidth: 0 }} className="flex-1">
                          <div className="flex flex-col sm:flex-row items-start justify-between gap-2 mb-2">
                            <h3 className="text-lg sm:text-2xl font-bold text-white">{project.title}</h3>
                            <div className="flex items-center gap-1 bg-slate-700/50 px-2 py-1 text-sm rounded-full group-hover:bg-cyan-500/20 transition-all flex-shrink-0">
                              <Star size={16} className="text-yellow-400" fill="currentColor" />
                              <span className="text-sm text-yellow-400">{project.stats?.rating || 4.5}</span>
                            </div>
                          </div>

                          <p className="text-slate-300 mb-4 text-sm sm:text-base">{project.description}</p>

                          {/* Tech Stack */}
                          {project.tech && project.tech.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-6">
                              {project.tech.map(tech => (
                                <span
                                  key={tech}
                                  className="px-2 py-1 bg-slate-700/50 text-cyan-300 text-xs sm:text-sm rounded-full border border-cyan-500/30 group-hover:bg-cyan-500/20 transition-all"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Stats */}
                          <div className="flex gap-4 sm:gap-6 mb-6 flex-wrap">
                            <div>
                              <p className="text-slate-400 text-xs sm:text-sm mb-1">Downloads</p>
                              <p className="text-cyan-400 font-bold text-base sm:text-lg">
                                {hoveredId === project.id ? (
                                  <>
                                    <CountUpStat end={project.stats?.downloads || 0} duration={800} />
                                    +
                                  </>
                                ) : (
                                  `${((project.stats?.downloads || 0) / 1000).toFixed(1)}k`
                                )}
                              </p>
                            </div>
                            <div>
                              <p className="text-slate-400 text-xs sm:text-sm mb-1">Stars</p>
                              <p className="text-cyan-400 font-bold text-base sm:text-lg">
                                {hoveredId === project.id ? (
                                  <CountUpStat end={project.stats?.stars || 0} duration={800} />
                                ) : (
                                  project.stats?.stars || 0
                                )}
                              </p>
                            </div>
                          </div>

                          {/* Links */}
                          <div className="flex gap-2 sm:gap-3 flex-wrap">
                            <a
                              href={project.link || '#'}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-700 text-slate-300 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-200 font-medium text-xs sm:text-sm"
                            >
                              <Github size={16} /> Code
                            </a>

                            {project.demo && project.demo !== '#' && (
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-200 font-medium text-xs sm:text-sm"
                              >
                                <ExternalLink size={16} /> Demo
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Regular Projects Grid */}
        {regular && regular.length > 0 && (
          <>
            {featured && featured.length > 0 && (
              <h3 style={{ paddingLeft: '1rem', paddingRight: '1rem' }} className="text-xl sm:text-2xl font-bold text-white mb-6">Other Projects</h3>
            )}
            <div style={{ paddingLeft: '1rem', paddingRight: '1rem' }} className="mb-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {regular.map(project => (
                  <div
                    key={project.id}
                    className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col"
                    style={{ overflow: 'hidden', width: '100%' }}
                    onMouseEnter={() => setHoveredId(project.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-300"></div>

                    <div className="relative p-4 sm:p-6 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-3 gap-2">
                        <div className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">{project.image}</div>
                        <div className="flex items-center gap-1 bg-slate-700/50 px-2 py-1 text-xs rounded-lg group-hover:bg-cyan-500/20 transition-all flex-shrink-0">
                          <Star size={12} className="text-yellow-400" fill="currentColor" />
                          <span className="text-xs text-yellow-400">{project.stats?.rating || 4.5}</span>
                        </div>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-slate-400 mb-4 text-xs sm:text-sm flex-grow">{project.description}</p>

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

                      {/* Stats */}
                      <div className="flex gap-4 text-xs mb-4 flex-wrap">
                        <span className="text-slate-400">
                          <span className="text-cyan-400 font-bold">
                            {hoveredId === project.id ? (
                              <CountUpStat end={project.stats?.downloads || 0} duration={800} />
                            ) : (
                              `${((project.stats?.downloads || 0) / 1000).toFixed(1)}k`
                            )}
                          </span>
                          {' '}downloads
                        </span>
                        <span className="text-slate-400">
                          <span className="text-cyan-400 font-bold">
                            {hoveredId === project.id ? (
                              <CountUpStat end={project.stats?.stars || 0} duration={800} />
                            ) : (
                              project.stats?.stars || 0
                            )}
                          </span>
                          {' '}stars
                        </span>
                      </div>

                      {/* Links */}
                      <div className="flex gap-2 pt-3 border-t border-slate-700">
                        <a
                          href={project.link || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors font-medium flex-1 justify-center py-2 hover:bg-slate-700/50 rounded-lg text-xs"
                        >
                          <Github size={14} /> Code
                        </a>

                        {project.demo && project.demo !== '#' && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors font-medium flex-1 justify-center py-2 hover:bg-slate-700/50 rounded-lg text-xs"
                          >
                            <ExternalLink size={14} /> Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* CTA Section */}
        <div style={{ paddingLeft: '1rem', paddingRight: '1rem' }} className="mt-12 sm:mt-16 text-center">
          <p className="text-slate-400 mb-6 text-sm sm:text-base">
            Want to see more? Check out my GitHub for additional projects and contributions.
          </p>
          <a
            href="https://github.com/royhenry877"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-200 font-medium text-xs sm:text-sm"
          >
            <Github size={18} />
            Visit GitHub
          </a>
        </div>
      </div>
    </section>
  );
}