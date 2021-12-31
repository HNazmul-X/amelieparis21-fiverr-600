import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CardRoundImage from "../../assets/images/Group 22.png";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div id="login_area">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div  id="loginPopup">
                            <div class="fCard">
                                <img src={CardRoundImage} class="img-fluid" alt="" />
                            </div>

                            <form action="" className='px-2' onSubmit={handleSubmit(onSubmit)}>
                                <h2 class="title">Login</h2>

                                <div class="form-floating my-3">
                                    <input type="email" {...register("email", { required: true })} class="form-control primary-input" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Email *</label>
                                    {errors.email?.type === "required" && (
                                        <span className="d-block ps-3 text-danger text-start">Email is required</span>
                                    )}
                                </div>

                                <div class="form-floating mb-4">
                                    <input type="password" {...register("password", { required: true })} class="form-control primary-input" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Password *</label>
                                    {errors.password?.type === "required" && (
                                        <span className="d-block ps-3 text-danger text-start">Password is required</span>
                                    )}
                                </div>

                                <div className='d-flex py-3 align-items-center justify-content-center'>
                                    <a href='/signup' class="mb-3 btn createBtn">
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