import React, { useState } from "react";
import { InlineIcon } from "@iconify/react";

function RightSide() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="col-md-6 right-side">
      <div className=" justify-content-center d-flex">
        <form className="contact-form">
          <div className="w-100 form-floating mb-3">
            <input
              type="text"
              className="form-control unFatty-input"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">E-mail *</label>
          </div>
          <div className="w-100 form-floating mb-3">
            <input
              type="text"
              className="form-control unFatty-input"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">E-mail *</label>
          </div>
          <div className="w-100 form-floating mb-3">
            <input
              type="text"
              className="form-control unFatty-input"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">E-mail *</label>
          </div>

          <div className="w-100 form-floating mb-3">
            <textarea
              className="form-control unFatty-input text-area"
              id="floatingInput"
              rows={6}
              cols="50"
              placeholder="name@example.com"
            ></textarea>
            <label htmlFor="floatingInput">E-mail *</label>
          </div>
          <button type="submit" className="submit-btn" disabled={loading ? true : false}>
            {loading ? (
              <InlineIcon icon="akar-icons:arrow-cycle" />
            ) : (
              <>
                Send
                <InlineIcon className="arrow" icon="akar-icons:arrow-right" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default RightSide;
