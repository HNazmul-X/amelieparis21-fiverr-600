import React, { useEffect, useState } from "react";
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
import { apiBaseURL } from "../../../../Util/API_Info";

function LeftSide({ setTemplateDataReloader, templateDataReloader }) {
    // const Variables
    const profileContext = useProfileContext();
    const [open, setOpen] = useState([]);
    const [templatedUser, setTemplatedUser] = useState({});
    const [uploadedUserPic, setUploadedUserPic] = useState({});
    const [iconPopupShow, setIconPopupShow] = useState(false);
    const [selectedIcon, setSelectedIcon] = useState([]);
    const [error, setError] = useState({});
    const [spinners, setSpinners] = useState({
        delete: false,
        update: false,
        create: false,
    });
    const { profileId } = useParams();
    const navigate = useNavigate();
    const auth = useAuth();

    // useEffects
    useEffect(async () => {
        const x = await SecureFetch.get(`${apiBaseURL}/api/user/get-user-by-profileId/${profileId}?select=_id`);
        setTemplatedUser(x);
        if (!x.user?.profileTemplate) {
            resetProfileContext();
        }
    }, [templateDataReloader]);

    useEffect(() => {
        setSelectedIcon(profileContext?.socialLinks);
    }, [profileContext?.socialLinks]);

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
    const handleProfileCreation = async (type) => {
        error.profileTemplate = profileContext.profileTemplateId ? null : "Please Select a Profile template";
        error.profilePics = profileContext?.userPics?.profile?.dataURL || profileContext?.userPics?.cover?.dataURL ? null : "please upload profile pic and cover photo";
        error.buttonInfo = profileContext?.buttonInfo?.info?.text || profileContext?.buttonInfo?.info?.link ? null : "please Fill up Button information";
        setError({ ...error });

        if (Object.values(error).filter((item) => item).length > 0) {
            swal({
                title: "please Fill up All Contact",
                icon: "error",
                content: (
                    <ol className="text-start">
                        {Object.values(error)
                            .filter((item) => item)
                            .map((item, index) => (
                                <li key={index} className="small text-danger">
                                    {item}{" "}
                                </li>
                            ))}
                    </ol>
                ),
            });
        } else {
            try {
                const imageFormData = new FormData();
                imageFormData.append("coverPic", profileContext?.userPics?.cover?.file);
                imageFormData.append("profilePic", profileContext?.userPics?.profile?.file);

                //STRUCTURING DATA FOR SAVE TO DATABASE
                const userInfo = { ...profileContext?.userInfo };
                delete userInfo.links;
                const templateDataGathering = {
                    user: `${templatedUser?.user?._id}`,
                    templateName: profileContext.profileTemplateId,
                    colors: {
                        button: {
                            ...profileContext?.buttonInfo.colors,
                        },
                        ...profileContext.iconAndTextColor,
                    },
                    socialLinks: [...profileContext?.userInfo?.links],
                    personalInfo: {
                        ...userInfo,
                    },
                    mainButton: {
                        text: profileContext?.buttonInfo?.info?.text || "",
                    },
                    photos: {
                        cover: profileContext?.userPics.cover.dataURL.split(apiBaseURL)[1],
                        profile: profileContext?.userPics.profile.dataURL.split(apiBaseURL)[1],
                    },
                };

                // if template action type is create
                if (type === "create") {
                    setSpinners((prev) => ({ ...prev, create: true }));
                    const uploadedPics = await SecureFetch.post(`${apiBaseURL}/api/profile-template/upload-template-images`, imageFormData);
                    if (uploadedPics.error) {
                        swal("Error", uploadedPics?.error, "error");
                    }
                    templateDataGathering.photos = {
                        profile: uploadedPics?.profilePic,
                        cover: uploadedPics?.coverPic,
                    };
                }

                // CHECKING RETURNED DATA OR ERROR
                const checkingDataOrError = (r_data, type) => {
                    if (r_data.error) {
                        setSpinners((prev) => ({ ...prev, create: false, update: false, delete: false }));
                        swal("Failed To create Template", r_data.error, "error");
                    } else {
                        setSpinners((prev) => ({ ...prev, create: false, update: false, delete: false }));
                        swal(`Template ${type} Successfully`, "", "success");
                    }
                };

                // SENDING DATA TO SERVER BY DIFFERENCE METHOD
                if (type === "create" && !uploadedUserPic.error) {
                    const r_data = await SecureFetch.post(`${apiBaseURL}/api/profile-template/create-profile-template/${templatedUser?.user?._id}`, templateDataGathering);
                    checkingDataOrError(r_data, "Creation");
                    setTemplateDataReloader(Math.random());
                } else if (type === "update") {
                    setSpinners((prev) => ({ ...prev, update: true }));
                    const r_data = await SecureFetch.post(`${apiBaseURL}/api/profile-template/updated-profileTemplate/${templatedUser?.user?.profileTemplate}`, templateDataGathering);
                    checkingDataOrError(r_data, "Update");
                }
            } catch (e) {
                setSpinners((prev) => ({ ...prev, create: false, update: false, delete: false }));
                swal("Error Ocurred", e.message, "error");
            }
        }
    };

    //handle deleting Profile
    const handleDeletingProfile = (id, userId) => {
        setSpinners((prev) => ({ ...prev, delete: true }));
        swal({
            title: "Confirmation",
            text: "Are You Sure to Delete This Profile",
            icon: "info",
            buttons: ["No", "yes"],
        }).then(async (value) => {
            if (value) {
                setSpinners((prev) => ({ ...prev, delete: true }));
                const r_data = await SecureFetch.post(`${apiBaseURL}/api/profile-template/delete-profile-template`, { templateId: id, userId });
                if (r_data.success) {
                    swal("Done", "successfully Delete the Profile", "success").then(() => {
                        setTemplateDataReloader(Math.random());
                        navigate("/admin/profile-request/all-user-profile");
                    });
                    setSpinners((prev) => ({ ...prev, create: false, update: false, delete: false }));
                } else {
                    setSpinners((prev) => ({ ...prev, create: false, update: false, delete: false }));
                    swal("Failed", r_data.error, "error");
                }
            } else {
                setSpinners((prev) => ({ ...prev, create: false, update: false, delete: false }));
            }
        });
    };

    return (
        <>
            <div className="left-side-container db-template">
                <SelectProfileTemplate handelOpen={handelOpen} open={open} title={"Sélectionnez votre design : "} />
                <SetupProfilePics templatedUser={templatedUser} handelOpen={handelOpen} open={open} title={"Configurez  vos images de profil :"} />
                <SetUpPersonalInformation handelOpen={handelOpen} open={open} title={"Configurez les informations personnelles :"} />
                <SetupSocialLink setIconPopupShow={setIconPopupShow} handelOpen={handelOpen} open={open} title={"Configurez les liens : "} />
                <SetupProfileButton setIconPopupShow={setIconPopupShow} handelOpen={handelOpen} open={open} title={"Configurer le bouton  Ajouter aux contacts "} />
                <div className="text center d-flex justify-content-evenly">
                    {!templatedUser?.user?.profileTemplate ? (
                        <>
                            <button onClick={handleCancelProfileCreation} className="btn btn-danger rounded-pill btn-lg px-5 cancel">
                                Annuler
                            </button>
                            <button onClick={() => handleProfileCreation("create")} className="create-profile btn btn-primary flex align-items-center fs-6 rounded-pill  btn-lg px-4">
                                {spinners.create && (
                                    <div className="spinner-border spinner-border-sm me-2" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                )}
                                Créez votre carte numérique
                            </button>
                        </>
                    ) : (
                        <>
                            {auth?.user?.isAdmin && (
                                <button
                                    onClick={() => handleDeletingProfile(templatedUser?.user?.profileTemplate, templatedUser?.user?._id)}
                                    className="btn btn-danger rounded-pill btn-lg px-4 cancel">
                                    {spinners.delete && (
                                        <div className="spinner-border spinner-border-sm me-2" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    )}
                                    Enregistrer
                                </button>
                            )}
                            <button onClick={handleProfileCreation.bind(this, "update")} className="create-profile btn btn-primary rounded-pill btn-lg px-4">
                                {spinners.update && (
                                    <div className="spinner-border spinner-border-sm me-2" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                )}
                                Mise a jour
                            </button>
                            <button className="btn-success btn rounded-pill px-4 fs-5" onClick={() => navigate("/u/" + templatedUser?.user?.username)}>
                                Aperçu
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
