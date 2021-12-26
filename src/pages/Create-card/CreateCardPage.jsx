import React, { createContext, useState } from 'react';
import { FormStepsData } from '../../data/FormStepData';
import CreateCardSteps from './CreateCardSteps';
import CardImage from "../../assets/images/Group 32.png"
import FormLoginPopup from './FormLoginPopup';

export const CreateCardPageContext = createContext({})

const CreateCardPage = () => {

    const [formStepId, setFormStepId] = useState(FormStepsData[0]?.id)
    const contextData = {formStepId,setFormStepId}


    return (
        <CreateCardPageContext.Provider value={{ ...contextData }}>
            <CreateCardSteps />
            <section class="contactsheet-content-section content-section">
                <article class="container">
                    <div class="row py-2 w-100">
                        <div class="col-md-7 col-xl-6 left">
                           {[...FormStepsData].map((item,index)=> formStepId===item.id? item.component:null)}
                        </div>
                        <div class="col-md-5 col-xl-6 right">
                            <div>
                                <img src={CardImage} alt="Card" />
                            </div>
                        </div>
                    </div>
                </article>
            </section>
            <FormLoginPopup/>
        </CreateCardPageContext.Provider>
    );
};

export default CreateCardPage;