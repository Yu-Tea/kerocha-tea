import type { TimeBasedResponses } from "../types/character";

// セリフは15文字以内にすること
export const timeBasedResponses: TimeBasedResponses = {
  // 5〜11時台
  morning: [
    { dialogue: "おはようケロ〜！", mood: "speak2" },
    { dialogue: "今日も一日がんばろうね〜", mood: "smile1" },
    { dialogue: "朝ごはんはもう食べた〜？", mood: "speak1" },
    { dialogue: "えへへ〜", mood: "smile2" },
    { dialogue: "ケロォ〜ン", mood: "happy" },
  ],
  // 12〜16時台
  afternoon: [
    { dialogue: "ちょっと休憩するケロ？", mood: "speak1" },
    { dialogue: "アフタヌーンティーの時間だ〜", mood: "smile1" },
    { dialogue: "お昼からも頑張るケロ〜", mood: "speak2" },
    { dialogue: "えへへ〜", mood: "smile2" },
    { dialogue: "ケロォ〜ン", mood: "happy" },
  ],
  // 17〜21時台
  evening: [
    { dialogue: "おつかれさま〜", mood: "speak2" },
    { dialogue: "今日も一日頑張ったケロ！", mood: "smile1" },
    { dialogue: "今日の晩ごはんはなぁに？", mood: "speak1" },
    { dialogue: "えへへ〜", mood: "smile2" },
    { dialogue: "ケロォ〜ン", mood: "happy" },
  ],
  // 22〜4時台
  night: [
    { dialogue: "お休み前のティーもいいよねぇ", mood: "smile1" },
    { dialogue: "もう寝る時間かなぁ？", mood: "speak1" },
    { dialogue: "夜ふかしに気をつけてねぇ", mood: "speak1" },
    { dialogue: "えへへ〜", mood: "smile2" },
    { dialogue: "ケロォ〜ン", mood: "happy" },
  ],
};
