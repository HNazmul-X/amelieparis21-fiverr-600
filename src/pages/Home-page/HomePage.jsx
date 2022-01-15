import React from "react";
import MultipleDesign from "./sections/MultipleDesign";
import VideoExplainer from "./sections/VideoExplainer";
import GetInTouch from "./sections/getInTouch/GetInTouch";
import Footer from "./../../components/Footer/Footer";
import OneCard from "./sections/OneCard";
import AboutUS from "./sections/AboutUS";
import Refference from "./sections/Refference";
import HeroSection from "./HomeContainer/HeroSection";
import WorkSection from "./sections/HowItWorks/WorkSection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <OneCard />
      <MultipleDesign />
      <VideoExplainer />
      <WorkSection />
      <div className="py-5">
        <Refference />
        <AboutUS />
      </div>
      <GetInTouch />
      <Footer />
    </>
  );
}

export default HomePage;
