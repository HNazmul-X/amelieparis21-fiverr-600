import React from "react";
import Footer from "./../../components/Footer/Footer";
import HomeBanner from "./sections/HomeBanner/HomeBanner";
import RejoignezSlider from "./sections/RejoignezSlider/RejoignezSlider";
import HomePourquoiSection from "./sections/HomePourquoiSection/HomePourquoiSection";
import HomeMultiDesigns from "./sections/HomeMultiDesigns/HomeMultiDesigns";
import HomeVideoExplainer from "./sections/HomeVideoExplainer/HomeVideoExplainer";
import HomeLesCommentaires from "./sections/HomeLesCommentaires/HomeLesCommentaires";
import HomeLivraisonPartout from "./sections/HomeLivraisonPartout/HomeLivraisonPartout";
import HomeContact from "./sections/HomeContact/HomeContact";
import Professional from "./sections/Professional/Professional";
import ShareInfoInRealTime from "./sections/ShareInfoInRealTime/ShareInfoInRealTime";
import HomeHowItWorks from "./sections/HomeHowItWorks/HomeHowItWorks";
import ManWithCard from "./sections/ManWithCard/ManWithCard";
import StandOutFromCrowd from "./sections/StandOutFromCrowd/StandOutFromCrowd";

function HomePage() {
  return (
      <>
          <div id="homepage">
              <HomeBanner />
              <RejoignezSlider />
              <HomePourquoiSection />
              <Professional />
              <ShareInfoInRealTime />
              <HomeHowItWorks />
              <ManWithCard />
              <HomeMultiDesigns />
              <StandOutFromCrowd />
              <HomeVideoExplainer />
              <div className="flex flex-col items-center w-full divide-y divide-oneCard-lightGray">
                  <HomeLesCommentaires />
                  <HomeLivraisonPartout />
              </div>
              <HomeContact />
              <Footer />
          </div>
      </>
  );
}

export default HomePage;
