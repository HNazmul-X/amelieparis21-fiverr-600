import React from 'react';
import { useForm } from "react-hook-form";

const ContactSheet = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
    } 

    return (
        <section id="contact_sheet2">
            <div class="container">
                <div class="contactInner">
                    <form action="" class="formArea" onSubmit={handleSubmit(onSubmit)}>
                        <div class="d-flex gap-3">
                            <div class="w-100 form-floating mb-3">
                                <input {...register("firstName", { required: true })} type="text" class="form-control primary-input" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">First Name</label>
                                {errors.firstName?.type === "required" && (
                                    <span className="d-block ps-3 text-danger text-start">First Name is required</span>
                                )}
                            </div>

                            <div class="w-100 form-floating mb-3">
                                <input type="text" {...register("lastName", { required: true })} class="form-control primary-input" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Last Name</label>
                                {errors.lastName?.type === "required" && (
                                    <span className="d-block ps-3 text-danger text-start">Last Name is required</span>
                                )}
                            </div>
                        </div>

                        <div class="form-floating mb-3">
                            <input type="email" {...register("email", { required: true })} class="form-control primary-input" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email</label>
                            {errors.email?.type === "required" && (
                                <span className="d-block ps-3 text-danger text-start">Email is required</span>
                            )}
                        </div>

                        <div class="d-flex gap-3">
                            <div class="w-100 form-floating mb-3">
                                <input type="password" {...register("password", { required: true })} class="form-control primary-input" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Password</label>
                                {errors.password?.type === "required" && (
                                    <span className="d-block ps-3 text-danger text-start">Password is required</span>
                                )}
                            </div>

                            <div class="w-100 form-floating mb-3">
                                <input type="password" {...register("rePassword", { required: true })} class="form-control primary-input" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Re-Password</label>
                                {errors.rePassword?.type === "required" && (
                                    <span className="d-block ps-3 text-danger text-start">Re-Password is required</span>
                                )}
                            </div>
                        </div>

                        <div class="d-flex gap-3">
                            <div class="w-100 form-floating mb-3">
                                <input type="text" {...register("society", { required: true })} class="form-control primary-input" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Society</label>
                                {errors.society?.type === "required" && (
                                    <span className="d-block ps-3 text-danger text-start">Society is required</span>
                                )}
                            </div>

                            <div class="w-100 form-floating mb-3">
                                <input type="tel" {...register("phone", { required: true })} class="form-control primary-input" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Phone</label>
                                {errors.phone?.type === "required" && (
                                    <span className="d-block ps-3 text-danger text-start">Phone is required</span>
                                )}
                            </div>
                        </div>

                        <div class="form-floating mb-3">
                            <input type="text" {...register("address", { required: true })} class="form-control primary-input" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Address</label>
                            {errors.address?.type === "required" && (
                                <span className="d-block ps-3 text-danger text-start">Address is required</span>
                            )}
                        </div>

                        <div class="form-floating mb-3">
                            <input type="text" {...register("additionalAddress", { required: true })} class="form-control primary-input" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Additional Address</label>
                            {errors.additionalAddress?.type === "required" && (
                                <span className="d-block ps-3 text-danger text-start">Additional Address is required</span>
                            )}
                        </div>

                        <div class="d-flex gap-3">
                            <div class="w-100 form-floating mb-3">
                                <input type="password" {...register("postalCode", { required: true })} class="form-control primary-input" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Postal code</label>
                                {errors.postalCode?.type === "required" && (
                                    <span className="d-block ps-3 text-danger text-start">Postal Code is required</span>
                                )}
                            </div>

                            <div class="w-100 form-floating mb-3">
                                <input type="password" {...register("city", { required: true })} class="form-control primary-input" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">City</label>
                                {errors.city?.type === "required" && (
                                    <span className="d-block ps-3 text-danger text-start">City is required</span>
                                )}
                            </div>
                        </div>

                        <div class="btnGroup">
                            <a href='/' class="btn returnBtn">Return</a>
                            <button class="btn">Following</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
         
    );
};

export default ContactSheet;
{/* <div>
             <h2 class="mb-3">Complete the information of your employees</h2>
             <p>Download the reference file, complete the information of your collaborators and send your file by clicking on the button below:</p>
             <div class="mb-3">
                 <button class="my-btn me-3">Download Refference File</button>
                 <button class="my-btn">Send My File (.xlsx)</button>
            </div>
             <p>1 People imported</p>
             <div class="text-center">
                <button class="my-btn me-3">Download Refference File</button>
             </div>
         </div> */}