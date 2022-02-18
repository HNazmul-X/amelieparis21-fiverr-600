import React, { useState } from "react";
import { motion } from "framer-motion";
import swal from "@sweetalert/with-react";
import { Link as PageLink } from "react-router-dom";
import axios from "axios";
import { apiBaseURL } from "../../../../Util/API_Info";
function HomeContact() {
    const [isSpinnerShow, setIsSpinnerShow] = useState(false);

    const handleFormSubmit = async () => {
        setIsSpinnerShow(true);
        try {
            //data for backend
            const data_b = { name: "H. Nazmul Hassan", email: "nazmul.w3@gmail.com", phone: "Maikkow amar phone kere ditam", message: "Kicchu koitam na" };
            const { data: r_data } = await axios.post(`${apiBaseURL}/api/util/send-contact-form-data-to-mail`, data_b);
            setIsSpinnerShow(false);
            console.log(r_data);
            if (r_data) swal("Done", "Message Sent Successfully", "success");
            else swal("Failed", "Failed to sent message", "error");
        } catch (e) {
            setIsSpinnerShow(false);
            swal("Error Ocurred", "Failed To Send Email", "error");
        }
    };

    return (
        <div className="flex flex-col justify-between w-full px-8 lg:flex-row bg-oneCard-lightGray md:px-16 py-14">
            <motion.div initial={{ scale: 0.6 }} whileInView={{ scale: 1 }} transition={{ duration: 0.3 }} className="flex flex-col py-10 space-y-10">
                <h1 className="text-4xl font-bold text-oneCard-darkBlue">Contactez nous</h1>
                <div className="flex flex-col space-y-6">
                    <div className="flex flex-col space-y-2 text-oneCard-darkBlue">
                        <h3 className="">Adresse électronique</h3>
                        <h2 className="text-xl font-bold">CONTACT@TRYDUS.CO</h2>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ x: "100%" }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-start w-full py-8 space-y-6 text-sm bg-white border border-transparent lg:w-1/2 rounded-2xl px-7 sm:px-12 sm:py-12 hover:border-gray-200 sm:text-base">
                <div className="flex flex-col w-full space-y-4">
                    <div className="flex flex-col items-start space-y-3 text-gray-500">
                        <label htmlFor="name" className="text-base sr-only sm:text-lg">
                            Votre nom
                        </label>

                        <input
                            type="text"
                            name="name"
                            placeholder="Votre nom *"
                            className="w-full px-5 py-4 border border-transparent rounded-xl sm:px-6 sm:py-5 bg-oneCard-lightGray focus:outline-none hover:border-gray-200"
                        />
                    </div>
                    <div className="flex flex-col items-start space-y-3 text-gray-500">
                        <label htmlFor="email" className="text-base sr-only sm:text-lg">
                            Votre adresse électronique
                        </label>

                        <input
                            type="text"
                            name="email"
                            placeholder="Votre adresse électronique *"
                            className="w-full px-5 py-4 border border-transparent rounded-xl sm:px-6 sm:py-5 bg-oneCard-lightGray focus:outline-none hover:border-gray-200"
                        />
                    </div>
                    <div className="flex flex-col items-start space-y-3 text-gray-500">
                        <label htmlFor="email" className="text-base sr-only sm:text-lg">
                            Phone
                        </label>

                        <input
                            type="text"
                            name="email"
                            placeholder="Votre numéro de téléphone"
                            className="w-full px-5 py-4 border border-transparent rounded-xl sm:px-6 sm:py-5 bg-oneCard-lightGray focus:outline-none hover:border-gray-200"
                        />
                    </div>

                    <div className="flex flex-col items-start space-y-3 text-gray-500">
                        <label htmlFor="message" className="text-base sr-only sm:text-lg">
                            Écrire un message
                        </label>

                        <textarea
                            rows="5"
                            name="message"
                            placeholder="Écrire un message *"
                            className="w-full px-5 py-4 border border-transparent rounded-xl sm:px-6 sm:py-5 bg-oneCard-lightGray focus:outline-none hover:border-gray-200"></textarea>
                    </div>
                </div>
                <button
                    onClick={handleFormSubmit}
                    className="py-3 d-flex align-items-center font-bold border shadow-lg cursor-pointer lg:flex lg:px-5 bg-oneCard-darkBlue hover:bg-oneCard-lightGray rounded-xl hover:shadow-md focus:outline-none text-oneCard-lightGray border-oneCard-darkBlue hover:text-oneCard-darkBlue">
                    {isSpinnerShow && (
                        <div class="spinner-border spinner-border-sm me-2" style={{ borderColor: "currentcolor !important", borderWidth: 3, borderRightColor: "transparent" }} role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    )}
                    Envoyer
                </button>
            </motion.div>
        </div>
    );
}

export default HomeContact;
