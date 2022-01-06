import swal from "@sweetalert/with-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SecureFetch } from "../../../../Util/SecureFetch";

const SingleCardPreview = ({}) => {
    const [singleCardData, setSingleCardData] = useState();
    const { cardId } = useParams();

    useEffect(async () => {
        try {
            const data = await SecureFetch.get(`http://localhost:8080/api/card/get-single-card/${cardId}`);
            setSingleCardData(data);
            console.log(data)
        } catch (e) {
            swal(e.message, "", "error");
        }
    }, []);

    return (
        <div className="row w-100  justify-content-center p-5">
            <div className="col-md-8 col-lg-6 col-xxl-5">
                <div id="realtime-making-card-preview-card">
                    <div className="card-cover">
                        <div className={`preview-card__card step5`}>
                            <div className={`card-front-side`} style={{ "--logo-scale": singleCardData?.frontSide?.scale, backgroundImage: `url(${singleCardData?.card_base})` }}>
                                <div className="front__wrapper">
                                    <h1 className={`front__title step5`}>One Card Pro</h1>
                                    {singleCardData?.frontSide?.logo?.length > 2 && <img src={`http://localhost:8080${singleCardData?.frontSide?.logo}`} alt="" className={`front__logo step5`} />}
                                </div>
                            </div>
                            <div className="card-backside" style={{ backgroundImage: `url(${singleCardData?.card_base})` }}>
                                <div className="backside__wrapper m-0 row w-100">
                                    <div className="info-and-logo col-7">
                                        <div className="info-and-logo__logo" style={{ "--logo-scale": singleCardData?.backSide?.scale }}>
                                            <img src={`http://localhost:8080/${singleCardData?.backSide?.logo}`} alt="" className="" />
                                        </div>
                                        <div className={`info-and-logo__info  justify-${singleCardData?.backSide?.infoAlign}`}>
                                            <h5>H. Nazmul Hassan</h5>
                                            <h6>Web developer</h6>
                                            <p>10934739837</p>
                                        </div>
                                    </div>
                                    <div className="qr-code col-5 d-flex justify-content-center align-items-center">
                                        <img src="https://app.wemet.fr/static/media/qrCode.cf9b9dcc.png" className="w-75" alt="" />
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
