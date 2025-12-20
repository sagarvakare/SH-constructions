// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaHardHat, FaUserCircle } from 'react-icons/fa';

export default function Navbar({ user, onLogout }) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Glass effect on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- SMART NAVIGATION FUNCTION ---
  const scrollToSection = (id) => {
    setIsOpen(false); // Close mobile menu if open

    if (location.pathname !== "/") {
      // If we are on Login page, go to Home first, then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100); // Small delay to allow page transition
    } else {
      // If we are already on Home, just scroll
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "Team", id: "team" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" onClick={() => scrollToSection('hero')} className="flex items-center gap-2 text-2xl font-extrabold text-gray-900 cursor-pointer">
          <FaHardHat className="text-orange-600 text-3xl" />
          <span>JR <span className="text-orange-600">Constructions</span></span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          {navItems.map((item) => (
            <button 
              key={item.name} 
              onClick={() => scrollToSection(item.id)}
              className="hover:text-orange-600 transition-colors bg-transparent border-none cursor-pointer"
            >
              {item.name}
            </button>
          ))}
          
          {user ? (
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2 text-blue-900 font-bold">
                <FaUserCircle /> {user.name}
              </span>
              <button onClick={onLogout} className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full font-bold shadow-md transition-transform hover:scale-105">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="px-5 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-bold shadow-md transition-transform hover:scale-105">
              Login
            </Link>
          )}
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button className="md:hidden text-2xl text-gray-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl absolute w-full"
          >
            <div className="flex flex-col items-center gap-6 py-8 font-bold text-gray-800">
              {navItems.map((item) => (
                <button key={item.name} onClick={() => scrollToSection(item.id)} className="hover:text-orange-500">
                  {item.name}
                </button>
              ))}
              {user ? (
                 <button onClick={onLogout} className="text-red-500">Logout</button>
              ) : (
                 <Link to="/login" onClick={() => setIsOpen(false)} className="text-orange-500">Login</Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}