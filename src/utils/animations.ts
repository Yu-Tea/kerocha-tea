import { Variants } from "framer-motion";
// Motionの汎用アニメーション設定まとめ

export const pageVariants: Variants = {
  initial: {
    filter: "blur(10px)",
    opacity: 0,
    x: 15,
  },
  animate: {
    filter: "none",
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
  exit: {
    filter: "blur(10px)",
    opacity: 0,
    x: -15,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.1,
    },
  },
};
