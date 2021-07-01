import styles from "../../StyleSheets/Test Page/testpage.module.css";
import Test from "../../Assets/test.json";
import { useContext } from "react";
import TestContext from "../../Store/testPageContext";

const Palette = () => {
  const {setCurrentIndex} = useContext(TestContext);
  return (
    <div className={styles["palette"]}>
      <h1>Questions</h1>
      <div className={styles["palette-box"]}>
        {Test.map((item, index) => {
          let ind = index + 1;
          return (
            <div className={styles["ques-circle-box"]} key={index}>
              <button
                className={styles["ques-circle"]}
                id={index}
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
  );
};

export default Palette;
