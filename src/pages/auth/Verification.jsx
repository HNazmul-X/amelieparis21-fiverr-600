import React, { useState } from 'react';
import VerificationImg from '../../assets/images/verification.png';
import { useForm } from "react-hook-form";

const Verification = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleOtpVerification = () => {
        console.log("hello");
    }

    return (
        <div id="verification_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-7 col-sm-9 mx-auto">
                        <div id="signUp_Verification">
                            <div class="VCard">
                                <img src={VerificationImg} class="img-fluid" alt="" />
                            </div>

                            <div className="verificationDetails">
                                <div className="verificationText">
                                    <h5>VERIFICATION</h5>
                                    <p>Email has been sent to you email. check the email and Provide a Correct OTP</p>
                                </div>

                                <form action="" onSubmit={handleSubmit(handleOtpVerification)}>
                                    <div className="form-floating otpWrapper my-3">
                                        <input type="number" min={0} maxlength="6" class="form-control primary-input otpInput" id="floatingInput" placeholder="6 Digit OTP" />
                                        <label for="floatingInput">6 Digit OTP *</label>
                                        
                                    </div>

                                    <button className="btn verifyBtn">Verify</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Verification;