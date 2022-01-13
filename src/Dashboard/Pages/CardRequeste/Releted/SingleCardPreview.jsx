import swal from "@sweetalert/with-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SecureFetch } from "../../../../Util/SecureFetch";
import { InlineIcon } from "@iconify/react";
import qrCodeImage from "../../../../assets/images/Group.png";

const SingleCardPreview = ({}) => {
  const datas = {
    firstname: "",
    lastname: "",
    email: "",
    postalCode: "",
    society: "",
    city: "",
    address: "",
    additional_address: "",
    website: "",
    landing: "",
    position: "",
    phone: "",
  };

  const [singleCardData, setSingleCardData] = useState(datas);
  const [showDetails, setShowDetails] = useState(false);
  const { cardId } = useParams();

  useEffect(async () => {
    try {
      const data = await SecureFetch.get(
        `http://localhost:8080/api/card/get-single-card/${cardId}`
      );
      setSingleCardData(data);
      console.log(data);
    } catch (e) {
      swal(e.message, "", "error");
    }
  }, []);

  const baseUrl = "http://localhost:8080";
  const frontScale = singleCardData?.frontSide?.scale || 1;

  const {
    firstname,
    lastname,
    email,
    postalCode,
    society,
    city,
    address,
    additional_address,
    website,
    landing,
    position,
    phone,
  } = singleCardData;

  return (
    <div className="signle-card-preview">
      <div>
        <div className="image-area ">
          <div
            className="front-logo-wrapper"
            style={{ backgroundImage: `url(${singleCardData?.card_base})` }}
          >
            <div className="front-logo">
              <img
                style={{ transform: `scale(${frontScale})` }}
                src={`${baseUrl}/${singleCardData?.frontSide?.logo}`}
                alt=""
              />
            </div>
            <div className="card-name-area">
              <p className="card-name">One </p>
              <p className="sm-text">Card pro</p>
            </div>
            <div className="icon">
              <InlineIcon className="sigle-icon" icon={"clarity:wifi-solid"} />
            </div>
          </div>
          <div
            className="back-logo-wrapper"
            style={{ backgroundImage: `url(${singleCardData?.card_base})` }}
          >
            <div className="info-container">
              <div className="back-logo">
                <img
                  src={`${baseUrl}/${singleCardData?.backSide?.logo}`}
                  alt=""
                />
              </div>
              <div>
                <h5 className="name">
                  {singleCardData?.firstname + " " + singleCardData?.lastname}
                </h5>
                <p className="position">{singleCardData?.position}</p>
                <p className="phone mb-0 ">{singleCardData?.phone}</p>
              </div>
            </div>
            <div className="qr-code">
              <img src={qrCodeImage} alt="QR Code" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="card-details"
       
      >
        <div className="header"  onClick={() => setShowDetails(!showDetails)}>
          <p>Card Details</p>
          <InlineIcon
            className={`right-arrow ${showDetails ? "active-arrow" : ""}`}
            icon="ep:arrow-right"
          />
        </div>
        <div className={`card-details-content ${showDetails ? "d-block" : "d-none"}`}>
          <div className="details-container">
            <div className="single-fild">
              <p>First name</p>
              <input type="text" value={singleCardData.firstname} readOnly />
            </div>
            <div className="single-fild">
              <p>Last name</p>
              <input type="text" value={singleCardData.lastname} readOnly />
            </div>
          </div>
          <div className="details-container">
            <div className="single-fild">
              <p>Email</p>
              <input type="text" value={singleCardData.email} readOnly />
            </div>
            <div className="single-fild">
              <p>Postal Code</p>
              <input type="text" value={singleCardData.postalCode} readOnly />
            </div>
          </div>
          <div className="details-container">
            <div className="single-fild">
              <p>Socity</p>
              <input type="text" value={singleCardData.society} readOnly />
            </div>
            <div className="single-fild">
              <p>City</p>
              <input type="text" value={singleCardData.city} readOnly />
            </div>
          </div>
          <div className="details-container">
            <div className="single-fild">
              <p>Address</p>
              <input type="text" value={singleCardData.address} readOnly />
            </div>
          </div>
          <div className="details-container">
            <div className="single-fild">
              <p>Additional Address</p>
              <input
                type="text"
                value={singleCardData.additional_address}
                readOnly
              />
            </div>
          </div>
          <div className="details-container">
            <div className="single-fild">
              <p>Website</p>
              <input type="text" value={singleCardData.website} readOnly />
            </div>
            <div className="single-fild">
              <p>Landing</p>
              <input type="text" value={singleCardData.landing} readOnly />
            </div>
          </div>
          <div className="details-container">
            <div className="single-fild">
              <p>Position</p>
              <input type="text" value={singleCardData.position} readOnly />
            </div>
            <div className="single-fild">
              <p>Phone</p>
              <input type="text" value={singleCardData.phone} readOnly />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCardPreview;
