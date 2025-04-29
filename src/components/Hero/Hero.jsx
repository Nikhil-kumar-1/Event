import { motion } from "framer-motion";
import { FaArrowRight, FaCalendarCheck, FaMusic, FaCamera } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  // Custom gold palette using #FFC107 as base
  const gold = {
    100: "#FFF8E1",
    200: "#FFECB3",
    300: "#FFE082",
    400: "#FFD54F",
    500: "#FFC107", // Primary accent
    600: "#FFB300",
    700: "#FFA000",
    800: "#FF8F00",
    900: "#FF6F00"
  };

  const floatingItems = [
    {
      icon: <FaCalendarCheck className="text-2xl md:text-3xl" style={{ color: gold[400] }} />,
      text: "Event Planning",
      position: "top-20 left-4 lg:top-30 lg:left-10",
      animation: { y: [0, -15, 0], transition: { duration: 4, repeat: Infinity } }
    },
    {
      icon: <FaMusic className="text-2xl md:text-3xl" style={{ color: gold[300] }} />,
      text: "Live Music",
      position: "bottom-32 right-4 lg:bottom-20 lg:right-10",
      animation: { y: [0, 15, 0], transition: { duration: 5, repeat: Infinity, delay: 1 } }
    },
    {
      icon: <FaCamera className="text-2xl md:text-3xl" style={{ color: gold[200] }} />,
      text: "Photography",
      position: "top-1/3 right-1/4 hidden lg:block",
      animation: { 
        x: [0, 20, 0],
        rotate: [0, 10, -10, 0],
        transition: { duration: 6, repeat: Infinity } 
      }
    },
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black min-h-screen flex items-center justify-center pt-16 pb-20 lg:pt-20">
      {/* Subtle gold glows */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full filter blur-3xl opacity-15 animate-pulse"
          style={{ backgroundColor: gold[500] }}
        ></div>
        <div 
          className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"
          style={{ backgroundColor: gold[600] }}
        ></div>
        <div 
          className="absolute top-2/3 right-1/4 w-72 h-72 rounded-full filter blur-3xl opacity-10 animate-pulse delay-500"
          style={{ backgroundColor: gold[700] }}
        ></div>
      </div>

      {/* Floating elements */}
      {floatingItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            ...item.animation
          }}
          transition={{ duration: 1, delay: index * 0.3 }}
          className={`absolute ${item.position} flex flex-col items-center justify-center`}
        >
          <div className="relative group">
            <div 
              className="absolute -inset-1 rounded-lg blur opacity-60 group-hover:opacity-80 transition duration-200"
              style={{ backgroundColor: gold[500] }}
            ></div>
            <div className="relative px-3 py-3 md:px-4 md:py-4 bg-gray-900/80 rounded-lg leading-none flex items-center justify-center border" style={{ borderColor: gold[800] }}>
              {item.icon}
            </div>
          </div>
          <span className="mt-2 text-xs md:text-sm font-medium" style={{ color: gold[200] }}>{item.text}</span>
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 mt-10 md:mb-6">
            <span 
              className="bg-clip-text text-transparent"
              style={{ 
                backgroundImage: `linear-gradient(to right, ${gold[300]}, ${gold[500]}, ${gold[400]})`
              }}
            >
              Illuminate Your Events
            </span>
          </h1>
          
          <motion.p 
            className="text-base md:text-xl max-w-3xl mx-auto mb-8 md:mb-10 px-2 font-light"
            style={{ color: gold[100] }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We craft timeless experiences with premium event management that radiates luxury.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 px-4">
            <Link to="/about" className="w-full sm:w-auto"> 
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: `0 0 20px ${gold[500]}80`
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 md:px-8 md:py-3 rounded-full font-bold text-base md:text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                style={{ 
                  background: `linear-gradient(to right, ${gold[500]}, ${gold[600]})`,
                  color: '#111'
                }}
              >
                Get Started <FaArrowRight />
              </motion.button>
            </Link>
            <Link to="/reels" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 md:px-8 md:py-3 bg-transparent rounded-full font-medium text-base md:text-lg transition-all duration-300"
                style={{ 
                  border: `1px solid ${gold[500]}`,
                  color: gold[200],
                  backgroundColor: 'rgba(0,0,0,0.2)'
                }}
              >
                Explore Events
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto px-4"
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
              className="backdrop-blur-sm rounded-xl p-4 md:p-6"
              style={{ 
                backgroundColor: 'rgba(15, 15, 15, 0.7)',
                border: `1px solid ${gold[800]}`
              }}
            >
              <h3 
                className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(to right, ${gold[300]}, ${gold[400]})` }}
              >
                {stat.number}
              </h3>
              <p className="text-xs md:text-sm mt-1 md:mt-2 font-light" style={{ color: gold[200] }}>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;