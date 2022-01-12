import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import SelectProfileTemplate from "./SelectProfileTemplate";
import SetUpPersonalInformation from "./SetUpPersonalInformation";
import SetupSocialLink from "./SetupSocialLink";
import SocialLinkSelection from "./SocialLinkSelection";
import SetupProfilePics from "./SetupProfilePics";
import { useProfileContext } from "../../../../Context/ProfileTemplateContext";
import SetupProfileButton from "./SetupProfileButton";
import swal from "@sweetalert/with-react";
import { useNavigate, useParams } from "react-router-dom";
import { SecureFetch } from "../../../../Util/SecureFetch";
import { useAuth } from "../../../../Context/UserContext";

function LeftSide() {
    // const Variables
    const profileContext = useProfileContext();
    const [open, setOpen] = useState([]);
    const [templatedUser, setTemplatedUser] = useState({});
    const [iconPopupShow, setIconPopupShow] = useState(true);
    const [selectedIcon, setSelectedIcon] = useState([]);
    const [error, setError] = useState({});
    const { profileId } = useParams();
    const navigate = useNavigate();

    // useEffects
    useEffect(async () => {
        const x = await SecureFetch.get(`http://localhost:8080/api/user/get-user-by-profileId/${profileId}?select=_id`);
        setTemplatedUser(x);
        if (!x.user?.profileTemplate) {
            resetProfileContext();
        }
    }, []);

    //handling collapse one and Off
    const handelOpen = (data) => {
        if (open.includes(data)) {
            const newOpen = open.filter((el) => el !== data);
            setOpen(newOpen);
        } else {
            setOpen([...open, data]);
        }
    };

    // handle canceling the profile template
    const handleCancelProfileCreation = () => {
        swal({
            title: "Are you Sure to Discard",
            icon: "info",
            buttons: {
                cancel: "no",
                defeat: "Yes",
            },
        }).then((value) => {
            if (value === "defeat") {
                resetProfileContext();

                navigate("/admin/profile-request/all-user-profile", { replace: true });
            } else {
                swal.close();
            }
        });
    };

    // making profile context default
    const resetProfileContext = () => {
        profileContext?.setButtonInfo({});
        profileContext?.setProfileTemplateId("");
        profileContext?.setSocialLinks([]);
        profileContext?.setUserInfo({
            name: "",
            tags: [],
            tagline: "",
            about: "",
            address: "",
            links: [],
        });

        profileContext?.setUserPics({
            profile: {
                dataURL: "",
                file: null,
            },
            cover: {
                dataURL: "",
                file: null,
            },
        });
        profileContext.setButtonInfo({
            info: {
                text: "",
                link: "",
            },
            colors: {
                bg: "",
                color: "",
                shadow: "",
            },
        });
    };

    //handle creating Profile
    const handleProfileCreation = async () => {
        error.profileTemplate = profileContext.profileTemplateId ? null : "Please Select a Profile template";
        error.profilePics = profileContext?.userPics?.profile?.file || profileContext?.userPics?.cover?.file ? null : "please upload profile pic and cover photo";
        error.buttonInfo = profileContext?.buttonInfo?.info?.text || profileContext?.buttonInfo?.info?.link ? null : "please Fill up Button information";
        setError({ ...error });

        if (Object.values(error).filter((item) => item).length > 0) {
            swal({
                title: "please Fill up All Contect",
                icon: "error",
                content: (
                    <ol className="text-start">
                        {Object.values(error)
                            .filter((item) => item)
                            .map((item) => (
                                <li className="small text-danger">{item} </li>
                            ))}
                    </ol>
                ),
            });
        } else {
            try {
                const imageFormData = new FormData();
                imageFormData.append("coverPic", profileContext?.userPics?.cover?.file);
                imageFormData.append("profilePic", profileContext?.userPics?.profile?.file);
                const data = await SecureFetch.post(`http://localhost:8080/api/profile-template/upload-template-images`, imageFormData);
                if (data.error) {
                    swal("Error", data?.error, "error");
                } else {
                    const userInfo = { ...profileContext?.userInfo };
                    delete userInfo.links;
                    const templateDataGathering = {
                        user: `${templatedUser._id}`,
                        templateName: profileContext.profileTemplateId,
                        photos: {
                            profile: data?.profilePic,
                            cover: data?.coverPic,
                        },
                        socialsLinks: [...profileContext?.userInfo?.links],
                        personalInfo: {
                            ...userInfo,
                        },
                        mainButton: {
                            text: profileContext?.buttonInfo?.info?.text || "",
                            link: profileContext?.buttonInfo?.info?.link || "",
                        },
                    };
                    const returnedData = await SecureFetch.post(`http://localhost:8080/api/profile-template/create-profile-template/${templatedUser?.user?._id}`, templateDataGathering);

                    if (returnedData.error) {
                        swal("Failed To create Template", returnedData.error, "error");
                    } else {
                        console.log(returnedData);
                        swal("Template Creation Successfully", "", "success");
                    }
                }
            } catch (e) {
                swal("Error Ocurred", e.message, "error");
            }
        }
    };

    return (
        <>
            <div className="left-side-container db-template">
                <SelectProfileTemplate handelOpen={handelOpen} open={open} title={"Select Your Profile Template"} />
                <SetupProfilePics handelOpen={handelOpen} open={open} title={"Setup Profile Link"} />
                <SetUpPersonalInformation handelOpen={handelOpen} open={open} title={"Setup Personal Information"} />
                <SetupSocialLink setIconPopupShow={setIconPopupShow} handelOpen={handelOpen} open={open} title={"Setup Social Link"} />
                <SetupProfileButton setIconPopupShow={setIconPopupShow} handelOpen={handelOpen} open={open} title={"Setup Profile Button info"} />
                <div className="text center d-flex justify-content-evenly">
                    {!templatedUser?.user?.profileTemplate ? (
                        <>
                            <button onClick={handleCancelProfileCreation} className="btn btn-danger rounded-pill btn-lg px-5 cancel">
                                Cancel
                            </button>
                            <button onClick={handleProfileCreation} className="create-profile btn btn-primary rounded-pill btn-lg px-5">
                                Create Profile
                            </button>
                        </>
                    ) : (
                        <>
                            <button onClick={alert.bind(this, "haahahahha")} className="btn btn-danger rounded-pill btn-lg px-5 cancel">
                                Delete
                            </button>
                            <button onClick={alert.bind(this, "haahahahha")} className="create-profile btn btn-primary rounded-pill btn-lg px-5">
                                Updated
                            </button>
                        </>
                    )}
                </div>
            </div>
            {iconPopupShow ? <SocialLinkSelection selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon} onClose={() => setIconPopupShow(!iconPopupShow)} /> : null}
        </>
    );
}

export default LeftSide;
