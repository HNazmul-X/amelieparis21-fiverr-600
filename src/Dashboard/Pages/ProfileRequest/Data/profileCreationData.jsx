import ProfileTemplate1 from "../../../Components/ProfileTemplate1/ProfileTemplate1"
import ProfileTemplate2 from "../../../Components/ProfileTemplate2/ProfileTemplate2"
import TEMPLATE_PREVIEW_IMG_1 from "../../../../assets/images/profile-1.png"
import TEMPLATE_PREVIEW_IMG_2 from "../../../../assets/images/profile-2.png"
import TEMPLATE_PREVIEW_IMG_3 from "../../../../assets/images/profile-3.png"
import ProfileTemplate3 from '../../../Components/ProfileTemplate3/ProfileTemplate3';




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
    },
    {
        preview_img: TEMPLATE_PREVIEW_IMG_3,
        id: "profileTemplate3",             
        template: ProfileTemplate3,
    }
]

export {allTemplateData}