"use client";

import { motion } from "framer-motion";

export default function Services() {
  return (
    <motion.section
      id="services"
      className="bg-white text-black py-24 px-6"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-5xl font-semibold mb-6">
          Serviciile Noastre
        </h2>

        <p className="text-gray-600 mb-16">
          Evenimente elegante și premium pentru orice ocazie
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-[#f8f6f2] p-10 rounded-[30px] hover:scale-105 transition">
            <h3 className="text-3xl mb-4">Nunți</h3>
            <p className="text-gray-600">
              Decor elegant, atmosferă premium și experiențe memorabile.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#f8f6f2] p-10 rounded-[30px] hover:scale-105 transition">
            <h3 className="text-3xl mb-4">Corporate</h3>
            <p className="text-gray-600">
              Evenimente business moderne și rafinate.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#f8f6f2] p-10 rounded-[30px] hover:scale-105 transition">
            <h3 className="text-3xl mb-4">Evenimente Private</h3>
            <p className="text-gray-600">
              Botezuri, aniversări și evenimente speciale.
            </p>
          </div>

        </div>

      </div>
    </motion.section>
  );
}