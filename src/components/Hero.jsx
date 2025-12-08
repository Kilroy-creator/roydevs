import React from 'react';
import { ArrowRight } from 'lucide-react';
import Aurora from './Aurora';
import SplitText from './SplitText';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-slate-950 pt-20"
      aria-label="Hero section"
    >
      {/* ---------- Aurora (BACKGROUND) ---------- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Aurora />
      </div>

      {/* ---------- Fallback gradient lights ---------- */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* ---------- Main Content ---------- */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6 flex flex-col items-center justify-center">
        <div className="mb-8 space-y-4">
          {/* SplitText for intro */}
          <div className="block">
            <SplitText
              text="Hey, I'm Roy"
              tag="h1"
              delay={50}
              duration={0.5}
              threshold={0}
              rootMargin="0px"
              className="text-4xl md:text-6xl font-bold text-white"
            />
          </div>

          {/* Full Stack with gradient - Changed colors */}
          <div className="block">
            <SplitText
              text="Full Stack Developer"
              tag="h2"
              delay={40}
              duration={0.5}
              threshold={0}
              rootMargin="0px"
              className="text-4xl md:text-6xl font-bold text-cyan-400"
            />
          </div>
        </div>

        <p className="text-base md:text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          I build beautiful, fast, and scalable web applications using React,
          Python, and modern web technologies. Let's create something amazing
          together.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-200 font-medium flex items-center gap-2 group">
            View My Work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="px-8 py-3 border border-slate-400 text-slate-300 rounded-lg hover:bg-slate-800 transition-all duration-200 font-medium">
            Download CV
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-slate-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .split-parent {
          display: block !important;
          width: 100%;
        }
      `}</style>
    </section>
  );
}