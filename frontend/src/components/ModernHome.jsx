import React, { useState } from 'react';
import { FaHammer, FaWrench, FaHome } from 'react-icons/fa';

// Import your components
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials'; // This uses the new design
import Contact from '../components/Contact';
import Footer from '../components/Footer';

// --- MOCK DATA ---
const initialServices = [
  { id: 1, icon: <FaHammer />, title: "Structure Works", desc: "End-to-end civil works for large-scale projects." },
  { id: 2, icon: <FaWrench />, title: "Turnkey Projects", desc: "Concept to completion solutions." },
  { id: 3, icon: <FaHome />, title: "Interior Works", desc: "Stylish and functional interior solutions." },
];

const initialProjects = [
  { id: 1, category: "Residential", title: "Pratham Heights", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=400" },
  { id: 2, category: "Residential", title: "Govt. School Wing", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=400" },
];

const initialTeam = [
  { id: 1, name: "Raghu B N", role: "Managing Director", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 2, name: "Javeed", role: "Managing Director", img: "https://randomuser.me/api/portraits/men/45.jpg" },
];

// ✅ UPDATED DATA TO MATCH YOUR SCREENSHOT
const initialTestimonials = [
  { 
    id: 1, 
    name: "Manish Gadia", 
    role: "Managing Director, Pratham Builders", 
    text: "Till handing over, the support provided was very good. Highly professional team." 
  },
  { 
    id: 2, 
    name: "Sriram", 
    role: "GM, Casagrand Bangalore", 
    text: "Project was completed on time with utmost professionalism. Great experience." 
  },
  { 
    id: 3, 
    name: "Vinod", 
    role: "Managing Director, SKAV Developer", 
    text: "Good support in main city work, executed without any allegations. Very satisfied." 
  },
  { 
    id: 4, 
    name: "Nataraj", 
    role: "Client", 
    text: "Commendable execution and consistent support throughout the project lifecycle." 
  }
];

export default function ModernHome() {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [services, setServices] = useState(initialServices);
  const [projects, setProjects] = useState(initialProjects);
  const [team, setTeam] = useState(initialTeam);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 overflow-x-hidden">
      
      {/* Admin Toggle */}
      <button 
        onClick={() => setIsAdminMode(!isAdminMode)}
        className={`fixed bottom-5 right-5 z-50 px-6 py-3 rounded-full shadow-2xl font-bold transition-all ${isAdminMode ? 'bg-red-600 text-white' : 'bg-gray-800 text-white'}`}
      >
        {isAdminMode ? "Exit Admin Mode" : "Enable Admin Mode"}
      </button>

      {/* --- SECTIONS --- */}
      <div id="hero"><Hero /></div>
      <div id="services"><Services services={services} setServices={setServices} isAdminMode={isAdminMode} /></div>
      <div id="projects"><Projects projects={projects} setProjects={setProjects} isAdminMode={isAdminMode} /></div>
      
      {/* 1. TEAM SECTION */}
      <div id="team"><Team team={team} setTeam={setTeam} isAdminMode={isAdminMode} /></div>

      {/* 2. TESTIMONIALS (Updated Style) */}
      <div id="testimonials">
        <Testimonials testimonials={initialTestimonials} />
      </div>

      <div id="contact"><Contact /></div>

      <Footer />
      
    </div>
  );
}