import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styles from "../../../StyleSheets/admin/NewAdmin/question.module.css"
import Loader from "../../loading spinner/Loader";

const Questions = () =>{
    const [data,setData] = useState([])
    useEffect(()=>{
        document.getElementById("blurScreen").style.display="block"
        
        axios.get(process.env.REACT_APP_API_URL+"/users/me", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((item) => {
        if (item.data.phoneNum === 1234567890) {
          axios.get(process.env.REACT_APP_API_URL+"/v1/list/test", {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          })
            .then((item) => {
                setData(item.data)
              document.getElementById("blurScreen").style.display = "none";
            })
            .catch((error) => {
              alert("error occurred, please try again");
              window.location = "/home";
              // console.log(error);
            });
        } else {
          alert("You're not authorized to view this page");
          // window.location = "/home";
        }
      })
      .catch((error) => {
        alert("error occurred, please try again");
        // console.log(error);
        window.location = "/home";
      });
    },[])
    const optionClick = (e) =>{
        // console.log(
        //     document.getElementById("selectTest").value
        // ) 
        window.location="/admin/add-question/"+document.getElementById("selectTest").value
    }  
    return(
        <>
        <Loader />
        <div className={styles.Questions}>
            <div className={styles["header"]}>
                <a href={process.env.REACT_APP_API_URL+"/admin"}><h2>Back to Admin Panel</h2></a>
            </div>
            <div className={styles["content"]}>
                <div className={styles["inner-content"]}>
                    <h2>Select Test</h2>
                    <select onChange={(e)=>{optionClick(e)}} id="selectTest">
                      <option selected>Choose Test</option>
                        {
                            data.map((item,index)=>{
                                return(
                                    <option value={item._id} key={index}>{item.title}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>

        </div>
        </>
    )
}

export default Questions;
