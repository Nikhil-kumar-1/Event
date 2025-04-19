import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { FaPlay, FaCalendarAlt, FaMapMarker, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>EventGlow - Premier Event Planning & Management</title>
        <meta name="description" content="EventGlow creates unforgettable experiences with professional event planning and management services for all occasions." />
        <meta name="keywords" content="event planning, event management, corporate events, weddings, parties" />
        <meta property="og:title" content="EventGlow - Premier Event Planning" />
        <meta property="og:description" content="Creating unforgettable event experiences with professional planning and management." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eventglow.com" />
      </Helmet>

      <div className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section with Video Background */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute w-full h-full object-cover"
          >
            <source src="https://cdn.pixabay.com/video/2020/08/30/48569-454825064_tiny.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Turn Moments Into Memories
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 mb-10"
            >
              Your dream event, our expert touch – unforgettable in every way.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
           <Link to="/book-event">   <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Plan Your Event
              </button></Link>
           <Link to="/reels">   <button className="px-8 py-3 bg-transparent border-2 border-white rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-colors flex items-center justify-center gap-2">
                <FaPlay /> Watch Showreel
              </button></Link>
            </motion.div>
          </div>
        </section>

        {/* Featured Events Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                Our Signature Events
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Discover the extraordinary events we've crafted for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item}
                whileHover={{ y: -10 }}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative h-64">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover"
                  >
                    <source 
                      src={
                        item === 1 ? "https://cdn.pixabay.com/video/2023/08/11/175579-853849692_tiny.mp4" :
                        item === 2 ? "https://cdn.pixabay.com/video/2015/11/07/1275-145116912_tiny.mp4" :
                        "https://cdn.pixabay.com/video/2022/10/23/136134-764371502_tiny.mp4"
                      } 
                      type="video/mp4" 
                    />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item === 1 ? "Corporate Gala Night" : item === 2 ? "Music Festival" : "Luxury Wedding"}
                    </h3>
                    <div className="flex items-center text-sm text-gray-300 gap-4">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt /> May 2023
                      </span>
                      <span className="flex items-center gap-1">
                        <FaMapMarker /> {item === 1 ? "Patna" : item === 2 ? "Patna" : "Patna"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">
                    {item === 1 ? "An elegant evening celebrating corporate achievements with 500+ guests." : 
                     item === 2 ? "Three-day outdoor music festival featuring top international artists." : 
                     "Breathtaking beach wedding ceremony with custom-designed decor."}
                  </p>
                 <Link to="/case-study"> <button className="text-purple-400 hover:text-purple-300 font-medium flex items-center gap-2">
                    View Case Study <span>→</span>
                  </button></Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Event Stats Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">250+</div>
                <div className="text-gray-300 flex items-center justify-center gap-2">
                  <FaUsers className="text-purple-300" /> Events
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="p-6"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">15K+</div>
                <div className="text-gray-300">Happy Guests</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="p-6"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                <div className="text-gray-300">Cities</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="p-6"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
                <div className="text-gray-300">Satisfaction</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-gray-800 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create an Unforgettable Event?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Our team of experts is ready to bring your vision to life with professional planning and flawless execution.
            </p>
         <Link to="/book-event">   <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:opacity-90 transition-opacity text-lg">
              Get Started Today
            </button></Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;