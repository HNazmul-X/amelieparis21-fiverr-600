import React from "react";
import SectionTitle from "./SectionTitle";
import { useState } from "react";
import { useProfileContext } from "../../../../Context/ProfileTemplateContext";

function SetupProfileButton({ open, handelOpen, title, setIconPopupShow }) {
    const profileContext = useProfileContext();
    const [buttonText, setButtonText] = useState("");
    const [buttonLink, setButtonLink] = useState("");
    const [err, setErr] = useState([]);
    const [buttonDesign, setButtonDesign] = useState({background: "", color: "", shadow: ""});

    const handelChange = (data) => {
        const name = data.target.name;
        const value = data.target.value;
        if (err === name) {
            setErr("");
        }

        if (name === "buttonText") setButtonText(value);
        if (name === "buttonLink") return setButtonLink(value);

        // 
        if (data.target.name === "background") setButtonDesign({...buttonDesign, background: data.target.value});
        if (data.target.name === "color") setButtonDesign({...buttonDesign, color: data.target.value});
        if (data.target.name === "shadow") setButtonDesign({...buttonDesign, shadow: data.target.value});
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
                colors: {
                    bg: buttonDesign.background,
                    color: buttonDesign.color,
                    shadow: buttonDesign.shadow,
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
                        <button style={{background: `${buttonDesign.background}`, color: `${buttonDesign.color}`, boxShadow: `0px 0px 5px ${buttonDesign.shadow}`}}>{buttonText || "Preivew Text"}</button>
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
                            <label htmlFor="btnText">Type Button Link</label>
                            {err === "buttonLink" && <p className="mb-0 text-center text-danger">Button Text Required</p>}
                        </div>

                        <div className="d-flex justify-content-between gap-4 align-items-center px-3 py-2">
                            <div className="text-center w-100">
                                <input style={{width: "100%"}} type="color"  onChange={(e) => handelChange(e)} value={buttonDesign.background} name="background" /><br />
                                <label style={{transform: "translateX(0)"}} htmlFor="">BackGround</label>
                            </div>
                            
                            <div className="text-center w-100">
                                <input style={{width: "100%"}} type="color"  onChange={(e) => handelChange(e)} value={buttonDesign.color} name="color" /><br />
                                <label style={{transform: "translateX(0)"}} htmlFor="">Color</label>
                            </div>
                            
                            <div className="text-center w-100">
                                <input style={{width: "100%"}} type="color"  onChange={(e) => handelChange(e)} value={buttonDesign.shadow} name="shadow" /><br />
                                <label style={{transform: "translateX(0)"}} htmlFor="">Shadow</label>
                            </div>
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
