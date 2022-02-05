import React, { useCallback, useContext, useState } from "react";
import { InlineIcon } from "@iconify/react";
import { CreateCardPageContext } from "../CreateCardPage";
import { FormStepsData } from "../../../data/FormStepData";

function UploadYourLogo({ componentIndex }) {
    const { setCardLogo, checkingSteps, setFormStepId, setCheckingSteps, cardFiles, setCardFiles, cardLogo } = useContext(CreateCardPageContext);

    const handleScalingLogo = (e) => {
        cardLogo.front.scale = e.target.value / 100;
        setCardLogo({ ...cardLogo });
    };

    const handleFileUpload = useCallback((e) => {
        const reader = new FileReader();
        reader.addEventListener("load", function () {
            cardLogo.front.logo = this.result;
            setCardLogo({ ...cardLogo });
            setCardFiles({ ...cardFiles, frontSide: e.target.files[0] });

            if (cardLogo?.front?.logo?.length > 0) {
                setTimeout(() => {
                    checkingSteps.step3 = true;
                    setCheckingSteps({ ...checkingSteps });
                });
            }
        });

        reader.readAsDataURL(e.target.files[0]);
    }, []);

    const handleChangingStep = function () {
        if (checkingSteps?.step3) {
            setFormStepId(FormStepsData[componentIndex + 1]?.id);
        }
    };

    return (
        <div className="upload-your-logo-section">
            <h2 className="mb-3">Logo Import</h2>
            <p className="mb-2rem">PLEASE NOTE: for black and wood cards, your logo will be monochrome.</p>
            <div className="mb-5">
                <div>
                    <label className={`upload-box ${cardLogo?.front.logo === "" ? "" : "img-uploaded"}`} htmlFor="upload">
                        {cardLogo?.front?.logo ? (
                            <img src={cardLogo?.front.logo} alt="" className="uploaded_image" />
                        ) : (
                            <>
                                <InlineIcon icon="uil:image-upload" />
                                <h5>Upload your Logo</h5>
                                <p className="small-text">JPG or PNG</p>
                            </>
                        )}
                    </label>
                    <input className="d-none" onChange={handleFileUpload} type="file" id="upload" />
                </div>
            </div>
            <p className="logo_size text-decoration-none mb-2">
                <span>logo size</span> <span className=" text-primary-500 fw-bolder ms-auto">{cardLogo?.front.scale}</span>
            </p>
            <div>
                <input type="range" onChange={handleScalingLogo} defaultValue={100} max={400} id="slider" />
            </div>
            <div className="mt-5">
                <button className="my-btn-primary me-3">Return</button>
                <button onClick={handleChangingStep} disabled={!checkingSteps?.step3} className={`my-btn-primary ${!checkingSteps?.step3 ? "opacity-50" : ""}`}>
                    Following
                </button>
            </div>
        </div>
    );
}

export default UploadYourLogo;
