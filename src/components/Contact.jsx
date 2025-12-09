import React, { useState, useRef } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle, MessageCircle } from 'lucide-react';
import GlareHover from '../components/GlareHover';

// Animated Content Component
const AnimatedContent = ({ children, delay = 0 }) => {
  return (
    <div
      style={{
        opacity: 0,
        animation: `slideInUp 0.6s ease-out ${delay}s forwards`,
      }}
    >
      {children}
    </div>
  );
};

// Star Border Component for Cards
const StarBorderCard = ({ children, className = '' }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`relative group ${className}`}
    >
      {/* Star Corners */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {children}
    </div>
  );
};

// Floating WhatsApp Button
const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '254712601406'; 
  const message = 'Hi! I am interested in your services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Chat on WhatsApp"
    >
      {/* Background pulse */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-50" />

      {/* Main button */}
      <div className="relative w-14 h-14 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform group-hover:scale-110">
        <MessageCircle size={28} className="text-white" />
      </div>

      {/* Tooltip - Fixed positioning */}
      {isHovered && (
        <div className="absolute bottom-full right-0 mb-3 bg-slate-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap border border-slate-700 animate-fadeIn shadow-lg">
          Chat with us on WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800" />
        </div>
      )}
    </a>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    subject: '',
    message: '' 
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

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

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Send me an email anytime',
      contact: 'royhenrylangat@gmail.com',
      link: 'mailto:royhenrylangat@gmail.com',
      color: 'from-blue-500 to-cyan-400',
    },
    {
      icon: Github,
      title: 'GitHub',
      description: 'Check out my projects',
      contact: 'github.com/Kilroy-creator',
      link: 'https://github.com/Kilroy-creator',
      color: 'from-slate-500 to-slate-400',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      description: 'Connect with me',
      contact: 'linkedin.com/in/yourprofile',
      link: 'https://linkedin.com/in/yourprofile',
      color: 'from-blue-600 to-blue-400',
    },
  ];

  return (
    <>
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-slate-950 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Header with Gradient */}
          <AnimatedContent delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Let's Work Together
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing together.
              </p>
            </div>
          </AnimatedContent>

          {/* Contact Methods - Removed black background */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              return (
                <AnimatedContent key={method.title} delay={0.1 * (idx + 1)}>
                  <GlareHover className="h-full">
                    <StarBorderCard className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all duration-300 h-full flex flex-col">
                      <a 
                        href={method.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`p-3 bg-gradient-to-r ${method.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="text-white" size={24} />
                          </div>
                          <h3 className="text-lg font-semibold text-white">{method.title}</h3>
                        </div>
                        <p className="text-slate-400 text-sm mb-3">{method.description}</p>
                        <p className="text-cyan-400 hover:text-cyan-300 font-medium text-sm break-all">{method.contact}</p>
                      </a>
                    </StarBorderCard>
                  </GlareHover>
                </AnimatedContent>
              );
            })}
          </div>

          {/* Contact Form */}
          <AnimatedContent delay={0.4}>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div
                    className={`transition-all duration-300 ${
                      focusedField === 'name' ? 'scale-105' : ''
                    }`}
                  >
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>

                  <div
                    className={`transition-all duration-300 ${
                      focusedField === 'email' ? 'scale-105' : ''
                    }`}
                  >
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div
                  className={`transition-all duration-300 ${
                    focusedField === 'subject' ? 'scale-105' : ''
                  }`}
                >
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Subject <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 transition-all duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div
                  className={`transition-all duration-300 ${
                    focusedField === 'message' ? 'scale-105' : ''
                  }`}
                >
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 transition-all duration-200 resize-none"
                    placeholder="Tell me about your project, requirements, or just say hello..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-200 font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group hover:scale-105 active:scale-95"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="group-hover:rotate-12 transition-transform" />
                      Send Message
                    </>
                  )}
                </button>
              </div>

              {submitted && (
                <div
                  className="mt-6 p-4 bg-green-500/20 border border-green-500 rounded-lg flex items-center gap-3"
                  style={{
                    animation: 'slideInUp 0.5s ease-out',
                  }}
                >
                  <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-green-400 font-medium">Message sent successfully!</p>
                    <p className="text-green-400/80 text-sm">I'll get back to you as soon as possible.</p>
                  </div>
                </div>
              )}
            </div>
          </AnimatedContent>

          {/* CTA Section */}
          <AnimatedContent delay={0.5}>
            <div className="mt-12 text-center">
              <p className="text-slate-400 mb-4">
                Prefer a quick chat? Let's connect on social media or schedule a call.
              </p>
              <a 
                href="https://calendly.com/yourname"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-200 font-medium group hover:scale-105 active:scale-95"
              >
                Schedule a Call
              </a>
            </div>
          </AnimatedContent>
        </div>

        {/* Animations */}
        <style>{`
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }

          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .animate-blob {
            animation: blob 7s infinite;
          }

          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
        `}</style>
      </section>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </>
  );
}