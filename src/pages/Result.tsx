import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DiagnosisResult } from "../types/diagnosis";
import { motion } from "framer-motion";

const ResultPage = () => {
  const [result, setResult] = useState<DiagnosisResult | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // ローカルストレージから結果を取得
    const savedResult = localStorage.getItem("diagnosisResult");
    if (savedResult) {
      setResult(JSON.parse(savedResult));
    } else {
      // 結果がない場合はトップページに戻る
      navigate("/");
    }
  }, [navigate]);

  const handleRestart = () => {
    // 診断結果をクリア（ユーザー名は保持）
    localStorage.removeItem("diagnosisResult");
    navigate("/");
  };

  if (!result) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <p>結果を読み込み中...</p>
      </div>
    );
  }

  return (
    <>
      <motion.div
        initial={{ filter: "blur(20px)", opacity: 0, x: 10 }}
        animate={{ filter: "none", opacity: 100, x: 0 }}
        exit={{ opacity: 0, x: -10 }}
        transition={{
          type: "spring",
          duration: 1,
          ease: "easeOut",
        }}
        className="flex flex-col flex-auto justify-center items-center"
      >
        <div className="text-base bg-white p-6 rounded-2xl mb-4">
          {" "}
          {result.userName ? `${result.userName}さんの` : "あなたの"}
          お茶ができたよ〜！
          <p>{result.color}</p>
        </div>
        {/* 結果の色を表示 */}
        <div
          style={{
            width: "200px",
            height: "200px",
            backgroundColor: result.color,
            borderRadius: "50%",
            margin: "30px auto",
          }}
        />
        {/* 色の詳細情報 */}

        {/* 選択した回答の表示（オプション） */}
        {/* <div style={{ marginBottom: "30px", fontSize: "14px", color: "#666" }}>
          <p>選択した回答: {result.selectedOptions.join(", ")}</p>
        </div> */}
        {/* ボタン */}
        <div>
          <Link to="/">
            <button onClick={handleRestart}>トップに戻る</button>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default ResultPage;
