import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaHardHat, FaTools, FaUserTie, FaUsers, FaWrench, FaPaintRoller,
  FaBolt, FaHammer, FaArrowRight, FaCheckCircle, FaCertificate,
  FaShieldAlt, FaGlobe, FaHandshake, FaStar, FaAward, FaRocket, FaBriefcase
} from 'react-icons/fa';
import { jobsAPI } from '../services/api';

const Home = () => {
  const [stats, setStats] = useState({
    jobs: 100,
    placements: 5000,
    companies: 50,
    successRate: 95
  });

  useEffect(() => {
    // Set jobs to 100+ by default
    setStats(prev => ({ ...prev, jobs: 100 }));
  }, []);

  const jobCategories = [
    {
      icon: <FaHardHat className="text-4xl text-primary-600" />,
      title: 'Steel Fixers',
      description: 'Experienced steel fixers for high-rise construction projects',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop'
    },
    {
      icon: <FaTools className="text-4xl text-primary-600" />,
      title: 'AC Repair Technicians',
      description: 'Skilled HVAC technicians for installation and maintenance',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop'
    },
    {
      icon: <FaUserTie className="text-4xl text-primary-600" />,
      title: 'Foremen',
      description: 'Experienced supervisors for construction site management',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
    },
    {
      icon: <FaUsers className="text-4xl text-primary-600" />,
      title: 'General Laborers',
      description: 'Hardworking laborers for various construction tasks',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop'
    },
    {
      icon: <FaWrench className="text-4xl text-primary-600" />,
      title: 'Plumbers',
      description: 'Licensed plumbers for installation and maintenance',
      image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop'
    },
    {
      icon: <FaPaintRoller className="text-4xl text-primary-600" />,
      title: 'Painters',
      description: 'Professional painters for interior and exterior work',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop'
    },
    {
      icon: <FaBolt className="text-4xl text-primary-600" />,
      title: 'Electricians',
      description: 'Certified electricians for electrical installations',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop'
    },
    {
      icon: <FaHammer className="text-4xl text-primary-600" />,
      title: 'Carpenters',
      description: 'Skilled carpenters for formwork and finishing',
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=300&fit=crop'
    }
  ];

  const benefits = [
    { icon: <FaCheckCircle />, text: 'Full Visa Sponsorship' },
    { icon: <FaCheckCircle />, text: 'Accommodation Provided' },
    { icon: <FaCheckCircle />, text: 'Medical Coverage' },
    { icon: <FaCheckCircle />, text: 'Annual Leave Benefits' },
    { icon: <FaCheckCircle />, text: 'Competitive Salary' },
    { icon: <FaCheckCircle />, text: 'Career Growth Opportunities' },
    { icon: <FaCheckCircle />, text: 'Safe Work Environment' },
    { icon: <FaCheckCircle />, text: 'On-time Salary Payment' }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Steel Fixer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      text: 'EAZ AL TALAB helped me secure a great job in Dubai. The process was smooth and professional.',
      rating: 5
    },
    {
      name: 'Mohammed Ali',
      role: 'Electrician',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
      text: 'Excellent service! They handled everything from visa to accommodation. Highly recommended.',
      rating: 5
    },
    {
      name: 'Suresh Patel',
      role: 'Carpenter',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      text: 'Professional team that truly cares about workers. My Dubai journey started here.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Modern Gradient Design */}
      <section className="relative bg-gradient-to-br from-blue-400 via-blue-500 to-purple-500 text-white overflow-hidden">
        {/* Background Image for Mobile */}
        <div className="absolute inset-0 lg:hidden">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop"
            alt="Construction workers"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/80 via-blue-600/80 to-purple-600/80"></div>
        </div>
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          }}></div>
        </div>
        
        <div className="container-custom relative z-10 py-6 md:py-16 lg:py-24 px-4">
          <div className="grid lg:grid-cols-2 gap-4 md:gap-12 items-center">
            <div className="animate-fade-in">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-1.5 md:space-x-2 bg-white/10 backdrop-blur-md px-3 py-1.5 md:px-5 md:py-2.5 rounded-full mb-3 md:mb-6 border border-white/20">
                <FaCertificate className="text-yellow-300 text-sm md:text-lg" />
                <span className="text-xs md:text-sm font-semibold">Government Licensed Agency</span>
              </div>
              
              <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold mb-3 md:mb-6 leading-tight">
                Your Gateway to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                  Dubai Construction Jobs
                </span>
              </h1>
              
              <p className="text-sm md:text-lg lg:text-xl text-gray-200 mb-4 md:mb-8 leading-relaxed">
                Connect with leading construction companies in Dubai. We provide complete visa sponsorship,
                accommodation, and comprehensive support for skilled workers from India.
              </p>
              
              <div className="flex flex-wrap gap-2 md:gap-4 mb-6 md:mb-12">
                <Link to="/jobs" className="btn bg-white text-primary-600 hover:bg-gray-50 hover:shadow-xl transform hover:-translate-y-0.5 transition-all text-sm md:text-base px-4 py-2 md:px-6 md:py-3">
                  Explore Jobs <FaArrowRight className="text-xs md:text-base" />
                </Link>
                <Link to="/about" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm text-sm md:text-base px-4 py-2 md:px-6 md:py-3">
                  Learn More
                </Link>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
                {[
                  { value: `${stats.jobs}+`, label: 'Active Jobs', icon: <FaBriefcase /> },
                  { value: `${stats.placements}+`, label: 'Workers Placed', icon: <FaUsers /> },
                  { value: `${stats.companies}+`, label: 'Partner Companies', icon: <FaHandshake /> },
                  { value: `${stats.successRate}%`, label: 'Success Rate', icon: <FaStar /> }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-100 mb-0.5 md:mb-1">{stat.value}</div>
                    <div className="text-xs md:text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-400 to-secondary-500 rounded-3xl transform rotate-3 opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=800&fit=crop" 
                  alt="Construction workers in Dubai" 
                  className="relative rounded-3xl shadow-2xl object-cover w-full h-[600px] border-4 border-white/10"
                />
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 max-w-xs">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <FaAward className="text-2xl text-blue-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">5000+</div>
                      <div className="text-sm text-gray-600">Successful Placements</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators - Enhanced Design */}
      <section className="py-6 md:py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-3 gap-2 md:gap-6 lg:gap-8">
            {[
              {
                icon: <FaShieldAlt className="text-2xl md:text-4xl text-blue-500" />,
                title: 'Government Licensed',
                description: 'Fully authorized and licensed by UAE government authorities',
                color: 'blue'
              },
              {
                icon: <FaGlobe className="text-2xl md:text-4xl text-blue-500" />,
                title: 'India to Dubai',
                description: 'Specialized in recruiting workers from India to UAE',
                color: 'blue'
              },
              {
                icon: <FaHandshake className="text-2xl md:text-4xl text-purple-500" />,
                title: 'Full Support',
                description: 'Complete visa sponsorship and relocation assistance',
                color: 'purple'
              }
            ].map((item, index) => (
              <div key={index} className="card card-hover text-center group p-2 py-3 md:p-5 lg:p-6">
                <div className={`w-6 h-6 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-${item.color}-50 rounded-lg md:rounded-xl lg:rounded-2xl flex items-center justify-center mb-1 md:mb-3 lg:mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                  {React.cloneElement(item.icon, { className: 'text-sm md:text-2xl lg:text-4xl text-' + item.color + '-500' })}
                </div>
                <h3 className="text-[11px] md:text-lg lg:text-xl font-heading font-bold text-gray-900 leading-tight">{item.title}</h3>
                <p className="hidden md:block text-sm lg:text-base text-gray-600 leading-snug mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Categories - Modern Card Design */}
      <section className="py-6 md:py-12 lg:py-16 bg-white">
        <div className="container-custom px-4">
          <div className="text-center mb-6 md:mb-10 lg:mb-12">
            <div className="inline-block">
              <p className="text-blue-600 font-semibold mb-1 md:mb-2 uppercase tracking-wider text-xs md:text-sm">Available Positions</p>
              <h2 className="text-xl md:text-3xl lg:text-5xl font-heading font-bold text-gray-900 mb-2 md:mb-4">
                Construction Job Categories
              </h2>
              <div className="h-0.5 md:h-1 w-16 md:w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-3 md:mt-6 text-sm md:text-base lg:text-lg px-4">
              We recruit skilled and unskilled workers for all construction trades with full visa sponsorship
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
            {jobCategories.map((category, index) => (
              <Link
                key={index}
                to="/jobs"
                className="group relative bg-white rounded-lg md:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2"
              >
                <div className="relative h-20 md:h-40 lg:h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-1 left-1 md:bottom-4 md:left-4">
                    <div className="w-7 h-7 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-lg md:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <div className="text-base md:text-2xl lg:text-3xl text-primary-600">
                        {React.cloneElement(category.icon, { className: 'text-primary-600' })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-2 md:p-4 lg:p-6">
                  <h3 className="text-xs md:text-base lg:text-xl font-heading font-bold text-gray-900 mb-0.5 md:mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm mb-2 md:mb-4 leading-relaxed line-clamp-2">
                    {category.description}
                  </p>
                  <span className="text-blue-600 font-semibold text-xs md:text-sm inline-flex items-center group-hover:gap-2 transition-all">
                    View Jobs <FaArrowRight className="ml-1 text-xs md:text-sm group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-4 md:mt-8 lg:mt-10">
            <Link to="/jobs" className="btn btn-primary text-sm md:text-base lg:text-lg px-6 py-3 md:px-8 md:py-4 shadow-lg hover:shadow-xl">
              View All Construction Jobs <FaArrowRight className="text-xs md:text-base" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section - Enhanced Layout */}
      <section className="py-6 md:py-12 lg:py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom px-4">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-center">
            <div>
              <div className="inline-block mb-2 md:mb-4">
                <p className="text-blue-600 font-semibold uppercase tracking-wider text-xs md:text-sm">Why Choose Us</p>
              </div>
              <h2 className="text-xl md:text-3xl lg:text-5xl font-heading font-bold text-gray-900 mb-3 md:mb-6">
                Complete Support from India to Dubai
              </h2>
              <p className="text-gray-600 mb-4 md:mb-8 text-sm md:text-base lg:text-lg leading-relaxed">
                We provide end-to-end recruitment services for construction workers. From initial screening in India 
                to job placement in Dubai, we handle everything including visa processing, travel arrangements, and 
                ongoing support.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 mb-6 md:mb-10">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2 md:space-x-3 p-2 md:p-3 rounded-lg hover:bg-white transition-colors">
                    <div className="text-blue-600 text-sm md:text-xl flex-shrink-0">{benefit.icon}</div>
                    <span className="text-gray-700 font-medium text-xs md:text-sm lg:text-base">{benefit.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2 md:gap-4">
                <Link to="/about" className="btn btn-primary shadow-lg hover:shadow-xl text-sm md:text-base px-4 py-2 md:px-6 md:py-3">
                  Learn More About Us <FaArrowRight className="text-xs md:text-base" />
                </Link>
                <Link to="/contact" className="btn btn-outline text-sm md:text-base px-4 py-2 md:px-6 md:py-3">
                  Contact Us
                </Link>
              </div>
            </div>
            
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-2 md:gap-4 mt-6 lg:mt-0">
              {[
                'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop'
              ].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Construction ${index + 1}`}
                  className={`rounded-lg md:rounded-2xl shadow-lg object-cover h-32 md:h-48 lg:h-56 w-full hover:scale-105 transition-transform ${index % 2 === 1 ? 'mt-4 md:mt-8' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Modern Timeline */}
      <section className="py-6 md:py-12 lg:py-16 bg-white">
        <div className="container-custom px-4">
          <div className="text-center mb-6 md:mb-10 lg:mb-12">
            <p className="text-blue-600 font-semibold mb-1 md:mb-2 uppercase tracking-wider text-xs md:text-sm">Simple Process</p>
            <h2 className="text-xl md:text-3xl lg:text-5xl font-heading font-bold text-gray-900 mb-2 md:mb-4">
              How We Help You Get to Dubai
            </h2>
            <div className="h-0.5 md:h-1 w-16 md:w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-3 md:mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base lg:text-lg px-4">
              Our streamlined process makes it easy for Indian workers to secure construction jobs in Dubai
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { step: '1', title: 'Apply Online', desc: 'Browse jobs and submit your application through our website', icon: <FaRocket /> },
              { step: '2', title: 'Interview & Selection', desc: 'We conduct interviews and match you with suitable employers', icon: <FaUserTie /> },
              { step: '3', title: 'Visa Processing', desc: 'We handle all visa documentation and government approvals', icon: <FaCertificate /> },
              { step: '4', title: 'Travel to Dubai', desc: 'We arrange your travel and help you settle in Dubai', icon: <FaGlobe /> }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-3 md:mb-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-2xl lg:text-3xl font-bold mx-auto shadow-lg group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-7 h-7 md:w-10 md:h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white shadow-md text-xs md:text-base">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-sm md:text-base lg:text-xl font-heading font-bold text-gray-900 mb-1.5 md:mb-3">{item.title}</h3>
                <p className="text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-6 md:py-12 lg:py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container-custom px-4">
          <div className="text-center mb-6 md:mb-10 lg:mb-12">
            <p className="text-blue-600 font-semibold mb-1 md:mb-2 uppercase tracking-wider text-xs md:text-sm">Success Stories</p>
            <h2 className="text-xl md:text-3xl lg:text-5xl font-heading font-bold text-gray-900 mb-2 md:mb-4">
              What Our Workers Say
            </h2>
            <div className="h-0.5 md:h-1 w-16 md:w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-2 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card card-hover p-2 py-2.5 md:p-6">
                <div className="flex items-center mb-1 md:mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-8 h-8 md:w-16 md:h-16 rounded-full object-cover mr-2 md:mr-4 border md:border-4 border-purple-100"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-[10px] md:text-base leading-tight">{testimonial.name}</h4>
                    <p className="text-[9px] md:text-sm text-gray-600 leading-tight">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-1 md:mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-[9px] md:text-base" />
                  ))}
                </div>
                <p className="text-gray-700 leading-tight italic text-[10px] md:text-sm lg:text-base line-clamp-2 md:line-clamp-none">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Modern Design */}
      <section className="py-6 md:py-12 lg:py-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          }}></div>
        </div>
        <div className="container-custom text-center relative z-10 px-4">
          <h2 className="text-xl md:text-3xl lg:text-5xl font-heading font-bold mb-3 md:mb-6">
            Ready to Start Your Dubai Career?
          </h2>
          <p className="text-sm md:text-lg lg:text-xl mb-6 md:mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Join thousands of Indian workers who have successfully built their careers in Dubai's construction industry.
            Full visa sponsorship and comprehensive support provided.
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            <Link to="/jobs" className="btn bg-white text-blue-600 hover:bg-gray-50 shadow-xl hover:shadow-2xl text-sm md:text-base lg:text-lg px-6 py-3 md:px-8 md:py-4">
              Browse Construction Jobs
            </Link>
            <Link to="/contact" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm text-sm md:text-base lg:text-lg px-6 py-3 md:px-8 md:py-4">
              Contact Us for More Information
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

// Made with Bob
