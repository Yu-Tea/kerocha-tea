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
          className="flex flex-col justify-center items-center gap-2"
        >
          <Link to="/teatime">
            <Button variant="select-button">お茶を作ってもらう</Button>
          </Link>
          <Link to="/about">
            <Button variant="select-button">はじめましての方へ</Button>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
