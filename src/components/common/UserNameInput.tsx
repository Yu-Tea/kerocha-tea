import { useState } from "react";
import { motion } from "framer-motion";
import { pageVariants } from "../../utils/animations";
import { Button } from "./Button";

interface UserNameInputProps {
  onNameSubmit: (name: string) => void;
  existingName?: string;
  onExistingNameConfirm?: () => void;
  onExistingNameReject?: () => void;
}

const UserNameInput = ({
  onNameSubmit,
  existingName,
  onExistingNameConfirm,
  onExistingNameReject,
}: UserNameInputProps) => {
  const [inputName, setInputName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = inputName.trim();

    if (!trimmedName) {
      setError("お名前を入力してね");
      return;
    }

    if (trimmedName.length > 10) {
      setError("お名前は10文字以内で入れてね");
      return;
    }

    setError("");
    onNameSubmit(trimmedName);
  };

  // 既存ユーザーの確認画面
  if (existingName && onExistingNameConfirm && onExistingNameReject) {
    return (
      <>
        <motion.div
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex flex-auto flex-col items-center justify-center"
        >
          <div className="bubble">
            <p>ようこそ、ボクのお茶会へ！</p>
            <p>
              あっ、
              <strong className="text-secondary">{existingName}</strong>
              さんだよね〜？
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-y-5 mb-4 sm:mb-10">
            <Button variant="select-btn" onClick={onExistingNameConfirm}>
              そうだよ〜
            </Button>
            <Button variant="select-btn" onClick={onExistingNameReject}>
              ちがうよ〜
            </Button>
          </div>
        </motion.div>
      </>
    );
  }

  // 新規ユーザー名入力画面
  return (
    <>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-auto flex-col items-center justify-center"
      >
        <div className="bubble">
          <p>はじめましてかなぁ？</p>
          <p>まずはキミのお名前を教えて〜！</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <input
              type="text"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              placeholder="お名前は10文字以内だよ"
              className="mb-2 w-[260px] rounded-md px-4 py-3 text-base text-secondary outline-none"
              style={{
                border: error ? "2px solid #dc3545" : "2px solid #ddd",
              }}
              onFocus={(e) => {
                if (!error) e.currentTarget.style.borderColor = "#b4d1b9";
              }}
              onBlur={(e) => {
                if (!error) e.currentTarget.style.borderColor = "#ddd";
              }}
            />
          </div>

          {error && <p className="mb-4 text-center text-red-600">{error}</p>}
          <div className="text-center mb-4 sm:mb-10">
            <Button variant="select-btn" type="submit">
              診断を始める
            </Button>
          </div>
        </form>
      </motion.div>
    </>
  );
};

export default UserNameInput;
