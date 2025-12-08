import React from 'react';

export default function About() {
  const skills = [
    { 
      category: 'Frontend', 
      items: ['React', 'vue','JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'Vite'] 
    },
    { 
      category: 'Backend', 
      items: ['Python', 'laravel', 'php','Flask', 'FastAPI', 'PostgreSQL', 'MongoDB', 'REST APIs'] 
    },
    { 
      category: 'Tools & DevOps', 
      items: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Docker', 'Linux'] 
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              I'm a full-stack developer passionate about building beautiful and functional web applications. With expertise in both frontend and backend technologies, I create seamless user experiences backed by robust server-side logic.
            </p>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              I specialize in React for dynamic frontends and Python for powerful backends. Whether you need a landing page, web app, or full-stack solution, I deliver clean, maintainable code that scales.
            </p>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community. I'm always excited about learning and staying updated with the latest industry trends.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-200 font-medium">
                Get In Touch
              </button>
              <a href="#" className="px-8 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-200 font-medium">
                View CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {skills.map((skill, idx) => (
              <div 
                key={skill.category} 
                className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:bg-slate-800/80"
              >
                <h3 className="text-lg font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-cyan-400 rounded-full"></span>
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map(item => (
                    <span 
                      key={item} 
                      className="px-3 py-1 bg-slate-700 text-slate-200 text-sm rounded-full hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-6 mt-16 pt-16 border-t border-slate-700">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
            <p className="text-slate-400">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">3+</div>
            <p className="text-slate-400">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">30+</div>
            <p className="text-slate-400">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}