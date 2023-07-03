import React from "react";
import logo from "../assets/images/webp/LOGO.webp";
import serachicon from "../assets/images/svg/search_icon.svg";
import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Aos from "aos";
const Header = () => {

 Aos.init();

  const [show, setshow] = useState(true);
function showNav() {
  setshow(!show);
}
if (!show) {
  document.body.classList.add("overflow-hidden");
} else {
  document.body.classList.remove("overflow-hidden");
}
  return (
    <>
      <header
        className="bg_header vh_100 d-flex flex-column justify-content-between positon-relative z-n1"
        
      >
        <nav className="bg_whitelessop bg_blur">
          <div className="container-fluid ">
            <div className="d-flex py-3 justify-content-between align-items-center w-100 ">
              <div className="curser_pointer">
                <p className="ff_sans fw-normal color_redwhite fs_md mb-0">
                  Ek
                  <span>
                    <img src={logo} alt="logo" />
                  </span>
                  sLive
                </p>
              </div>
              <div className="d-flex align-items-center bg_whitelessop  mw-398 w-md-75 w-50  d-md-flex d-none rounded_100px">
                <input
                  className="bg_whitelessop color_white outline_none fw mw_398 fw-normal border-0 py-3 mw-398 ps-4 nav_input w-100 border_left_top_bottom_100 "
                  type="text"
                  placeholder="Search Here..."
                />
                <img
                  className="bg_whitelessop py-3 pe-4 border_right_top_bottom_100 curser_pointer"
                  src={serachicon}
                  alt="search"
                />
              </div>
              <div>
                <ul className="d-flex align-items-center mb-0 ps-0 d-xl-flex d-none">
                  <li className="hover_line">
                    <a href="#">About</a>
                  </li>
                  <li className="hover_line">
                    <a href="#">Features</a>
                  </li>
                  <li className="hover_line">
                    <a href="#">Pricing</a>
                  </li>
                  <li className="hover_line">
                    <a href="#">Support</a>
                  </li>
                  <li className="hover_line">
                    <a href="#">FAQs</a>
                  </li>
                </ul>
              </div>
              <div className="flex d-none d-xl-flex">
                <button className="py_14px px_32px bg-transparent  nav_button_border me-1 color_white fs_sm ff_raleway fw-normal">
                  Login
                </button>
                <button className="py_14px px_32px box-shadow transition_400ms bg_orange border-0 me-1 color_white fs_sm ff_raleway fw-normal">
                  SignUp
                </button>
              </div>
              <div className=" d-xl-none  z_10" onClick={showNav}>
                <h2 className="fs_xl text-white">
                  {show ? <HiMenuAlt1 /> : <AiOutlineClose />}
                </h2>
              </div>

              <ul
                className={`d-flex gap-4 mb-0 sm_nav mb-0 ps-0 d-xl-none ${
                  show ? "" : "start-0 z_999"
                }`}
              >
                <div className="d-flex align-items-center bg_whitelessop  mw-398 w-md-75 w-50  rounded_100px d-md-none">
                  <input
                    className="bg_whitelessop outline_none fw mw_398 fw-normal border-0 py-3 mw-398 ps-4 nav_input w-100 border_left_top_bottom_100 "
                    type="text"
                    placeholder="Search Here..."
                  />
                  <img
                    className="bg_whitelessop py-3 pe-4 border_right_top_bottom_100 "
                    src={serachicon}
                    alt="search"
                  />
                </div>
                <li className="hover_line">
                  <a href="#">About</a>
                </li>
                <li className="hover_line">
                  <a href="#">Features</a>
                </li>
                <li className="hover_line">
                  <a href="#">Pricing</a>
                </li>
                <li className="hover_line">
                  <a href="#">Support</a>
                </li>
                <li className="hover_line">
                  <a href="#">FAQs</a>
                </li>
                <button className="py_14px px_32px bg-transparent  nav_button_border me-1 color_white fs_sm ff_raleway fw-normal">
                  Login
                </button>
                <button className="py_14px px_32px bg_orange border-0 me-1 color_white fs_sm ff_raleway fw-normal">
                  SignUp
                </button>
              </ul>
            </div>
          </div>
        </nav>
        <main>
          <div className="container">
            <div className="d-md-flex py-5 py-xl-0 my-5 my-xl-0 justify-content-between align-items-end pb-4 mb-4">
              <div>
                <h1 className="ff_raleway fs_xxl mw_722px color_white  mb-0 pb-2">
                  Your Ultimate <span className="color_orange">Cloud </span>
                  Astrophotography Platform
                </h1>
                <p className="mb-0 color_white ff_manrope op_60 pt-1 ">
                  Capture, share, and explore the sky from anywhere and at any
                  time.
                </p>
              </div>
              <button className="ff_manrope fw-semibold my-md-0 my-3 color_white px_32 py_14px px_32px bg_orange transition_400ms box_shadow border-0">
                Discover
              </button>
            </div>
          </div>
        </main>
      </header>
    </>
  );
};

export default Header;
