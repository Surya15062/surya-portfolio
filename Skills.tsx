import { Code2, Palette, Database, GitBranch, Layers, Users, FileCode, Globe, Server, Zap } from 'lucide-react';

const coreProgramming = [
  { name: 'Java', icon: Code2 },
  { name: 'Object-Oriented Programming', icon: GitBranch },
  { name: 'Collection Framework', icon: Layers },
  { name: 'Multi-threading', icon: Zap },
];

const webTechnologies = [
  { name: 'HTML', icon: FileCode },
  { name: 'CSS', icon: Palette },
];

const databaseBackend = [
  { name: 'JDBC', icon: Database },
  { name: 'SQL', icon: Database },
  { name: 'Spring Boot', icon: Server },
  { name: 'Servlets', icon: Globe },
];

const designSkills = [
  { name: 'Figma', icon: Palette },
  { name: 'Wireframing', icon: Layers },
  { name: 'Prototyping', icon: Code2 },
  { name: 'UX Research', icon: Users },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A diverse skill set spanning development and design
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Core Programming */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Code2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Core Programming</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {coreProgramming.map((skill) => (
                <div 
                  key={skill.name}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300 group"
                >
                  <skill.icon className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Web Technologies */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Web Technologies</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {webTechnologies.map((skill) => (
                <div 
                  key={skill.name}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300 group"
                >
                  <skill.icon className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Database & Backend */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Database className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Database & Backend</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {databaseBackend.map((skill) => (
                <div 
                  key={skill.name}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300 group"
                >
                  <skill.icon className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* UI/UX Design */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Palette className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">UI/UX Design</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {designSkills.map((skill) => (
                <div 
                  key={skill.name}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300 group"
                >
                  <skill.icon className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}