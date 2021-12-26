import React, {useState} from "react";
import { InlineIcon } from "@iconify/react";

function Information() {
    const textAlignData = ["Left", "Center", "Right"];
    const [selectedAlignment, setSelectedAlignment] = useState("Center")
    return (
        <div className="upload-your-logo-section">
      <h2 class="mb-3">Additional Information</h2>
      <p className="mb-2rem">
      Indicative data: the information will be replaced by the data provided in the collaborator file.
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
      <div className="text_aliagn ">
        <p className="align_title">Text Alignment</p>
       <div className="d-flex gap-20">
       {textAlignData.map((data, index) => (
          <div key={index} className="form-check">
            <input
              className="form-check-input check_box"
              type="checkbox"
              value={data}
              id={data}
              checked={data === selectedAlignment}
              onChange={() => setSelectedAlignment(data)}
            />
            <label class="form-check-label check_box_label" for={data}>
              {data}
            </label>
          </div>
        ))}
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
    )
}

export default Information
