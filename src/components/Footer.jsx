import React from "react";
import ArrowTopHeader from "./ArrowTopHeader";

const Footer = () => {
  return (
    <>
      <div className="footer__container">
        <div className="footer__inner__container">
          <div className="footer__leftSide">
            <ArrowTopHeader
              label={"Get In Touch"}
              color={"#C0C0C0"}
              dark={true}
            />
            <h1>Contact</h1>
            <div className="footerTypo__container">
              <div className="footer__typo">
                <h3>
                  Znz <span>Technologies</span>
                </h3>
                <p>
                  Address:396 D-Block, Johar Town, Lahore,
                  <br /> Pakistan.
                </p>
              </div>
              <div></div>
              <a href="mailto:info@znztechnologies.com">
                info@znztechnologies.com
              </a>
            </div>
          </div>
          <div className="footer__rightSide">
            {/* <div className="getInTouch">
              <span>
                {" "}
                <img src="assets/photos/chat-icon.png" alt="" /> Get in Touch
              </span>
            </div> */}
            <div className="social__icons">
              {/* <img src="assets/photos/fb.png" alt="" />
              <img src="assets/photos/insta.png" alt="" />
              <img src="assets/photos/twitter.png" alt="" /> */}
            </div>
          </div>
        </div>
        <div className="poweredBy">
          <span>Proudly powered by</span>
          <img src="assets/photos/logo.png" alt="" width={97.143} height={40} />
        </div>
      </div>
    </>
  );
};

export default Footer;
