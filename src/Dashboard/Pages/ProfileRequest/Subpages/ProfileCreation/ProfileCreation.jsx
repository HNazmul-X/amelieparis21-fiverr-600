import React, { useEffect } from "react";
import { togglingNavbar } from "../../../../../Util/API_Info";
import ProfileCreationMain from "../../components/ProfileCreationMain";

const ProfileCreation = () => {
    useEffect(() => {
        togglingNavbar("HIDE")
        return () => {
            togglingNavbar("SHOW")
        };
    }, []);

    return (
        <>
            <ProfileCreationMain />
        </>
    );
};

export default ProfileCreation;
