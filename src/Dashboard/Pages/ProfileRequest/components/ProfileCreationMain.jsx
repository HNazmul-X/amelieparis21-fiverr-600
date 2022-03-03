import { InlineIcon } from "@iconify/react";
import swal from "@sweetalert/with-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProfileTemplateContextData, useProfileContext } from "../../../../Context/ProfileTemplateContext";
import { apiBaseURL } from "../../../../Util/API_Info";
import { SecureFetch } from "../../../../Util/SecureFetch";
import DashboardTopBanner from "../../../Components/DashboardTopBanner";
import { allSocialsIcons } from "../Data/AllSocialLInkData";
import CardPreview from "./CardPreview";
import LeftSide from "./LeftSide";

function ProfileCreationMain() {
    const [singleProfile, setSingleProfile] = useState({});
    const { profileId } = useParams();
    const profileContext = useProfileContext();
    const [templateDataReloader, setTemplateDataReloader] = useState(0);

    /* fetching single profile */
    useEffect(async () => {
        try {
            const url = `${apiBaseURL}/api/profile/single-profile/${profileId}?select=user firstname lastname`;
            const data = await SecureFetch.get(encodeURI(url));
            setSingleProfile(data);
        } catch (e) {
            swal("error ocurred", e.message, "error");
        }
    }, []);

    /* Fetching Existing Card Data is Already exist */
    useEffect(async () => {
        try {
            const x = await SecureFetch.get(`${apiBaseURL}/api/user/get-user-by-profileId/${profileId}?select=_id`);

            if (x?.user?.profileTemplate) {
                const data = await SecureFetch.get(`${apiBaseURL}/api/profile-template/getSingleTemplateData/${x.user?.profileTemplate}`);
                if (data) {
                    profileContext.setUserPics({
                        ...profileContext.userPics,
                        profile: { dataURL: `${apiBaseURL}${data?.photos?.profile}` },
                        cover: { dataURL: `${apiBaseURL}${data?.photos?.cover}` },
                    });
                    profileContext?.setButtonInfo({
                        ...profileContext?.buttonInfo,
                        info: {
                            text: `${data?.mainButton?.text}`,
                            link: `${data?.mainButton?.link}`,
                        },
                        colors: {
                            bg: `${data?.colors?.button?.bg}`,
                            color: `${data?.colors?.button?.color}`,
                            shadow: `${data?.colors?.button?.shadow}`,
                        },
                    });
                    profileContext.setProfileTemplateId(`${data?.templateName}`);
                    profileContext?.setUserInfo({
                        ...profileContext?.userInfo,
                        ...data.personalInfo,
                        links: [...data.socialLinks],
                    });
                    profileContext.setSocialLinks(
                        allSocialsIcons.filter((icon) => {
                            return data?.socialLinks?.find((s_icon) => s_icon.name === icon.name);
                        }),
                    );
                    profileContext.setIconAndTextColor({
                        ...profileContext?.iconAndTextColor,
                        icon: data?.colors?.icon,
                        text: data?.colors?.text,
                    });
                }
            }
        } catch (e) {
            swal("error ocurred", e.message, "error");
        }
    }, [templateDataReloader]);

    const handleShowingFullPreview = async function () {
        try {
            const url = `${apiBaseURL}/api/profile/single-profile/${profileId}`;
            const data = await SecureFetch.get(url);
            const dataArray = Object.entries(data);
            const modalContent = (
                <div className="card-details-content">
                    {dataArray
                        .filter(([key, value]) => !key.match(/_id|cards|user|createdAt|updatedAt|__v/))
                        .map(([key, value], index) => {
                            return (
                                <div className="input-group input-group-sm mb-1">
                                    <label className="small input-group-text alert-dark">{key}</label>
                                    <input type="text" className="form-control bg-light" readOnly defaultValue={value} />
                                </div>
                            );
                        })}
                </div>
            );
            if (data && modalContent) {
                swal({
                    title: "user full Preview",
                    content: modalContent,
                });
            }
        } catch (e) {
            swal("error Ocurred", e.message, "error");
        }
    };



    return (
        <div className="dashbord-profile-createion p-0">
            <DashboardTopBanner
                title={
                    <div className="d-flex gap-1 align-items-center">
                        <InlineIcon icon={"vaadin:arrow-backward"} className="fs-3 me-3 pointer-event" onClick={() => history.back()} />
                        {`Creating Profile for`}
                        <strong>{`${singleProfile.firstname} ${singleProfile.lastname}`}</strong>
                        <button onClick={handleShowingFullPreview} className="btn btn-sm btn-light">
                            See Details
                        </button>
                    </div>
                }
            />
            <div className="p-3">
                <div className="row w-100">
                    <div className="col-md-7 col-xxl-9 pe-0">
                        <LeftSide setTemplateDataReloader={setTemplateDataReloader} templateDataReloader={templateDataReloader} />
                    </div>
                    <div className="col-md-5 col-xxl-3">
                        <CardPreview />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCreationMain;
