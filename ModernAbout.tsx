import { ImageWithFallback } from './figma/ImageWithFallback';
import { GraduationCap, Code2, Palette, Heart, Target, Zap } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'B.Tech in Information Technology',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Code2,
    title: 'Development',
    description: 'Java & Database Expertise',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'UI/UX & User Research',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Building Great Experiences',
    color: 'from-green-500 to-emerald-500'
  }
];

const values = [
  {
    icon: Target,
    title: 'Problem Solving',
    description: 'Love tackling complex challenges with practical solutions'
  },
  {
    icon: Zap,
    title: 'Continuous Learning',
    description: 'Always exploring new technologies and design trends'
  },
  {
    icon: Heart,
    title: 'User-Centric',
    description: 'Believing in creating meaningful, user-friendly experiences'
  }
];

export function ModernAbout() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-l from-blue-100 to-transparent rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-r from-purple-100 to-transparent rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full mb-4">
            <GraduationCap className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">Get To Know Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-3xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjB3b3Jrc3BhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc3MDM1NTg0OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Developer workspace"
                className="w-full h-auto object-cover rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-3xl"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 animate-float">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Fresh Graduate
              </div>
              <div className="text-gray-600 font-medium">Ready to Contribute</div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm <span className="font-semibold text-gray-900">Surya</span>, a B.Tech Information Technology graduate with a strong interest 
                in Java development and user experience design. During my academic journey, 
                I worked on practical projects and gained hands-on experience with Java, JDBC, 
                and database connectivity.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Alongside development, I enjoy designing clean and intuitive user interfaces. 
                I believe good software should not only work well but also be <span className="font-semibold text-gray-900">easy and enjoyable 
                to use</span>.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4 pt-4">
              {values.map((value) => (
                <div key={value.title} className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                    <value.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((highlight, idx) => (
            <div 
              key={highlight.title}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${highlight.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className={`relative inline-flex p-4 bg-gradient-to-r ${highlight.color} rounded-2xl mb-4 shadow-lg`}>
                <highlight.icon className="w-8 h-8 text-white" />
              </div>
              
              <h4 className="font-bold text-gray-900 mb-2">{highlight.title}</h4>
              <p className="text-sm text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
