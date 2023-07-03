import React from "react";
import footerlogo from "../assets/images/svg/footer_logo.svg";
import playstore from "../assets/images/webp/playstore.webp";
import appstore from "../assets/images/webp/appstore.webp";
import twitter from "../assets/images/svg/twitter.svg";
import instagram from "../assets/images/svg/instagram.svg";
import discord from "../assets/images/svg/discord.svg";
const Footer = () => {
  return (
    <>
      <section className="bg_darkgrey py-5">
        <div className="container">
          <div className="row justify-content-between py-4">
            <div className="col-lg-3 ">
              <div className="d-flex flex-column">
                <div className="curser_pointer">
                  <p className="ff_sans fw-normal color_redwhite fs_lg mb-0">
                    Ek
                    <span>
                      <img className="pb-1 " src={footerlogo} alt="logo" />
                    </span>
                    sLive
                  </p>
                </div>
                <div className="py-3">
                  <p className="ff_raleway color_white fs_sm fw-normal op_60 lh_150 mb-0">
                    Lorem ipsum dolor sit amet consectetur. Neque turpis
                    pellentesque vulputate ut pharetra sodales nunc.
                  </p>
                </div>
                <div className="d-flex">
                  <img className="pe-2" src={playstore} alt="playstore" />
                  <img src={appstore} alt="appstore" />
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="row justify-content-xl-center translate_x">
                  <div className="col-xl-2 col-lg-3 col mt-4 mb-4 mb-lg-0 mt-lg-0">
                    <div>
                      <h4 className="color_white ff_raleway fs_sm fw-medium mb-0">
                        Main
                      </h4>
                      <ul className="footer_ul">
                        <li>
                          <a className="hover_op_100" href="#">
                            About
                          </a>
                        </li>
                        <li>
                          <a className="hover_op_100" href="#">
                            Features
                          </a>
                        </li>
                        <li>
                          <a className="hover_op_100" href="#">
                            Pricing
                          </a>
                        </li>
                        <li>
                          <a className="hover_op_100" href="#">
                            Support
                          </a>
                        </li>
                        <li>
                          <a className="hover_op_100" href="#">
                            FAQs
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 my-lg-0 my-4">
                    <div>
                      <h4 className="color_white ff_raleway ws_nowrap fs_sm fw-medium mb-0 ">
                        Useful links
                      </h4>
                      <ul className="footer_ul">
                        <li>
                          <a className="hover_op_100" href="#">
                            Quis ac
                          </a>
                        </li>
                        <li>
                          <a className="hover_op_100" href="#">
                            Fermentum justo
                          </a>
                        </li>
                        <li>
                          <a className="hover_op_100" href="#">
                            Ornare eu
                          </a>
                        </li>
                        <li>
                          <a className="hover_op_100" href="#">
                            Sagittis fringilla
                          </a>
                        </li>
                        <li>
                          <a className="hover_op_100" href="#">
                            Platea libero
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 my-lg-0 my-4">
                    <div className="ps-lg-5">
                      <h4 className="color_white ff_raleway fs_sm fw-medium mb-0">
                        Dashboard
                      </h4>
                      <ul className="footer_ul">
                        <li>
                          <a className="hover_op_100" href="#">
                            Profile
                          </a>
                        </li>
                        <li>
                          <a className="hover_op_100" href="#">
                            Target
                          </a>
                        </li>
                        <li>
                          <a className="hover_op_100" href="#">
                            Steller
                          </a>
                        </li>
                        <li>
                          <a className="hover_op_100" href="#">
                            Sagittis fringilla
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 my-lg-0 my-4">
                    <div className="ps-lg-5 ms-lg-4">
                      <h4 className="color_white ff_raleway fs_sm fw-medium mb-0">
                        Other
                      </h4>
                      <ul className="footer_ul ">
                        <li>
                          <a className="hover_op_100" href="#">
                            Contact Us
                          </a>
                        </li>
                        <li>
                          <a className="hover_op_100" href="#">
                            Terms & Conditions
                          </a>
                        </li>
                        <li>
                          <a className="hover_op_100" href="#">
                            Privacy Policy
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 my-xl-0 my-4">
              <div className="d-flex flex-column">
                <div className="py-2">
                  <img
                    className="curser_pointer footer_icon transition_400ms"
                    src={twitter}
                    alt="twitter"
                  />
                </div>
                <div className="py-2">
                  <img
                    className="curser_pointer footer_icon transition_400ms"
                    src={instagram}
                    alt="instagram"
                  />
                </div>
                <div className="py-2">
                  <img
                    className="curser_pointer footer_icon transition_400ms"
                    src={discord}
                    alt="discord"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="white_line"></div>
        <p className="color_white op_60 text-center bg_darkgrey mb-0 mt-4 ff_manrope fs_xsm">
          Copyright@2023 | All Rights Reserved
        </p>
      </section>
    </>
  );
};

export default Footer;
