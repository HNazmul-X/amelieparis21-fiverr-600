import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useProfileContext } from "../../../../Context/ProfileTemplateContext";
import SectionTitle from "./SectionTitle";

function SetUpPersonalInformation({ open, handelOpen, title }) {
    const { setUserInfo, userInfo, setIconAndTextColor } = useProfileContext();
    const [textColor, setTextColor] = useState("");
    const { register, handleSubmit } = useForm();
    const submitUserData = (data) => {
        data.tags = data?.tags.split(",");
        setUserInfo((prev) => {
            return { ...prev, ...data };
        });
        setIconAndTextColor((prev) => {
            return {
                ...prev,
                text: textColor,
            };
        });
    };

    const handleChangeTextColor = (e) => {
        setTextColor(e.target.value);
    };

    return (
        <div className="db-template setup-persona-information">
            <SectionTitle title={title} handelOpen={handelOpen} open={open} />
            <div className={`${open.includes(title) ? "d-block open-div" : "d-none"}`}>
                <form onSubmit={handleSubmit(submitUserData)}>
                    <div className={`template-img-wrapper`}>
                        <div className="w-100 form-floating mb-3">
                            <input {...register("name")} type="text" defaultValue={userInfo?.name} className="form-control unFatty-input" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Titre ou nom  </label>
                        </div>
                        <div className="w-100 form-floating mb-3">
                            <input {...register("tagline")} type="text" defaultValue={userInfo?.tagline} className="form-control primary-input" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Sous-titre</label>
                        </div>
                        <div className="w-100 form-floating mb-3">
                            <textarea
                                {...register("about")}
                                rows="4"
                                defaultValue={userInfo?.about}
                                className="form-control primary-input text-area"
                                id="floatingInput"
                                placeholder="name@example.com"></textarea>
                            <label htmlFor="floatingInput">À propos</label>
                        </div>
                        <div className="w-100 form-floating mb-3">
                            <input {...register("tags")} type="text" defaultValue={userInfo?.tags.join()} className="form-control primary-input" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">
                            Mots clés <small>(mettre une virgule entre les mots)</small>
                            </label>
                        </div>
                        <div className="w-100 form-floating mb-3">
                            <input
                                {...register("address")}
                                defaultValue={userInfo?.address}
                                type="text"
                                className="form-control primary-input"
                                id="floatingInput_address"
                                placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInput_address">Adresse *</label>
                        </div>
                        <div className="text-end d-flex justify-content-between align-items-center">
                            <div className="w-50 me-2">
                                <input onChange={handleChangeTextColor} defaultValue={"#255ed1"} type="color" className="form-control p-0" name="" id="" />
                                <strong className="w-100 text-center d-block small">Couleur du texte  </strong>
                            </div>
                            <button className="btn text-white bg-primary-500 px-4  rounded-pill">Aperçu
</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SetUpPersonalInformation;
