import { useEffect, useState } from "react";
import { useDiagnosis } from "../hooks/useDiagnosis";
import { useUserName } from "../hooks/useUserName"; // 追加
import { motion, AnimatePresence } from "framer-motion";
import { pageVariants } from "../utils/animations";
import { Button } from "../components/common/Button";

const TeaTimePage = () => {
  const { currentQuestion, selectOption } = useDiagnosis();
  const { userInfo } = useUserName(); // 追加
  const [show, setShow] = useState(false);

  // ページマウント時の遅延表示（アニメーションのため）
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 600);
    return () => clearTimeout(timer);
  }, []);

  // テキストを加工する関数例
  const renderQuestionText = () => {
    const userName = userInfo?.name || "あなた";
    // テキスト内の{userName}をspanで色付け、\nで改行
    const replaced = currentQuestion.text
      .replace("{userName}", `<span class="text-secondary">${userName}</span>`)
      .split("\n")
      .join("<br />");
    // dangerouslySetInnerHTMLで描画
    return <span dangerouslySetInnerHTML={{ __html: replaced }} />;
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col items-center justify-center"
    >
      <AnimatePresence mode="wait">
        {show && (
          <motion.div
            key={currentQuestion.id}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex w-full justify-center"
          >
            <div className="mb-4 flex flex-col items-center justify-center sm:mb-10">
              {/* 質問と選択肢 */}
              <div className="bubble">{renderQuestionText()}</div>
              <div className="flex flex-col gap-y-5">
                {currentQuestion.options.map((option) => (
                  <Button
                    variant="select-btn"
                    key={option.id}
                    onClick={() => selectOption(option.id)}
                  >
                    {option.text}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TeaTimePage;
