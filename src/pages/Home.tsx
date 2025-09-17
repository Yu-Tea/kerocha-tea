import ColorfulLogo from "../components/features/ColorfulLogo";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/common/Button";
import { pageVariants } from "../utils/animations";
import { useEffect, useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [userNameExists, setUserNameExists] = useState<boolean | null>(null);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    setUserNameExists(!!(userInfo && JSON.parse(userInfo).name));
  }, []);

  const handleStart = () => {
    if (userNameExists) {
      navigate("/username");
    } else {
      navigate("/newusername");
    }
  };

  return (
    <div>
      <div className="mb-5">
        <ColorfulLogo />
      </div>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="mb-4 flex flex-col items-center justify-center gap-4 sm:mb-10"
      >
        <Button variant="select-btn" onClick={handleStart}>
          お茶を作ってもらう
        </Button>
        <Link to="/about">
          <Button variant="select-btn">はじめましての方へ</Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
