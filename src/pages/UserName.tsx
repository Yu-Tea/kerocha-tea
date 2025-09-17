import { useUserName } from "../hooks/useUserName";
import UserNameInput from "../components/features/UserNameInput";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { pageVariants } from "../utils/animations";
import { useEffect } from "react";

const UserName = () => {
  const { userInfo, isLoading } = useUserName();
  const navigate = useNavigate();

  // isLoadingが終わってからリダイレクト判定
  useEffect(() => {
    if (!isLoading && !userInfo?.name) {
      navigate("/newusername", { replace: true });
    }
  }, [userInfo, isLoading, navigate]);

  if (isLoading) {
    // ローディング中は何も表示しない
    return null;
  }

  if (!userInfo?.name) {
    // リダイレクト中も何も表示しない
    return null;
  }

  const handleConfirm = () => {
    navigate("/teatime");
  };

  const handleReject = () => {
    navigate("/newusername");
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <UserNameInput
        existingName={userInfo.name}
        onExistingNameConfirm={handleConfirm}
        onExistingNameReject={handleReject}
      />
    </motion.div>
  );
};

export default UserName;
