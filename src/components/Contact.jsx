import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    subject: '',
    message: '' 
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: value 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // TODO: Connect to Flask backend
      // const response = await fetch('http://localhost:5000/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // For now, just simulate
      console.log('Form submitted:', formData);
      
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Cards */}
          <a 
            href="mailto:royhenry877@gmail.com"
            className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-all">
                <Mail className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white">Email</h3>
            </div>
            <p className="text-slate-400 text-sm mb-2">Send me an email anytime</p>
            <p className="text-cyan-400 hover:text-cyan-300 font-medium">your.email@example.com</p>
          </a>

          <a 
            href="https://github.com/Kilroy-creator"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-all">
                <Github className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white">GitHub</h3>
            </div>
            <p className="text-slate-400 text-sm mb-2">Check out my projects</p>
            <p className="text-cyan-400 hover:text-cyan-300 font-medium">github.com/yourusername</p>
          </a>

          <a 
            href="https://linkedin.com/in/royhenry-kibet-566b57281"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-all">
                <Linkedin className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white">LinkedIn</h3>
            </div>
            <p className="text-slate-400 text-sm mb-2">Connect with me</p>
            <p className="text-cyan-400 hover:text-cyan-300 font-medium">linkedin.com/in/yourprofile</p>
          </a>
        </div>

        {/* Contact Form */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Full Name <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Subject <span className="text-cyan-400">*</span>
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Message <span className="text-cyan-400">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
                placeholder="Tell me about your project, requirements, or just say hello..."
              ></textarea>
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-200 font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </div>

          {submitted && (
            <div className="mt-6 p-4 bg-green-500/20 border border-green-500 rounded-lg flex items-center gap-3">
              <CheckCircle className="text-green-400" size={20} />
              <div>
                <p className="text-green-400 font-medium">Message sent successfully!</p>
                <p className="text-green-400/80 text-sm">I'll get back to you as soon as possible.</p>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-4">
            Prefer a quick chat? Let's connect on social media or schedule a call.
          </p>
          <a 
            href="https://calendly.com/royhenry877/30min"
            className="inline-block px-8 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-200 font-medium"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </section>
  );
}