import React from "react";
import logo from "../../assets/images/whitelogo.6aac2051b686bf6df9bbb798e8bfc231.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <img src={logo} alt="footer" className="footer-logo" />
        </div>
        <div className="bottom-footer">
          <div className="copy-write-text">
            <p>© All right reserved by onecardpro.com</p>
          </div>
          <div className="footer-link">
            <a href="">FAQ</a>
            <a href="">À propos</a>
            <a href="">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
