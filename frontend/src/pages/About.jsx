import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaShieldAlt, FaGlobe, FaHandshake, FaUsers, FaCertificate, 
  FaCheckCircle, FaArrowRight, FaBuilding, FaHardHat, FaAward 
} from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: <FaShieldAlt className="text-4xl text-blue-500" />,
      title: 'Trust & Integrity',
      description: 'We operate with complete transparency and honesty in all our dealings with workers and employers.'
    },
    {
      icon: <FaUsers className="text-4xl text-blue-500" />,
      title: 'Worker Welfare',
      description: 'The well-being and rights of our workers are our top priority in every placement we make.'
    },
    {
      icon: <FaAward className="text-4xl text-blue-500" />,
      title: 'Quality Service',
      description: 'We maintain the highest standards in recruitment, ensuring the best match between workers and employers.'
    },
    {
      icon: <FaHandshake className="text-4xl text-blue-500" />,
      title: 'Long-term Partnerships',
      description: 'We build lasting relationships with both workers and companies based on mutual respect and success.'
    }
  ];

  const services = [
    'Recruitment of skilled and unskilled construction workers',
    'Complete visa sponsorship and processing',
    'Medical examination and fitness certification',
    'Travel arrangements from India to Dubai',
    'Accommodation assistance in Dubai',
    'Pre-departure orientation and training',
    'Documentation and legal compliance',
    'Ongoing support and worker welfare',
    'Contract negotiation and management',
    'Emergency assistance and problem resolution'
  ];

  const stats = [
    { number: '5000+', label: 'Workers Placed' },
    { number: '50+', label: 'Partner Companies' },
    { number: '10+', label: 'Years Experience' },
    { number: '95%', label: 'Success Rate' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 text-white py-8 md:py-16 lg:py-20">
        <div className="container-custom px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-1.5 md:space-x-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-3 md:mb-6">
              <FaCertificate className="text-yellow-300 text-sm md:text-base" />
              <span className="text-xs md:text-sm font-semibold">Government Licensed & Authorized</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 md:mb-6">About EAZ AL TALAB</h1>
            <p className="text-sm md:text-lg lg:text-xl text-gray-200">
              Your trusted partner for construction manpower recruitment from India to Dubai, UAE
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-6 md:py-12 lg:py-16 px-4">
        {/* Company Overview */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-center mb-8 md:mb-12 lg:mb-16">
          <div>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-3 md:mb-5 lg:mb-6">
              Connecting Indian Talent with Dubai's Construction Industry
            </h2>
            <div className="space-y-3 md:space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
              <p>
                <strong className="text-gray-900">EAZ AL TALAB</strong> is a government-licensed manpower recruitment agency 
                specializing in providing skilled and unskilled construction workers from India to leading construction 
                companies in Dubai, United Arab Emirates.
              </p>
              <p>
                With over a decade of experience in the recruitment industry, we have successfully placed thousands of 
                Indian workers in various construction roles across Dubai. Our deep understanding of both the Indian labor 
                market and UAE construction industry requirements makes us the ideal partner for workers seeking 
                opportunities abroad and companies looking for reliable manpower.
              </p>
              <p>
                We are fully authorized and licensed by the UAE government to conduct recruitment activities, ensuring 
                complete legal compliance and protection for all parties involved. Our commitment to ethical recruitment 
                practices and worker welfare has earned us the trust of major construction companies in Dubai.
              </p>
              <p>
                From steel fixers and masons to electricians and general laborers, we recruit across all construction 
                trades. Every placement includes complete visa sponsorship, accommodation arrangements, medical insurance, 
                and ongoing support to ensure a smooth transition and successful career in Dubai.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 md:gap-4">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop"
              alt="Dubai skyline"
              className="rounded-lg shadow-lg object-cover h-32 md:h-40 lg:h-48"
            />
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop"
              alt="Construction workers"
              className="rounded-lg shadow-lg object-cover h-32 md:h-40 lg:h-48 mt-4 md:mt-8"
            />
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop"
              alt="Construction site"
              className="rounded-lg shadow-lg object-cover h-32 md:h-40 lg:h-48"
            />
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop"
              alt="Dubai construction"
              className="rounded-lg shadow-lg object-cover h-32 md:h-40 lg:h-48 mt-4 md:mt-8"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-12 lg:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg md:rounded-xl p-3 md:p-5 lg:p-6 shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-0.5 md:mb-1">{stat.number}</div>
              <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Our Mission */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-100 rounded-xl md:rounded-2xl p-4 md:p-8 lg:p-12 mb-8 md:mb-12 lg:mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-6">
              <FaBuilding className="text-white text-xl md:text-2xl" />
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-3 md:mb-6">Our Mission</h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-3 md:mb-6">
              To bridge the gap between skilled Indian construction workers seeking international opportunities and 
              Dubai's growing construction industry by providing ethical, transparent, and comprehensive recruitment 
              services that benefit both workers and employers.
            </p>
            <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
              We are committed to ensuring that every worker we place has access to fair employment, safe working
              conditions, and the support they need to build a successful career in Dubai while maintaining the
              highest standards of service for our employer partners.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          <div className="text-center mb-6 md:mb-10 lg:mb-12">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-2 md:mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              The principles that guide everything we do in our recruitment and placement services
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-6">
            {values.map((value, index) => (
              <div key={index} className="card text-center p-3 md:p-5 lg:p-6">
                <div className="flex justify-center mb-2 md:mb-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-blue-50 rounded-full flex items-center justify-center">
                    {React.cloneElement(value.icon, { className: 'text-2xl md:text-3xl lg:text-4xl text-blue-500' })}
                  </div>
                </div>
                <h3 className="text-sm md:text-lg lg:text-xl font-heading font-semibold text-gray-900 mb-1.5 md:mb-3">
                  {value.title}
                </h3>
                <p className="text-xs md:text-sm lg:text-base text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Services */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-center mb-8 md:mb-12 lg:mb-16">
          <div className="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop"
              alt="Professional team"
              className="rounded-xl md:rounded-2xl shadow-2xl object-cover w-full h-64 md:h-96 lg:h-[500px]"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-3 md:mb-5 lg:mb-6">
              Comprehensive Recruitment Services
            </h2>
            <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
              We provide end-to-end recruitment solutions, handling every aspect of the process from initial
              candidate screening in India to successful job placement in Dubai.
            </p>
            <div className="space-y-2 md:space-y-3">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-2 md:space-x-3">
                  <FaCheckCircle className="text-blue-500 mt-0.5 md:mt-1 flex-shrink-0 text-sm md:text-base" />
                  <span className="text-gray-700 text-xs md:text-sm lg:text-base">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Government Licensing */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl md:rounded-2xl p-4 md:p-8 lg:p-12 mb-8 md:mb-12 lg:mb-16">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <div className="flex items-center space-x-2 md:space-x-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaCertificate className="text-white text-base md:text-xl" />
                </div>
                <h2 className="text-lg md:text-2xl lg:text-3xl font-heading font-bold text-gray-900">
                  Government Licensed & Authorized
                </h2>
              </div>
              <div className="space-y-3 md:space-y-4 text-gray-700 text-sm md:text-base">
                <p>
                  <strong className="text-gray-900">EAZ AL TALAB</strong> is fully licensed and authorized by the 
                  UAE government to conduct manpower recruitment activities. Our license ensures:
                </p>
                <ul className="space-y-1.5 md:space-y-2">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-purple-600 mt-0.5 md:mt-1 mr-2 flex-shrink-0 text-sm md:text-base" />
                    <span className="text-xs md:text-sm lg:text-base">Complete legal compliance with UAE labor laws</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-purple-600 mt-0.5 md:mt-1 mr-2 flex-shrink-0 text-sm md:text-base" />
                    <span className="text-xs md:text-sm lg:text-base">Protection of worker rights and welfare</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-purple-600 mt-0.5 md:mt-1 mr-2 flex-shrink-0 text-sm md:text-base" />
                    <span className="text-xs md:text-sm lg:text-base">Transparent and ethical recruitment practices</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-purple-600 mt-0.5 md:mt-1 mr-2 flex-shrink-0 text-sm md:text-base" />
                    <span className="text-xs md:text-sm lg:text-base">Verified and legitimate job placements</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-purple-600 mt-0.5 md:mt-1 mr-2 flex-shrink-0 text-sm md:text-base" />
                    <span className="text-xs md:text-sm lg:text-base">Government oversight and accountability</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-center">
                <div className="w-24 h-24 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaShieldAlt className="text-white text-4xl" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  Verified & Trusted
                </h3>
                <p className="text-gray-600 mb-4">
                  Our government license guarantees that all our recruitment activities are legal, transparent, 
                  and in full compliance with UAE regulations.
                </p>
                <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full">
                  <FaCertificate className="text-purple-600" />
                  <span className="text-sm font-semibold text-purple-800">Licensed Recruitment Agency</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Why Choose EAZ AL TALAB?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What sets us apart as the preferred recruitment partner for construction workers and companies
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FaGlobe className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                India-Dubai Expertise
              </h3>
              <p className="text-gray-600">
                Deep understanding of both Indian labor market and Dubai construction industry requirements, 
                ensuring perfect matches.
              </p>
            </div>
            <div className="card">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <FaHardHat className="text-purple-600 text-xl" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                Construction Specialists
              </h3>
              <p className="text-gray-600">
                Exclusive focus on construction sector recruitment, with expertise across all trades from 
                laborers to supervisors.
              </p>
            </div>
            <div className="card">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <FaHandshake className="text-indigo-600 text-xl" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                Complete Support
              </h3>
              <p className="text-gray-600">
                End-to-end service from recruitment to placement, including visa processing, travel, and 
                ongoing worker support.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Start Your Dubai Career?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're a skilled tradesman or looking to start your construction career, we're here to help 
            you find the right opportunity in Dubai with full visa sponsorship.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/jobs" className="btn bg-white text-blue-700 hover:bg-gray-100">
              Browse Construction Jobs
            </Link>
            <Link to="/contact" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700">
              Contact Us for More Information <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// Made with Bob
