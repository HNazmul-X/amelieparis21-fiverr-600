import React, { useState } from "react";
import CardImage from "../../assets/images/Group 32.png"
import CardRoundImage from "../../assets/images/Group 21.png"
import { useForm } from "react-hook-form";

const FormLoginPopup = () => {
    const [toggle, setToggle] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <section id="create-card-login">
            <div className="container">
                <div className="cardLogin_inner" onClick={() => setToggle(false)}>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="leftArea">
                                <p>To Start The order You must Login</p>
                                <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Login
                                </button>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="rightArea">
                                <img src={CardImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="login_registration">
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog formPopup">
                        {!toggle ? 
                            <div className="modal-content" id="loginPopup">
                                <div className="fCard">
                                    <img src={CardRoundImage} className="img-fluid" alt="" />
                                </div>

                                <form action="" onSubmit={handleSubmit(onSubmit)}>
                                    <h2 className="mb-4 title">Login</h2>

                                    <div className="form-floating my-3 ">
                                        <input type="email" {...register("email", { required: true })} className="form-control primary-input" id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput">Email *</label>
                                        {errors.email?.type === "required" && (
                                            <span className="d-block ps-3 text-danger text-start">Email is required</span>
                                        )}
                                    </div>

                                    <div className="form-floating mb-4">
                                        <input type="password" {...register("password", { required: true })} className="form-control primary-input" id="floatingPassword" placeholder="Password" />
                                        <label htmlFor="floatingPassword">Password *</label>
                                        {errors.password?.type === "required" && (
                                            <span className="d-block ps-3 text-danger text-start">Password is required</span>
                                        )}
                                    </div>

                                    <button className="logBtn btn mb-2">Login</button>
                                    <br />
                                    <button onClick={() => setToggle(true)} id="switch" type="button" className="mb-3 btn createBtn">
                                        Create an Account
                                    </button>
                                    <br />
                                    <a href="/" className="forget">
                                        Forget Your Password ?
                                    </a>
                                </form>
                            </div>
                            :
                            <div className="modal-content" id="registrationPopup">
                                <form action="" onSubmit={handleSubmit(onSubmit)}>
                                    <h2 className="title mb-4 mt-5">Registration</h2>

                                    <div className="d-flex gap-3">
                                        <div className="w-100 form-floating mt-3 ">
                                            <input type="text" {...register("firstName", { required: true })} className="form-control unFatty-input" id="floatingInput" placeholder="name@example.com" />
                                            <label htmlFor="floatingInput">Prénom</label>
                                            {errors.firstName?.type === "required" && (
                                                <span className="d-block ps-3 text-danger text-start">Prénom is required</span>
                                            )}
                                        </div>

                                        <div className="w-100 form-floating mt-3 ">
                                            <input type="text" {...register("lastName", { required: true })} className="form-control unFatty-input" id="floatingInput" placeholder="name@example.com" />
                                            <label htmlFor="floatingInput">Nom*</label>
                                            {errors.lastName?.type === "required" && (
                                                <span className="d-block ps-3 text-danger text-start">Nom is required</span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="form-floating my-3 ">
                                        <input type="email" {...register("email", { required: true })} className="form-control unFatty-input" id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput">Email *</label>
                                        {errors.email?.type === "required" && (
                                            <span className="d-block ps-3 text-danger text-start">Email is required</span>
                                        )}
                                    </div>

                                    <div className="d-flex gap-4 mb-3">
                                        <div className="w-100 form-floating">
                                            <input type="password" {...register("password", { required: true })} className="form-control unFatty-input" id="floatingPassword" placeholder="Password" />
                                            <label htmlFor="floatingPassword">Password *</label>
                                            {errors.password?.type === "required" && (
                                                <span className="d-block ps-3 text-danger text-start">Password is required</span>
                                            )}
                                        </div>
                                        <div className="w-100 form-floating">
                                            <input type="password" {...register("rePassword", { required: true })} className="form-control unFatty-input" id="floatingPassword" placeholder="Password" />
                                            <label htmlFor="floatingPassword">Re-Password *</label>
                                            {errors.rePassword?.type === "required" && (
                                                <span className="d-block ps-3 text-danger text-start">Re-Password is required</span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="d-flex gap-3">
                                        <div className="w-100 form-floating mb-3">
                                            <input type="text" {...register("society", { required: true })} className="form-control unFatty-input" id="floatingPassword" placeholder="Password" />
                                            <label htmlFor="floatingPassword">Society</label>
                                            {errors.society?.type === "required" && (
                                                <span className="d-block ps-3 text-danger text-start">Society is required</span>
                                            )}
                                        </div>

                                        <div className="w-100 form-floating mb-3">
                                            <input type="tel" {...register("phone", { required: true })} className="form-control unFatty-input" id="floatingPassword" placeholder="Password" />
                                            <label htmlFor="floatingPassword">Phone</label>
                                            {errors.phone?.type === "required" && (
                                                <span className="d-block ps-3 text-danger text-start">Phone is required</span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="text" {...register("address", { required: true })} className="form-control unFatty-input" id="floatingPassword" placeholder="Password" />
                                        <label htmlFor="floatingPassword">Adresse *</label>
                                        {errors.address?.type === "required" && (
                                            <span className="d-block ps-3 text-danger text-start">Address is required</span>
                                        )}
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="text" {...register("additionalAddress", { required: true })}  className="form-control unFatty-input" id="floatingPassword" placeholder="Password" />
                                        <label htmlFor="floatingPassword">Adresse supplémentaire  </label>
                                        {errors.additionalAddress?.type === "required" && (
                                            <span className="d-block ps-3 text-danger text-start">Adresse supplémentaire   is required</span>
                                        )}
                                    </div>

                                    <div className="d-flex gap-3">
                                        <div className="w-100 form-floating mb-3">
                                            <input type="text" {...register("postalCode", { required: true })} className="form-control unFatty-input" id="floatingPassword" placeholder="Password" />
                                            <label htmlFor="floatingPassword">Code Postal</label>
                                            {errors.postalCode?.type === "required" && (
                                                <span className="d-block ps-3 text-danger text-start">Code Postal is required</span>
                                            )}
                                        </div>

                                        <div className="w-100 form-floating mb-3">
                                            <input {...register("city", { required: true })} type="text" className="form-control unFatty-input" id="floatingPassword" placeholder="Password" />
                                            <label htmlFor="floatingPassword">Ville *</label>
                                            {errors.city?.type === "required" && (
                                                <span className="d-block ps-3 text-danger text-start">Ville is required</span>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-start my-0 ms-3">Do you have an ambassador code ?</p>
                                        <div className="form-floating mb-3">
                                            <input type="text" {...register("ambassadorCode", { required: true })} className="form-control unFatty-input" id="floatingPassword" placeholder="Password" />
                                            <label htmlFor="floatingPassword">Ambassador Code</label>
                                            {errors.ambassadorCode?.type === "required" && (
                                                <span className="d-block ps-3 text-danger text-start">Ambassador Code is required</span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="validateBtn">
                                        <button className="btn">To Validate</button>
                                    </div>
                                </form>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormLoginPopup;
