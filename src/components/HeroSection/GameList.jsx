"use client";
import React, { useEffect, useState } from "react";
import Data from "../../shared/data";
import Image from "next/image";
import { motion } from "framer-motion";

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    setGames(Data.GameData);
  }, []);

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 mt-6 gap-6 px-4">
      {games.map((item, index) => (
        <motion.div
          key={item.name}
          className="flex flex-col items-center space-y-2 group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotate: 1 }}
        >
          <Image
            className="bg-[#1a1a1a] p-1 rounded-xl border-2 border-yellow-500 cursor-pointer 
              transition-all duration-300"
            src={item.image}
            alt={item.name}
            width={60}
            height={60}
          />
          <motion.h2
            className="text-[15px] text-center text-yellow-300 font-medium group-hover:text-white transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.08 + 0.2 }}
          >
            {item.name}
          </motion.h2>
        </motion.div>
      ))}
    </div>
  );
};

export default GameList;
