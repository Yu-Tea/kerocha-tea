import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DiagnosisResult } from "../types/diagnosis";
import { motion } from "framer-motion";
import { pageVariants } from "../utils/animations";
import { Button } from "../components/common/Button";
import Tea from "/public/images/tea.svg";
import { generateResultMessage } from "../utils/messageGenerator";

const ResultPage = () => {
  const [result, setResult] = useState<DiagnosisResult | null>(null);
  const navigate = useNavigate();

  // 画像プリロード
  useEffect(() => {
    const img = new window.Image();
    img.src = "/images/tea_bg.png";
  }, []);

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

  const handleShareX = () => {
    if (!result) return;
    const baseUrl = `${window.location.origin}/shared`;
    const params = new URLSearchParams({
      hue: result.hue.toString(),
      sat: result.saturation.toString(),
      bri: result.brightness.toString(),
      name: result.userName || "",
    });
    const shareUrl = `${baseUrl}?${params.toString()}`;
    const text = `ケロチャにお茶を作ってもらったよ！\n#ケロチャのカラフルティータイム\n`;
    const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(xUrl, "_blank", "noopener,noreferrer");
  };

  if (!result) {
    return (
      <div>
        <p>ちょっと待っててね...</p>
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
      >
        <div className="bubble mb-3">
          {result.userName ? (
            <>
              <span className="text-secondary">{result.userName}</span>さん
            </>
          ) : (
            "あなた"
          )}
          のお茶ができたよ〜！
          <p>
            {result.messageParts
              ? generateResultMessage(
                  {
                    mood: result.messageParts.mood ?? "",
                    energy: result.messageParts.energy ?? "",
                    lifestyle: result.messageParts.lifestyle ?? "",
                  },
                  result.messageTemplateIndex
                )
              : ""}
          </p>
          ごゆっくりどうぞケロ〜！
        </div>

        {/* お茶の画像部分 */}
        <div className="relative">
          <img
            src={Tea}
            alt="お茶ができたよ！"
            className="absolute left-0 top-0 h-auto w-full"
            style={{
              filter: `hue-rotate(${result.hue}deg) saturate(${result.saturation}) brightness(${result.brightness}) blur(3px)`,
            }}
          />
          <img src={"/images/tea_bg.png"} alt="ティーカップ" className="" />
        </div>
        {/* ボタン */}
        <div className="mb-4 mt-2 flex items-center justify-center gap-2 sm:mb-10 sm:gap-5">
          <Button variant="x-btn" onClick={handleShareX}>
            Ｘで共有する！
          </Button>
          <Link to="/">
            <Button variant="green-btn" onClick={handleRestart}>
              ごちそうさま！
            </Button>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default ResultPage;
