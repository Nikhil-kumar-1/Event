import { motion } from "framer-motion";
import { FaBirthdayCake, FaMicrophone, FaCameraRetro, FaLightbulb, FaGlassCheers, FaUsers } from "react-icons/fa";
import { GiPartyPopper, GiSoundWaves, GiVideoCamera } from "react-icons/gi";
import { MdEvent, MdLocalFlorist } from "react-icons/md"; // a generic event icon


const Services = () => {
  // Floating icons data
  const floatingIcons = [
    {
      icon: <GiPartyPopper className="text-4xl text-purple-400" />,
      position: "top-20 left-5",
      animation: {
        y: [0, -20, 0],
        rotate: [0, 10, -10, 0],
        transition: { duration: 8, repeat: Infinity }
      }
    },
    {
      icon: <GiSoundWaves className="text-4xl text-pink-400" />,
      position: "bottom-20 right-5",
      animation: {
        y: [0, 20, 0],
        scale: [1, 1.1, 1],
        transition: { duration: 7, repeat: Infinity, delay: 1 }
      }
    },
    {
      icon: <MdLocalFlorist className="text-4xl text-blue-400" />,
      position: "top-1/3 right-10",
      animation: {
        rotate: [0, 15, -15, 0],
        transition: { duration: 10, repeat: Infinity }
      }
    },
  ];

  // Services data
  const services = [
    {
      icon: <FaBirthdayCake className="text-5xl" />,
      title: "Birthday Parties",
      description: "Magical celebrations with custom themes, decorations, and entertainment that make birthdays unforgettable.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaMicrophone className="text-5xl" />,
      title: "Corporate Events",
      description: "Professional event management for conferences, product launches, and corporate gatherings.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <GiVideoCamera className="text-5xl" />,
      title: "Wedding Planning",
      description: "Complete wedding solutions from venue selection to photography and catering services.",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: <FaCameraRetro className="text-5xl" />,
      title: "Photography/Videography",
      description: "High-quality event coverage with professional photographers and videographers.",
      color: "from-amber-500 to-yellow-400"
    },
    {
      icon: <FaLightbulb className="text-5xl" />,
      title: "Lighting & Sound",
      description: "State-of-the-art audio-visual equipment and lighting design for any event size.",
      color: "from-green-500 to-teal-400"
    },
    {
      icon: <FaGlassCheers className="text-5xl" />,
      title: "Catering Services",
      description: "Gourmet catering options with customizable menus for all types of events.",
      color: "from-red-500 to-pink-500"
    },
    {
        icon: <MdEvent className="text-5xl" />,
        title: "Venue Selection",
        description: "Access to premium venues with expert guidance to find the perfect location.",
        color: "from-indigo-500 to-purple-500"
      },
      
    {
      icon: <FaUsers className="text-5xl" />,
      title: "Guest Management",
      description: "Comprehensive guest management including invitations, RSVPs, and seating arrangements.",
      color: "from-cyan-500 to-blue-500"
    },
  ];

  return (
    <section id="services" className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Glowing background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-pink-600 rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 right-1/4 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl opacity-10 animate-pulse delay-500"></div>
      </div>

      {/* Floating icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            ...item.animation
          }}
          transition={{ duration: 1, delay: index * 0.3 }}
          className={`absolute ${item.position} hidden lg:flex items-center justify-center`}
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
            <div className="relative p-3 bg-gray-900 rounded-full leading-none flex items-center justify-center">
              {item.icon}
            </div>
          </div>
        </motion.div>
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Our Glowing Services
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We illuminate every aspect of your event with our comprehensive services. Each offering is designed to create memorable experiences that shine.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200 group-hover:duration-300 animate-tilt from-purple-600 to-pink-600"></div>
              
              <div className="relative h-full bg-gray-900 p-6 rounded-xl border border-gray-800 overflow-hidden">
                {/* Icon with gradient background */}
                <div className={`mb-6 w-20 h-20 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-white`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
                
                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-purple-900 to-pink-900 rounded-2xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, Math.random() * 40 - 20],
                x: [0, Math.random() * 40 - 20],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 5,
              }}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
          
          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Illuminate Your Event?</h3>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's create something extraordinary together. Our team is ready to bring your vision to life with our premium event services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-purple-900 rounded-full font-medium text-lg shadow-lg transition-all duration-300"
              >
                Book a Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-medium text-lg transition-all duration-300"
              >
                View Packages
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;