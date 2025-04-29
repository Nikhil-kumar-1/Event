import { motion } from "framer-motion";
import { FaBirthdayCake, FaMicrophone, FaCameraRetro, FaLightbulb, FaGlassCheers, FaUsers } from "react-icons/fa";
import { GiPartyPopper, GiSoundWaves, GiVideoCamera } from "react-icons/gi";
import { MdEvent, MdLocalFlorist } from "react-icons/md";
import { Link } from "react-router-dom";

const Services = () => {
  // Gold color palette
  const gold = {
    100: "#FFF8E1",
    200: "#FFECB3",
    300: "#FFE082",
    400: "#FFD54F",
    500: "#FFC107", // Primary gold
    600: "#FFB300",
    700: "#FFA000",
    800: "#FF8F00",
    900: "#FF6F00"
  };

  // Floating icons data
  const floatingIcons = [
    {
      icon: <GiPartyPopper className="text-4xl" style={{ color: gold[400] }} />,
      position: "top-20 left-5",
      animation: {
        y: [0, -20, 0],
        rotate: [0, 10, -10, 0],
        transition: { duration: 8, repeat: Infinity }
      }
    },
    {
      icon: <GiSoundWaves className="text-4xl" style={{ color: gold[300] }} />,
      position: "bottom-20 right-5",
      animation: {
        y: [0, 20, 0],
        scale: [1, 1.1, 1],
        transition: { duration: 7, repeat: Infinity, delay: 1 }
      }
    },
    {
      icon: <MdLocalFlorist className="text-4xl" style={{ color: gold[200] }} />,
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
      color: `from-${gold[500]} to-${gold[700]}`
    },
    {
      icon: <FaMicrophone className="text-5xl" />,
      title: "Corporate Events",
      description: "Professional event management for conferences, product launches, and corporate gatherings.",
      color: `from-${gold[400]} to-${gold[600]}`
    },
    {
      icon: <GiVideoCamera className="text-5xl" />,
      title: "Wedding Planning",
      description: "Complete wedding solutions from venue selection to photography and catering services.",
      color: `from-${gold[600]} to-${gold[800]}`
    },
    {
      icon: <FaCameraRetro className="text-5xl" />,
      title: "Photography/Videography",
      description: "High-quality event coverage with professional photographers and videographers.",
      color: `from-${gold[300]} to-${gold[500]}`
    },
    {
      icon: <FaLightbulb className="text-5xl" />,
      title: "Lighting & Sound",
      description: "State-of-the-art audio-visual equipment and lighting design for any event size.",
      color: `from-${gold[200]} to-${gold[400]}`
    },
    {
      icon: <FaGlassCheers className="text-5xl" />,
      title: "Catering Services",
      description: "Gourmet catering options with customizable menus for all types of events.",
      color: `from-${gold[700]} to-${gold[900]}`
    },
    {
      icon: <MdEvent className="text-5xl" />,
      title: "Venue Selection",
      description: "Access to premium venues with expert guidance to find the perfect location.",
      color: `from-${gold[500]} to-${gold[300]}`
    },
    {
      icon: <FaUsers className="text-5xl" />,
      title: "Guest Management",
      description: "Comprehensive guest management including invitations, RSVPs, and seating arrangements.",
      color: `from-${gold[400]} to-${gold[200]}`
    },
  ];

  return (
    <section id="services" className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Gold glowing background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full filter blur-3xl opacity-10 animate-pulse"
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

      {/* Floating gold icons */}
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
            <div 
              className="absolute -inset-0.5 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200"
              style={{ backgroundColor: gold[500] }}
            ></div>
            <div className="relative p-3 bg-gray-900 rounded-full leading-none flex items-center justify-center border" style={{ borderColor: gold[800] }}>
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
            <span 
              className="bg-clip-text text-transparent"
              style={{ 
                backgroundImage: `linear-gradient(to right, ${gold[300]}, ${gold[500]}, ${gold[400]})`
              }}
            >
              Our Golden Services
            </span>
          </h2>
          <p className="text-lg" style={{ color: gold[200] }}>
            We illuminate every aspect of your event with our premium services. Each offering is crafted to create luxurious experiences.
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
              {/* Gold glow effect on hover */}
              <div 
                className="absolute -inset-0.5 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200 group-hover:duration-300 animate-tilt"
                style={{ 
                  backgroundImage: `linear-gradient(to right, ${gold[500]}, ${gold[700]})`
                }}
              ></div>
              
              <div className="relative h-full bg-gray-900 p-6 rounded-xl border overflow-hidden" style={{ borderColor: gold[800] + '30' }}>
                {/* Icon with gold gradient background */}
                <div 
                  className="mb-6 w-20 h-20 rounded-full flex items-center justify-center text-white"
                  style={{ 
                    backgroundImage: `linear-gradient(to right, ${service.color})`
                  }}
                >
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold" style={{ color: gold[100] }}>{service.title}</h3>
                <p className="" style={{ color: gold[200] }}>{service.description}</p>
                
                {/* Gold hover effect line */}
                <div 
                  className="absolute bottom-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ 
                    backgroundImage: `linear-gradient(to right, transparent, ${gold[500]}, transparent)`
                  }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gold CTA section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 rounded-2xl p-8 md:p-12 relative overflow-hidden border"
          style={{ 
            backgroundImage: `linear-gradient(to right, ${gold[800]}30, ${gold[900]}30)`,
            borderColor: gold[700]
          }}
        >
          {/* Gold floating particles */}
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
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: gold[500]
              }}
            />
          ))}
          
          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold mb-4" style={{ color: gold[100] }}>Ready to Experience Golden Events?</h3>
            <p className="mb-8 max-w-2xl mx-auto" style={{ color: gold[200] }}>
              Let's create something extraordinary together with our premium golden event services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/book-event">
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: `0 0 20px ${gold[500]}80`
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-300"
                  style={{ 
                    backgroundImage: `linear-gradient(to right, ${gold[500]}, ${gold[600]})`,
                    color: '#111'
                  }}
                >
                  Book a Consultation
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;