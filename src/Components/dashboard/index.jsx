import styles from "../../StyleSheets/dashboard/dashboard.module.css"
import dp from "../../Assets/Image/sample dp.png"
import { useState } from "react"
import dropdown from "../../Assets/Image/dropdownicon.png"
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Dashboard=()=>{
    const [show,setShow] = useState(false)
    const [show1,setShow1] = useState(false)
    const [show2,setShow2] = useState(false)
    const [show3,setShow3] = useState(false)
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
            <section className={styles["carousel-box"]}>
                <h1>Updates</h1>
            <Carousel>
                <div className={styles["youtube-video"]}>
                <iframe src="https://www.youtube.com/embed/GfAG61wRjP8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                <p>New Video Release</p>
                </div>
                <div className={styles["youtube-video"]}>
                <iframe src="https://www.youtube.com/embed/GfAG61wRjP8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                <p>New Video Release</p>
                </div><div className={styles["youtube-video"]}>
                <iframe src="https://www.youtube.com/embed/GfAG61wRjP8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                <p>New Video Release</p>
                </div>
            </Carousel>
            </section>
            </div>
        </div>
    )
}

export default Dashboard