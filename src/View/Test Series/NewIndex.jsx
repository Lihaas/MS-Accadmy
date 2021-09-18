import styles from "../../StyleSheets/Test Series/newtestseries.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import nta from "../../Assets/Image/NTA.png"
import banner from "../../Assets/Image/homepage-banner1.jpg"
import DownloadBanner from "../../Components/Download Banner/Index";
import { useEffect, useState } from "react";
import SignUpDialog from "../../Components/SignUpDialog/Index";
import { isUserLoggedIn } from "../../Firebase/Authentication";
const NewIndex = () => {
  const [dialog,setDialog] = useState(false);
  const [login,setLogin] = useState(false)
  const [link,setLink] = useState("")
  useEffect(()=>{
    window.scrollTo(0,0);
    isUserLoggedIn(setLogin)
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
          <div className={styles["card-holder"]}>
            <div className={styles["box-1"]}>
              <div className={styles["sub-card"]}>
                  <img src={nta} />
              </div>
              <h1>Paper 1</h1>
              <ul>
                <li>25+ Paid test</li>
                <li>5+ free Mock test</li>
              </ul>
              <div className={styles["btn-holder"]}>
                <button className={styles["btn"]}><a href="/plans">Buy Test</a></button>
                <button className={styles["btn"]} onClick={(e)=>{checkLogin(e)}} id="610f7d8853879f0015b3b54f">View all test</button>
              </div>
                <button className={styles["full-btn"]} onClick={(e)=>{checkLogin(e)}} id="610f7d8853879f0015b3b54f">Attempt Free Trial</button>
            </div>
          </div>
          <div className={styles["card-holder"]}>
            <div className={styles["box-2"]}>
              <div className={styles["sub-card"]}>
              <img src={nta} />
              </div>
              <h1>Paper 2</h1>
              <ul>
              <li>25+ Paid test</li>
              <li>5+ free Mock test</li>
              </ul>
              <div className={styles["btn-holder"]}>
                <button className={styles["btn"]}><a href="/plans">Buy Test</a></button>
               <button className={styles["btn"]} onClick={(e)=>{checkLogin(e)}} id="610f7d8e53879f0015b3b553">View all test</button>
              </div>
                <button className={styles["full-btn"]} onClick={(e)=>{checkLogin(e)}} id="610f7d8e53879f0015b3b553">Attempt Free Trial</button>
                {
                dialog?
                <SignUpDialog show={setDialog} redirectLink={link}/>
                :null
                }
            </div>
          </div>
          </div>
          <DownloadBanner />
      </div>
    </>
  );
};
export default NewIndex;
