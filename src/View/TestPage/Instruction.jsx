import styles from "../../StyleSheets/Test Page/instruction.module.css"
import TestContext from "../../Store/testPageContext";
import { useContext } from "react";

const Instruction = () =>{
  const {start,setStart} = useContext(TestContext);
  const startHandler = () =>{
    // document.getElementById("countdownTimer").style.display="block"
    setStart(true)
  }
    return(
        <>
        <div className={styles.Info}>
            <h1>General Instruction:</h1>
            <div className={styles["instruction-1"]}>
            <ol>
                <li>The total duration of the examination is {localStorage.getItem("testTime")} minutes. </li>
                <li>The clock will be set at the server. The countdown timer in the top right corner of the screen will display the remaining time available for you to complete the examination. When the timer reaches zero, the examination will end by itself. You will not be required to end or submit your examination.</li>
                <li>The Question Palette displayed on the right side of the screen will show the status of each question using one of the following symbols:</li>
                <div className={styles["rules"]}>
                <div
                  style={{ backgroundColor: "#00B536" }}
                  className={styles["circle"]}
                />
               <span className={styles["label"]}>Attempted</span> 
              </div>
              <div className={styles["rules"]}>
                <div
                  style={{ backgroundColor: "#B52B00" }}
                  className={styles["circle"]}
                />
                <span className={styles["label"]}>Mark For Review</span>
              </div>
              <div className={styles["rules"]}>
                <div
                  style={{ backgroundColor: "#CBCBCB" }}
                  className={styles["circle"]}
                />
                <span className={styles["label"]}>unattempted</span>
              </div>
                <li>The Marked for Review status for a question simply indicates that you would like to look at that question again. If a question is answered and Marked for Review, your answer to that question will be considered in the evaluation.</li>
            </ol>
            </div>
            <div className={styles["start-test"]}>
                <div className={styles["test-btn"]}>
                <button onClick={()=>{startHandler()}}>Start Test</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Instruction;