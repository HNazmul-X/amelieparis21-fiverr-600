import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import CardRoundImage from "../../assets/images/Group 22.png";
import { useAuth } from "../../Context/UserContext";
import Authentication from "../../Util/Authentication";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const location = useLocation();
    const auth = useAuth()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"

    const submitLoginData = async (data) => {
        const returnedData = await Authentication.loginAndData("http://localhost:8080/api/auth/login", { ...data });
        auth.loginUser(returnedData,() => navigate(from,{replace:true}))
    };

    return (
        <div id="login_area">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div id="loginPopup">
                            <div class="fCard">
                                <img src={CardRoundImage} class="img-fluid" alt="" />
                            </div>

                            <form action="" className="px-2" onSubmit={handleSubmit(submitLoginData)}>
                                <h2 class="title">Login</h2>

                                <div class="form-floating my-3">
                                    <input type="email" {...register("usernameOrEmail", { required: true })} class="form-control primary-input" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Email *</label>
                                    {errors.usernameOrEmail?.type === "required" && <span className="d-block ps-3 text-danger text-start">Email or username is required</span>}
                                </div>

                                <div class="form-floating mb-4">
                                    <input type="password" {...register("password", { required: true })} class="form-control primary-input" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Password *</label>
                                    {errors.password?.type === "required" && <span className="d-block ps-3 text-danger text-start">Password is required</span>}
                                </div>

                                <div className="d-flex py-3 align-items-center justify-content-center">
                                    <a href="/signup" class="mb-3 btn createBtn">
                                        Resister
                                    </a>
                                    <button class="logBtn btn mb-2">Login</button>
                                </div>
                                <a href="/" class="forget">
                                    Forget Your Password ?
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
