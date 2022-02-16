import React, { useEffect } from "react";
import Footer from "./../../components/Footer/Footer";
import HomeBanner from "./sections/HomeBanner/HomeBanner";
import RejoignezSlider from "./sections/RejoignezSlider/RejoignezSlider";
import HomePourquoiSection from "./sections/HomePourquoiSection/HomePourquoiSection";
import TextAndImgSection1 from "./sections/TextAndImgSection1/TextAndImgSection1";
import {
  lemoyenData,
  PartagezData,
  SEDISTINGUERDATA,
} from "./../../data/HomePageTextAndImgSection1Data";
import HomePageComment from "./sections/HomePageComment/HomePageComment";
import TextAndImgSection2 from "./sections/TextAndImgSection2/TextAndImgSection2";
import HomeMultiDesigns from "./sections/HomeMultiDesigns/HomeMultiDesigns";
import HomeVideoExplainer from "./sections/HomeVideoExplainer/HomeVideoExplainer";
import HomeLesCommentaires from "./sections/HomeLesCommentaires/HomeLesCommentaires";
import HomeLivraisonPartout from "./sections/HomeLivraisonPartout/HomeLivraisonPartout";
import HomeContact from './sections/HomeContact/HomeContact';

function HomePage() {
  return (
    <>
      <HomeBanner />
      <RejoignezSlider />
      <HomePourquoiSection />
      <TextAndImgSection1 data={lemoyenData} />
      <TextAndImgSection1 data={PartagezData} />
      <HomePageComment />
      <TextAndImgSection2 />
      <HomeMultiDesigns />
      <TextAndImgSection1 data={SEDISTINGUERDATA} />
      <HomeVideoExplainer />
      <HomeLesCommentaires />
      <HomeLivraisonPartout />
      <HomeContact />   
      <Footer /> 
    </>
  );
}

export default HomePage;
