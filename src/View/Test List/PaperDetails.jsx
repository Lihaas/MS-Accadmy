import DownloadBanner from "../../Components/Download Banner/Index";
import banner from "../../Assets/Image/homepage-banner1.jpg";
import styles from "../../StyleSheets/Test Series/InfotestSeries.module.css";
import { useEffect, useState } from "react";
import SignUpDialog from "../../Components/SignUpDialog/Index";
import { withRouter } from "react-router";
import Axios from "axios";
import Loader from "../loading spinner/Loader";
import Sheet from "../../Assets/Image/text-document.png";

const PaperDetails = (props) => {
  const [dialog, setDialog] = useState(false);
  const [login, setLogin] = useState(false);
  const [data, setData] = useState([]);
  const [result, setResult] = useState([]);
  const [unlock, setUnlock] = useState(false);
  const [pay,setPay] = useState("")
  const id = props.match.params.paper;
  useEffect(() => {
    window.scrollTo(0, 0);
    document.getElementById("blurScreen").style.display="block"
    Axios.get(process.env.REACT_APP_API_URL+"/v1/get/test?chapterId=" + id, {
      headers: { Authorization: localStorage.getItem("token") },
    })
      .then((item) => {
        setData(item.data.searchResult);
        // payFor = item.data.searchResult[0].testForStudents
        // console.log(payFor)
      })
      .catch((error) => {
        if(error.response.status===401)
        {
          alert("Session Expired, Please login again")
          document.getElementById("blurScreen").style.display="none"
          // console.log(error);
          window.location="/login"
        }else{
          alert("Error Occurred, Please try again")
          document.getElementById("blurScreen").style.display="none"
          // console.log(error);
        }
      });
      Axios.get(process.env.REACT_APP_API_URL+"/users/me", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((item) => {
        document.getElementById("blurScreen").style.display="none"
        setResult(item.data.result)
        setPay(item.data.payforTest);
        if (pay === "Both") {
          setUnlock(true);
        } else if (pay === id) {
          setUnlock(true);
        } else {
          setUnlock(false);
        }
      })
      .catch((error) => {
        // console.log(error);
        alert("Error Occurred, Please try again")
        document.getElementById("blurScreen").style.display="none"
        // console.log(error);
      });
  }, []);
  const openTest = (e) => {
    document.getElementById("blurScreen").style.display = "block";
    if(data[e.target.id].openDate==="ABCD")
    {
      localStorage.setItem("examName", data[e.target.id].title);
      const id = data[e.target.id]._id;
      localStorage.setItem("examID",id)
      localStorage.setItem("totalMarks",data[e.target.id].totalMarks)
      Axios.get(process.env.REACT_APP_API_URL+"/v1/questions?testID=" + id, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((item) => {
          localStorage.setItem("testTime", data[e.target.id].totalTestTime)
          let que = item.data.searchResult;
          localStorage.setItem("questions", JSON.stringify(que));
          window.location = "/test-page";
          document.getElementById("blurScreen").style.display = "none";
        })
        .catch((error) => {
          // console.log(error);
          document.getElementById("blurScreen").style.display = "none";
        alert("Error Occurred, Please try again")
        });
    }else{
      const examDate =
      data[e.target.id].openDate + "T" + data[e.target.id].openTime;
    const currentDate = new Date();
    const finalDate = new Date(examDate);
    if (finalDate < currentDate) {
      localStorage.setItem("examName", data[e.target.id].title);
      const id = data[e.target.id]._id;
      localStorage.setItem("examID",id)
      localStorage.setItem("totalMarks",data[e.target.id].totalMarks)
      Axios.get(process.env.REACT_APP_API_URL+"/v1/questions?testID=" + id, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((item) => {
          localStorage.setItem("testTime", data[e.target.id].totalTestTime)
          let que = item.data.searchResult;
          localStorage.setItem("questions", JSON.stringify(que));
          window.location = "/test-page";
          document.getElementById("blurScreen").style.display = "none";
        })
        .catch((error) => {
          // console.log(error);
          document.getElementById("blurScreen").style.display = "none";
        alert("Error Occurred, Please try again")
        });
    } else {
      alert("test is not up yet");
      document.getElementById("blurScreen").style.display = "none";
    }
    }
  };
  // console.log(unlock);
  return (
    <>
      <Loader />
      <div className={styles.testSeriesInfo}>
        <img src={banner} className={styles["banner"]} />
        <div className={styles["name-banner"]}>
          {
            data.length===0?
            null
            :
          <h1>{data[0].testForStudents}</h1>
          }
        </div>
        <h1 style={{ paddingTop: "50px", paddingLeft: "130px" }}>All Test</h1>
        <div className={styles["test-list"]}>
          {data.map((item, index) => {
            const time = item.totalTestTime;
            let hour = Math.floor(time/60);
           hour= hour<10?
            "0"+hour
            :hour
            let minute = time%60;
            minute=minute<10?"0"+minute:minute
            let testTime = hour+":"+minute
            return (
              <div className={styles["test-box"]} key={index}>
                <div className={styles["test-box-1"]}>
                  <div className={styles["sub-test-box-1"]}>
                    <div className={styles["paper-name"]}>
                    <h1>{item.title} &nbsp;&nbsp;&nbsp;</h1>

                    {
                      result!==[]?
                      result.map((Item)=>{
                        {
                          if( Item.paperId===item._id)
                          {
                            return(
                              <span style={{fontSize: "15px",color: "green"}}>Previous Marks - {Item.marksGain}</span>
                            )
                          }
                        }
                      })
                      :null
                    }
                    </div>
                  </div>
                  <div className={styles["sub-test-box-2"]}>
                    <div className={styles["sec-1"]}>
                      <div className={styles["question"]}>
                        {item.totalQuestions} Questions
                      </div>
                      <div className={styles["marks"]}>
                        <img src={Sheet} />
                        {item.totalMarks} Marks
                      </div>
                    </div>
                    <div className={styles["sec-2"]}>
                      <div className={styles["time"]}>&#128336;
                       {testTime}</div>
                       {
                         item.openDate==="ABCD"?
                         null
                         :
                      <div className={styles["live-btn"]}>
                        <button>LIVE</button>
                        <p>
                          {item.openDate} {item.openTime}
                        </p>
                      </div>
                       }
                    </div>
                  </div>
                </div>
                <div className={styles["test-box-2"]}>
                  {
                    // console.log("paid"+item.isPaid)
                  }
                  {item.isPaid === false || item.isPaid == undefined? (
                    <>
                    <button className={styles["free-btn"]}>FREE</button>
                    <button
                      onClick={(e) => {
                        openTest(e);
                      }}
                      id={index}
                    >
                      Start Test
                    </button>
                    </>
                  ) : item.testForStudents===pay || pay==="Both"? (
                    <button
                      onClick={(e) => {
                        openTest(e);
                      }}
                      id={index}
                    >
                      Start Test
                    </button>
                  ) : (
                    <button className={styles["unlock-btn"]}>
                      {/* <a href="/plans">Unlock</a> */}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <DownloadBanner />
      </div>
    </>
  );
};
export default withRouter(PaperDetails);
