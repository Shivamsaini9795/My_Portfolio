import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [message, setMessage] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // REQUIRED Web3Forms fields
    formData.append("access_key", "680af94f-1b60-49b7-a01e-34f181fd3c7e");
    formData.append("subject", "New message from your portfolio contact form");
    formData.append("redirect", "https://web3forms.com/success");
    formData.append("botcheck", ""); // FIXED (required)

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setMessage("Thank you! Your message has been sent.");
        event.target.reset();
      } else {
        setMessage("Error: " + data.message);
      }
    } catch (err) {
      setMessage("Network error. Please check your internet connection.");
    }
  };

  return (
    <section id="Contact" className="py-20 bg-black text-white relative">
      <div className="max-w-4xl mx-auto px-4 text-center">

        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-500">Contact</span> Me
        </motion.h2>

        <motion.p
          className="text-gray-300 mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Want to work together or talk? Drop a message below!
        </motion.p>

        {message && (
          <div className="mb-6 text-green-400 font-semibold">{message}</div>
        )}

        <motion.form
          onSubmit={onSubmit}
          className="grid gap-6 max-w-xl mx-auto text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <input type="hidden" name="from_name" value="Shivam Saini Portfolio" />
          <input type="hidden" name="from_email" value="shivamsaini01364@gmail.com" />
          <input type="hidden" name="botcheck" />

          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
            className="w-full px-4 py-3 bg-white/10 text-white rounded-md"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
            className="w-full px-4 py-3 bg-white/10 text-white rounded-md"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Phone Number"
            required
            className="w-full px-4 py-3 bg-white/10 text-white rounded-md"
          />

          <textarea
            name="message"
            placeholder="Message Here..."
            rows="5"
            required
            className="w-full px-4 py-3 bg-white/10 text-white rounded-md"
          />

          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md"
          >
            <FaPaperPlane /> Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
