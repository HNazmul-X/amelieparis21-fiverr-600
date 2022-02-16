import React from "react";
import img from "../../../../assets/images/professional.1a5394a9c541aeacb807.jpg";

function TextAndImgSection1({ data }) {
  const { imgSrc, title, text, leftImg,backgroundColor } = data;
  return (
    <section className="text-img-section-1" style={{background:backgroundColor}}>
      <article className="container">
        <div className="wrapper">
          <div className={`content-area ${leftImg ? "order-1" : ""}`}>
            <h3>{title}</h3>
            {text}
          </div>
          <div className="img-area">
            <img src={imgSrc} alt={title} />
          </div>
        </div>
      </article>
    </section>
  );
}

export default TextAndImgSection1;
