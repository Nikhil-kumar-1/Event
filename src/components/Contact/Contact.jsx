import { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaClock,
} from "react-icons/fa";
import { GiSpinningBlades } from "react-icons/gi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      <Helmet>
        <title>
          Contact Us | GoldenStorm - Premier Event Planning Services
        </title>
        <meta
          name="description"
          content="Get in touch with GoldenStorm for your next event. Contact our team for expert event planning and management services."
        />
        <meta
          name="keywords"
          content="event planning, contact, event management, party planning, corporate events"
        />
        <meta property="og:title" content="Contact Us | GoldenStorm" />
        <meta
          property="og:description"
          content="Reach out to GoldenStorm for professional event planning services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.GoldenStorm.com/contact" />
        <link rel="canonical" href="https://www.GoldenStorm.com/contact" />
      </Helmet>
      <div className="relative h-96 w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="GoldenStorm Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-80 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              <span className="text-amber-400">Get</span> In{" "}
              <span className="text-yellow-400">Touch</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Have questions or ready to plan your next event? Reach out to our
              team for expert assistance.
            </p>
          </motion.div>
        </div>
      </div>

      <section
        id="contact"
        className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black py-20"
      >
        {/* Glowing background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-600 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-yellow-600 rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
          <div className="absolute top-2/3 right-1/4 w-72 h-72 bg-amber-700 rounded-full filter blur-3xl opacity-10 animate-pulse delay-500"></div>
        </div>

        {/* Animated decorative element */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-20 hidden lg:block text-amber-400 opacity-20 text-6xl"
        >
          <GiSpinningBlades />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gray-900 bg-opacity-60 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FaMapMarkerAlt className="text-amber-400 text-xl" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white mb-1">
                        Our Office
                      </h3>
                      <p className="text-gray-400">
                        123 Event Street, Glow City, GC 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FaPhoneAlt className="text-amber-400 text-xl" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white mb-1">
                        Phone
                      </h3>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                      <p className="text-gray-400">+1 (555) 765-4321</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FaEnvelope className="text-amber-400 text-xl" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white mb-1">
                        Email
                      </h3>
                      <p className="text-gray-400">info@GoldenStorm.com</p>
                      <p className="text-gray-400">support@GoldenStorm.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FaClock className="text-amber-400 text-xl" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white mb-1">
                        Working Hours
                      </h3>
                      <p className="text-gray-400">
                        Monday - Friday: 9am - 6pm
                      </p>
                      <p className="text-gray-400">Saturday: 10am - 4pm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-900 to-yellow-900 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Emergency Event Support
                </h2>
                <p className="text-amber-100 mb-6">
                  Need immediate assistance with an upcoming event? Our 24/7
                  support team is here to help.
                </p>
                <button className="px-6 py-3 bg-white text-amber-900 rounded-lg font-medium hover:bg-opacity-90 transition-colors duration-300">
                  Call Emergency Support
                </button>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-900 bg-opacity-60 backdrop-blur-sm rounded-xl p-8 border border-gray-800"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="+1 (___) ___-____"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Tell us about your event..."
                  ></textarea>
                </div>

                <div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-lg font-medium flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <FaPaperPlane className="text-lg" />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Map section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h2 className="text-2xl font-bold text-center text-white mb-8">
              Our Location
            </h2>
            <div className="relative h-96 rounded-2xl overflow-hidden border border-gray-800">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 opacity-20"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209132733!2d-73.98784492452548!3d40.74844047138993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1712345678901"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="relative z-10"
                title="Our Location Map"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;