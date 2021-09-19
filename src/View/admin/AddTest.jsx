import styles from "../../StyleSheets/admin/addtest.module.css"
import prev from "../../Assets/Image/previous.png"
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../loading spinner/Loader";
import { useEffect } from "react";

const AddTest = () =>{
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
    const addTest = (e) =>{
        e.preventDefault()
        document.getElementById("forStudent").style.borderColor="#000"
        if(document.getElementById("forStudent").value==="")
        {
            document.getElementById("forStudent").style.borderColor="red"
            alert("Please select Test for student dropdown")
        }else{
            document.getElementById("blurScreen").style.display="block"
            const data = {
                "title":document.getElementById("testName").value,
                "description":document.getElementById("description").value,
                "testForStudents":document.getElementById("forStudent").value,
                "totalMarks":document.getElementById("totalMarks").value,
                "totalQuestions":document.getElementById("totalquestions").value,
                "isPaid":document.getElementById("paid").checked,
                "openDate":document.getElementById("testDate").value,
                "openTime":document.getElementById("testTime").value,
                "chapterID":id.testId,
                "totalTestTime": document.getElementById("duration").value
            }
            axios.post(process.env.REACT_APP_API_URL+"/create/test", data,{
                headers:{
                  Authorization: localStorage.getItem('token')
                }
              }).then((item)=>{
                alert("Item Added Succesfully")
                window.history.back();
              document.getElementById("blurScreen").style.display="none"
              }).catch((error)=>{
                alert("Error Occurred Please try again")
                console.log(error);
              document.getElementById("blurScreen").style.display="none"
              })
        }
    }
    return(
        <>
        <Loader />
         <div className={styles.admin}>
      <div className={styles["header"]}>
      <div className={styles["header-prev-btn"]}>
      <NavLink to={"/admin/test/" + id.testId}>
              <img src={prev} />
            </NavLink>
          </div>
        <div className={styles["header-section-wrapper"]}>
        <h1>Add Test</h1>
        </div>
      </div>
      <div className={styles["content-section"]}>
        <form onSubmit={(e)=>{addTest(e)}}>
            <input type="text" placeholder="Test Name" id="testName" required/>
            <select id="forStudent">
                <option selected value="">For Students</option>
                <option value="Paper1">Paper-I</option>
                <option value="Paper2">Paper-II</option>
            </select>
            <input type="text" placeholder="Description" id="description" required/>
            <input type="text" placeholder="Total Marks" id="totalMarks" required/>
            <input type="text" placeholder="Total Questions" id="totalquestions" required/>
            <label>Open Date</label>
            <input type="date" placeholder="Test Time" id="testDate" required/>
            <label>Open Time</label>
            <input type="time" placeholder="Test Time" id="testTime" required/>
            <div className={styles["paid-checkbox"]}>
                <div className={styles["paid-checkbox-input"]}>
            <input type="checkbox" id="paid" />
                </div>
                <div className={styles["paid-checkbox-label"]}>
            <label htmlFor="paid">Is Paid?</label>
                </div>
            </div>
            <input type="number" placeholder="Duration of Test(in minutes)" id="duration" required/>
            <button type="submit">Add</button>
        </form>
      </div>
    </div>
        </>
    )
}

export default AddTest;