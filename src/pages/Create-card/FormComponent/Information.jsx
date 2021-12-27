import React, { useContext, useState } from "react";
import { InlineIcon } from "@iconify/react";
import { CreateCardPageContext } from "../CreateCardPage";

function Information() {
    const { cardLogo, setCardLogo } = useContext(CreateCardPageContext);
    const textAlignData = ["left", "center", "right"];
    const [selectedAlignment, setSelectedAlignment] = useState("Center");

    const handleChangeCheckbox = (data) => {
        setSelectedAlignment(data);
        cardLogo.back.infoAlign = data;
        setCardLogo({...cardLogo});
    };

    const handleFileUpload = (e) => {
        const reader = new FileReader();
        reader.addEventListener("load", function () {
            cardLogo.back.logo = this.result;
            setCardLogo({ ...cardLogo });
        });

        reader.readAsDataURL(e.target.files[0]);
    };

    const handleScalingLogo = (e) => {
        cardLogo.back.scale = e.target.value / 100;
        setCardLogo({ ...cardLogo });
    };


    return (
        <div className="upload-your-logo-section">
            <h2 class="mb-3">Additional Information</h2>
            <p className="mb-2rem">Indicative data: the information will be replaced by the data provided in the collaborator file.</p>
            <div class="mb-5">
                <div>
                    <label class={`upload-box ${cardLogo?.back?.logo === "" ? "" : "img-uploaded"}`} htmlFor="upload">
                        {cardLogo?.back?.logo ? (
                            <img src={cardLogo?.back?.logo} alt="" className="uploaded_image" />
                        ) : (
                            <>
                                <InlineIcon icon="uil:image-upload" />
                                <h5>Upload your Logo</h5>
                                <p class="small-text">JPG or PNG</p>
                            </>
                        )}
                    </label>
                    <input onChange={handleFileUpload} class="d-none" type="file" id="upload" />
                </div>
            </div>
            <div className="text_aliagn ">
                <p className="align_title">Text Alignment</p>
                <div className="d-flex gap-20">
                    {textAlignData.map((data, index) => (
                        <div key={index} className="form-check">
                            <input className="form-check-input check_box" type="checkbox" value={data} id={data} checked={data === selectedAlignment} onChange={() => handleChangeCheckbox(data)} />
                            <label class="form-check-label check_box_label" for={data}>
                                {data}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            <p className="logo_size mb-2">logo size</p>
            <div>
                <input type="range" defaultValue={100} max={200} onChange={handleScalingLogo} id="slider" />
            </div>
            <div class="mt-5">
                <button class="my-btn-primary me-3">Return</button>
                <button class="my-btn-primary">Following</button>
            </div>
        </div>
    );
}

export default Information;
