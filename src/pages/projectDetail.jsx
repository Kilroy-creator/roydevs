import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Github, ExternalLink, ArrowLeft, Star, Download, Code2, Users, Zap } from 'lucide-react';

export default function ProjectDetail({ projectId = 1 }) {
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
      title: 'E-Commerce Platform',
      tagline: 'A full-stack e-commerce solution with payment integration',
      image: '🛍️',
      rating: 4.9,
      downloads: '2,500+',
      stars: 284,
      description: 'A comprehensive e-commerce platform built with React and Python. Features include secure payment processing with Stripe, inventory management, user authentication, order tracking, and admin dashboard.',
      longDescription: `
        This project showcases a production-ready e-commerce solution that demonstrates full-stack development expertise. 
        The frontend is built with React and provides a seamless shopping experience with real-time inventory updates. 
        The backend, powered by Python Flask, handles complex business logic, payment processing, and data management.
        
        Key achievements:
        - Reduced cart abandonment by 25% through UX optimization
        - Implemented secure payment gateway with PCI compliance
        - Scaled to handle 10,000+ concurrent users
        - Achieved 99.9% uptime with robust error handling
      `,
      features: [
        'User authentication & authorization',
        'Real-time inventory management',
        'Secure payment processing',
        'Order tracking system',
        'Admin dashboard',
        'Product recommendations',
        'Shopping cart & wishlist',
        'Customer reviews & ratings'
      ],
      technologies: [
        { name: 'React', category: 'Frontend' },
        { name: 'Tailwind CSS', category: 'Frontend' },
        { name: 'JavaScript', category: 'Frontend' },
        { name: 'Python', category: 'Backend' },
        { name: 'Flask', category: 'Backend' },
        { name: 'PostgreSQL', category: 'Database' },
        { name: 'Stripe API', category: 'Third-party' },
        { name: 'Docker', category: 'DevOps' }
      ],
      stats: {
        developmentTime: '4 months',
        teamSize: '3 developers',
        codeQuality: 'A+',
        performanceScore: 95,
        accessibility: 'WCAG 2.1 AA'
      },
      screenshots: [
        { title: 'Product Listing', emoji: '📦' },
        { title: 'Shopping Cart', emoji: '🛒' },
        { title: 'Checkout Process', emoji: '💳' },
        { title: 'Admin Dashboard', emoji: '📊' }
      ],
      challenges: [
        {
          title: 'Payment Gateway Integration',
          solution: 'Implemented secure Stripe integration with webhook handling for payment verification'
        },
        {
          title: 'Real-time Inventory Sync',
          solution: 'Used WebSockets for real-time inventory updates across multiple users'
        },
        {
          title: 'Performance Optimization',
          solution: 'Implemented caching strategies and database indexing to reduce load times'
        }
      ],
      results: {
        roi: '300%',
        userSatisfaction: '4.9/5',
        conversionRate: '+45%',
        pageLoadTime: '1.2s'
      },
      sourceCode: 'https://github.com',
      liveDemo: 'https://demo.example.com',
      caseStudyUrl: '#'
    },
    // Add more projects following the same structure
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