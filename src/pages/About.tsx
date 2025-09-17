import { Link } from "react-router-dom";
import { Button } from "../components/common/Button";

const About = () => {
  return (
    <>
      <div className="mb-4 flex flex-col items-center justify-center gap-4 sm:mb-10">
        <div className="text-base">説明文を色々書くところ</div>
        <Link to="/">
          <Button variant="select-btn">戻る</Button>
        </Link>
      </div>
    </>
  );
};

export default About;
