import React from "react";
import RightSection from "./CardPreview";
import LeftSide from "./LeftSide";

function ProfileCreationMain() {
  return (
    <div className="dashbord-profile-createion">
      <div className="row">
        <div className="col-md-7">
          <LeftSide />
        </div>
        <div className="col-md-5">
          <RightSection />
        </div>
      </div>
    </div>
  );
}

export default ProfileCreationMain;
