import React from "react";
import SectionTitle from "./SectionTitle";
import { InlineIcon } from "@iconify/react";
import { useProfileContext } from "../../../../Context/ProfileTemplateContext";
import { useForm } from "react-hook-form";

function SetupSocialLink({ open, handelOpen, title, setIconPopupShow }) {
    const { socialLinks, setUserInfo, userInfo } = useProfileContext();

    const submitSocialLink = (e) => {
        e.preventDefault();
        console.log(e.target.elements);
        const createdArray = [...e.target.elements]
            .filter((data) => data.tagName === "INPUT" && data.value !== "")
            .map((data) => {
                return { name: data.getAttribute("name"), link: data.value, _id: data?.getAttribute("data-id") };
            });
        setUserInfo((prev) => {
            return { ...prev, links: createdArray };
        });
    };

    return (
        <div className="setup-social-link db-template">
            <SectionTitle title={title} handelOpen={handelOpen} open={open} />
            <div className={`${open.includes(title) ? "d-block open-div" : "d-none"} ${title === "Setup Social Link" ? "setup-scail-area" : ""}`}>
                <div className={``}>
                    <div className="social-icon-wrapper">
                        {socialLinks?.map((data, index) => (
                            <div className="single-icon" key={index}>
                                <a href={data.link} target="_blank">
                                    {data.icon}
                                </a>
                            </div>
                        ))}
                        <div onClick={() => setIconPopupShow(true)} className="single-icon add-icon-container">
                            <InlineIcon className="add-icon" icon={"ant-design:plus-outlined"} />
                        </div>
                    </div>
                    <div className="socail-link-box">
                        <form onSubmit={submitSocialLink}>
                            <div className="row row-cols-2 w-100">
                                {socialLinks?.map((data) => {
                                    return (
                                        <div className="col p-1 mb-3">
                                            <div className=" form-floating">
                                                <input
                                                    name={data.name}
                                                    data-id={data?.id}
                                                    defaultValue={userInfo?.links?.find((icon) => icon.name === data.name)?.link || ""}
                                                    type="text"
                                                    className="form-control primary-input"
                                                    id={data?.id}
                                                    placeholder="name@example.com"
                                                    required={true}
                                                />
                                                <label htmlFor={data.id}>{data?.name}</label>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="text-end">
                                <button type="submit">Submit Data</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SetupSocialLink;
