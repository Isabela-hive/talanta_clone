import React from "react";
import Landing from "./pages/Landing";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import About from "./pages/About/About";
import Partners from "./pages/Partners/Partners";
import Music from "./pages/TalentProfile/Music";

const App = () => {
  // const location = useLocation();
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/music" element={<Music />} />
      </Routes>
    </div>
  );
};

export default App;
