"use client";

import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
  ];

  return (
    <motion.section
      id="gallery"
      className="bg-[#f8f6f2] text-black py-24 px-6"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-5xl font-semibold mb-16">
          Galerie
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              className="rounded-[30px] h-[500px] object-cover w-full"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
            />
          ))}

        </div>

      </div>
    </motion.section>
  );
}