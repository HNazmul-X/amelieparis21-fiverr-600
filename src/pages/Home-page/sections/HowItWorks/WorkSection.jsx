import React, { useState } from "react";
import workSectionIcon from "../../../../assets/images/HowItWorkes.png";
import workSliderImage from "../../../../assets/images/workSlider.jpg";
import WorkSectionSlider from "./WorkSectionSlider/WorkSectionSlider";

const workSliderInfo = [
  {
    id: 1,
    img: workSliderImage,
    description:
      "slider 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas laudantium odio necessitatibus?",
    
  },
  {
    id: 2,
    img: workSliderImage,
    description:
      "slider 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas laudantium odio necessitatibus?",
  },
  {
    id: 3,
    img: workSliderImage,
    description:
      "slider3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas laudantium odio necessitatibus?",
  },
  {
    id: 4,
    img: workSliderImage,
    description:
      "slider4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas laudantium odio necessitatibus?",
  },
];

const WorkSection = () => {
  const [slideNumber, setSlideNumber] = useState({
    number: 0,
    numberOne: 1,
    numberTwo: 2,
  });

  const handleClick = () => {
    setSlideNumber({
      ...slideNumber,
      number: slideNumber.number + 1,
      numberOne: slideNumber.numberOne + 1,
      numberTwo: slideNumber.numberTwo + 1,
    });
  };

  const handleDecrease = () => {
    setSlideNumber({
      ...slideNumber,
      number: slideNumber.number - 1,
      numberOne: slideNumber.numberOne - 1,
      numberTwo: slideNumber.numberTwo - 1,
    });
  };

  return (
    <div className="work-section">
      <div className="work-section-container">
        <div className="work-section-icon">
          <img src={workSectionIcon} alt="WorkSection" />
        </div>
        <div className="work-section-title">
          <h1>How it Works</h1>
        </div>
        <div className="slideTimeLine">
          <hr className="sliderLine" />
          <div className="timeLineNumber">
            <p className="number-1">
              <span>{slideNumber.number}</span>
            </p>
            <p className="number-2">
              <span>{slideNumber.numberOne}</span>
            </p>
            <p className="number-3">
              <span>{slideNumber.numberTwo}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="customSwipeWorkSlider">
        <WorkSectionSlider
          sliderData={workSliderInfo}
          handleChange={handleClick}
          handleDecrease={handleDecrease}
        />
      </div>
    </div>
  );
};

export default WorkSection;
