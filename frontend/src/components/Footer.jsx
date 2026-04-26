import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">E</span>
              </div>
              <div>
                <h3 className="text-white font-heading font-bold text-lg">EAZ AL TALAB</h3>
                <p className="text-xs text-gray-400">Dubai Construction Jobs</p>
              </div>
            </div>
            <p className="text-sm mb-4">
              Government-licensed recruitment agency providing construction jobs in Dubai, UAE for Indian workers with full visa sponsorship.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* For Employers */}
          <div>
            <h4 className="text-white font-semibold mb-4">For Employers</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/post-job" className="hover:text-primary-500 transition-colors">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-500 transition-colors">
                  Recruitment Services
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-500 transition-colors">
                  Bulk Hiring
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-primary-500 transition-colors">
                  Employer Registration
                </Link>
              </li>
            </ul>
          </div>

          {/* For Job Seekers */}
          <div>
            <h4 className="text-white font-semibold mb-4">Construction Jobs</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/jobs" className="hover:text-primary-500 transition-colors">
                  All Dubai Jobs
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="hover:text-primary-500 transition-colors">
                  Steel Fixers
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="hover:text-primary-500 transition-colors">
                  Electricians
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="hover:text-primary-500 transition-colors">
                  Carpenters
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="hover:text-primary-500 transition-colors">
                  Masons & Painters
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="hover:text-primary-500 transition-colors">
                  General Laborers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary-500 mt-1 flex-shrink-0" />
                <span>India & Dubai, UAE</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-primary-500 flex-shrink-0" />
                <a href="tel:+916304016994" className="hover:text-primary-500 transition-colors">
                  +91 6304016994
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-primary-500 flex-shrink-0" />
                <a href="mailto:sairam280403@gmail.com" className="hover:text-primary-500 transition-colors">
                  sairam280403@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaWhatsapp className="text-primary-500 flex-shrink-0" />
                <a href="https://wa.me/916304016994" className="hover:text-primary-500 transition-colors">
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} EAZ AL TALAB. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/about" className="hover:text-primary-500 transition-colors">
                About Us
              </Link>
              <Link to="/services" className="hover:text-primary-500 transition-colors">
                Services
              </Link>
              <Link to="/contact" className="hover:text-primary-500 transition-colors">
                Contact
              </Link>
              <a href="#" className="hover:text-primary-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Made with Bob
