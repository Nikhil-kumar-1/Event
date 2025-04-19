import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { FaArrowLeft, FaCalendarAlt, FaUsers, FaMapMarkerAlt, FaShareAlt, FaDownload } from "react-icons/fa";
import { RiSparklingFill } from "react-icons/ri";

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

  return (
    <>
      <Helmet>
        <title>Mumbai Music Festival Case Study | EventGlow</title>
        <meta name="description" content="See how we transformed Mumbai's music scene with our innovative festival planning and execution." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 text-gray-900 overflow-hidden">
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

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-6 left-6 z-20"
        >
          <button className="flex items-center gap-2 text-purple-700 hover:text-purple-900 transition-colors">
            <FaArrowLeft /> Back to Case Studies
          </button>
        </motion.div>

        {/* Hero Section */}
        <section className="relative h-96 md:h-screen/2 flex items-end overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
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
                <span className="inline-block px-3 py-1 bg-purple-600 text-white text-sm rounded-full mb-4">
                  Music Festival
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  Mumbai Beats International Festival
                </h1>
                <div className="flex flex-wrap gap-6 text-white">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt /> June 15-16, 2023
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt /> Mumbai, India
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors border border-white/30">
                  <FaShareAlt />
                </button>
                <button className="px-4 py-3 bg-purple-600 text-white rounded-lg flex items-center gap-2 hover:bg-purple-700 transition-colors">
                  <FaDownload /> Download PDF
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-20 px-6 md:px-12 bg-white">
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
                  <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-20 px-6 md:px-12 bg-gray-50">
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
                <h2 className="text-3xl font-bold mb-6">Event Overview</h2>
                <p className="text-lg text-gray-700 mb-4">
                  The Mumbai Beats International Festival was conceived to bring together diverse musical traditions from across India and the world, creating a unique cultural exchange platform. Over two days, we transformed Bandra Fort into a musical paradise.
                </p>
                <p className="text-lg text-gray-700">
                  Our challenge was to accommodate over 5,000 attendees daily while maintaining an intimate concert feel and ensuring seamless transitions between 15+ performances across three stages.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Key Challenges</h2>
                <ul className="space-y-4">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-purple-600">
                        <RiSparklingFill />
                      </div>
                      <span className="text-lg text-gray-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Our Solutions</h2>
                <ul className="space-y-4">
                  {solutions.map((solution, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3 text-purple-600">
                        <RiSparklingFill />
                      </div>
                      <span className="text-lg text-gray-700">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4">Client Testimonial</h3>
                <blockquote className="text-gray-700 italic mb-4">
                  "EventGlow transformed our vision into reality. Their attention to detail and creative problem-solving made this festival our most successful event yet. The team handled everything from artist relations to crowd control with professionalism we've never experienced before."
                </blockquote>
                <div className="font-medium">
                  — Rajiv Mehta, Festival Director
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
              <div className="bg-white p-6 rounded-xl shadow-md sticky top-6">
                <h3 className="text-xl font-bold mb-4">Event Highlights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-3 text-purple-600">
                      •
                    </div>
                    <span>15+ international and local artists</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-3 text-purple-600">
                      •
                    </div>
                    <span>3 themed stages with immersive designs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-3 text-purple-600">
                      •
                    </div>
                    <span>VIP lounge with premium amenities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-3 text-purple-600">
                      •
                    </div>
                    <span>Interactive art installations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-3 text-purple-600">
                      •
                    </div>
                    <span>Gourmet food and craft beverage stations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 rounded-xl text-white">
                <h3 className="text-xl font-bold mb-4">Want a similar event?</h3>
                <p className="mb-6">Let's discuss how we can create magic for your next event.</p>
                <button className="w-full px-4 py-3 bg-white text-purple-600 rounded-lg font-medium hover:bg-opacity-90 transition-opacity">
                  Contact Our Team
                </button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4">Gallery</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                      <img 
                        src={`https://images.unsplash.com/photo-${item === 1 ? '1493225457124-a3eb161ffa5f' : item === 2 ? '1470225620780-dba8ba36b25b' : item === 3 ? '1549213783-8288d0336c4f' : '1511671782779-c97d3d27a1d6'}`}
                        alt={`Festival moment ${item}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <button className="mt-4 w-full px-4 py-2 border border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-colors">
                  View All Photos
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-12 md:py-20 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-12 text-center">The Results</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-5xl font-bold text-purple-600 mb-3">5M+</div>
                  <h3 className="text-xl font-bold mb-2">Social Media Reach</h3>
                  <p className="text-gray-600">The festival trended nationally with over 50,000 mentions</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-5xl font-bold text-purple-600 mb-3">92%</div>
                  <h3 className="text-xl font-bold mb-2">Ticket Sales</h3>
                  <p className="text-gray-600">Sold out with 8% reserved for last-minute VIP guests</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-5xl font-bold text-purple-600 mb-3">100%</div>
                  <h3 className="text-xl font-bold mb-2">Safety Record</h3>
                  <p className="text-gray-600">Zero major incidents across two days with 10,000+ attendees</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 px-6 md:px-12 bg-gradient-to-r from-purple-900 to-blue-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Whether it's a music festival, corporate event, or private celebration, we have the expertise to make it unforgettable.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-4 bg-white text-purple-900 rounded-lg font-medium hover:bg-opacity-90 transition-opacity">
                  Get in Touch
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white rounded-lg font-medium hover:bg-white hover:text-purple-900 transition-colors">
                  View More Case Studies
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudy;