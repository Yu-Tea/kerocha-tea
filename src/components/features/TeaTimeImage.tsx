import Character from "./Character";
import { motion } from "framer-motion";
import { pageCharacterSettings } from "../../data/pageCharacterSettings";
import { useLocation } from "react-router-dom";

const TeaTimeImage = () => {
  const location = useLocation();

  // 現在のページに対応する設定を取得
  const currentPageSetting =
    pageCharacterSettings[location.pathname] || pageCharacterSettings.default;

  return (
    <div className="flex items-center justify-center py-5">
      <div className="flex items-end justify-center">
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: -40, rotate: -10 }}
          animate={{ filter: "none", opacity: 100, y: 0, rotate: 0 }}
          exit={{ filter: "blur(10px)", opacity: 0, y: -20 }}
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
          exit={{ filter: "blur(10px)", opacity: 0, y: -20 }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 12,
            delay: 0.4,
          }}
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 1.01, y: -10 }}
            transition={{ duration: 0.25, ease: "easeIn" }}
          >
            <Character
              mood={currentPageSetting.mood}
              dialogue={currentPageSetting.dialogue}
              isClickable={true}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeaTimeImage;
