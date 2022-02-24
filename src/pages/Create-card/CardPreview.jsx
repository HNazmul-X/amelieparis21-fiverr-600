import React, { useContext } from "react";
import { CreateCardPageContext } from "./CreateCardPage";
import qrCodeImage from "../../assets/images/Group.png";
import blackQrCode from "../../assets/images/black-qr-code.png"
import logo from "../../assets/images/Asset 1@2x.png"


const CardPreview = () => {
    const { formStepId, cardLogo } = useContext(CreateCardPageContext);

    const isLightCardBase = () => {
        if (cardLogo?.card_base?.includes("white-card-base")) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <div id="realtime-making-card-preview-card">
            <div className="card-cover" draggable={true}>
                <div className={`preview-card__card ${formStepId}`}>
                    <div className={`card-front-side`} style={{ "--logo-scale": cardLogo?.front?.scale, backgroundImage: `url(${cardLogo?.card_base})` }}>
                        <div className="front__wrapper">
                            <h1 className={`front__title ${formStepId}`}>
                                <img style={{width:"150px",userSelect:"none"}} draggable={false} src={logo} alt="" />
                            </h1>
                            {cardLogo?.front?.logo?.length > 2 && <img src={cardLogo?.front?.logo} alt="" className={`front__logo ${formStepId}`} />}
                        </div>
                    </div>
                    <div className="card-backside" style={{ backgroundImage: `url(${cardLogo?.card_base})` }}>
                        <div className="backside__wrapper m-0 row w-100">
                            <div className="info-and-logo col-7">
                                <div className="info-and-logo__logo" style={{ "--logo-scale": cardLogo?.back?.scale }}>
                                    <img src={cardLogo?.back?.logo} alt="" className="" />
                                </div>
                                <div className={`info-and-logo__info  justify-${cardLogo?.back?.infoAlign} ${isLightCardBase() ? "text-secondary" : ""}`}>
                                    <h5>Nicolas Smith</h5>
                                    <h6>Commercial</h6>
                                    <p>0756236598</p>
                                </div>
                            </div>
                            <div className="qr-code col-5 d-flex justify-content-center align-items-center">
                                <img src={!isLightCardBase() ? qrCodeImage : blackQrCode} className="w-75" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardPreview;
