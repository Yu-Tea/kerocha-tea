import Character from "./Character";
import { motion } from "framer-motion";

const TeaTimeImage = () => {
  return (
    <div className="flex items-center justify-center py-5">
      <div className="flex items-end justify-center">
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: -40, rotate: -10 }}
          animate={{ filter: "none", opacity: 100, y: 0, rotate: 0 }}
          exit={{ filter: "blur(10px)", opacity: 0, y: -40 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 12,
            delay: 0.3,
          }}
          className="mr-2 hidden sm:block"
        >
          <img src={"/images/table.png"} alt="テーブル" />
        </motion.div>
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: -40, rotate: 10 }}
          animate={{ filter: "none", opacity: 100, y: 0, rotate: 0 }}
          exit={{ filter: "blur(10px)", opacity: 0, y: -40 }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 12,
            delay: 0.4,
          }}
        >
          <Character />
        </motion.div>
      </div>
    </div>
  );
};

export default TeaTimeImage;
