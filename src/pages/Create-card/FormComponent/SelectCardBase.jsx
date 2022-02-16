import React, { useContext, useState } from "react";
import { FormStepsData } from "../../../data/FormStepData";
import { SelectCardBaseData } from "../../../data/SelectCardBaseData";
import { CreateCardPageContext } from "../CreateCardPage";

function SelectCardBase({ thisData, componentIndex }) {
    const { cardLogo, setCardLogo, checkingSteps, setCheckingSteps, setFormStepId } = useContext(CreateCardPageContext);
    const handleChangingStep = () => {
        setTimeout(() => {
            if (checkingSteps?.step2) {
                setFormStepId(FormStepsData[componentIndex + 1]?.id);
            }
        }, 150);
    };
    return (
        <section className="select-card-base-section">
            <h2 className="mb-4">Choose of Card Base</h2>
            <div className="mb-4 select_card_thumb">
                {SelectCardBaseData.map((data, index) => (
                    <div
                    key={index}
                        onClick={() => {
                            cardLogo.card_base = data.imgSrc;
                            setCardLogo({ ...cardLogo });
                            setTimeout(() => {
                                if (cardLogo?.card_base?.length > 1) {
                                    checkingSteps.step2 = true;
                                    setCheckingSteps({ ...checkingSteps });
                                }
                            }, 50);
                        }}
                        className={`${cardLogo?.card_base === data?.imgSrc ? "active-card" : ""} base-card`}>
                        <img key={index} src={data.imgSrc} alt={data.altText} />
                    </div>
                ))}
            </div>
            <div className="mt-5">
                <button className="my-btn-primary me-3" onClick={() => setFormStepId("step1")}>
                   précédent
                </button>
                <button disabled={!checkingSteps?.step2} onClick={handleChangingStep} className={`my-btn-primary ${!checkingSteps?.step2 ? "opacity-50" : ""}`}>
                   suivant
                </button>
            </div>
        </section>
    );
}

export default SelectCardBase;
