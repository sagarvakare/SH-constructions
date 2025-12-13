import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();

  // Helper to check active link
  const isActive = (path) => location.pathname === path ? "text-blue-600 font-bold" : "text-gray-600 hover:text-blue-500";

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
             <span className="text-2xl font-extrabold text-blue-900 tracking-tighter">JR<span className="text-yellow-500">.</span></span>
          </Link>

          {/* Centered Links (The "Sticky Middle" you asked for) */}
          <div className="hidden md:flex space-x-8 bg-gray-100/50 px-8 py-2 rounded-full border border-gray-200">
            <Link to="/" className={`${isActive('/')} transition-colors duration-300`}>Home</Link>
            <Link to="/about" className={`${isActive('/about')} transition-colors duration-300`}>About</Link>
            <Link to="/services" className={`${isActive('/services')} transition-colors duration-300`}>Services</Link>
            <Link to="/contact" className={`${isActive('/contact')} transition-colors duration-300`}>Contact</Link>
          </div>

          {/* Admin Button */}
          <Link to="/login" className="bg-blue-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-800 transition transform hover:scale-105 shadow-lg">
            Admin Area
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;