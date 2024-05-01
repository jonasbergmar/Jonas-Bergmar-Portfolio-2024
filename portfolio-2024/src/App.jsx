import Header from "./Components/Header";
import LandingPage from "./Pages/LandingPage";
import Projects from "./Pages/Projects";
import Footer from "./Components/Footer";
import AboutPage from "./Pages/AboutPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="  flex flex-col min-h-screen gap-8 bg-Background px-8 md:px-20 lg:px-40">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex-grow  pt-24">
                <LandingPage />
              </div>
            }
          />
          <Route
            path="/Projects"
            element={
              <div className="flex-grow pt-24">
                <Projects />
              </div>
            }
          />
          <Route
            path="/About"
            element={
              <div className=" flex-grow pt-24">
                <AboutPage />
              </div>
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
