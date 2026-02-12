import profileImage from "figma:asset/c31e6c239b448027a39aec1b399f3d126c6efc45.png";
import { ArrowRight, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center px-4 md:px-8 lg:px-16 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                Hi, I'm <span className="text-blue-600">Surya</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-700">
                Aspiring Java Developer & UI/UX Designer
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              I build practical software solutions using Java and design intuitive user 
              experiences with a creative approach.
            </p>
            
            <p className="text-lg text-blue-600 font-medium italic">
              Every pixel has a purpose. Every line of code tells a story.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg hover:translate-y-[-2px]"
              >
                View Projects
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg hover:translate-y-[-2px]"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl"></div>
              <img 
                src={profileImage}
                alt="Surya - Developer and Designer"
                className="relative w-full max-w-md rounded-3xl shadow-2xl object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}