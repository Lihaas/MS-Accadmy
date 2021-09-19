import edit from "../../../Assets/Image/edit.png";
import deleteIcon from "../../../Assets/Image/delete (1).png";
import styles from "../../../StyleSheets/admin/NewAdmin/questionList.module.css";
import axios from "axios";
import showIcon from "../../../Assets/Image/view.png";
import Loader from "../../loading spinner/Loader";
import { useState } from "react";
import Axios from "axios";

const List = (props) => {
  const [file, setFile] = useState("");
  const deleteQuestion = (e) => {
    document.getElementById("blurScreen").style.display = "block";
    axios
      .delete(
        process.env.REACT_APP_API_URL +
          "/v1/question/delete?qid=" +
          e.target.id,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((item) => {
        axios
          .get(
            process.env.REACT_APP_API_URL + "/v1/questions?testID=" + props.id,
            {
              headers: {
                Authorization: localStorage.getItem("token"),
              },
            }
          )
          .then((item) => {
            console.log(item.data.searchResult);
            props.setdata(item.data.searchResult);
            document.getElementById("blurScreen").style.display = "none";
          })
          .catch((error) => {
            document.getElementById("blurScreen").style.display = "none";
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(e.target.id);
  };
  const editQue = (e) => {
    props.edit(e);
    console.log();
  };

  const uploadPictureForm = () => {
    var hospiForm = document.getElementById("hospiForm");
    if (hospiForm.style.display === "none") {
      hospiForm.style.display = "flex";
    } else {
      hospiForm.style.display = "none";
    }
  };
  const fileupload = (e) => {
    e.preventDefault();
    console.log(e.target.files[0]);
    setFile(e.target.files[0])
  };
  const upload = (event) => {
    event.preventDefault();
    document.getElementById("blurScreen").style.display="block"
    var formData = new FormData();
    formData.append('csv', file)
    Axios.post(process.env.REACT_APP_API_URL+"/v1/uploadCSV",formData,{
      headers:{
        "Content-Type":"multipart/form-data",
        "Authorization":localStorage.getItem("token")
      }
    })
    .then(()=>{
      alert("Added succesfully!")
      document.getElementById("blurScreen").style.display="none"
      uploadPictureForm();
    })
    .catch(()=>{
      document.getElementById("blurScreen").style.display="none"
      alert("Error occurred, Please try again")
    })
  }
  // const upload = (event) => {
  //   event.preventDefault();
  //   document.getElementById("blurScreen").style.display="block"
  //   let formData = new FormData();
  //   formData.append("csv", file);
  //   Axios.post(process.env.REACT_APP_API_URL + "/v1/uploadCSV", formData, {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //       "Authorization": localStorage.getItem("token"),
  //     },
  //   })
  //     .then((item) => {
  //       document.getElementById("blurScreen").style.display = "none";
  //       alert("File Upload Succesfully!");
  //       console.log(item);
  //       uploadPictureForm();
  //     })
  //     .catch((error) => {
  //       document.getElementById("blurScreen").style.display = "none";
  //       alert("Error occurred, Please try again");
  //       console.log(error);
  //     });
  // };
  return (
    <>
      <div className={styles["csv-upload-form"]} id="hospiForm">
        <h1
          style={{
            color: "white",
            position: "fixed",
            top: "5px",
            right: "17px",
            fontSize: "28px",
            cursor: "pointer",
          }}
          onClick={() => uploadPictureForm()}
        >
          &#10539;
        </h1>
        <form
          style={{
            transform: "translate(-25%)",
            background: "white",
            marginTop: "100px",
            width: "40%",
            height: "150px",
          }}
          onSubmit={(event) => upload(event)}
        >
          <input
            type="file"
            style={{ marginTop: "30px", marginLeft: "20px" }}
            onChange={(e) => fileupload(e)}
          />
          <br></br>
          <input
            type="submit"
            style={{
              background: "#4268f6",
              color: "white",
              width: "150px",
              textAlign: "center",
              padding: "9px 14px",
              fontSize: "15px",
              margin: "20px",
              marginTop: "30px",
              border: "0",
              cursor: "pointer",
            }}
            value="Upload"
          />
        </form>
      </div>
      <Loader />
      <div id="questionList">
        <div className={styles["create-button"]}>
          <button onClick={() => uploadPictureForm()}>Upload File</button>
          <button
            onClick={() => {
              props.create();
            }}
          >
            Create New
          </button>
        </div>
        {props.data.length === 0 ? (
          <h1>No Data Available</h1>
        ) : (
          <table>
            <tr className={styles["ques-tabel-row"]}>
              <th width="10%">Q No</th>
              <th width="70%" align="left">
                Question Title
              </th>
              <th width="20%">Action</th>
            </tr>
            {props.data.map((item, index) => {
              return (
                <tr
                  className={styles["ques-tabel-row"]}
                  style={{ cursor: "pointer" }}
                  id={index}
                >
                  <td id={index}>{index + 1}</td>
                  <td id={index}> {item.Qtitle}</td>
                  <td id={index} className={styles["ques-tabel-img"]}>
                    <img
                      src={showIcon}
                      id={index}
                      onClick={(e) => props.show(e.target.id)}
                    />
                    <img
                      src={deleteIcon}
                      id={item._id}
                      onClick={(e) => {
                        deleteQuestion(e);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </table>
        )}
      </div>
    </>
  );
};

export default List;
