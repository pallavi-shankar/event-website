import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const photos = [
  "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFydHl8ZW58MHx8MHx8fDA%3D",
  "https://media.istockphoto.com/id/1214326463/photo/excited-audience-clapping-in-the-theater.webp?a=1&b=1&s=612x612&w=0&k=20&c=bd0rBgM_LPUDwuORIuOlWYwA4tgX6vw2ZbNKT3CaGeU=",
  "https://media.istockphoto.com/id/1330424071/photo/large-group-of-people-at-a-concert-party.webp?a=1&b=1&s=612x612&w=0&k=20&c=jF4NInDkXlKvf3_jZmV5wBBn6aLqVvC37R6yhBaEv3I=",
  "https://plus.unsplash.com/premium_photo-1683129651802-1c7ba429a137?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGFydHl8ZW58MHx8MHx8fDA%3D",
  "https://media.istockphoto.com/id/1268226158/photo/jazz-band-playing-on-stage.webp?a=1&b=1&s=612x612&w=0&k=20&c=KZ6CgLllkUULy-CeoZU2rqCqTnEFm3OKEw55ZxTfmwI=",
  "https://media.istockphoto.com/id/486420378/photo/head-is-swimming-on-dance-floor.webp?a=1&b=1&s=612x612&w=0&k=20&c=aYjSTNY1sdXnihdKHiYvWzRQEP9yI6waZalPMxlRJmc=",
];

export default function Gallery() {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % photos.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + photos.length) % photos.length);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => handleNext(), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="gallery"
      className="relative w-full py-24 bg-gradient-to-b from-black via-gray-900 to-black text-gray-200 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 drop-shadow-lg">
          Gallery
        </h2>
        <p className="mt-3 text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
          A glimpse into our spectacular event experiences
        </p>
      </div>

      {/* Slider container (big rectangular box) */}
      <div className="relative w-[90%] md:w-[80%] lg:w-[70%] h-[400px] md:h-[500px] bg-black/40 border border-yellow-400/30 rounded-2xl shadow-[0_0_40px_rgba(255,215,0,0.1)] overflow-hidden">
        {/* Images */}
        <AnimatePresence mode="wait">
          <motion.img
            key={photos[index]}
            src={photos[index]}
            alt={`Event ${index + 1}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
          />
        </AnimatePresence>

        {/* Overlay gradient for style */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 rounded-2xl" />

        {/* Arrows */}
        <div className="absolute inset-0 flex justify-between items-center px-4 md:px-8 z-20">
          <button
            onClick={handlePrev}
            className="p-3 md:p-4 rounded-full bg-black/50 hover:bg-yellow-400/80 text-yellow-400 hover:text-black transition"
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="p-3 md:p-4 rounded-full bg-black/50 hover:bg-yellow-400/80 text-yellow-400 hover:text-black transition"
          >
            <FaArrowRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "bg-yellow-400 scale-125" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
