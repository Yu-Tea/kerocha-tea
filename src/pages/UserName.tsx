import { useUserName } from "../hooks/useUserName";
import UserNameInput from "../components/common/UserNameInput";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { pageVariants } from "../utils/animations";
import { useState } from "react";

const UserName = () => {
  const { userInfo, isLoading, saveUserName, clearUserName } = useUserName();
  const navigate = useNavigate();
  const [showInput, setShowInput] = useState(false);

  // 「ちがうよ〜」を押したら新規入力画面に切り替え
  const handleReject = () => {
    clearUserName();
    setShowInput(true);
  };

  // 「名前を教える」時は即navigate
  const handleNameSubmit = (name: string) => {
    saveUserName(name);
    navigate("/teatime");
  };

  // 既存ユーザー確認で「そうだよ〜」を押したら進む
  const handleConfirm = () => {
    navigate("/teatime");
  };

  if (isLoading) {
    return (
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="text-center"
      >
        <p>読み込み中...</p>
      </motion.div>
    );
  }

  // 既存ユーザー確認画面 or 新規入力画面をAnimatePresenceで切り替え
  return (
    <AnimatePresence mode="wait">
      {userInfo?.name && !showInput ? (
        <motion.div
          key="confirm"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex flex-auto flex-col items-center justify-center"
        >
          <UserNameInput
            existingName={userInfo.name}
            onExistingNameConfirm={handleConfirm}
            onExistingNameReject={handleReject}
            onNameSubmit={() => {}} // ダミー
          />
        </motion.div>
      ) : (
        <motion.div
          key="input"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex flex-auto flex-col items-center justify-center"
        >
          <UserNameInput onNameSubmit={handleNameSubmit} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UserName;
