import React from "react";
import SectionTitle from "./SectionTitle";
import { InlineIcon } from "@iconify/react";

function SetupSocialLink({ open, handelOpen, title }) {
  const datas = [
    {
      icon: "ant-design:twitter-outlined",
      link: "https://icon-sets.iconify.design/bx/bxl-facebook/",
      text: "Twitter",
    },
    {
      icon: "ant-design:instagram-outlined",
      link: "https://icon-sets.iconify.design/bx/bxl-facebook/",
      text: "Intsagram",
    },
    {
      icon: "bx:bxl-facebook",
      link: "https://icon-sets.iconify.design/bx/bxl-facebook/",
      text: "Facebook",
    },
    {
      icon: "bx:bxl-linkedin",
      link: "https://icon-sets.iconify.design/bx/bxl-facebook/",
      text: "Linkedin",
    },
  ];

  // <InlineIcon icon="uil:image-upload" />
  //ant-design:plus-outlined
  return (
    <div className="setup-social-link db-template">
      <SectionTitle title={title} handelOpen={handelOpen} />
      <div className={`${title === open ? "d-block open-div" : "d-none"}`}>
        <div className={``}>
          <div className="social-icon-wrapper">
            {datas.map((data, index) => (
              <div className="single-icon" key={index}>
                <a href={data.link} target="_blank">
                  <InlineIcon icon={data.icon} />
                </a>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <div class="d-flex gap-3">
              <div class="w-50 form-floating mb-3">
                <input
                  type="text"
                  class="form-control primary-input"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Facebook</label>
              </div>

              <div class="w-50 form-floating mb-3">
                <input
                  type="text"
                  class="form-control primary-input"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Intsagram</label>
              </div>
            </div>
            <div class="d-flex gap-3">
              <div class="w-50 form-floating mb-3">
                <input
                  type="text"
                  class="form-control primary-input"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Twitter</label>
              </div>

              <div class="w-50 form-floating mb-3">
                <input
                  type="text"
                  class="form-control primary-input"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Linkedin</label>
              </div>
            </div>
            <div class="d-flex gap-3">
              <div class="w-50 form-floating mb-3">
                <input
                  type="text"
                  class="form-control primary-input"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Another</label>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetupSocialLink;
