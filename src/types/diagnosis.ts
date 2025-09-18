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
  hueRange?: ColorRange; // 色相の範囲
  saturationRange?: ColorRange; // 彩度の範囲
  brightnessRange?: ColorRange; // 明度の範囲
  messagePart?: {
    mood?: string; // 色相に対応したセリフ
    energy?: string; // 彩度に対応したセリフ
    lifestyle?: string; // 明度に対応したセリフ
  };
}

export interface UserInfo {
  name: string;
  registeredAt: string;
}

export interface DiagnosisResult {
  hue: number;
  saturation: number;
  brightness: number;
  userName?: string;
  messageParts?: {
    mood?: string;
    energy?: string;
    lifestyle?: string;
  };
  messageTemplateIndex?: number;
}
