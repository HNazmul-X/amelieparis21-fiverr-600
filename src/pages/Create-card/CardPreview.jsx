import React, { useContext } from "react";
import { CreateCardPageContext } from "./CreateCardPage";

const CardPreview = () => {
    const { formStepId, cardLogo } = useContext(CreateCardPageContext);

    return (
        <div id="realtime-making-card-preview-card">
            <div className="card-cover">
                <div className={`preview-card__card ${formStepId}`}>
                    <div className={`card-front-side`} style={{ "--logo-scale": cardLogo?.front?.scale, backgroundImage: `url(${cardLogo?.card_base})` }}>
                        <div className="front__wrapper">
                            <h1 className={`front__title ${formStepId}`}>One Card Pro</h1>
                            <img src={cardLogo?.front?.logo} alt="" className={`front__logo ${formStepId}`} />
                        </div>
                    </div>
                    <div className="card-backside" style={{ backgroundImage: `url(${cardLogo?.card_base})` }}>
                        <div className="backside__wrapper m-0 row w-100">
                            <div className="info-and-logo col-7">
                                <div className="info-and-logo__logo" style={{ "--logo-scale": cardLogo?.back?.scale }}>
                                    <img src={cardLogo?.back?.logo} alt="" className="" />
                                </div>
                                <div className={`info-and-logo__info  justify-${cardLogo?.back?.infoAlign}`}>
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
    );
};

export default CardPreview;
