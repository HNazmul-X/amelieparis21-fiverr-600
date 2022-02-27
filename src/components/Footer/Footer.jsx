import React from "react";
import logo from "../../assets/images/whitelogo.6aac2051b686bf6df9bbb798e8bfc231.svg";

function Footer() {
  const date = new Date();
  return (
    <div className="flex flex-col items-center w-full py-10 divide-y bg-oneCard-darkBlue divide-oneCard-lightGray px-14">
      <div className="flex flex-col items-center justify-between w-full pb-6 space-y-8 md:space-y-0 md:flex-row">
        <img src={logo} alt="one card pro" className="w-24" />
      </div>
      <div className="flex flex-col items-center justify-between w-full pt-6 space-y-4 font-normal text-oneCard-lightGray md:space-y-0 md:flex-row">
        <h5>© {date.getFullYear()} All right reserved by onecardpro.com</h5>
        <div className="flex font-normal space-x-7 text-oneCard-lightGray">
          <h5 className="cursor-pointer">FAQ</h5>
          <h5 className="cursor-pointer">À propos</h5>
          <h5 className="cursor-pointer">Contact</h5>
        </div>
      </div>
    </div>
  );
}

export default Footer;
