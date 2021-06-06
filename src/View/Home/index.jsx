import styles from "../../StyleSheets/Home/Home.module.css";
import Mohit from "../../Assets/Image/mohit.png";
import Boom from "../../Assets/Image/boom.png";
import DesktopHeroImage from "../../Assets/Image/desktop-hero-image.svg";
import GooglePlay from "../../Assets/Image/googleplay.png";
import Youtube from "../../Assets/Image/youtube.png";
import Exam from "../../Assets/Image/exam.png";
import RightBox from "../../Assets/Image/rightBox.png";
import Students1 from "../../Assets/Image/students_1.jpg";
import Students2 from "../../Assets/Image/students_2.jpg";
import Sec401 from "../../Assets/Image/Sec401.png";
import Sec402 from "../../Assets/Image/Sec402.png";
import Image1 from "../../Assets/Image/image1.png";
import Image2 from "../../Assets/Image/image2.png";
import Image3 from "../../Assets/Image/image3.png";
import Image4 from "../../Assets/Image/image4.png";
import CoachingCenter from "../../Assets/Image/coaching_center.jpg";
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { NavLink } from "react-router-dom";
import {UpdateData} from "../../Firebase/UpdateData" 
import { useEffect, useState } from "react";

const Home = () => {
  const [updateData,setUpdateData] = useState([])

  useEffect(()=>{
    UpdateData(setUpdateData);
    window.scrollTo(0,0)
  },[])
  return (
    <>
      <div className={styles.home}>
        <section className={styles["hero-section"]}>
          <div className={styles["hero-content"]}>
            <h1>M Smart Academy</h1>
            <p>Online</p>
            <h5>Education</h5>
            <h4>FOR UGC NET</h4>
            <NavLink to={{pathname: "/sign-up"}}><button>Register Now</button></NavLink>
          </div>
          <div className={styles["hero-image"]}>
            <img src={Mohit} className={styles["float-img"]} />
            <img src={DesktopHeroImage} />
          </div>
        </section>
        <section className={styles["mobile-hero-section"]}>
          <div className={styles["mobile-hero-section-container"]}>
            <div className={styles["mobile-hero-top"]}>
              <h2>
                M Smart Academy <br /> With
              </h2>
              <div style={{position:"relative",display: "flex", justifyContent: "center", alignItems: "center"}}>
                <span style={{position: "absolute", textAlign: "center"}}>300+ <br />Students<br />Cleared Exam 2020</span>
                <img src={Boom} />
              </div>
            </div>
            <div className={styles["mobile-hero-bottom"]}>
              <h3>
                MS Academy <br /> Online Education <br />
                For <br />
                UGC NET
              </h3>
              <div>
                <img src={Mohit} />
              </div>
            </div>
          </div>
        </section>

        <section className={styles["section-1"]}>
          <div className={styles["section-wrapper"]}
          >
            <div className={styles["upcomming-batch"]}>
              <h1>Updates</h1>
              <Carousel>
                {
                  updateData.map((item,index)=>{
                    if(item.video==="null")
                    {
                      return(
                        <div className={styles["batch"]} key={index}>
                      <span className={styles["title"]}>{item.title}</span>
                      <a href={item.redirect} target="_blank"><img src={item.img}/></a>
                      <span className={styles["description"]}>{item.description}</span>
                        </div>
                      )
                    }else{
                      return(
                        <div className={styles["batch"]} key={index}>
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
            <div className={styles["contact-section"]}>
              <h1>Want to learn from us ?</h1>
              <p>
                Explore the future with us <br />
                Feel free to get in touch
              </p>
              <div className={styles["contact-form"]}>
              <form>
                  <label>Full Name</label>
                  <input type="text" required/>
                  <label>Phone Number</label>
                  <input type="text" required maxLength="10" pattern="[0-9]{10}"/>
                  <label>Batch Name</label>
                  <input type="text" required/>
                  <button type="submit">Join</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className={styles["section-2"]}>
          <div className={styles["section-wrapper"]}>
            <h1>Best Institute In India</h1>
            <div className={styles["social-media"]}>
              <div
                className={styles["social-apps"]}
              >
                <div>
                  <img src={Youtube} />
                  <h2>95K+ Subscriber</h2>
                </div>
                <div>
                  <img src={GooglePlay} />
                  <h2>25K+ App Download</h2>
                </div>
                <div>
                  <img src={Exam} />
                  <h2>5Lakh+ Students</h2>
                </div>
              </div>
              <div className={styles["rightBox-img"]}
              >
                <img src={RightBox} />
              </div>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially.
            </p>
          </div>
          <div className={styles["about-us"]}>About Us</div>
        </section>

        <section className={styles["section-3"]}>
          <div className={styles["section-wrapper"]}>
            <div className={styles["row-1"]}>
              <div className={styles["img"]}>
                <img src={Students1}/>
              </div>
              <div className={styles["details"]}>
                <h1>Best Result In June 2020</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially.
                </p>
              </div>
            </div>
            <div className={styles["row-2"]}>
              <div className={styles["details"]}>
                <h1>Best Result In June 2020</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially.
                </p>
              </div>
              <div className={styles["img"]}>
                <img src={Students2} />
              </div>
            </div>
          </div>
        </section>

        <section className={styles["section-4"]}>
          <div className={styles["top-section"]}>
            <div>
              <h1>Our Courses</h1>
              <p>
                Instead, it will copy all the configuration files and the
                transitive dependencies (webpack, Babel, ESLint, etc)
              </p>
            </div>
          </div>
          <div className={styles["section-wrapper"]}>
            <div className={styles["exam-1"]}>
              <div className={styles["exam-img"]}>
                <img src={Sec401} />
              </div>
              <div className={styles["exam-detail"]}>
                <h1>Exam 1</h1>
                <p>
                  Instead, it will copy all the configuration files and the
                  transitive dependencies (webpack, Babel, ESLint, etc) right
                  into your project so you have full control over them. All of
                  the commands except eject will still work, but they will point
                  to the copied scripts so you can tweak them. At this point
                  you’re on your own.
                </p>
              </div>
            </div>
            <div className={styles["exam-2"]}>
              <div className={styles["exam-detail"]}>
                <h1>Exam 2</h1>
                <p>
                  Instead, it will copy all the configuration files and the
                  transitive dependencies (webpack, Babel, ESLint, etc) right
                  into your project so you have full control over them. All of
                  the commands except eject will still work, but they will point
                  to the copied scripts so you can tweak them. At this point
                  you’re on your own.
                </p>
              </div>
              <div className={styles["exam-img"]}>
                <img src={Sec401} />
              </div>
            </div>
            <div className={styles["test-series"]}>
              <div className={styles["img"]}>
                <img src={Sec402}/>
              </div>
              <div className={styles["details"]}>
                <h1>Test Series</h1>
                <p>
                  Instead, it will copy all the configuration files and the
                  transitive dependencies (webpack, Babel, ESLint, etc) right
                  into your project so you have full control over them. All of
                  the commands except eject will still work, but they will point
                  to the copied scripts so you can tweak them. At this point
                  you’re on your own.
                </p>
                <button>Free Trail Class</button>
              </div>
            </div>
          </div>
        </section>

        <section className={styles["section-5"]}>
          <div className={styles["section-wrapper"]}>
            <div>
              <h1>Request Demo Class</h1>
              <span>We will arrange a callback for you</span>
            </div>
            <div>
              <div className={styles["contact-form"]}>
                <form>
                  <label>Full Name</label>
                  <input type="text" placeholder="Full Name" required/>
                  <label>Phone Number</label>
                  <input type="text" placeholder="Phone Number" required pattern="[0-9]{10}" maxLength="10"/>
                  <label>Batch Name</label>
                  <input
                    type="text"
                    placeholder="What Batch Do You Want To Choose?"
                    required
                  />
                  <label>Batch Type</label>
                  <select>
                  <option>Paper-I commerce</option>
                  <option>Paper-II commerce</option>
                  <option>Both</option>
                </select>
                  <button type="submit">Submit</button>
                </form>
              </div>
              <div className={styles["image-layer"]}>
                <div>
                  <img src={CoachingCenter} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles["section-6"]}>
          <div>
            <img src={Image1} />
            <img src={Image2} />
            <img src={Image3} />
            <img src={Image4} />
          </div>
          <div>
            <img src={GooglePlay} /> <h1>Download Now</h1>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
