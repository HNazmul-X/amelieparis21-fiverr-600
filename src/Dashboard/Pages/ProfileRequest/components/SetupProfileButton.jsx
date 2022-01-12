import React from "react";
import SectionTitle from "./SectionTitle";
import { useState } from "react";
import { useProfileContext } from "../../../../Context/ProfileTemplateContext";

function SetupProfileButton({ open, handelOpen, title, setIconPopupShow }) {
    const profileContext = useProfileContext();
    const [buttonText, setButtonText] = useState("");
    const [buttonLink, setButtonLink] = useState("");
    const [err, setErr] = useState([]);

    const handelChange = (data) => {
        const name = data.target.name;
        const value = data.target.value;
        if (err === name) {
            setErr("");
        }

        if (name === "buttonText") setButtonText(value);
        if (name === "buttonLink") return setButtonLink(value);
    };

    const handelSubmit = (e) => {
        e.preventDefault();

        if (!buttonText) return setErr("buttonText");
        if (!buttonLink) return setErr("buttonLink");

        profileContext.setButtonInfo((prev) => {
            return {
                ...prev,
                info: {
                    text: buttonText,
                    link: buttonLink,
                },
            };
        });
    };

    return (
        <div className="setup-profile-button-info db-template">
            <SectionTitle title={title} handelOpen={handelOpen} open={open} />
            <div className={`${open.includes(title) ? "d-block open-div" : "d-none"} ${title === "Setup Profile Button info" ? "setup-profile-button-info-area" : ""}`}>
                <div>
                    <div className="preview-btn">
                        <button>{buttonText || "Preivew Text"}</button>
                    </div>
                    <form onSubmit={handelSubmit}>
                        <div className="w-100 form-floating mb-3">
                            <input
                                value={buttonText}
                                onChange={(e) => handelChange(e)}
                                type="text"
                                className="form-control primary-input"
                                id="btnText"
                                name="buttonText"
                                placeholder="Type Button Text"
                            />
                            <label htmlFor="btnText">Type Button Text</label>
                            {err === "buttonText" && <p className="mb-0 text-center text-danger">Button Text Required</p>}
                        </div>
                        <div className="w-100 form-floating mb-3">
                            <input value={buttonLink} onChange={(e) => handelChange(e)} type="text" name="buttonLink" className="form-control primary-input" id="btnLink" placeholder="Button Link" />
                            <label htmlFor="btnText">Type Button Text</label>
                            {err === "buttonLink" && <p className="mb-0 text-center text-danger">Button Text Required</p>}
                        </div>
                        <div className="submit-btn">
                            <button type={"submit"}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SetupProfileButton;
