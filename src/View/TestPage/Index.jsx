import styles from "../../StyleSheets/Test Page/testpage.module.css";
import Questions from "./Questions";
import Rules from "./Rules";
import Palette from "./Palette";
import Button from "./buttton";
import TestContext, { TestPanel } from "../../Store/testPageContext";
import { useContext, useState } from "react";
const TestPage = () => {
  const [start,setStart] = useState(false);
  const startExam = () =>{
    document.getElementById("start").style.display="none"
  }
  const palleteHandler = () =>{
    if(document.getElementById("phonePallete").style.right === "60px"){
      document.getElementById("phonePallete").style.right = "-230px"
    }else{
      document.getElementById("phonePallete").style.right = "60px"
    }
  }
  return (
    <>
      <div className={styles["start-blur"]} id="start">
        <h1>Click to start exam</h1>
        <button onClick={startExam}>Start Exam</button>
      </div>
    <div className={styles.TestPage}>
      <TestPanel>
        <section className={styles["section-wrapper"]}>
          <div className={styles["section-1"]}>
            <div className={styles["section-1-ques"]}>
              <Questions />
            </div>
            <div className={styles["section-1-button"]}>
              <Button />
            </div>
          </div>
          <div className={styles["section-2"]}>
            <Rules />
            <Palette />
          </div>
          <div className={styles["phone-pallete"]} id="phonePallete">
            <button
                onClick={palleteHandler}
              className={styles["pallete-button"]}
            >
              Pallete
            </button>
            <div 
            className={styles["pallete-hover-box"]} 
            id="pallete-hover">
              <Rules />
              <Palette />
            </div>
          </div>
        </section>
      </TestPanel>
    </div>
    </>
  );
};

export default TestPage;
