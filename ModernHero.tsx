import profileImage from "figma:asset/c31e6c239b448027a39aec1b399f3d126c6efc45.png";
import { ArrowRight, Mail, Github, Linkedin, Sparkles } from 'lucide-react';

export function ModernHero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center px-4 md:px-8 lg:px-16 pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Open to Opportunities</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                  Surya
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 leading-snug">
                Aspiring Java Developer<br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  & UI/UX Designer
                </span>
              </h2>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              I build practical software solutions using Java and design intuitive user 
              experiences with a creative approach.
            </p>
            
            <div className="relative inline-block">
              <p className="text-lg font-medium italic px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                "Every pixel has a purpose. Every line of code tells a story"
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                <span className="relative z-10">View Projects</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 border-2 border-gray-300 rounded-full font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-gray-500 font-medium">Follow me:</span>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/Surya15062"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-gray-700 hover:text-white rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/s-surya-6b9b6329b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-gray-700 hover:text-white rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative group">
              {/* Image */}
              <div className="relative overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl">
                <img 
                  src={profileImage}
                  alt="Surya - Developer and Designer"
                  className="relative w-full max-w-md object-cover aspect-square transform group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}