import React, { useState } from "react";
import { useForm } from "react-hook-form";

const OrderValidation = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [sameBillingAddress, setSameBillingAddress] = useState(false);

  const onSubmit = (data) => {
    // if (sameBillingAddress) {
    //   data.b_firstName = "Anamul";
    //   data.b_address = data.address;
    //   data.b_firstName = "Anamul";
    //   data.b_firstName = "Anamul";
    // }
    console.log(data);
  };

  return (
    <section id="order_validate">
      <div class="container">
        <div class="validateInner">
          <form
            action=""
            class="validateForm"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3 class="title">Validate your Order</h3>
            <div>
              <h6 class="subTitle">Delivary</h6>

              <div class="d-flex gap-3">
                <div class="w-100 form-floating mb-3">
                  <input
                    type="text"
                    class="form-control primary-input"
                    id="floatingInput"
                    placeholder="name@example.com"
                    {...register("firstName", { required: true })}
                  />
                  <label for="floatingInput">First Name</label>
                  {errors.firstName?.type === "required" && (
                    <span className="text-danger ">First name is required</span>
                  )}
                </div>

                <div class="w-100 form-floating mb-3">
                  <input
                    type="text"
                    class="form-control primary-input"
                    id="floatingInput"
                    placeholder="name@example.com"
                    {...register("lastName", { required: true })}
                  />
                  <label for="floatingInput">Last Name</label>
                  {errors.lastName?.type === "required" && (
                    <span className="text-danger ">Last name is required</span>
                  )}
                </div>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control primary-input"
                  id="floatingInput"
                  placeholder="name@example.com"
                  {...register("society", { required: true })}
                />
                <label for="floatingInput">Society</label>
                {errors.society?.type === "required" && (
                  <span className="text-danger ">Society is required</span>
                )}
              </div>

              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control primary-input"
                  id="floatingInput"
                  placeholder="name@example.com"
                  {...register("address", { required: true })}
                />
                <label for="floatingInput">Address</label>
                {errors.address?.type === "required" && (
                  <span className="text-danger ">Address is required</span>
                )}
              </div>

              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control primary-input"
                  id="floatingInput"
                  placeholder="name@example.com"
                  {...register("additionalAddress", { required: true })}
                />
                <label for="floatingInput">Additional Address</label>
                {errors.additionalAddress?.type === "required" && (
                  <span className="text-danger ">
                    Additional Address is required
                  </span>
                )}
              </div>

              <div class="d-flex gap-3">
                <div class="w-100 form-floating mb-3">
                  <input
                    type="password"
                    class="form-control primary-input"
                    id="floatingInput"
                    placeholder="name@example.com"
                    {...register("postalCode", { required: true })}
                  />
                  <label for="floatingInput">Postal code</label>
                  {errors.postalCode?.type === "required" && (
                    <span className="text-danger ">
                      Postal code is required
                    </span>
                  )}
                </div>

                <div class="w-100 form-floating mb-3">
                  <input
                    type="password"
                    class="form-control primary-input"
                    id="floatingInput"
                    placeholder="name@example.com"
                    {...register("city", { required: true })}
                  />
                  <label for="floatingInput">City</label>
                  {errors.city?.type === "required" && (
                    <span className="text-danger ">City is required</span>
                  )}
                </div>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control primary-input"
                  id="floatingInput"
                  placeholder="name@example.com"
                  {...register("country", { required: true })}
                />
                <label for="floatingInput">Country</label>
                {errors.country?.type === "required" && (
                  <span className="text-danger ">Country is required</span>
                )}
              </div>
            </div>

            <div className={`pt-4`}>
              <h6 class="subTitle">Delivary</h6>

              <div className="form-check">
                <input
                  className="form-check-input check_box"
                  type="checkbox"
                  value={"data"}
                  id={"b_checkbox"}
                  onChange={() => setSameBillingAddress(!sameBillingAddress)}
                />
                <label
                  class="form-check-label check_box_label mb-3"
                  for="b_checkbox"
                >
                  My billing address is the same
                </label>
              </div>
              <div className={`${sameBillingAddress ? "d-none" : "d-block"} `}>
                <div class="d-flex gap-3">
                  <div class="w-100 form-floating mb-3">
                    <input
                      type="text"
                      class="form-control primary-input"
                      id="floatingInput"
                      placeholder="name@example.com"
                      {...register("b_firstName", {
                        required: sameBillingAddress ? false : true,
                      })}
                    />
                    <label for="floatingInput">First Name</label>
                    {errors.b_firstName?.type === "required" && (
                      <span className="text-danger ">
                        First name is required
                      </span>
                    )}
                  </div>

                  <div class="w-100 form-floating mb-3">
                    <input
                      type="text"
                      class="form-control primary-input"
                      id="floatingInput"
                      placeholder="name@example.com"
                      {...register("b_lastName", {
                        required: sameBillingAddress ? false : true,
                      })}
                    />
                    <label for="floatingInput">Last Name</label>
                    {errors.b_lastName?.type === "required" && (
                      <span className="text-danger ">
                        Last name is required
                      </span>
                    )}
                  </div>
                </div>

                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control primary-input"
                    id="floatingInput"
                    placeholder="name@example.com"
                    {...register("b_society", {
                      required: sameBillingAddress ? false : true,
                    })}
                  />
                  <label for="floatingInput">Society</label>
                  {errors.b_society?.type === "required" && (
                    <span className="text-danger ">Society is required</span>
                  )}
                </div>

                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control primary-input"
                    id="floatingInput"
                    placeholder="name@example.com"
                    {...register("b_address", {
                      required: sameBillingAddress ? false : true,
                    })}
                  />
                  <label for="floatingInput">Address</label>
                  {errors.b_address?.type === "required" && (
                    <span className="text-danger ">Address is required</span>
                  )}
                </div>

                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control primary-input"
                    id="floatingInput"
                    placeholder="name@example.com"
                    {...register("b_additionalAddress", {
                      required: sameBillingAddress ? false : true,
                    })}
                  />
                  <label for="floatingInput">Additional Address</label>
                  {errors.b_additionalAddress?.type === "required" && (
                    <span className="text-danger ">
                      Additional Address is required
                    </span>
                  )}
                </div>

                <div class="d-flex gap-3">
                  <div class="w-100 form-floating mb-3">
                    <input
                      type="password"
                      class="form-control primary-input"
                      id="floatingInput"
                      placeholder="name@example.com"
                      {...register("b_postalCode", {
                        required: sameBillingAddress ? false : true,
                      })}
                    />
                    <label for="floatingInput">Postal code</label>
                    {errors.b_postalCode?.type === "required" && (
                      <span className="text-danger ">
                        Postal code is required
                      </span>
                    )}
                  </div>

                  <div class="w-100 form-floating mb-3">
                    <input
                      type="password"
                      class="form-control primary-input"
                      id="floatingInput"
                      placeholder="name@example.com"
                      {...register("b_city", {
                        required: sameBillingAddress ? false : true,
                      })}
                    />
                    <label for="floatingInput">City</label>
                    {errors.b_city?.type === "required" && (
                      <span className="text-danger ">City is required</span>
                    )}
                  </div>
                </div>

                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control primary-input"
                    id="floatingInput"
                    placeholder="name@example.com"
                    {...register("b_country", {
                      required: sameBillingAddress ? false : true,
                    })}
                  />
                  <label for="floatingInput">Country</label>
                  {errors.b_country?.type === "required" && (
                    <span className="text-danger ">Country is required</span>
                  )}
                </div>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control primary-input"
                  id="floatingInput"
                  placeholder="name@example.com"
                  {...register("commentOnCommance", { required: true })}
                />
                <label for="floatingInput">Comment On this Commance</label>
                {errors.commentOnCommance?.type === "required" && (
                  <span className="text-danger ">
                    Comment On this Commance is required
                  </span>
                )}
              </div>

              <p className="mb-0 ms-3 pt-4">Do you have a promo code?</p>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control primary-input"
                  id="floatingInput"
                  placeholder="name@example.com"
                  {...register("promoCode")}
                />
                <label for="floatingInput">Promo Code</label>
              </div>
            </div>

            <div className="validateArea">
              <button type="submit" className="btn">
                Validate Your Request
              </button>
              <p className="">Payment will be made by check or bank transfer</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OrderValidation;
