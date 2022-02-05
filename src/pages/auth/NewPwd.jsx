import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardRoundImage from "../../assets/images/pwd-reset-icon.png";
import { useAuth } from "../../Context/UserContext";
import { apiBaseURL } from "../../Util/API_Info";

const NewPwd = () => {
    const [isSpinnerShow, setIsSpinnerShow] = useState(false);
    const [pwdShow, setPwdShow] = useState(false);
    const [isSessionExpired, setIsSessionExpired] = useState(false);
    const [error, setError] = useState("");
    const { verificationId, code, userId } = useParams();
    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(async () => {
        const { data: r_data } = await axios.post(`${apiBaseURL}/api/auth/is-verification-session-exist`, { id: verificationId, code, userid: userId });
        if (r_data.error) {
            setIsSessionExpired(true);
        } else {
            setIsSessionExpired(false);
        }
    }, []);

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        setIsSpinnerShow(true);
        const form = new FormData(e.target);
        const { password, confirmPassword } = Object.fromEntries(form.entries());
        if (password !== confirmPassword) {
            setIsSpinnerShow(false);
            setError("Password Doesn't Match");
        } else {
            if (password.length <= 6) {
                setIsSpinnerShow(false);
                setError("Password Must be Length of 8 charectars");
            } else {
                setError("");
                const { data: r_data } = await axios.post(`${apiBaseURL}/api/auth/change-password/${userId}/${verificationId}`, { password });
                auth.loginUser(r_data, () => navigate("/", { replace: true }));
            }
        }
    };
    return (
        <div id="verification_area">
            <div className="container">
                <div className="row">
                    {!isSessionExpired ? (
                        <div className="col-lg-5 col-md-7 col-sm-9 mx-auto">
                            <div id="signUp_Verification">
                                <div className="VCard col-5 pb-0 mx-auto">
                                    <img src={CardRoundImage} className="w-100 shadow-none" alt="" />
                                </div>

                                <div className="verificationDetails">
                                    <div className="verificationText">
                                        <h5>New Password</h5>
                                    </div>

                                    <form action="" onSubmit={handleSubmitForm}>
                                        <div className="form-floating mb-4">
                                            <input
                                                type={`${pwdShow ? "text" : "password"}`}
                                                className="form-control primary-input"
                                                id="floatingPassword"
                                                name="password"
                                                placeholder="Password"
                                                required
                                            />
                                            <label for="floatingPassword">Enter Your New Password</label>
                                        </div>
                                        <div className="form-floating mb-4">
                                            <input
                                                type={`${pwdShow ? "text" : "password"}`}
                                                className="form-control primary-input"
                                                id="floatingPassword"
                                                name="confirmPassword"
                                                placeholder="Password"
                                                required
                                            />
                                            <label for="floatingPassword">Re-Type you New Password</label>
                                        </div>
                                        {error && <p className="text-danger">{error}</p>}
                                        <div className="text-start" style={{ userSelect: "none" }}>
                                            <input onClick={(e) => setPwdShow(e.currentTarget.checked)} type="checkbox" id="passwordShowCheckbox" />
                                            <label htmlFor="passwordShowCheckbox" className="ms-2">
                                                Show Password
                                            </label>
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
                    ) : (
                        <div className="p-5 alert-danger mt-3 text-center">
                            <h1>Sorry Your Session Expired</h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NewPwd;
