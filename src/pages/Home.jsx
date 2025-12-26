import { useEffect, useState } from 'react';
import api from '../api/axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion'; // <--- Import this

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/api/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.error("Error fetching projects:", error));
  }, []);

  return (
    // Wrap entire page in motion.div for page-load animation
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="bg-gray-50 font-sans"
    >
      <Navbar />
      
      {/* ... (Keep the rest of your Home.jsx code exactly the same) ... */}
      
      {/* Just copy the middle content from your previous Home.jsx here */}
      <div className="relative h-[600px] flex items-center justify-center mt-16">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop" alt="Construction" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight"
          >
            Building Your <span className="text-yellow-500">Dreams</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 mb-10 font-light"
          >
            Premium Construction & Engineering Solutions in Bangalore.
          </motion.p>
          <motion.div 
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.6 }}
             className="flex justify-center gap-4"
          >
            <a href="#projects" className="bg-blue-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-700 transition transform hover:scale-105 shadow-lg">View Our Work</a>
            <a href="/contact" className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition transform hover:scale-105">Contact Us</a>
          </motion.div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Latest Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        {projects.length === 0 ? <p className="text-center">Loading...</p> : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }} // Animate when scrolled into view
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }} // Stagger effect
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                    <img src={project.imageUrl || "https://via.placeholder.com/400"} alt={project.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-110"/>
                    <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">{project.location.split(',')[0]}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </motion.div>
  );
};

export default Home;