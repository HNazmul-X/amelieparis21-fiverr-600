import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useProfileContext } from "../../../../Context/ProfileTemplateContext";
import SectionTitle from "./SectionTitle";

function SetUpPersonalInformation({ open, handelOpen, title }) {
    const { setUserInfo } = useProfileContext();
    const { register, handleSubmit } = useForm();
    const submitUserData = (data) => {
        console.log(data);
        setUserInfo((prev) => {
            return { ...prev, ...data };
        });
    };

    return (
        <div className="db-template setup-persona-information">
            <SectionTitle title={title} handelOpen={handelOpen} open={open} />
            <div className={`${open.includes(title) ? "d-block open-div" : "d-none"}`}>
                <form onSubmit={handleSubmit(submitUserData)}>
                    <div className={`template-img-wrapper`}>
                        <div className="w-100 form-floating mb-3">
                            <input {...register("name")} type="text" className="form-control unFatty-input" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Name</label>
                        </div>
                        <div className="w-100 form-floating mb-3">
                            <input {...register("tagline")} type="text" className="form-control primary-input" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Tagline</label>
                        </div>
                        <div className="w-100 form-floating mb-3">
                           <textarea {...register("about")} rows="4" className="form-control primary-input text-area" id="floatingInput" placeholder="name@example.com"></textarea>
                            <label htmlFor="floatingInput">About</label>
                        </div> 
                        <div className="w-100 form-floating mb-3">
                            <input {...register("tags")} type="text" className="form-control primary-input" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">
                                tags <small>(must be comma separated)</small>
                            </label>
                        </div>
                        <div className="w-100 form-floating mb-3">
                            <input {...register("address")} type="text" className="form-control primary-input" id="floatingInput_address" placeholder="name@example.com" />
                            <label htmlFor="floatingInput_address">Address</label>
                        </div>
                        <div className="text-end">
                            <button className="btn text-white bg-primary-500 px-4 rounded-pill">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SetUpPersonalInformation;
