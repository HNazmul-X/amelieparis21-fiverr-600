import React from "react";
import portrait from "../../../assets/images/portrait.png";

const Refference = () => {
  return (
    <div id="refference_area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="refference_content">
              <p className="mb-0 pb-0 title">TOUJOURS AVEC VOUS </p>
              <p>
                Vous naurez plus peur doublier vos cartes de visites, one card
                pro est toujours prête à l'emploi.
              </p>
              <p className="mb-0 pb-0 title">ÉCONOMISEZ DE L'ARGENT </p>
              <p>
                Arrêtez d'acheter des milliers de cartes de visite qui finissent
                à la poubelle.
              </p>
              <p className="mb-0 pb-0 title">GAGNEZ DU TEMPS </p>
              <p>
                échangez et enregistrez vos coordonnées en quelques secondes
              </p>

              <button className="btn refferenceBtn">
                Download Refference File
              </button>
            </div>
          </div>

          <div className="col-md-4 offset-md-1">
            <div className="refference_img">
              <img src={portrait} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refference;
