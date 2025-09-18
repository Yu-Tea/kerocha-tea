import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { pageVariants } from "../utils/animations";
import { Button } from "../components/common/Button";
import { Link } from "react-router-dom";
import Tea from "/public/images/tea.svg";

const getParam = (params: URLSearchParams, key: string, fallback: number) => {
  const value = params.get(key);
  return value ? Number(value) : fallback;
};

const Shared = () => {
  const location = useLocation();
  const params = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );
  const hue = getParam(params, "hue", 100);
  const sat = getParam(params, "sat", 2);
  const bri = getParam(params, "bri", 2);
  const name = params.get("name") || "";

  return (
    <>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-col items-center justify-center"
      >
        <div className="bubble mb-3">
          <p>
            {name ? (
              <>
                <span className="text-secondary">{name}</span>さん
              </>
            ) : (
              "あなた"
            )}
            に作ったお茶はこんな感じだったよ〜！
          </p>
        </div>
        {/* お茶の画像部分 */}
        <div className="relative">
          <img
            src={Tea}
            alt="こんなお茶を作ったよ！"
            className="absolute left-0 top-0 h-auto w-full"
            style={{
              filter: `hue-rotate(${hue}deg) saturate(${sat}) brightness(${bri}) blur(3px)`,
            }}
          />
          <img src={"/images/tea_bg.png"} alt="ケロチャ" className="" />
        </div>
        {/* ボタン */}
        <div className="mb-4 flex flex-col items-center justify-center gap-4 sm:mb-10">
          <Link to="/">
            <Button variant="select-btn">
              最初のページへ
            </Button>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Shared;
