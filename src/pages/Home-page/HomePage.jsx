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
import LeftImgRightText from "./sections/LeftImgRightText/LeftImgRightText";

function HomePage() {
  return (
      <>
          <HeroSection />
          <OneCard />
          <LeftImgRightText
              site={"right"}
              title={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, porro ab?"}
              text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, temporibus."}
              button={"wow"}
              sectionClassName={"bg-white"}
          />
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
