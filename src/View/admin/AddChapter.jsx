import styles from "../../StyleSheets/admin/addsubject.module.css"
import prev from "../../Assets/Image/previous.png"
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../loading spinner/Loader";
import { useEffect } from "react";
const AddChapter = () =>{
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
  const addChapter = (e) => {
    document.getElementById("blurScreen").style.display="block"
    e.preventDefault()
    axios.post(process.env.REACT_APP_API_URL+"/create/chapter", {
      chapterName: document.getElementById("chapterName").value,
      subejectID: id.chapterId,
    },{
      headers:{
        Authorization: localStorage.getItem('token')
      }
    }).then((item)=>{
      alert("Item Added Succesfully")
      document.getElementById("chapterName").value=""
    document.getElementById("blurScreen").style.display="none"
    }).catch((error)=>{
      alert("Error Occurred Please try again")
    document.getElementById("blurScreen").style.display="none"
    })
  };
    return(
        <>
        <Loader />
         <div className={styles.admin}>
      <div className={styles["header"]}>
          <div className={styles["header-prev-btn"]}>
          <NavLink to={"/admin/chapter/" + id.chapterId}>
              <img src={prev} />
            </NavLink>
          </div>
        <div className={styles["header-section-wrapper"]}>
        <h1>Add Chapter</h1>
        </div>
      </div>
      <div className={styles["content-section"]}>
        <form onSubmit={(e)=>{addChapter(e)}}>
            <input type="text" placeholder="Chapter Name" id="chapterName" required/>
            <button type="submit">Add</button>
        </form>
      </div>
    </div>
        </>
    )
}

export default AddChapter;