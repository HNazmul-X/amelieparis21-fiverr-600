import swal from "@sweetalert/with-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CardRoundImage from "../../assets/images/group 23.png";
import { apiBaseURL } from "../../Util/API_Info";
import Authentication from "../../Util/Authentication";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const [isSpinnerShow, setIsSpinnerShow] = useState(false);

    const onSubmit = async (data) => {
        setIsSpinnerShow(true);
        const signedUpUser = await Authentication.signupAndData(`${apiBaseURL}/api/auth/signup`, {
            username: data?.username,
            password: data?.password,
            confirmPassword: data?.confirmPassword,
            email: data?.email,
            firstname: data?.firstName,
            lastname: data?.lastName,
            address: data?.address,
            additional_address: data?.additional_address,
            society: data?.society,
            phone: data?.phone,
            city: data?.city,
            ambassador_code: data?.ambassador_code,
            postalCode: data?.postalCode,
        });

        if (signedUpUser.error) {
            setIsSpinnerShow(false)
            console.log(signedUpUser);
            const allError = Object.values(signedUpUser).map((err) => <li className="mb-0 text-danger text-start">{err}</li>);
            console.log(allError);

            swal(
                <div className="py-3">
                    <h1 className="">Invalid Information</h1>
                    <ul className="mt-2">{allError}</ul>
                </div>,
            );
        } else {
            console.log("I am entering");
            navigate(`/verify-profile/${signedUpUser?.verificationInfo?._id}/${encodeURIComponent(signedUpUser?.verificationInfo?.code)}/${signedUpUser?.updatedUser?._id}`, {
                replace: true,
            });
        }
    };

    return (
        <div id="signup_area">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <div className="modal-content" id="registrationPopup">
                            <div className="fCard">
                                <img src={CardRoundImage} className="img-fluid" alt="" />
                            </div>

                            <form action="" onSubmit={handleSubmit(onSubmit)}>
                                <h2 className="title mb-4 mt-5">Registration</h2>

                                <div className="d-flex gap-3 mb-5">
                                    <div className="w-100 form-floating mt-3 ">
                                        <input type="text" {...register("firstName", { required: true })} className="form-control unFatty-input" id="floatingInput44" placeholder="name@example.com" />
                                        <label for="floatingInput44">First Name</label>
                                        {errors.firstName?.type === "required" && <span className="d-block ps-3 text-danger text-start">First Name is required</span>}
                                    </div>

                                    <div className="w-100 form-floating mt-3 ">
                                        <input type="text" {...register("lastName", { required: true })} className="form-control unFatty-input" id="floatingInput1" placeholder="name@example.com" />
                                        <label for="floatingInput1">Last Name</label>
                                        {errors.lastName?.type === "required" && <span className="d-block ps-3 text-danger text-start">Last Name is required</span>}
                                    </div>
                                </div>

                                <div className="form-floating my-4 mb-5 ">
                                    <input type="email" {...register("email", { required: true })} className="form-control unFatty-input" id="floatingInput2" placeholder="name@example.com" />
                                    <label for="floatingInput2">Email *</label>
                                    {errors.email?.type === "required" && <span className="d-block ps-3 text-danger text-start">Email is required</span>}
                                </div>
                                <div className="form-floating my-4 mb-5 ">
                                    <input
                                        type="text"
                                        {...register("username", { required: true })}
                                        name="username"
                                        className="form-control unFatty-input"
                                        id="floatingInput5"
                                        placeholder="name@example.com"
                                    />
                                    <label for="floatingInput5">Username</label>
                                    {errors.username?.type === "required" && <span className="d-block ps-3 text-danger text-start">Username is required</span>}
                                </div>

                                <div className="d-flex gap-4 my-4">
                                    <div className="w-100 form-floating">
                                        <input type="password" {...register("password", { required: true })} className="form-control unFatty-input" id="floatingPassword45" placeholder="Password" />
                                        <label for="floatingPassword45">Password *</label>
                                        {errors.password?.type === "required" && <span className="d-block ps-3 text-danger text-start">Password is required</span>}
                                    </div>
                                    <div className="w-100 form-floating">
                                        <input
                                            type="password"
                                            {...register("confirmPassword", { required: true })}
                                            className="form-control unFatty-input"
                                            id="floatingPassword76"
                                            placeholder="Password"
                                        />
                                        <label for="floatingPassword76">Re-Password *</label>
                                        {errors.confirmPassword?.type === "required" && <span className="d-block ps-3 text-danger text-start">Re-Password is required</span>}
                                    </div>
                                </div>

                                <div className="d-flex gap-3">
                                    <div className="w-100 form-floating my-3">
                                        <input type="text" {...register("society", { required: true })} className="form-control unFatty-input" id="floatingPassword123" placeholder="Password" />
                                        <label for="floatingPassword123">Society</label>
                                        {errors.society?.type === "required" && <span className="d-block ps-3 text-danger text-start">Society is required</span>}
                                    </div>

                                    <div className="w-100 form-floating my-3">
                                        <input type="tel" {...register("phone", { required: true })} className="form-control unFatty-input" id="floatingPassword786" placeholder="Password" />
                                        <label for="floatingPassword786">Phone</label>
                                        {errors.phone?.type === "required" && <span className="d-block ps-3 text-danger text-start">Phone is required</span>}
                                    </div>
                                </div>

                                <div className="form-floating my-4 mb-5">
                                    <input type="text" {...register("address", { required: true })} className="form-control unFatty-input" id="floatingPassword2324" placeholder="Password" />
                                    <label for="floatingPassword2324">Address</label>
                                    {errors.address?.type === "required" && <span className="d-block ps-3 text-danger text-start">Address is required</span>}
                                </div>

                                <div className="form-floating my-4">
                                    <input
                                        type="text"
                                        {...register("additional_address", { required: false })}
                                        className="form-control unFatty-input"
                                        id="floatingPassword127"
                                        placeholder="Password"
                                    />
                                    <label for="floatingPassword127">Additional Address</label>
                                </div>

                                <div className="d-flex gap-3">
                                    <div className="w-100 form-floating my-4">
                                        <input type="text" {...register("postalCode", { required: true })} className="form-control unFatty-input" id="floatingPassword48" placeholder="Password" />
                                        <label for="floatingPassword48">Postal code</label>
                                        {errors.postalCode?.type === "required" && <span className="d-block ps-3 text-danger text-start">Postal Code is required</span>}
                                    </div>

                                    <div className="w-100 form-floating my-4">
                                        <input type="text" {...register("city", { required: true })} className="form-control unFatty-input" id="floatingPass324" placeholder="Password" />
                                        <label for="floatingPass324">City</label>
                                        {errors.city?.type === "required" && <span className="d-block ps-3 text-danger text-start">City is required</span>}
                                    </div>
                                </div>

                                <div>
                                    <p className="text-start my-0 ms-3">Do you have an ambassador code ?</p>
                                    <div className="form-floating my-3">
                                        <input
                                            type="text"
                                            {...register("ambassador_code", { required: false })}
                                            className="form-control unFatty-input"
                                            id="floatingPassword39"
                                            placeholder="Password"
                                        />
                                        <label for="floatingPassword39">Ambassador Code</label>
                                        {errors.ambassador_code?.type === "required" && <span className="d-block ps-3 text-danger text-start">Ambassador Code is required</span>}
                                    </div>
                                </div>

                                <div className="validateBtn">
                                    <button className="btn d-inline-flex align-items-center ">
                                        {isSpinnerShow && (
                                            <div class="spinner-border spinner-border-sm me-3" role="status">
                                                <span class="visually-hidden">Loading...</span>
                                            </div>
                                        )}
                                        Register
                                    </button>
                                    <p>
                                        Already Have an Account ? <a href="/login">Login</a>
                                    </p>
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
