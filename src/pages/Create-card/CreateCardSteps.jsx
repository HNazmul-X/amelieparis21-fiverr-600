import { InlineIcon } from "@iconify/react";
import React, { useContext } from "react";
import { FormStepsData } from "../../data/FormStepData";
import { CreateCardPageContext } from "./CreateCardPage";

const CreateCardSteps = () => {
    const { formStepId, setFormStepId, checkingSteps } = useContext(CreateCardPageContext);
    const totalSteps = [...FormStepsData];

    return (
        <>
            <section className="steper-section">
                <article className="container">
                    <div className="section-wrapper" style={{ "--total-count": totalSteps.length }}>
                        {totalSteps.map((data, index) => (
                            <div className="single-steps-wrapper">
                                {index === 0 ? "" : <div className="hr-line"></div>}
                                <div className="single-steps" onClick={() => checkingSteps[data.id] && setFormStepId(data?.id)}>
                                    <span className="img-wrapper">
                                        <div className={`${formStepId === data.id ? "active" : ""} ${checkingSteps[data.id] ? "active" : ""}`}>
                                            <InlineIcon icon={data?.icon} />
                                        </div>
                                    </span>
                                    <span className="label">
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
