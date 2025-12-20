import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaHardHat, FaUserCircle } from 'react-icons/fa';

export default function Navbar({ user, onLogout }) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Glassmorphism Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Senior Logic: Handles Navigation from ANY page
  const scrollToSection = (id) => {
    setIsOpen(false); // Close mobile menu
    if (location.pathname !== "/") {
      navigate("/"); // Go Home first
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-white/90 backdrop-blur-md py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div onClick={() => scrollToSection('hero')} className="flex items-center gap-2 cursor-pointer select-none">
          <FaHardHat className="text-jr-orange text-3xl" />
          <span className="text-2xl font-extrabold text-jr-blue">SH <span className="text-jr-orange">Constructions</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          {navItems.map((item) => (
            <button key={item.name} onClick={() => scrollToSection(item.id)} className="hover:text-jr-orange transition-colors font-semibold">
              {item.name}
            </button>
          ))}
          
          {user ? (
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2 text-jr-blue font-bold border px-3 py-1 rounded-full bg-gray-50">
                <FaUserCircle /> {user.name}
              </span>
              <button onClick={onLogout} className="px-5 py-2 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition shadow-md">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="px-5 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-bold hover:scale-105 transition shadow-md">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-2xl text-jr-blue focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t p-6 flex flex-col gap-6 shadow-2xl absolute w-full left-0">
          {navItems.map((item) => (
            <button key={item.name} onClick={() => scrollToSection(item.id)} className="text-left text-lg font-bold text-gray-800 hover:text-jr-orange">
              {item.name}
            </button>
          ))}
          <div className="border-t pt-4 mt-2">
            {user ? (
               <button onClick={onLogout} className="w-full text-center py-3 bg-red-500 text-white rounded-lg font-bold">Logout ({user.name})</button>
            ) : (
               <Link to="/login" onClick={() => setIsOpen(false)} className="block w-full text-center py-3 bg-jr-orange text-white rounded-lg font-bold">Login</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}