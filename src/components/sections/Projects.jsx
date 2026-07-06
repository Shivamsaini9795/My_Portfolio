import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [

  {
  title: "Event Booking System",
  description:
    "A full-stack Event Booking System that allows users to browse event decoration services, choose designs, book events, make secure online payments, and receive booking confirmations. It includes an admin dashboard for managing bookings, services, and customers.",
  tech: [
    "React.js",
    "Spring Boot",
    "MongoDB",
    "Tailwind CSS",
    "REST API",
    "Razorpay Payment Gateway",
  
  ],
  github: "https://github.com/Shivamsaini9795/DecorationShop",
  live: "https://shivamflowerdecoration.shop",
},
  {
  title: "Admin Dashboard",
  description:
    "A responsive Admin Dashboard designed to manage event bookings, customers, services, and payment details from a centralized interface with a clean and user-friendly experience.",
  tech: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Bootstrap",
    "REST API",
  ],
  github: "https://github.com/Shivamsaini9795/Admin_Page",
  live: "https://admin.shivamflowerdecoration.shop",
},
  {
    title: 'Journey Planner',
    description: 'Your all-in-one travel assistant to explore destinations, create itineraries, and manage every detail of your journey with ease.',
    tech: ['Java', 'Springboot','React', 'Tailwind CSS', 'JS','Mysql'],
    github: 'https://github.com/Shivamsaini9795/Travel_Fronted',
  },
  {
    title: 'My Portfolio',
    description: 'A personal portfolio showcasing my projects, skills, and experience.',
    tech: ['Java','React', 'Tailwind CSS', 'Js','API'],
    github: 'https://github.com/Shivamsaini9795/My_Portfolio',
  },
];

export default function Projects() {
  return (
    <section id="Projects" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
           <span className="text-blue-500">
          Full Stack </span>Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/5 p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-white/10 rounded-full text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline flex items-center gap-1 text-sm"
                  >
                    <FaGithub /> View Code
                  </a>
                )}

              {project.live && (
                <a
                  href={project.live}
                  target="shivamflowerdecoration.netlify.app"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg flex items-center gap-2 text-sm transition"
                >
                  <FaExternalLinkAlt />
                  Live Project
                </a>
              )}
            </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
