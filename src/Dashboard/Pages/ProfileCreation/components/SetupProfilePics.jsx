import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { InlineIcon } from "@iconify/react";
import { useProfileContext } from "../../../../Context/ProfileTemplateContext";
import swal from "@sweetalert/with-react";

function SetupProfilePics({ open, handelOpen, title }) {
    const { setUserPics, userPics } = useProfileContext();

    const handelLogoupload = async (e) => {
        const file = e.target.files[0];
        console.log(e.target);

        /* file reader function */
        const readingFile = (bufferFile) => {
            return new Promise((resolve, reject) => {
                const fileReader = new FileReader();
                fileReader.addEventListener("load", function (e) {
                    if (this.result) {
                        resolve(fileReader.result);
                    } else {
                        reject("file is not found");
                    }
                });
                fileReader.readAsDataURL(bufferFile);
            });
        };

        if (file.size > 1024 * 1024 * 2) {
            return swal("File is Large", "File Size cannot be greater then 2mb", "error");
        } else {
            console.log(e.target.name);
            if (e.target.name === "profile") {
                const profilePicData = await readingFile(file);
                
                setUserPics((value) => {
                    console.log(value, profilePicData);
                    return { ...value, profile: { dataURL: profilePicData, file: file } };
                });
            } else if (e.target.name === "cover") {
                const coverPicData = await readingFile(file);
                setUserPics((value) => {
                    console.log(value, coverPicData);
                    return { ...value, cover: { dataURL: coverPicData, file: file } };
                });
            }
        }
        e.target.value = "";
    };
    return (
        <div className="select-profile-link db-template">
            <SectionTitle title={title} handelOpen={handelOpen} open={open} />
            <div className={`${open.includes(title) ? "d-block open-div" : "d-none "}`}>
                <div className="uplaod-area">
                    <div className={`upload-logo ${userPics.profile.dataURL ? "image_loaded" : ""}`}>
                        <label className={`upload-box text-center`} htmlFor="upload">
                            {!userPics.profile.dataURL ? (
                                <>
                                    {" "}
                                    <InlineIcon icon="iconoir:profile-circled" />
                                    <p>
                                        <span>Upload</span> Profile Picture
                                    </p>
                                </>
                            ) : (
                                <img src={userPics.profile.dataURL} alt="" className="uploaded_logo" />
                            )}
                        </label>
                        <input
                            className="d-none"
                            onClick={function (e) {
                                console.log((e.target.value = null));
                            }}
                            onChange={handelLogoupload}
                            name="profile"
                            type="file"
                            id="upload"
                        />
                    </div>
                    <div className={`upload-cover ${userPics.cover.dataURL ? "image_loaded" : ""}`}>
                        <label className={`upload-box text-center`} htmlFor="uploadCover">
                            {!userPics.cover.dataURL ? (
                                <>
                                    {" "}
                                    <InlineIcon icon="iconoir:profile-circled" />
                                    <p>
                                        <span>Upload</span> Profile Picture
                                    </p>
                                </>
                            ) : (
                                <img src={userPics.cover.dataURL} alt="" className="uploaded_logo" />
                            )}
                        </label>
                        <input
                            className="d-none"
                            onClick={function (e) {
                                console.log((e.target.value = null));
                            }}
                            onChange={handelLogoupload}
                            name="cover"
                            type="file"
                            id="uploadCover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SetupProfilePics;
