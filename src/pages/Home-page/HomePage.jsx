import React from "react";
import MultipleDesign from "./sections/MultipleDesign";
import VideoExplainer from "./sections/VideoExplainer";
import GetInTouch from "./sections/getInTouch/GetInTouch";
import Footer from './../../components/Footer/Footer';

function HomePage() {
  return (
    <>
      <div className="py-5"></div>
      <MultipleDesign />
      <VideoExplainer />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default HomePage;
