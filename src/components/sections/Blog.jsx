import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Building an Event Booking System",
    date: "Febuary 2026",
    summary:
      "Learn how I built a full-stack Event Booking System using React.js, Spring Boot, MongoDB, Razorpay, and Google Maps API with secure booking, email notifications, and an admin dashboard.",
    link: "#",
  },
  {
    title: "My Full Stack Java Journey",
    date: "May 2026",
    summary:
      "From learning Java fundamentals to developing full-stack web applications with Spring Boot, React.js, REST APIs, and database integration. This blog shares my learning journey and practical experience.",
    link: "#",
  },
  {
    title: "Designing My Portfolio Website",
    date: "January 2026",
    summary:
      "A behind-the-scenes look at how I designed and developed my responsive portfolio using React.js, Tailwind CSS, Framer Motion, and React Router with a modern user interface.",
    link: "#",
  },
];

export default function Blog() {
  return (
    <section id="Blog" className="w-full bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Latest <span className="text-blue-500">Blogs</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Sharing my development journey, project experiences, and continuous
          learning in Full Stack Java Development.
        </motion.p>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {post.title}
              </h3>

              <p className="text-sm text-gray-400 mb-4">{post.date}</p>

              <p className="text-gray-300 leading-7 mb-6">
                {post.summary}
              </p>

              <span className="text-blue-400 font-medium">
                Coming Soon...
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}