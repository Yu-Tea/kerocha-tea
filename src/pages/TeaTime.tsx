import { useState, useEffect } from "react";
import { useDiagnosis } from "../hooks/useDiagnosis";
import { useUserName } from "../hooks/useUserName";
import { motion, AnimatePresence } from "framer-motion";
import UserNameInput from "../components/common/UserNameInput";
import { pageVariants } from "../utils/animations";
import { Button } from "../components/common/Button";

const TeaTimePage = () => {
  const [showQuestions, setShowQuestions] = useState(false);
  const [isPageMounted, setIsPageMounted] = useState(false);
  const { userInfo, isLoading, saveUserName, clearUserName } = useUserName();
  const { currentQuestion, selectOption } = useDiagnosis();

  // ページマウント後に質問アニメーションを有効化
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageMounted(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  // ローディング中
  if (isLoading) {
    return (
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{ padding: "20px", textAlign: "center" }}
      >
        <p>読み込み中...</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col justify-center items-center"
    >
      {/* AnimatePresenceで全体の切り替えを制御 */}
      <AnimatePresence mode="wait">
        {!showQuestions ? (
          // ユーザー名入力フェーズ
          <motion.div
            key="username-input"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <UserNameInput
              existingName={userInfo?.name}
              onNameSubmit={(name) => {
                saveUserName(name);
                // アニメーション完了後に切り替え
                setTimeout(() => {
                  setShowQuestions(true);
                }, 100);
              }}
              onExistingNameConfirm={() => {
                setTimeout(() => {
                  setShowQuestions(true);
                }, 100);
              }}
              onExistingNameReject={() => {
                clearUserName();
              }}
            />
          </motion.div>
        ) : (
          // 質問フェーズ
          <motion.div
            key="questions"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full flex justify-center"
          >
            {/* 質問部分 */}
            {isPageMounted ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion.id}
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex flex-col justify-center items-center"
                >
                  {/* 質問 */}
                  <div className="text-base bg-white p-6 rounded-2xl mb-4">
                    {currentQuestion.text}
                  </div>

                  {/* 選択肢 */}
                  <div className="flex flex-col gap-4">
                    {currentQuestion.options.map((option) => (
                      <Button
                        variant="select-button"
                        key={option.id}
                        onClick={() => selectOption(option.id)}
                      >
                        {option.text}
                      </Button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            ) : (
              // ページマウント中は静的表示
              <div className="flex flex-col justify-center items-center">
                <div className="text-base bg-white p-6 rounded-2xl mb-4">
                  {currentQuestion.text}
                </div>
                <div className="flex flex-col gap-4">
                  {currentQuestion.options.map((option) => (
                    <Button
                      variant="select-button"
                      key={option.id}
                      onClick={() => selectOption(option.id)}
                    >
                      {option.text}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TeaTimePage;
