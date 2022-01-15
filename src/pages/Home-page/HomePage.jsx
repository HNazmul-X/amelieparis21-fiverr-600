import React from "react";
import MultipleDesign from "./sections/MultipleDesign";
import VideoExplainer from "./sections/VideoExplainer";
import OneCard from "./sections/OneCard";
import AboutUS from "./sections/AboutUS";
import Refference from "./sections/Refference";
import HeroSection from "./HomeContainer/HeroSection";
import WorkSection from "./sections/HowItWorks/WorkSection";

function HomePage() {
  return (
    <>
      <div className="py-5"></div>
      <HeroSection />
      <OneCard />
      <MultipleDesign />
      <VideoExplainer />
      <WorkSection />
      <div className="py-5">
        <Refference />
        <AboutUS />
      </div>
    </>
  );
}

export default HomePage;
