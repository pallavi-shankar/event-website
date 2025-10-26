import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Event Conceptualization",
    description:
      "Planning and designing unique themes and concepts that align with your brand’s story and event objectives.",
  },
  {
    title: "Flawless Execution",
    description:
      "Seamlessly managing logistics, coordination, vendor communication, and on-site supervision to ensure perfection.",
  },
  {
    title: "Audience Engagement",
    description:
      "Creating interactive experiences that captivate audiences and make every attendee feel part of the story.",
  },
  {
    title: "Brand & Artist Collaboration",
    description:
      "Partnering with leading brands, artists, and performers to deliver high-impact experiences and unforgettable moments.",
  },
//   {
//     title: "Geographic Coverage",
//     description:
//       "Executing events across multiple Indian cities — and expanding internationally with scalable operational excellence.",
//   },
];

export default function EventApproach() {
  return (
    <section
      id="approach"
      className="py-24 bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#1a1a1a] text-gray-200 relative overflow-hidden"
    >
      {/* Subtle gold mist for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.05),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-yellow-400 mb-10"
        >
          Our Event Management Approach
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-300 text-lg mb-16 max-w-2xl mx-auto"
        >
          B M Group delivers end-to-end experiences — built on creativity, flawless planning, and seamless execution.
        </motion.p>

        {/* Grid: 2 per row, text only */}
        <div className="grid sm:grid-cols-2 gap-x-16 gap-y-12 text-left md:text-center">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="px-4"
            >
              <h3 className="text-2xl font-semibold text-yellow-400 mb-3">
                {cap.title}
              </h3>
              <p className="text-gray-300 text-base leading-relaxed max-w-md mx-auto">
                {cap.description}
              </p>
              <div className="h-[1px] w-20 bg-yellow-400/30 mt-6 mx-auto"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
