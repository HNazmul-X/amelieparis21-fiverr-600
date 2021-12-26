import ContactSheet from "../pages/Create-card/FormComponent/ContactSheet";
<<<<<<< HEAD
import OrderValidation from "../pages/Create-card/FormComponent/OrderValidation";
=======
import SelectCardBase from './../pages/Create-card/FormComponent/SelectCardBase';
import UploadYourLogo from './../pages/Create-card/FormComponent/UploadYourLogo';
import Information from './../pages/Create-card/FormComponent/Information';
>>>>>>> d7b4054454697ff5ed2990fe901be172086e1a8e

export const FormStepsData = [
    {
        label: "Contact Sheet",
        icon: "cil:contact",
        id: "Steps1",
        component: <ContactSheet />,
    },
    {
        label: "Card Base",
        icon: "cil:contact",
        id: "Steps2",
        component: <><SelectCardBase /></>,
    },
    {
        label: "Logo",
        icon: "cil:contact",
        id: "Steps3",
        component: <UploadYourLogo />,
    },
    {
        label: "Information",
        icon: "cil:contact",
        id: "Steps4",
        component: <Information />,
    },
    {
        label: "Validation",
        icon: "cil:contact",
        id: "Steps5",
        component: <OrderValidation /> ,
    },
];