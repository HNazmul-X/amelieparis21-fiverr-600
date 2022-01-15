import React from "react";

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


        const res = await fetch("https://onecard-pro.herokuapp.com/playground/upload", {
            method: "POST",
            body: formData,
        });
        const data = await res.json();
        console.log(data);
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
