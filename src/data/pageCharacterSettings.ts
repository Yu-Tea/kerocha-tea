export interface PageCharacterSetting {
  dialogue: string;
  mood: "normal" | "happy" | "speak";
}

// セリフは15文字以内で
export const pageCharacterSettings: Record<string, PageCharacterSetting> = {
  "/username": {
    dialogue: "また来てくれたんだね〜！",
    mood: "speak",
  },
  "/newusername": {
    dialogue: "ようこそ〜！",
    mood: "happy",
  },
  "/teatime": {
    dialogue: "質問に答えてね〜",
    mood: "happy",
  },
  "/result": {
    dialogue: "お待たせケロ〜ン",
    mood: "speak",
  },
  "/shared": {
    dialogue: "また飲みに来てほしいなぁ〜",
    mood: "happy",
  },
  // デフォルト設定
  default: {
    dialogue: "いらっしゃ〜い",
    mood: "normal",
  },
};
