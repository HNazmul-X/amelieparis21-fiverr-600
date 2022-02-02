import React from "react";
import { InlineIcon } from "@iconify/react";
import { homePageModalData1, homePageModalData2, homePageModalData3 } from './../../data/HomePageModalData';

function MyModal({handelClose}) {
    
  return (
    <div className="modl-conatiner">
      <div className="container bg-white">
        <div className="delet-icon-wrapper">
          <InlineIcon
            icon={"ep:close-bold"}
            className={"delet-icon"}
            onClick={handelClose}
          />
        </div>
        <div className="row">
          <div className="col-md-4">
            {homePageModalData1.map((mainData, index) => (
              <div key={index}>
                <h5 className="title">{mainData.name}</h5>
                {mainData.lists.map((data, index) => (
                  <p key={index}>{data}</p>
                ))}
              </div>
            ))}
          </div>
          <div className="col-md-4">
            {homePageModalData2.map((mainData, index) => (
              <div key={index}>
                <h5 className="title">{mainData.name}</h5>
                {mainData.lists.map((data, index) => (
                  <p key={index}>{data}</p>
                ))}
              </div>
            ))}
          </div>
          <div className="col-md-4">
            {homePageModalData3.map((mainData, index) => (
              <div key={index}>
                <h5 className="title">{mainData.name}</h5>
                {mainData.lists.map((data, index) => (
                  <p key={index}>{data}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyModal;
