import React from 'react';

const Verification = () => {
    return (
        <div id="verification_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-7 col-sm-9 mx-auto">
                        <div id="signUp_Verification">
                            <div class="VCard">
                                <img src={Verification} class="img-fluid" alt="" />
                            </div>

                            <div className="verificationDetails">
                                <div className="verificationText">
                                    <h5>VERIFICATION</h5>
                                    <p>Email has been sent to you email. check the email and Provide a Correct OTP</p>
                                </div>

                                <form action="">
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

            <div className="container">
                {/* <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div id="successful_area">
                            <div class="SCard">
                                <img src={Successful} class="img-fluid" alt="" />
                            </div>

                            <div className="SInfo">
                                <h4>Profile verified Successfully</h4>
                                <p>Please wait for admin approve for continue with this account</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Verification;