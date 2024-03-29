import swal from "@sweetalert/with-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CardRoundImage from "../../assets/images/Group 22.png";
import { useAuth } from "../../Context/UserContext";
import { apiBaseURL } from "../../Util/API_Info";
import Authentication from "../../Util/Authentication";
import HomePage from "../Home-page/HomePage";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const location = useLocation();
    const auth = useAuth();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const [isSpinnerShow, setIsSpinnerShow] = useState(false);

    const submitLoginData = async (data) => {
        setIsSpinnerShow(true);
        try {
            const returnedData = await Authentication.loginAndData(`${apiBaseURL}/api/auth/login`, { ...data });
            auth.loginUser(returnedData, () => navigate(from, { replace: true }));
            setIsSpinnerShow(false);
        } catch (e) {
            setIsSpinnerShow(false);
            swal("Invalid Credentials", "Please check is your username or password is correct. otherwise you've entered a wrong password", "error");
        }
    };

    useEffect(() => (document.title = "Login Onecard Pro"), []);


    const showingCredentialPopup = () => {
        swal(
            <div>
                <h1 className="py-2 text-center">Login Credentials</h1>
                <code className="d-block">Admin: admin@onecardpro.com / admin</code>
                <code className="d-block">user: user@onecardpro.com / user </code>
                <code className="d-block">pass for both: Pass1234##</code>
            </div>,
        );
    }

    return (
        <div id="login_area">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <HomePage.Alert onClick={() => showingCredentialPopup()} message={"Click Here to See Login Details"}/>
                        <div id="loginPopup">
                            <div className="fCard">
                                <img src={CardRoundImage} className="img-fluid" alt="" />
                            </div>

                            <form action="" className="px-2" onSubmit={handleSubmit(submitLoginData)}>
                                <h2 className="title">Login</h2>

                                <div className="form-floating my-3">
                                    <input
                                        type="text"
                                        {...register("usernameOrEmail", { required: true })}
                                        className="form-control primary-input"
                                        id="floatingInput"
                                        name="usernameOrEmail"
                                        placeholder="name@example.com"
                                    />
                                    <label htmlFor="floatingInput">Username Or Email</label>
                                    {errors.usernameOrEmail?.type === "required" && <span className="d-block ps-3 text-danger text-start">Email or username is required</span>}
                                </div>

                                <div className="form-floating mb-4">
                                    <input type="password" {...register("password", { required: true })} className="form-control primary-input" id="floatingPassword" placeholder="Password" />
                                    <label htmlFor="floatingPassword">Password</label>
                                    {errors.password?.type === "required" && <span className="d-block ps-3 text-danger text-start">Password is required</span>}
                                </div>

                                <div className="d-flex py-3 align-items-center justify-content-center">
                                    <Link to="/signup" className="mb-3 px-3 btn createBtn">
                                        Create Account
                                    </Link>
                                    <button type="submit" className="logBtn btn mb-2 px-3">
                                        {isSpinnerShow && (
                                            <div className="spinner-border spinner-border-sm" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        )}{" "}
                                        Login
                                    </button>
                                </div>
                                <Link to={"/reset-pwd"} className="forget">
                                    Forgat Password ?
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
