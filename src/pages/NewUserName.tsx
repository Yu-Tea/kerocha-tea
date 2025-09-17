import { useUserName } from "../hooks/useUserName";
import NewUserNameInput from "../components/features/NewUserNameInput";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { pageVariants } from "../utils/animations";
import { useEffect } from "react";

const NewUserName = () => {
  const { saveUserName,clearUserName } = useUserName();
  const navigate = useNavigate();

  // コンポーネントがマウントされた時にユーザー名をクリア
  useEffect(() => {
    clearUserName();
  }, []); // 空の依存配列で初回マウント時のみ実行

  const handleNameSubmit = (name: string) => {
    saveUserName(name);
    navigate("/teatime");
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-auto flex-col items-center justify-center"
    >
      <NewUserNameInput onNameSubmit={handleNameSubmit} />
    </motion.div>
  );
};

export default NewUserName;
