import swal from "@sweetalert/with-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiBaseURL } from "../../../Util/API_Info";
import ProfileTemplate1 from "../Templates/ProfileTemplate1";
import ProfileTemplate2 from "../Templates/ProfileTemplate2";
import ProfileTemplate3 from "../Templates/ProfileTemplate3";

const ProfileTemplateProcess = () => {
    const [templateDataWithUser, setTemplateDataWithUser] = useState({});

    const { userId } = useParams();
    useEffect(async () => {
        axios
            .get(`${apiBaseURL}/api/profile-template/get-single-profile-by-userId/${userId}`)
            .then((data) => {
                setTemplateDataWithUser(data.data);
            })
            .catch((error) => {
                swal("ERROR", e.message, "error");
            });
    }, []);
    console.log(templateDataWithUser);

    if (templateDataWithUser.isApproved) {
        return (
            <div className="container py-5 pt-2">
                <div className="mx-550 mx-auto shadow-lg">
                    {templateDataWithUser?.profileTemplate?.templateName === "profileTemplate1" ? (
                        <ProfileTemplate1 data={templateDataWithUser?.profileTemplate} />
                    ) : templateDataWithUser?.profileTemplate?.templateName === "profileTemplate2" ? (
                        <ProfileTemplate2 data={templateDataWithUser?.profileTemplate} />
                    ) : templateDataWithUser?.profileTemplate?.templateName === "profileTemplate3" ? (
                        <ProfileTemplate3 data={templateDataWithUser?.profileTemplate} />
                    ) : null}
                </div>
            </div>
        );
    } else {
        return (
            <div className="container">
                <div className="p-5 text-center alert-secondary mt-4 rounded">
                    <h1>Sorry Your Profile is not approved</h1>
                </div>
            </div>
        );
    }
};

export default ProfileTemplateProcess;
