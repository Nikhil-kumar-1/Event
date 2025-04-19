import { motion } from "framer-motion";
import { FaSearchPlus, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample gallery images
  const galleryImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3D",
      category: "Concerts",
      title: "Summer Music Festival 2023",
      description:
        "An electrifying music festival with top artists from around the world",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXZlbnR8ZW58MHx8MHx8fDA%3D",
      category: "Corporate",
      title: "Tech Conference",
      description: "Annual technology conference featuring industry leaders",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGV2ZW50fGVufDB8fDB8fHww",
      category: "Weddings",
      title: "Elegant Garden Wedding",
      description: "Beautiful outdoor wedding ceremony and reception",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGV2ZW50fGVufDB8fDB8fHww",
      category: "Parties",
      title: "New Year's Eve Celebration",
      description: "Spectacular New Year's party with fireworks display",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGV2ZW50fGVufDB8fDB8fHww",
      category: "Exhibitions",
      title: "Art Gallery Opening",
      description: "Premier exhibition of contemporary artists",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGV2ZW50fGVufDB8fDB8fHww",
      category: "Concerts",
      title: "Jazz Night Under the Stars",
      description: "Intimate jazz performance in an outdoor setting",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGV2ZW50fGVufDB8fDB8fHww",
      category: "Corporate",
      title: "Product Launch Event",
      description: "Grand unveiling of new tech product line",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1496337589254-7e19d01cec44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGV2ZW50fGVufDB8fDB8fHww",
      category: "Weddings",
      title: "Beachside Wedding Ceremony",
      description: "Romantic beach wedding at sunset",
    },
  ];

  const categories = [
    "All",
    ...new Set(galleryImages.map((img) => img.category)),
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openImage = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const navigate = (direction) => {
    let newIndex;
    if (direction === "prev") {
      newIndex =
        currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    } else {
      newIndex =
        currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    }
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <>
      <Helmet>
        <title>
          Event Gallery | GoldenStorm - Our Portfolio of Memorable Events
        </title>
        <meta
          name="description"
          content="Browse our stunning event gallery showcasing concerts, weddings, corporate events and more. See how GoldenStorm creates unforgettable experiences."
        />
        <meta
          name="keywords"
          content="event gallery, event photos, concert photography, wedding events, corporate events, party planning"
        />
        <meta property="og:title" content="Event Gallery | GoldenStorm" />
        <meta
          property="og:description"
          content="View our portfolio of beautifully executed events across various categories."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://GoldenStorm.com/gallery" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        />
      </Helmet>

      {/* Hero Header with Image */}
      <div className="relative h-96 w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="GoldenStorm Gallery Showcase"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black opacity-80 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Our <span className="text-purple-400">Event</span> Gallery
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              A visual journey through our most memorable events and
              celebrations
            </p>
          </motion.div>
        </div>
      </div>

      <section
        id="gallery"
        className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black py-20"
      >
        {/* Glowing background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-pink-600 rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
          <div className="absolute top-2/3 right-1/4 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl opacity-10 animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gallery header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                Event Portfolio
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Explore our portfolio of stunning events that we've brought to
              life with creativity and precision.
            </p>
          </motion.div>

          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5 }}
                className="relative group overflow-hidden rounded-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>
                <div className="absolute inset-0 flex items-end p-6 z-20">
                  <div>
                    <span className="inline-block px-3 py-1 bg-purple-600 rounded-full text-xs font-medium mb-2">
                      {image.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {image.title}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => openImage(image, index)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-60 rounded-full flex items-center justify-center text-white z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label={`View ${image.title} in detail`}
                >
                  <FaSearchPlus className="text-lg" />
                </button>
                <img
                  src={image.url}
                  alt={`${image.title} - ${image.category} event by GoldenStorm`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          {/* View more button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium text-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center mx-auto">
              View More Events
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Image modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeImage}
          >
            <div className="relative max-w-5xl w-full max-h-screen">
              <button
                className="absolute -right-12 top-0 w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white z-20 hover:bg-gray-800 transition-colors"
                onClick={closeImage}
                aria-label="Close image viewer"
              >
                &times;
              </button>
              <button
                className="absolute -left-12 top-1/2 w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white z-20 hover:bg-gray-800 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("prev");
                }}
                aria-label="Previous image"
              >
                <FaArrowLeft />
              </button>
              <button
                className="absolute -right-12 top-1/2 w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white z-20 hover:bg-gray-800 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("next");
                }}
                aria-label="Next image"
              >
                <FaArrowRight />
              </button>

              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.url}
                  alt={`${selectedImage.title} - Full view`}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-purple-600 rounded-full text-xs font-medium mb-2">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-400">{selectedImage.description}</p>
                  <p className="text-gray-500 mt-2">
                    Event organized by GoldenStorm
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </section>
    </>
  );
};

export default Gallery;
