import React from 'react';
import CardRoundImage from "../../assets/images/Group 22.png";

const SignUp = () => {
    return (
        <div id='signup_area'>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <div class="modal-content" id="registrationPopup">
                            <div class="fCard">
                                <img src={CardRoundImage} class="img-fluid" alt="" />
                            </div>

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
                                    <button class="btn">Register</button>
                                    <p>Already Have an Account ? <a href="/login">Login</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;