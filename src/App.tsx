import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import TeaTime from "./pages/TeaTime";
import Result from "./pages/Result";
import Shared from "./pages/Shared";
import KerochaTable from "./components/layout/KerochaTable.tsx";

function App() {
  const location = useLocation();

  return (
    <div className="container mx-auto flex min-h-screen flex-col justify-center items-center py-5 gap-4">
      {/* ページ遷移でアニメーションする部分 */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/teatime" element={<TeaTime />} />
          <Route path="/result" element={<Result />} />
          <Route path="/shared" element={<Shared />} />
        </Routes>
      </AnimatePresence>
      <KerochaTable />
    </div>
  );
}

export default App;
