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
    dialogue: "お待たせ！",
    mood: "speak",
  },
  "/shared": {
    dialogue: "こんなお茶だったねぇ〜",
    mood: "happy",
  },
  // デフォルト設定
  default: {
    dialogue: "いらっしゃ〜い",
    mood: "normal",
  },
};
