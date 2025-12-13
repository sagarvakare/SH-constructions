import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/services')
      .then(res => setServices(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      <div className="bg-blue-900 text-white py-20 text-center mt-16">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="mt-4 text-xl text-blue-100">World-Class Construction Solutions</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {services.length === 0 ? (
          <p className="text-center text-gray-500">Loading services...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map(service => (
              <div key={service.id} className="bg-white p-8 rounded-lg shadow-lg hover:-translate-y-2 transition duration-300">
                <div className="h-16 w-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl mb-6 mx-auto">
                   {/* Fallback icon if no URL provided */}
                   {service.iconUrl ? <img src={service.iconUrl} className="h-10 w-10"/> : "🏗️"}
                </div>
                <h3 className="text-xl font-bold text-center mb-4">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;