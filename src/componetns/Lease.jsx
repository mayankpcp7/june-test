import React from "react";
import mainimg from "../assets/images/webp/observatory_img.webp";
import check from "../assets/images/svg/Checkmark.svg";
const Lease = () => {
  return (
    <section className="bg_lease py-5 overflow-hidden ">
      <div className="container pt-lg-5 pb_100 mt-lg-5 position-relative">
        <div className="leasescircle d-lg-block d-none"></div>
        <div className="row justify-content-center pb_100">
          <div className="col-lg-5">
            <div className="mainimg">
              <img className="w_xl_100" src={mainimg} alt="mainimg" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex flex-column align-items-start mt-lg-0 mt-4">
              <div>
                <h3 className="ff_raleway color_white fw-medium fs_xl mb-0">
                  Lease Observatory
                </h3>
              </div>
              <div className="d-flex align-items-center pt-4">
                <div className="pe-1">
                  <img className="w-100" src={check} alt="" />
                </div>
                <div className="ps-3">
                  <p className="ff_manrope color_white fs_sm lh_150 mb-0 op_60">
                    Fine-grained access control for your observatory.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center pt-3">
                <div className="pe-1">
                  <img src={check} alt="" />
                </div>
                <div className="ps-3">
                  <p className="ff_manrope color_white fs_sm lh_150 mb-0 op_60">
                    Search globally for observatories that fit your specific
                    needs and budget.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center pt-3">
                <div className="pe-1">
                  <img className="" src={check} alt="" />
                </div>
                <div className="ps-3">
                  <p className="ff_manrope color_white fs_sm lh_150 mb-0 op_60">
                    Earn income by offering your observatory for lease using
                    flexible plans.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lease;
