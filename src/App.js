import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection.jsx";

import Section2 from "./components/Section2/Section2.jsx";
import SushiFoodPhilosophy from "./components/SushiFoodPhilosophy/SushiFoodPhilosophy.jsx";
import MenuSection from "./components/MenuSection/MenuSection.jsx";
import ImageGrid from "./components/imageGrid/ImageGrid.jsx";
import Footer from "./components/footer/Footer.jsx";
import BestQualityService from "./components/BestQualityService/BestQualityService.jsx";
import ClientFeedBack from "./components/ClientFeedBack/ClientFeedBack.jsx";
import ReservedCheck from "./Pages/ReservedCheck.jsx";
import Header from "./components/header/Header.jsx";
import ReservationSection from "./components/ReservationSection/ReservationSection.jsx";

function App() {
  return (
    <Router className="relative">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Section2 />
              <SushiFoodPhilosophy />
              <MenuSection />
              <BestQualityService />
              <ClientFeedBack />
              <ImageGrid />
              <ReservationSection />
            </>
          }
        />
        <Route
          path="/reservanceCheck"
          element={
            <div>
              <Header />
              <ReservedCheck />
            </div>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
