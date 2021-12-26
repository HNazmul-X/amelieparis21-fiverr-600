import React from "react";
import { InlineIcon } from "@iconify/react";

function UploadYourLogo() {
  return (
    <div className="upload-your-logo-section">
      <h2 class="mb-3">Logo Import</h2>
      <p className="mb-2rem">
        PLEASE NOTE: for black and wood cards, your logo will be monochrome.
      </p>
      <div class="mb-5">
        <div>
          <label class="upload-box" for="upload">
            <InlineIcon icon="uil:image-upload" />
            <h5>Upload your Logo</h5>
            <p class="small-text">JPG or PNG</p>
          </label>
          <input class="d-none" type="file" id="upload" />
        </div>
      </div>
      <p className="logo_size mb-2">logo size</p>
      <div>
        <input type="range" defaultValue={50} id="slider" />
      </div>
      <div class="mt-5">
        <button class="my-btn-primary me-3">Return</button>
        <button class="my-btn-primary">Following</button>
      </div>
    </div>
  );
}

export default UploadYourLogo;
