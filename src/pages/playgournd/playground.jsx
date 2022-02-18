import React from "react";
import { apiBaseURL } from "../../Util/API_Info";

const PlayGround = () => {
    //target the element and set submit event

    //event function
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataArray = [...e.currentTarget.elements].filter((ele) => ele.type !== "submit");
        const Obj = {};
        formDataArray.forEach((ele) => {
            Obj[ele.name] = ele.type === "file" ? ele.files : ele.value;
        });
        const formData = new FormData();
        formData.append("profilePic", Obj.profilePic[0]);
        formData.append("coverPic", Obj.coverPic[0]);

        const res = await fetch(`${apiBaseURL}/playground/upload`, {
            method: "POST",
            body: formData,
        });
        const data = await res.json();
    };

    return (
        <div className="container pt-5">
            <div className="p-5 alert-dark">
                <form action="" onSubmit={handleSubmit}>
                    <input type="file" className="form-control mb-2" name="profilePic" id="" />

                    <input type="file" className="form-control mb-2" name="coverPic" id="" />
                    <input type={"submit"} />
                </form>
            </div>
        </div>
    );
};

export default PlayGround;
