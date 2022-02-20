import React from 'react';
import ProfileTemplateContext from '../../Context/ProfileTemplateContext';
import ProfileCreation from '../../Dashboard/Pages/ProfileRequest/Subpages/ProfileCreation/ProfileCreation';

const EditProfileTemplate = () => {
    return (
        <ProfileTemplateContext>
            <ProfileCreation/>
        </ProfileTemplateContext>
    );
};

export default EditProfileTemplate;