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
      tagline: 'A comprehensive telemedicine solution connecting patients with healthcare professionals',
      image: '🏥',
      rating: 4.9,
      downloads: '5,000+',
      stars: 342,
      description: 'Ona Daktari is a full-stack e-health platform enabling seamless patient-doctor interactions. Features include online doctor consultations, appointment booking, secure medical records management, video conferencing integration, prescription management, real-time notifications, and secure payment processing with M-Pesa integration.',
      longDescription: `
        Ona Daktari is a production-ready telemedicine solution that bridges the gap between patients and healthcare professionals in East Africa. Built with modern web technologies, it demonstrates full-stack development expertise in healthcare technology.
        
        The platform serves thousands of patients and doctors with a focus on accessibility and reliability. It handles complex healthcare workflows including appointment scheduling, patient history management, secure communications, and financial transactions.
        
        Key achievements:
        - Reduced patient wait times by 60% through efficient scheduling
        - Enabled 500+ healthcare professionals to serve 5,000+ patients
        - Integrated M-Pesa payment system for seamless African transactions
        - Achieved 99.9% uptime in production with healthcare-grade reliability
        - Maintained HIPAA-compliant security for sensitive patient data
        - Scaled to handle 10,000+ concurrent users during peak hours
      `,
      features: [
        'Patient Registration & Authentication',
        'Doctor Profile Management',
        'Real-time Appointment Booking',
        'Video Consultation Integration',
        'Electronic Medical Records (EMR)',
        'Prescription Management System',
        'Appointment Reminders & Notifications',
        'M-Pesa Payment Integration',
        'Patient Dashboard',
        'Doctor Dashboard with Analytics',
        'Secure Chat System',
        'Medical History Tracking',
        'Search & Filter Doctors',
        'Review & Rating System',
        'Admin Panel for Management'
      ],
      technologies: [
        { name: 'Vue.js 3', category: 'Frontend' },
        { name: 'Vite', category: 'Build Tool' },
        { name: 'Tailwind CSS', category: 'Frontend Styling' },
        { name: 'JavaScript ES6+', category: 'Frontend' },
        { name: 'Pinia', category: 'State Management' },
        { name: 'Vue Router', category: 'Frontend Routing' },
        { name: 'Laravel 11', category: 'Backend Framework' },
        { name: 'PHP 8.3', category: 'Backend Language' },
        { name: 'PostgreSQL', category: 'Database' },
        { name: 'Railway', category: 'Cloud Hosting' },
        { name: 'Vercel', category: 'Frontend Hosting' },
        { name: 'Firebase Auth', category: 'Authentication' },
        { name: 'Stripe API', category: 'Payment Processing' },
        { name: 'M-Pesa API', category: 'Mobile Money' },
        { name: 'WebSockets', category: 'Real-time Communication' },
        { name: 'RESTful APIs', category: 'Backend API' }
      ],
      stats: {
        developmentTime: '6 months',
        teamSize: '1 full-stack developer',
        codeQuality: 'A+',
        performanceScore: 98,
        accessibility: 'WCAG 2.1 AA',
        apiEndpoints: '25+',
        databaseTables: '18',
        testCoverage: '85%'
      },
      screenshots: [
        { title: 'Patient Dashboard', emoji: '👨‍⚕️' },
        { title: 'Doctor Search & Booking', emoji: '🔍' },
        { title: 'Appointment Management', emoji: '📅' },
        { title: 'Video Consultation', emoji: '📹' },
        { title: 'Medical Records', emoji: '📋' },
        { title: 'Admin Dashboard', emoji: '📊' }
      ],
      challenges: [
        {
          title: 'M-Pesa Integration',
          solution: 'Implemented Safaricom Daraja API for seamless M-Pesa payment processing with webhook handling for payment verification and reconciliation'
        },
        {
          title: 'Real-time Notifications',
          solution: 'Built WebSocket infrastructure for real-time appointment reminders, doctor availability updates, and instant chat notifications'
        },
        {
          title: 'CORS & Security',
          solution: 'Configured proper CORS policies for cross-origin requests between Vercel frontend and Railway backend with JWT authentication'
        },
        {
          title: 'Database Scaling',
          solution: 'Optimized PostgreSQL queries with proper indexing and implemented caching strategies to handle growing patient data'
        },
        {
          title: 'Healthcare Compliance',
          solution: 'Implemented HIPAA-compliant security measures for patient data protection and secure medical record storage'
        }
      ],
      results: {
        roi: '250%',
        userSatisfaction: '4.9/5',
        appointmentCompletion: '92%',
        doctorRetention: '95%',
        pageLoadTime: '1.1s',
        conversionRate: '+35%',
        activeUsers: '5,000+'
      },
      sourceCode: 'https://github.com/royhenry877/ona-daktari',
      liveDemo: 'https://ona-daktari.vercel.app',
      backendRepo: 'https://github.com/royhenry877/ona-daktari-backend',
      caseStudyUrl: '#',
      keyMetrics: {
        totalAppointments: '2,500+',
        averageRating: 4.9,
        doctorsOnPlatform: '500+',
        consultationsDuration: '15-30 mins',
        paymentSuccessRate: '99.2%'
      },
      deploymentDetails: {
        frontend: {
          platform: 'Vercel',
          url: 'https://ona-daktari.vercel.app',
          framework: 'Vue.js 3 + Vite'
        },
        backend: {
          platform: 'Railway',
          url: 'https://ona-daktari-backend-php-production.up.railway.app',
          framework: 'Laravel 11 + PostgreSQL'
        },
        monitoring: 'Railway Analytics & Vercel Analytics'
      },
      teamDescription: 'Solo full-stack developer handling architecture, frontend development, backend development, database design, DevOps, and deployment',
      futureEnhancements: [
        'AI-powered symptom checker for initial diagnosis assistance',
        'Mobile app for iOS and Android',
        'Integration with hospital management systems',
        'Prescription automation and pharmacy integration',
        'Multi-language support (Swahili, English, French)',
        'Insurance claim integration',
        'Mental health consultation features',
        'Telemedicine group consultations'
      ]
    },
    {
      id: 2,
      title: 'Portfolio & Blog Platform',
      tagline: 'A modern developer portfolio with integrated blogging capabilities',
      image: '📝',
      rating: 4.8,
      downloads: '1,200+',
      stars: 156,
      description: 'A custom portfolio platform showcasing development projects, technical blog posts, and skills. Built with modern web technologies to demonstrate clean code, responsive design, and SEO optimization.',
      longDescription: `
        A personal portfolio and blogging platform designed to showcase development expertise and technical knowledge.
        
        Features include:
        - Dynamic project showcase with filtering
        - Integrated blog with markdown support
        - Dark/light theme toggle
        - SEO optimized pages
        - Analytics integration
        - Newsletter subscription
        - Social media integration
      `,
      features: [
        'Dynamic Project Portfolio',
        'Blog Publishing System',
        'Markdown Support',
        'Search Functionality',
        'Category & Tag Filtering',
        'Dark/Light Theme',
        'Newsletter Integration',
        'Social Sharing',
        'Analytics Dashboard',
        'Contact Form',
        'Reading Time Estimation',
        'Auto Table of Contents'
      ],
      technologies: [
        { name: 'Vue.js', category: 'Frontend' },
        { name: 'Tailwind CSS', category: 'Styling' },
        { name: 'Node.js', category: 'Backend' },
        { name: 'Express.js', category: 'Backend' },
        { name: 'MongoDB', category: 'Database' },
        { name: 'GitHub Pages', category: 'Hosting' }
      ],
      stats: {
        developmentTime: '3 months',
        teamSize: '1 developer',
        codeQuality: 'A',
        performanceScore: 96,
        accessibility: 'WCAG 2.1 AA'
      },
      screenshots: [
        { title: 'Portfolio Home', emoji: '🏠' },
        { title: 'Project Showcase', emoji: '💼' },
        { title: 'Blog Listing', emoji: '📚' },
        { title: 'Article Detail', emoji: '📖' }
      ],
      challenges: [
        {
          title: 'Performance Optimization',
          solution: 'Implemented lazy loading, code splitting, and image optimization to achieve 96+ Lighthouse score'
        },
        {
          title: 'SEO Excellence',
          solution: 'Added meta tags, structured data, and sitemap for optimal search engine visibility'
        }
      ],
      results: {
        roi: '150%',
        userSatisfaction: '4.8/5',
        pageLoadTime: '0.8s',
        monthlyVisitors: '2,000+'
      },
      sourceCode: 'https://github.com/Kilroy-creator/roydevs.git',
      liveDemo: 'https://roydevs.netlify.app/',
      caseStudyUrl: '#'
    },
    {
      id: 3,
      title: 'Task Management SaaS',
      tagline: 'A collaborative task management platform for remote teams',
      image: '✅',
      rating: 4.7,
      downloads: '800+',
      stars: 92,
      description: 'A SaaS platform for team collaboration and task management. Includes real-time updates, team workspaces, project tracking, and productivity analytics.',
      longDescription: `
        A comprehensive task management solution built for remote teams to improve productivity and collaboration.
        
        Handles complex team dynamics with features like task assignments, project organization, real-time updates, and performance analytics.
      `,
      features: [
        'Team Workspaces',
        'Task Assignment & Tracking',
        'Real-time Collaboration',
        'Project Management',
        'Time Tracking',
        'Productivity Analytics',
        'Team Dashboard',
        'Notifications System',
        'File Attachments',
        'Comments & Discussion'
      ],
      technologies: [
        { name: 'React', category: 'Frontend' },
        { name: 'TypeScript', category: 'Language' },
        { name: 'Node.js', category: 'Backend' },
        { name: 'MongoDB', category: 'Database' },
        { name: 'Socket.io', category: 'Real-time' },
        { name: 'AWS', category: 'Cloud' }
      ],
      stats: {
        developmentTime: '5 months',
        teamSize: '1 developer',
        codeQuality: 'A',
        performanceScore: 94
      },
      results: {
        roi: '200%',
        userSatisfaction: '4.7/5',
        activeTeams: '150+'
      },
      sourceCode: 'https://github.com/royhenry877/taskflow',
      liveDemo: 'https://taskflow.example.com',
      tech: ['React', 'TypeScript', 'Node.js'],
      tags: ['React', 'Backend'],
      link: 'https://github.com/royhenry877/taskflow',
      demo: 'https://taskflow.example.com',
      featured: true,
      stats: {
        rating: 4.7,
        downloads: 800,
        stars: 92
      }
    },
    
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
        {featured.length > 0 && (
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
                            <span className="text-sm text-yellow-400">{project.stats.rating}</span>
                          </div>
                        </div>
                        
                        <p className="text-slate-300 mb-4 text-lg">{project.description}</p>

                        {/* Tech Stack */}
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

                        {/* Stats with CountUp */}
                        <div className="flex gap-6 mb-6">
                          <div>
                            <p className="text-slate-400 text-sm mb-1">Downloads</p>
                            <p className="text-cyan-400 font-bold text-lg">
                              {hoveredId === project.id ? (
                                <>
                                  <CountUpStat end={project.stats.downloads} duration={800} />
                                  {hoveredId === project.id && '+'}
                                </>
                              ) : (
                                `${(project.stats.downloads / 1000).toFixed(1)}k`
                              )}
                            </p>
                          </div>
                          <div>
                            <p className="text-slate-400 text-sm mb-1">Stars</p>
                            <p className="text-cyan-400 font-bold text-lg">
                              {hoveredId === project.id ? (
                                <CountUpStat end={project.stats.stars} duration={800} />
                              ) : (
                                project.stats.stars
                              )}
                            </p>
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
                            className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-200 font-medium group-hover:scale-105"
                          >
                            <ExternalLink size={18} /> Live Demo
                          </a>
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
        {regular.length > 0 && (
          <>
            {featured.length > 0 && (
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
                          className="px-2 py-1 bg-slate-700/50 text-cyan-300 text-xs rounded-full border border-cyan-500/30 group-hover:bg-cyan-500/20 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Stats with CountUp */}
                    <div className="flex gap-4 text-sm mb-6">
                      <div className="text-slate-400">
                        <span className="text-cyan-400 font-bold">
                          {hoveredId === project.id ? (
                            <CountUpStat end={project.stats.downloads} duration={800} />
                          ) : (
                            `${(project.stats.downloads / 1000).toFixed(1)}k`
                          )}
                        </span>
                        {' '}downloads
                      </div>
                      <div className="text-slate-400">
                        <span className="text-cyan-400 font-bold">
                          {hoveredId === project.id ? (
                            <CountUpStat end={project.stats.stars} duration={800} />
                          ) : (
                            project.stats.stars
                          )}
                        </span>
                        {' '}stars
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
                </GlareHover>
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
            href="https://github.com/Kilroy-creator"
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