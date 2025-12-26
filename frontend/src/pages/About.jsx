import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      {/* Header */}
      <div className="bg-blue-900 text-white py-20 text-center mt-16">
        <h1 className="text-4xl font-bold">About JR Constructions</h1>
        <p className="mt-4 text-xl text-blue-100">Building Trust Since 2010</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <img 
              src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c7c?q=80&w=1000&auto=format&fit=crop" 
              alt="Our Team" 
              className="rounded-lg shadow-xl"
            />
          </div>
          
          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h2>
            <p className="text-gray-600 mb-4 text-lg">
              JR Constructions is a leading construction firm based in India, dedicated to delivering high-quality residential and commercial projects. With over a decade of experience, we pride ourselves on precision, safety, and innovation.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              Our team of expert engineers and architects work tirelessly to turn your vision into reality. From blueprint to finishing touches, we handle every aspect of construction with professionalism.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 rounded shadow text-center border-t-4 border-blue-500">
                <h3 className="text-2xl font-bold text-blue-900">50+</h3>
                <p className="text-gray-500">Projects Completed</p>
              </div>
              <div className="bg-white p-4 rounded shadow text-center border-t-4 border-yellow-500">
                <h3 className="text-2xl font-bold text-blue-900">15+</h3>
                <p className="text-gray-500">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;