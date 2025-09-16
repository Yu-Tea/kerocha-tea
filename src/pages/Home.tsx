import ColorfulLogo from "../components/layout/ColorfulLogo";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../components/common/Button";
import { pageVariants } from "../utils/animations";

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="mb-5">
          <ColorfulLogo />
        </div>
        <motion.div
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex flex-col justify-center items-center gap-4 mb-4 sm:mb-10"
        >
          <Link to="/username">
            <Button variant="select-btn">お茶を作ってもらう</Button>
          </Link>
          <Link to="/about">
            <Button variant="select-btn">はじめましての方へ</Button>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
