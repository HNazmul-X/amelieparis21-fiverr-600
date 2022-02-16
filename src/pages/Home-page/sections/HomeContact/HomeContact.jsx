import React from "react";

function HomeContact() {
  return (
    <section className="home-contact-section">
      <article className="container">
        <div className="wrapper">
          <div className="text-area">
            <h2>Contactez nous</h2>
            <div className="email-adress-area">
              <h4>Adresse électronique</h4>
              <p className="email">
                <a className="" href="mailto:CONTACT@TRYDUS.CO">
                  CONTACT@TRYDUS.CO
                </a>
              </p>
            </div>
          </div>
          <div className="form-area">
            <form className="my-form">
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control my-con-input"
                  id="exampleFormControlInput1"
                  placeholder="Votre nom"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  className="form-control my-con-input"
                  id="exampleFormControlInput2"
                  placeholder="Votre adresse électronique"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control my-con-input"
                  id="exampleFormControlInput3"
                  placeholder="Votre numéro de téléphone"
                />
              </div>
              <div>
                <textarea
                  className="form-control my-con-input"
                  aria-label="With textarea"
                  placeholder="Écrire un message *"
                  cols="50"
                  rows="4"
                ></textarea>
              </div>
              <div className="action-area">
<button type="submit" className="submit-btn">Envoyer</button>
              </div>
            </form>
          </div>
        </div>
      </article>
    </section>
  );
}

export default HomeContact;
