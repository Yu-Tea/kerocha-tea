const Footer = () => {
  return (
    <div className="flex justify-center items-end py-5">
      <div className="mr-2 hidden sm:block">
        <img src={"/images/table.png"} alt="テーブル" />
      </div>
      <div className="">
        <div className="text-center mb-2 text-lg font-bold text-secondary">いらっしゃ〜い</div>
        <img src={"/images/kerocha_body01.png"} alt="ケロチャ" className="" />
      </div>
    </div>
  );
};

export default Footer;
