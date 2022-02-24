import swal from "@sweetalert/with-react";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { SecureFetch } from "../../../../Util/SecureFetch";
import { InlineIcon } from "@iconify/react";
import qrCodeImage from "../../../../assets/images/Group.png";
import blackQrCode from "../../../../assets/images/black-qr-code.png";
import { apiBaseURL } from "../../../../Util/API_Info";
import WhiteLogo from "../../../../assets/images/Asset 2.svg";
import DarkCardLogo from "../../../../assets/images/Asset 1.svg";
import axios from "axios";

const SingleCardPreview = ({}) => {
    const [singleCardData, setSingleCardData] = useState({});
    const [isLightCardBase, setIsLightCardBase] = useState(false);
    const { cardId } = useParams();
    const baseurl = apiBaseURL;

    useEffect(async () => {
        try {
            const data = await SecureFetch.get(`${apiBaseURL}/api/card/get-single-card/${cardId}`);
            setSingleCardData(data);
            if (data?.card_base?.includes("white-card-base")) {
                setIsLightCardBase(true);
            } else {
                false;
            }
        } catch (e) {
            swal(e.message, "", "error");
        }
    }, []);

    return (
        <>
            <div className="single-card-preview">
                <div style={{ backgroundImage: `url(${singleCardData?.card_base})` }} className={`front-side ${isLightCardBase ? "border border-2 shadow-sm" : ""}`}>
                    <div className="logo" style={{ "--logo-scale": singleCardData?.frontSide?.scale }}>
                        <img src={apiBaseURL + singleCardData?.frontSide?.logo} alt="" />
                    </div>
                    <div className={`one-card-logo ${isLightCardBase ? "text-secondary" : ""}`}>
                        <img src={isLightCardBase ? DarkCardLogo : WhiteLogo} alt="" />
                    </div>
                    <div className={`icon ${isLightCardBase ? "text-secondary" : ""}`}>
                        <InlineIcon icon="akar-icons:wifi" />
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${singleCardData?.card_base})` }} className={`back-side ${isLightCardBase ? "border border-2 shadow-sm" : ""}`}>
                    <div className="row w-100 h-100 m-0">
                        <div className="col-7 p-0 logo-and-info">
                            <div className="logo" style={{ "--logo-scale": singleCardData?.backSide?.scale }}>
                                <img className="logo__logo" src={`${baseurl + singleCardData?.backSide?.logo}`} alt=" " />
                            </div>
                            <div className={`info ${singleCardData?.backSide?.infoAlign} ${isLightCardBase ? "text-dark" : ""}`}>
                                <p className="name">Nicolas Smith</p>
                                <p className="title">Commercial</p>
                                <p className="number">0756236598</p>
                            </div>
                        </div>
                        <div className="col-4 p-0 d-flex align-items-center h-100 text-center">
                            <img src={!isLightCardBase ? qrCodeImage : blackQrCode} alt="" className="qr-code w-100 p-2" />
                        </div>
                    </div>
                </div>
            </div>
            <CardDetails singleCardData={singleCardData} />
            <DeliveryInfo cardId={cardId} />
        </>
    );
};

const CardDetails = ({ singleCardData }) => {
    const [showDetails, setShowDetails] = useState(false);
    const innerElement = useRef(null);

    return (
        <div className="px-5">
            <div className="card-details shadow-lg mb-3" onClick={() => setShowDetails(!showDetails)}>
                <div className="header">
                    <p>Card Details</p>
                    <InlineIcon className={`right-arrow ${showDetails ? "active-arrow" : ""}`} icon="ep:arrow-right" />
                </div>
                <div className="card-details-content shadow-none" style={{ maxHeight: showDetails ? innerElement.current.scrollHeight : 0 + "px" }} ref={innerElement}>
                    <div style={{ padding: "13px 62px 80px 65px" }}>
                        <div className="details-container">
                            <div className="single-fild">
                                <p>First name</p>
                                <input type="text" defaultValue={singleCardData.firstname} readOnly />
                            </div>
                            <div className="single-fild">
                                <p>Last name</p>
                                <input type="text" defaultValue={singleCardData.lastname} readOnly />
                            </div>
                        </div>
                        <div className="details-container">
                            <div className="single-fild">
                                <p>Email</p>
                                <input type="text" defaultValue={singleCardData.email} readOnly />
                            </div>
                            <div className="single-fild">
                                <p>Postal Code</p>
                                <input type="text" defaultValue={singleCardData.postalCode} readOnly />
                            </div>
                        </div>
                        <div className="details-container">
                            <div className="single-fild">
                                <p>Socity</p>
                                <input type="text" defaultValue={singleCardData.society} readOnly />
                            </div>
                            <div className="single-fild">
                                <p>City</p>
                                <input type="text" defaultValue={singleCardData.city} readOnly />
                            </div>
                        </div>
                        <div className="details-container">
                            <div className="single-fild">
                                <p>Address</p>
                                <input type="text" defaultValue={singleCardData.address} readOnly />
                            </div>
                        </div>
                        <div className="details-container">
                            <div className="single-fild">
                                <p>Additional Address</p>
                                <input type="text" defaultValue={singleCardData.additional_address} readOnly />
                            </div>
                        </div>
                        <div className="details-container">
                            <div className="single-fild">
                                <p>Website</p>
                                <input type="text" defaultValue={singleCardData.website} readOnly />
                            </div>
                            <div className="single-fild">
                                <p>Landing</p>
                                <input type="text" defaultValue={singleCardData.landing} readOnly />
                            </div>
                        </div>
                        <div className="details-container">
                            <div className="single-fild">
                                <p>Position</p>
                                <input type="text" defaultValue={singleCardData.position} readOnly />
                            </div>
                            <div className="single-fild">
                                <p>Phone</p>
                                <input type="text" defaultValue={singleCardData.phone} readOnly />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const DeliveryInfo = ({ cardId }) => {
    const [deliveryInfo, setDeliveryInfo] = useState({});
    const [showDetails, setShowDetails] = useState(false);
    const innerElement = useRef(null);

    useEffect(async () => {
        try {
            SecureFetch.get(`${apiBaseURL}/api/card/get-card-delivery-info/${cardId}`)
                .then((res) => setDeliveryInfo(res))
                .catch((e) => swal("error", e.message, "error"));
        } catch (e) {
            swal("Error", e.message, "error");
        }
    }, []);

    return (
        <div className="px-5">
            <div className="card-details shadow-lg mb-5 mt-0">
                <div className="header" onClick={() => setShowDetails(!showDetails)}>
                    <p>Delivery Details</p>
                    <InlineIcon className={`right-arrow ${showDetails ? "active-arrow" : ""}`} icon="ep:arrow-right" />
                </div>
                <div className="card-details-content shadow-none" style={{ maxHeight: showDetails ? innerElement.current.scrollHeight : 0 + "px" }} ref={innerElement}>
                    <div style={{ padding: "13px 62px 80px 65px" }}>
                        <div className="">
                            <div className="py-2 border border-4 px-3">
                                <div className="text-start mt-2 mb-4">
                                    <h5 className="">Delivery Info</h5>
                                </div>
                                <div className="details-container">
                                    <div className="single-fild">
                                        <p>First Name</p>
                                        <input type="text" defaultValue={deliveryInfo?.deliver_info?.firstname} readOnly />
                                    </div>
                                    <div className="single-fild">
                                        <p>Last Name</p>
                                        <input type="text" defaultValue={deliveryInfo?.deliver_info?.lastname} readOnly />
                                    </div>
                                </div>
                                <div className="details-container">
                                    <div className="single-fild">
                                        <p>Address</p>
                                        <input type="text" defaultValue={deliveryInfo?.deliver_info?.address} readOnly />
                                    </div>
                                    <div className="single-fild">
                                        <p>Additional Address</p>
                                        <input type="text" defaultValue={deliveryInfo?.deliver_info?.additional_address} readOnly />
                                    </div>
                                </div>
                                <div className="details-container">
                                    <div className="single-fild">
                                        <p>Society</p>
                                        <input type="text" defaultValue={deliveryInfo?.deliver_info?.society} readOnly />
                                    </div>
                                    <div className="single-fild">
                                        <p>Phone</p>
                                        <input type="text" defaultValue={deliveryInfo?.deliver_info?.phone} readOnly />
                                    </div>
                                    <div className="single-fild">
                                        <p>Postal Code</p>
                                        <input type="text" defaultValue={deliveryInfo?.deliver_info?.postalCode} readOnly />
                                    </div>
                                </div>
                            </div>
                            <div className="py-2 border-4 border px-3 mt-5">
                                <div className="text-start mt-2 mb-4">
                                    <h5 className="">Billing Info</h5>
                                </div>
                                {deliveryInfo.is_billing_same ? (
                                    <>
                                        <div className="p-5">
                                            <h4 className="fw-bold text-center">Billing Same as Delivery</h4>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="details-container">
                                            <div className="single-fild">
                                                <p>First Name</p>
                                                <input type="text" defaultValue={deliveryInfo?.billing_info?.firstname} readOnly />
                                            </div>
                                            <div className="single-fild">
                                                <p>Last Name</p>
                                                <input type="text" defaultValue={deliveryInfo?.billing_info?.lastname} readOnly />
                                            </div>
                                        </div>
                                        <div className="details-container">
                                            <div className="single-fild">
                                                <p>Address</p>
                                                <input type="text" defaultValue={deliveryInfo?.billing_info?.address} readOnly />
                                            </div>
                                            <div className="single-fild">
                                                <p>Additional Address</p>
                                                <input type="text" defaultValue={deliveryInfo?.billing_info?.additional_address} readOnly />
                                            </div>
                                        </div>
                                        <div className="details-container">
                                            <div className="single-fild">
                                                <p>Society</p>
                                                <input type="text" defaultValue={deliveryInfo?.billing_info?.society} readOnly />
                                            </div>
                                            <div className="single-fild">
                                                <p>Phone</p>
                                                <input type="text" defaultValue={deliveryInfo?.billing_info?.phone} readOnly />
                                            </div>
                                            <div className="single-fild">
                                                <p>Postal Code</p>
                                                <input type="text" defaultValue={deliveryInfo?.billing_info?.postalCode} readOnly />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="py-2 border-4 border px-3 mt-5">
                                <div className="text-start mt-2 mb-4">
                                    <h5 className="">Other Info</h5>
                                </div>
                                <div className="details-container">
                                    <div className="single-fild">
                                        <p>Order Date</p>
                                        <input type="text" defaultValue={new Date(deliveryInfo?.orderDate).toUTCString()} readOnly />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCardPreview;
