import { motion } from "framer-motion";
import Sparkles from "./Sparkles";
import heroVideo from "../assets/videos/web.mp4";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden font-sans">
      {/* 🎥 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/60" />

      {/* ✨ Sparkles */}
      <Sparkles />

      {/* 🌠 Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.4, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-yellow-400 drop-shadow-[0_0_15px_rgba(255,255,0,0.7)] font-[PlayfairDisplay]"
        >
          Crafting Experiences That Inspire
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.4 }}
          className="mt-5 text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed tracking-wide font-light italic"
        >
          From corporate summits to music festivals —{" "}
          <span className="text-yellow-400 font-semibold">B M Group</span> delivers
          experiences that connect, engage, and energize audiences nationwide.
        </motion.p>

        {/* Center "Explore" Button */}
        <motion.a
          href="#about"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="mt-12 bg-yellow-400 text-black font-semibold rounded-full px-8 py-3 text-lg shadow-[0_0_20px_rgba(255,255,0,0.7)] hover:shadow-[0_0_35px_rgba(255,255,0,0.9)] hover:scale-110 transition-all"
        >
          Explore ↓
        </motion.a>
      </div>

      {/* Floating "Contact Us" Button (bottom-right) */}
      <motion.a
        href="#contact"
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-10 right-10 z-20 bg-yellow-400 text-black font-semibold w-28 h-14 flex items-center justify-center rounded-full shadow-[0_0_20px_rgba(255,255,0,0.7)] hover:shadow-[0_0_35px_rgba(255,255,0,0.9)] hover:scale-110 transition-all"
      >
        Contact Us
      </motion.a>

      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black/80 to-transparent" />
    </section>
  );
}
