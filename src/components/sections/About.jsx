import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaJsSquare,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGit,
  FaCode,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiSpringboot,
  SiMysql,
  SiPostman,
  SiNetlify,
  SiIntellijidea,
} from "react-icons/si";

export default function About() {
  return (
    <section id="About" className="py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center text-center">

        {/* Profile Photo */}
        <motion.img
          src="/about.jpeg"
          alt="Shivam Saini"
          className="w-36 h-36 rounded-full object-cover border-4 border-blue-500 shadow-xl mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-blue-500">Me</span>
        </motion.h2>

        {/* Intro */}
        <motion.p
          className="text-gray-300 max-w-3xl text-lg mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          I'm a Full Stack Java Developer passionate about building responsive,
          scalable, and user-friendly web applications. I specialize in
          React.js, Spring Boot, REST APIs, MongoDB, and MySQL with hands-on
          experience in developing and deploying full-stack applications.
        </motion.p>

          {/* Highlights */}
<motion.div
  className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 w-full max-w-3xl"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.6 }}
>
  <div className="bg-white/5 border border-blue-500/20 rounded-xl p-4">
    <h3 className="text-blue-400 font-semibold">🏆 Best Project Award</h3>
    <p className="text-gray-300 text-sm mt-1">
      Secured <span className="font-semibold text-white">3rd Rank</span> for
      developing the Event Booking System during the B.Sc. IT Project
      Exhibition.
    </p>
  </div>

  <div className="bg-white/5 border border-blue-500/20 rounded-xl p-4">
    <h3 className="text-blue-400 font-semibold">👨‍💼 Leadership</h3>
    <p className="text-gray-300 text-sm mt-1">
      Served as the <span className="font-semibold text-white">Class Representative (CR)</span>
      of B.Sc. IT during the 3rd year, coordinating between students and faculty.
    </p>
  </div>
</motion.div>

        {/* Skills */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Skill icon={<FaReact className="text-cyan-400" />} name="React.js" />
          <Skill icon={<FaJava className="text-orange-500" />} name="Java" />
          <Skill icon={<SiSpringboot className="text-green-500" />} name="Spring Boot" />
          <Skill icon={<FaNodeJs className="text-green-500" />} name="Node.js" />
          <Skill icon={<SiExpress className="text-gray-300" />} name="Express.js" />
          <Skill icon={<SiMongodb className="text-green-400" />} name="MongoDB" />
          <Skill icon={<SiMysql className="text-blue-500" />} name="MySQL" />
          <Skill icon={<FaJsSquare className="text-yellow-400" />} name="JavaScript" />
          <Skill icon={<FaHtml5 className="text-orange-500" />} name="HTML5" />
          <Skill icon={<FaCss3Alt className="text-blue-500" />} name="CSS3" />
          <Skill icon={<SiTailwindcss className="text-cyan-400" />} name="Tailwind CSS" />
          <Skill icon={<FaBootstrap className="text-purple-500" />} name="Bootstrap" />
          <Skill icon={<FaGit className="text-orange-600" />} name="Git" />
          <Skill icon={<FaGithub className="text-white" />} name="GitHub" />
          <Skill icon={<SiPostman className="text-orange-500" />} name="Postman" />
          <Skill icon={<FaCode className="text-blue-500" />} name="VS Code" />
          <Skill icon={<SiIntellijidea className="text-pink-500" />} name="IntelliJ IDEA" />
          <Skill icon={<SiNetlify className="text-teal-400" />} name="Netlify" />
          <Skill icon={<FaGithub className="text-purple-400" />} name="Render" />
        </motion.div>
      </div>
    </section>
  );
}

function Skill({ icon, name }) {
  return (
    <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
      <div className="text-5xl mb-3">{icon}</div>
      <p className="text-gray-300 text-sm font-medium">{name}</p>
    </div>
  );
}