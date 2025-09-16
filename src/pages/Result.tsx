import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DiagnosisResult } from "../types/diagnosis";
import { motion } from "framer-motion";
import { pageVariants } from "../utils/animations";
import { Button } from "../components/common/Button";
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
        className="flex flex-col items-center justify-center"
      >
        <div className="bubble">
          {result.userName ? (
            <>
              <span className="text-secondary">{result.userName}</span>さん
            </>
          ) : (
            "あなた"
          )}
          のお茶ができたよ〜！
          <p>
            H：{result.hue}/S：{result.saturation}/B：{result.brightness}
          </p>
        </div>

        {/* お茶の画像部分 */}
        <div className="relative">
          <img
            src={Tea}
            alt="ケロチャのカラフルティータイム"
            className="absolute left-0 top-0 h-auto w-full"
            style={{
              filter: `hue-rotate(${result.hue}deg) saturate(${result.saturation}) brightness(${result.brightness}) blur(3px)`,
            }}
          />
          <img src={"/images/tea_bg.png"} alt="ケロチャ" className="" />
        </div>
        {/* ボタン */}
        <div className="flex flex-col justify-center items-center gap-4 mb-4 sm:mb-10">
          <Link to="/">
            <Button variant="select-btn" onClick={handleRestart}>
              Ｘで共有する！
            </Button>
          </Link>
          <Link to="/">
            <Button variant="select-btn" onClick={handleRestart}>
              ごちそうさま！
            </Button>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default ResultPage;
