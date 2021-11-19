import styles from "../../StyleSheets/Test Page/circleprogressbar.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import dp from "../../Assets/Image/male-user.png";
import Loader from "../loading spinner/Loader";
import { useContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import TestContext from "../../Store/testPageContext";

const CircleProgressBar = () => {
  const [data, setData] = useState([]);
  const { topperList, reviewExam, analysisData } = useContext(TestContext);
  useEffect(() => {}, [topperList]);
  // console.log(topperList,);

  const analysis = [
    {
      percentage:
        (analysisData.questionAttempt / analysisData.totalquestion) * 100,
      title: "Question Attempt",
      text: analysisData.questionAttempt + "/" + analysisData.totalquestion,
    },
    {
      percentage:
        (analysisData.correctquestion / analysisData.totalquestion) * 100,
      title: "Correct Question",
      text: analysisData.correctquestion + "/" + analysisData.totalquestion,
    },
    {
      percentage:
        ((analysisData.totalquestion - analysisData.correctquestion) /
          analysisData.totalquestion) *
        100,
      title: "Incorrect Question",
      text:
        analysisData.totalquestion -
        analysisData.correctquestion +
        "/" +
        analysisData.totalquestion,
    },
    {
      percentage:
        ((analysisData.correctquestion / analysisData.totalquestion) * 100).toFixed(2),
      title: "Percentage",
      text:
      ((analysisData.correctquestion / analysisData.totalquestion) * 100).toFixed(1) + "%",
    },
  ];
  const rank = [
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
    "9th",
    "10th",
  ];
  return (
    <>
      <div
        className={styles["analysis-page"]}
        id="analysisPage"
        style={{ display: "none" }}
      >
        <Loader />
        <section className={styles["analysis-heading"]}>
          <h1>Analysis</h1>
          <div className={styles["analysis-heading-btn"]}>
            <button
              onClick={() => {
                reviewExam();
              }}
            >
              View Solution
            </button>
            <a href="/test-series">
              <button>Test Series</button>
            </a>
          </div>
        </section>
        <section className={styles["analysis-section"]}>
          <h1>Overall Performance Summary </h1>
          <div className={styles["analysis-content"]}>
            {analysis.map((item, index) => {
              return (
                <div className={styles["circle-content"]}>
                  <div className={styles["circle-box"]}>
                    <CircularProgressbar
                      value={item.percentage}
                      text={item.text}
                      background
                      backgroundPadding={6}
                      styles={buildStyles({
                        backgroundColor: "#3e98c7",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent",
                      })}
                    />
                    <h2>{item.title}</h2>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className={styles["topper-section"]}>
              <h1>Toppers</h1>
            <div className={styles["topper-content"]}>
              {topperList.map((item, index) => {
                return (
                  <div className={styles["a-box"]}>
                        <div className={styles["inner-skew"]}>
                          <img src={dp} />
                        </div>
                        <div className={styles["topper-text-container"]}>
                          <p>{item.userName}</p>
                        <p className={styles["topper-rank"]}>
                          <span>{rank[index]}</span>
                        </p>
                          <p>{item.marksObtain}/{item.totalMarks}</p>
                        </div>
                  </div>
                    
                );
              })}
            </div>
        </section>
      </div>
    </>
  );
};

export default CircleProgressBar;
