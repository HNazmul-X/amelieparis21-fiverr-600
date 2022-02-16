import React from "react";
import image from "../../../../assets/images/Mockup2.fcc4cb4cf533f266d129.png"

function HomeBanner() {
  return (
    <section className="home_banner">
      <article className="container">
        <div className="wrapper">
          <h1>One Card Pro</h1>
          <p>
            One Card Pro Votre Carte de visite unique One Card pro Créez votre
            Carte Transmettez votre profil en un seul geste 100 % interactive !
          </p>
          <div className="action-area">
              <button className="btn"> 
              Créez votre Carte
              </button>
          </div>
          <div className="img-area">
              <img src={image} className='img'/>
          </div>
        </div>
      </article>
    </section>
  );
}

export default HomeBanner;
