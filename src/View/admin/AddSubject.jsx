import styles from "../../StyleSheets/admin/addsubject.module.css";
import prev from "../../Assets/Image/previous.png";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../loading spinner/Loader";
import { useEffect } from "react";

const AddSubject = () => {
  const id = useParams();
  useEffect(()=>{
    document.getElementById("blurScreen").style.display = "block";
    axios.get(process.env.REACT_APP_API_URL+"/users/me", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((item) => {
        if (item.data.phoneNum === 1234567899) {
    document.getElementById("blurScreen").style.display = "none";
        } else {
          alert("You're not authorized to view this page");
          window.location = "/home";
        }
      })
      .catch((error) => {
        alert("error occurred, please try again");
        window.location = "/home";
      });
  },[])
  const addSubject = (e) => {
    document.getElementById("blurScreen").style.display="block"
    e.preventDefault()
    axios.post(process.env.REACT_APP_API_URL+"/create/subject", {
      subjectName: document.getElementById("subjectName").value,
      questionPaperID: id.subjectId,
    },{
      headers:{
        Authorization: localStorage.getItem('token')
      }
    }).then((item)=>{
      alert("Item Added Succesfully")
      document.getElementById("subjectName").value=""
    document.getElementById("blurScreen").style.display="none"
    }).catch((error)=>{
      alert("Error Occurred Please try again")
    document.getElementById("blurScreen").style.display="none"
    })
  };

  return (
    <>
    <Loader />
      <div className={styles.admin}>
        <div className={styles["header"]}>
          <div className={styles["header-prev-btn"]}>
            <NavLink to={"/admin/subject/" + id.subjectId}>
              <img src={prev} />
            </NavLink>
          </div>
          <div className={styles["header-section-wrapper"]}>
            <h1>Add Subject</h1>
          </div>
        </div>
        <div className={styles["content-section"]}>
          <form
            onSubmit={(e) => {
              addSubject(e);
            }}
          >
            <input
              type="text"
              placeholder="Subject Name"
              id="subjectName"
              required
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddSubject;
