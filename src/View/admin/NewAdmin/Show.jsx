import styles from "../../../StyleSheets/admin/NewAdmin/questionList.module.css";
import prev from "../../../Assets/Image/previous.png";

const Show = (props) => {
  console.log(props.data);
  return (
    <>
      <div id="questionShow" style={{ display: "none" }}>
        <div className={styles["show-header"]}>
          <div className={styles["back-img"]}>
            <img src={prev} onClick={props.hide} />
          </div>
          <div className={styles["create-button"]}>
            <button onClick={()=>{props.edit(props.quesno)}}>Edit</button>
          </div>
        </div>
        <div className={styles["show-content"]}>
          {props.data === undefined || props.data === null ? null : (
            <>
              {props.data.Qtype === "Paragraph" ? (
                <>
                  <h2>Question Type</h2>
                  <p>{props.data.Qtype}</p>
                  <h2>Paragraph</h2>
                  <p>{props.data.paragraph}</p>
                  <h2>Question Title</h2>
                  <p>{props.data.Qtitle}</p>
                  <h2>Option A</h2>
                  <p>{props.data.OptionA}</p>
                  <h2>Option B</h2>
                  <p>{props.data.OptionB}</p>
                  <h2>Option C</h2>
                  <p>{props.data.OptionC}</p>
                  <h2>Option D</h2>
                  <p>{props.data.OptionD}</p>
                  <h2>Correct Option</h2>
                  <p>{props.data.correctOption}</p>
                  <h2>Total Marks</h2>
                  <p>{props.data.totalMarks}</p>
                </>
              ) : props.data.Qtype === "Multiple" ? (
                <>
                  <h2>Question Type</h2>
                  <p>{props.data.Qtype}</p>
                  <h2>Question Title</h2>
                  <p>{props.data.Qtitle}</p>
                  <h2>Option A</h2>
                  <p>{props.data.OptionA}</p>
                  <h2>Option B</h2>
                  <p>{props.data.OptionB}</p>
                  <h2>Option C</h2>
                  <p>{props.data.OptionC}</p>
                  <h2>Option D</h2>
                  <p>{props.data.OptionD}</p>
                  <h2>Correct Option</h2>
                  <p>{props.data.correctOption}</p>
                  <h2>Total Marks</h2>
                  <p>{props.data.totalMarks}</p>
                </>
              ) : (
                <>
                <h2>Question Type</h2>
                  <p>Image</p>
                  <h2>Image</h2>
                  <img src = {props.data.picLink}/>
                  <h2>Question Title</h2>
                  <p>{props.data.Qtitle}</p>
                  <h2>Option A</h2>
                  <p>{props.data.OptionA}</p>
                  <h2>Option B</h2>
                  <p>{props.data.OptionB}</p>
                  <h2>Option C</h2>
                  <p>{props.data.OptionC}</p>
                  <h2>Option D</h2>
                  <p>{props.data.OptionD}</p>
                  <h2>Correct Option</h2>
                  <p>{props.data.correctOption}</p>
                  <h2>Total Marks</h2>
                  <p>{props.data.totalMarks}</p></>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Show;
