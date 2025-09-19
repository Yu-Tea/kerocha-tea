export interface PageCharacterSetting {
  dialogue: string;
  mood:
    | "normal"
    | "smile1"
    | "smile2"
    | "happy"
    | "speak1"
    | "speak2"
    | "teatime"
    | "result";
}

// セリフは15文字以内で
export const pageCharacterSettings: Record<string, PageCharacterSetting> = {
  "/username": {
    dialogue: "また来てくれたんだね〜！",
    mood: "speak2",
  },
  "/newusername": {
    dialogue: "ようこそ〜！",
    mood: "smile1",
  },
  "/teatime": {
    dialogue: "質問に答えてね〜",
    mood: "teatime",
  },
  "/result": {
    dialogue: "お待たせケロ〜ン",
    mood: "result",
  },
  "/shared": {
    dialogue: "また飲みに来てほしいなぁ〜",
    mood: "result",
  },
  // デフォルト設定
  default: {
    dialogue: "いらっしゃ〜い",
    mood: "normal",
  },
};
