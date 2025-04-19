import { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaUsers, FaChevronDown } from "react-icons/fa";
import { RiSparklingFill } from "react-icons/ri";

const BookEvent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    guests: '',
    date: '',
    location: '',
    message: ''
  });

  const eventTypes = [
    "Wedding",
    "Corporate Event",
    "Birthday Party",
    "Anniversary",
    "Concert",
    "Exhibition",
    "Other"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your booking request! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      guests: '',
      date: '',
      location: '',
      message: ''
    });
  };

  return (
    <>
      <Helmet>
        <title>Book Your Event | EventGlow - Create Unforgettable Moments</title>
        <meta name="description" content="Book your next event with EventGlow. We specialize in weddings, corporate events, and private parties to make your occasion unforgettable." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 text-gray-900 overflow-hidden">
        {/* Floating decorative elements */}
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 0, x: Math.random() * 100 }}
              animate={{
                opacity: [0, 0.4, 0],
                y: [0, window.innerHeight],
                x: [Math.random() * 100, Math.random() * 100 + 50]
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5
              }}
              className="absolute text-pink-400 text-xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            >
              <RiSparklingFill />
            </motion.div>
          ))}
        </div>

        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-pink-900/70 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Event setup"
            className="absolute w-full h-full object-cover"
          />
          
          <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white"
            >
              Book Your Event
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-200 mb-10"
            >
              Let's create something extraordinary together
            </motion.p>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Form Left Side */}
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Event Details
                  </h2>
                  <p className="text-gray-600 mb-8">Fill out the form to book your event with us</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaUser className="text-purple-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="Your name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaEnvelope className="text-purple-400" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div className="relative">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaPhone className="text-purple-400" />
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="+91 9876543210"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaCalendarAlt className="text-purple-400" />
                          </div>
                          <select
                            id="eventType"
                            name="eventType"
                            value={formData.eventType}
                            onChange={handleChange}
                            required
                            className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
                          >
                            <option value="">Select event type</option>
                            {eventTypes.map((type) => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <FaChevronDown className="text-purple-400" />
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaUsers className="text-purple-400" />
                          </div>
                          <input
                            type="number"
                            id="guests"
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                            required
                            className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="Approximate number"
                            min="1"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Event Date</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaCalendarAlt className="text-purple-400" />
                          </div>
                          <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div className="relative">
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaMapMarkerAlt className="text-purple-400" />
                          </div>
                          <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                            className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="Event venue or city"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Tell us more about your event..."
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg"
                    >
                      Submit Booking Request
                    </motion.button>
                  </form>
                </div>

                {/* Right Side - Visuals */}
                <div className="hidden lg:block bg-gradient-to-br from-purple-600 to-pink-500 p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-pink-300 rounded-full filter blur-3xl"></div>
                  </div>
                  
                  <div className="relative z-10 h-full flex flex-col justify-center text-white">
                    <h3 className="text-3xl font-bold mb-4">Why Choose Us?</h3>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3">
                          <RiSparklingFill className="text-pink-200" />
                        </div>
                        <span>100+ successful events organized</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3">
                          <RiSparklingFill className="text-pink-200" />
                        </div>
                        <span>Customized event solutions</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3">
                          <RiSparklingFill className="text-pink-200" />
                        </div>
                        <span>Professional event management</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3">
                          <RiSparklingFill className="text-pink-200" />
                        </div>
                        <span>Premium vendor network</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3">
                          <RiSparklingFill className="text-pink-200" />
                        </div>
                        <span>24/7 customer support</span>
                      </li>
                    </ul>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <h4 className="font-medium mb-2">Need immediate assistance?</h4>
                      <p className="text-sm mb-4">Our team is available 24/7 to answer your questions</p>
                      <button className="px-4 py-2 bg-white text-purple-600 rounded-lg font-medium text-sm hover:bg-opacity-90 transition-opacity">
                        Contact Us Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-16 text-center"
            >
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <motion.div 
                  key={item}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: item * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-4">
                      {item === 1 ? 'A' : item === 2 ? 'R' : 'S'}
                    </div>
                    <div>
                      <h4 className="font-bold">
                        {item === 1 ? 'Aarav Sharma' : item === 2 ? 'Riya Patel' : 'Sanjay Gupta'}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {item === 1 ? 'Wedding Client' : item === 2 ? 'Corporate Event' : 'Birthday Party'}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    {item === 1 ? 'EventGlow made our wedding dreams come true! Every detail was perfect and the team was incredibly professional.' : 
                     item === 2 ? 'Our annual conference was a huge success thanks to EventGlow. Their attention to detail was impressive.' : 
                     'The best birthday party I ever had! The team handled everything seamlessly.'}
                  </p>
                  <div className="flex mt-4 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BookEvent;