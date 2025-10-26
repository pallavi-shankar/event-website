import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-b from-black via-gray-900 to-black text-gray-200 py-20 px-8 border-t border-yellow-400/20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* 🏢 Company Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-2">B M Group</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Crafting unforgettable experiences through creativity, precision, and professionalism.
          </p>

          <div className="space-y-2 mt-6 text-base">
            <p>
              <span className="font-semibold text-yellow-400">Address:</span>{" "}
              <a
                href="https://goo.gl/maps/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                #80/2 Pravis, 8th Cross, Sheema School Road, Byrathi, Doddagubbi
                Post, Bangalore 560077
              </a>
            </p>
            <p>
              <span className="font-semibold text-yellow-400">Phone:</span>{" "}
              <a href="tel:+919876543210" className="hover:text-yellow-400 transition">
                +91 98765 43210
              </a>
            </p>
            <p>
              <span className="font-semibold text-yellow-400">Email:</span>{" "}
              <a href="mailto:info@bmgroup.com" className="hover:text-yellow-400 transition">
                info@bmgroup.com
              </a>
            </p>
          </div>
        </motion.div>

        {/* 🔗 Quick Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <h3 className="text-2xl font-semibold text-yellow-400 mb-6">
            Quick Links
          </h3>
          <ul className="space-y-3 text-lg text-white">
            <li>
              <a href="#hero" className="hover:text-yellow-400 transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-400 transition-colors duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-yellow-400 transition-colors duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="#approach" className="hover:text-yellow-400 transition-colors duration-300">
                Approach
              </a>
            </li>
            <li>
              <a href="#executed-shows" className="hover:text-yellow-400 transition-colors duration-300">
                Shows
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-yellow-400 transition-colors duration-300">
                Gallery
              </a>
            </li>
          </ul>
        </motion.div>

        {/* 🌐 Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:items-end justify-center space-y-5"
        >
          <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
            Connect With Us
          </h3>
          <div className="flex gap-6 text-3xl">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:scale-110 transition-transform"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:scale-110 transition-transform"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:scale-110 transition-transform"
            >
              <FaYoutube />
            </a>
            <a
              href="mailto:info@bmgroup.com"
              className="text-yellow-400 hover:scale-110 transition-transform"
            >
              <FaEnvelope />
            </a>
          </div>
          <p className="text-gray-400 text-sm max-w-xs text-right leading-relaxed">
            Let’s collaborate to turn your next event into an unforgettable experience.
          </p>
        </motion.div>
      </div>

      {/* Divider & Copyright */}
      <div className="border-t border-yellow-400/10 mt-14 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="text-yellow-400 font-semibold">B M Group</span> — All Rights Reserved.
      </div>
    </footer>
  );
}
