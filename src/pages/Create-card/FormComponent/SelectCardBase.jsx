import React, {useContext, useState} from "react";
import { SelectCardBaseData } from "../../../data/SelectCardBaseData";
import { CreateCardPageContext } from "../CreateCardPage";

function SelectCardBase() {
  const [selectedCardId, setSelectedCardId] = useState("")
  const { cardLogo, setCardLogo } = useContext(CreateCardPageContext);
  return (
      <section className="select-card-base-section">
          <h2 className="mb-4">Choose of Card Base</h2>
          <div className="mb-4 select_card_thumb">
              {SelectCardBaseData.map((data, index) => (
                  <div onClick={() => {
                    setSelectedCardId(data.id);
                    cardLogo.card_base = data.imgSrc;
                    setCardLogo({...cardLogo})
                  }} className={`${selectedCardId === data.id ? "active-card" : ""} base-card`}>
                      <img key={index} src={data.imgSrc} alt={data.altText} />
                  </div>
              ))}
          </div>
          <div className="mt-5">
              <button className="my-btn-primary me-3">Return</button>
              <button className="my-btn-primary">Following</button>
          </div>
      </section>
  );
}

export default SelectCardBase;
