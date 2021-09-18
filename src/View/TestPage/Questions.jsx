import {  useContext } from "react";
import styles from "../../StyleSheets/Test Page/testpage.module.css";
import TestContext from "../../Store/testPageContext";

const Questions = () => {
  const { item , currentIndex,radioHandler} = useContext(TestContext);
  return (
    <>
        {item.Qtype==="Paragraph" ? (
          <div className={styles["section-1-para"]}>
            <div className={styles["para-1"]}>
              <h1>Q{currentIndex+1}</h1>
              <p>{item.paragraph}</p>
            </div>
            <div className={styles["para-2"]}>
              <p className={styles["question"]}>
                {item.Qtitle} ({item.totalMarks})
              </p>
              <div className={styles["radio-box"]}>
                <input type="radio" name="question" value="A" id="A"  onClick={(e)=>{radioHandler(e.target.value)}}/>
                <label htmlFor="A">A. {item.OptionA}</label>
              </div>
              <div className={styles["radio-box"]}>
                <input type="radio" name="question" value="B" id="B" onClick={(e)=>{radioHandler(e.target.value)}}/>
                <label htmlFor="B">B. {item.OptionB}</label>
              </div>
              <div className={styles["radio-box"]}>
                <input type="radio" name="question" value="C" id="C" onClick={(e)=>{radioHandler(e.target.value)}}/>
                <label htmlFor="C">C. {item.OptionC}</label>
              </div>
              <div className={styles["radio-box"]}>
                <input type="radio" name="question" value="D" id="D" onClick={(e)=>{radioHandler(e.target.value)}}/>
                <label htmlFor="D">D. {item.OptionD}</label>
              </div>
            </div>
          </div>
        ) : item.Qtype==="PicQ" ?(
      <div className={styles["section-1-ques"]}>
          <div className={styles["ques-content"]}>
            <h1>Q{currentIndex+1}</h1>
            <p className={styles["question"]}>
              {item.Qtitle}({item.totalMarks})
            </p>
              <img src={item.picLink} />
            <div className={styles["radio-box"]}>
              <input type="radio" name="question" value="A" id="A" onClick={(e)=>{radioHandler(e.target.value)}}/>
              <label htmlFor="A">A.{item.OptionA}</label>
            </div>
            <div className={styles["radio-box"]}>
              <input type="radio" name="question" value="B" id="B" onClick={(e)=>{radioHandler(e.target.value)}}/>
              <label htmlFor="B">B. {item.OptionB}</label>
            </div>
            <div className={styles["radio-box"]}>
              <input type="radio" name="question" value="C" id="C" onClick={(e)=>{radioHandler(e.target.value)}}/>
              <label htmlFor="C">C. {item.OptionC}</label>
            </div>
            <div className={styles["radio-box"]}>
              <input type="radio" name="question" value="D" id="D" onClick={(e)=>{radioHandler(e.target.value)}}/>
              <label htmlFor="D">D. {item.OptionD}</label>
            </div>
          </div>
      </div>
        ):
        (
          <div className={styles["section-1-ques"]}>
              <div className={styles["ques-content"]}>
                <h1>Q{currentIndex+1}</h1>
                <p className={styles["question"]}>
                  {item.Qtitle}({item.totalMarks})
                </p>
                <div className={styles["radio-box"]}>
                  <input type="radio" name="question" value="A" id="A" onClick={(e)=>{radioHandler(e.target.value)}}/>
                  <label htmlFor="A">A.{item.OptionA}</label>
                </div>
                <div className={styles["radio-box"]}>
                  <input type="radio" name="question" value="B" id="B" onClick={(e)=>{radioHandler(e.target.value)}}/>
                  <label htmlFor="B">B. {item.OptionB}</label>
                </div>
                <div className={styles["radio-box"]}>
                  <input type="radio" name="question" value="C" id="C" onClick={(e)=>{radioHandler(e.target.value)}}/>
                  <label htmlFor="C">C. {item.OptionC}</label>
                </div>
                <div className={styles["radio-box"]}>
                  <input type="radio" name="question" value="D" id="D" onClick={(e)=>{radioHandler(e.target.value)}}/>
                  <label htmlFor="D">D. {item.OptionD}</label>
                </div>
              </div>
          </div>
            )
      }
    </>
  );
};
export default Questions;
