import { useState, useEffect } from "react";
import type {
  CharacterProps,
  Expressions,
  ExpressionParts,
} from "../../types/character";

const Character = ({
  mood = "normal",
  dialogue = "初期セリフ",
  isClickable = true,
}: CharacterProps) => {
  const [currentExpression, setCurrentExpression] = useState<
    "normal" | "happy" | "speak"
  >(mood);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  // 表情の定義
  const expressions: Expressions = {
    normal: {
      eyes: "/images/k_eye_normal.png",
      mouth: "/images/k_mouth_normal.png",
      body: "/images/k_body_normal.png",
    },
    happy: {
      eyes: "/images/k_eye_smile.png",
      mouth: "/images/k_mouth_laugh.png",
      body: "/images/k_body_banzai.png",
    },
    speak: {
      eyes: "/images/k_eye_itome.png",
      mouth: "/images/k_mouth_speak.png",
      body: "/images/k_body_think.png",
    },
  };

  // クリック時の表情変化
  const handleClick = () => {
    if (!isClickable || isAnimating) return;

    setIsAnimating(true);
    setCurrentExpression("happy");

    // 1秒後に元の表情に戻す
    setTimeout(() => {
      setCurrentExpression(mood);
      setIsAnimating(false);
    }, 1000);
  };

  // moodが変わったら表情を更新（アニメーション中でなければ）
  useEffect(() => {
    if (!isAnimating) {
      setCurrentExpression(mood);
    }
  }, [mood, isAnimating]);

  const currentParts: ExpressionParts = expressions[currentExpression];

  return (
    <div className="">
      {/* セリフ */}
      {dialogue && (
        <div className="mb-3 text-center text-lg font-bold text-secondary">
          <p>{dialogue}</p>
        </div>
      )}
      <div
        className={`relative inline-block ${isClickable ? "clickable" : ""} ${isAnimating ? "animating" : ""}`}
        onClick={handleClick}
      >
        {/* 目 */}
        <img src={currentParts.eyes} alt="おめめ" className="absolute left-0 top-0 z-20 h-auto w-[300px]" />

        {/* 口 */}
        <img src={currentParts.mouth} alt="おくち" className="absolute left-0 top-0 z-10 h-auto w-[300px]" />

        {/* 体（ベース） */}
        <img
          src={currentParts.body}
          alt="みわくのボディー"
          className="block h-auto w-[300px]"
        />
      </div>
    </div>
  );
};

export default Character;
