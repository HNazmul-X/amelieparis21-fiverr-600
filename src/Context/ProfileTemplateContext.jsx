import React, { createContext, useState } from 'react';

export const ProfileTemplateContextData = createContext()

const ProfileTemplateContext = ({children}) => {

    const [profileData,setProfileData] = useState({})


    const providerData = {profileData,setProfileData}

    return (
        <ProfileTemplateContextData.Provider value={{...providerData}}>
            {children}
        </ProfileTemplateContextData.Provider>
    );
};

export default ProfileTemplateContext;