import swal from "@sweetalert/with-react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardRoundImage from "../../assets/images/pwd-reset-icon.png";
import { apiBaseURL } from "../../Util/API_Info";
const ResetPwdVerification = () => {
    const [isSpinnerShow, setIsSpinnerShow] = useState(false);
    const { verificationId, code: enc_code, userId } = useParams();
    const navigate = useNavigate();

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        setIsSpinnerShow(true);
        const form = new FormData(e.target);
        const { code } = Object.fromEntries(form.entries());
        const r_data = await axios.post(`${apiBaseURL}/api/auth/verify-code`, { code, id: verificationId });
        if (r_data?.data.error) {
            swal("Failed to Verify", r_data?.data?.error, "error");
            setIsSpinnerShow(false);
        } else {
            navigate(`/new-pwd/${verificationId}/${encodeURIComponent(enc_code)}/${userId}`, { replace: true });
        }
    };

    return (
        <div id="verification_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-7 col-sm-9 mx-auto">
                        <div id="signUp_Verification">
                            <div class="VCard col-5 pb-0 mx-auto">
                                <img src={CardRoundImage} class="w-100 shadow-none" alt="" />
                            </div>

                            <div className="verificationDetails">
                                <div className="verificationText">
                                    <h5>VERIFICATION</h5>
                                    <p>Email has been sent to you email. check the email and Provide a Correct OTP</p>
                                </div>

                                <form action="" onSubmit={handleSubmitForm}>
                                    <div className="form-floating otpWrapper my-3">
                                        <input
                                            type="text"
                                            class="form-control primary-input text-center fw-bolder font-monospace otpInput fs-1"
                                            name="code"
                                            id="floatingInput"
                                            placeholder="6 Digit OTP"
                                        />
                                        <label style={{ left: "115px" }} for="floatingInput">
                                            6 Digit OTP *
                                        </label>
                                    </div>

                                    <button className="btn verifyBtn">
                                        {isSpinnerShow && (
                                            <div class="spinner-border spinner-border-sm me-3" role="status">
                                                <span class="visually-hidden">Loading...</span>
                                            </div>
                                        )}
                                        Verify
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPwdVerification;
