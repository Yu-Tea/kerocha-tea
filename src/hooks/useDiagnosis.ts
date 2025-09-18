import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions";
import { DiagnosisResult } from "../types/diagnosis";
import { getTemplatesCount } from "../utils/messageGenerator";

// ランダム値生成
export const getRandomInRange = (
  min: number,
  max: number,
  decimals: number = 0
): number => {
  const random = Math.random() * (max - min) + min;
  // 小数点第一位までの数値にするために、小数点右にずらす→四捨五入で小数点以下を取り除く→小数点の位置を戻すの処理
  return Math.round(random * Math.pow(10, decimals)) / Math.pow(10, decimals);
};

export const useDiagnosis = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{
    hue?: number;
    saturation?: number;
    brightness?: number;
  }>({});
  const [messageParts, setMessageParts] = useState<{
    mood?: string;
    energy?: string;
    lifestyle?: string;
  }>({});
  const navigate = useNavigate();

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const selectOption = (optionId: string) => {
    const option = currentQuestion.options.find((opt) => opt.id === optionId);
    if (!option) return;

    // messagePartsを更新
    const newMessageParts = { ...messageParts };
    if (option.messagePart) {
      if (option.messagePart.mood)
        newMessageParts.mood = option.messagePart.mood;
      if (option.messagePart.energy)
        newMessageParts.energy = option.messagePart.energy;
      if (option.messagePart.lifestyle)
        newMessageParts.lifestyle = option.messagePart.lifestyle;
    }
    setMessageParts(newMessageParts);

    // ランダム値で回答を生成
    const newAnswers = { ...answers };

    if (option.hueRange) {
      newAnswers.hue = getRandomInRange(
        option.hueRange.min,
        option.hueRange.max,
        0 // 色相は整数
      );
    }
    if (option.saturationRange) {
      newAnswers.saturation = getRandomInRange(
        option.saturationRange.min,
        option.saturationRange.max,
        1 // 小数点第一位まで
      );
    }
    if (option.brightnessRange) {
      newAnswers.brightness = getRandomInRange(
        option.brightnessRange.min,
        option.brightnessRange.max,
        1 // 小数点第一位まで
      );
    }

    setAnswers(newAnswers);

    if (isLastQuestion) {
      // ユーザー名を取得
      const userInfo = localStorage.getItem("userInfo");
      const userName = userInfo ? JSON.parse(userInfo).name : "";

      // テンプレートindexをランダムで決定
      const templateCount = getTemplatesCount();
      const messageTemplateIndex = Math.floor(Math.random() * templateCount);

      // 診断結果を作成
      const result: DiagnosisResult = {
        hue: newAnswers.hue || 100,
        saturation: newAnswers.saturation || 2,
        brightness: newAnswers.brightness || 2,
        userName: userName,
        messageParts: newMessageParts,
        messageTemplateIndex,
      };
      // 結果をローカルストレージに保存
      localStorage.setItem("diagnosisResult", JSON.stringify(result));
      navigate("/result");
    } else {
      // 次の質問へ
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  // 診断をリセットする関数
  const resetDiagnosis = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  return {
    currentQuestion,
    selectOption,
    resetDiagnosis,
    isLastQuestion,
  };
};
