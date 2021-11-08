import styles from "../../StyleSheets/Test Page/testpage.module.css";
import TestContext from "../../Store/testPageContext";
import { useContext, useEffect } from "react";
import Loader from "../loading spinner/Loader";

const Button = () => {
  const {
    nextHander,
    prevHander,
    reviewHandler,
    endHandler,
    marksObtained,
    reviewExam,
    currentIndex,
    notAnswered,
    answered,
    reviewed,
    length,
    showAnalysis
  } = useContext(TestContext);
  return (
    <>
    <Loader />
      <div>
        <button
          className={styles["prev-btn"]}
          id="prevbtn"
          onClick={prevHander}
        >
          <h1>Previous</h1>
          <span className={styles["entity"]}>&#171;</span>
        </button>
      </div>
      <div className={styles["test-name"]}>{localStorage.getItem("examName")}</div>
      <div>
        <div className={styles["next-rev-btn"]}>
          <input
            onClick={() => {
              reviewHandler();
            }}
            type="button"
            value="Mark for Review"
            id="reviewbtn"
            className={styles["review-box"]}
          ></input>
          <button
            className={styles["next-btn"]}
            id="nextSpan"
            onClick={nextHander}
          >
            <h1>Next</h1>
            <span className={styles["entity"]}>&#187;</span>
          </button>
          <button
            id="endTest"
            className={styles["end-btn"]}
            onClick={endHandler}
          >
            <h1>Submit</h1>
          </button>
          <div className={styles["endDialog"]} id="end-dialog">
            <div className={styles["dialog"]}>
              <h1>Test Result</h1>
              <hr></hr>
              <h2>Total Marks : {marksObtained}</h2>
              <table>
                <tr className={styles["table-heading"]}>
                  <th>Test Name</th>
                  <td>Total question</td>
                  <td>Answered</td>
                  <td>Not Answered</td>
                  <td>Mark for review</td>
                </tr>
                <tr>
                  <td>Paper 1</td>
                  <td>{length}</td>
                  <td>{answered}</td>
                  <td>{notAnswered}</td>
                  <td>{reviewed}</td>
                </tr>
              </table>
              <div className={styles["dialog-btn"]}>
                  <button className={styles["finishbtn"]} onClick={() => {
                    showAnalysis();
                  }}>Finish Exam</button>
                {/* <button
                  className={styles["revbtn"]}
                  onClick={() => {
                    reviewExam();
                  }}
                >
                  Review Exam
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Button;
