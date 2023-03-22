import React from "react";
import Products from "./components/Products";
import Reviews from "./components/Reviews";
import Features from "./components/Features";
import CTA from "./components/CTA";
import CTA2 from "./components/CTA2";
import FAQ from "./components/FAQ";
import Policies from "./components/Policies";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="p-0">
      <Nav />
      <Products />
      <Reviews />
      <Features />
      <CTA />
      <CTA2 />
      <FAQ />
      <Policies />
      <Footer />
    </div>
  );
};

export default App;
