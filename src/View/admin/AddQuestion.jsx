import styles from "../../StyleSheets/admin/addquestion.module.css";
import prev from "../../Assets/Image/previous.png";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../loading spinner/Loader";

const AddQuestion = () => {
    const [data,setData] = useState([])
  const [length, setLength] = useState(0);
  const [queImage,setQueImage] = useState("")
  let id = useParams();
  useEffect(() => {
    
  }, [length]);
  const addItem = () =>{
    setLength(length+1)
    data.push({});
  }
  const questionType = (e) => {
    if (e.target.value === "paragraph") {
      document.getElementById("para"+e.target.id).style.display = "block";
      document.getElementById("uploadImageLabel"+e.target.id).style.display = "none"
      document.getElementById("upload-box"+e.target.id).style.display = "none"
    } else if(e.target.value==="multiple") {
      document.getElementById("upload-box"+e.target.id).style.display = "none"
      document.getElementById("para"+e.target.id).style.display = "none";
      document.getElementById("uploadImageLabel"+e.target.id).style.display = "none"
    }else{
      document.getElementById("upload-box"+e.target.id).style.display = "flex"
      document.getElementById("uploadImageLabel"+e.target.id).style.display = "flex"
      document.getElementById("para"+e.target.id).style.display = "none";
    }
  };
  const uploadImage = (e) =>{
    e.preventDefault();
    setQueImage(e.target.files[0])
  }
  const uploadFile = (e) =>{
      if(queImage==="")
      {
        alert("Please select image first")
      }else{
        document.getElementById("blurScreen").style.display="block"
        const form = new FormData();
        form.append("QImage",queImage)
        axios.post("upload/pic",form,{
          headers:{
              "Content-Type": "multipart/form-data",
              "Authorization": localStorage.getItem('token')
          }
        }).then((item)=>{
          let img = process.env.REACT_APP_API_URL+"/"+item.data
          document.getElementById("uploadImg"+e.target.id).src = img
          document.getElementById("uploadImg"+e.target.id).style.display = "block"
          document.getElementById("upload-box"+e.target.id).style.display="none"
          document.getElementById("blurScreen").style.display="none"
          setQueImage("")
        }).catch((error)=>{
          console.log(error);
          alert("Error occurred, Please try again")
        })
      }
  }
  const submitQuestion = () =>{
    document.getElementById("blurScreen").style.display="block"
    let submitData = []
    let type = ""
    let para = ""
    let imgLink = ""
      for(let i=1;i<=length;i++)
      {
        let item = document.getElementsByName("qtype"+i)
        item.forEach((item)=>{
          if(item.checked)
          {
            if(item.value==="paragraph")
            {
              type="Paragraph"
              para = document.getElementById("para"+i).value
            }else if(item.value==="pic"){
              type="PicQ"
              imgLink = document.getElementById("uploadImg"+i).src 
            }else{
              type="Multiple"
            }
          }
        })
        if(type==="Paragraph")
        {
          submitData.push({
            "Qtitle":document.getElementById("qtitle"+i).value,
            "testId":id.questionId,
            "Qtype":type,
            "paragraph":para,
            "totalMarks":Number(document.getElementById("marks"+i).value),
            "OptionA":document.getElementById("opta"+i).value,
            "OptionB":document.getElementById("optb"+i).value,
            "OptionC":document.getElementById("optc"+i).value,
            "OptionD":document.getElementById("optd"+i).value,
            "correctOption":document.getElementById("correctOption"+i).value
          })
        }else if(type==="PicQ"){
          submitData.push({
            "Qtitle":document.getElementById("qtitle"+i).value,
            "testId":id.questionId,
            "Qtype":type,
            "picLink":imgLink,
            "totalMarks":Number(document.getElementById("marks"+i).value),
            "OptionA":document.getElementById("opta"+i).value,
            "OptionB":document.getElementById("optb"+i).value,
            "OptionC":document.getElementById("optc"+i).value,
            "OptionD":document.getElementById("optd"+i).value,
            "correctOption":document.getElementById("correctOption"+i).value
          })
        }else{
          submitData.push({
            "Qtitle":document.getElementById("qtitle"+i).value,
            "testId":id.questionId,
            "Qtype":type,
            "totalMarks":Number(document.getElementById("marks"+i).value),
            "OptionA":document.getElementById("opta"+i).value,
            "OptionB":document.getElementById("optb"+i).value,
            "OptionC":document.getElementById("optc"+i).value,
            "OptionD":document.getElementById("optd"+i).value,
            "correctOption":document.getElementById("correctOption"+i).value
          })
        }
      }
      axios.post(process.env.REACT_APP_API_URL+"/v1/multi/questions",submitData,{
        headers:{
          Authorization: localStorage.getItem('token')
        }
      }).then((item)=>{
        alert(length+" questions are succesfully submitted")
        window.location="/admin"
      }).catch((error)=>{
        if(error.response.status===401)
        {
          alert("you're not authorized to view this page")
          window.location="/home"
        }else{
          alert("error occurred please try again")
      document.getElementById("blurScreen").style.display="none"
      console.log(error)
        }
      })
  }
  return (
    <>
    <Loader />
      <div className={styles.AddQuestion}>
        <div className={styles["header"]}>
          <div className={styles["header-prev-btn"]}>
          <img src={prev} onClick={()=>{window.history.back()}}/>
          </div>
          <div className={styles["header-section-wrapper"]}>
            <h1>Add Question</h1>
          </div>
        </div>
        <div className={styles["question-form"]}>
          {data.map((item, index) => {
            return (
              <div className={styles["question-card"]}>
                  <div className={styles["question-heading"]}>
                  <h3>Question No {index+1}</h3>
                  {/* <img src={deleteImg} id={index} onClick={(e)=>{deleteBox(e)}}/> */}
                  </div>
                <form>
                  <div className={styles["question-radio"]}>
                    <input
                      type="radio"
                      name={"qtype"+(index+1)}
                      id={index+1}
                      value="multiple"
                      onChange={(e) => {
                        questionType(e);
                      }}
                    />
                    <label>Multiple</label>
                  </div>
                  <div className={styles["question-radio"]}>
                    <input
                      type="radio"
                      name={"qtype"+(index+1)}
                      value="paragraph"
                      id={index+1}
                      onChange={(e) => {
                        questionType(e);
                      }}
                    />
                    <label>Paragraph</label>
                  </div>
                  <div className={styles["question-radio"]}>
                    <input
                      type="radio"
                      name={"qtype"+(index+1)}
                      value="pic"
                      id={index+1}
                      onChange={(e) => {
                        questionType(e);
                      }}
                    />
                    <label>Pic</label>
                  </div>
                  <textarea
                    placeholder="Paragraph"
                    id={"para"+(index+1)}
                    style={{ display: "none" }}
                  />
                  <input type="text" placeholder="Question Title" id={"qtitle"+(index+1)} required/>
                  <input type="text" placeholder="Option A" id={"opta"+(index+1)} required/>
                  <input type="text" placeholder="Option B" id={"optb"+(index+1)} required/>
                  <input type="text" placeholder="Option C" id={"optc"+(index+1)} required/>
                  <input type="text" placeholder="Option D" id={"optd"+(index+1)} required/>
                  <select id={"correctOption"+(index+1)}>
                    <option selected value="A">Correct Option</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                  </select>
                  <input type="text" placeholder="Total Marks" id={"marks"+(index+1)} required/>
                  <label className={styles["upload-img-label"]} id={"uploadImageLabel"+(index+1)} style={{display: "none"}}>Upload Image</label>
                  <div id="uploadedImg">
                    <img src="#" id={"uploadImg"+(index+1)} style={{display: "none", margin: "auto"}} width="200" height="200"/>
                  </div>
                  <div className={styles["upload-div"]} id={"upload-box"+(index+1)} style={{display: "none"}}>
                  <input type="file" required onChange={(e)=>{uploadImage(e)}}/>
                  <div>
                  <button type="button" id={index+1} className={styles["upload-btn"]} onClick={(e)=>{uploadFile(e)}}>Upload</button>
                  </div>
                  </div>
                </form> 
              </div>
            );
          })}
          <h3
            onClick={() => {
              addItem()
            }}
            style={{cursor: "pointer"}}
          >
            + Add More Question
          </h3>
          <button type="submit" onClick={()=>{submitQuestion()}}>Add</button>
        </div>
      </div>
    </>
  );
};

export default AddQuestion;
