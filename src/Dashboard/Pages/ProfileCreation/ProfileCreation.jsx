import React from 'react'
import ProfileTemplateContext, { ProfileTemplateContextData } from '../../../Context/ProfileTemplateContext'
import DashboardTopBanner from '../../Components/DashboardTopBanner'
import ProfileCreationMain from "./components/ProfileCreationMain"

function ProfileCreation() {
    return (
        <>
            <ProfileTemplateContext>
                <DashboardTopBanner title={"Profile Creation"} />
                <ProfileCreationMain />
            </ProfileTemplateContext>
        </>
    );
}

export default ProfileCreation
