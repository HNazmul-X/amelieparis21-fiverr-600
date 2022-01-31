import React from "react";
import IMAGE from "../../../../assets/images/leMoyen.png";


const LeftImgRightText = ({ site, image,button, text, text2, title ,sectionClassName}) => {
    return (
        <div className={`left-image-right-text ${sectionClassName}`}>
            <div className={`image ${site}`}>
                <img src={IMAGE} alt="" />
            </div>
            <div className="container">
                <div className="row ">
                    <div className={`col-md-6 text-wrapper ${site==="left"?"order-lg-1 text-lg-end":""}`}>
                        <div className="py-3">
                            <h1 className="title">{title}</h1>
                            <p className="text mb-0">{text} </p>
                            <p className="text2">{text2} </p>
                            <div className="">{button && <button className="my-button">{button}</button>}</div>
                        </div>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </div>
    );
};

export default LeftImgRightText;
