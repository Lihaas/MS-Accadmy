import styles from "../../StyleSheets/dashboard/dashboard.module.css"
import dp from "../../Assets/Image/sample dp.png"
import dropdown from "../../Assets/Image/dropdownicon.png"
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";import {UpdateData} from "../../Firebase/UpdateData" 
import { useEffect, useState } from "react";

const Dashboard=()=>{
    const [show,setShow] = useState(false)
    const [show1,setShow1] = useState(false)
    const [show2,setShow2] = useState(false)
    const [show3,setShow3] = useState(false)
    const [updateData,setUpdateData] = useState([])

    useEffect(()=>{
      UpdateData(setUpdateData);
    },[])
    return(
        <div className={styles.dashboard}>
            <div className={styles["left-box"]}>
            <section className={styles["account-information"]}>
                <div className={styles["dp-box"]}>
            <img src={dp} className={styles["dp"]}/>
                </div>
            <div className={styles["account-content"]}>
                <h1>Sahil Verma</h1>
                <p>9992468544</p>
                <p>sahil@google.com</p>
                <h1>Address</h1>
                <p>sector 13, Hisar, Faridabad</p>
            </div>
            </section>
            <section className={styles["test-result"]}>
                <div className={styles["result-box"]} id="box">
                    <h3 onClick={()=>{setShow(!show)}}>31/june/2020 Mockup 1 &nbsp; <img src={dropdown}/></h3>
                   { show?
                   <div>
                   <hr></hr>
                    <p>Total No - 210<br></br>Score - 110</p>
                    </div>
                    :null}
                </div>
                <div className={styles["result-box"]} id="box1">
                    <h3 onClick={()=>{setShow1(!show1)}}>31/june/2020 Mockup 1 &nbsp; <img src={dropdown}/></h3>
                   { show1?
                   <div>
                   <hr></hr>
                    <p>Total No - 210<br></br>Score - 110</p>
                    </div>
                    :null}
                </div>
                <div className={styles["result-box"]} id="box2">
                    <h3 onClick={()=>{setShow2(!show2)}}>31/june/2020 Mockup 1 &nbsp; <img src={dropdown}/></h3>
                   { show2?
                   <div>
                   <hr></hr>
                    <p>Total No - 210<br></br>Score - 110</p>
                    </div>
                    :null}
                </div>
                <div className={styles["result-box"]} id="box3">
                    <h3 onClick={()=>{setShow3(!show3)}}>31/june/2020 Mockup 1 &nbsp; <img src={dropdown}/></h3>
                   { show3?
                   <div>
                   <hr></hr>
                    <p>Total No - 210<br></br>Score - 110</p>
                    </div>
                    :null}
                </div>
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