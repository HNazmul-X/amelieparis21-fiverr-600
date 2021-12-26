import { InlineIcon } from "@iconify/react";
import React, { useContext } from "react";
import { FormStepsData } from "../../data/FormStepData";
import { CreateCardPageContext } from "./CreateCardPage";

const CreateCardSteps = () => {
    const { formStepId, setFormStepId } = useContext(CreateCardPageContext);
    const totalSteps = [...FormStepsData];

    return (
        <>
            <section class="steper-section">
                <article class="container">
                    <div class="section-wrapper" style={{ "--total-count": totalSteps.length }}>
                        {totalSteps.map((data, index) => (
                            <div class="single-steps-wrapper">
                                {index === 0 ? "" : <div class="hr-line"></div>}
                                <div class="single-steps" onClick={()=> setFormStepId(data?.id)}>
                                    <span class="img-wrapper">
                                        <div class={`${formStepId === data?.id ? "active" : ""}`}>
                                            <InlineIcon icon={data?.icon} />
                                        </div>
                                    </span>
                                    <span class="label">
                                        <span>{data?.label} </span>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </article>
            </section>
        </>
    );
};

export default CreateCardSteps;
