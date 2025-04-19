import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  FaUsers,
  FaTrophy,
  FaCalendarCheck,
  FaLightbulb,
  FaQuoteLeft,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { GiPartyFlags, GiSparkles, GiThreeFriends } from "react-icons/gi";
import { MdOutlineEmojiPeople, MdDiversity3 } from "react-icons/md";
import { Link } from "react-router-dom";

const AboutAll = () => {
  // Floating decorative elements
  const floatingElements = [
    {
      icon: <GiPartyFlags className="text-4xl text-purple-400" />,
      position: "top-20 left-10",
      animation: {
        y: [0, -30, 0],
        rotate: [0, 20, -20, 0],
        transition: { duration: 8, repeat: Infinity },
      },
    },
    {
      icon: <GiSparkles className="text-4xl text-pink-400" />,
      position: "bottom-20 right-10",
      animation: {
        y: [0, 30, 0],
        scale: [1, 1.4, 1],
        transition: { duration: 7, repeat: Infinity, delay: 1 },
      },
    },
    {
      icon: <MdOutlineEmojiPeople className="text-4xl text-blue-400" />,
      position: "top-1/3 right-1/4",
      animation: {
        x: [0, 25, 0],
        transition: { duration: 9, repeat: Infinity, delay: 0.5 },
      },
    },
  ];

  // Team members data
  const teamMembers = [
    {
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnR8ZW58MHx8MHx8fDA%3D",
      name: "Akhil Kumar",
      role: "Founder & CEO",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
      delay: 0.1,
    },
    {
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnR8ZW58MHx8MHx8fDA%3D",
      name: "Shruti Gupta",
      role: "Creative Director",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
      delay: 0.2,
    },
    {
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnR8ZW58MHx8MHx8fDA%3D",
      name: "Rohit Singh",
      role: "Operations Manager",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
      delay: 0.3,
    },
  ];

  // Timeline data
  const timeline = [
    {
      year: "2015",
      title: "Company Founded",
      description: "Started in a small office with just 3 team members",
      icon: <GiThreeFriends className="text-2xl" />,
    },
    {
      year: "2017",
      title: "First Major Event",
      description: "Organized a 500-person corporate gala",
      icon: <FaCalendarCheck className="text-2xl" />,
    },
    {
      year: "2019",
      title: "Expanded Services",
      description: "Added full production and AV services",
      icon: <FaLightbulb className="text-2xl" />,
    },
    {
      year: "2022",
      title: "National Recognition",
      description: "Won 'Best Event Company' award",
      icon: <FaTrophy className="text-2xl" />,
    },
    {
      year: "2023",
      title: "Current",
      description: "Serving clients nationwide with 50+ team members",
      icon: <MdDiversity3 className="text-2xl" />,
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - GoldenStorm | Our Story & Team</title>
        <meta
          name="description"
          content="Discover GoldenStorm's journey, meet our passionate team, and learn about our commitment to creating unforgettable event experiences."
        />
        <meta
          name="keywords"
          content="event planning, about us, event company, our team, event management"
        />
        <meta
          property="og:title"
          content="About GoldenStorm - Our Story & Team"
        />
        <meta
          property="og:description"
          content="Learn about GoldenStorm's journey and meet the creative minds behind our successful events."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://GoldenStorm.com/about" />
      </Helmet>

      {/* Hero Header with Image */}
      <div className="relative h-96 w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="GoldenStorm Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-80 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Our <span className="text-purple-400">Story</span> &{" "}
              <span className="text-pink-400">Team</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Discover the passion and people behind GoldenStorm's unforgettable
              experiences
            </p>
          </motion.div>
        </div>
      </div>

      <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black py-20">
        {/* Glowing background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-pink-600 rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
          <div className="absolute top-2/3 right-1/4 w-80 h-80 bg-blue-600 rounded-full filter blur-3xl opacity-10 animate-pulse delay-500"></div>
        </div>

        {/* Floating decorative elements */}
        {floatingElements.map((item, index) => (
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
          {/* Founder section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
                  <img
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnR8ZW58MHx8MHx8fDA%3D"
                    alt="Akhil Kumar - Founder & CEO of GoldenStorm"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-6"
            >
              <h2 className="text-3xl font-bold text-white">
                Meet <span className="text-purple-400">Akhil Kumar</span>, Our
                Founder
              </h2>
              <div className="relative">
                <FaQuoteLeft className="text-4xl text-gray-700 absolute -top-2 -left-2" />
                <p className="text-lg text-gray-400 pl-10">
                  "I started GoldenStorm with a simple vision: to create events
                  that don't just happen, but truly shine. What began as a
                  passion project has grown into a family of creative
                  professionals who share this vision."
                </p>
              </div>
              <p className="text-gray-400">
                With over 15 years in the event industry, Alex's expertise and
                innovative approach have shaped GoldenStorm's reputation for
                excellence. His leadership continues to inspire our team to push
                creative boundaries.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-400">15+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                  <span className="text-gray-400">500+ Events Organized</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-400">Industry Award Winner</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Timeline section */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center text-white mb-12"
            >
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Our Journey
              </span>
            </motion.h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 transform -translate-x-1/2"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    } items-center`}
                  >
                    <div
                      className={`flex-shrink-0 w-1/2 ${
                        index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                      }`}
                    >
                      <div className="inline-block bg-gray-900 rounded-lg border border-gray-800 px-4 py-2">
                        <h4 className="text-xl font-bold text-white">
                          {item.year}
                        </h4>
                      </div>
                    </div>
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white relative z-10">
                      {item.icon}
                    </div>
                    <div
                      className={`flex-shrink-0 w-1/2 ${
                        index % 2 === 0 ? "pl-8" : "pr-8 text-right"
                      }`}
                    >
                      <h4 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Team section */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl font-bold text-white mb-4">
                The <span className="text-purple-400">Creative Minds</span>{" "}
                Behind Your Events
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our team of passionate professionals brings diverse expertise to
                create your perfect event.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: member.delay }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                  <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
                    <div className="h-80 overflow-hidden">
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.role} at GoldenStorm`}
                        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-white mb-1">
                        {member.name}
                      </h4>
                      <p className="text-purple-400 mb-4">{member.role}</p>
                      <div className="flex justify-center space-x-4">
                        <a
                          href={member.social.twitter}
                          className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-400 transition-colors"
                        >
                          <span className="sr-only">Twitter</span>
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                        <a
                          href={member.social.linkedin}
                          className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-colors"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                        <a
                          href={member.social.instagram}
                          className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-pink-600 transition-colors"
                        >
                          <span className="sr-only">Instagram</span>
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats section */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-400">
                    <FaUsers className="text-2xl" />
                  </div>
                </div>
                <h4 className="text-3xl font-bold text-white mb-2">50+</h4>
                <p className="text-gray-400">Team Members</p>
              </div>
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-pink-900/50 flex items-center justify-center text-pink-400">
                    <FaCalendarCheck className="text-2xl" />
                  </div>
                </div>
                <h4 className="text-3xl font-bold text-white mb-2">1000+</h4>
                <p className="text-gray-400">Events Organized</p>
              </div>
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400">
                    <FaTrophy className="text-2xl" />
                  </div>
                </div>
                <h4 className="text-3xl font-bold text-white mb-2">12</h4>
                <p className="text-gray-400">Industry Awards</p>
              </div>
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-green-900/50 flex items-center justify-center text-green-400">
                    <MdDiversity3 className="text-2xl" />
                  </div>
                </div>
                <h4 className="text-3xl font-bold text-white mb-2">250+</h4>
                <p className="text-gray-400">Happy Clients</p>
              </div>
            </motion.div>
          </div>

          {/* Contact CTA section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl border border-gray-800 p-8 md:p-12">
              <h3 className="text-3xl font-bold text-white mb-4 text-center">
                Ready to create something amazing together?
              </h3>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto text-center">
                Our team is excited to bring your vision to life with creativity
                and precision.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-400 mb-4">
                    <FaPhone className="text-xl" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Call Us</h4>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-pink-900/50 flex items-center justify-center text-pink-400 mb-4">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Email Us
                  </h4>
                  <p className="text-gray-400">info@GoldenStorm.com</p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 mb-4">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Visit Us
                  </h4>
                  <p className="text-gray-400">123 Event St, New York</p>
                </div>
              </div>

              <div className="text-center mt-10">
                <Link to="/contact">
                  {" "}
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl">
                    Get in Touch
                  </button>
                </Link>
                <Link to="/book-event">
                  {" "}
                  <button className=" bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl">
                    Book Event Now
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutAll;
