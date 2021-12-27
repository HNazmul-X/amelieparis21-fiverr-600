import React, { useState } from "react";
import CardImage from "../../assets/images/Group 32.png"
import CardRoundImage from "../../assets/images/Group 21.png"

const FormLoginPopup = () => {
    const [toggle, setToggle] = useState(false);

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
                <div class="modal fade" id="exampleModal">
                    <div class="modal-dialog formPopup">
                        {!toggle ? 
                            <div class="modal-content" id="loginPopup">
                                <div class="fCard">
                                    <img src={CardRoundImage} class="img-fluid" alt="" />
                                </div>

                                <form action="">
                                    <h2 class="mb-4 title">Login</h2>

                                    <div class="form-floating my-3 ">
                                        <input type="email" class="form-control primary-input" id="floatingInput" placeholder="name@example.com" />
                                        <label for="floatingInput">Email *</label>
                                    </div>

                                    <div class="form-floating mb-4">
                                        <input type="password" class="form-control primary-input" id="floatingPassword" placeholder="Password" />
                                        <label for="floatingPassword">Password *</label>
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
                                <form action="">
                                    <h2 class="title mb-4 mt-5">Registration</h2>

                                    <div class="d-flex gap-3">
                                        <div class="w-100 form-floating mt-3 ">
                                            <input type="text" class="form-control unFatty-input" id="floatingInput" placeholder="name@example.com" />
                                            <label for="floatingInput">First Name</label>
                                        </div>

                                        <div class="w-100 form-floating mt-3 ">
                                            <input type="text" class="form-control unFatty-input" id="floatingInput" placeholder="name@example.com" />
                                            <label for="floatingInput">Last Name</label>
                                        </div>
                                    </div>

                                    <div class="form-floating my-3 ">
                                        <input type="email" class="form-control unFatty-input" id="floatingInput" placeholder="name@example.com" />
                                        <label for="floatingInput">Email *</label>
                                    </div>

                                    <div class="d-flex gap-4 mb-3">
                                        <div class="w-100 form-floating">
                                            <input type="password" class="form-control unFatty-input" id="floatingPassword" placeholder="Password" />
                                            <label for="floatingPassword">Password *</label>
                                        </div>
                                        <div class="w-100 form-floating">
                                            <input type="password" class="form-control unFatty-input" id="floatingPassword" placeholder="Password" />
                                            <label for="floatingPassword">Password *</label>
                                        </div>
                                    </div>

                                    <div class="d-flex gap-3">
                                        <div class="w-100 form-floating mb-3">
                                            <input type="text" class="form-control unFatty-input" id="floatingPassword" placeholder="Password" />
                                            <label for="floatingPassword">Society</label>
                                        </div>

                                        <div class="w-100 form-floating mb-3">
                                            <input type="tel" class="form-control unFatty-input" id="floatingPassword" placeholder="Password" />
                                            <label for="floatingPassword">Phone</label>
                                        </div>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control unFatty-input" id="floatingPassword" placeholder="Password" />
                                        <label for="floatingPassword">Address</label>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control unFatty-input" id="floatingPassword" placeholder="Password" />
                                        <label for="floatingPassword">Additional Address</label>
                                    </div>

                                    <div class="d-flex gap-3">
                                        <div class="w-100 form-floating mb-3">
                                            <input type="text" class="form-control unFatty-input" id="floatingPassword" placeholder="Password" />
                                            <label for="floatingPassword">Postal code</label>
                                        </div>

                                        <div class="w-100 form-floating mb-3">
                                            <input type="text" class="form-control unFatty-input" id="floatingPassword" placeholder="Password" />
                                            <label for="floatingPassword">City</label>
                                        </div>
                                    </div>

                                    <div>
                                        <p class="text-start my-0 ms-3">Do you have an ambassador code ?</p>
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control unFatty-input" id="floatingPassword" placeholder="Password" />
                                            <label for="floatingPassword">Ambassador Code</label>
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
