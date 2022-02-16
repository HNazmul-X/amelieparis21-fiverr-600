import React, { createContext, useState } from "react";
import { FormStepsData } from "../../data/FormStepData";
import CreateCardSteps from "./CreateCardSteps";
import FormLoginPopup from "./FormLoginPopup";
import CardPreview from "./CardPreview";
import { useAuth } from "../../Context/UserContext";

export const CreateCardPageContext = createContext({});

const CreateCardPage = () => {
    const [formStepId, setFormStepId] = useState(FormStepsData[0]?.id);
    const [cardFiles, setCardFiles] = useState({
        frontSide: null,
        backside: null,
    });
    const [cardLogo, setCardLogo] = useState({
        card_base: "",
        front: {
            logo: "",
            scale: 1,
        },
        back: {
            logo: "",
            scale: 1,
            infoAlign: "left",
        },
    });
    const [cardDetails, setCardDetails] = useState({});
    const [checkingSteps, setCheckingSteps] = useState({
        step1: false,
        step2: false,
        step3: false,
        step4: false,
        step5: false,
    });

    const contextData = { formStepId, setFormStepId, cardLogo, setCardLogo, cardDetails, setCardDetails,cardFiles,setCardFiles, checkingSteps, setCheckingSteps };
    const auth = useAuth();

    return (
        <CreateCardPageContext.Provider value={{ ...contextData }}>
            <CreateCardSteps />
            <section className={`contactsheet-content-section content-section ${formStepId} `}>
                <article className="container">
                    <div className="row py-2 w-100">
                        <div className={`col-md-7 col-xl-6 left ${formStepId === "step5" ? "order-2" : ""}`}>
                            {auth?.user.isLoggedIn ? [...FormStepsData].map((item, index) => (formStepId === item.id ? <item.component thisData={item} componentIndex={index} key={item?.id} /> : null)) : null}
                        </div>
                        <div className={`col-md-5 col-xl-6 right ${formStepId === "step5" ? "order-1" : "align-items-center"}`}>
                            <CardPreview />
                        </div>
                    </div>
                </article>
            </section>
            {!auth?.user?.isLoggedIn && <FormLoginPopup />}
        </CreateCardPageContext.Provider>
    );
};

export default CreateCardPage;
