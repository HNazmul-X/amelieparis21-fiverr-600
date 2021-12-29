import React from 'react'
import DashboardTopBanner from '../Components/DashboardTopBanner';
import ProfileCreationMain from './components/ProfileCreationMain';

function ProfileCreation() {
    return (
        <>
            <DashboardTopBanner title={"Profile Creation"} />
            <ProfileCreationMain />
        </>
    )
}

export default ProfileCreation
