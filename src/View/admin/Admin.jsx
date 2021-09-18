import Axios from "axios";
import { useEffect, useState } from "react";
import { NavLink , Redirect, useParams } from "react-router-dom";
import styles from "../../StyleSheets/admin/admin.module.css";
import Loader from "../../View/loading spinner/Loader";

const Admin = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    document.getElementById("blurScreen").style.display = "block";
    Axios.get(process.env.REACT_APP_API_URL+"/users/me", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((item) => {
        if (item.data.phoneNum === 1234567899) {
          Axios.get(process.env.REACT_APP_API_URL+"/v1/paper/getall", {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          })
            .then((item) => {
              setData(item.data.searchResult);
              document.getElementById("blurScreen").style.display = "none";
            })
            .catch((error) => {
              alert("error occurred, please try again");
              window.location = "/home";
            });
        } else {
          alert("You're not authorized to view this page");
          window.location = "/home";
        }
      })
      .catch((error) => {
        alert("error occurred, please try again");
        window.location = "/home";
      });
  },[]);
  const redirect = (e) =>{
    window.location="/admin/subject/"+e.target.id
  }
  return (
    <>
      <Loader />
      <div className={styles.admin}>
        <div className={styles["header"]}>
          <div className={styles["header-section-wrapper"]}>
            <h1>Admin Panel</h1>
          </div>
        </div>
        <div className={styles["content-section"]}>
          {data.map((item, index) => {
            return (
              <div className={styles["paper-box"]} key={index} id={item._id} onClick={(e)=>{redirect(e)}}>
                <h1 id={item._id}>{item.paperName}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Admin;
