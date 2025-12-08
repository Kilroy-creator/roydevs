import React from 'react';
import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  const resources = [
    { label: 'GitHub', href: 'https://github.com/yourusername', external: true },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile', external: true },
    { label: 'Twitter', href: 'https://twitter.com/yourhandle', external: true },
    { label: 'Blog', href: '#', external: true }
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Sitemap', href: '#' }
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              roydevs
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Building beautiful, fast, and scalable web applications with React and Python.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/yourusername" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://twitter.com/yourhandle" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="mailto:your.email@example.com"
                className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="inline-block w-1 h-4 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="inline-block w-1 h-1 bg-slate-600 rounded-full group-hover:bg-cyan-400 transition-colors"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="inline-block w-1 h-4 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
              Resources
            </h4>
            <ul className="space-y-3">
              {resources.map(link => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="inline-block w-1 h-1 bg-slate-600 rounded-full group-hover:bg-cyan-400 transition-colors"></span>
                    {link.label}
                    {link.external && <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="inline-block w-1 h-4 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
              Stay Updated
            </h4>
            <p className="text-slate-400 text-sm mb-4">
              Subscribe to get notified about new projects and updates.
            </p>
            <div className="space-y-2">
              <input 
                type="email" 
                placeholder="your@email.com"
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 text-slate-300 text-sm rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button className="w-full px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-200 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800"></div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} <span className="text-cyan-400 font-semibold">roydevs</span>. All rights reserved.
          </p>

          <div className="flex gap-6">
            {legalLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-cyan-400 transition-all duration-200"
            aria-label="Scroll to top"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Background Accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 pointer-events-none"></div>
    </footer>
  );
}