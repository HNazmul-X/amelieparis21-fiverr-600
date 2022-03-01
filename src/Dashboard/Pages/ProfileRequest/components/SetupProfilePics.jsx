import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { InlineIcon } from "@iconify/react";
import { useProfileContext } from "../../../../Context/ProfileTemplateContext";
import swal from "@sweetalert/with-react";
import { apiBaseURL } from "../../../../Util/API_Info";
import { SecureFetch } from "../../../../Util/SecureFetch";

function SetupProfilePics({ open, handelOpen, title, templatedUser }) {
    const { setUserPics, userPics } = useProfileContext();

    //==============================================
    // reading and Setting file to Profile Context
    //==============================================
    const handelLogoupload = async (e) => {
        try {
            const file = e.target.files[0];

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
                if (e.target.name === "profile") {
                    const profilePicData = await readingFile(file);
                    const formData = new FormData();
                    formData.append("profilePic", file);

                    if (!userPics?.profile?.dataURL.startsWith(apiBaseURL)) {
                        setUserPics((value) => {
                            return { ...value, profile: { dataURL: profilePicData, file: file } };
                        });
                    } else {
                        SecureFetch.post(`${apiBaseURL}/api/profile-template/update-img/profile/${templatedUser?.user?.profileTemplate}`, formData)
                            .then((data) => {
                                setUserPics({
                                    ...userPics,
                                    profile: {
                                        dataURL: `${apiBaseURL}${data}`,
                                    },
                                });
                            })
                            .catch((err) => swal("error", e.message, "error"));
                    }
                } else if (e.target.name === "cover") {
                    const coverPicData = await readingFile(file);
                    const formData = new FormData();
                    formData.append("coverPic", file);

                    if (!userPics?.cover?.dataURL.startsWith(apiBaseURL)) {
                        setUserPics((value) => {
                            return { ...value, cover: { dataURL: coverPicData, file: file } };
                        });
                    } else {
                        SecureFetch.post(`${apiBaseURL}/api/profile-template/update-img/cover/${templatedUser?.user?.profileTemplate}`, formData)
                            .then((data) => {
                                setUserPics({
                                    ...userPics,
                                    cover: {
                                        dataURL: `${apiBaseURL}${data}`,
                                    },
                                });
                            })
                            .catch((err) => swal("error", err.message, "error"));
                    }
                }
            }
            e.target.value = "";
        } catch (e) {
            swal("error", e.message, "error");
        }
    };

    return (
        <div className="select-profile-link db-template">
            <SectionTitle title={title} handelOpen={handelOpen} open={open} />
            <div className={`${open.includes(title) ? "d-block open-div" : "d-none "}`}>
                <div className="uplaod-area">
                    <div className={`upload-logo ${userPics.profile?.dataURL ? "image_loaded" : ""}`}>
                        <label className={`upload-box text-center`} htmlFor="upload">
                            {!userPics.profile?.dataURL ? (
                                <>
                                    {" "}
                                    <InlineIcon icon="iconoir:profile-circled" />
                                    <p>
                                        <span>Photo</span> de profil
                                    </p>
                                </>
                            ) : (
                                <img src={userPics.profile?.dataURL} alt="" className="uploaded_logo" />
                            )}
                        </label>
                        <input
                            className="d-none"
                            onChange={handelLogoupload}
                            name="profile"
                            type="file"
                            id="upload"
                        />
                    </div>
                    <div className={`upload-cover ${userPics.cover?.dataURL ? "image_loaded" : ""}`}>
                        <label className={`upload-box text-center`} htmlFor="uploadCover">
                            {!userPics.cover?.dataURL ? (
                                <>
                                    {" "}
                                    <InlineIcon icon="iconoir:profile-circled" />
                                    <p>
                                    <span>Photo</span> de profil
                                    </p>
                                </>
                            ) : (
                                <img src={userPics.cover?.dataURL} alt="" className="uploaded_logo" />
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
