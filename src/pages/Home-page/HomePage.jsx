import React, {useEffect} from "react";
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
import LeMoyenImg from "../../assets/images/leMoyen.png";
import SeDistinguer from "../../assets/images/Sedistinguer.png";
import PartagezImg from "../../assets/images/Partagez.png";


function HomePage() {
  
  useEffect(()=> {

    document.title = "Home Page Onecard Pro.com"


  })


  return (
    <>     
      <HeroSection />
      <OneCard />
      <LeftImgRightText
        site={"right"}
        title={"Le moyen professionnel pour établir de nouvelles relations"}
        text={
          "One card pro c une solution pour diffuser votre carte de visite, vos services et vos produits en un seul clic et transmissible à l'infini par vos contacts.Compatible avec tous les smartphones modernes, Apple et Android."
        }
        button={"wow"}
        sectionClassName={"bg-white"}
        image={LeMoyenImg}
      />
      <MultipleDesign />
      <div className="pb-5 bg-white">
        <LeftImgRightText
          site={"left"}
          title={"Se distinguer des autres"}
          text={`Tout est transmis d'un simple contact. \nFaites de chanque rendez  vous une impression mémorable`}
          sectionClassName={"bg-white"}
          image={SeDistinguer}
        />
      </div>
      <VideoExplainer />
      <div className="pb-108">
        <LeftImgRightText
          site={"left"}
          title={"Partagez vos informations en temps réel."}
          text={
            "Le partage d'informations est instantané avec One Card Pro. Il suffit de toucher l'écran du terminal mobile pour établir la connexion. L'échange de données est fait automatiquement"
          }
          sectionClassName={"bg-white"}
          image={PartagezImg}
        />
      </div>
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
