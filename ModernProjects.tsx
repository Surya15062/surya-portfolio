import expenseTrackerImage from 'figma:asset/906997cdb5787944068bc45e553b71ca7422a1f8.png';
import busTicketImage from 'figma:asset/8d814faf5325886b5ccddf96e2d4fc630778d858.png';
import busTrackingImage from 'figma:asset/e6f2ac878bb92d5d18cbc20cb4cb950fe4ca790d.png';
import { ExternalLink, Code2, Brain, Palette, Database, Server, GraduationCap } from 'lucide-react';

// Java Development Projects
const javaProjects = [
  {
    id: 1,
    title: 'Student Record Management System',
    description: 'Java-based application developed using JDBC to perform CRUD operations on a database. Implemented data insertion, retrieval, updating, and deletion to understand how Java connects with SQL databases.',
    techStack: ['Java', 'JDBC', 'MySQL', 'SQL'],
    gradient: 'from-blue-500 to-cyan-500',
    icon: Code2,
  },
];

// UI/UX Design Projects
const designProjects = [
  {
    id: 1,
    number: '01',
    title: 'Expense Tracker Dashboard',
    description: 'A modern expense tracker dashboard UI focused on visualizing income, expenses, and balance in a clear and simple way. Designed with strong focus on readability, data hierarchy, and user-friendly financial insights.',
    techStack: ['Figma', 'Auto Layout', 'Components', 'Charts'],
    image: expenseTrackerImage,
    gradient: 'from-purple-500 to-pink-500',
    link: 'https://www.figma.com/proto/lvK60P67tizHtBKx1VKWyj/Expense-tracker?node-id=4-255&p=f&t=zHHTS5qP6wOGn6ub-1&scaling=contain&content-scaling=fixed&page-id=1%3A346&starting-point-node-id=4%3A255',
  },
  {
    id: 2,
    number: '02',
    title: 'Smart Bus Ticket Booking App',
    description: 'A modern bus ticket booking app UI focused on seat selection, trip management, and wallet experience for a smooth travel journey. Designed end-to-end mobile screens with strong focus on usability, clear booking flows, and visual consistency.',
    techStack: ['Figma', 'Auto Layout', 'Components'],
    image: busTicketImage,
    gradient: 'from-green-500 to-emerald-500',
    link: 'https://www.figma.com/proto/ec2HUwlQ29S75oZ92qnTR0/Finch-Travels?node-id=12-2&starting-point-node-id=9%3A1315&t=cS6VjNbQPWhF19xM-1',
  },
  {
    id: 3,
    number: '03',
    title: 'Bus Tracking App',
    description: 'A smart bus tracking app UI designed to help users find nearby buses, track routes, and travel with more comfort and clarity. Focused on real-time information clarity and smooth user experience.',
    techStack: ['Figma', 'Auto Layout', 'Components'],
    image: busTrackingImage,
    gradient: 'from-orange-500 to-red-500',
    link: 'https://www.figma.com/proto/jlaO9EoJXvNKarsZM0GEjv/Busify-App?node-id=1-3&t=EnPo2sY3t0tJOcoD-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3&show-proto-sidebar=1',
  },
];

// Academic Projects
const academicProjects = [
  {
    id: 1,
    title: 'Real-Time Bus Overcrowding Detection',
    objective: 'Solving public transport overcrowding using computer vision to detect passenger count inside buses and identify overcrowding conditions.',
    techStack: ['Python', 'YOLOv8', 'OpenCV', 'Computer Vision'],
    learningOutcome: 'Understanding AI integration with software systems, object detection algorithms, and real-time video processing.',
    gradient: 'from-green-500 to-emerald-500',
    icon: Brain,
  },
];

// Java Development Card Component
function JavaProjectCard({ project, index }: { project: typeof javaProjects[0], index: number }) {
  return (
    <div 
      className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Icon Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className={`p-4 bg-gradient-to-br ${project.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <project.icon className="w-8 h-8 text-white" />
        </div>
        <div className="flex-1">
          <div className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${project.gradient} rounded-full mb-2`}>
            <Server className="w-3.5 h-3.5 text-white" />
            <span className="text-xs font-semibold text-white uppercase tracking-wide">
              Backend Development
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-6">
        {project.description}
      </p>

      {/* Technologies */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Technologies Used:</h4>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span 
              key={tech}
              className={`px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg text-sm font-medium shadow-md`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// UI/UX Design Card Component
function DesignProjectCard({ project, index }: { project: typeof designProjects[0], index: number }) {
  const handleClick = () => {
    if (project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={handleClick}
    >
      {/* Image Container - 3:2 Aspect Ratio */}
      <div className="relative w-full aspect-[3/2] overflow-hidden bg-gray-100">
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center`}>
          <ExternalLink className="w-12 h-12 text-white transform scale-0 group-hover:scale-100 transition-transform duration-500" />
        </div>
        
        {/* Project Number Badge */}
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {project.number}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category Label */}
        <div className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${project.gradient} rounded-full mb-3`}>
          <Palette className="w-3.5 h-3.5 text-white" />
          <span className="text-xs font-semibold text-white uppercase tracking-wide">
            UI/UX Design
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 min-h-[3.5rem]">
          {project.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Academic Project Card Component
function AcademicProjectCard({ project, index }: { project: typeof academicProjects[0], index: number }) {
  return (
    <div 
      className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Icon Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className={`p-4 bg-gradient-to-br ${project.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <project.icon className="w-8 h-8 text-white" />
        </div>
        <div className="flex-1">
          <div className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${project.gradient} rounded-full mb-2`}>
            <GraduationCap className="w-3.5 h-3.5 text-white" />
            <span className="text-xs font-semibold text-white uppercase tracking-wide">
              Academic Project
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Project Objective */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
          Project Objective:
        </h4>
        <p className="text-gray-600 leading-relaxed pl-3.5">
          {project.objective}
        </p>
      </div>

      {/* Technologies */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
          Tools & Technologies:
        </h4>
        <div className="flex flex-wrap gap-2 pl-3.5">
          {project.techStack.map((tech) => (
            <span 
              key={tech}
              className={`px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg text-sm font-medium shadow-md`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Learning Outcome */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
          Learning Outcome:
        </h4>
        <p className="text-gray-600 leading-relaxed pl-3.5">
          {project.learningOutcome}
        </p>
      </div>
    </div>
  );
}

export function ModernProjects() {
  return (
    <section id="projects" className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Main Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full mb-4">
            <Code2 className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing development skills, design expertise, and academic achievements
          </p>
        </div>

        {/* ============== SECTION 1: JAVA DEVELOPMENT PROJECTS ============== */}
        <div className="mb-32">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-3">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">Java Development Projects</h3>
                <p className="text-gray-600">Backend development, database management, and problem-solving</p>
              </div>
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {javaProjects.map((project, idx) => (
              <JavaProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </div>

        {/* ============== SECTION 2: UI/UX DESIGN PROJECTS ============== */}
        <div className="mb-32">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-3">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">UI/UX Design Projects</h3>
                <p className="text-gray-600">User-centered design, wireframing, and prototyping</p>
              </div>
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designProjects.map((project, idx) => (
              <DesignProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </div>

        {/* ============== SECTION 3: ACADEMIC PROJECTS ============== */}
        <div>
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-3">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl shadow-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">Academic Projects</h3>
                <p className="text-gray-600">Research-based projects and learning outcomes</p>
              </div>
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {academicProjects.map((project, idx) => (
              <AcademicProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
