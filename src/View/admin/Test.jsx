import styles from "../../StyleSheets/admin/subject.module.css"
import add from "../../Assets/Image/add.png"
import prev from "../../Assets/Image/previous.png"
import { NavLink , useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import Axios from "axios"
import Loader from "../loading spinner/Loader"
const AdminTest = () =>{
  let id = useParams();
  const [data,setData] = useState([]) 
  useEffect(() => {
    document.getElementById("blurScreen").style.display = "block";
    Axios.get(process.env.REACT_APP_API_URL+"/users/me", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((item) => {
        if (item.data.phoneNum === 1234567899) {
          Axios.get(process.env.REACT_APP_API_URL+"/v1/get/test?chapterId="+id.testId, {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          })
            .then((item) => {
              // console.log(item.data.searchResult);
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
    window.location="/admin/addquestion/"+e.target.id
  }
    return(
        <>
        <Loader />
         <div className={styles.admin}>
      <div className={styles["header"]}>
      <div className={styles["header-back-btn"]}>
      <img src={prev} onClick={()=>{window.history.back()}}/>
        </div>
        <div className={styles["header-content"]}>
        <h1>Test</h1>
        </div>
        <div className={styles["header-add-item"]}>
        <div><NavLink to={"/admin/addtest/"+id.testId}><img src={add} /></NavLink></div>
        </div>
      </div>
      <div className={styles["content-section"]}>
        
              {data.map((item, index) => {
                  return (
                    <div className={styles["paper-box"]} key={index} id={item._id} onClick={(e)=>{redirect(e)}}>
                      <h1 id={item._id}>{item.title}</h1>
                      </div>
                  );
                })}
      </div>
    </div>
        </>
    )
}

export default AdminTest;