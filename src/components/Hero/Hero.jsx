import { motion } from "framer-motion";
import { FaArrowRight, FaCalendarCheck, FaMusic, FaCamera } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  const floatingItems = [
    {
      icon: <FaCalendarCheck className="text-3xl text-purple-400" />,
      text: "Event Planning",
      position: "top-30 left-10",
      animation: { y: [0, -15, 0], transition: { duration: 4, repeat: Infinity } }
    },
    {
      icon: <FaMusic className="text-3xl text-pink-400" />,
      text: "Live Music",
      position: "bottom-20 right-10",
      animation: { y: [0, 15, 0], transition: { duration: 5, repeat: Infinity, delay: 1 } }
    },
    {
      icon: <FaCamera className="text-3xl text-blue-400" />,
      text: "Photography",
      position: "top-1/3 right-1/4",
      animation: { 
        x: [0, 20, 0],
        rotate: [0, 10, -10, 0],
        transition: { duration: 6, repeat: Infinity } 
      }
    },
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-black to-gray-900 min-h-screen flex items-center justify-center pt-20">
      {/* Glowing background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-pink-600 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 right-1/4 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* Floating items */}
      {floatingItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            ...item.animation
          }}
          transition={{ duration: 1, delay: index * 0.3 }}
          className={`absolute ${item.position} hidden lg:flex flex-col items-center justify-center`}
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
            <div className="relative px-4 py-4 bg-gray-900 rounded-lg leading-none flex items-center justify-center">
              {item.icon}
            </div>
          </div>
          <span className="mt-2 text-sm text-gray-300">{item.text}</span>
        </motion.div>
      ))}

      {/* Hero content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Illuminate Your Events
            </span>
          </h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We create unforgettable experiences with cutting-edge event management solutions that glow with excellence.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
           <Link to="/about"> <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(192, 132, 252, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium text-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Get Started <FaArrowRight />
            </motion.button>
            </Link>
            <Link to="/reels">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border-2 border-purple-500 text-white rounded-full font-medium text-lg hover:bg-purple-900 hover:bg-opacity-30 transition-all duration-300"
            >
              Explore Events
            </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { number: "500+", label: "Events Organized" },
            { number: "100+", label: "Happy Clients" },
            { number: "50+", label: "Team Members" },
            { number: "24/7", label: "Support" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-gray-900 bg-opacity-60 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {stat.number}
              </h3>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;