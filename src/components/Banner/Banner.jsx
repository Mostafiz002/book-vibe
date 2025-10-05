import React from "react";
import { motion } from "framer-motion";
import bannerImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <section className="py-28 overflow-hidden">
      <div className="max-w-[1300px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 px-6">
        {/* Text Section */}
        <motion.div
          className="flex-1 space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover Your Next{" "}
            <motion.span
              className="text-purple-600 inline-block"
             initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            >
              Favorite Book
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Explore thousands of books across all genres — from timeless
            classics to modern masterpieces. Find stories that inspire, teach,
            and stay with you forever.
          </motion.p>

          <motion.button
            whileHover={{  y: -6 }}
            whileTap={{ scale: 0.97 }}
            transition={{duration: 0.1}}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-md transition-all duration-300"
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex-1 flex justify-end"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.img
            src={bannerImg}
            alt="Books"
            className="w-[340px] sm:w-[420px] lg:w-[500px] rounded-2xl shadow-xl"
            whileHover={{ scale: 1.05, rotate: 1.5 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
