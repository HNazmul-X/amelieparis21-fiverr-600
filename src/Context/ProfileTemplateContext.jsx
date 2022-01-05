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

    const providerData = { profileTemplateId, socialLinks, userInfo, userPics, setProfileTemplateId, setUserPics, setSocialLinks, setUserInfo };

    return <ProfileTemplateContextData.Provider value={{ ...providerData }}>{children}</ProfileTemplateContextData.Provider>;
};

export default ProfileTemplateContext;

export const useProfileContext = () => useContext(ProfileTemplateContextData);
