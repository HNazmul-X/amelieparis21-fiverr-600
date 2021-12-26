import ContactSheet from "../pages/Create-card/FormComponent/ContactSheet";
import OrderValidation from "../pages/Create-card/FormComponent/OrderValidation";

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
        component: <></>,
    },
    {
        label: "Logo",
        icon: "cil:contact",
        id: "Steps3",
        component: <ContactSheet />,
    },
    {
        label: "Information",
        icon: "cil:contact",
        id: "Steps4",
        component: <></>,
    },
    {
        label: "Validation",
        icon: "cil:contact",
        id: "Steps5",
        component: <OrderValidation /> ,
    },
];