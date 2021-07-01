import styles from "../../StyleSheets/Test Series/testseries.module.css";
import Boom from "../../Assets/Image/boom.png";
import dropdown from "../../Assets/Image/whitedropdown.png";
import laptop from "../../Assets/Image/laptop-7-240.png";
import star from "../../Assets/Image/Union 6.png";
import { Link } from "react-router-dom";
const TestSeries = () => {
  return (
    <div className={styles.testseries}>
      <div className={styles["heading-poster"]}>
        <h1>Test Series</h1>
        <p>
          We exclusively deals in UGC net Paperl & Paper 2 Commerce.<br></br> We
          provide the best content material for stydu & in depth
        </p>
      </div>
      <div className={styles["result-section"]}>
        <div className={styles["result-content"]}>
          <div className={styles["result-box"]}>
            <div className={styles["container"]}>
              <div className={styles["card_container"]}>
                <div className={styles["test-card"]}>
                  <div className={styles["card_content"]}>
                    <h3 className={styles["card_header"]}>Mockup Paper 1</h3>
                    <hr width="80%"></hr>
                    <div className={styles["card-info"]}>
                      <div className={styles["card-subinfo"]}><p>Total Q</p> <p>100</p></div>
                      <div className={styles["card-subinfo"]}><p>Total M</p> <p>300</p></div>
                    </div>
                    <div className={styles["card_button"]}><a href="/test-page"><button>Start Test</button></a></div>
                  </div>
                {/* </div> */}
                {/* <div className={styles["test-card"]}> */}
                <div className={styles["card_content"]}>
                    <h3 className={styles["card_header"]}>Mockup Paper 1</h3>
                    <hr width="80%"></hr>
                    <div className={styles["card-info"]}>
                      <div className={styles["card-subinfo"]}><p>Total Q</p> <p>100</p></div>
                      <div className={styles["card-subinfo"]}><p>Total M</p> <p>300</p></div>
                    </div>
                    <div className={styles["card_button"]}><a href="/test-page"><button>Start Test</button></a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["result-image"]}>
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
            <img src={Boom} />
          </div>
        </div>
      </div>
      <div className={styles["mock-card"]}>
        <h1>Best Test Series</h1>
        <h1>Best Test Series For Paper 1 & 2 Commerce</h1>
        <p>
          We exclusively deals in UGC net Paper1 & Paper 2 Commerce.<br></br> We
          provide the best content material for stydu & in depth
        </p>
        <div className={styles["card-section"]}>
          <div className={styles["card"]}>
            <h1>
              Online<br></br>Mock Test
            </h1>
            <img src={laptop} />
            <div className={styles["discount-banner"]}>
              <h3>50% OFF</h3>
            </div>
            <div className={styles["paper-1"]}>
              <p>Paper 1 Test Series</p>
              <img src={star} />
            </div>
            <p className={styles["label"]}>with 50+ Mockuptest & 5 Live Test</p>
            <h4 className={styles["discount-strike"]}>2500Rs</h4>
            <h4>1999Rs Only</h4>
          </div>
          <div className={styles["card"]}>
            <h1>
              Online<br></br>Mock Test
            </h1>
            <img src={laptop} />
            <div className={styles["discount-banner"]}>
              <h3>50% OFF</h3>
            </div>
            <div className={styles["paper-1"]}>
              <p>Paper 1 Test Series</p>
              <img src={star} />
            </div>
            <p className={styles["label"]}>with 50+ Mockuptest & 5 Live Test</p>
            <h4 className={styles["discount-strike"]}>2500Rs</h4>
            <h4>1999Rs Only</h4>
          </div>
          <div className={styles["card"]}>
            <h1>
              Online<br></br>Mock Test
            </h1>
            <img src={laptop} />
            <div className={styles["discount-banner"]}>
              <h3>50% OFF</h3>
            </div>
            <div className={styles["paper-1"]}>
              <p>Paper 1 Test Series</p>
              <img src={star} />
            </div>
            <p className={styles["label"]}>with 50+ Mockuptest & 5 Live Test</p>
            <h4 className={styles["discount-strike"]}>2500Rs</h4>
            <h4>1999Rs Only</h4>
          </div>
        </div>
        <h1>20000+ Students enroll in this</h1>
        <div className={styles["join-btn"]}>
          <button>Join</button>
        </div>
      </div>
    </div>
  );
};

export default TestSeries;
