import React from "react";
import { footerNavigation, socialDatas } from "./../../data/FooterData";
import { InlineIcon } from "@iconify/react";
import { Link } from "react-router-dom";
import logo from "../../../src/assets/images/Asset 1@2x.png"

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="top-footer">
          <div className="left">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="right-footer-social-area">
            <p>follow us on</p>
            <div className="socail-icon-wrapper">
            {socialDatas.map((data, index) => (
              <a key={index} href={data.link} target="_blank">
                <InlineIcon icon={data.icon} className={data.name} />
              </a>
            ))}
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="copy-write-text">
            <p>Copyright by onecardpro.com</p>
          </div>
          <div className="navigation">
            {footerNavigation.map((data, index) => (
              <Link key={index} className="link" to={data.destination}>{data.text}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
