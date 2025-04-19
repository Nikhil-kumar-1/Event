import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { FaArrowLeft, FaCalendarAlt, FaUsers, FaMapMarkerAlt, FaShareAlt, FaDownload } from "react-icons/fa";
import { RiSparklingFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const CaseStudy = () => {
  const stats = [
    { value: "500+", label: "Guests" },
    { value: "2 Days", label: "Duration" },
    { value: "15+", label: "Performers" },
    { value: "98%", label: "Satisfaction" }
  ];

  const challenges = [
    "Limited venue space for expected crowd",
    "Coordinating multiple performers' schedules",
    "Creating unique experiences for VIP guests",
    "Ensuring smooth logistics across 2 days"
  ];

  const solutions = [
    "Designed multi-level staging to maximize space",
    "Implemented digital scheduling system for artists",
    "Created exclusive VIP lounge with premium amenities",
    "Developed detailed minute-by-minute run sheets"
  ];

  // Floating decorative elements
  const floatingElements = [
    {
      icon: <RiSparklingFill className="text-purple-400" />,
      position: "top-20 left-5",
      animation: {
        y: [0, -25, 0],
        rotate: [0, 15, -15, 0],
        transition: { duration: 8, repeat: Infinity }
      }
    },
    {
      icon: <RiSparklingFill className="text-pink-400" />,
      position: "bottom-20 right-5",
      animation: {
        y: [0, 25, 0],
        scale: [1, 1.3, 1],
        transition: { duration: 7, repeat: Infinity, delay: 1 }
      }
    }
  ];

  return (
    <>
      <Helmet>
        <title>Music Festival Case Study | GoldenStorm</title>
        <meta name="description" content="See how we transformed the music scene with our innovative festival planning and execution." />
      </Helmet>

      <div className="min-h-screen bg-gray-900 text-gray-100 overflow-hidden">
        {/* Floating decorative elements */}
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 0, x: Math.random() * 100 }}
              animate={{
                opacity: [0, 0.3, 0],
                y: [0, window.innerHeight],
                x: [Math.random() * 100, Math.random() * 100 + 50]
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5
              }}
              className="absolute text-purple-400 text-xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            >
              <RiSparklingFill />
            </motion.div>
          ))}
        </div>

        {/* Glowing background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-pink-600 rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
        </div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-6 left-6 z-20"
        >
          <Link to="/case-study" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
            <FaArrowLeft /> Back to Case Studies
          </Link>
        </motion.div>

        {/* Hero Section */}
        <section className="relative h-96 md:h-screen/2 flex items-end overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Music festival crowd"
            className="absolute w-full h-full object-cover"
          />
          
          <div className="relative z-20 px-6 pb-12 md:px-12 w-full max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-between items-end gap-6"
            >
              <div>
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm rounded-full mb-4">
                  Music Festival
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  Golden Beats International Festival
                </h1>
                <div className="flex flex-wrap gap-6 text-white">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt /> June 15-16, 2023
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt /> City Venue
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors border border-white/30">
                  <FaShareAlt />
                </button>
                <button className="px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity">
                  <FaDownload /> Download PDF
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-20 px-6 md:px-12 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-20 px-6 md:px-12 bg-gray-900">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-2 space-y-12"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Event Overview</h2>
                <p className="text-lg text-gray-400 mb-4">
                  The Golden Beats International Festival was conceived to bring together diverse musical traditions from across the world, creating a unique cultural exchange platform. Over two days, we transformed the venue into a musical paradise.
                </p>
                <p className="text-lg text-gray-400">
                  Our challenge was to accommodate thousands of attendees while maintaining an intimate concert feel and ensuring seamless transitions between multiple performances across several stages.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Key Challenges</h2>
                <ul className="space-y-4">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-purple-400">
                        <RiSparklingFill />
                      </div>
                      <span className="text-lg text-gray-400">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Our Solutions</h2>
                <ul className="space-y-4">
                  {solutions.map((solution, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-purple-400">
                        <RiSparklingFill />
                      </div>
                      <span className="text-lg text-gray-400">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-white">Client Testimonial</h3>
                <blockquote className="text-gray-400 italic mb-4">
                  "GoldenStorm transformed our vision into reality. Their attention to detail and creative problem-solving made this festival our most successful event yet. The team handled everything from artist relations to crowd control with professionalism we've never experienced before."
                </blockquote>
                <div className="font-medium text-purple-400">
                  — Festival Director
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 sticky top-6">
                <h3 className="text-xl font-bold mb-4 text-white">Event Highlights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-3 text-purple-400">
                      •
                    </div>
                    <span className="text-gray-400">Multiple international and local artists</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-3 text-purple-400">
                      •
                    </div>
                    <span className="text-gray-400">Themed stages with immersive designs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-3 text-purple-400">
                      •
                    </div>
                    <span className="text-gray-400">VIP lounge with premium amenities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-3 text-purple-400">
                      •
                    </div>
                    <span className="text-gray-400">Interactive art installations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-3 text-purple-400">
                      •
                    </div>
                    <span className="text-gray-400">Gourmet food and craft beverage stations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-xl text-white">
                <h3 className="text-xl font-bold mb-4">Want a similar event?</h3>
                <p className="mb-6">Let's discuss how we can create magic for your next event.</p>
                <Link to="/contact" className="w-full px-4 py-3 bg-white text-purple-600 rounded-lg font-medium hover:bg-opacity-90 transition-opacity block text-center">
                  Contact Our Team
                </Link>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-white">Gallery</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="aspect-square bg-gray-700 rounded-lg overflow-hidden">
                      <img 
                        src={`https://images.unsplash.com/photo-${item === 1 ? '1493225457124-a3eb161ffa5f' : item === 2 ? '1470225620780-dba8ba36b25b' : item === 3 ? '1549213783-8288d0336c4f' : '1511671782779-c97d3d27a1d6'}`}
                        alt={`Festival moment ${item}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <Link to="/gallery" className="mt-4 w-full px-4 py-2 border border-purple-600 text-purple-400 rounded-lg font-medium hover:bg-purple-900/30 transition-colors block text-center">
                  View All Photos
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-12 md:py-20 px-6 md:px-12 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-12 text-center text-white">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  The Results
                </span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                  <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-3">5M+</div>
                  <h3 className="text-xl font-bold mb-2 text-white">Social Media Reach</h3>
                  <p className="text-gray-400">The festival trended nationally with thousands of mentions</p>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                  <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-3">92%</div>
                  <h3 className="text-xl font-bold mb-2 text-white">Ticket Sales</h3>
                  <p className="text-gray-400">Nearly sold out with some reserved for last-minute VIP guests</p>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                  <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-3">100%</div>
                  <h3 className="text-xl font-bold mb-2 text-white">Safety Record</h3>
                  <p className="text-gray-400">Zero major incidents across two days with thousands of attendees</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 px-6 md:px-12 bg-gradient-to-r from-purple-900 to-pink-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
              <p className="text-xl text-purple-200 mb-8">
                Whether it's a music festival, corporate event, or private celebration, we have the expertise to make it unforgettable.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="px-8 py-4 bg-white text-purple-900 rounded-lg font-medium hover:bg-opacity-90 transition-opacity">
                  Get in Touch
                </Link>
                <Link to="/case-study" className="px-8 py-4 bg-transparent border-2 border-white rounded-lg font-medium hover:bg-white hover:text-purple-900 transition-colors">
                  View More Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudy;