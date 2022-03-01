import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/whitelogo.6aac2051b686bf6df9bbb798e8bfc231.svg";
import { apiBaseURL } from "../../Util/API_Info";
import facebookIcon from "../../assets/images/facebookIcon.svg"
import youtubeIcon from "../../assets/images/youtubeIcon.svg"
import twitterIcon from "../../assets/images/twitterIcon.svg"
import linkedinIcon from "../../assets/images/linkedinIcon.svg"


{/* <InlineIcon icon={"fluent:document-edit-20-regular"} className="display-6" /> */}

function Footer() {
    const date = new Date();

    const socialData = [
        {
            iconImg: facebookIcon,
            link: "#"
        },
        {
            iconImg: youtubeIcon,
            link: "#"
        },
        {
            iconImg: twitterIcon,
            link: "#"
        },
        {
            iconImg: linkedinIcon,
            link: "#"
        },
    ]
    return (
        <div className="flex flex-col items-center w-full py-10 divide-y bg-oneCard-darkBlue divide-oneCard-lightGray px-14">
            <div className="flex flex-col items-center justify-between w-full pb-6 space-y-8 md:space-y-0 md:flex-row">
                <img src={logo} alt="one card pro" className="w-24" />
                <div className="footer-social-icon-area space-x-5 ">
                    {
                        socialData.map((data, index) => <a key={index} className="footer-social-link" href="" target="_blank">
                            <img src={data.iconImg} alt="" className="footer-socail-icon" />
                        </a>)
                    }
                </div>
            </div>
            <div className="flex flex-col items-center justify-between w-full pt-6 space-y-4 font-normal text-oneCard-lightGray md:space-y-0 md:flex-row">
                <h5>© {date.getFullYear()} All right reserved by onecardpro.com</h5>
                <div className="flex font-normal space-x-7 text-oneCard-lightGray">
                    <a href={`${apiBaseURL}/static/CONDITIONS D’ACCÈS ET D’UTILISATION.pdf`} download={"CONDITIONS D’ACCÈS ET D’UTILISATION.pdf"} className="cursor-pointer">
                        Politique de confidentialité
                    </a>
                    <a href={`${apiBaseURL}/static/Politique de confidentialité.pdf`} download={"Politique de confidentialité.pdf"} className="cursor-pointer">
                        Conditions d’accès et d’utilisation
                    </a>
                    <Link to={"/"} className="cursor-pointer">
                        FAQ
                    </Link>
                    <Link to={"/"} className="cursor-pointer">
                        À propos
                    </Link>
                    <Link to={"/"} className="cursor-pointer">
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;
