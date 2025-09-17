export interface CharacterProps {
  mood?: "normal" | "happy" | "speak";
  dialogue?: string;
  isClickable?: boolean;
}

export interface ExpressionParts {
  eyes: string;
  mouth: string;
  body: string;
}

export type Expressions = {
  [key in "normal" | "happy" | "speak"]: ExpressionParts;
};
