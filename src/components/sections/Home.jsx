import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import CertificateSection from "./CertificateSection";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="relative min-h-screen w-full flex items-center justify-center bg-black text-white px-4 overflow-hidden"
      >
        <div className="relative z-10 max-w-5xl w-full mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm <span className="text-blue-500">Shivam Saini</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-blue-400 mb-6 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Typewriter
              words={[
                "Full Stack Java Developer",
                "Spring Boot Developer",
                "React.js Developer",
                "MERN Stack Learner",
                "REST API Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </motion.p>

          <motion.div
            className="flex justify-center items-center flex-wrap gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link
              to="/Shivam_Saini_Bsc IT.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-semibold transition duration-300"
            >
              View / Download Resume
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition duration-300"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div
            className="flex justify-center items-center space-x-6 text-2xl text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <a
              href="https://github.com/Shivamsaini9795"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/shivam-saini-517048310/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:shivamsaini01364@gmail.com"
              className="hover:text-white"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </div>
      </section>

      <About />
      <Projects />
      <CertificateSection />
      <Contact />
    </>
  );
}