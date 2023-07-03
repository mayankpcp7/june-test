import React from "react";
import thumbnail from "../assets/images/webp/thumbnail.webp";
import myvideo from "../assets/Videos/myvideo.mp4";
import playbutton from "../assets/images/svg/playbutton.svg";
const Stellermate = () => {
  return (
    <section className="py-5 position-relative overflow-hidden">
      <div className="stella_upper_vector"></div>
      <div className="stella_lower_vector"></div>
      <div className="container py-lg-5 my-5">
        <div className="d-flex justify-content-center align-items-center ">
          <div className="video_container position-relative z-3  my-5">
            <video
              className="w-100"
              src={myvideo}
              controls
              poster={thumbnail}
            ></video>
            <div className="playbutton d-lg-block d-none">
              <img src={playbutton} alt="playbutton" />
            </div>
            <div className="video_heading d-none d-lg-block">
              <h5 className="ff_raleway color_white fs_xl  fw-medium text-center mb-0">
                StellerMate app v2.1.0 Demo
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stellermate;
