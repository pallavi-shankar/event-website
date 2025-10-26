import { motion } from "framer-motion";

const works = [
  {
    title: "Tech Innovators Conference 2025",
    poster: "https://images.unsplash.com/photo-1519389950473-47ba0277781c", // tech event
    video: "https://videos.pexels.com/video-files/2606899/2606899-uhd_2560_1440_25fps.mp4",
  },
  {
    title: "Global Auto Expo",
    poster: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d", // car show
    video: "https://videos.pexels.com/video-files/2399099/2399099-uhd_2560_1440_25fps.mp4",
  },
  {
    title: "Fashion Week Experience",
    poster: "https://images.unsplash.com/photo-1521335629791-ce4aec67ddaf", // runway / fashion
    video: "https://videos.pexels.com/video-files/854335/854335-hd_1920_1080_25fps.mp4",
  },
  {
    title: "DJ Night & Concert",
    poster: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2", // DJ lights
    video: "https://videos.pexels.com/video-files/5459150/5459150-uhd_2560_1440_25fps.mp4",
  },
  {
    title: "Music Festival Blast",
    poster: "https://images.unsplash.com/photo-1506157786151-b8491531f063", // crowd concert
    video: "https://videos.pexels.com/video-files/4146303/4146303-uhd_2560_1440_25fps.mp4",
  },
  {
    title: "Corporate Gala Night",
    poster: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac", // elegant event
    video: "https://videos.pexels.com/video-files/3129663/3129663-uhd_2560_1440_25fps.mp4",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center text-4xl md:text-5xl font-bold text-yellow-400"
        >
          Our Work
        </motion.h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10"
            >
              {/* Poster image */}
              <img
                src={it.poster}
                alt={it.title}
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Hover video */}
              <video
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500"
                src={it.video}
                muted
                loop
                playsInline
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }}
              />

              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-lg font-semibold">{it.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
