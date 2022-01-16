import swal from "@sweetalert/with-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SecureFetch } from "../../../../Util/SecureFetch";
import { InlineIcon } from "@iconify/react";
import qrCodeImage from "../../../../assets/images/Group.png";
import { apiBaseURL } from "../../../../Util/API_Info";

const SingleCardPreview = ({}) => {
    const [singleCardData, setSingleCardData] = useState({});
    const [showDetails, setShowDetails] = useState(false);
    const { cardId } = useParams();
    const baseurl = apiBaseURL;

    useEffect(async () => {
        try {
            const data = await SecureFetch.get(`http://localhost:8080/api/card/get-single-card/${cardId}`);
            setSingleCardData(data);
            console.log(data);
        } catch (e) {
            swal(e.message, "", "error");
        }
    }, []);

    return (
        <>
            <div className="single-card-preview">
                <div className="front-side">
                    <div className="logo" style={{ "--logo-scale": singleCardData?.frontSide?.scale }}>
                        <img src={apiBaseURL + singleCardData?.frontSide?.logo} alt="" />
                    </div>
                    <div className="one-card-logo">
                        <h5>
                            One <br /> <p className="small mb-0">card pro</p>
                        </h5>
                    </div>
                    <div className="icon">
                        <InlineIcon icon="akar-icons:wifi" />
                    </div>
                </div>
                <div className="back-side">
                    <div className="row w-100 h-100 m-0">
                        <div className="col-8 p-0 logo-and-info">
                            <div className="logo" style={{ "--logo-scale": singleCardData?.backSide?.scale }}>
                                <img className="logo__logo" src={`${baseurl + singleCardData?.backSide?.logo}`} alt=" " />
                            </div>
                            <div className={`info ${singleCardData?.backSide?.infoAlign}`}>
                                <p className="name">H. Nazmul Hassan</p>
                                <p className="title">web developer</p>
                                <p className="number">018478573</p>
                            </div>
                        </div>
                        <div className="col-4 p-0 d-flex align-items-center h-100 text-center">
                            <img src={qrCodeImage} alt="" className="qr-code w-100 p-2" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-5">
                <div className="card-details" onClick={() => setShowDetails(!showDetails)}>
                    <div className="header">
                        <p>Card Details</p>
                        <InlineIcon className={`right-arrow ${showDetails ? "active-arrow" : ""}`} icon="ep:arrow-right" />
                    </div>
                    <div className="card-details-content">
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
                                <input type="text" value={singleCardData.additional_address} readOnly />
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
        </>
    );
};

export default SingleCardPreview;
