import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import TeaTime from "./pages/TeaTime";
import Result from "./pages/Result";
import Shared from "./pages/Shared";
import TeaTimeImage from "./components/features/TeaTimeImage.tsx";
import UserName from "./pages/UserName.tsx";
import NewUserName from "./pages/NewUserName"; // 追加

function App() {
  const location = useLocation();

  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-x-2 px-4 py-5 sm:flex-row">
      {/* ページ遷移でアニメーションする部分 */}
      <div className="flex-auto">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/username" element={<UserName />} />
            <Route path="/newusername" element={<NewUserName />} /> 
            <Route path="/teatime" element={<TeaTime />} />
            <Route path="/result" element={<Result />} />
            <Route path="/shared" element={<Shared />} />
          </Routes>
        </AnimatePresence>
      </div>
      <TeaTimeImage />
    </div>
  );
}

export default App;
