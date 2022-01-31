import React, { useState } from "react";
import workSectionIcon from "../../../../assets/images/HowItWorkes.png";
import workProfileImage from "../../../../assets/images/Group_1282.png";
import workCardImage from "../../../../assets/images/Layer 2.png";
import "./WorkSection.css"


const WorkSection = () => {

  return (
   <div className="worksectionMainContainer">
      <div className="worksectionSubContainer">
          <img src={workSectionIcon} alt="" />
          <h3 className="workTitlle">How it Works</h3>
          <div className="worksectionSubDetails">
              <div className="lineContainer">
              </div>
              <div className="workContent">
                  <div className="workNumberContainer">
                      <div className="workVerticalLine">
                          <div className="workNumberBox">1</div>
                          <div className="verticalLiner"></div>
                      </div>
                      <div className="workVerticalLine">
                          <div className="workNumberBox">2</div>
                          <div className="verticalLiner"></div>
                      </div>
                      <div className="workVerticalLine">
                          <div className="workNumberBox">3</div>
                          <div className="verticalLiner"></div>
                      </div>
                  </div>
              </div>
          <div className="workCardBoxContainer">
              <div className="workCardBoxDetails cardDetails">
                  <h3>Commander votre carte</h3>
                  <img src={workCardImage} alt="" />
              </div>
              <div className="workCardBoxDetails profileDetails">
                  <h3>Commander votre carte</h3>
                  <img src={workProfileImage} alt="" />
              </div>
              <div className="workCardBoxDetails profileDetails">
                  <h3>Commander votre carte</h3>
                  <img src={workProfileImage} alt="" />
              </div>
          </div>
          </div>
      </div>
   </div>
  );
};

export default WorkSection;
