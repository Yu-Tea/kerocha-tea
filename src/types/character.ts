export interface CharacterProps {
  mood?:
    | "normal"
    | "smile1"
    | "smile2"
    | "happy"
    | "speak1"
    | "speak2"
    | "teatime"
    | "result";
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
  [key in
    | "normal"
    | "smile1"
    | "smile2"
    | "happy"
    | "speak1"
    | "speak2"
    | "teatime"
    | "result"]: ExpressionParts;
};

export interface CharacterResponse {
  dialogue: string;
  mood:
    | "normal"
    | "smile1"
    | "smile2"
    | "happy"
    | "speak1"
    | "speak2"
    | "teatime"
    | "result";
}

export interface TimeBasedResponses {
  morning: CharacterResponse[];
  afternoon: CharacterResponse[];
  evening: CharacterResponse[];
  night: CharacterResponse[];
}
