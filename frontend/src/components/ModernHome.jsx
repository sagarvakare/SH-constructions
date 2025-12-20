import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHammer, FaWrench, FaHome, FaPhone, FaEnvelope, FaMapMarkerAlt, FaStar, FaTrash, FaCheckCircle } from 'react-icons/fa';

// --- INITIAL DATA ---
const initialServices = [
  { id: 1, icon: <FaHammer />, title: "Structure Works", desc: "End-to-end civil works for large-scale projects." },
  { id: 2, icon: <FaWrench />, title: "Turnkey Projects", desc: "Comprehensive solutions from concept to completion." },
  { id: 3, icon: <FaHome />, title: "Interior Works", desc: "Stylish and functional interior solutions." },
];

const initialProjects = [
  { id: 1, title: "Pratham Heights", category: "Residential", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500" },
  { id: 2, title: "Westside Complex", category: "Commercial", img: "https://images.unsplash.com/photo-1486406140926-c627a92ad1ab?w=500" },
  { id: 3, title: "Govt. School Wing", category: "Institutional", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500" },
];

const initialTeam = [
  { id: 1, name: "Raghu B N", role: "Managing Director", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 2, name: "Javeed", role: "Managing Director", img: "https://randomuser.me/api/portraits/men/45.jpg" },
  { id: 3, name: "Isak Ibrahim", role: "Project Manager", img: "https://randomuser.me/api/portraits/men/22.jpg" },
];

export default function ModernHome({ user }) {
  const [services, setServices] = useState(initialServices);
  const [projects, setProjects] = useState(initialProjects);
  const isAdmin = user?.isAdmin; // Only true if logged in

  // --- DYNAMIC FUNCTIONS ---
  const handleDelete = (id, setList) => {
    if(window.confirm("Admin Action: Are you sure you want to delete this?")) {
      setList(prev => prev.filter(item => item.id !== id));
    }
  };

  return (
    <div className="pt-16 bg-gray-50 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <div id="hero" className="relative py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{x:-50, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:0.8}}>
            <h1 className="text-4xl md:text-6xl font-extrabold text-jr-blue mb-6 leading-tight">
              Building Dreams <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Crafting Reality</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Over 10 years of excellence in construction. We deliver quality, innovation, and trust.
            </p>
            <div className="space-y-3">
               {["Licensed & Fully Insured", "LEED Certified Green Building", "24/7 Customer Support"].map((txt, i) => (
                 <div key={i} className="flex items-center gap-3 font-semibold text-gray-700"><FaCheckCircle className="text-green-500"/> {txt}</div>
               ))}
            </div>
          </motion.div>
          <motion.div initial={{scale:0.8, opacity:0}} whileInView={{scale:1, opacity:1}} className="relative">
            <div className="absolute inset-0 bg-jr-orange rounded-full blur-3xl opacity-20 -z-10"></div>
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800" className="rounded-2xl shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition duration-500" alt="Hero"/>
          </motion.div>
        </div>
      </div>

      {/* 2. SERVICES (Dynamic & Responsive) */}
      <div id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-jr-blue">Our <span className="text-jr-orange">Services</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <AnimatePresence>
            {services.map((s) => (
              <motion.div key={s.id} whileHover={{y:-10}} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-jr-orange relative group">
                {isAdmin && (
                  <button onClick={() => handleDelete(s.id, setServices)} className="absolute top-4 right-4 bg-red-100 text-red-500 p-2 rounded-full hover:bg-red-200 transition">
                    <FaTrash/>
                  </button>
                )}
                <div className="w-16 h-16 bg-orange-50 rounded-xl flex items-center justify-center text-3xl text-jr-orange mb-6 group-hover:bg-jr-orange group-hover:text-white transition">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* 3. PROJECTS */}
      <div id="projects" className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
           <h2 className="text-4xl font-bold text-jr-blue">Our <span className="text-jr-orange">Projects</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((p) => (
            <div key={p.id} className="relative group overflow-hidden rounded-xl shadow-lg h-72 cursor-pointer">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-jr-orange font-bold uppercase text-xs">{p.category}</span>
                <h3 className="text-white text-xl font-bold">{p.title}</h3>
                {isAdmin && <button onClick={() => handleDelete(p.id, setProjects)} className="text-red-400 text-sm mt-2 underline">Delete Project</button>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. TEAM */}
      <div id="team" className="py-20 px-6 bg-gray-50">
         <div className="max-w-7xl mx-auto text-center mb-12"><h2 className="text-4xl font-bold text-jr-blue">Meet Our <span className="text-jr-orange">Team</span></h2></div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {initialTeam.map((m) => (
               <div key={m.id} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full p-1 border-2 border-jr-orange">
                     <img src={m.img} className="w-full h-full rounded-full object-cover" alt={m.name}/>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{m.name}</h3>
                  <p className="text-jr-orange font-medium">{m.role}</p>
               </div>
            ))}
         </div>
      </div>

      {/* 5. CONTACT */}
      <div id="contact" className="py-20 bg-white px-6">
         <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
            <div className="bg-jr-blue text-white p-10 flex flex-col justify-center">
               <h2 className="text-3xl font-bold mb-6">Get In <span className="text-jr-orange">Touch</span></h2>
               <div className="space-y-6">
                  <div className="flex items-center gap-4"><FaPhone className="text-jr-orange text-xl"/> +91 9742955268</div>
                  <div className="flex items-center gap-4"><FaEnvelope className="text-jr-orange text-xl"/> jrconstructions@gmail.com</div>
                  <div className="flex items-center gap-4"><FaMapMarkerAlt className="text-jr-orange text-xl"/> Rajaji Nagar, Bengaluru</div>
               </div>
            </div>
            <div className="p-10 bg-gray-50">
               <form className="space-y-4">
                  <input placeholder="Your Name" className="w-full p-3 rounded-lg border focus:border-jr-orange outline-none"/>
                  <input placeholder="Email Address" className="w-full p-3 rounded-lg border focus:border-jr-orange outline-none"/>
                  <textarea placeholder="Message" rows="3" className="w-full p-3 rounded-lg border focus:border-jr-orange outline-none"></textarea>
                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-bold shadow-lg hover:shadow-orange-500/30">Send Message</button>
               </form>
            </div>
         </div>
      </div>

    </div>
  );
}