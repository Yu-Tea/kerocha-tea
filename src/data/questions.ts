import { Question } from "../types/diagnosis";

export const questions: Question[] = [
  {
    id: 1,
    text: "今の{userName}さんにピッタリなお茶を作るから、3つの質問に答えてねぇ〜。\n今のキミの心は何を求めているのかな？",
    options: [
      {
        id: "hue1",
        text: "もっと頑張りたい",
        hueRange: { min: 0, max: 40 }, // 赤・オレンジ系
      },
      {
        id: "hue2",
        text: "ワクワクしたい",
        hueRange: { min: 50, max: 70 }, // 黄色系
      },
      {
        id: "hue3",
        text: "リフレッシュしたい",
        hueRange: { min: 90, max: 140 }, // 黄緑・緑系
      },
      {
        id: "hue4",
        text: "静かにすごしたい",
        hueRange: { min: 190, max: 230 }, // 水色・青系
      },
      {
        id: "hue5",
        text: "フシギを感じたい",
        hueRange: { min: 250, max: 275 }, // 紫系
      },
      {
        id: "hue6",
        text: "優しくなりたい",
        hueRange: { min: 290, max: 350 }, // ピンク系
      },
    ],
  },
  {
    id: 2,
    text: "そうなんだね！\nじゃあ、今のキミの元気はどのくらいなの？",
    options: [
      {
        id: "sat1",
        text: "しっかり元気！",
        saturationRange: { min: 5.1, max: 6.0 }, // 高い彩度
      },
      {
        id: "sat2",
        text: "普通だよ",
        saturationRange: { min: 3.1, max: 4.0 }, // 普通の彩度
      },
      {
        id: "sat3",
        text: "お疲れ気味かなぁ",
        saturationRange: { min: 1.1, max: 2.0 }, // 低い彩度
      },
    ],
  },
  {
    id: 3,
    text: "ふむふむ。じゃあ最後の質問だよ。\nこの後、どう過ごす予定なの〜？",
    options: [
      {
        id: "bright1",
        text: "やること盛りだくさん！",
        brightnessRange: { min: 2.3, max: 3.0 }, // 明るい
      },
      {
        id: "bright2",
        text: "いつも通りかな〜",
        brightnessRange: { min: 1.6, max: 2.0 }, // 普通
      },
      {
        id: "bright3",
        text: "ゆっくり休むつもり",
        brightnessRange: { min: 1.0, max: 1.4 }, // 暗い
      },
    ],
  },
];
