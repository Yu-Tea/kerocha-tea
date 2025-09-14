import React from "react";
import ColorfulLogo from "../components/layout/ColorfulLogo";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex flex-col flex-auto justify-center items-center">
        <div className="mb-5">
          <ColorfulLogo />
        </div>
        <motion.div
          initial={{ filter: "blur(20px)", opacity: 0, x: 10 }}
          animate={{ filter: "none", opacity: 100, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{
            type: "spring",
            duration: 2,
            delay: 0.5,
            ease: "easeOut",
          }}
          className="flex flex-col justify-center items-center text-xl gap-2"
        >
          <Link to="/teatime">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              お茶を作ってもらう
            </motion.button>
          </Link>
          <Link to="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              はじめましての方へ
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
