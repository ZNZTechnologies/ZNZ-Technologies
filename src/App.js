import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Team from "./components/team/Team";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";


function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route
          path="/about"
          element={<AboutUsPage />}
        />
        <Route path="/Team" element={<Team />} />
        <Route
          path="/contact"
          element={<ContactPage />}
        />
        <Route
          path="/portfolio"
          element={<PortfolioPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
