import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CardRoundImage from "../../assets/images/Group 22.png";
import vector from "../../assets/images/Vector.png";
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div id='admin_login'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div id="loginInner">
                        <div className="adminCard">
                                <img src={CardRoundImage} className="img-fluid" alt="" />
                            </div>

                            <form action="" className='px-2' onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <h1 className="title">WELCOME</h1>
                                    <p className='subTitle'>Login to Continue</p>
                                </div>

                                <div className="form-floating my-3 ">
                                    <input type="email" {...register("email", { required: true })} className="form-control primary-input" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Email *</label>
                                    {errors.email?.type === "required" && (
                                        <span className="d-block ps-3 text-danger text-start">Email is required</span>
                                    )}
                                </div>

                                <div className="form-floating mb-4">
                                    <input type="password" {...register("password", { required: true })} className="form-control primary-input" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Password *</label>
                                    {errors.password?.type === "required" && (
                                        <span className="d-block ps-3 text-danger text-start">Password is required</span>
                                    )}
                                </div>

                                <button className="logBtn btn mb-2">
                                    Login
                                    <img src={vector} alt="" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;