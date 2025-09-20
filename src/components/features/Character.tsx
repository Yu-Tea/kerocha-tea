import { useState, useEffect } from "react";
import type {
  CharacterProps,
  Expressions,
  ExpressionParts,
} from "../../types/character";
import { getTimeBasedResponses } from "../../utils/timeUtils";

const Character = ({
  mood = "normal",
  dialogue = "いらっしゃ〜い！",
  isClickable = true,
  onCharacterClick,
}: CharacterProps) => {
  const [currentExpression, setCurrentExpression] = useState<
    | "normal"
    | "smile1"
    | "smile2"
    | "happy"
    | "speak1"
    | "speak2"
    | "teatime"
    | "result"
  >(mood);
  const [currentDialogue, setCurrentDialogue] = useState(dialogue);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  // 表情の定義
  const expressions: Expressions = {
    normal: {
      eyes: "/images/k_eye_normal.png",
      mouth: "/images/k_mouth_normal.png",
      body: "/images/k_body_normal.png",
    },
    smile1: {
      eyes: "/images/k_eye_smile.png",
      mouth: "/images/k_mouth_normal.png",
      body: "/images/k_body_up.png",
    },
    smile2: {
      eyes: "/images/k_eye_smile.png",
      mouth: "/images/k_mouth_munya.png",
      body: "/images/k_body_down.png",
    },
    happy: {
      eyes: "/images/k_eye_itome.png",
      mouth: "/images/k_mouth_munya.png",
      body: "/images/k_body_touch.png",
    },
    speak1: {
      eyes: "/images/k_eye_normal.png",
      mouth: "/images/k_mouth_open.png",
      body: "/images/k_body_down.png",
    },
    speak2: {
      eyes: "/images/k_eye_normal.png",
      mouth: "/images/k_mouth_open.png",
      body: "/images/k_body_up.png",
    },
    teatime: {
      eyes: "/images/k_eye_normal.png",
      mouth: "/images/k_mouth_open.png",
      body: "/images/k_body_question.png",
    },
    result: {
      eyes: "/images/k_eye_smile.png",
      mouth: "/images/k_mouth_open.png",
      body: "/images/k_body_up.png",
    },
  };

  // セリフと表情を即時変更する関数
  const changeDialogueAndMood = (
    newDialogue: string,
    newMood:
      | "normal"
      | "smile1"
      | "smile2"
      | "happy"
      | "speak1"
      | "speak2"
      | "teatime"
      | "result"
  ) => {
    // 即座に変更
    setCurrentDialogue(newDialogue);
    setCurrentExpression(newMood);
    setIsAnimating(true);

    // 指定時間後に元に戻す
    setTimeout(() => {
      setCurrentExpression(mood);
      setCurrentDialogue(dialogue);
      setIsAnimating(false);
    }, 2200);
  };

  // ケロチャクリック時の処理
  const handleCharacterClick = () => {
    if (!isClickable || isAnimating) return;

    // 時間帯に応じた反応パターンを取得
    const responses = getTimeBasedResponses();

    // ランダムに反応パターンを選択
    const randomResponse =
      responses[Math.floor(Math.random() * responses.length)];
    changeDialogueAndMood(randomResponse.dialogue, randomResponse.mood);

    if (onCharacterClick) {
      onCharacterClick();
    }
  };

  useEffect(() => {
    if (!isAnimating) {
      setCurrentExpression(mood);
      setCurrentDialogue(dialogue);
    }
  }, [mood, dialogue, isAnimating]);

  const currentParts: ExpressionParts = expressions[currentExpression];

  return (
    <div className="">
      {/* セリフ */}
      {currentDialogue && (
        <div className="mb-3 w-[300px] text-center text-base font-bold text-secondary">
          <p>{currentDialogue}</p>
        </div>
      )}

      {/* ケロチャ */}
      <div
        className={`relative inline-block ${isClickable ? "cursor-pointer" : ""}`}
        onClick={handleCharacterClick}
      >
        <img
          src={currentParts.eyes}
          alt="おめめ"
          className="absolute left-0 top-0 z-20 h-auto w-[300px]"
        />
        <img
          src={currentParts.mouth}
          alt="おくち"
          className="absolute left-0 top-0 z-10 h-auto w-[300px]"
        />
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
