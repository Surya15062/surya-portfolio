import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

const javaProjects = [
  {
    id: 1,
    title: 'Student Record Management System (JDBC)',
    description: 'Java-based application developed using JDBC to perform CRUD operations on a database. Implemented data insertion, retrieval, updating, and deletion to understand how Java connects with SQL databases.',
    techStack: 'Java, JDBC, MySQL',
    image: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMG1hbmFnZW1lbnQlMjBqYXZhJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzcwMjAxNTMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const academicProjects = [
  {
    id: 2,
    title: 'Real-Time Bus Overcrowding Detection System',
    description: 'Academic project focused on solving public transport overcrowding using computer vision. The system detects passenger count inside buses and identifies overcrowding conditions. Contributed to system logic and understanding how AI integrates with software systems.',
    techStack: 'Python, YOLOv8, OpenCV',
    image: 'https://images.unsplash.com/photo-1728803766713-fcaf4a4b6bd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXMlMjB0cmFuc3BvcnRhdGlvbiUyMGRldGVjdGlvbiUyMHN5c3RlbXxlbnwxfHx8fDE3NzAyMDE1MzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const designProjects = [
  {
    id: 3,
    title: 'Mobile Banking App',
    description: 'Complete UX research, wireframing, and high-fidelity prototyping for a seamless mobile banking experience.',
    image: 'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwMTYwNjI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    title: 'SaaS Dashboard Design',
    description: 'User-centered design process from research to final UI, creating an intuitive analytics dashboard for businesses.',
    image: 'https://images.unsplash.com/photo-1761122827167-159d1d272313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMGRlc2lnbiUyMHdpcmVmcmFtZSUyMHNrZXRjaHxlbnwxfHx8fDE3NzAxMzc1NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my academic and personal projects
          </p>
        </div>
        
        {/* Java Development Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
            Java Development Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {javaProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:translate-y-[-4px]"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h4>
                  <p className="text-gray-600 mb-3 leading-relaxed">{project.description}</p>
                  <p className="text-sm text-blue-600 font-semibold mb-4">
                    Tech Stack: {project.techStack}
                  </p>
                  <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-300">
                    View Project Details
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Academic Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-green-600 rounded-full"></span>
            Academic Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {academicProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:translate-y-[-4px]"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h4>
                  <p className="text-gray-600 mb-3 leading-relaxed">{project.description}</p>
                  <p className="text-sm text-green-600 font-semibold mb-4">
                    Tech Stack: {project.techStack}
                  </p>
                  <button className="inline-flex items-center gap-2 text-green-600 font-semibold hover:gap-3 transition-all duration-300">
                    View Project Overview
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* UI/UX Design Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
            UI/UX Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {designProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:translate-y-[-4px]"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-300">
                    View Case Study
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
