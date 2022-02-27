import React, { useEffect } from "react";
import ProfileCreationMain from "../../components/ProfileCreationMain";

const ProfileCreation = () => {
    useEffect(() => {
        const navbar = document.querySelector("#homepage.onecardPro_navbar");
        if (navbar) navbar.style.display = "none";

        return () => {
            navbar.style.display = "block";
        };
    }, []);

    return (
        <>
            <ProfileCreationMain />
        </>
    );
};

export default ProfileCreation;
