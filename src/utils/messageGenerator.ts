interface MessageParts {
  mood: string;
  energy: string;
  lifestyle: string;
}

const templates = [
  (parts: MessageParts) =>
    `${parts.energy}キミが、${parts.lifestyle}${parts.mood}ように願いを込めたお茶だよ。`,
  (parts: MessageParts) =>
    `${parts.energy}キミが、${parts.lifestyle}${parts.mood}ように特別なお茶をブレンドしたよ〜。`,
  (parts: MessageParts) =>
    `${parts.energy}キミが、${parts.lifestyle}${parts.mood}ように心を込めて作ったお茶だよ。`,
  (parts: MessageParts) =>
    `${parts.energy}キミが、${parts.lifestyle}${parts.mood}ようにおまじないをかけたお茶だよ〜。`,
];

export const generateResultMessage = (
  parts: MessageParts,
  templateIndex?: number
): string => {
  if (typeof templateIndex === "number" && templates[templateIndex]) {
    return templates[templateIndex](parts);
  }
  const randomIndex = Math.floor(Math.random() * templates.length);
  return templates[randomIndex](parts);
};

export const getTemplatesCount = () => templates.length;
