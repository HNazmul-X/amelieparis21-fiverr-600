import React, { useContext, useEffect, useState } from "react";
import VerificationImg from "../../assets/images/verification.png";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import swal from "@sweetalert/with-react";
import axios from "axios";
import { useAuth, UserContextData } from "../../Context/UserContext";
import { apiBaseURL } from "../../Util/API_Info";
import Authentication from "../../Util/Authentication";

const Verification = () => {
    /* Using Hooks here */
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { verificationId, code } = useParams();
    const auth = useAuth();
    const { formFilledDataForSignUp: userData, setFormFilledDataForSignUp: setUserData } = useContext(UserContextData);
    const [isSpinnerShow, setIsSpinnerShow] = useState(false);
    const navigate = useNavigate();
    const [isSessionExist, setIsSessionExist] = useState(true);

    //use effect for checking is Verification session exist.
    useEffect(() => {
        fetch(`${apiBaseURL}/api/auth/is-verification-session-exist`, {
            method: "POST",
            headers: {
                "content-type": "application/JSON",
            },
            body: JSON.stringify({ id: verificationId, code: decodeURIComponent(code) }),
        })
            .then((res) => res.json())
            .then((data) => setIsSessionExist(data?.success && Object.values(userData).length > 0))
            .catch((e) => swal("Failed", e.message, "error"));
    }, []);

    /* verifying code */
    const handleOtpVerification = async (data) => {
        setIsSpinnerShow(true);
        if (Object.values(userData).length <= 0) return setIsSessionExist(false);

        try {
            const { data: returnedData } = await axios.post(`${apiBaseURL}/api/auth/verify-code/`, { code: data.code, id: verificationId });
            console.log(returnedData)

            if (returnedData.error) {
                setIsSpinnerShow(false);
                swal("Error Ocurred", returnedData.error, "error");
            } else {
                const r_user = await Authentication.signupAndData(`${apiBaseURL}/api/auth/signup`, userData);
                await axios.delete(`${apiBaseURL}/api/util//delete-verification-data/${verificationId}`);
                if (r_user.error) {
                    const allError = Object.values(r_user).map((err, index) => (
                        <li key={index} className="mb-0 text-danger text-start">
                            {err}
                        </li>
                    ));
                    swal(
                        <div className="py-3">
                            <h1 className="">Invalid Information</h1>
                            <ul className="mt-2">{allError}</ul>
                        </div>,
                    );
                } else {
                    swal({
                        title: "RegisteredSuccessful",
                        text: "Profile Creation Successfully",
                        icon: "success",
                        button: true,
                    }).then((value) => {
                        setUserData({});
                        navigate("/login");
                    });
                }
            }
        } catch (e) {
            setIsSpinnerShow(false);
            swal("error Occured", e.message, "error");
        }
    };

    useEffect(() => (document.title = `Verifiction for ${userData?.email}`), []);

    return (
        <div id="verification_area">
            <div className="container">
                {isSessionExist ? (
                    <div className="row">
                        <div className="alert-info p-3 text-center">Don't Reload The page</div>
                        <div className="col-lg-5 col-md-7 col-sm-9 mx-auto mb-5">
                            <div id="signUp_Verification">
                                <div className="VCard">
                                    <img src={VerificationImg} className="img-fluid" alt="" />
                                </div>

                                <div className="verificationDetails">
                                    <div className="verificationText">
                                        <h5>VERIFICATION</h5>
                                        <p>Email has been sent to you email. check the email and Provide a Correct OTP</p>
                                    </div>

                                    <form action="" onSubmit={handleSubmit(handleOtpVerification)}>
                                        <div className="form-floating otpWrapper my-3">
                                            <input type="text" {...register("code", { required: true })} className="form-control primary-input otpInput" id="floatingInput" placeholder="6 Digit OTP" />
                                            <label htmlFor="floatingInput">Paste OTP Here *</label>
                                            {errors.code && <p className="small text-danger">please Enter Your code</p>}
                                        </div>

                                        <button className="btn verifyBtn">
                                            {isSpinnerShow && (
                                                <div className="spinner-border spinner-border-sm me-3" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            )}
                                            Verify
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="p-5 alert-primary  mt-5 text-center">
                        <h1>Session Expired</h1>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Verification;
