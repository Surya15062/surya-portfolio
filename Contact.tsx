import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Email */}
            <a 
              href="mailto:Suryakavitha46@gmail.com"
              className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group hover:translate-y-[-4px]"
            >
              <div className="p-4 bg-blue-100 rounded-xl group-hover:bg-blue-600 transition-colors duration-300">
                <Mail className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Email</div>
                <div className="font-semibold text-gray-900">Suryakavitha46@gmail.com</div>
              </div>
            </a>
            
            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/in/s-surya-6b9b6329b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group hover:translate-y-[-4px]"
            >
              <div className="p-4 bg-blue-100 rounded-xl group-hover:bg-blue-600 transition-colors duration-300">
                <Linkedin className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">LinkedIn</div>
                <div className="font-semibold text-gray-900">linkedin.com/in/s-surya-6b9b6329b</div>
              </div>
            </a>
            
            {/* GitHub */}
            <a 
              href="https://github.com/Surya15062"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group hover:translate-y-[-4px]"
            >
              <div className="p-4 bg-purple-100 rounded-xl group-hover:bg-purple-600 transition-colors duration-300">
                <Github className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">GitHub</div>
                <div className="font-semibold text-gray-900">github.com/Surya15062</div>
              </div>
            </a>
            
            {/* Message */}
            <a 
              href="#contact"
              className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group hover:translate-y-[-4px]"
            >
              <div className="p-4 bg-purple-100 rounded-xl group-hover:bg-purple-600 transition-colors duration-300">
                <MessageCircle className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Let's Chat</div>
                <div className="font-semibold text-gray-900">Schedule a call</div>
              </div>
            </a>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Open to freelance projects, full-time positions, and collaborations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}