import styles from "../../StyleSheets/Test Series/newtestseries.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import nta from "../../Assets/Image/NTA.png"
import banner from "../../Assets/Image/homepage-banner1.jpg"
import DownloadBanner from "../../Components/Download Banner/Index";
import { useEffect, useState } from "react";
import SignUpDialog from "../../Components/SignUpDialog/Index";
import { isUserLoggedIn } from "../../Firebase/Authentication";
import Loader from "../loading spinner/Loader";
import axios from "axios";
const NewIndex = () => {
  const [data,setData] = useState([])
  const [dialog,setDialog] = useState(false);
  const [login,setLogin] = useState(false)
  const [link,setLink] = useState("")
  useEffect(()=>{
    window.scrollTo(0,0);
    isUserLoggedIn(setLogin)
    document.getElementById("blurScreen").style.display="block"
    axios.get(process.env.REACT_APP_API_URL+"/v1/paper/getall",{headers:{
      Authorization: localStorage.getItem('token')
    }}).then((item)=>{
      // console.log(item.data.searchResult);
      setData(item.data.searchResult)
      document.getElementById("blurScreen").style.display="none"
    }).catch((error)=>{
      console.log(error);
      alert("error occured, please try again")
      window.location="/"
      document.getElementById("blurScreen").style.display="none"
    })
  },[])
  const checkLogin = (e) =>{
    if(login===true)
    {
      window.location="/subjects/"+e.target.id
    }else{
      setDialog(true)
      setLink("/info/"+e.target.id)
    }
  }
  return (
    <>
    <Loader />
      <div className={styles.testSeries}>
          <img src={banner} className={styles["banner"]}/>
        <h1 className={styles["heading"]}> Latest Online Test Series </h1>
        <div className={styles["filter"]}>
          <div className={styles["gradient-1"]}>Paper-1</div>
          <div className={styles["gradient-2"]}>Paper-2</div>
        </div>
        <h1 className={styles["category-1"]}>
          Teaching Exam <a href="#">See More &gt;</a>
        </h1>
        <div className={styles["card-section"]}>
          {
            data.map((item)=>{
              return(
                <div className={styles["card-holder"]}>
            <div className={styles["box-1"]}>
              <div className={styles["sub-card"]}>
                  <img src={nta} />
              </div>
              <h1>{item.paperName}</h1>
              <ul>
                <li>25+ Paid test</li>
                <li>5+ free Mock test</li>
              </ul>
            </div>
            <div className={styles["plan-button-area"]}>
              <div className={styles["btn-holder"]}>
                <button className={styles["btn"]}><a href="/plans">Buy Test</a></button>
                <button className={styles["btn"]} onClick={(e)=>{checkLogin(e)}} id={item._id}>View all test</button>
              </div>
                <button className={styles["full-btn"]} onClick={(e)=>{checkLogin(e)}} id={item._id}>Attempt Free Trial</button>
          </div>
          </div>
              )
            })
          }
                {
                dialog?
                <SignUpDialog show={setDialog} redirectLink={link}/>
                :null
                }
          </div>
          <DownloadBanner />
      </div>
    </>
  );
};
export default NewIndex;
