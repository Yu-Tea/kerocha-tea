"use client";

import { motion, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Logo_txt from "/public/images/logo_txt.svg";

export default function App() {
  const ref = useRef<HTMLDivElement>(null);
  const [{ width, height, top, left }, measure] = useElementDimensions(ref);
  const gradientX = useMotionValue(0.5);
  const gradientY = useMotionValue(0.5);
  const background = useTransform(
    () =>
      `conic-gradient(from 0deg at calc(${
        gradientX.get() * 100
      }% - ${left}px) calc(${
        gradientY.get() * 100
      }% - ${top}px), #329cd9, #d54e82, #eed01d, #329cd9)`
  );

  return (
    <motion.div
      initial={{ filter: "blur(20px)", opacity: 0, scale: 0.95 }}
      animate={{ filter: "none", opacity: 100, scale: 1.0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        type: "spring",
        duration: 2,
        ease: "easeOut",
      }}
    >
      <div
        onPointerMove={(e) => {
          gradientX.set(e.clientX / width);
          gradientY.set(e.clientY / height);
        }}
      >
        <div className="w-full sm:w-[380px] mx-auto relative aspect-square max-w-[380px] min-w-[340px]">
          <img
            src={Logo_txt}
            alt="ケロチャのカラフルティータイム"
            className="w-full h-auto absolute left-0 top-0"
          />
          <div className="flex items-center justify-center w-full h-full">
            <motion.div
              ref={ref}
              style={{
                background,
                width: "74%",
                aspectRatio: "1 / 1",
                borderRadius: "50%",
                cursor: "none",
                maxWidth: 280,
                maxHeight: 280,
              }}
              onPointerEnter={() => measure()}
            />
            <img
              src={"/images/logo_cup.png"}
              alt="ケロチャのカラフルティータイム"
              className="w-full h-auto absolute left-0 top-0"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * ================  Utils  =========================
 */

function useElementDimensions(
  ref: React.RefObject<HTMLDivElement | null>
): [
  { width: number; height: number; top: number; left: number },
  VoidFunction
] {
  const [size, setSize] = useState({ width: 0, height: 0, top: 0, left: 0 });

  function measure() {
    if (!ref.current) return;

    setSize(ref.current.getBoundingClientRect());
  }

  // Note: This won't accurately reflect viewport size changes
  useEffect(() => {
    measure();
  }, []);

  return [size, measure];
}
