import type { TimeBasedResponses } from "../types/character";

// セリフは15文字以内にすること
export const timeBasedResponses: TimeBasedResponses = {
  // 5〜11時
  morning: [
    { dialogue: "おはようケロ〜！", mood: "happy" },
    { dialogue: "今日も一日がんばろうね〜", mood: "happy" },
    { dialogue: "朝ごはんはもう食べた〜？", mood: "speak" },
    { dialogue: "えへへ〜", mood: "speak" },
    { dialogue: "ケロォ〜ン", mood: "happy" },
  ],
  // 12〜16時
  afternoon: [
    { dialogue: "お疲れ様ケロ〜", mood: "speak" },
    { dialogue: "アフタヌーンティーの時間だね！", mood: "happy" },
    { dialogue: "午後も頑張るケロ〜", mood: "speak" },
    { dialogue: "えへへ〜", mood: "speak" },
    { dialogue: "ケロォ〜ン", mood: "happy" },
  ],
  // 17〜21時
  evening: [
    { dialogue: "もう夜なんだねぇ", mood: "speak" },
    { dialogue: "今日も一日頑張ったケロ！", mood: "happy" },
    { dialogue: "今日の晩ごはんはなぁに？", mood: "speak" },
    { dialogue: "えへへ〜", mood: "speak" },
    { dialogue: "ケロォ〜ン", mood: "happy" },
  ],
  // 22〜4時
  night: [
    { dialogue: "寝る前に一杯いかがケロ？", mood: "speak" },
    { dialogue: "もう寝る時間かなぁ？", mood: "speak" },
    { dialogue: "夜ふかしに気をつけてねぇ", mood: "speak" },
    { dialogue: "えへへ〜", mood: "speak" },
    { dialogue: "ケロォ〜ン", mood: "happy" },
  ],
};
