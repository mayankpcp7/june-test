import React from "react";
import check from "../assets/images/svg/Checkmark.svg";
import Aboutpic from "../assets/images/webp/About.webp";
const About = () => {
  return (
    <section className="bg_black py-5">
      <div className="container py-lg-5">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5">
            <div className="d-flex flex-column ">
              <div>
                <h2 className="ff_raleway fw-medium fs_xl color_white mb-0">
                  About EkosLive
                </h2>
              </div>
              <div className="d-flex  align-items-center pt-3">
                <div>
                  <img src={check} alt="check" />
                </div>
                <div className="ps-3">
                  <p className="ff_manrope fw-normal color_white fs_sm op_80 mb-0">
                    Powered by Open Source technologies.
                  </p>
                </div>
              </div>
              <div className="d-flex  align-items-center pt-3">
                <div>
                  <img src={check} alt="check" />
                </div>
                <div className="ps-3">
                  <p className="ff_manrope fw-normal color_white fs_sm op_80 mb-0">
                    Transforms your astrophotography capture platform to the
                    cloud.
                  </p>
                </div>
              </div>
              <div className="d-flex  align-items-center pt-3">
                <div>
                  <img src={check} alt="check" />
                </div>
                <div className="px-3">
                  <p className="ff_manrope fw-normal color_white fs_sm op_80 mb-0">
                    Online community where you can explore, share, and
                    collaborate your passion in Astronomy.
                  </p>
                </div>
              </div>
              <div className="d-flex  align-items-center pt-3">
                <div>
                  <img src={check} alt="check" />
                </div>
                <div className="ps-3">
                  <p className="ff_manrope fw-normal color_white fs_sm op_80 mb-0">
                    Access to global community-driven observatories. Host and
                    broadcast virtual star parties.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="pt-lg-0 pt-4">
              <img className=" w-100" src={Aboutpic} alt="about" />
            </div>
          </div>
        </div>
      </div>
    </section>



    

  // <section className="pricing_bg py-5">
  //       <div className="container pt-5 mt-5">
  //         <div className="row my-5 py-5">
  //           <div className="col-xxl-3"></div>
  //           <div className="col-xxl-9">
  //             <h4 className="color_white ff_raleway fs_xl pb-5">
  //               Pricing Plans
  //             </h4>
  //             <div className="d-flex align-items-center trtl_lg">
  //               <div className="d-flex flex-colimn jutify-content-start">
  //                 <ul className="mb-0 ps-0 row_one_bg pe-xl-4 ">
  //                   <li className="color_white ff_raleway fs_sm py-4 px-3 text-start px-4  op_0 ">
  //                     Online Access
  //                   </li>
  //                   <li className="color_white ff_raleway fs_sm py-4 px-3 text-start px-4 ">
  //                     Online Access
  //                   </li>
  //                   <li className="color_white ff_raleway fs_sm py-4 px-3 text-start px-4 mt-1">
  //                     Cloud Storage
  //                   </li>
  //                   <li className="color_white ff_raleway fs_sm py-4 px-3 text-start px-4 mt-1">
  //                     Observatory Lease
  //                   </li>
  //                   <li className="color_white ff_raleway fs_sm py-4 px-3 text-start px-4 mt-1">
  //                     Spectators
  //                   </li>
  //                   <li className="color_white ff_raleway fs_sm py-4 px-3 text-start px-4 mt-1">
  //                     Push Notifications
  //                   </li>
  //                   <li className="color_white ff_raleway fs_sm py-4 px-3 text-start px-4 mt-1">
  //                     Broadcasting
  //                   </li>
  //                   <li className="color_white ff_raleway fs_sm py-4 px-3 text-start px-4 mt-1">
  //                     Access Control
  //                   </li>
  //                   <li className="color_white ff_raleway fs_sm py-4 px-3 text-start px-4 ">
  //                     Price
  //                   </li>
  //                 </ul>
  //               </div>
  //               <div className="d-flex flex-colimn align-items-center">
  //                 <ul className=" color_white ff_manrope fw-medium fs_lsm bg-transparent ps-0 mb-0 hover_bg_orange table_row">
  //                   <li>
  //                     <p className="px-5 color_white text-center ff_raleway row_one_bg bg_hover_darkorange fw-semibold py-21 py-4  fs_lsm mb-0 ">
  //                       EkosLive Basic
  //                     </p>
  //                   </li>
  //                   <li className="d-flex justify-content-center align-items-center py-18 mt-2">
  //                     <img src={check} alt="check" />
  //                   </li>
  //                   <li className="d-flex justify-content-center align-items-center py-18 mt-2">
  //                     500 MB
  //                   </li>
  //                   <li className="d-flex justify-content-center align-items-center py-18 mt-2 ">
  //                     <img src={cross} alt="cross" />
  //                   </li>
  //                   <li className="d-flex justify-content-center align-items-center py-18 mt-2">
  //                     <img src={cross} alt="cross" />
  //                   </li>
  //                   <li className="d-flex justify-content-center align-items-center py-18 mt-2">
  //                     <img src={cross} alt="cross" />
  //                   </li>
  //                   <li className="d-flex justify-content-center align-items-center py-18 mt-2">
  //                     <img src={cross} alt="cross" />
  //                   </li>
  //                   <li className="d-flex justify-content-center align-items-center py-18 mt-2 ">
  //                     Limited
  //                   </li>
  //                   <li className="d-flex justify-content-center align-items-center py-18 mt-2">
  //                     Free
  //                   </li>
  //                 </ul>
  //               </div>
  //               <div className="d-flex flex-colimn align-items-center">
  //                 <ul className=" color_white ff_manrope fw-medium bg-transparent hover_bg_orange table_row fs_lsm row_one_bg ps-0 mb-0 hover_bg_orange">
  //                   <li className=" row_one_bg">
  //                     <p
  //                       className="px-5 color_white text-center ff_raleway bg_hover_darkorange fw-semibold py-4 fs_lsm mb-0 "
  //                       href="#"
  //                     >
  //                       EkosLive Pro
  //                     </p>
  //                   </li>
  //                   <li className="d-flex justify-content-center align-items-center py-18 mt-2">
  //                     <img src={check} alt="check" />
  //                   </li>
  //                   <li className="d-flex justify-content-center align-items-center py-18 mt-2">
  //                     5 GB
  //                   </li>
  //                   <li className="d-flex justify-content-center align-items-center py-18 mt-2 ">
  //                     <img src={cross} alt="cross" />
  //                   </li>
  //                   <li className="d-flex justify-content-center align-items-center py-18 mt-2">
  //                     <img src={check} alt="cross" />
  //                   </li>
  //                   <li className="d-flex justify-content-center align-items-center py-18 mt-2">
  //                     <img src={check} alt="cross" />
  //                   </li>
  //                   <li className="d-flex justify-content-center align-items-center py-18 mt-2">
  //                     Yes, Limited
  //                   </li>
  //                   <li className="d-flex justify-content-center align-items-center py-18 mt-2 ">
  //                     Limited to 5 visitors
  //                   </li>
  //                   <li className="d-flex justify-content-center align-items-center py-18 mt-2">
  //                     $4.99
  //                   </li>
  //                 </ul>
  //               </div>
  //               <div className="d-flex flex-column align-items-center">
  //                 <ul className=" color_white ff_manrope fw-medium fs_lsm row_one_bg bg-transparent ps-0 mb-0 table_row hover_bg_orange ">
  //                   <li className="row_one_bg">
  //                     <p
  //                       className="px-5 color_white text-center ff_raleway fw-semibold py-4 bg_hover_darkorange fs_lsm mb-0 "
  //                       href="#"
  //                     >
  //                       EkosLive Ultimate
  //                     </p>
  //                   </li>
  //                   <li className="d-flex justify-content-center align-items-center py-18 mt-2">
  //                     <img src={check} alt="check" />
  //                   </li>
  //                   <li className="d-flex justify-content-center align-items-center py-18 mt-2">
  //                     20 GB
  //                   </li>
  //                   <li className="d-flex justify-content-center align-items-center py-18 mt-2 ">
  //                     <img src={check} alt="cross" />
  //                   </li>
  //                   <li className="d-flex justify-content-center align-items-center py-18 mt-2">
  //                     <img src={check} alt="cross" />
  //                   </li>
  //                   <li className="d-flex justify-content-center align-items-center py-18 mt-2">
  //                     <img src={check} alt="cross" />
  //                   </li>
  //                   <li className="d-flex justify-content-center align-items-center py-18 mt-2">
  //                     Yes, Full
  //                   </li>
  //                   <li className="d-flex justify-content-center align-items-center py-18 mt-2 ">
  //                     Unlimited
  //                   </li>
  //                   <li className="d-flex justify-content-center align-items-center py-18 mt-2">
  //                     $9.99
  //                   </li>
  //                 </ul>
  //               </div>
  //             </div>
  //             <div className="d-flex align-items-center py-3">
  //               <div className="px-xl-4 ps-0">
  //                 <button className="ms-2 py_14px px_32px bg_orange border-0 me-1 color_white fs_sm ff_manrope  op_0 fw-semibold">
  //                   Choose Plan
  //                 </button>
  //               </div>
  //               <div className="px-4">
  //                 <button className="ms-2 py_14px px_32px bg_orange border-0 me-1 color_white fs_sm ff_manrope  fw-semibold op_60 hover_op_100">
  //                   Choose Plan
  //                 </button>
  //               </div>
  //               <div className="px-4">
  //                 <button className="ms-3 py_14px px_32px bg_orange border-0 me-1 color_white fs_sm ff_manrope  fw-semibold op_60 hover_op_100">
  //                   Choose Plan
  //                 </button>
  //               </div>
  //               <div className="px-4">
  //                 <button className="ms-4 py_14px px_32px bg_orange border-0 me-1 color_white fs_sm ff_manrope  fw-semibold op_60 hover_op_100">
  //                   Choose Plan
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
    
    
    
    


    


    
  );
};

export default About;
