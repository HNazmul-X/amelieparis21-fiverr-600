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
            <div class="container">
                <div class="cardLogin_inner" onClick={() => setToggle(false)}>
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <div class="leftArea">
                                <p>To Start The order You must Login</p>
                                <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Login
                                </button>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="rightArea">
                                <img src={CardImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="login_registration">
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog formPopup">
                        {!toggle ? 
                            <div class="modal-content" id="loginPopup">
                                <div class="fCard">
                                    <img src={CardRoundImage} class="img-fluid" alt="" />
                                </div>

                                <form action="" onSubmit={handleSubmit(onSubmit)}>
                                    <h2 class="mb-4 title">Login</h2>

                                    <div class="form-floating my-3 ">
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

                                    <button class="logBtn btn mb-2">Login</button>
                                    <br />
                                    <button onClick={() => setToggle(true)} id="switch" type="button" class="mb-3 btn createBtn">
                                        Create an Account
                                    </button>
                                    <br />
                                    <a href="/" class="forget">
                                        Forget Your Password ?
                                    </a>
                                </form>
                            </div>
                            :
                            <div class="modal-content" id="registrationPopup">
                                <form action="" onSubmit={handleSubmit(onSubmit)}>
                                    <h2 class="title mb-4 mt-5">Registration</h2>

                                    <div class="d-flex gap-3">
                                        <div class="w-100 form-floating mt-3 ">
                                            <input type="text" {...register("firstName", { required: true })} class="form-control unFatty-input" id="floatingInput" placeholder="name@example.com" />
                                            <label for="floatingInput">First Name</label>
                                            {errors.firstName?.type === "required" && (
                                                <span className="d-block ps-3 text-danger text-start">First Name is required</span>
                                            )}
                                        </div>

                                        <div class="w-100 form-floating mt-3 ">
                                            <input type="text" {...register("lastName", { required: true })} class="form-control unFatty-input" id="floatingInput" placeholder="name@example.com" />
                                            <label for="floatingInput">Last Name</label>
                                            {errors.lastName?.type === "required" && (
                                                <span className="d-block ps-3 text-danger text-start">Last Name is required</span>
                                            )}
                                        </div>
                                    </div>

                                    <div class="form-floating my-3 ">
                                        <input type="email" {...register("email", { required: true })} class="form-control unFatty-input" id="floatingInput" placeholder="name@example.com" />
                                        <label for="floatingInput">Email *</label>
                                        {errors.email?.type === "required" && (
                                            <span className="d-block ps-3 text-danger text-start">Email is required</span>
                                        )}
                                    </div>

                                    <div class="d-flex gap-4 mb-3">
                                        <div class="w-100 form-floating">
                                            <input type="password" {...register("password", { required: true })} class="form-control unFatty-input" id="floatingPassword" placeholder="Password" />
                                            <label for="floatingPassword">Password *</label>
                                            {errors.password?.type === "required" && (
                                                <span className="d-block ps-3 text-danger text-start">Password is required</span>
                                            )}
                                        </div>
                                        <div class="w-100 form-floating">
                                            <input type="password" {...register("rePassword", { required: true })} class="form-control unFatty-input" id="floatingPassword" placeholder="Password" />
                                            <label for="floatingPassword">Re-Password *</label>
                                            {errors.rePassword?.type === "required" && (
                                                <span className="d-block ps-3 text-danger text-start">Re-Password is required</span>
                                            )}
                                        </div>
                                    </div>

                                    <div class="d-flex gap-3">
                                        <div class="w-100 form-floating mb-3">
                                            <input type="text" {...register("society", { required: true })} class="form-control unFatty-input" id="floatingPassword" placeholder="Password" />
                                            <label for="floatingPassword">Society</label>
                                            {errors.society?.type === "required" && (
                                                <span className="d-block ps-3 text-danger text-start">Society is required</span>
                                            )}
                                        </div>

                                        <div class="w-100 form-floating mb-3">
                                            <input type="tel" {...register("phone", { required: true })} class="form-control unFatty-input" id="floatingPassword" placeholder="Password" />
                                            <label for="floatingPassword">Phone</label>
                                            {errors.phone?.type === "required" && (
                                                <span className="d-block ps-3 text-danger text-start">Phone is required</span>
                                            )}
                                        </div>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input type="text" {...register("address", { required: true })} class="form-control unFatty-input" id="floatingPassword" placeholder="Password" />
                                        <label for="floatingPassword">Address</label>
                                        {errors.address?.type === "required" && (
                                            <span className="d-block ps-3 text-danger text-start">Address is required</span>
                                        )}
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input type="text" {...register("additionalAddress", { required: true })}  class="form-control unFatty-input" id="floatingPassword" placeholder="Password" />
                                        <label for="floatingPassword">Additional Address</label>
                                        {errors.additionalAddress?.type === "required" && (
                                            <span className="d-block ps-3 text-danger text-start">Additional Address is required</span>
                                        )}
                                    </div>

                                    <div class="d-flex gap-3">
                                        <div class="w-100 form-floating mb-3">
                                            <input type="text" {...register("postalCode", { required: true })} class="form-control unFatty-input" id="floatingPassword" placeholder="Password" />
                                            <label for="floatingPassword">Postal code</label>
                                            {errors.postalCode?.type === "required" && (
                                                <span className="d-block ps-3 text-danger text-start">Postal Code is required</span>
                                            )}
                                        </div>

                                        <div class="w-100 form-floating mb-3">
                                            <input {...register("city", { required: true })} type="text" class="form-control unFatty-input" id="floatingPassword" placeholder="Password" />
                                            <label for="floatingPassword">City</label>
                                            {errors.city?.type === "required" && (
                                                <span className="d-block ps-3 text-danger text-start">City is required</span>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <p class="text-start my-0 ms-3">Do you have an ambassador code ?</p>
                                        <div class="form-floating mb-3">
                                            <input type="text" {...register("ambassadorCode", { required: true })} class="form-control unFatty-input" id="floatingPassword" placeholder="Password" />
                                            <label for="floatingPassword">Ambassador Code</label>
                                            {errors.ambassadorCode?.type === "required" && (
                                                <span className="d-block ps-3 text-danger text-start">Ambassador Code is required</span>
                                            )}
                                        </div>
                                    </div>

                                    <div class="validateBtn">
                                        <button class="btn">To Validate</button>
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
