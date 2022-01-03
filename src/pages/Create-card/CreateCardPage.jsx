import React, { createContext, useState } from "react";
import { FormStepsData } from "../../data/FormStepData";
import CreateCardSteps from "./CreateCardSteps";
import CardImage from "../../assets/images/Group 32.png";
import FormLoginPopup from "./FormLoginPopup";
import { InlineIcon } from "@iconify/react";
import CardPreview from "./CardPreview";

export const CreateCardPageContext = createContext({});

const CreateCardPage = () => {
    const [formStepId, setFormStepId] = useState(FormStepsData[0]?.id);
    const [cardLogo, setCardLogo] = useState({
        card_base:"",
        front: {
            logo: "",
            scale:1
        },
        back: {
            logo: "",
            scale:1,
            infoAlign:"left"
        },
    });
    const contextData = { formStepId, setFormStepId, cardLogo, setCardLogo };

    return (
        <CreateCardPageContext.Provider value={{ ...contextData }}>
            <CreateCardSteps />
            <section className={`contactsheet-content-section content-section ${formStepId} `}>
                <article className="container">
                    <div className="row py-2 w-100">
                        <div className={`col-md-7 col-xl-6 left ${formStepId === "step5" ? "order-2" : ""}`}>
                            {[...FormStepsData].map((item, index) => (formStepId === item.id ? item.component : null))}
                        </div>
                        <div className={`col-md-5 col-xl-6 right ${formStepId === "step5" ? "order-1" : "align-items-center"}`}>
                            <CardPreview />
                        </div>
                    </div>
                </article>
            </section>
            <FormLoginPopup />
        </CreateCardPageContext.Provider>
    );
};

export default CreateCardPage;
