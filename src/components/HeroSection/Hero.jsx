'use client'
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      className="text-center py-16 px-6 md:px-20 rounded-md bg-[#1a1a1a] text-[#FFD700]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1
        className="text-[38px] md:text-[48px] font-extrabold leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Get in the Game <br />
        <span className="text-[#ffec99] font-semibold block mt-2 text-[24px] md:text-[28px]">
          Find Games and Players in Your Area
        </span>
      </motion.h1>

      <motion.h2
        className="mt-6 text-[#fdf6c5] text-[18px] md:text-[20px] font-medium max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        The best free platform to connect with nearby players and join games you love fast, simple & fun!
      </motion.h2>
    </motion.div>
  );
};

export default Hero;
