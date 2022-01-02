import React from "react";
import CardPreview from "./CardPreview";
import LeftSide from "./LeftSide";

function ProfileCreationMain() {
  return (
    <div className="dashbord-profile-createion">
      <div className="row">
        <div className="col-md-7 pe-0">
          <LeftSide />
        </div>
        <div className="col-md-5"> 
          <CardPreview />
        </div>
      </div>
    </div>
  );
}

export default ProfileCreationMain;
