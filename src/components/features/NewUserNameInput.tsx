import { useState } from "react";
import { Button } from "../common/Button";

interface NewUserNameInputProps {
  onNameSubmit: (name: string) => void;
}

const NewUserNameInput = ({ onNameSubmit }: NewUserNameInputProps) => {
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

  return (
    <div className="flex flex-auto flex-col items-center justify-center">
      <div className="bubble">
        <p>はじめましてかなぁ？</p>
        <p>ボクはケロチャだよ！</p>
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
          />
        </div>
        {error && <p className="mb-4 text-center text-red-600">{error}</p>}
        <div className="mb-4 text-center sm:mb-10">
          <Button variant="select-btn" type="submit">
            名前を教える
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewUserNameInput;
