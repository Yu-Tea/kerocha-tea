import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions";
import { DiagnosisResult } from "../types/diagnosis";

// ランダム値生成
export const getRandomInRange = (min: number, max: number, decimals: number = 0): number => {
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
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const navigate = useNavigate();

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const selectOption = (optionId: string) => {
    const option = currentQuestion.options.find((opt) => opt.id === optionId);
    if (!option) return;

    // 選択肢を記録
    const newSelectedOptions = [...selectedOptions, optionId];
    setSelectedOptions(newSelectedOptions);

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

      // 診断結果を作成
      const result: DiagnosisResult = {
        hue: newAnswers.hue || 100,
        saturation: newAnswers.saturation || 5,
        brightness: newAnswers.brightness || 5,
        selectedOptions: newSelectedOptions, //これもいらないかも？後で要検討
        userName: userName, // ユーザー名を結果に含める
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
    setSelectedOptions([]);
  };

  return {
    currentQuestion,
    selectOption,
    resetDiagnosis,
    isLastQuestion,
  };
};
