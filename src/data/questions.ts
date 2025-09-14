import { Question } from "../types/diagnosis";

export const questions: Question[] = [
  {
    id: 1,
    text: "今のキミの心が求めているのはどんな気持ち？",
    options: [
      {
        id: "hue1",
        text: "もっと頑張りたい",
        hueRange: { min: 0, max: 39 }, // 赤・オレンジ系
      },
      {
        id: "hue2",
        text: "ワクワクしたい",
        hueRange: { min: 40, max: 64 }, // 黄色系
      },
      {
        id: "hue3",
        text: "リフレッシュしたい",
        hueRange: { min: 75, max: 170 }, // 黄緑・緑系
      },
      {
        id: "hue4",
        text: "静かにすごしたい",
        hueRange: { min: 190, max: 240 }, // 水色・青系
      },
      {
        id: "hue5",
        text: "フシギを感じたい",
        hueRange: { min: 260, max: 290 }, // 紫系
      },
      {
        id: "hue6",
        text: "優しくなりたい",
        hueRange: { min: 300, max: 340 }, // ピンク系
      },
    ],
  },
  {
    id: 2,
    text: "今のキミの元気はどのくらい？",
    options: [
      {
        id: "sat1",
        text: "しっかり元気！",
        saturationRange: { min: 70, max: 90 }, // 高い彩度
      },
      {
        id: "sat2",
        text: "普通だよ",
        saturationRange: { min: 40, max: 60 }, // 普通の彩度
      },
      {
        id: "sat3",
        text: "お疲れ気味かなぁ",
        saturationRange: { min: 10, max: 30 }, // 低い彩度
      },
    ],
  },
  {
    id: 3,
    text: "この後、どう過ごすの？",
    options: [
      {
        id: "light1",
        text: "やること盛りだくさん！",
        lightnessRange: { min: 65, max: 80 }, // 明るい
      },
      {
        id: "light2",
        text: "いつも通りかな〜",
        lightnessRange: { min: 45, max: 60 }, // 普通
      },
      {
        id: "light3",
        text: "ゆっくり休むつもり",
        lightnessRange: { min: 25, max: 40 }, // 暗い
      },
    ],
  },
];
