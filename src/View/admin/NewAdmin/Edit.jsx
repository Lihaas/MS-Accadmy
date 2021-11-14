import styles from "../../../StyleSheets/admin/NewAdmin/questionList.module.css";
import prev from "../../../Assets/Image/previous.png";
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import axios from "axios";
import deleteIcon from "../../../Assets/Image/delete (1).png"
import Loader from "../../loading spinner/Loader";

const Edit = (props) => {
  const id = useParams();
  useEffect(() => {
    if (props.data !== undefined) {
      document.getElementById("qtitle").value = props.data.Qtitle;
      document.getElementById("opta").value = props.data.OptionA;
      document.getElementById("optb").value = props.data.OptionB;
      document.getElementById("optc").value = props.data.OptionC;
      document.getElementById("optd").value = props.data.OptionD;
      document.getElementById("marks").value = props.data.totalMarks;
      if (props.data.Qtype === "Multiple") {
        document.getElementsByName("qtype")[0].checked = "true";
        document.getElementById("upload-box").style.display = "none";
        document.getElementById("para").style.display = "none";
        document.getElementById("uploadImageLabel").style.display = "none";
        document.getElementById("uploadedImg").style.display = "none";
    } else if (props.data.Qtype === "Paragraph") {
        document.getElementById("para").style.display = "block";
        document.getElementById("uploadImageLabel").style.display = "none";
        document.getElementById("upload-box").style.display = "none";
        document.getElementsByName("qtype")[1].checked = "true";
        document.getElementById("paragraph").value=props.data.paragraph
        document.getElementById("uploadedImg").style.display = "none";
      } else {
        document.getElementsByName("qtype")[2].checked = "true";
        document.getElementById("uploadImg").src = props.data.picLink;
        document.getElementById("uploadImg").style.display =
          "block";
        document.getElementById("upload-box").style.display =
          "none";
        document.getElementById("para").style.display = "none";
        document.getElementById("uploadedImg").style.display =
        "block";
      }
          if(props.data.correctOption==="A")
          {
              document.getElementsByName("correctoption")[0][1].selected="true"
            }else if(props.data.correctOption==="B")
            {
              document.getElementsByName("correctoption")[0][2].selected="true"
            }else if(props.data.correctOption==="C")
            {
              document.getElementsByName("correctoption")[0][3].selected="true"
            }else{
              document.getElementsByName("correctoption")[0][4].selected="true"
          }
    }
  }, [props.data]);
  const [queImage, setQueImage] = useState("");
  const questionType = (e) => {
    if (e.target.value === "Paragraph") {
      document.getElementById("para").style.display = "block";
      document.getElementById("uploadImageLabel").style.display = "none";
      document.getElementById("upload-box").style.display = "none";
      document.getElementById("uploadedImg").style.display = "none";
      document.getElementById("uploadedImg").style.display = "none";
    } else if (e.target.value === "Multiple") {
      document.getElementById("upload-box").style.display = "none";
      document.getElementById("uploadedImg").style.display = "none";
      document.getElementById("para").style.display = "none";
      document.getElementById("uploadImageLabel").style.display = "none";
      document.getElementById("uploadedImg").style.display = "none";
    } else {
        if(props.data.picLink===undefined)
        {
            document.getElementById("upload-box").style.display = "flex";
            document.getElementById("uploadImageLabel").style.display = "flex";
            document.getElementById("para").style.display = "none";
            document.getElementById("uploadedImg").style.display = "none";
        }else{
            document.getElementById("uploadImg").style.display =
              "block";
            document.getElementById("uploadedImg").style.display =
              "block";
            document.getElementById("uploadImg").src = props.data.picLink;
            document.getElementById("upload-box").style.display =
              "none";
            document.getElementById("para").style.display = "none";
        }
    }
  };
  const uploadImage = (e) => {
    e.preventDefault();
    setQueImage(e.target.files[0]);
  };
  const uploadFile = (e) => {
    document.getElementById("blurScreen").style.display="block"
    if (queImage === "") {
      alert("Please select image first");
    } else {
      const form = new FormData();
      form.append("QImage", queImage);
      axios
        .post(process.env.REACT_APP_API_URL+"/upload/pic", form, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((item) => {
          let img = process.env.REACT_APP_API_URL+ "/"+ item.data;
          document.getElementById("uploadImg").src = img;
          document.getElementById("uploadImg").style.display =
            "block";
          document.getElementById("uploadedImg").style.display =
            "block";
          document.getElementById("upload-box").style.display =
            "none";
            document.getElementById("blurScreen").style.display="none"
        })
        .catch((error) => {
          // console.log(error);
          alert("Error occurred, Please try again");
          document.getElementById("blurScreen").style.display="none"
        });
    }
  };
  const deleteImage = ()=>{
    document.getElementById("upload-box").style.display = "flex";
    document.getElementById("uploadImageLabel").style.display = "flex";
    document.getElementById("para").style.display = "none";
    document.getElementById("uploadedImg").style.display = "none";
  }
  const changeTitle = (e) => {
    // console.log(document.getElementById("qtitle").value);
  };
  const updateFile = () =>{
    document.getElementById("blurScreen").style.display="block"
    let type = ""
    let para = ""
    let imgLink = ""
    let data = {}
        let item = document.getElementsByName("qtype")
        item.forEach((item)=>{
          if(item.checked)
          {
            if(item.value==="Paragraph")
            {
              type="Paragraph"
              para = document.getElementById("paragraph").value
            }else if(item.value==="PicQ"){
              type="PicQ"
              imgLink = document.getElementById("uploadImg").src 
            }else{
              type="Multiple"
            }
          }
        })
        if(type==="Paragraph")
        {
          data = {
            "Qtitle":document.getElementById("qtitle").value,
            "Qtype":type,
            "paragraph":para,
            "totalMarks":Number(document.getElementById("marks").value),
            "OptionA":document.getElementById("opta").value,
            "OptionB":document.getElementById("optb").value,
            "OptionC":document.getElementById("optc").value,
            "OptionD":document.getElementById("optd").value,
            "correctOption":document.getElementById("correctOption").value
          }
        }else if(type==="PicQ"){
          data={
            "Qtitle":document.getElementById("qtitle").value,
            "Qtype":type,
            "picLink":imgLink,
            "totalMarks":Number(document.getElementById("marks").value),
            "OptionA":document.getElementById("opta").value,
            "OptionB":document.getElementById("optb").value,
            "OptionC":document.getElementById("optc").value,
            "OptionD":document.getElementById("optd").value,
            "correctOption":document.getElementById("correctOption").value
          }
        }else{
          data={
            "Qtitle":document.getElementById("qtitle").value,
            "Qtype":type,
            "totalMarks":Number(document.getElementById("marks").value),
            "OptionA":document.getElementById("opta").value,
            "OptionB":document.getElementById("optb").value,
            "OptionC":document.getElementById("optc").value,
            "OptionD":document.getElementById("optd").value,
            "correctOption":document.getElementById("correctOption").value
          }
        }

        axios.patch(process.env.REACT_APP_API_URL+"/v1/question/update?qId="+props.data._id,data,{
          headers:{
            Authorization: localStorage.getItem('token')
          }
        }).then((item)=>{
          // console.log(item);
          document.getElementById("blurScreen").style.display="none"
          window.location="/admin/add-question/"+id.quesid
        }).catch((error)=>{
          // console.log(error);
          alert("error occurred, please try again")
          document.getElementById("blurScreen").style.display="none"
        })
        // console.log(data)
  }
  return (
    <>
    <Loader />
      <div id="questionEdit" style={{ display: "none" }}>
        <div className={styles["show-header"]}>
          <div className={styles["back-img"]}>
            <img src={prev} onClick={props.hide} />
          </div>
        </div>
        <div>
          <div className={styles["edit-content"]}>
            <div className={styles["question-card"]}>
              <form>
                <div className={styles["radio-btn"]}>
                  <div className={styles["question-radio"]}>
                    <input
                      type="radio"
                      name="qtype"
                      value="Multiple"
                      onChange={(e) => {
                        questionType(e);
                      }}
                    />
                    <label>Multiple</label>
                  </div>
                  <div className={styles["question-radio"]}>
                    <input
                      type="radio"
                      name="qtype"
                      value="Paragraph"
                      onChange={(e) => {
                        questionType(e);
                      }}
                    />
                    <label>Paragraph</label>
                  </div>
                  <div className={styles["question-radio"]}>
                    <input
                      type="radio"
                      name="qtype"
                      value="PicQ"
                      onChange={(e) => {
                        questionType(e);
                      }}
                    />
                    <label>Pic</label>
                  </div>
                </div>
                <div className={styles["question-field"]}>
                  <div id="para" style={{ display: "none" }}>
                    <label>Paragraph</label>
                    <textarea id="paragraph" placeholder="Paragraph" />
                  </div>
                  <label>Question Title</label>
                  <input
                    type="text"
                    placeholder="Question Title"
                    id="qtitle"
                    onChange={(e) => {
                      changeTitle(e);
                    }}
                    required
                  />
                  <label>Option A</label>
                  <input
                    type="text"
                    placeholder="Option A"
                    id="opta"
                    required
                  />
                  <label>Option B</label>
                  <input
                    type="text"
                    placeholder="Option B"
                    id="optb"
                    required
                  />
                  <label>Option C</label>
                  <input
                    type="text"
                    placeholder="Option C"
                    id="optc"
                    required
                  />
                  <label>Option D</label>
                  <input
                    type="text"
                    placeholder="Option D"
                    id="optd"
                    required
                  />
                  <label>Correct Option</label>
                  <select name="correctoption" id="correctOption">
                    <option selected value="A">
                      Correct Option
                    </option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                  </select>
                  <label>Marks</label>
                  <input
                    type="text"
                    placeholder="Total Marks"
                    id="marks"
                    required
                  />
                  <label
                    className={styles["upload-img-label"]}
                    id="uploadImageLabel"
                    style={{ display: "none" }}
                  >
                    Upload Image
                  </label>
                  <div id="uploadedImg" className={styles["uploadedImg"]}>
                      <label>Pic</label>
                      <div className={styles["image-box"]}>
                    <img
                      src="#"
                      style={{ display: "none", margin: "auto" }}
                      width="200"
                      height="200"
                      id="uploadImg"
                    />
                    <img src={deleteIcon} width="40" height="40" onClick={()=>{deleteImage()}}/>
                      </div>
                  </div>
                  <div
                    className={styles["upload-div"]}
                    style={{ display: "none" }}
                    id="upload-box"
                  >
                    <input
                      type="file"
                      required
                      onChange={(e) => {
                        uploadImage(e);
                      }}
                    />
                    <div>
                      <button
                        type="button"
                        className={styles["upload-btn"]}
                        onClick={(e) => {
                          uploadFile(e);
                        }}
                      >
                        Upload
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <h1>{props.data.Qtype}</h1> */}
        </div>
            <div className={styles["update-button"]}>
                        <button onClick={()=>{updateFile()}}>Update</button>
            </div>
      </div>
    </>
  );
};

export default Edit;
