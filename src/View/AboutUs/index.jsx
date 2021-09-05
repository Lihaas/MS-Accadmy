import styles from "../../StyleSheets/About Us/aboutus.module.css";
import poster1 from "../../Assets/Image/0002.jpg";
import poster2 from "../../Assets/Image/0003.jpg";
import boom from "../../Assets/Image/boom.png";
import dp from "../../Assets/Image/sample dp.png"
import study from "../../Assets/Image/study (1).png";
import star from "../../Assets/Image/star (1).png";
import experience from "../../Assets/Image/experience (1).png";
import expert from "../../Assets/Image/expert (1).png";
import qualification from "../../Assets/Image/qualification (1).png";
import Mohit from "../../Assets/Image/mohit.png";
import { useEffect } from "react";
const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  return (
    <div className={styles.aboutus}>
      <section className={styles["boom-poster"]}>
        <div className={styles["content-1"]}>
          <h1>Best Results in History</h1>
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span style={{ position: "absolute", textAlign: "center" }}>
              300+ <br />
              Students
              <br />
              Cleared Exam 2020
            </span>
            <img src={boom} className={styles["boom"]}/>
          </div>
        </div>
      </section>
      <section className={styles["result"]}>
        <div className={styles["result-1"]}>
          <div className={styles["image-section"]}>
            <img src={poster1} />
          </div>
          <div className={styles["text-section"]}>
            <h1>Best Result in June 2020</h1>
            <p>
              We exclusively deals in UGC net Paper & Paper 2 Commerce. We
              provide the best content material for stydu & in depth analysis of
              topic that are being converted in the UGC/NTA NET examination.
              Aprat from that institute gives the best results in recent UGC NET
              examination Join Our clases Today to crack UGC NTA NET Exam
            </p>
          </div>
        </div>
      </section>
      <section className={styles["result"]}>
        <div className={styles["result-2"]}>
          <div className={styles["text-section"]}>
            <h1>Best Result in June 2020</h1>
            <p>
              We exclusively deals in UGC net Paper & Paper 2 Commerce. We
              provide the best content material for stydu & in depth analysis of
              topic that are being converted in the UGC/NTA NET examination.
              Aprat from that institute gives the best results in recent UGC NET
              examination Join Our clases Today to crack UGC NTA NET Exam
            </p>
          </div>
          <div className={styles["image-section"]}>
            <img src={poster2} />
          </div>
        </div>
      </section>
    

      <section className={styles["section-3"]}>
          <h1>About Mohit Sharma</h1>
          <hr></hr>
          <div className={styles["section-wrapper"]}>
            <div className={styles["row-1"]}>
              <div className={styles["charestics"]}>
                <div>
                  <img src={study} />
                </div>
                  <p>2 times JRF</p>
              </div>
              <div className={styles["charestics"]}>
                <div>
                  <img src={star} />
                </div>
                <p>8+ Years Of Teaching Experience</p>
              </div>
              <div className={styles["charestics"]}>
                <div>
                  <img src={experience} />
                </div>
                <p>Teaching 100K+ Students On YouTube</p>
              </div>
              <div className={styles["charestics"]}>
                <div>
                  <img src={expert} />
                </div>
                <p>Deals in Paper 1 & Paper 2(commerce)</p>
              </div>
              <div className={styles["charestics"]}>
                <div>
                  <img src={qualification} />
                </div>
                <p>B.Com, M.Com, MBA</p>
              </div>
            </div>
            <div className={styles["row-2"]}>
              <img src={Mohit} />
            </div>
            </div>
            </section>
    </div>
  );
};

export default AboutUs;
