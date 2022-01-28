import React, { createContext, useContext, useState } from "react";

export const ProfileTemplateContextData = createContext();

const ProfileTemplateContext = ({ children }) => {
    const [profileTemplateId, setProfileTemplateId] = useState("");
    const [socialLinks, setSocialLinks] = useState([]);
    const [userInfo, setUserInfo] = useState({
        name: "",
        tags: [],
        tagline: "",
        about: "",
        address: "",
        links: [],
    });
    const [userPics, setUserPics] = useState({
        profile: {
            dataURL: "",
            file: null,
        },
        cover: {
            dataURL: "",
            file: null,
        },
    });

    const [buttonInfo, setButtonInfo] = useState({
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

    const providerData = { profileTemplateId, socialLinks, userInfo, userPics, buttonInfo, setButtonInfo, setProfileTemplateId, setUserPics, setSocialLinks, setUserInfo };

    return <ProfileTemplateContextData.Provider value={{ ...providerData }}>{children}</ProfileTemplateContextData.Provider>;
};

export default ProfileTemplateContext;

export const useProfileContext = () => {
    const { profileTemplateId, setProfileTemplateId, socialLinks, setSocialLinks, userInfo, setUserInfo, userPics, setUserPics, buttonInfo, setButtonInfo } = useContext(ProfileTemplateContextData);

    return { profileTemplateId, setProfileTemplateId, socialLinks, setSocialLinks, userInfo, setUserInfo, userPics, setUserPics, buttonInfo, setButtonInfo };
};
