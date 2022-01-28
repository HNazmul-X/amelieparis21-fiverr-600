import React, { useState } from "react";
import { InlineIcon } from "@iconify/react";
import { useForm } from "react-hook-form";

function RightSide() {
  const [loading, setLoading] = useState(false);
  const emailRegX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const numberREgX = /\d+/g;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="col-md-6 right-side">
      <div className=" justify-content-center d-flex">
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-100 form-floating mb-3">
            <input
              type="text"
              className="form-control unFatty-input"
              id="floatingInput"
              placeholder="Your name"
              {...register("name", { required: true })}
            />
            <label htmlFor="floatingInput">Name *</label>
            {errors.name?.type === "required" && (
              <span className="text-danger">Name is required</span>
            )}
          </div>
          <div className="w-100 form-floating mb-3">
            <input
              type="text"
              className="form-control unFatty-input"
              id="floatingInput"
              placeholder="name@example.com"
              {...register("email", { required: true, pattern: emailRegX })}
            />
            <label htmlFor="floatingInput">E-mail *</label>
            {errors.email?.type === "required" && (
              <span className="text-danger">Email is required</span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="text-danger">Invalid email</span>
            )}
          </div>
          <div className="w-100 form-floating mb-3">
            <input
              type="text"
              className="form-control unFatty-input"
              id="floatingInput"
              placeholder="Phone number"
              {...register("phone", { required: true, pattern: numberREgX })}
            />
            <label htmlFor="floatingInput">Phone *</label>
            {errors.phone?.type === "required" && (
              <span className="text-danger">Phone number is required</span>
            )}
            {errors.phone?.type === "pattern" && (
              <span className="text-danger">Invalid phone number</span>
            )}
          </div>

          <div className="w-100 form-floating mb-3">
            <textarea
              className="form-control unFatty-input text-area"
              id="floatingInput"
              rows={6}
              cols="50"
              placeholder="Message"
              {...register("message", { required: true })}
            ></textarea>
            <label htmlFor="floatingInput">Message *</label>
            {errors.message?.type === "required" && (
              <span className="text-danger">Message is required</span>
            )}
          </div>
          <button
            type="submit"
            className="submit-btn"
            disabled={loading ? true : false}
          >
            {loading ? (
              <InlineIcon icon="akar-icons:arrow-cycle" />
            ) : (
              <>
                Send
                <InlineIcon className="arrow" icon="akar-icons:arrow-right" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default RightSide;
