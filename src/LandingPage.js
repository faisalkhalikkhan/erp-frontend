import React from "react";

import Footer from "./reuseable-components/footer/Footer";
import ContactForm from "./components/Contact/ContactForm";
import MenuBar from "./components/Menu/MenuBar";
import ND from "./components/NumberDisplay/ND";
import About from "./components/About/About";
import CarouselMain from "./components/Carousel/CarouselMain";
import { useEffect, useState } from "react";
import MobileC from "./components/Carousel/MobileC";
const LandingPage = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  return (
    <div>
      <MenuBar />

      {matches && <CarouselMain />}
      {!matches && <MobileC />}
      <About />
      <ND />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default LandingPage;
