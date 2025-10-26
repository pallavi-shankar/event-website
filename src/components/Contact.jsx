import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-gray-900 py-20 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold text-yellow-400 mb-8"
      >
        Get In Touch
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-lg mx-auto text-gray-300 text-left space-y-4"
      >
        <p>
          <strong>Address:</strong><br />
          #80/2 Pravis 8th Cross Sheema School Road,<br />
          Byrathi, Doddagubbi Post, Bangalore 560077
        </p>
        <p>
          <strong>Google Maps:</strong>{" "}
          <a href="#" className="text-yellow-400 underline">View on Map</a>
        </p>
        <p><strong>Email:</strong> info@bmgroup.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="max-w-lg mx-auto mt-8 flex flex-col gap-4"
      >
        <input type="text" placeholder="Your Name" className="p-3 rounded bg-black border border-gray-700 focus:outline-none focus:border-yellow-400" />
        <input type="email" placeholder="Your Email" className="p-3 rounded bg-black border border-gray-700 focus:outline-none focus:border-yellow-400" />
        <textarea placeholder="Your Message" rows="4" className="p-3 rounded bg-black border border-gray-700 focus:outline-none focus:border-yellow-400"></textarea>
        <button className="mt-2 bg-yellow-400 text-black font-semibold py-3 rounded hover:bg-yellow-500 transition">
          Send Message
        </button>
      </motion.form>
    </section>
  );
}
