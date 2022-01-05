import ProfileTemplate1 from "../../../Components/ProfileTemplate1/ProfileTemplate1"
import ProfileTemplate2 from "../../../Components/ProfileTemplate2/ProfileTemplate2"
import TEMPLATE_PREVIEW_IMG_1 from "../../../../assets/images/profile-1.png"
import TEMPLATE_PREVIEW_IMG_2 from "../../../../assets/images/profile-2.png"




const allTemplateData = [
    {
        id: "profileTemplate1",
        preview_img: TEMPLATE_PREVIEW_IMG_1,
        template: ProfileTemplate1,
    },
    {
        preview_img: TEMPLATE_PREVIEW_IMG_2,
        id: "profileTemplate2",             
        template: ProfileTemplate2,
    }
]

export {allTemplateData}