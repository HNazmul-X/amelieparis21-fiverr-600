import ContactSheet from "../pages/Create-card/FormComponent/ContactSheet";
import SelectCardBase from './../pages/Create-card/FormComponent/SelectCardBase';
import UploadYourLogo from './../pages/Create-card/FormComponent/UploadYourLogo';
import Information from './../pages/Create-card/FormComponent/Information';

export const FormStepsData = [
    {
        label: "Contact Sheet",
        icon: "cil:contact",
        id: "Steps1",
        component: <ContactSheet />,
    },
    {
        label: "Contact Sheet",
        icon: "cil:contact",
        id: "Steps2",
        component: <><SelectCardBase /></>,
    },
    {
        label: "Contact Sheet",
        icon: "cil:contact",
        id: "Steps3",
        component: <UploadYourLogo />,
    },
    {
        label: "Contact Sheet",
        icon: "cil:contact",
        id: "Steps4",
        component: <Information />,
    },
    {
        label: "Contact Sheet",
        icon: "cil:contact",
        id: "Steps5",
        component: <></>,
    },
];