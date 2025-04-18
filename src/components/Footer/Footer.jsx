import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook />, name: "Facebook", url: "#" },
    { icon: <FaTwitter />, name: "Twitter", url: "#" },
    { icon: <FaInstagram />, name: "Instagram", url: "#" },
    { icon: <FaLinkedin />, name: "LinkedIn", url: "#" },
  ];

  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Corporate Events", url: "#" },
        { name: "Wedding Planning", url: "#" },
        { name: "Concert Management", url: "#" },
        { name: "Exhibition Planning", url: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", url: "#" },
        { name: "Our Team", url: "#" },
        { name: "Careers", url: "#" },
        { name: "Testimonials", url: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "FAQ", url: "#" },
        { name: "Contact Us", url: "#" },
        { name: "Privacy Policy", url: "#" },
        { name: "Terms of Service", url: "#" },
      ],
    },
  ];

  return (
    <footer className="relative bg-gray-900 overflow-hidden">
      {/* Glowing background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-600 rounded-full filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo and description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-purple-600 rounded-lg blur opacity-75"></div>
                <div className="relative px-4 py-2 bg-gray-900 rounded-lg">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                    EventGlow
                  </h2>
                </div>
              </div>
            </div>
            <p className="text-gray-400">
              Creating luminous experiences that leave lasting impressions. We illuminate every event with creativity and precision.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ y: -3, color: "#E879F9" }}
                  className="text-gray-400 hover:text-purple-400 text-xl transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer links */}
          {footerLinks.map((column, colIndex) => (
            <motion.div
              key={colIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: colIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a href={link.url} className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-purple-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Event Street, Glow City, GC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-purple-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-purple-400" />
                <span className="text-gray-400">info@eventglow.com</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                Subscribe to our newsletter
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full rounded-l-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-r-lg"
                >
                  Join
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating decorative elements */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-10 hidden lg:block"
        >
          <div className="w-8 h-8 rounded-full bg-purple-500 opacity-20"></div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-20 right-20 hidden lg:block"
        >
          <div className="w-6 h-6 rounded-full bg-pink-500 opacity-20"></div>
        </motion.div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <motion.p 
            className="text-center text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            &copy; {new Date().getFullYear()} EventGlow. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;