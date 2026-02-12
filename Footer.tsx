export function Footer() {
  return (
    <footer className="py-8 px-4 md:px-8 lg:px-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Surya. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="#about" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              About
            </a>
            <a 
              href="#skills" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}