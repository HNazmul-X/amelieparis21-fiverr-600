import React, { useState } from "react";
import { useParams } from "react-router-dom";

const CardStatus = () => {
    const [successMassage] = useState(JSON.parse(localStorage.getItem("cardMassage")) || {});
    const {cardId} = useParams()

    return (
        <div>
            <div className="container">
                <div className="alert-success p-5 mt-5">
                    <h1>Card Created Successfully</h1>
                    <h3>Your card is Now pending for admin approve</h3>
                    <p>Card id is {cardId}</p>
                </div>
            </div>
        </div>
    );
};

export default CardStatus;
