export interface ColorRange {
  min: number;
  max: number;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface Option {
  id: string;
  text: string;
  hueRange?: ColorRange;        // 色相の範囲
  saturationRange?: ColorRange; // 彩度の範囲
  brightnessRange?: ColorRange;  // 明度の範囲
}

export interface UserInfo {
  name: string;
  registeredAt: string; // 登録日時
}

export interface DiagnosisResult {
  hue: number;
  saturation: number;
  brightness: number;
  selectedOptions: string[]; // どの選択肢を選んだかも記録
  userName?: string; // ユーザー名を追加
}