import styles from "../../StyleSheets/Test Page/testpage.module.css";
import TestContext from "../../Store/testPageContext";
import { useContext } from "react";

const Button = () => {
  const {
    nextHander,
    prevHander,
    reviewHandler,
    endHandler,
  } = useContext(TestContext);
  return (
    <>
      <div>
        <button
          style={{ cursor: "pointer", border: "none", background: "#FFF" }}
          id="prevbtn"
          onClick={prevHander}
        >
          <span className={styles["entity"]}>&#171;</span>
          Previous
        </button>
      </div>
      <div>Test Name</div>
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
            style={{ cursor: "pointer", border: "none", background: "#FFF" }}
            id="nextSpan"
            onClick={nextHander}
          >
            Next
            <span className={styles["entity"]}>&#187;</span>
          </button>
          <button
            id="endTest"
            style={{ display: "none", cursor: "pointer" }}
            onClick={endHandler}
          >
            End Test
          </button>
        </div>
      </div>
    </>
  );
};

export default Button;
