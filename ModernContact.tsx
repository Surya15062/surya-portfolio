import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'Suryakavitha46@gmail.com',
    href: 'mailto:Suryakavitha46@gmail.com',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    value: 'linkedin.com/in/s-surya-6b9b6329b',
    href: 'https://linkedin.com/in/s-surya-6b9b6329b',
    color: 'from-blue-600 to-blue-700',
  },
  {
    icon: Github,
    title: 'GitHub',
    value: 'github.com/Surya15062',
    href: 'https://github.com/Surya15062',
    color: 'from-gray-700 to-gray-900',
  },
];

export function ModernContact() {
  return (
    <section id="contact" className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full mb-4">
            <Send className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, projects, or collaborations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <a
                    key={method.title}
                    href={method.href}
                    target={method.title !== 'Email' ? '_blank' : undefined}
                    rel={method.title !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 p-5 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className={`p-4 bg-gradient-to-r ${method.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-gray-500 font-medium mb-1">{method.title}</div>
                      <div className="font-semibold text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                        {method.value}
                      </div>
                    </div>
                    <Send className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-4">Quick Response</h3>
              <p className="text-blue-100 mb-6">
                I typically respond to emails within 24 hours. Feel free to reach out 
                for opportunities, collaborations, or just to say hi!
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available for Opportunities</span>
              </div>
            </div>
          </div>

          {/* Right - CTA Card */}
          <div className="lg:sticky lg:top-24">
            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50 -z-10"></div>
              
              <div className="text-center space-y-6">
                <div className="inline-flex p-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl shadow-2xl">
                  <Send className="w-12 h-12 text-white" />
                </div>

                <h3 className="text-3xl font-bold text-gray-900">
                  Ready to Start a Project?
                </h3>

                <p className="text-lg text-gray-600">
                  Whether you have a question, opportunity, or just want to connect, 
                  I'd love to hear from you.
                </p>

                <div className="space-y-4 pt-4">
                  <a
                    href="mailto:Suryakavitha46@gmail.com"
                    className="group relative inline-flex items-center justify-center gap-2 w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
                  >
                    <span className="relative z-10">Send Me an Email</span>
                    <Mail className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </a>

                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com/in/s-surya-6b9b6329b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                    >
                      <Linkedin className="w-5 h-5" />
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/Surya15062"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-900 transition-all duration-300 hover:scale-105"
                    >
                      <Github className="w-5 h-5" />
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-100">
                  <div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      &lt;24h
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Response Time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      100%
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Dedication</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}