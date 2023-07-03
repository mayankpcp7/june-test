import React from "react";
import illusion from "../assets/images/webp/border_1.webp";
import python from "../assets/images/webp/border_2.webp";
import panguin from "../assets/images/webp/border_3.webp";
const Supportedplatform = () => {
  return (
    <>
      <section className="bg_black py-5">
        <div className="container py-lg-5">
          <div className="row justify-content-evenly py-lg-5 my-lg-5">
            <div className="col-lg-5 col-10">
              <div className="border_circle">
                <div className="border_circle_vector"></div>
                <div className="illusion">
                  <img
                    className="hover_bigscale curser_pointer box_shadow radius_50 transition_400ms "
                    src={illusion}
                    alt="illusion"
                  />
                </div>
                <div className="python">
                  <img
                    className="hover_bigscale curser_pointer box_shadow radius_50 transition_400ms "
                    src={python}
                    alt="python"
                  />
                </div>
                <div className="panguin">
                  <img
                    className="hover_bigscale curser_pointer box_shadow radius_50 transition_400ms "
                    src={panguin}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-5 ">
              <div className="d-flex flex-column pt-lg-0 pt-5">
                <h3 className="ff_raleway fs_xl color_white mb-0 fw-medium pb-2">
                  Supported Platforms
                </h3>
                <p className="ff_manrope fw-normal fs_sm color_white op_60 lh_180 pt-1 pb-3 mb-0">
                  Out of the box support for StellarMate, Linux, and MacOS using
                  KStars. 3rd party integrations planned for popular capture
                  software.
                </p>
                <div className="pt-4">
                  <button className="py_14px px_32px bg_orange border-0 me-1 color_white fs_sm ff_raleway box_shadow transition_400ms fw-normal">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Supportedplatform;
