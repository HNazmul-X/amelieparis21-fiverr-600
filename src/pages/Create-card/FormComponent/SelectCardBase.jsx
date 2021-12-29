import React, {useState} from "react";
import { SelectCardBaseData } from "../../../data/SelectCardBaseData";

function SelectCardBase() {
  const [selectedCard, setSelectedCard] = useState(0)
  return (
    <div>
      <h2 class="mb-4">Choose of Card Base</h2>
      <div class="mb-4 selec_card_thumb">
        {SelectCardBaseData.map((data, index) => (
          <img className={`${selectedCard === index ? "active-card" : ""}`} onClick={() =>setSelectedCard(index) } key={index} src={data.imgSrc} alt={data.altText} />
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
