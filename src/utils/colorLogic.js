const COLOR_RANGES = {
  // 色相（Hue）- 6種類の色
  hue: {
    red: { min: 0, max: 15 },      // 赤
    orange: { min: 16, max: 45 },   // オレンジ
    yellow: { min: 46, max: 75 },   // 黄
    green: { min: 76, max: 165 },   // 緑
    blue: { min: 166, max: 255 },   // 青
    purple: { min: 256, max: 359 }  // 紫
  },
  
  // 彩度（Saturation）- 3段階
  saturation: {
    high: { min: 70, max: 100 },    // 高い（鮮やか）
    normal: { min: 40, max: 69 },   // 普通
    low: { min: 10, max: 39 }       // 低い（淡い）
  },
  
  // 明度（Lightness）- 3段階
  lightness: {
    bright: { min: 65, max: 85 },   // 明るい
    normal: { min: 35, max: 64 },   // 普通
    dark: { min: 15, max: 34 }      // 暗い
  }
};

// 指定範囲内でランダム値を生成
const getRandomInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// 診断結果からHSL値を生成
export const generateTeaColor = (hueChoice, saturationChoice, lightnessChoice) => {
  const hue = getRandomInRange(
    COLOR_RANGES.hue[hueChoice].min,
    COLOR_RANGES.hue[hueChoice].max
  );
  
  const saturation = getRandomInRange(
    COLOR_RANGES.saturation[saturationChoice].min,
    COLOR_RANGES.saturation[saturationChoice].max
  );
  
  const lightness = getRandomInRange(
    COLOR_RANGES.lightness[lightnessChoice].min,
    COLOR_RANGES.lightness[lightnessChoice].max
  );

  return { h: hue, s: saturation, l: lightness };
};

// HSLをCSS用の文字列に変換
export const hslToString = (hsl) => {
  return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
};