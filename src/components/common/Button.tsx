import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type Props = Omit<HTMLMotionProps<"button">, "children"> & {
  children: React.ReactNode;
  variant: keyof typeof buttonStyle;
};

const buttonStyle = {
  "select-button":
    " text-lg border-dotted border-b-4 border-stone-400 px-1 pb-1.5",
  "red-gradation":
    "bg-gradient-to-r from-red-300 to-red-600 text-white, hover:from-red-600 hover:to-red-300",
} as const;

export const Button = ({ children, variant, className, ...props }: Props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`text-base ${buttonStyle[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
