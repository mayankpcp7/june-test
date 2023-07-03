import React from "react";
import Astrobins from "../assets/images/webp/astrobin.webp";
import telescope from "../assets/images/webp/telescopius.webp";
import asap from "../assets/images/webp/ASAP.webp";
import astrometry from "../assets/images/webp/ASTRONEMOUS.webp";
const Intergration = () => {
  return (
    <section className="bg_black py-5 overflow-hidden ">
      <div className="container py-lg-5 position-relative">
        <div className="integrate_topcircle"></div>
        <div className="integrate_bottomcircle d-lg-none d-block"></div>
        <h3 className="text-center color_white ff_raleway fs_xl fw-medium ">
          Integrations
        </h3>
        <div className="row py-lg-5 pt-5 ">
          <div className="col-lg-3 col-md-4 col-sm-6 py-lg-0 py-3">
            <div className="d-flex flex-column justify-content-between align-items-center bg_greyblur inter_cards hover_translate_y transition_400ms  padding_cards h-100">
              <div className="pb-1">
                <img src={Astrobins} alt="astrobins" />
              </div>
              <div className="pt-3">
                <p className="ff_raleway color_white fs_smd mb-0 fw-semibold hover_orange">
                  Astrobin
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 py-lg-0 py-3">
            <div className="d-flex flex-column justify-content-between align-items-center bg_greyblur inter_cards hover_translate_y transition_400ms  padding_cards h-100">
              <div className="pb-1">
                <img src={telescope} alt="astrobins" />
              </div>
              <div className="pt-3">
                <p className="ff_raleway color_white fs_smd mb-0 fw-semibold hover_orange">
                  Telescopius
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 py-lg-0 py-3">
            <div className="d-flex flex-column justify-content-between align-items-center bg_greyblur inter_cards hover_translate_y transition_400ms  padding_cards h-100">
              <div className="pb-1">
                <img src={asap} alt="astrobins" />
              </div>
              <div className="pt-3">
                <p className="ff_raleway color_white fs_smd mb-0 fw-semibold hover_orange">
                  Astrobin
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 py-lg-0 py-3">
            <div className="d-flex flex-column   align-items-center bg_greyblur inter_cards hover_translate_y transition_400ms  padding_cards h-100">
              <div className="pt-4">
                <img className="w-100" src={astrometry} alt="astrobins" />
              </div>
              <div className="pt-3">
                <p className="ff_raleway color_white fs_smd mb-0 fw-semibold hover_orange pt-3">
                  Astrometry.net
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intergration;
