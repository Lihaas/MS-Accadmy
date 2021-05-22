import React, { Component } from "react";
import "./../../StyleSheets/Home/Section3_style.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo1 from "../../Assets/Image/youtube.png";
import logo2 from "../../Assets/Image/googleplay.png";
import logo3 from "../../Assets/Image/exam.png";
import logo4 from "../../Assets/Image/rightBox.png";

const Section3 = () => {
  return (
    <Router>
      {/* -----------------Section 3 of Home Screen----------------- */}
      <div className="section3">
        {/* -----------------Left Part of screen----------------- */}
        <div className="sec3_top_view">
          {/* -----------------Heading, Logo and Ratings----------------- */}
          <div className="sec3_top_left_view">
            <h1 className="sec3_top_heading">Best Institute in India</h1>
            <div className="sec3_logo_and_ratings">
            {/* -----------------Logo----------------- */}
            <div className="sec3_logos">
              <Link to="#" className="sec3_logo1">
                <img src={logo1} alt="this" />
              </Link>
              <Link to="#" className="sec3_logo2">
                <img src={logo2} alt="" />
              </Link>
              <Link to="#" className="sec3_logo3">
                <img src={logo3} alt="" />
              </Link>
            </div>

            {/* -----------------Ratings----------------- */}
            <div className="sec3_logo_ratings">
              <p>95K+&nbsp;Subscriber</p>
              <p>25K+&nbsp;App Download</p>
              <p>5Lakh+&nbsp;Students</p>
            </div>
            </div>
          </div>

            {/* -----------------Right screen logo----------------- */}
            <div className="sec3_top_right_view">
              <img src={logo4} alt="" />
            </div>
          </div>

          {/* -----------------Article----------------- */}
          <div className="sec3_bottom_view">
            <article>
              <p>
                We exclusively deals in UGC net Paper1 & Paper 2 Commerce. We
                provide the best content material for stydu & in depth analysis
                of topic that are being converted in the UGC/NTA NET
                examination. Aprat from that institute gives the best results in
                recent UGC NET examination. Join Our clases Today to crack UGC
                NTA NET Exam.
              </p>
              <h2 className="sec3_aboutUS_tag">About Us</h2>
            </article>
          </div>
        </div>
      
    </Router>
  );
};
export default Section3;
