import styles from "../../StyleSheets/Test Page/testpage.module.css";

const Rules = () =>{

    return(
        <div className={styles["rules"]}>
            <h1>Rules</h1>
            <div>
              <p>
                <div
                  style={{ backgroundColor: "#00B536" }}
                  className={styles["circle"]}
                />
               <span className={styles["label"]}>Attempted</span> 
              </p>
              <p>
                <div
                  style={{ backgroundColor: "#B52B00" }}
                  className={styles["circle"]}
                />
                <span className={styles["label"]}>Mark For Review</span>
              </p>
              <p>
                <div
                  style={{ backgroundColor: "#CBCBCB" }}
                  className={styles["circle"]}
                />
                <span className={styles["label"]}>unattempted</span>
              </p>
            </div>
          </div>
    )
}

export default Rules;