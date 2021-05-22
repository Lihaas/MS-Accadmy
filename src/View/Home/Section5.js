import { BrowserRouter as Router, Link } from "react-router-dom";
import React from "react";
import "../../StyleSheets/Home/Section5_style.css";
import logo1 from "../../Assets/Image/Sec401.png";
import logo2 from "../../Assets/Image/Sec402.png";

const Section5 = () => {
  return (
    <Router>
      <div className="section5">
        <div className="sec5_top_tag">
          <h2>Our Courses</h2>
          <p>
            We are providing the online education to crack UGC NET exam and
            provide the opportunity to interact and learn from us fromany
            location
          </p>
        </div>

        <div className="sec5_exam_box">
          <div className="sec5_exam_box1">
            <img src={logo1} alt="" />
            <div className="sec5_exam_info">
              <h1>Exam 1</h1>
              <p>
                We exclusively deals in UGC net Paper1 & Paper 2 Commerce. We
                provide the best content material for stydu & in depth analysis
                of topic that are being converted in the UGC/NTA NET
                examination. Aprat from that institute gives the best results in
                recent UGC NET examination. Join Our clases Today to crack UGC
                NTA NET Exam
              </p>
            </div>
          </div>

          <div className="sec5_exam_box2">
            <div className="info">
              <h1>Exam 2</h1>
              <p>
                We exclusively deals in UGC net Paper1 & Paper 2 Commerce. We
                provide the best content material for stydu & in depth analysis
                of topic that are being converted in the UGC/NTA NET
                examination. Aprat from that institute gives the best results in
                recent UGC NET examination. Join Our clases Today to crack UGC
                NTA NET Exam
              </p>
            </div>
            <img src={logo1} alt="" />
          </div>

          <div className="sec5_exam_box3">
            <img src={logo2} alt="" />
            <div className="info">
              <h1>Test Series</h1>
              <p>
                We exclusively deals in UGC net Paper1 & Paper 2 Commerce. We
                provide the best content material for stydu & in depth analysis
                of topic that are being converted in the UGC/NTA NET
                examination. Aprat from that institute gives the best results in
                recent UGC NET examination. Join Our clases Today to crack UGC
                NTA NET Exam
              </p>
            </div>
          </div>
        </div>
        <button className="sec5_free_trail_button">Free Trail Class</button>
      </div>
    </Router>
  );
};
export default Section5;
