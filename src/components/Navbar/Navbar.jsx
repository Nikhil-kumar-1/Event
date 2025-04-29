import { useState } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Videos", path: "/reels" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-50 bg-black bg-opacity-90 border-b border-amber-600 border-opacity-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24"> {/* Increased height to h-24 */}
          {/* Logo with proper alignment and sizing */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="logo.png" 
                alt="Golden Storm Logo" 
                className="h-60 mt-5 w-auto"  // Increased height to h-16 (4rem)
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-center space-x-6"> {/* Adjusted spacing */}
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="text-amber-100 hover:text-amber-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  <Link to={item.path}>{item.name}</Link>
                </div>
              ))}
              <button className="ml-6 px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-black rounded-full text-sm font-bold transition-colors duration-300">
                <Link to="/book-event">Book Now</Link>
              </button>
            </div>
          </div>

          {/* Mobile menu button - centered vertically */}
          <div className="md:hidden flex items-center h-full">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-amber-300 hover:text-yellow-500 hover:bg-amber-900/30 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-black`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="block px-3 py-3 rounded-md text-base font-medium text-amber-100 hover:text-amber-300 hover:bg-amber-900/20"
            >
              <Link to={item.path} onClick={toggleMenu}>
                {item.name}
              </Link>
            </div>
          ))}
          <button className="w-full mt-2 px-4 py-3 bg-amber-500 hover:bg-amber-600 text-black rounded-md text-base font-bold">
            <Link to="/book-event" onClick={toggleMenu}>
              Book Now
            </Link>
          </button>
          <div className="pt-4 pb-3 border-t border-amber-800/50">
            <div className="flex items-center px-5 space-x-3">
              <FaPhoneAlt className="text-amber-400" />
              <span className="text-amber-200">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center px-5 pt-3 space-x-3">
              <FaEnvelope className="text-amber-400" />
              <span className="text-amber-200">info@GoldenStorm.com</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;