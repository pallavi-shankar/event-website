import { motion } from "framer-motion";

const cities = [
  {
    name: "Delhi",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1600&auto=format&fit=crop", // India Gate
  },
  {
    name: "Mumbai",
    image:
      "https://media.istockphoto.com/id/1334792855/photo/chhatrapati-shivaji-terminus-in-mumbai-india.jpg?s=2048x2048&w=is&k=20&c=AgQIdAGn8sne8ydQC9QI6x1fRNBtlGknDuFqVKgsbj0=", // Gateway of India
  },
  {
    name: "Bangalore",
    image:
      "https://images.unsplash.com/photo-1697130383976-38f28c444292?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Vidhana Soudha
  },
  {
    name: "Hyderabad",
    image:
      "https://plus.unsplash.com/premium_photo-1694475128245-999b1ae8a44e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Charminar
  },
  {
    name: "Kolkata",
    image:
      "https://plus.unsplash.com/premium_photo-1697730414399-3d4d9ada98bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a29sa2F0YXxlbnwwfHwwfHx8MA%3D%3D", // Howrah Bridge
  },
];

export default function ExecutedShows() {
  return (
    <section
      id="executed-shows"
      className="py-24 bg-gradient-to-b from-black via-gray-900 to-black text-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-yellow-400 mb-3"
        >
          Our Successfully Executed Shows
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto"
        >
          Delivering unforgettable experiences and flawless execution across
          India’s most iconic cities.
        </motion.p>

        {/* Top Row (3 Cities) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 justify-items-center">
          {cities.slice(0, 3).map((city, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative group rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(255,255,0,0.15)] hover:shadow-[0_0_35px_rgba(255,255,0,0.3)] transition-all w-full max-w-sm"
            >
              {/* City Image */}
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              {/* City Name */}
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <h3 className="text-2xl font-semibold text-yellow-400 drop-shadow-lg">
                  {city.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row (2 Cities Centered) */}
        <div className="flex flex-wrap justify-center gap-8">
          {cities.slice(3).map((city, i) => (
            <motion.div
              key={i + 3}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative group rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(255,255,0,0.15)] hover:shadow-[0_0_35px_rgba(255,255,0,0.3)] transition-all w-full max-w-sm"
            >
              {/* City Image */}
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              {/* City Name */}
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <h3 className="text-2xl font-semibold text-yellow-400 drop-shadow-lg">
                  {city.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
