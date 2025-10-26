import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Overview() {
  const points = [
    "Executed 100+ corporate and entertainment events across India.",
    "Partnered with leading brands and artists for impactful collaborations.",
    "Specialized in conferences, award nights, activations, and concerts.",
    "Managed large-scale events in Delhi, Mumbai, Bangalore, Hyderabad, and Kolkata.",
    "Committed to flawless execution from concept to completion.",
    "Blending creativity, precision, and professionalism in every experience.",
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-gray-200 flex flex-col items-center justify-center px-6 py-24">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-yellow-400 mb-12 text-center"
      >
        B M Group Overview
      </motion.h1>

      <div className="max-w-4xl w-full space-y-6">
        {points.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="bg-black/40 border border-yellow-400/30 rounded-full py-4 px-8 text-lg md:text-xl shadow-[0_0_25px_rgba(255,255,0,0.1)] hover:shadow-[0_0_35px_rgba(255,255,0,0.3)] transition text-center"
          >
            {line}
          </motion.div>
        ))}
      </div>

      {/* Back button to About section */}
      <Link
        to="/#about"
        className="mt-16 bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold shadow-[0_0_20px_rgba(255,255,0,0.6)] hover:shadow-[0_0_35px_rgba(255,255,0,0.9)] transition-all"
      >
        ← Back to About
      </Link>
    </section>
  );
}
