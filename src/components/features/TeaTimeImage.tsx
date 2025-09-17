const TeaTimeImage = () => {
  return (
    <div className="flex items-end justify-center py-5">
      <div className="mr-2 hidden sm:block">
        <img src={"/images/table.png"} alt="テーブル" />
      </div>
      <div className="">
        <div className="mb-2 text-center text-lg font-bold text-secondary">
          いらっしゃ〜い
        </div>
        <img src={"/images/kerocha_body01.png"} alt="ケロチャ" className="" />
      </div>
    </div>
  );
};

export default TeaTimeImage;
