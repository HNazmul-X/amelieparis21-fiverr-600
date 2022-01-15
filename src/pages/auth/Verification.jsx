import React, { useState } from "react";
import VerificationImg from "../../assets/images/verification.png";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import swal from "@sweetalert/with-react";
import axios from "axios";
import { useAuth } from "../../Context/UserContext";

const Verification = () => {
  /* Using Hooks here */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { verificationId, code, userId } = useParams();
  const auth = useAuth();
  const [isSpinnerShow, setIsSpinnerShow] = useState(false);
  const navigate = useNavigate();

  /* verifying code */
  const handleOtpVerification = async (data) => {
    setIsSpinnerShow(true);
    try {
      const { data: returnedData } = await axios.post(
        "https://onecard-pro.herokuapp.com/api/auth/verify-profile/",
        { code: data.code, id: verificationId, userId }
      );
      if (returnedData.error) {
        setIsSpinnerShow(false);
        swal("Error Ocurred", returnedData.error, "error");
      } else {
        const user = {
          token: returnedData?.token,
          isLoggedIn: returnedData?.isLoggedIn,
          ...returnedData?.user,
        };
        auth.loginUser(user, () => navigate("/", { replace: true }));
      }
    } catch (e) {
      setIsSpinnerShow(false);
      swal("error Occured", e.message, "error");
    }
  };

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
                  <p>
                    Email has been sent to you email. check the email and
                    Provide a Correct OTP
                  </p>
                </div>

                <form action="" onSubmit={handleSubmit(handleOtpVerification)}>
                  <div className="form-floating otpWrapper my-3">
                    <input
                      type="text"
                      {...register("code", { required: true })}
                      class="form-control primary-input otpInput"
                      id="floatingInput"
                      placeholder="6 Digit OTP"
                    />
                    <label for="floatingInput">6 Digit OTP *</label>
                    {errors.code && (
                      <p className="small text-danger">
                        please Enter Your code
                      </p>
                    )}
                  </div>

                  <button className="btn verifyBtn">
                    {isSpinnerShow && (
                      <div
                        class="spinner-border spinner-border-sm me-3"
                        role="status"
                      >
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

export default Verification;
