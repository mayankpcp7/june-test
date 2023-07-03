import React from "react";
import Community_img from "../assets/images/webp/community_features.webp";
import popular from "../assets/images/svg/popular.svg";
import toprated from "../assets/images/svg/toprated.svg";
import staff from "../assets/images/svg/staff.svg";
import target from "../assets/images/svg/target.svg";
import nearby from "../assets/images/svg/nearby.svg";


const Community = () => {
  return (
    <>
      <section className="bg_black py-5 overflow-hidden">
        <div className="container">
          <div className="row justify-ccontent-center">
            <div className="col-lg-6">
              <div className="d-flex flex-column">
                <h2 className="ff_raleway fs_xl color_white fw-medium mb-0">
                  Community Features
                </h2>
                <p className="ff_manrope fw-normal fs_sm color_white pt-3 pb-3">
                  Join thousands of amateur and expert astrophotographers
                  worldwide.
                </p>
                <div className="d-flex align-items-center pt-2 pb-4">
                  <div className="pe-2">
                    <img src={popular} alt="popular" />
                  </div>
                  <div className="ps-4">
                    <h4 className="mb-0 ff_raleway fw-semibold color_orange fs_lsm">
                      Popular
                    </h4>
                    <p className="ff_manrope fs_sm fw-normal color_white mb-0 pt-2">
                      Discover most popular images per region, target, mount,
                      and sensor size.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center py-xl-4 py-3">
                  <div className="pe-2">
                    <img src={toprated} alt="popular" />
                  </div>
                  <div className="ps-4">
                    <h4 className="mb-0 ff_raleway fw-semibold color_orange fs_lsm">
                      Top Rated
                    </h4>
                    <p className="ff_manrope fs_sm fw-normal color_white mb-0 pt-2">
                      Find trending top rated images voted by the community.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center  py-xl-4 py-xl-4">
                  <div className="pe-2">
                    <img src={staff} alt="popular" />
                  </div>
                  <div className="ps-4">
                    <h4 className="mb-0 ff_raleway fw-semibold color_orange fs_lsm">
                      Staff Picks
                    </h4>
                    <p className="ff_manrope fs_sm fw-normal color_white mb-0 pt-2">
                      Unique and memorable photos selected by our
                      astrophotography staff.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center py-xl-4 py-3">
                  <div className="pe-2">
                    <img src={target} alt="popular" />
                  </div>
                  <div className="ps-4">
                    <h4 className="mb-0 ff_raleway fw-semibold color_orange fs_lsm">
                      Targets
                    </h4>
                    <p className="ff_manrope fs_sm fw-normal color_white mb-0 pt-2">
                      Comprehensive and easy to use target search with advanced
                      planning and filtering capabilities.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center  py-xl-4 py-3">
                  <div className="pe-2">
                    <img src={nearby} alt="popular" />
                  </div>
                  <div className="ps-4">
                    <h4 className="mb-0 ff_raleway fw-semibold color_orange fs_lsm">
                      Nearby
                    </h4>
                    <p className="ff_manrope fs_sm fw-normal color_white mb-0 pt-2">
                      Find who is imaging nearby. Engage with your local
                      community!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="community_img ">
                <img className="w-100" src={Community_img} alt="community" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Community;
