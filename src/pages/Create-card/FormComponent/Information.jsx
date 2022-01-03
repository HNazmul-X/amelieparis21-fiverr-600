import React, { useCallback, useContext, useState } from "react";
import { InlineIcon } from "@iconify/react";
import { CreateCardPageContext } from "../CreateCardPage";
import { FormStepsData } from "../../../data/FormStepData";

function Information({ componentIndex }) {
    const { cardLogo, setCardLogo, checkingSteps, cardFiles, setCardFiles, setFormStepId, setCheckingSteps } = useContext(CreateCardPageContext);
    const textAlignData = ["left", "center", "right"];

    const handleChangeCheckbox = (data) => {
        cardLogo.back.infoAlign = data;
        setCardLogo({ ...cardLogo });
    };

    const handleFileUpload = useCallback((e) => {
        const reader = new FileReader();
        reader.addEventListener("load", function () {
            cardLogo.back.logo = this.result;
            setCardLogo({ ...cardLogo });
            setCardFiles({ ...cardFiles, backside: e.target.files[0] });

            if (cardLogo?.back?.logo?.length > 0) {
                setTimeout(() => {
                    checkingSteps.step4 = true;
                    setCheckingSteps({ ...checkingSteps });
                });
            }
        });

        reader.readAsDataURL(e.target.files[0]);
    }, []);

    const handleScalingLogo = (e) => {
        cardLogo.back.scale = e.target.value / 100;
        setCardLogo({ ...cardLogo });
    };
    const handleChangingStep = function () {
        if (checkingSteps?.step4) {
            setFormStepId(FormStepsData[componentIndex + 1]?.id);
        }
    };

    return (
        <div className="upload-your-logo-section">
            <h2 className="mb-3">Additional Information</h2>
            <p className="mb-2rem">Indicative data: the information will be replaced by the data provided in the collaborator file.</p>
            <div className="mb-5">
                <div>
                    <label className={`upload-box ${cardLogo?.back?.logo === "" ? "" : "img-uploaded"}`} htmlFor="upload">
                        {cardLogo?.back?.logo ? (
                            <img src={cardLogo?.back?.logo} alt="" className="uploaded_image" />
                        ) : (
                            <>
                                <InlineIcon icon="uil:image-upload" />
                                <h5>Upload your Logo</h5>
                                <p className="small-text">JPG or PNG</p>
                            </>
                        )}
                    </label>
                    <input onChange={handleFileUpload} className="d-none" type="file" id="upload" />
                </div>
            </div>
            <div className="text_aliagn ">
                <p className="align_title">Text Alignment</p>
                <div className="d-flex gap-20">
                    {textAlignData.map((data, index) => {
                        return (
                            <div key={index} className="form-check">
                                <input
                                    className="form-check-input check_box"
                                    type="checkbox"
                                    value={data}
                                    id={data}
                                    checked={data === cardLogo?.back?.infoAlign}
                                    onChange={() => handleChangeCheckbox(data)}
                                />
                                <label className="form-check-label check_box_label" for={data}>
                                    {data}
                                </label>
                            </div>
                        );
                    })}
                </div>
            </div>
            <p className="logo_size mb-2">logo size</p>
            <div>
                <input type="range" defaultValue={100} max={200} onChange={handleScalingLogo} id="slider" />
            </div>
            <div className="mt-5">
                <button className="my-btn-primary me-3">Return</button>
                <button onClick={handleChangingStep} disabled={!checkingSteps?.step4} className={`my-btn-primary ${!checkingSteps?.step4 ? "opacity-50" : ""}`}>
                    Following
                </button>
            </div>
        </div>
    );
}

export default Information;
