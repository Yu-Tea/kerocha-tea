import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import TeaTime from "./pages/TeaTime";
import Result from "./pages/Result";
import Shared from "./pages/Shared";
import Footer from "./components/layout/Footer.tsx";

function App() {
  const location = useLocation();

  return (
    <div className="max-w-full sm:max-w-5xl mx-auto flex min-h-screen flex-col sm:flex-row justify-center items-center px-4 py-5">
      {/* ページ遷移でアニメーションする部分 */}
      <div className="flex-auto">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/teatime" element={<TeaTime />} />
            <Route path="/result" element={<Result />} />
            <Route path="/shared" element={<Shared />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}

export default App;
