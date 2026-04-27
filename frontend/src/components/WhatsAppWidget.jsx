import React from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const WhatsAppWidget = () => {
  const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    const phoneNumber = '916304016994';
    const message = encodeURIComponent('Hello! I would like to inquire about your recruitment services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-3">
      {/* Contact Us Button */}
      <button
        onClick={handleContactClick}
        className="w-12 h-12 md:w-14 md:h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group transform hover:scale-110"
        aria-label="Contact Us"
      >
        <FaEnvelope className="text-xl md:text-2xl" />
        <span className="absolute right-full mr-2 md:mr-3 bg-gray-900 text-white text-xs md:text-sm px-2 md:px-3 py-1.5 md:py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Contact Us
        </span>
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="w-12 h-12 md:w-14 md:h-14 bg-blue-400 hover:bg-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl md:text-3xl" />
        <span className="absolute right-full mr-2 md:mr-3 bg-gray-900 text-white text-xs md:text-sm px-2 md:px-3 py-1.5 md:py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Chat with us
        </span>
      </button>
    </div>
  );
};

export default WhatsAppWidget;

// Made with Bob
