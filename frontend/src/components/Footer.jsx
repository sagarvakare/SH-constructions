import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Column 1: About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">JR Constructions</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional construction services with over 10 years of experience. 
              From residential homes to commercial complexes, we deliver excellence in every project.
              Building Your Dreams Into Reality.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-blue-400 transition cursor-pointer">Residential Construction</li>
              <li className="hover:text-blue-400 transition cursor-pointer">Commercial Projects</li>
              <li className="hover:text-blue-400 transition cursor-pointer">Renovation & Remodeling</li>
              <li className="hover:text-blue-400 transition cursor-pointer">Interior Design</li>
              <li className="hover:text-blue-400 transition cursor-pointer">Turnkey Solutions</li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p className="flex items-start gap-3">
                <span>??</span>
                <span>NO.4341/18, GF, 2ND CROSS,<br/>14TH MAIN ROAD, SUBRAMANYA NAGAR,<br/>RAJAJI NAGAR, BANGALORE</span>
              </p>
              <p className="flex items-center gap-3">
                <span>??</span>
                <span>9742955268, 9480772248</span>
              </p>
              <p className="flex items-center gap-3">
                <span>??</span>
                <span>jrconstructionsandsolutions@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Column 4: Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Business Hours</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>Mon - Fri:</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>9:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-red-400">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} JR Constructions & Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
