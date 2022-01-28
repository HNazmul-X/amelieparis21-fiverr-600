import React from 'react'
import { Outlet } from 'react-router-dom';
import ProfileTemplateContext, { ProfileTemplateContextData } from '../../../Context/ProfileTemplateContext'

function ProfileRequest() {
    return (
        <>
            <ProfileTemplateContext>
                <Outlet/>
            </ProfileTemplateContext>
        </>
    );
}

export default ProfileRequest
