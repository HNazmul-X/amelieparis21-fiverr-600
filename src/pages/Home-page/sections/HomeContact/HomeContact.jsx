import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

function HomeContact() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex flex-col justify-between w-full px-8 lg:flex-row bg-oneCard-lightGray md:px-16 py-14">
      <motion.div
        initial={{ scale: 0.6 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col py-10 space-y-10"
      >
        <h1 className="text-4xl font-bold text-oneCard-darkBlue">
          Contactez nous
        </h1>
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2 text-oneCard-darkBlue">
            <h3 className="">Adresse électronique</h3>
            <h2 className="text-xl font-bold">CONTACT@TRYDUS.CO</h2>
          </div>
        </div>
      </motion.div>
      <motion.form
        initial={{ x: "100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-start w-full py-8 space-y-6 text-sm bg-white border border-transparent lg:w-1/2 rounded-2xl px-7 sm:px-12 sm:py-12 hover:border-gray-200 sm:text-base"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col w-full space-y-4">
          <div className="flex flex-col items-start space-y-3 text-gray-500">
            <label for="name" className="text-base sr-only sm:text-lg">
              Votre nom
            </label>

            <input
              type="text"
              name="name"
              {...register("name", { required: true })}
              placeholder="Votre nom *"
              className="w-full px-5 py-4 border border-transparent rounded-xl sm:px-6 sm:py-5 bg-oneCard-lightGray focus:outline-none hover:border-gray-200"
            />
            {errors.name?.type === "required" && (
              <span className="text-danger ">This field is required</span>
            )}
          </div>
          <div className="flex flex-col items-start space-y-3 text-gray-500">
            <label for="email" className="text-base sr-only sm:text-lg">
              Votre adresse électronique
            </label>

            <input
              type="text"
              name="email"
              placeholder="Votre adresse électronique *"
              className="w-full px-5 py-4 border border-transparent rounded-xl sm:px-6 sm:py-5 bg-oneCard-lightGray focus:outline-none hover:border-gray-200"
              {...register("email", {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
            />
            {errors.email?.type === "required" && (
              <span className="text-danger ">This field is required</span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="text-danger ">Invalid email address</span>
            )}
          </div>
          <div className="flex flex-col items-start space-y-3 text-gray-500">
            <label for="email" className="text-base sr-only sm:text-lg">
              Phone
            </label>

            <input
              type="text"
              name="phone"
              placeholder="Votre numéro de téléphone"
              className="w-full px-5 py-4 border border-transparent rounded-xl sm:px-6 sm:py-5 bg-oneCard-lightGray focus:outline-none hover:border-gray-200"
			  {...register("phone", { required: true })}
            />
			{errors.phone?.type === "required" && (
              <span className="text-danger ">This field is required</span>
            )}
          </div>

          <div className="flex flex-col items-start space-y-3 text-gray-500">
            <label for="message" className="text-base sr-only sm:text-lg">
              Écrire un message
            </label>

            <textarea
              rows="5"
              placeholder="Écrire un message *"
              className="w-full px-5 py-4 border border-transparent rounded-xl sm:px-6 sm:py-5 bg-oneCard-lightGray focus:outline-none hover:border-gray-200"
			  {...register("message", { required: true })}
            ></textarea>
			{errors.message?.type === "required" && (
              <span className="text-danger ">This field is required</span>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="px-3 py-3 text-sm text-white border border-transparent bg-oneCard-darkBlue md:text-sm lg:text-base xl:text-lg sm:px-4 sm:py-3 lg:px-5 lg:py-4 rounded-xl hover:shadow-xl hover:bg-gray-200 hover:text-oneCard-darkBlue hover:border-gray-300 focus:outline-none"
        >
          Envoyer
        </button>
      </motion.form>
    </div>
  );
}

export default HomeContact;
