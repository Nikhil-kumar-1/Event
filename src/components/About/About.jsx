import { motion } from "framer-motion";
import {
  FaUsers,
  FaTrophy,
  FaCalendarCheck,
  FaLightbulb,
} from "react-icons/fa";
import { GiPartyFlags, GiSparkles } from "react-icons/gi";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { Link } from "react-router-dom";
// import team1 from "../assets/team1.jpg";
// import team2 from "../assets/team2.jpg";
// import team3 from "../assets/team3.jpg";

const About = () => {
  // Floating decorative elements
  const floatingElements = [
    {
      icon: <GiPartyFlags className="text-3xl text-purple-400" />,
      position: "top-20 left-10",
      animation: {
        y: [0, -20, 0],
        rotate: [0, 15, -15, 0],
        transition: { duration: 8, repeat: Infinity },
      },
    },
    {
      icon: <GiSparkles className="text-3xl text-pink-400" />,
      position: "bottom-20 right-10",
      animation: {
        y: [0, 20, 0],
        scale: [1, 1.2, 1],
        transition: { duration: 7, repeat: Infinity, delay: 1 },
      },
    },
    {
      icon: <MdOutlineEmojiPeople className="text-3xl text-blue-400" />,
      position: "top-1/3 right-1/4",
      animation: {
        x: [0, 15, 0],
        transition: { duration: 9, repeat: Infinity, delay: 0.5 },
      },
    },
  ];

  // Team members data
  const teamMembers = [
    {
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3D",
      name: "Akhil Kumar",
      role: "Founder & CEO",
      delay: 0.1,
    },
    {
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3D",
      name: "Shruti Gupta",
      role: "Creative Director",
      delay: 0.2,
    },
    {
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3D",
      name: "Rohit Singh",
      role: "Operations Manager",
      delay: 0.3,
    },
  ];

  // Stats data
  const stats = [
    {
      icon: <FaCalendarCheck className="text-4xl" />,
      value: "500+",
      label: "Events Organized",
      color: "text-purple-400",
    },
    {
      icon: <FaUsers className="text-4xl" />,
      value: "200+",
      label: "Happy Clients",
      color: "text-pink-400",
    },
    {
      icon: <FaTrophy className="text-4xl" />,
      value: "50+",
      label: "Awards Won",
      color: "text-blue-400",
    },
    {
      icon: <FaLightbulb className="text-4xl" />,
      value: "100+",
      label: "Creative Ideas",
      color: "text-yellow-400",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-900 to-black"
    >
      {/* Glowing background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-pink-600 rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 right-1/4 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl opacity-10 animate-pulse delay-500"></div>
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
              Our Story
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We illuminate events with creativity, passion, and precision to
            create unforgettable experiences.
          </p>
        </motion.div>

        {/* About content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">
              Creating <span className="text-purple-400">Magical Moments</span>{" "}
              Since 2015
            </h3>
            <p className="text-gray-400">
              Founded in a small studio with big dreams, GoldenStorm has grown
              into a premier event management company known for its innovative
              approach and attention to detail. What started as a passion
              project between friends has blossomed into a full-service event
              production powerhouse.
            </p>
            <p className="text-gray-400">
              We believe every event should tell a story - your story. Our team
              of creative professionals works tirelessly to ensure your vision
              comes to life in the most spectacular way possible, leaving your
              guests with memories that shine bright long after the event ends.
            </p>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <Link to="/about">
                {" "}
                <button className="relative px-6 py-3 bg-black rounded-lg text-white font-medium">
                  Learn More About Our Journey
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20"></div>
            <div className="relative bg-gray-800 rounded-2xl overflow-hidden h-96">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <GiSparkles className="text-6xl text-yellow-400 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-white mb-2">
                    Our First Event
                  </h4>
                  <p className="text-gray-300">
                    A simple birthday party that started it all
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-900 bg-opacity-60 backdrop-blur-sm rounded-xl p-6 border border-gray-800 text-center"
            >
              <div className={`${stat.color} mb-4 flex justify-center`}>
                {stat.icon}
              </div>
              <h4 className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </h4>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team section */}
        <div className="text-center mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-4"
          >
            Meet <span className="text-purple-400">The Team</span> Behind the
            Magic
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto mb-10"
          >
            Our talented team of event specialists brings creativity, expertise,
            and passion to every project.
          </motion.p>

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
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-1">
                      {member.name}
                    </h4>
                    <p className="text-purple-400">{member.role}</p>
                    <div className="mt-4 flex justify-center space-x-4">
                      <button className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-colors">
                        <span className="sr-only">Twitter</span>
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </button>
                      <button className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </button>
                      <button className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-pink-600 transition-colors">
                        <span className="sr-only">Instagram</span>
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900 bg-opacity-60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-800"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Our <span className="text-purple-400">Core Values</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Creativity",
                description:
                  "We believe in thinking outside the box to deliver unique experiences that stand out.",
                icon: <FaLightbulb className="text-4xl text-purple-400" />,
              },
              {
                title: "Excellence",
                description:
                  "Every detail matters. We strive for perfection in all aspects of our work.",
                icon: <FaTrophy className="text-4xl text-pink-400" />,
              },
              {
                title: "Passion",
                description:
                  "Our love for what we do shines through in every event we create.",
                icon: <GiSparkles className="text-4xl text-blue-400" />,
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gray-800 rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-900 rounded-full flex items-center justify-center">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
