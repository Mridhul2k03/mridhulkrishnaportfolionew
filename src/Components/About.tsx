import React from 'react';
import { Code2, Palette, Rocket, Award, Coffee, Heart, Download, Mail, Terminal } from 'lucide-react';

interface Skill {
  name: string;
  src: React.ReactNode;
  color: string;
}

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
}

function About() {
  const skills: Skill[] = [
    { name: "Python", src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkBKGzgKHQA42GTo40DCQUnNVkUWd3FMzFJA&s', color: "from-blue-500 to-cyan-500" },
    { name: "Django", src: 'https://i0.wp.com/www.opengis.ch/wp-content/uploads/2020/04/django-python-logo.png?fit=500%2C500&ssl=1', color: "from-green-900 to-green-800" },
    { name: "MySQL", src: 'https://pngimg.com/d/mysql_PNG9.png', color: "from-blue-500 to-orange-500" },
    { name: "PostgreSQL", src: 'https://p7.hiclipart.com/preview/707/928/892/postgresql-logo-database-management-system-vector-graphics-sql-logo-thumbnail.jpg', color: "from-white to-blue-500" },
    { name: "React js", src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzZsmpHvJVwm9bEAj-SfiRHFcgXRnFyzwpwQ&s', color: "from-green-500 to-emerald-500" },
    { name: "Tailwind CSS", src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcoZsMBFkU9ArhUL_HlgeESChICNA1cZcIZg&s', color: "from-white to-white" },
    { name: "AWS", src: 'https://icon2.cleanpng.com/20180817/vog/8968d0640f2c4053333ce7334314ef83.webp', color: "from-white to-white" },
    { name: "Git", src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png', color: "from-white to-white" }
  ];

  const stats: Stat[] = [
    { icon: <Code2 className="w-6 h-6" />, value: "50+", label: "Projects Completed" },
    { icon: <Award className="w-6 h-6" />, value: "2+", label: "Years Experience" },
    { icon: <Terminal className="w-6 h-6" />, value: "20+", label: "Technologies" },
    { icon: <Heart className="w-6 h-6" />, value: "100%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen py-20 px-4 bg-white relative overflow-hidden">
      {/* Background Effects - Matching Projects component */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
      
      {/* Grid Pattern Overlay - Light version */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100 rounded-full shadow-sm">
            <span className="text-sm font-semibold text-cyan-600 tracking-wide">ABOUT ME</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate backend developer crafting exceptional digital experiences
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-100/50 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="inline-flex p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column - Image & Quick Info */}
          <div className="space-y-8">
            <div className="relative group">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:opacity-50 transition-opacity duration-500" />
              
              {/* Image container */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-3 shadow-xl border border-gray-200 group-hover:border-cyan-300 transition-all duration-500">
                <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-cyan-100 to-blue-100">
                  <img
                    src="https://images.unsplash.com/photo-1521898284481-a5ec348cb555?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Profile"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-emerald-200 flex items-center gap-2 group-hover:shadow-emerald-200/50 transition-all duration-300">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-emerald-700 font-semibold">Available for Work</span>
              </div>
            </div>
          </div>

          {/* Right Column - Bio & Details */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Mridhul</span>
              </h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I'm a passionate <strong className="text-gray-900">Backend Developer</strong> with over 2 years of experience crafting digital experiences that make a difference.
                </p>
                
                <p>
                  My journey in tech started with a curiosity about how things work behind the screen. Today, I specialize in building modern web applications using cutting-edge technologies using Django, React, and MySQL.
                </p>
                
                <p>
                  I believe in writing clean, maintainable code and creating secure, scalable solutions that not only perform well but also provide exceptional user experiences. Every project is an opportunity to learn something new and push the boundaries of what's possible.
                </p>

                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring.
                </p>
              </div>

              {/* Specialty Badges */}
              <div className="flex flex-wrap gap-3 mt-8">
                <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-700 px-4 py-2.5 rounded-full border border-cyan-200 hover:border-cyan-300 transition-all duration-300">
                  <Code2 size={18} />
                  <span className="font-medium">Clean Code</span>
                </div>
                <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-4 py-2.5 rounded-full border border-blue-200 hover:border-blue-300 transition-all duration-300">
                  <Palette size={18} />
                  <span className="font-medium">Security</span>
                </div>
                <div className="flex items-center gap-2 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 px-4 py-2.5 rounded-full border border-purple-200 hover:border-purple-300 transition-all duration-300">
                  <Rocket size={18} />
                  <span className="font-medium">Fast Learner</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-3 px-7 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1 group">
                <Mail size={20} />
                Get In Touch
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
              <button className="flex items-center gap-3 px-7 py-4 bg-white/80 backdrop-blur-sm text-gray-900 font-semibold rounded-xl border-2 border-gray-300 hover:border-cyan-500 hover:shadow-md transition-all duration-300 group">
                <Download size={20} />
                Download CV
              </button>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Expertise</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="group relative bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-100/50 transition-all duration-300 flex flex-col items-center justify-center text-center space-y-4 hover:-translate-y-1"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-xl group-hover:opacity-50 transition-opacity duration-300" />
                  <div className={`bg-white p-3 rounded-full border border-gray-200 group-hover:border-cyan-300 transition-all duration-300 relative`}>
                    <img 
                      src={skill.src} 
                      alt={skill.name} 
                      className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                </div>
                <span className="font-semibold text-gray-900 text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;