import styles from "../../StyleSheets/Test Page/testpage.module.css";
// import Test from "../../Assets/test.json";
import { useContext, useEffect } from "react";
import TestContext from "../../Store/testPageContext";
import Loader from "../loading spinner/Loader";

const Palette = () => {
  const {setCurrentIndex,endHandler,Test} = useContext(TestContext);
  return (
    <>
    <Loader />
    <div className={styles["palette"]} id="palette">
      <div className={styles["palette-section"]}>
      <h1>Questions</h1>
      <div className={styles["palette-box"]} id="sub-pallete">
        {Test.map((item, index) => {
          let ind = index + 1;
          return (
            <div className={styles["ques-circle-box"]} key={index}>
              <button
                className={`${styles["ques-circle"]} ${index}`}
                value={index}
                onClick={e=>{setCurrentIndex(parseInt(e.target.value))}}
                // style = {{backgroundColor: "#CBCBCB"}}
              >
                {ind}
              </button>
            </div>
          );
        })}
        </div>
      </div>
        <div className={styles["end-exam"]}>
          <button onClick={endHandler} className="endbtn2">End Exam</button>    
        </div>
    </div>
    </>
  );
};

export default Palette;
