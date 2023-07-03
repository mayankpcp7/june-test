import React from "react";
import check from "../assets/images/svg/tablecheck.svg";
import cross from "../assets/images/svg/tablecross.svg";
const Pricingplaces = () => {
  return (
    <>
      <section className="pricing_bg py-5 ">
        <div className="container">
          <div className="row pt-lg-5 mt-lg-5 overflow_scroll_xl">
            <div className="col-xxl-3 col-0"></div>
            <div className="col-xxl-9 col-10">
              <h3 className="color_white fs_xl ff_raleway fw-medium pb-4">
                Pricing Plans
              </h3>
              <table className="overflow-x-scroll">
                <tr className="overflow-x-scroll">
                  <th className="px-5 py-4 ff_raleway color_white fw-semibold fs_lsm bg_whitelessop color_whitelessop td_orange_1  "></th>
                  <th className="  px-5 py-4 ff_raleway color_white fw-semibold fs_lsm bg_whitelessop color_orange_hover ">
                    EkosLive Basic
                  </th>
                  <th className="px-5 py-4 ff_raleway color_white fw-semibold fs_lsm bg_whitelessop td_orange_1 bg_orange">
                    EkosLive Pro
                  </th>
                  <th className="px-5 py-4 ff_raleway color_white fw-semibold fs_lsm bg_whitelessop td_orange_1">
                    EkosLive Ultimate
                  </th>
                </tr>
                <tr className="overflow-x-scroll">
                  <td className="color_white text-start fs_sm ff_raleway ps-3 pe-5 py-4 bg_whitelessop">
                    Online Access
                  </td>
                  <td className="d-flex justify-content-center align-items-center py-3 px-5 bg-transparent td_orange_1">
                    <img src={check} alt="check" />
                  </td>
                  <td className=" py-3 px-5 bg_op_orange td_orange_1">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={check} alt="check" />
                    </div>
                  </td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={check} alt="check" />
                    </div>
                  </td>
                </tr>
                <tr className="overflow-x-scroll">
                  <td className="color_white text-start fs_sm ff_raleway ps-3 pe-5 py-4 bg_whitelessop">
                    Cloud Storage
                  </td>
                  <td className="ff_manrope color_white fw-medium text-center px-5 py-3 fs_lsm">
                    500 MB
                  </td>
                  <td className="ff_manrope color_white fw-medium text-center px-5 py-3 fs_lsm bg_op_orange">
                    5 GB
                  </td>
                  <td className="ff_manrope color_white fw-medium text-center px-5 py-3 fs_lsm">
                    20 GB
                  </td>
                </tr>
                <tr className="overflow-x-scroll">
                  <td className="color_white text-start fs_sm ff_raleway ps-3 pe-5 py-4 bg_whitelessop">
                    Observatory Lease
                  </td>
                  <td className="d-flex justify-content-center align-items-center py-3 px-5 bg-transparent">
                    <img src={cross} alt="check" />
                  </td>
                  <td className=" py-3 px-5 bg_op_orange">
                    <div className="d-flex justify-content-center align-items-center ">
                      <img src={cross} alt="check" />
                    </div>
                  </td>
                  <td className=" py-3 px-5 bg-transparent ">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={check} alt="check" />
                    </div>
                  </td>
                </tr>
                <tr className="overflow-x-scroll">
                  <td className="color_white text-start fs_sm ff_raleway ps-3 pe-5 py-4 bg_whitelessop">
                    Spectators
                  </td>
                  <td className="d-flex justify-content-center align-items-center py-3 px-5 bg-transparent">
                    <img src={cross} alt="check" />
                  </td>
                  <td className=" py-3 px-5  bg_op_orange">
                    <div className="d-flex justify-content-center align-items-center ">
                      <img src={check} alt="check" />
                    </div>
                  </td>
                  <td className=" py-3 px-5 bg-transparent ">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={check} alt="check" />
                    </div>
                  </td>
                </tr>
                <tr className="overflow-x-scroll">
                  <td className="color_white text-start fs_sm ff_raleway ps-3 pe-5 py-4 bg_whitelessop">
                    Push Notifications
                  </td>
                  <td className="d-flex justify-content-center align-items-center py-3 px-5 bg-transparent">
                    <img src={cross} alt="check" />
                  </td>
                  <td className=" py-3 px-5 bg_op_orange ">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={check} alt="check" />
                    </div>
                  </td>
                  <td className=" py-3 px-5 bg-transparent ">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={check} alt="check" />
                    </div>
                  </td>
                </tr>
                <tr className="overflow-x-scroll">
                  <td className="color_white text-start fs_sm ff_raleway ps-3 pe-5 py-4 bg_whitelessop">
                    Broadcasting
                  </td>
                  <td className="d-flex justify-content-center align-items-center py-3 px-5 bg-transparent">
                    <img src={cross} alt="check" />
                  </td>
                  <td className="ff_manrope color_white bg_op_orange fw-medium text-center px-5 py-3 fs_lsm">
                    Yes, Limited
                  </td>
                  <td className="ff_manrope color_white fw-medium text-center px-5 py-3 fs_lsm">
                    Yes, Full
                  </td>
                </tr>
                <tr className="overflow-x-scroll">
                  <td className="color_white text-start fs_sm ff_raleway ps-3 pe-5 py-4 bg_whitelessop">
                    Access Control
                  </td>
                  <td className="ff_manrope color_white fw-medium text-center px-5 py-3 fs_lsm ">
                    Limited
                  </td>
                  <td className="ff_manrope color_white fw-medium text-center px-4 py-3 fs_lsm bg_op_orange">
                    Limited to 5 visitors
                  </td>
                  <td className="ff_manrope color_white fw-medium text-center px-5 py-3 fs_lsm">
                    Unlimited
                  </td>
                </tr>
                <tr className="overflow-x-scroll">
                  <td className="color_white text-start fs_sm ff_raleway ps-3 pe-5 py-4 bg_whitelessop">
                    Price
                  </td>
                  <td className="ff_manrope color_white fw-medium text-center px-5 py-3 fs_lsm">
                    Free
                  </td>
                  <td className="ff_manrope color_white fw-medium text-center px-5 py-3 fs_lsm bg_op_orange">
                    $4.99
                  </td>
                  <td className="ff_manrope color_white fw-medium text-center px-5 py-3 fs_lsm">
                    $9.99
                  </td>
                </tr>
                <tr className="overflow-x-scroll">
                  <td className=" ps-3 pe-5 py-4 "></td>
                  <td className="px-4 py-4">
                    <div className="d-flex align-items-center justify-content-center py-2">
                      <button className="py_14px px_32px bg_orange border-0 me-1 color_white fs_sm ff_manrope fw-semibold box_shadow hover_orange_op100 transition_400ms op_60">
                        Choose Plan
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="d-flex align-items-center justify-content-center py-2">
                      <button className="py_14px px_32px bg_orange border-0 me-1 color_white fs_sm ff_manrope fw-semibold box_shadow transition_400ms op_60">
                        Choose Plan
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="d-flex align-items-center justify-content-center py-2">
                      <button className="py_14px px_32px bg_orange border-0 me-1 color_white fs_sm ff_manrope fw-semibold box_shadow transition_400ms op_60">
                        Choose Plan
                      </button>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricingplaces;
