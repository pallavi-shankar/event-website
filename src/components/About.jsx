import { motion } from "framer-motion";
import aboutImg from "../assets/images/about.jpg"; // 👈 your image here
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <img
            src={aboutImg}
            alt="About B M Group"
            className="rounded-2xl shadow-[0_0_40px_rgba(255,255,0,0.2)] object-cover w-full h-[450px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
            About B M Group
          </h2>
          <p className="text-lg leading-relaxed text-gray-300 mb-8">
            Over the past five years,{" "}
            <span className="text-yellow-400 font-semibold">B M Group</span> has
            successfully produced and executed a wide range of events across
            India — from corporate gatherings to electrifying music experiences.
            Our mission is to craft memorable moments through creativity,
            precision, and professionalism.
          </p>

          <Link
            to="/overview"
            className="self-start bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full shadow-[0_0_20px_rgba(255,255,0,0.6)] hover:shadow-[0_0_35px_rgba(255,255,0,0.9)] hover:scale-105 transition-all"
          >
            View Overview →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
