import React from "react";
import HeroSection from "./HomeContainer/HeroSection";
import MultipleDesign from "./sections/MultipleDesign";
import VideoExplainer from "./sections/VideoExplainer";

function HomePage() {
  return (
    <>
      <div className="py-5">
        <HeroSection />
      </div>
      <MultipleDesign />
      <VideoExplainer />
      <div className="py-5"></div>
    </>
  );
}

export default HomePage;
