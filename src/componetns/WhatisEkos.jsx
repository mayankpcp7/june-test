import React from "react";
import Q from "../assets/images/webp/What_is_ekoslive.webp";
import Aos from "aos";
const WhatisEkos = () => {
   Aos.init();
  return (
    <>
      <section className="bg_black py-lg-5 position_relative   z-n1">
        <div className="container py-lg-5">
          <div className="row align-items-center justify-content-center py-5">
            <div className="col-lg-5">
              <div className="position-relative z-1">
                <div className="vector_circle_up"></div>
                <div className="vector_circle_down"></div>

                <img className="w_sm_100" src={Q} alt="q" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="d-flex flex-column pt-lg-0 pt-4">
                <h2 className="ff_raleway fs_xl color_white mb-0 fw-medium pb-1">
                  What is EkosLive?
                </h2>
                <p className="ff_manrope color_white fw-normal op_70 fs_sm lh_180 pt-2">
                  EkosLive is an online cloud-based App to remotely control your
                  observatory from anywhere and at any time. Store, search,
                  share, and tag your images. Get notifications about the
                  imaging progress, live-stack deep sky targets, and invite
                  others to join your session. Engage with the astrophotography
                  community and discover new targets and equipment. Use it on
                  your phone, tablet, or computer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatisEkos;
