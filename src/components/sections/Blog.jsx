import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: "My Learning Journey ",
    date: "Augest 1, 2023",
    summary: "As a B.Sc IT student passionate about technology, I started my journey by learning the fundamentals — C, C++, Java, Python, and SQL. Slowly, I moved into building real applications using HTML, CSS, JavaScript, Java Servlet, JSP,.",
    link: "#"
  },
  {
    title: "Beginner Spring Boot Projects",
    date: "Augest 20, 2025",
    summary: "Starting as a beginner in Java, I built my first Spring Boot projects using REST APIs, MVC architecture, JDBC, and MySQL integration. In this blog, I share how I planned each project, what challenges I faced, how I connected backend logic with databases, and what I learned while turning theory into real-world applications.",
    link: "#"
  },
  {
    title: "How I Built My Portfolio Website",
    date: "April 10, 2025",
    summary: "A breakdown of the tools, technologies, and design process I followed to build my own personal website using React and Tailwind CSS.",
    link: "#"
  }
];

export default function Blog() {
  return (
    <section id="Blog" className="w-full bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Blog
        </motion.h2>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
              <p className="text-sm text-gray-400 mb-3">{post.date}</p>
              <p className="text-gray-300 mb-4">{post.summary}</p>
              <a
                href={post.link}
                className="text-blue-400 hover:underline"
              >
                Read More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
