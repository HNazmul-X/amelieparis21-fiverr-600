import React from "react";
import ProfileTemplate1 from "./Templates/ProfileTemplate1";
import ProfileTemplate2 from "./Templates/ProfileTemplate2";
import ProfileTemplate3 from "./Templates/ProfileTemplate3";

/* 

FOLDER STRUCTURE: 
for folder structure please read the readme.txt file inside of section Folder.
*/

const ProfilePage = () => {
  return (
    <div className="mx-550 mx-auto">
      <ProfileTemplate3 />
      {/* <ProfileTemplate2 /> */}
      {/* <ProfileTemplate1 /> */}
    </div>
  );
};

export default ProfilePage;
