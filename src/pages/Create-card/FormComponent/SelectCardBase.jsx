import React from "react";
import img from "../../../assets/images/Group 33.png";
import { SelectCardBaseData } from "../../../data/SelectCardBaseData";

function SelectCardBase() {
  return (
    <div>
      <h2 class="mb-4">Choose of Card Base</h2>
      <div class="mb-4 selec_card_thumb">
        {SelectCardBaseData.map((data, index) => (
          <img key={index} src={img} alt={data.altText} />
        ))}
      </div>
      <div class="mt-5">
        <button class="my-btn-primary me-3">Return</button>
        <button class="my-btn-primary">Following</button>
      </div>
    </div>
  );
}

export default SelectCardBase;
