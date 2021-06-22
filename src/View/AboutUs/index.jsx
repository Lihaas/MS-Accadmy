import styles from "../../StyleSheets/About Us/aboutus.module.css";
import poster1 from "../../Assets/Image/0002.jpg";
import poster2 from "../../Assets/Image/0003.jpg";
import boom from "../../Assets/Image/boom.png";
import dp from "../../Assets/Image/sample dp.png"
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
            <img src={boom} />
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
    <section className={styles["team"]}>
        <h1>Team</h1>
        <p>Meet the people behind our magical product</p>
        <div className={styles["team-member"]}>
            <div className={styles["member-1"]}>
                <img src={dp} />
                <div className={styles["text"]}>
                <h1>Nikhil</h1>
                <h4>Founder & CEO</h4><br></br>
                <p>Meet the people behind our magical<br></br>product. Meet the people behind our<br></br>magical product</p>
                </div>
            </div>
            <div className={styles["member-2"]}>
                <img src={dp} />
                <div className={styles["text"]}>
                <h1>Sahil Verma</h1>
                <h4>Full stack Developer</h4><br></br>
                <p>Meet the people behind our magical<br></br>product. Meet the people behind our<br></br>magical product</p>
                </div>
            </div>
            <div className={styles["member-3"]}>
                <img src={dp} />
                <div className={styles["text"]}>
                <h1>Shivam Sharma</h1>
                <h4>Android Developer</h4><br></br>
                <p>Meet the people behind our magical<br></br>product. Meet the people behind our<br></br>magical product</p>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
};

export default AboutUs;
