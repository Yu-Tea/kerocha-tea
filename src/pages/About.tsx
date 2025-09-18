import { Link } from "react-router-dom";
import { Button } from "../components/common/Button";

const About = () => {
  return (
    <div className="flex max-w-3xl flex-col items-center text-sm">
      <div>
        <h1 className="mb-4 text-center text-2xl font-bold text-secondary">
          はじめましての方へ
        </h1>

        <div className="mb-10">
          ようこそ。ケロチャの開発者Ｙです。この度、うちのケロチャがお茶作りにハマり、色んな人に飲んでもらいたいというので、ティータイムの場を設けさせていただきました。お茶がどんな色になるかは貴方とケロチャ次第です。ティーカップの中の小さな芸術を是非ご賞味ください。
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          {/* ケロチャ紹介文 */}
          <div className="w-auto rounded-xl bg-white px-4 py-6 sm:w-1/2">
            <img
              src="/public/images/logo_cup.png"
              alt="ケロチャ"
              className="float-left mr-3 max-w-[100px]"
            />
            <div>
              <p className="mb-1 text-lg font-bold text-secondary">ケロチャ</p>
              謎の開発者Ｙによって生み出されたケロ型ロボット。フルネームはピョン・ケロォン・ケロチャ。身長最大96cm、体重最大68kg。人のお世話をしたりお話するのが大好き。知らないことを知るのも大好き。
            </div>
          </div>
          {/* 謎の開発者Y紹介文 */}
          <div className="w-auto rounded-xl bg-white px-4 py-6 sm:w-1/2">
            <img
              src="/public/images/logo_cup.png"
              alt="ケロチャ"
              className="float-left mr-3 max-w-[100px]"
            />
            <div>
              <p className="mb-1 text-lg font-bold text-secondary">
                謎の開発者Ｙ
              </p>
              誰なのかは一切合切不明な、ケロチャを開発した謎の存在。身の回りのお世話係としてケロチャを作った。が、ケロチャに甘いのでやりたいようにやらせている。
            </div>
          </div>
        </div>

        <h2 className="mb-2 mt-10 text-center text-xl font-bold text-secondary">
          なぜなに質問コーナー
        </h2>
        <div>質問と回答を2・3個くらい乗せる？</div>
      </div>
      <Link to="/">
        <Button variant="select-btn">戻る</Button>
      </Link>
      {/* フッター */}
      <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 border-t border-stone-300 pt-5">
        <div className="text-center">
          © 2025 Kerocha's Colorful Tea Time. All rights reserved.
        </div>
        <div className="flex gap-x-2">
          <a
            href="https://x.com/Yu_Tea_68"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="fill-stone-500 hover:fill-secondary"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
            >
              <path d="M 2.3671875 3 L 9.4628906 13.140625 L 2.7402344 21 L 5.3808594 21 L 10.644531 14.830078 L 14.960938 21 L 21.871094 21 L 14.449219 10.375 L 20.740234 3 L 18.140625 3 L 13.271484 8.6875 L 9.2988281 3 L 2.3671875 3 z M 6.2070312 5 L 8.2558594 5 L 18.033203 19 L 16.001953 19 L 6.2070312 5 z" />
            </svg>
          </a>
          <a
            href="https://github.com/Yu-Tea/kerocha-tea"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="fill-stone-500 hover:fill-secondary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="26"
              height="26"
            >
              <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
