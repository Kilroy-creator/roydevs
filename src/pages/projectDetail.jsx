import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Github, ExternalLink, ArrowLeft, Star, Download, Code2, Users, Zap } from 'lucide-react';

function ProjectDetail({ projectId = 1 }) {
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sample project data - replace with your actual project details
  const projects = {
    1: {
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
    
    2: {
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

    3: {
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
      liveDemo: 'https://taskflow.example.com'
    }
  };

  const project = projects[projectId] || projects[1];

  return (
    <div className="bg-slate-950 min-h-screen">
      <Header scrolled={scrolled} />
      
      <div className="max-w-5xl mx-auto px-6 py-20 pt-32">
        {/* Back Button */}
        <button 
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </button>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="text-6xl mb-4">{project.image}</div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{project.title}</h1>
              <p className="text-xl text-slate-400">{project.tagline}</p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
              <div className="flex items-center gap-2 mb-2">
                <Star size={18} className="text-yellow-400" fill="currentColor" />
                <span className="text-slate-400 text-sm">Rating</span>
              </div>
              <p className="text-2xl font-bold text-white">{project.rating}</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
              <div className="flex items-center gap-2 mb-2">
                <Download size={18} className="text-cyan-400" />
                <span className="text-slate-400 text-sm">Downloads</span>
              </div>
              <p className="text-2xl font-bold text-white">{project.downloads}</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
              <div className="flex items-center gap-2 mb-2">
                <Code2 size={18} className="text-blue-400" />
                <span className="text-slate-400 text-sm">Stars</span>
              </div>
              <p className="text-2xl font-bold text-white">{project.stars}</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
              <div className="flex items-center gap-2 mb-2">
                <Zap size={18} className="text-purple-400" />
                <span className="text-slate-400 text-sm">Performance</span>
              </div>
              <p className="text-2xl font-bold text-white">{project.stats.performanceScore}</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap">
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition-all duration-200 font-medium"
            >
              <Github size={20} />
              View Code
            </a>
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-200 font-medium"
            >
              <ExternalLink size={20} />
              Live Demo
            </a>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">{project.description}</p>
          <p className="text-slate-300 leading-relaxed whitespace-pre-line">{project.longDescription}</p>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => (
              <div key={idx} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 flex items-start gap-3">
                <span className="text-cyan-400 text-xl mt-1">✓</span>
                <span className="text-slate-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Technology Stack</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {['Frontend', 'Backend', 'Database', 'Third-party', 'DevOps'].map(category => {
              const categoryTechs = project.technologies.filter(t => t.category === category);
              if (categoryTechs.length === 0) return null;
              
              return (
                <div key={category} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                  <h3 className="text-lg font-bold text-cyan-400 mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {categoryTechs.map(tech => (
                      <span key={tech.name} className="px-3 py-1 bg-slate-700 text-slate-200 text-sm rounded-full">
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Challenges & Solutions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Challenges & Solutions</h2>
          <div className="space-y-4">
            {project.challenges.map((challenge, idx) => (
              <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Challenge: {challenge.title}</h3>
                <p className="text-slate-300">
                  <span className="text-slate-400 font-medium">Solution: </span>
                  {challenge.solution}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Results & Impact</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 p-6 rounded-lg">
              <p className="text-slate-400 text-sm mb-2">ROI</p>
              <p className="text-3xl font-bold text-cyan-400">{project.results.roi}</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 p-6 rounded-lg">
              <p className="text-slate-400 text-sm mb-2">User Satisfaction</p>
              <p className="text-3xl font-bold text-cyan-400">{project.results.userSatisfaction}</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 p-6 rounded-lg">
              <p className="text-slate-400 text-sm mb-2">Conversion Rate</p>
              <p className="text-3xl font-bold text-cyan-400">{project.results.conversionRate}</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 p-6 rounded-lg">
              <p className="text-slate-400 text-sm mb-2">Page Load Time</p>
              <p className="text-3xl font-bold text-cyan-400">{project.results.pageLoadTime}</p>
            </div>
          </div>
        </div>

        {/* Project Stats */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Project Statistics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-slate-400 text-sm mb-2">Development Time</p>
              <p className="text-xl font-bold text-cyan-400">{project.stats.developmentTime}</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-2">Team Size</p>
              <p className="text-xl font-bold text-cyan-400">{project.stats.teamSize}</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-2">Code Quality</p>
              <p className="text-xl font-bold text-cyan-400">{project.stats.codeQuality}</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-2">Accessibility</p>
              <p className="text-xl font-bold text-cyan-400">{project.stats.accessibility}</p>
            </div>
          </div>
        </div>

        {/* Screenshots */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Screenshots</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.screenshots.map((screenshot, idx) => (
              <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 text-center">
                <div className="text-6xl mb-4">{screenshot.emoji}</div>
                <p className="text-slate-300 font-medium">{screenshot.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 rounded-xl p-8 text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Interested in this project?</h2>
          <p className="text-slate-300 mb-6">
            Let's discuss how we can build something similar for your business or collaborate on new ideas.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-200 font-medium"
          >
            Start a Project
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProjectDetail;
