import { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { FaPlay, FaHeart, FaShare, FaComment, FaMusic, FaTimes } from "react-icons/fa";
import { RiSparklingFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const EventReels = () => {
  const [selectedReel, setSelectedReel] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRefs = useRef([]);
  const modalVideoRef = useRef(null);

  const reels = [
    {
      id: 1,
      title: "Wedding Extravaganza",
      location: "Mumbai, India",
      likes: "12.4k",
      comments: "1.2k",
      videoUrl: "video.mp4"
    },
    {
      id: 2,
      title: "Corporate Gala Night",
      location: "Delhi, India",
      likes: "8.7k",
      comments: "856",
      videoUrl: "https://cdn.pixabay.com/video/2015/12/11/1630-148614385_tiny.mp4"
    },
    {
      id: 3,
      title: "Music Festival",
      location: "Goa, India",
      likes: "24.1k",
      comments: "3.4k",
      videoUrl: "https://cdn.pixabay.com/video/2024/03/03/202856-919000256_tiny.mp4"
    },
    {
      id: 4,
      title: "Birthday Bash",
      location: "Bangalore, India",
      likes: "5.3k",
      comments: "623",
      videoUrl: "https://cdn.pixabay.com/video/2021/02/13/65150-513025128_tiny.mp4"
    }
  ];

  const handleReelClick = (reel) => {
    setSelectedReel(reel);
    setIsPlaying(true);
    // Pause all other videos
    videoRefs.current.forEach(video => {
      if (video && video !== modalVideoRef.current) {
        video.pause();
      }
    });
  };

  const closeModal = () => {
    setIsPlaying(false);
    setTimeout(() => {
      setSelectedReel(null);
    }, 300); // Wait for animation to complete
  };

  useEffect(() => {
    if (modalVideoRef.current) {
      if (isPlaying) {
        modalVideoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
      } else {
        modalVideoRef.current.pause();
      }
    }
  }, [isPlaying, selectedReel]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && selectedReel) {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedReel]);

  return (
    <>
      <Helmet>
        <title>Event Reels | GoldenStorm - Experience Our Magic</title>
        <meta name="description" content="Watch our stunning event reels showcasing weddings, corporate events, and celebrations we've brought to life." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
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
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5
              }}
              className="absolute text-amber-400 text-xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            >
              <RiSparklingFill />
            </motion.div>
          ))}
        </div>

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute w-full h-full object-cover"
          >
            <source src="video.mp4" type="video/mp4" />
          </video>
          
          <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                Event Reels
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 mb-10"
            >
              Experience the magic we create through these captivating moments
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-2 text-amber-300 animate-bounce">
                <span>Swipe up</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Reels Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-16 text-center"
            >
              <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                Our Event Highlights
              </span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reels.map((reel, index) => (
                <motion.div 
                  key={reel.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                  onClick={() => handleReelClick(reel)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-70"></div>
                  
                  <video
                    ref={el => videoRefs.current[index] = el}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={reel.videoUrl} type="video/mp4" />
                  </video>
                  
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <FaMusic className="text-amber-400" />
                      <span className="text-sm font-medium">Original Sound</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{reel.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{reel.location}</p>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col items-center">
                        <button className="p-2 bg-black bg-opacity-50 rounded-full">
                          <FaHeart className="text-xl" />
                        </button>
                        <span className="text-xs mt-1">{reel.likes}</span>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <button className="p-2 bg-black bg-opacity-50 rounded-full">
                          <FaComment className="text-xl" />
                        </button>
                        <span className="text-xs mt-1">{reel.comments}</span>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <button className="p-2 bg-black bg-opacity-50 rounded-full">
                          <FaShare className="text-xl" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-amber-600 bg-opacity-70 rounded-full flex items-center justify-center">
                    <FaPlay className="text-2xl ml-1" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Modal */}
        {selectedReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-white text-2xl z-50 hover:text-amber-400 transition-colors"
                onClick={closeModal}
              >
                <FaTimes />
              </button>
              
              <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg">
                <video
                  ref={modalVideoRef}
                  controls
                  autoPlay={isPlaying}
                  loop
                  playsInline
                  className="absolute top-0 left-0 w-full h-full object-contain"
                >
                  <source src={selectedReel.videoUrl} type="video/mp4" />
                </video>
              </div>
              
              <div className="mt-4 text-white">
                <h3 className="text-xl font-bold">{selectedReel.title}</h3>
                <p className="text-gray-300">{selectedReel.location}</p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <FaHeart className="text-xl" />
                    <span>{selectedReel.likes}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaComment className="text-xl" />
                    <span>{selectedReel.comments}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-amber-900 to-yellow-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-500 rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-yellow-500 rounded-full filter blur-3xl opacity-20"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
              Ready to Create Your Own Magic?
            </h2>
            <p className="text-xl text-gray-300 mb-8 relative z-10">
              Let us transform your vision into an unforgettable experience
            </p>
            <Link to="/book-event">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-amber-900 rounded-lg font-medium hover:bg-opacity-90 transition-all relative z-10"
            >
              Book Your Event Now
            </motion.button></Link>
          </motion.div>
        </section>
      </div>
    </>
  );
};
 
export default EventReels;