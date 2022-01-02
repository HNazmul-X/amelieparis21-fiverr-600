import React from "react";
import SectionTitle from "./SectionTitle";
import { InlineIcon } from "@iconify/react";

function SetupProfileLink({ open, handelOpen, title }) {
    const handelLogoupload = () => {

    }
  return (
    <div className="select-profile-link db-template">
      <SectionTitle title={title} handelOpen={handelOpen} open={open} />
      <div className={`${open.includes(title) ? "d-block open-div" : "d-none "}`}>
        <div className="uplaod-area">
          <div className="upload-logo">
            <label className={`upload-box text-center`} htmlFor="upload">
                <InlineIcon icon="iconoir:profile-circled" />
                <p><span>Upload</span> Profile Picture</p>
            </label>
            <input className="d-none" onChange={handelLogoupload} type="file" id="upload" />
          </div>
          <div className="upload-cover">
            <label className={`upload-box text-center`} htmlFor="upload">
                <InlineIcon icon="iconoir:profile-circled" />
                <p><span>Upload</span> Cover Photo</p>
            </label>
            <input className="d-none" onChange={handelLogoupload} type="file" id="upload" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetupProfileLink;
