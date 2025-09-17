export interface CharacterProps {
  mood?: "normal" | "happy" | "speak";
  dialogue?: string;
  isClickable?: boolean;
  onCharacterClick?: () => void;
}

export interface ExpressionParts {
  eyes: string;
  mouth: string;
  body: string;
}

export type Expressions = {
  [key in "normal" | "happy" | "speak"]: ExpressionParts;
};

export interface CharacterResponse {
  dialogue: string;
  mood: "normal" | "happy" | "speak";
}

export interface TimeBasedResponses {
  morning: CharacterResponse[];
  afternoon: CharacterResponse[];
  evening: CharacterResponse[];
  night: CharacterResponse[];
}