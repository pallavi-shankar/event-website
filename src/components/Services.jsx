import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "Corporate Conferences",
    emoji: "🏢",
    description:
      "Planning and executing professional business meetings, seminars, and conferences with precision and style.",
  },
  {
    title: "Award Nights",
    emoji: "🏆",
    description:
      "Organizing recognition and award ceremonies that celebrate success and create unforgettable memories.",
  },
  {
    title: "Brand Activations",
    emoji: "🚀",
    description:
      "Creative campaigns and experiential events designed to engage audiences and amplify brand presence.",
  },
  {
    title: "Employee Engagement Programs",
    emoji: "🤝",
    description:
      "Interactive and motivational activities to boost employee morale, collaboration, and connection.",
  },
  {
    title: "Live Concerts",
    emoji: "🎤",
    description:
      "Managing large-scale concerts featuring top artists, ensuring electrifying performances and seamless production.",
  },
  {
    title: "Large-Scale Music Experiences",
    emoji: "🎶",
    description:
      "Curating music festivals, DJ nights, and high-energy entertainment events with unmatched creativity and passion.",
  },
];

export default function Services() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-black via-gray-900 to-black text-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-yellow-400 mb-12"
        >
          Our Services
        </motion.h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative w-full max-w-sm h-56 rounded-2xl border border-yellow-400/10 bg-black/40 shadow-[0_0_25px_rgba(255,255,0,0.05)] hover:shadow-[0_0_40px_rgba(255,255,0,0.2)] overflow-hidden cursor-pointer transition-all duration-500"
            >
              {/* Non-hover content */}
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: hovered === i ? 0 : 1, y: hovered === i ? -20 : 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <span className="text-5xl mb-3">{service.emoji}</span>
                <h4 className="text-xl font-semibold text-yellow-400">{service.title}</h4>
              </motion.div>

              {/* Hover content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hovered === i ? 1 : 0, y: hovered === i ? 0 : 20 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex items-center justify-center px-6 text-center bg-black/90 rounded-2xl"
              >
                <p className="text-gray-300 text-base leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
