import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type Props = Omit<HTMLMotionProps<"button">, "children"> & {
  children: React.ReactNode;
  variant: keyof typeof buttonStyle;
};

const buttonStyle = {
  "select-btn":
    "text-base sm:text-lg border-dotted border-b-4 border-stone-400 px-1 pb-1.5 font-bold hover:text-secondary",
  "green-btn":
    "bg-secondary-300 text-white px-5 py-2 rounded-full font-bold hover:bg-secondary text-sm",
    "x-btn":
    "bg-primary-300 text-white px-5 py-2 rounded-full font-bold hover:bg-primary text-sm",
} as const;

export const Button = ({ children, variant, className, ...props }: Props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`${buttonStyle[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
