import React from "react";

function LeftSide() {
  return (
    <div className="col-md-6 left-side d-flex flex-column justify-content-between">
      <div>
        <h6 className="label">CONTACT US</h6>
        <h2>
          Get in touch with us <br /> about anything.
        </h2>
      </div>
      <div className="botom-area">
        <div>
          <h6 className="label-1">Email address</h6>
          <a href="mailto:test@gmail.com" className="email">
            contact@trydus.co
          </a>
        </div>
        <div>
          <h6 className="label-1">Phone</h6>
          <a href="tel:test@gmail.com" className="teliphone">
            +1-305-3059
          </a>
        </div>
        <div>
          <h6 className="label-1">Head office</h6>
          <p className="address">274 Marinor Street, NY-10007</p>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
