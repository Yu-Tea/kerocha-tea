import { Question } from "../types/diagnosis";

export const questions: Question[] = [
  {
    id: 1,
    text: "{userName}さんにピッタリなお茶を作るね。\n今のキミの心は何を求めているのかな？",
    options: [
      {
        id: "hue1",
        text: "もっと頑張りたい",
        hueRange: { min: 0, max: 40 },
        messagePart: {
          mood: "しっかり頑張れる",
        },
      },
      {
        id: "hue2",
        text: "ワクワクしたい",
        hueRange: { min: 50, max: 70 },
        messagePart: {
          mood: "ワクワクして過ごせる",
        },
      },
      {
        id: "hue3",
        text: "リフレッシュしたい",
        hueRange: { min: 90, max: 140 },
        messagePart: {
          mood: "心も体もリフレッシュできる",
        },
      },
      {
        id: "hue4",
        text: "静かにすごしたい",
        hueRange: { min: 190, max: 230 },
        messagePart: {
          mood: "静かなひとときを楽しめる",
        },
      },
      {
        id: "hue5",
        text: "フシギを感じたい",
        hueRange: { min: 250, max: 275 },
        messagePart: {
          mood: "フシギな体験に出会える",
        },
      },
      {
        id: "hue6",
        text: "優しくなりたい",
        hueRange: { min: 290, max: 350 },
        messagePart: {
          mood: "優しい気持ちで過ごせる",
        },
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
        saturationRange: { min: 5.1, max: 6.0 },
        messagePart: {
          energy: "元気いっぱいな",
        },
      },
      {
        id: "sat2",
        text: "普通だよ",
        saturationRange: { min: 3.1, max: 4.0 },
        messagePart: {
          energy: "素敵な",
        },
      },
      {
        id: "sat3",
        text: "お疲れ気味かなぁ",
        saturationRange: { min: 1.1, max: 2.0 },
        messagePart: {
          energy: "お疲れな",
        },
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
        brightnessRange: { min: 2.3, max: 3.0 },
        messagePart: {
          lifestyle: "忙しくっても",
        },
      },
      {
        id: "bright2",
        text: "いつも通りかな〜",
        brightnessRange: { min: 1.6, max: 2.0 },
        messagePart: {
          lifestyle: "これから",
        },
      },
      {
        id: "bright3",
        text: "ゆっくり休むつもり",
        brightnessRange: { min: 1.0, max: 1.4 },
        messagePart: {
          lifestyle: "お休みタイムは",
        },
      },
    ],
  },
];
