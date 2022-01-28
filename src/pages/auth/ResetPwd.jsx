import CardRoundImage from "../../assets/images/pwd-reset-icon.png";
import React, { useState } from "react";
import axios from "axios";
import { apiBaseURL } from "../../Util/API_Info";
import swal from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";

const ResetPwd = () => {
    const [isSpinnerShow, setIsSpinnerShow] = useState(false);
    const navigate = useNavigate();

    const handleFromSubmit = async (e) => {
        e.preventDefault();
        setIsSpinnerShow(true);
        const form = new FormData(e.currentTarget);
        const { email } = Object.fromEntries(form.entries());
        const { data: r_data } = await axios.post(`${apiBaseURL}/api/auth/reset-pwd-code-sending`, { email });
        if (r_data.error) {
            swal("Failed To Send Code", r_data.error, "error");
            setIsSpinnerShow(false);
        }
        {
            const { code, _id, userId } = r_data;
            navigate(`/reset-pwd-code/${_id}/${encodeURIComponent(code)}/${userId}`, { replace: true });
        }
    };

    return (
        <div id="login_area">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div id="loginPopup">
                            <div className="fCard">
                                <img src={CardRoundImage} className="img-fluid" alt="" />
                            </div>

                            <form action="" className="px-2" onSubmit={handleFromSubmit}>
                                <h2 className="title">Reset Password</h2>

                                <div className="form-floating mb-4">
                                    <input required={true} type="text" className="form-control primary-input" name="email" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Enter Your Email</label>
                                </div>

                                <div className="d-flex py-3 align-items-center justify-content-end">
                                    <button className="logBtn btn mb-2">
                                        {isSpinnerShow && (
                                            <div class="spinner-border spinner-border-sm me-3" role="status">
                                                <span class="visually-hidden">Loading...</span>
                                            </div>
                                        )}
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPwd;
