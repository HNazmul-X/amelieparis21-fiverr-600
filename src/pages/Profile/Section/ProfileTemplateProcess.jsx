import swal from "@sweetalert/with-react";
import axios from "axios";
import React, { useEffect, useState, Component } from "react";
import { useParams } from "react-router-dom";
import { apiBaseURL, togglingNavbar } from "../../../Util/API_Info";
import ProfileTemplate1 from "../Templates/ProfileTemplate1";
import ProfileTemplate2 from "../Templates/ProfileTemplate2";
import ProfileTemplate3 from "../Templates/ProfileTemplate3";

const ProfileTemplateProcess = () => {
    const [templateDataWithUser, setTemplateDataWithUser] = useState({});
    const { username } = useParams();

    useEffect(async () => {
        axios
            .get(`${apiBaseURL}/api/profile-template/get-single-profile-by-username/${username}`)
            .then((data) => {
                data.data.profileTemplate = data.data?.profileTemplate === undefined ? null : data?.data?.profileTemplate;
                setTemplateDataWithUser(data.data);
            })
            .catch((error) => {
                swal("ERROR", error.message, "error");
            });
    }, []);

    useEffect(()=> {
        togglingNavbar("HIDE")
    })


    //sharing profile
    const handleSharingProfile = (data) => {
        const shareData = {
            title: document.title,
            text: `${username} profile at OneCardPro.com`,
            url: `${window.location.href}`,
        };
        window.navigator.share(shareData);
    };

    const dataForVcfFile = `
BEGIN:VCARD
VERSION:3.0
PRODID:-//Apple Inc.//Mac OS X 10.14.1//EN
N:${templateDataWithUser?.profileTemplate?.personalInfo?.name || "Member of Onecard Pro"};
FN:${templateDataWithUser?.profile?.firstname + " " + templateDataWithUser?.profile?.lastname};
ORG:OnecarPro.com;
TITLE:memeber of one card pro; 
EMAIL;type=INTERNET;type=WORK;type=pref:${templateDataWithUser?.email}; 
TEL;type=WORK;type=pref:${templateDataWithUser?.profile?.phone}; 
TEL;type=CELL:${templateDataWithUser?.profile?.phone};
TEL;type=HOME:${templateDataWithUser?.profile?.phone}; 
URL;type=pref:${window.location.href}
END:VCARD
 `;

    const downloadingFile = () => {
        const a = document.createElement("a");
        a.style.display = "none";
        a.setAttribute("href", `data:text/plain;charset=utf8,${encodeURIComponent(dataForVcfFile)}`);
        a.setAttribute("download", `${templateDataWithUser?.username}.vcf`);
        document.body.appendChild(a);
        a.click();
        a.remove();
    };

    if (templateDataWithUser?.isApproved && templateDataWithUser?.profileTemplate) {
        return (
            <div className="container py-2 px-0">
                <div className="mx-550 mx-auto shadow-lg">
                    {templateDataWithUser?.profileTemplate?.templateName === "profileTemplate1" ? (
                        <ProfileTemplate1 addToContact={downloadingFile} onShare={handleSharingProfile} data={templateDataWithUser?.profileTemplate} />
                    ) : templateDataWithUser?.profileTemplate?.templateName === "profileTemplate2" ? (
                        <ProfileTemplate2 addToContact={downloadingFile} onShare={handleSharingProfile} data={templateDataWithUser?.profileTemplate} />
                    ) : templateDataWithUser?.profileTemplate?.templateName === "profileTemplate3" ? (
                        <ProfileTemplate3 addToContact={downloadingFile} onShare={handleSharingProfile} data={templateDataWithUser?.profileTemplate} />
                    ) : null}
                </div>
            </div>
        );
    } else if (templateDataWithUser?.isApproved === false) {
        return (
            <div className="container">
                <div className="p-5 text-center alert-danger mt-4 rounded">
                    <h1>Sorry Your Profile is not Approved</h1>
                </div>
            </div>
        );
    } else if (templateDataWithUser?.profileTemplate === null) {
        return (
            <div className="container">
                <div className="p-5 text-center alert-success mt-4 rounded">
                    <h2 className="text-black fw-normal">
                        Your Profile is Approved But <strong style={{fontSize:"inherit"}}>No Template is Created</strong> For You
                    </h2>
                </div>
            </div>
        );
    } else {
        return (
            <div className="container text-center">
                <div className="spinner-border mt-5" style={{ width: "5rem", height: "5rem" }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }
};

export default ProfileTemplateProcess;
