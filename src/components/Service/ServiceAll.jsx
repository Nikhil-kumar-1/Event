import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  FaBirthdayCake,
  FaMicrophone,
  FaCameraRetro,
  FaLightbulb,
  FaGlassCheers,
  FaUsers,
  FaRegSmile,
  FaArrowRight,
} from "react-icons/fa";
import {
  GiPartyPopper,
  GiSoundWaves,
  GiVideoCamera,
  GiPartyFlags,
  GiSparkles,
} from "react-icons/gi";
import { MdEvent, MdLocalFlorist, MdOutlineEventSeat } from "react-icons/md";
import { Link } from "react-router-dom";

const ServicesAll = () => {
  // Floating decorative elements
  const floatingIcons = [
    {
      icon: <GiPartyFlags className="text-4xl text-purple-400" />,
      position: "top-20 left-5",
      animation: {
        y: [0, -25, 0],
        rotate: [0, 15, -15, 0],
        transition: { duration: 8, repeat: Infinity },
      },
    },
    {
      icon: <GiSparkles className="text-4xl text-pink-400" />,
      position: "bottom-20 right-5",
      animation: {
        y: [0, 25, 0],
        scale: [1, 1.3, 1],
        transition: { duration: 7, repeat: Infinity, delay: 1 },
      },
    },
    {
      icon: <MdLocalFlorist className="text-4xl text-blue-400" />,
      position: "top-1/3 right-10",
      animation: {
        x: [0, 20, 0],
        transition: { duration: 9, repeat: Infinity, delay: 0.5 },
      },
    },
  ];

  // Service categories
  const serviceCategories = [
    {
      title: "Wedding Planning",
      icon: <FaGlassCheers className="text-5xl" />,
      services: [
        "Complete Wedding Coordination",
        "Venue Selection",
        "Bridal Party Management",
        "Vendor Coordination",
      ],
      color: "from-pink-500 to-purple-600",
    },
    {
      title: "Corporate Events",
      icon: <FaMicrophone className="text-5xl" />,
      services: [
        "Conference Planning",
        "Product Launches",
        "Team Building Events",
        "Annual General Meetings",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Social Gatherings",
      icon: <FaBirthdayCake className="text-5xl" />,
      services: [
        "Birthday Celebrations",
        "Anniversary Parties",
        "Baby Showers",
        "Graduation Events",
      ],
      color: "from-amber-500 to-yellow-500",
    },
  ];

  // All services
  const allServices = [
    {
      icon: <GiVideoCamera className="text-4xl" />,
      title: "Full Event Production",
      description: "End-to-end event management from concept to execution",
      color: "bg-gradient-to-r from-purple-600 to-pink-600",
    },
    {
      icon: <FaCameraRetro className="text-4xl" />,
      title: "Photography Services",
      description: "Professional event photography and videography packages",
      color: "bg-gradient-to-r from-blue-600 to-cyan-500",
    },
    {
      icon: <GiSoundWaves className="text-4xl" />,
      title: "Audio-Visual Solutions",
      description: "State-of-the-art sound and lighting systems",
      color: "bg-gradient-to-r from-green-600 to-teal-500",
    },
    {
      icon: <MdEvent className="text-4xl" />,
      title: "Gourmet Catering",
      description: "Customized menus for all types of events",
      color: "bg-gradient-to-r from-red-600 to-pink-500",
    },
    {
      icon: <MdOutlineEventSeat className="text-4xl" />,
      title: "Venue Sourcing",
      description: "Access to premium venues with expert selection",
      color: "bg-gradient-to-r from-indigo-600 to-purple-500",
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Guest Management",
      description: "Comprehensive invitation and seating solutions",
      color: "bg-gradient-to-r from-cyan-600 to-blue-500",
    },
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: "Creative Design",
      description: "Custom themes and decor concepts",
      color: "bg-gradient-to-r from-yellow-600 to-amber-500",
    },
    {
      icon: <FaRegSmile className="text-4xl" />,
      title: "Entertainment",
      description: "Curated performers, DJs, and live acts",
      color: "bg-gradient-to-r from-pink-600 to-rose-500",
    },
  ];

  return (
    <>
      {/* SEO Optimization with React Helmet */}
      <Helmet>
        <title>
          Premium Event Services | GoldenStorm - Complete Event Management
          Solutions
        </title>
        <meta
          name="description"
          content="Discover our comprehensive range of premium event services including wedding planning, corporate events, photography, catering and more. We make your occasions spectacular."
        />
        <meta
          name="keywords"
          content="event services, wedding planning, corporate events, event management, photography services, catering, venue booking"
        />
        <meta
          property="og:title"
          content="Premium Event Services | GoldenStorm"
        />
        <meta
          property="og:description"
          content="Complete event management solutions for weddings, corporate events and social gatherings."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://GoldenStorm.com/services" />
        <meta
          property="og:image"
          content="https://GoldenStorm.com/images/services-preview.jpg"
        />
        <link rel="canonical" href="https://GoldenStorm.com/services" />
      </Helmet>

      {/* Hero Section with Image */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Event Services"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black opacity-80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Our Premium Services
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 mb-8"
          >
            Elevate your events with our comprehensive range of professional
            services designed to create unforgettable experiences.
          </motion.p>
        
        </div>
      </section>

      {/* Main Services Content */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black py-20">
        {/* Glowing background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-pink-600 rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
          <div className="absolute top-2/3 right-1/4 w-80 h-80 bg-blue-600 rounded-full filter blur-3xl opacity-10 animate-pulse delay-500"></div>
        </div>

        {/* Floating icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              ...item.animation,
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
          {/* Service categories */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group"
              >
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200`}
                ></div>
                <div className="relative h-full bg-gray-900 p-8 rounded-xl border border-gray-800">
                  <div
                    className={`mb-6 w-20 h-20 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-white`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.services.map((service, i) => (
                      <li key={i} className="flex items-start">
                        <div
                          className={`flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        ></div>
                        <span className="ml-3 text-gray-400">{service}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <button className="text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors flex items-center">
                      View all {category.title} services
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* All services grid */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center text-white mb-12"
            >
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Complete Service Offerings
              </span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {allServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                  <div className="relative h-full bg-gray-900 p-6 rounded-xl border border-gray-800">
                    <div
                      className={`mb-4 w-16 h-16 rounded-lg ${service.color} flex items-center justify-center text-white`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <button className="text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors">
                      Learn more →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-2xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Floating particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, Math.random() * 60 - 30],
                  x: [0, Math.random() * 60 - 30],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 5 + Math.random() * 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: Math.random() * 5,
                }}
                className="absolute w-3 h-3 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}

            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Custom Event Solutions
              </h3>
              <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
                Have unique requirements? We specialize in creating completely
                customized event packages tailored to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link to="/book-event">  <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white text-purple-900 rounded-full font-medium text-lg shadow-lg transition-all duration-300"
                >
                  Request Custom Quote
                </motion.button></Link> 
              <Link to="/contact">  <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-medium text-lg transition-all duration-300"
                >
                  Speak to Our Team
                </motion.button></Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesAll;
