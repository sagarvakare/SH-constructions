import React from 'react';
import { 
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, 
  FaHardHat, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt 
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        
        {/* COLUMN 1: BRAND & SOCIAL */}
        <div>
          <div className="flex items-center gap-2 text-2xl font-bold mb-6">
            <FaHardHat className="text-orange-500" />
            <span>S H <span className="text-orange-500">Constructions</span></span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Professional construction services with over 10 years of experience. 
            Building dreams into reality with quality and excellence.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-all text-white"><FaFacebookF /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-all text-white"><FaTwitter /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-all text-white"><FaInstagram /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 transition-all text-white"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* COLUMN 2: SERVICES */}
        <div>
          <h4 className="text-xl font-bold mb-6 border-b-2 border-orange-500 inline-block pb-2">Our Services</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            {['Residential Construction', 'Commercial Construction', 'Renovation & Remodeling', 'General Contracting', 'Project Management'].map((item) => (
              <li key={item}>
                <a href="#services" className="hover:text-orange-500 transition-colors flex items-center gap-2">
                  <span className="text-orange-500">›</span> {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 3: LIVE MAP (FIXED) */}
        <div>
          <h4 className="text-xl font-bold mb-6 border-b-2 border-orange-500 inline-block pb-2">Our Location</h4>
          <div className="rounded-lg overflow-hidden border border-gray-700 h-48 w-full">
            {/* ✅ REAL GOOGLE MAPS EMBED LINK FOR SUBRAMANYA NAGAR */}
            <iframe 
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.696773950272!2d77.55047807584524!3d13.007204514446487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d8b37492915%3A0x633d7b833215160!2sSubramanya%20Nagar%2C%20Rajajinagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1703241234567!5m2!1sen!2sin"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </div>
        </div>

        {/* COLUMN 4: CONTACT INFO */}
        <div>
          <h4 className="text-xl font-bold mb-6 border-b-2 border-orange-500 inline-block pb-2">Contact Info</h4>
          <ul className="space-y-5 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <FaPhoneAlt className="text-orange-500 mt-1 flex-shrink-0" />
              <div className="flex flex-col gap-1">
                 <a href="tel:9742955268" className="hover:text-white transition font-medium">9742955268</a>
                 <a href="tel:9480772248" className="hover:text-white transition font-medium">9480772248</a>
              </div>
            </li>
            
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-orange-500 flex-shrink-0" />
              <a href="mailto:SH constructionandsolutions@gmail.com" className="hover:text-white transition break-all">
                SH constructionandsolutions@gmail.com
              </a>
            </li>
            
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-orange-500 mt-1 flex-shrink-0" />
              <span className="leading-relaxed">
                NO.4341/18, GF, 2ND CROSS, <br />
                14TH MAIN ROAD, SUBRAMANYA NAGAR, <br />
                RAJAJI NAGAR
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT BAR */}
      <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6">
        <p>© {new Date().getFullYear()} S H Constructions & Solutions. All Rights Reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
// import React from 'react';
// import { 
//   FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, 
//   FaHardHat, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt 
// } from 'react-icons/fa';

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800 font-sans">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        
//         {/* COLUMN 1: BRAND & SOCIAL */}
//         <div>
//           <div className="flex items-center gap-2 text-2xl font-bold mb-6">
//             <FaHardHat className="text-orange-500" />
//             <span>S H <span className="text-orange-500">Constructions</span></span>
//           </div>
//           <p className="text-gray-400 text-sm leading-relaxed mb-6">
//             Professional construction services with over 10 years of experience. 
//             Building dreams into reality with quality and excellence.
//           </p>
//           <div className="flex gap-4">
//             <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-all text-white"><FaFacebookF /></a>
//             <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-all text-white"><FaTwitter /></a>
//             <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-all text-white"><FaInstagram /></a>
//             <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 transition-all text-white"><FaLinkedinIn /></a>
//           </div>
//         </div>

//         {/* COLUMN 2: SERVICES */}
//         <div>
//           <h4 className="text-xl font-bold mb-6 border-b-2 border-orange-500 inline-block pb-2">Our Services</h4>
//           <ul className="space-y-3 text-sm text-gray-400">
//             {['Residential Construction', 'Commercial Construction', 'Renovation & Remodeling', 'General Contracting', 'Project Management'].map((item) => (
//               <li key={item}>
//                 <a href="#services" className="hover:text-orange-500 transition-colors flex items-center gap-2">
//                   <span className="text-orange-500">›</span> {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* COLUMN 3: LIVE MAP (FIXED) */}
//         <div>
//           <h4 className="text-xl font-bold mb-6 border-b-2 border-orange-500 inline-block pb-2">Our Location</h4>
//           <div className="rounded-lg overflow-hidden border border-gray-700 h-48 w-full">
//             {/* ✅ REAL GOOGLE MAPS EMBED LINK FOR SUBRAMANYA NAGAR */}
//             <iframe 
//               title="Office Location"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.696773950272!2d77.55047807584524!3d13.007204514446487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d8b37492915%3A0x633d7b833215160!2sSubramanya%20Nagar%2C%20Rajajinagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1703241234567!5m2!1sen!2sin"
//               width="100%" 
//               height="100%" 
//               style={{ border: 0 }} 
//               allowFullScreen="" 
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             >
//             </iframe>
//           </div>
//         </div>

//         {/* COLUMN 4: CONTACT INFO */}
//         <div>
//           <h4 className="text-xl font-bold mb-6 border-b-2 border-orange-500 inline-block pb-2">Contact Info</h4>
//           <ul className="space-y-5 text-sm text-gray-400">
//             <li className="flex items-start gap-3">
//               <FaPhoneAlt className="text-orange-500 mt-1 flex-shrink-0" />
//               <div className="flex flex-col gap-1">
//                  <a href="tel:9742955268" className="hover:text-white transition font-medium">9742955268</a>
//                  <a href="tel:9480772248" className="hover:text-white transition font-medium">9480772248</a>
//               </div>
//             </li>
            
//             <li className="flex items-center gap-3">
//               <FaEnvelope className="text-orange-500 flex-shrink-0" />
//               <a href="mailto:SH constructionandsolutions@gmail.com" className="hover:text-white transition break-all">
//                 SH constructionandsolutions@gmail.com
//               </a>
//             </li>
            
//             <li className="flex items-start gap-3">
//               <FaMapMarkerAlt className="text-orange-500 mt-1 flex-shrink-0" />
//               <span className="leading-relaxed">
//                 NO.4341/18, GF, 2ND CROSS, <br />
//                 14TH MAIN ROAD, SUBRAMANYA NAGAR, <br />
//                 RAJAJI NAGAR
//               </span>
//             </li>
//           </ul>
//         </div>

//       </div>

//       {/* COPYRIGHT BAR */}
//       <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6">
//         <p>© {new Date().getFullYear()} S H Constructions & Solutions. All Rights Reserved.</p>
//         <div className="flex gap-6 mt-4 md:mt-0">
//           <a href="#" className="hover:text-white transition">Privacy Policy</a>
//           <a href="#" className="hover:text-white transition">Terms of Service</a>
//         </div>
//       </div>
//     </footer>
//   );
// }import React from 'react';
// import { 
//   FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, 
//   FaHardHat, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt 
// } from 'react-icons/fa';

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800 font-sans">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        
//         {/* COLUMN 1: BRAND & SOCIAL */}
//         <div>
//           <div className="flex items-center gap-2 text-2xl font-bold mb-6">
//             <FaHardHat className="text-orange-500" />
//             <span>S H <span className="text-orange-500">Constructions</span></span>
//           </div>
//           <p className="text-gray-400 text-sm leading-relaxed mb-6">
//             Professional construction services with over 10 years of experience. 
//             Building dreams into reality with quality and excellence.
//           </p>
//           <div className="flex gap-4">
//             <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-all text-white"><FaFacebookF /></a>
//             <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-all text-white"><FaTwitter /></a>
//             <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-all text-white"><FaInstagram /></a>
//             <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 transition-all text-white"><FaLinkedinIn /></a>
//           </div>
//         </div>

//         {/* COLUMN 2: SERVICES */}
//         <div>
//           <h4 className="text-xl font-bold mb-6 border-b-2 border-orange-500 inline-block pb-2">Our Services</h4>
//           <ul className="space-y-3 text-sm text-gray-400">
//             {['Residential Construction', 'Commercial Construction', 'Renovation & Remodeling', 'General Contracting', 'Project Management'].map((item) => (
//               <li key={item}>
//                 <a href="#services" className="hover:text-orange-500 transition-colors flex items-center gap-2">
//                   <span className="text-orange-500">›</span> {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* COLUMN 3: LIVE MAP (FIXED) */}
//         <div>
//           <h4 className="text-xl font-bold mb-6 border-b-2 border-orange-500 inline-block pb-2">Our Location</h4>
//           <div className="rounded-lg overflow-hidden border border-gray-700 h-48 w-full">
//             {/* ✅ REAL GOOGLE MAPS EMBED LINK FOR SUBRAMANYA NAGAR */}
//             <iframe 
//               title="Office Location"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.696773950272!2d77.55047807584524!3d13.007204514446487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d8b37492915%3A0x633d7b833215160!2sSubramanya%20Nagar%2C%20Rajajinagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1703241234567!5m2!1sen!2sin"
//               width="100%" 
//               height="100%" 
//               style={{ border: 0 }} 
//               allowFullScreen="" 
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             >
//             </iframe>
//           </div>
//         </div>

//         {/* COLUMN 4: CONTACT INFO */}
//         <div>
//           <h4 className="text-xl font-bold mb-6 border-b-2 border-orange-500 inline-block pb-2">Contact Info</h4>
//           <ul className="space-y-5 text-sm text-gray-400">
//             <li className="flex items-start gap-3">
//               <FaPhoneAlt className="text-orange-500 mt-1 flex-shrink-0" />
//               <div className="flex flex-col gap-1">
//                  <a href="tel:9742955268" className="hover:text-white transition font-medium">9742955268</a>
//                  <a href="tel:9480772248" className="hover:text-white transition font-medium">9480772248</a>
//               </div>
//             </li>
            
//             <li className="flex items-center gap-3">
//               <FaEnvelope className="text-orange-500 flex-shrink-0" />
//               <a href="mailto:SH constructionandsolutions@gmail.com" className="hover:text-white transition break-all">
//                 SH constructionandsolutions@gmail.com
//               </a>
//             </li>
            
//             <li className="flex items-start gap-3">
//               <FaMapMarkerAlt className="text-orange-500 mt-1 flex-shrink-0" />
//               <span className="leading-relaxed">
//                 NO.4341/18, GF, 2ND CROSS, <br />
//                 14TH MAIN ROAD, SUBRAMANYA NAGAR, <br />
//                 RAJAJI NAGAR
//               </span>
//             </li>
//           </ul>
//         </div>

//       </div>

//       {/* COPYRIGHT BAR */}
//       <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6">
//         <p>© {new Date().getFullYear()} S H Constructions & Solutions. All Rights Reserved.</p>
//         <div className="flex gap-6 mt-4 md:mt-0">
//           <a href="#" className="hover:text-white transition">Privacy Policy</a>
//           <a href="#" className="hover:text-white transition">Terms of Service</a>
//         </div>
//       </div>
//     </footer>
//   );
// }import React from 'react';
// import { 
//   FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, 
//   FaHardHat, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt 
// } from 'react-icons/fa';

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800 font-sans">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        
//         {/* COLUMN 1: BRAND & SOCIAL */}
//         <div>
//           <div className="flex items-center gap-2 text-2xl font-bold mb-6">
//             <FaHardHat className="text-orange-500" />
//             <span>S H <span className="text-orange-500">Constructions</span></span>
//           </div>
//           <p className="text-gray-400 text-sm leading-relaxed mb-6">
//             Professional construction services with over 10 years of experience. 
//             Building dreams into reality with quality and excellence.
//           </p>
//           <div className="flex gap-4">
//             <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-all text-white"><FaFacebookF /></a>
//             <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-all text-white"><FaTwitter /></a>
//             <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-all text-white"><FaInstagram /></a>
//             <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 transition-all text-white"><FaLinkedinIn /></a>
//           </div>
//         </div>

//         {/* COLUMN 2: SERVICES */}
//         <div>
//           <h4 className="text-xl font-bold mb-6 border-b-2 border-orange-500 inline-block pb-2">Our Services</h4>
//           <ul className="space-y-3 text-sm text-gray-400">
//             {['Residential Construction', 'Commercial Construction', 'Renovation & Remodeling', 'General Contracting', 'Project Management'].map((item) => (
//               <li key={item}>
//                 <a href="#services" className="hover:text-orange-500 transition-colors flex items-center gap-2">
//                   <span className="text-orange-500">›</span> {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* COLUMN 3: LIVE MAP (FIXED) */}
//         <div>
//           <h4 className="text-xl font-bold mb-6 border-b-2 border-orange-500 inline-block pb-2">Our Location</h4>
//           <div className="rounded-lg overflow-hidden border border-gray-700 h-48 w-full">
//             {/* ✅ REAL GOOGLE MAPS EMBED LINK FOR SUBRAMANYA NAGAR */}
//             <iframe 
//               title="Office Location"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.696773950272!2d77.55047807584524!3d13.007204514446487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d8b37492915%3A0x633d7b833215160!2sSubramanya%20Nagar%2C%20Rajajinagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1703241234567!5m2!1sen!2sin"
//               width="100%" 
//               height="100%" 
//               style={{ border: 0 }} 
//               allowFullScreen="" 
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             >
//             </iframe>
//           </div>
//         </div>

//         {/* COLUMN 4: CONTACT INFO */}
//         <div>
//           <h4 className="text-xl font-bold mb-6 border-b-2 border-orange-500 inline-block pb-2">Contact Info</h4>
//           <ul className="space-y-5 text-sm text-gray-400">
//             <li className="flex items-start gap-3">
//               <FaPhoneAlt className="text-orange-500 mt-1 flex-shrink-0" />
//               <div className="flex flex-col gap-1">
//                  <a href="tel:9742955268" className="hover:text-white transition font-medium">9742955268</a>
//                  <a href="tel:9480772248" className="hover:text-white transition font-medium">9480772248</a>
//               </div>
//             </li>
            
//             <li className="flex items-center gap-3">
//               <FaEnvelope className="text-orange-500 flex-shrink-0" />
//               <a href="mailto:SH constructionandsolutions@gmail.com" className="hover:text-white transition break-all">
//                 SH constructionandsolutions@gmail.com
//               </a>
//             </li>
            
//             <li className="flex items-start gap-3">
//               <FaMapMarkerAlt className="text-orange-500 mt-1 flex-shrink-0" />
//               <span className="leading-relaxed">
//                 NO.4341/18, GF, 2ND CROSS, <br />
//                 14TH MAIN ROAD, SUBRAMANYA NAGAR, <br />
//                 RAJAJI NAGAR
//               </span>
//             </li>
//           </ul>
//         </div>

//       </div>

//       {/* COPYRIGHT BAR */}
//       <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6">
//         <p>© {new Date().getFullYear()} S H Constructions & Solutions. All Rights Reserved.</p>
//         <div className="flex gap-6 mt-4 md:mt-0">
//           <a href="#" className="hover:text-white transition">Privacy Policy</a>
//           <a href="#" className="hover:text-white transition">Terms of Service</a>
//         </div>
//       </div>
//     </footer>
//   );
// }import React from 'react';
// import { 
//   FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, 
//   FaHardHat, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt 
// } from 'react-icons/fa';

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800 font-sans">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        
//         {/* COLUMN 1: BRAND & SOCIAL */}
//         <div>
//           <div className="flex items-center gap-2 text-2xl font-bold mb-6">
//             <FaHardHat className="text-orange-500" />
//             <span>S H <span className="text-orange-500">Constructions</span></span>
//           </div>
//           <p className="text-gray-400 text-sm leading-relaxed mb-6">
//             Professional construction services with over 10 years of experience. 
//             Building dreams into reality with quality and excellence.
//           </p>
//           <div className="flex gap-4">
//             <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-all text-white"><FaFacebookF /></a>
//             <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-all text-white"><FaTwitter /></a>
//             <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-all text-white"><FaInstagram /></a>
//             <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 transition-all text-white"><FaLinkedinIn /></a>
//           </div>
//         </div>

//         {/* COLUMN 2: SERVICES */}
//         <div>
//           <h4 className="text-xl font-bold mb-6 border-b-2 border-orange-500 inline-block pb-2">Our Services</h4>
//           <ul className="space-y-3 text-sm text-gray-400">
//             {['Residential Construction', 'Commercial Construction', 'Renovation & Remodeling', 'General Contracting', 'Project Management'].map((item) => (
//               <li key={item}>
//                 <a href="#services" className="hover:text-orange-500 transition-colors flex items-center gap-2">
//                   <span className="text-orange-500">›</span> {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* COLUMN 3: LIVE MAP (FIXED) */}
//         <div>
//           <h4 className="text-xl font-bold mb-6 border-b-2 border-orange-500 inline-block pb-2">Our Location</h4>
//           <div className="rounded-lg overflow-hidden border border-gray-700 h-48 w-full">
//             {/* ✅ REAL GOOGLE MAPS EMBED LINK FOR SUBRAMANYA NAGAR */}
//             <iframe 
//               title="Office Location"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.696773950272!2d77.55047807584524!3d13.007204514446487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d8b37492915%3A0x633d7b833215160!2sSubramanya%20Nagar%2C%20Rajajinagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1703241234567!5m2!1sen!2sin"
//               width="100%" 
//               height="100%" 
//               style={{ border: 0 }} 
//               allowFullScreen="" 
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             >
//             </iframe>
//           </div>
//         </div>

//         {/* COLUMN 4: CONTACT INFO */}
//         <div>
//           <h4 className="text-xl font-bold mb-6 border-b-2 border-orange-500 inline-block pb-2">Contact Info</h4>
//           <ul className="space-y-5 text-sm text-gray-400">
//             <li className="flex items-start gap-3">
//               <FaPhoneAlt className="text-orange-500 mt-1 flex-shrink-0" />
//               <div className="flex flex-col gap-1">
//                  <a href="tel:9742955268" className="hover:text-white transition font-medium">9742955268</a>
//                  <a href="tel:9480772248" className="hover:text-white transition font-medium">9480772248</a>
//               </div>
//             </li>
            
//             <li className="flex items-center gap-3">
//               <FaEnvelope className="text-orange-500 flex-shrink-0" />
//               <a href="mailto:SH constructionandsolutions@gmail.com" className="hover:text-white transition break-all">
//                 SH constructionandsolutions@gmail.com
//               </a>
//             </li>
            
//             <li className="flex items-start gap-3">
//               <FaMapMarkerAlt className="text-orange-500 mt-1 flex-shrink-0" />
//               <span className="leading-relaxed">
//                 NO.4341/18, GF, 2ND CROSS, <br />
//                 14TH MAIN ROAD, SUBRAMANYA NAGAR, <br />
//                 RAJAJI NAGAR
//               </span>
//             </li>
//           </ul>
//         </div>

//       </div>

//       {/* COPYRIGHT BAR */}
//       <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6">
//         <p>© {new Date().getFullYear()} S H Constructions & Solutions. All Rights Reserved.</p>
//         <div className="flex gap-6 mt-4 md:mt-0">
//           <a href="#" className="hover:text-white transition">Privacy Policy</a>
//           <a href="#" className="hover:text-white transition">Terms of Service</a>
//         </div>
//       </div>
//     </footer>
//   );
// }