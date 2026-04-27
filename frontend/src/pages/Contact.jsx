import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane, FaBuilding } from 'react-icons/fa';
import api from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await api.post('/contact', formData);
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error('Contact form error:', err);
      const errorMessage = err.response?.data?.error || err.response?.data?.message || 'Failed to send message. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '916304016994';
    const message = encodeURIComponent('Hello! I would like to inquire about your recruitment services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 text-white py-8 md:py-16">
        <div className="container-custom px-4">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-2 md:mb-4">Contact Us</h1>
          <p className="text-sm md:text-lg lg:text-xl text-gray-200">Get in touch for construction jobs in Dubai with visa sponsorship</p>
        </div>
      </div>

      <div className="container-custom py-8 md:py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
          <div className="lg:col-span-1 space-y-4 md:space-y-6">
            <div className="card shadow-lg hover:shadow-xl transition-shadow p-4 md:p-6">
              <div className="flex items-center space-x-2 md:space-x-3 mb-3 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-purple-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaBuilding className="text-white text-base md:text-xl" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base md:text-xl text-gray-900">EAZ AL TALAB</h3>
                  <p className="text-xs md:text-sm text-gray-600">Dubai Construction Recruitment</p>
                </div>
              </div>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                Government-licensed recruitment agency specializing in placing Indian construction workers in Dubai, UAE with full visa sponsorship.
              </p>
            </div>

            <div className="card shadow-lg hover:shadow-xl transition-shadow space-y-3 md:space-y-4 p-4 md:p-6">
              <h3 className="font-heading font-semibold text-base md:text-lg text-gray-900 mb-3 md:mb-4">Contact Information</h3>
              
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-blue-700 text-sm md:text-base" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-600 mb-1">Phone Numbers</p>
                  <a href="tel:+916304016994" className="text-gray-900 font-medium hover:text-blue-600 transition-colors block text-sm md:text-base">
                    +91 6304016994
                  </a>
                  <a href="tel:+917075018407" className="text-gray-900 font-medium hover:text-blue-600 transition-colors block mt-1 text-sm md:text-base">
                    +91 7075018407
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-orange-700 text-sm md:text-base" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-600 mb-1">Email</p>
                  <a href="mailto:sairam280403@gmail.com" className="text-gray-900 font-medium hover:text-orange-600 transition-colors break-all text-sm md:text-base">
                    sairam280403@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-purple-700 text-sm md:text-base" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-600 mb-1">Location</p>
                  <p className="text-gray-900 font-medium text-sm md:text-base">India & Dubai, UAE</p>
                </div>
              </div>
            </div>

            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 md:py-4 px-4 md:px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 md:space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base"
            >
              <FaWhatsapp className="text-xl md:text-2xl" />
              <span>Chat on WhatsApp</span>
            </button>

            <div className="card shadow-lg hover:shadow-xl transition-shadow p-3 md:p-5 lg:p-6">
              <h3 className="font-heading font-semibold text-sm md:text-base lg:text-lg text-gray-900 mb-2 md:mb-3 lg:mb-4">Business Hours</h3>
              <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="text-gray-900 font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="text-gray-900 font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="text-gray-900 font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="card shadow-lg hover:shadow-xl transition-shadow p-4 md:p-6 lg:p-8">
              <h2 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-4 md:mb-6">Send Us a Message</h2>
              
              {success && (
                <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg shadow-sm">
                  <p className="text-green-800 font-medium flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Message sent successfully! We will get back to you soon.
                  </p>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-orange-50 border-l-4 border-orange-400 rounded-lg shadow-sm">
                  <p className="text-orange-800 font-medium flex items-center">
                    <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                    </svg>
                    {error}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input text-sm md:text-base"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input text-sm md:text-base"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="input text-sm md:text-base"
                      placeholder="+91 1234567890"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                      Subject (Optional)
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="input text-sm md:text-base"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="input resize-none text-sm md:text-base"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary w-full md:w-auto px-6 py-3 md:px-8 md:py-4 text-sm md:text-base lg:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card shadow-md hover:shadow-lg transition-shadow text-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <FaPhone className="text-indigo-700 text-xl" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Quick Response</h4>
                <p className="text-sm text-gray-600">We respond within 24 hours</p>
              </div>

              <div className="card shadow-md hover:shadow-lg transition-shadow text-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <FaWhatsapp className="text-white text-xl" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">WhatsApp Support</h4>
                <p className="text-sm text-gray-600">Instant messaging available</p>
              </div>

              <div className="card shadow-md hover:shadow-lg transition-shadow text-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <FaEnvelope className="text-orange-700 text-xl" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Email Support</h4>
                <p className="text-sm text-gray-600">Professional assistance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// Made with Bob
