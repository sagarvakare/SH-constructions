import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects automatically when page loads
    axios.get('http://localhost:8080/api/projects')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* --- HERO SECTION --- */}
      <div className="relative bg-blue-900 h-96 flex items-center justify-center mt-16">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop" 
            alt="Construction Background" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Building Your Dreams</h1>
          <p className="text-xl text-gray-200 mb-8">Quality Construction & Engineering Solutions</p>
          <a href="#projects" className="bg-yellow-500 text-blue-900 font-bold px-8 py-3 rounded-full hover:bg-yellow-400 transition">
            View Our Work
          </a>
        </div>
      </div>

      {/* --- FEATURED PROJECTS --- */}
      <div id="projects" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Latest Projects</h2>
        
        {projects.length === 0 ? (
          <p className="text-center text-gray-500">No projects added yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map(project => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <img 
                  src={project.imageUrl || "https://via.placeholder.com/400"} 
                  alt={project.title} 
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-4">
                    <span>📍 {project.location}</span>
                    <span>📅 {project.completionDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>&copy; 2025 JR Constructions. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;