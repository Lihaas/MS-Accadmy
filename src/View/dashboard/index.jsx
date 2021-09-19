import styles from "../../StyleSheets/dashboard/dashboard.module.css"
import dp from "../../Assets/Image/male-user.png"
import dropdown from "../../Assets/Image/dropdownicon.png"
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {UpdateData} from "../../Firebase/UpdateData" 
import { useEffect, useState } from "react";
import Axios from "axios";
import Loader from "../loading spinner/Loader"
import {show} from "../Notes/dropdown"

const Dashboard=()=>{
    const [updateData,setUpdateData] = useState([])
    const [data,setData] = useState({})
    const [newUser,setNewUser] = useState(false)
    let max=0;
    const update = (e) =>{
      document.getElementById("blurScreen").style.display="block"
      e.preventDefault();
      Axios.patch(process.env.REACT_APP_API_URL+"/v1/app/users/me/update",{
        "user_name": document.getElementById("updateName").value,
        "email": document.getElementById("updateEmail").value,
        "address": document.getElementById("updateAddress").value,
      },{headers:{"Authorization":localStorage.getItem('token')}})
      .then((item)=>{
        document.getElementById("blurScreen").style.display="none"
        setNewUser(false)
        setData(item.data)
      }).catch((error)=>{
        document.getElementById("blurScreen").style.display="none"
        console.log(error)
        alert("error occurred, please try again")
      })
    }
    useEffect(()=>{
      UpdateData(setUpdateData);
      window.scrollTo(0,0)
      document.getElementById("blurScreen").style.display="block"
      Axios.get(process.env.REACT_APP_API_URL+"/users/me",{headers:{Authorization: localStorage.getItem('token')}})
      .then((item)=>{
        document.getElementById("blurScreen").style.display="none"
        if(item.data.user_name===undefined)
        {
          setNewUser(true)
        }else{
          setData(item.data)
        }
      }).catch((error)=>{
        document.getElementById("blurScreen").style.display="none"
        alert("Error occurred, Please try again")
        console.log(error)
      })
    },[])
    return(
        <div className={styles.dashboard}>
          <Loader />
         { newUser?
          <div className={styles["blur-dialog"]}>
            <div className={styles["blur-form"]}>
              <h1>Register Yourself</h1>
              <form onSubmit={(e)=>{update(e)}}>
              <label>Name</label>
                <input
                  type="text"
                  placeholder="Full Name (e.g, Ashish Garg)"
                  required
                  id="updateName"
                />
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email (e.g, ashish@gmail.com)"
                  required
                  id="updateEmail"
                />
                <label>Address</label>
                  <input type="text" placeholder="Full Address (e.g, xyz street,xyz,pincode-xxxxxx)" required id="updateAddress"/>
                <button type="submit">Join Us</button>
              </form>
            </div>
          </div>
          :null}
            <div className={styles["left-box"]}>
            <section className={styles["account-information"]}>
                <div className={styles["dp-box"]}>
            <img src={dp} className={styles["dp"]}/>
                </div>
            <div className={styles["account-content"]}>
                <h1>{data.user_name}</h1>
                <p>{data.phoneNum}</p>
                <p>{data.email}</p>
                <h1>Address</h1>
                <p>{data.address}</p>
            </div>
            </section>
            <section className={styles["test-result"]}>
                  {
                    data.result!==undefined?
                    data.result.map((item,index)=>{
                      max=index
                      return(
                        <div className={styles["result-box"]} id="box" key={index}>
                        <h3 onClick={()=>{show(index,max)}}>{item.testName}&nbsp; <img src={dropdown}/></h3>
                   <div style={{display: "none"}} id={index}>
                   <hr></hr>
                    <p>Total Marks - {item.totalMarksExam}<br></br>Marks Scored - {item.marksGain}<br></br>Que Attempt - {item.totalQAttempt}</p>
                    </div>
                    </div>
                      )
                    }):null
                  }
            </section>
            </div>
            <div className={styles["right-box"]}>
            <section className={styles["carousel-section"]}>
          <div className={styles["section-wrapper"]}
          >
            <div className={styles["upcomming-batch"]}>
              <h1>Updates</h1>
              <Carousel>
                {
                  updateData.map((item)=>{
                    if(item.video==="null")
                    {
                      return(
                        <div className={styles["batch"]}>
                      <span className={styles["title"]}>{item.title}</span>
                      <a href={item.redirect} target="_blank"><img src={item.img}/></a>
                      <span className={styles["description"]}>{item.description}</span>
                        </div>
                      )
                    }else{
                      return(
                        <div className={styles["batch"]}>
                        <span className={styles["title"]}>{item.title}</span>
                        <iframe
                        src={item.video}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen={true}
                      ></iframe>
                        <span className={styles["description"]}>{item.description}</span>
                          </div>
                      )
                    }
                  })
                }
                {/*<div className={styles["batch"]}>
                  <span className={styles["title"]}>UGC NET 2021</span>
                </div>
                <div className={styles["batch"]}>
                  <span className={styles["title"]}>UGC NET 2021</span>
                </div> */}
            </Carousel>
            </div>
            </div>
        </section>
            </div>
        </div>
    )
}

export default Dashboard