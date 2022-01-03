import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FormStepsData } from "../../../data/FormStepData";
import { CreateCardPageContext } from "../CreateCardPage";

const ContactSheet = ({ thisData, componentIndex }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const cardContextData = useContext(CreateCardPageContext);

    const onSubmit = (data) => {
        cardContextData.setCardDetails({ ...data });
        cardContextData.checkingSteps.step1 = true;
        cardContextData.setCheckingSteps({ ...cardContextData.checkingSteps });
        setTimeout(() => {
            if (cardContextData?.checkingSteps?.step1) {
                cardContextData?.setFormStepId(FormStepsData[componentIndex + 1]?.id);
            }
        }, 150);
    };

    return (
        <section id="contact_sheet2">
            <div className="container">
                <div className="contactInner">
                    <form action="" className="formArea" onSubmit={handleSubmit(onSubmit)}>
                        <div className="d-flex gap-3">
                            <div className="w-100 form-floating mb-3">
                                <input
                                    {...register("firstName", { required: true })}
                                    defaultValue={cardContextData?.cardDetails?.firstName}
                                    type="text"
                                    className="form-control primary-input"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                />
                                <label for="floatingInput">First Name</label>
                                {console.log(errors)}
                                {errors.firstName && <span className="d-block ps-3 small text-danger text-start">First Name is required</span>}
                            </div>

                            <div className="w-100 form-floating mb-3">
                                <input
                                    type="text"
                                    {...register("lastName", { required: true })}
                                    defaultValue={cardContextData?.cardDetails?.lastName}
                                    className="form-control primary-input"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                />
                                <label for="floatingInput">Last Name</label>
                                {errors.lastName && <span className="d-block ps-3 small text-danger text-start">Last Name is required</span>}
                            </div>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                {...register("email", { required: true })}
                                defaultValue={cardContextData?.cardDetails?.email}
                                className="form-control primary-input"
                                id="floatingInput"
                                placeholder="name@example.com"
                            />
                            <label for="floatingInput">Email</label>
                            {errors.email && <span className="d-block ps-3 small text-danger text-start">Email is required</span>}
                        </div>

                        <div className="d-flex gap-3">
                            <div className="w-100 form-floating mb-3">
                                <input
                                    type="text"
                                    {...register("company", { required: true })}
                                    defaultValue={cardContextData?.cardDetails?.company}
                                    className="form-control primary-input"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                />
                                <label for="floatingInput">company</label>
                                {errors.company && <span className="d-block ps-3 small text-danger text-start">Password is required</span>}
                            </div>

                            <div className="w-100 form-floating mb-3">
                                <input
                                    type="text"
                                    {...register("position", { required: true })}
                                    defaultValue={cardContextData?.cardDetails?.position}
                                    className="form-control primary-input"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                />
                                <label for="floatingInput">position</label>
                                {errors.position && <span className="d-block ps-3 small text-danger text-start">Re-Password is required</span>}
                            </div>
                        </div>
                        <div className="d-flex gap-3">
                            <div className="w-100 form-floating mb-3">
                                <input
                                    type="text"
                                    {...register("website", { required: true })}
                                    defaultValue={cardContextData?.cardDetails?.website}
                                    className="form-control primary-input"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                />
                                <label for="floatingInput">website</label>
                                {errors.website && <span className="d-block ps-3 small text-danger text-start">Password is required</span>}
                            </div>

                            <div className="w-100 form-floating mb-3">
                                <input
                                    type="text"
                                    {...register("landing", { required: true })}
                                    defaultValue={cardContextData?.cardDetails?.landing}
                                    className="form-control primary-input"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                />
                                <label for="floatingInput">landing</label>
                                {errors.landing && <span className="d-block ps-3 small text-danger text-start">Re-Password is required</span>}
                            </div>
                        </div>

                        <div className="d-flex gap-3">
                            <div className="w-100 form-floating mb-3">
                                <input
                                    type="text"
                                    {...register("society", { required: true })}
                                    defaultValue={cardContextData?.cardDetails?.society}
                                    className="form-control primary-input"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                />
                                <label for="floatingInput">Society</label>
                                {errors.society && <span className="d-block ps-3 small text-danger text-start">Society is required</span>}
                            </div>

                            <div className="w-100 form-floating mb-3">
                                <input
                                    type="tel"
                                    {...register("phone", { required: true })}
                                    defaultValue={cardContextData?.cardDetails?.phone}
                                    className="form-control primary-input"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                />
                                <label for="floatingInput">Phone</label>
                                {errors.phone && <span className="d-block ps-3 small text-danger text-start">Phone is required</span>}
                            </div>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                {...register("address", { required: true })}
                                defaultValue={cardContextData?.cardDetails?.address}
                                className="form-control primary-input"
                                id="floatingInput"
                                placeholder="name@example.com"
                            />
                            <label for="floatingInput">Address</label>
                            {errors.address && <span className="d-block ps-3 small text-danger text-start">Address is required</span>}
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                {...register("additional_address", { required: true })}
                                defaultValue={cardContextData?.cardDetails?.addition_address}
                                className="form-control primary-input"
                                id="floatingInput"
                                placeholder="name@example.com"
                            />
                            <label for="floatingInput">Additional Address</label>
                            {errors.addition_address && <span className="d-block ps-3 small text-danger text-start">Additional Address is required</span>}
                        </div>

                        <div className="d-flex gap-3">
                            <div className="w-100 form-floating mb-3">
                                <input
                                    type="text"
                                    {...register("postalCode", { required: true })}
                                    defaultValue={cardContextData?.cardDetails?.postalCode}
                                    className="form-control primary-input"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                />
                                <label for="floatingInput">Postal code</label>
                                {errors.postalCode && <span className="d-block ps-3 small text-danger text-start">Postal Code is required</span>}
                            </div>

                            <div className="w-100 form-floating mb-3">
                                <input
                                    type="text"
                                    {...register("city", { required: true })}
                                    defaultValue={cardContextData?.cardDetails?.city}
                                    className="form-control primary-input"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                />
                                <label for="floatingInput">City</label>
                                {errors.city && <span className="d-block ps-3 small text-danger text-start">City is required</span>}
                            </div>
                        </div>
                        <div className="d-flex gap-3">
                            <div className="w-100 form-floating mb-3">
                                <input
                                    type="text"
                                    {...register("country", { required: true })}
                                    defaultValue={cardContextData?.cardDetails?.country}
                                    className="form-control primary-input"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                />
                                <label for="floatingInput">country</label>
                                {errors.country && <span className="d-block ps-3 small text-danger text-start">Postal Code is required</span>}
                            </div>

                            <div className="w-100 form-floating mb-3">
                                <input
                                    type="number"
                                    {...register("quantity", { required: true })}
                                    defaultValue={cardContextData?.cardDetails?.quantity}
                                    className="form-control primary-input"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                />
                                <label for="floatingInput">quantity</label>
                                {errors.quantity && <span className="d-block ps-3 small text-danger text-start">City is required</span>}
                            </div>
                        </div>

                        <div className="btnGroup mt-3 d-flex justify-content-center">
                            <button className="btn">Return</button>
                            <button className="btn">Following</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSheet;
{
    /* <div>
             <h2 className="mb-3">Complete the information of your employees</h2>
             <p>Download the reference file, complete the information of your collaborators and send your file by clicking on the button below:</p>
             <div className="mb-3">
                 <button className="my-btn me-3">Download Refference File</button>
                 <button className="my-btn">Send My File (.xlsx)</button>
            </div>
             <p>1 People imported</p>
             <div className="text-center">
                <button className="my-btn me-3">Download Refference File</button>
             </div>
         </div> */
}
