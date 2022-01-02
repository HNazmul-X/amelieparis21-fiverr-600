import React from "react";
import SectionTitle from "./SectionTitle";
import image from "../../../../assets/images/Rectangle 13.png";

function SelectProfileTemplate({open, handelOpen, title}) {
  const datas = [image, image, image, image];
 
  return (
    <div className="select-profile-template db-template">
      <SectionTitle title={title}  handelOpen={handelOpen} open={open} />
      <div className={`${open.includes(title) ? "d-block open-div" : "d-none"}`}>
      <div  className={`template-img-wrapper`}>
        {datas.map((data, index) => (
          <div key={index}>
            <img src={data} alt="image" />
          </div>
        ))}

      </div>
      </div>
    </div>
  );
}

export default SelectProfileTemplate;
