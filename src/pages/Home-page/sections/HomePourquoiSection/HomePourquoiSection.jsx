import React from "react";
import image from "../../../../assets/images/mockup3.b09400da400870efed97 (1).png";
import { HomePourquoiSectionData } from './../../../../data/HomePourquoiSectionData';

function HomePourquoiSection() {
  return (
    <section className="HomePourquoiSection">
      <article className="conatiner">
        <div className="wrapper">
          <div className="img_wrapper">
            <img src={image} alt="Image" />
          </div>
          <div className="text-area">
           
              <div >
                <h3>{HomePourquoiSectionData.title}</h3>
                <div className="single-list-wrapper">
                  {HomePourquoiSectionData.content.map((el, index) => (
                    <div key={index} className="single-list">
                      <div className={`icon-area ${el.defaultClass}`}>
                        <img src={el.icon} alt={el.title} />
                      </div>
                      <div className="single-text-area">
                        <h5>{el.title}</h5>
                        {el.text && <p>{el.text}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
          
          </div>
        </div>
      </article>
    </section>
  );
}

export default HomePourquoiSection;
