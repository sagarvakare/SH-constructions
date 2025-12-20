import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

export default function Testimonials({ testimonials }) {
  return (
    <section className="py-20 bg-blue-900 text-white px-6 relative overflow-hidden">
       <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
       <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12">Client <span className="text-orange-500">Testimonials</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <motion.div 
                key={t.id} whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl"
              >
                <div className="text-orange-400 text-2xl mb-4 flex gap-1"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                <p className="italic text-gray-200 mb-6">"{t.text}"</p>
                <h4 className="font-bold">{t.name}</h4>
                <p className="text-xs text-gray-300">{t.role}</p>
              </motion.div>
            ))}
          </div>
       </div>
    </section>
  );
}