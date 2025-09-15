import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DiagnosisResult } from "../types/diagnosis";
import { motion } from "framer-motion";
import { pageVariants } from "../utils/animations";
import Tea from "/public/images/tea.svg";

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
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-col flex-auto justify-center items-center"
      >
        <div className="text-base bg-white p-6 rounded-2xl mb-2">
          {result.userName ? `${result.userName}さんの` : "あなたの"}
          お茶ができたよ〜！
          <p>H：{result.hue}/S：{result.saturation}/B：{result.brightness}</p>
        </div>
        
        {/* お茶の画像部分 */}
        <div className="relative">
          <img
            src={Tea}
            alt="ケロチャのカラフルティータイム"
            className="w-full h-auto absolute left-0 top-0"
            style={{
              filter: `hue-rotate(${result.hue}deg) saturate(${result.saturation}) brightness(${result.brightness})`,
            }}
          />
          <img src={"/images/tea_bg.png"} alt="ケロチャ" className="" />
        </div>
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
