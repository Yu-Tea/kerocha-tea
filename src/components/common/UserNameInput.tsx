import { useState } from "react";
import { motion } from "framer-motion";

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
          initial={{ filter: "blur(20px)", opacity: 0, x: 20 }}
          animate={{ filter: "none", opacity: 100, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{
            type: "spring",
            duration: 2,
            ease: "easeOut",
          }}
          className="flex flex-col flex-auto justify-center items-center"
        >
          <div className="text-base bg-white p-6 rounded-2xl mb-4">
            <p className="text-base">
              あっ、
              <strong className="text-green-700">{existingName}</strong>
              さんだよね〜？
            </p>
          </div>

          <div
            style={{ display: "flex", gap: "15px", justifyContent: "center" }}
          >
            <button onClick={onExistingNameConfirm}>そうだよ</button>
            <button onClick={onExistingNameReject}>違うよ</button>
          </div>
        </motion.div>
      </>
    );
  }

  // 新規ユーザー名入力画面
  return (
    <>
      <motion.div
        initial={{ filter: "blur(20px)", opacity: 0, x: 20 }}
        animate={{ filter: "none", opacity: 100, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{
          type: "spring",
          duration: 2,
          delay: 1,
          ease: "easeOut",
        }}
        className="flex flex-col flex-auto justify-center items-center"
      >
        <div className="text-base bg-white p-6 rounded-2xl mb-4">
          <p>まずはキミのお名前を教えて〜</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <input
              type="text"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              placeholder="お名前は10文字以内だよ"
              className="w-full max-w-[400px] p-4 rounded-md outline-none"
              style={{
                border: error ? "2px solid #dc3545" : "2px solid #ddd",
              }}
              onFocus={(e) => {
                if (!error) e.currentTarget.style.borderColor = "#007bff";
              }}
              onBlur={(e) => {
                if (!error) e.currentTarget.style.borderColor = "#ddd";
              }}
            />
          </div>

          {error && <p className="text-red-600 text-center mb-4">{error}</p>}

          <button type="submit">診断を始める</button>
        </form>
      </motion.div>
    </>
  );
};

export default UserNameInput;
