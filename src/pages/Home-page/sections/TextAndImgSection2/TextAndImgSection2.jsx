import React from "react";
import img1 from "../../../../assets/images/manwithcard.418c8d5a39d60d8b153a.png";

function TextAndImgSection2() {
  return (
    <section className="TextAndImgSection2">
      <article className="container">
        <div className="wrapper">
          <div className="img-section">
            <img src={img1} alt="" />
          </div>
          <div className="content-area">
            <div className="single-content">
              <h4>TOUJOURS AVEC VOUS</h4>
              <p>
                Vous n'aurez plus peur d'oublier vos cartes de visites, one card
                pro est toujours prêt à l'emploi.
              </p>
            </div>
            <div className="single-content">
              <h4>ÉCONOMISEZ DE L'ARGENT</h4>
              <p>
                Arrêtez d'acheter des milliers de cartes de visite qui finissent
                à la poubelle.
              </p>
            </div>
            <div className="single-content">
              <h4>TOUJOURS AVEC VOUS</h4>
              <p>
                Échangez et enregistrez vos coordonnées en quelques secondes.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default TextAndImgSection2;
