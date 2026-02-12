import { Code2, Palette, Database, GitBranch, Layers, Users, FileCode, Globe, Server, Zap } from 'lucide-react';

const skillCategories = [
  {
    title: 'Core Programming',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Java', icon: Code2 },
      { name: 'Object-Oriented Programming', icon: GitBranch },
      { name: 'Collection Framework', icon: Layers },
      { name: 'Multi-threading', icon: Zap },
    ]
  },
  {
    title: 'Web Technologies',
    icon: Globe,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'HTML', icon: FileCode },
      { name: 'CSS', icon: Palette },
    ]
  },
  {
    title: 'Database & Backend',
    icon: Database,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'JDBC', icon: Database },
      { name: 'SQL', icon: Database },
      { name: 'Spring Boot', icon: Server },
      { name: 'Servlets', icon: Globe },
    ]
  },
  {
    title: 'UI/UX Design',
    icon: Palette,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Figma', icon: Palette },
      { name: 'Wireframing', icon: Layers },
      { name: 'Prototyping', icon: Code2 },
      { name: 'UX Research', icon: Users },
    ]
  }
];

export function ModernSkills() {
  return (
    <section id="skills" className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full mb-4">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">What I Do</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A diverse skill set spanning development and design
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.title}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`relative p-4 bg-gradient-to-r ${category.color} rounded-2xl shadow-lg`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              {/* Skills List */}
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <skill.icon className="w-5 h-5 text-gray-600" />
                    <span className="font-medium text-gray-700 text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
