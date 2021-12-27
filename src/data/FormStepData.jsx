import ContactSheet from "../pages/Create-card/FormComponent/ContactSheet";
import OrderValidation from "../pages/Create-card/FormComponent/OrderValidation";
import SelectCardBase from "./../pages/Create-card/FormComponent/SelectCardBase";
import UploadYourLogo from "./../pages/Create-card/FormComponent/UploadYourLogo";
import Information from "./../pages/Create-card/FormComponent/Information";

export const FormStepsData = [
    /* NOTE: please don't change the Id name; if you change then the whole function will affected for this */
    {
        label: "Contact Sheet",
        icon: "cil:contact",
        id: "step1",
        component: <ContactSheet />,
    },
    {
        label: "Card Base",
        icon: "cil:contact",
        id: "step2",
        component: (
            <>
                <SelectCardBase />
            </>
        ),
    },
    {
        label: "Logo",
        icon: "cil:contact",
        id: "step3",
        component: <UploadYourLogo />,
    },
    {
        label: "Information",
        icon: "cil:contact",
        id: "step4",
        component: <Information />,
    },
    {
        label: "Validation",
        icon: "cil:contact",
        id: "step5",
        component: <OrderValidation />,
    },
];
