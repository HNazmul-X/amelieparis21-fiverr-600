import React from "react";
import SectionTitle from "./SectionTitle";

function SetUpPersonalInformation({ open, handelOpen, title }) {
  return (
    <div className="db-template setup-persona-information">
      <SectionTitle title={title} handelOpen={handelOpen} open={open} />
      <div className={`${open.includes(title) ? "d-block open-div" : "d-none"}`}>
        <div className={`template-img-wrapper`}>
          <div className="w-100 form-floating mb-3">
            <input
              type="text"
              className="form-control primary-input"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div className="w-100 form-floating mb-3">
            <input
              type="text"
              className="form-control primary-input"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Tagline</label>
          </div>
          <div className="w-100 form-floating mb-3">
            <textarea
              rows="4"
              className="form-control primary-input text-area"
              id="floatingInput"
              placeholder="name@example.com"
            ></textarea>
            <label htmlFor="floatingInput">Tagline</label>
          </div>
          <div className="d-flex gap-3">
            <div className="w-100 form-floating mb-3">
              <input
                type="text"
                className="form-control primary-input"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">First Name</label>
            </div>

            <div className="w-100 form-floating mb-3">
              <input
                type="text"
                className="form-control primary-input"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Last Name</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetUpPersonalInformation;
