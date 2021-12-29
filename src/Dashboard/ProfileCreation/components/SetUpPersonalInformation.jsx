import React from "react";
import SectionTitle from "./SectionTitle";

function SetUpPersonalInformation({ open, handelOpen, title }) {
  return (
    <div className="db-template setup-persona-information">
      <SectionTitle title={title} handelOpen={handelOpen} />
      <div className={`${title === open ? "d-block open-div" : "d-none"}`}>
        <div className={`template-img-wrapper`}>
          <div class="w-100 form-floating mb-3">
            <input
              type="text"
              class="form-control primary-input"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Name</label>
          </div>
          <div class="w-100 form-floating mb-3">
            <input
              type="text"
              class="form-control primary-input"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Tagline</label>
          </div>
          <div class="w-100 form-floating mb-3">
            <textarea
              rows="4"
              class="form-control primary-input text-area"
              id="floatingInput"
              placeholder="name@example.com"
            ></textarea>
            <label for="floatingInput">Tagline</label>
          </div>
          <div class="d-flex gap-3">
            <div class="w-100 form-floating mb-3">
              <input
                type="text"
                class="form-control primary-input"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">First Name</label>
            </div>

            <div class="w-100 form-floating mb-3">
              <input
                type="text"
                class="form-control primary-input"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Last Name</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetUpPersonalInformation;
