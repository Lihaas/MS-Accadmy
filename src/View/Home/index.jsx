import styles from "../../StyleSheets/Home/Home.module.css";
import Mohit from "../../Assets/Image/mohit.png";
import Boom from "../../Assets/Image/boom.png";
import DesktopHeroImage from "../../Assets/Image/desktop-hero-image.svg";
import GooglePlay from "../../Assets/Image/googleplay.png";
import Youtube from "../../Assets/Image/youtube.png";
import Exam from "../../Assets/Image/exam.png";
import RightBox from "../../Assets/Image/rightBox.png";
import Students1 from "../../Assets/Image/BANNER-2.png";
import Students2 from "../../Assets/Image/students_2.jpg";
import Sec401 from "../../Assets/Image/Sec401.png";
import Sec402 from "../../Assets/Image/Sec402.png";
import Image1 from "../../Assets/Image/image1.png";
import Image2 from "../../Assets/Image/image2.png";
import Image3 from "../../Assets/Image/image3.png";
import Image4 from "../../Assets/Image/image4.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { NavLink } from "react-router-dom";
import { UpdateData } from "../../Firebase/UpdateData";
import { useEffect, useState } from "react";
import Axios from "axios";
import Loader from "../../View/loading spinner/Loader";
import Animation from "./Animation";
import starRating from "../../Assets/Image/star rating.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CoachingCenter from "../../Assets/Image/Video Full Hd 1920X1080 Px (6)-1.m4v";

// about mohit icon
import study from "../../Assets/Image/study (1).png";
import star from "../../Assets/Image/star (1).png";
import experience from "../../Assets/Image/experience (1).png";
import expert from "../../Assets/Image/expert (1).png";
import qualification from "../../Assets/Image/qualification (1).png";

//course inclusion
import bookIcon from "../../Assets/Image/book.png";
import telegram from "../../Assets/Image/telegram.png";
import notes from "../../Assets/Image/note.png";
import test from "../../Assets/Image/test.png";
import video from "../../Assets/Image/video-lecture.png";

const Home = (props) => {
  const [updateData, setUpdateData] = useState([]);
  useEffect(() => {
    UpdateData(setUpdateData);
    window.scrollTo(0, 0);
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const enquiry = (e) => {
    e.preventDefault();
    document.getElementById("blurScreen").style.display = "block";
    if (
      document.getElementById("batchType1").value === null ||
      document.getElementById("batchType1").value === "Select"
    ) {
      document.getElementById("blurScreen").style.display = "none";
      alert("Please choose Batch Type");
    } else {
      Axios.post(process.env.REACT_APP_API_URL+"/create/form", {
        name: document.getElementById("enqName").value,
        phoneNumber: document.getElementById("enqPhoneNum").value,
        batchName: document.getElementById("batchType1").value,
        inquary: document.getElementById("subjectName").value,
      })
        .then((item) => {
          document.getElementById("blurScreen").style.display = "none";
          alert("enquiry submitted sucesfully");
        })
        .catch((error) => {
          document.getElementById("blurScreen").style.display = "none";
          console.log(error);
          alert("Error Occurred, Please try again after some time ");
        });
    }
  };
  const enquiry1 = (e) => {
    e.preventDefault();
    document.getElementById("blurScreen").style.display = "block";
    if (
      document.getElementById("batchType").value === null ||
      document.getElementById("batchType").value === "Select"
    ) {
      alert("Please choose Batch Type");
      document.getElementById("blurScreen").style.display = "none";
    } else {
      Axios.post(process.env.REACT_APP_API_URL+"/create/form", {
        name: document.getElementById("enqName1").value,
        phoneNumber: document.getElementById("enqPhoneNum1").value,
        batchName: document.getElementById("batchType").value,
        inquary: document.getElementById("enquiry").value,
      })
        .then((item) => {
          document.getElementById("blurScreen").style.display = "none";
          alert("enquiry submitted sucesfully");
        })
        .catch((error) => {
          document.getElementById("blurScreen").style.display = "none";
          alert("Error Occurred, Please try again after some time ");
          console.log(error);
        });
    }
  };
  return (
    <>
      <div className={styles.home}>
        <Loader />
        <section className={styles["hero-section"]}>
          <div className={styles["hero-content"]}>
            <h1>M Smart Academy</h1>
            <p>Online</p>
            <h5>Education</h5>
            <h4>FOR UGC NET</h4>
            <NavLink to={{ pathname: "/sign-up" }}>
              <button>Register Now</button>
            </NavLink>
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
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span style={{ position: "absolute", textAlign: "center" }}>
                  300+ <br />
                  Students
                  <br />
                  Cleared Exam 2020
                </span>
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
          <div className={styles["section-wrapper"]}>
            <div className={styles["upcomming-batch"]}>
              <h1>Updates</h1>
              <Carousel>
                {updateData.map((item, index) => {
                  if (item.video === "null") {
                    return (
                      <div className={styles["batch"]} key={index}>
                        <span className={styles["title"]}>{item.title}</span>
                        <a href={item.redirect} target="_blank" className={styles["update-a"]}>
                          <img src={item.img}/>
                        </a>
                        <span className={styles["description"]}>
                          {item.description}
                        </span>
                      </div>
                    );
                  } else {
                    return (
                      <div className={styles["batch"]} key={index}>
                        <span className={styles["title"]}>{item.title}</span>
                        <iframe
                          src={item.video}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen={true}
                        ></iframe>
                        <span className={styles["description"]}>
                          {item.description}
                        </span>
                      </div>
                    );
                  }
                })}
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
                <form
                  onSubmit={(e) => {
                    enquiry(e);
                  }}
                >
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    id="enqName"
                  />
                  <label>Phone Number</label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    required
                    maxLength="10"
                    pattern="[0-9]{10}"
                    id="enqPhoneNum"
                  />
                  {/* <label>Email</label>
                  <input type="email" placeholder="Email Address" required /> */}
                  <label>Batch Type</label>
                  <select id="batchType1">
                    <option value="Select" selected>
                      Select
                    </option>
                    <option value="Paper-I">Paper-I</option>
                    <option value="Paper-II">Paper-II</option>
                    <option value="Both">Both</option>
                  </select>
                  <label>Subject Name</label>
                  <input
                    type="text"
                    id="subjectName"
                    placeholder="Please specify subject"
                  />
                  <button type="submit">Join</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Animation />
        <section className={styles["section-2"]}>
          <div className={styles["about-us"]}>What will you get in course?</div>
          <div className={styles["pack-detail-box"]}>
            <div className={styles["pack-detail"]}>
            <a href="/notes/paper1">
              <img src={bookIcon} />
              <h3>Color Booklets</h3>
              </a>
            </div>
            <div className={styles["pack-detail"]}>
            <a href="/notes/paper1">
              <img src={notes} />
              <h3>Free Notes & PDF</h3>
              </a>
            </div>
            <div className={styles["pack-detail"]}>
              <a href="https://www.youtube.com/c/MOHITSHARMACLASSES" target="_blank">
              <img src={video} />
              <h3>Video Lecture</h3>
              </a>
            </div>
            <div className={styles["pack-detail"]}>
            <a href="/test-series">
              <img src={test} />
              <h3>Test Series</h3>
              </a>
            </div>
            <div className={styles["pack-detail"]}>
            <a href="https://t.me/ms00007sharma" target="_blank">
              <img src={telegram} />
              <h3>Join telegram</h3>
              </a>
            </div>
          </div>
          {/* <div className={styles["section-wrapper"]}>
            <h1>Best Institute In India</h1>
            <div className={styles["social-media"]}>
              <div className={styles["social-apps"]}>
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
              <div className={styles["rightBox-img"]}>
                <img src={RightBox} />
              </div>
            </div>
            <p>
              M SMART ACADEMY, an institute is highly known for the coaching for
              UGC NET aspirants. One of the India’s best academy with the best
              Results aims to provide quality education for a better future. It
              is recognized as the best online classes for ugc nta net Course.
              We works to provide guidance to students aspiring for ugc net exam
              &amp; we don’t believe in doing any work ordinarily, we look
              forward to direct all our efforts to do ordinary work in an
              extraordinary manner. We have always tried our best to lead on a
              result-oriented approach as well as creating a professional aura
              among the students and has always held the hand of the students
              while creating their lucrative.
            </p>
          </div> */}
        </section>

        <section className={styles["section-3"]}>
          <h1>About Mohit Sharma</h1>
          <hr></hr>
          <div className={styles["section-wrapper"]}>
            <div className={styles["row-1"]}>
              <div className={styles["charestics"]}>
                <div>
                  <img src={study} />
                </div>
                <p>2 times JRF</p>
              </div>
              <div className={styles["charestics"]}>
                <div>
                  <img src={star} />
                </div>
                <p>8+ Years Of Teaching Experience</p>
              </div>
              <div className={styles["charestics"]}>
                <div>
                  <img src={experience} />
                </div>
                <p>Teaching 100K+ Students On YouTube</p>
              </div>
              <div className={styles["charestics"]}>
                <div>
                  <img src={expert} />
                </div>
                <p>Deals in Paper 1 & Paper 2(commerce)</p>
              </div>
              <div className={styles["charestics"]}>
                <div>
                  <img src={qualification} />
                </div>
                <p>B.Com, M.Com, MBA</p>
              </div>
            </div>
            <div className={styles["row-2"]}>
              <img src={Mohit} />
            </div>
            {/* <div className={styles["row-1"]}>
              <div className={styles["img"]}>
                <img src={Students1} />
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
            </div> */}
          </div>
        </section>

        <section className={styles["section-4"]}>
          <div className={styles["top-section"]}>
            <div>
              <h1>Our Courses</h1>
            </div>
          </div>
          <div className={styles["section-wrapper"]}>
            <div className={styles["exam-1"]}>
              <div className={styles["exam-img"]}>
                <img src={Sec401} />
              </div>
              <div className={styles["exam-detail"]}>
                <h1>Paper 1</h1>
                <p>
                  In this course, We comprehensively covers each topic of Ugc
                  Net Paper-1 through a series of video Lectures , mock tests
                  &amp; Printed Coloured booklets. The course is planned in a
                  way that it provides complete coverage of entire syllabus so
                  that you can make higher score in Paper-1.
                </p>
                <NavLink to="/courses/paper1">
                  <button style={{ cursor: "pointer" }}>Enroll Now</button>
                </NavLink>
              </div>
            </div>
            <div className={styles["exam-2"]}>
              <div className={styles["exam-detail"]}>
                <h1>Paper 2 Commerce</h1>
                <p>
                  In this course, We covers each &amp; every Concept of Ugc Net
                  Paper-2 Commerce through a series of video Lectures , mock
                  tests &amp; Printed Coloured booklets. We exclusive deals in
                  Paper-2 Commerce with a Track Record of Providing Best Results
                  Year By Year. The course is planned in a way that You will
                  able to get in depth Knowledge of all topics covered in Paper
                  2 Commerce Syllabus.
                </p>
                <NavLink to="/courses/paper2">
                  <button style={{ cursor: "pointer" }}>Enroll Now</button>
                </NavLink>
              </div>

              <div className={styles["exam-img"]}>
                <img src={Sec401} />
              </div>
            </div>

            <div className={styles["exam-3"]}>
              <div className={styles["exam-img"]}>
                <img src={Sec401} />
              </div>
              <div className={styles["exam-detail"]}>
                <h1>Paper 2 Management</h1>
                <p>
                  In this course, We covers each &amp; every Concept of Ugc Net
                  Paper-2 Commerce through a series of video Lectures , mock
                  tests &amp; Printed Coloured booklets. We exclusive deals in
                  Paper-2 Commerce with a Track Record of Providing Best Results
                  Year By Year. The course is planned in a way that You will
                  able to get in depth Knowledge of all topics covered in Paper
                  2 Commerce Syllabus.
                </p>
                <NavLink to="/courses/paper2">
                  <button style={{ cursor: "pointer" }}>Enroll Now</button>
                </NavLink>
              </div>
            </div>

            <div className={styles["test-series"]}>
              <div className={styles["details"]}>
                <h1>Test Series</h1>
                <p>
                  Join our exclusive Test series for Nta Ugc Net exams Which
                  Covers Previous year Mcqs’s as well as the Most expected Mcq’s
                  that are being relevant in exams.
                </p>
                <a href="/test-series">
                  <button style={{ cursor: "pointer" }}>
                    Free Trial Class
                  </button>
                </a>
              </div>
              <div className={styles["exam-img"]}>
                <img src={Sec402} />
              </div>
            </div>
          </div>
        </section>

        <section className={styles["section-5"]}>
          <div className={styles["section-wrapper"]}>
            <div>
              <h1>Make an Enquiry</h1>
              <span>We will arrange a callback for you</span>
            </div>
            <div>
              <div className={styles["contact-form"]}>
                <form
                  onSubmit={(e) => {
                    enquiry1(e);
                  }}
                >
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    id="enqName1"
                  />
                  <label>Phone Number</label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    required
                    pattern="[0-9]{10}"
                    maxLength="10"
                    id="enqPhoneNum1"
                  />
                  {/* <label>Batch Name</label>
                  <input
                    type="text"
                    placeholder="What Batch Do You Want To Choose?"
                    required
                    id="enqBatchName1"
                  /> */}
                  <label>Batch Type</label>
                  <select id="batchType">
                    <option value="Select" selected>
                      Select
                    </option>
                    <option value="Paper-I commerce">Paper-I commerce</option>
                    <option value="Paper-II commerce">Paper-II commerce</option>
                    <option value="Both">Both</option>
                  </select>
                  <label>Enquiry</label>
                  <input
                    type="text"
                    placeholder="Enquiry"
                    required
                    id="enquiry"
                  />
                  <button type="submit">Submit</button>
                </form>
              </div>
              <div className={styles["image-layer"]}>
                <div>
                  <video src={CoachingCenter} autoPlay loop />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles["section-6"]}>
          <Slider {...settings}>
            {/* <div className={styles["carousel-wrapper"]}> */}
            <div className={styles["carousel-content"]}>
              <img src={starRating} />
              <h3>Sanghmitra Verma</h3>
              <p>
                "Sir's teaching is amazing. The study material is appropriate
                and contains everything required, no extra material required to
                study. The app requires some improvement, but the teaching that
                is provided is excellent."
              </p>
            </div>
            <div className={styles["carousel-content"]}>
              <img src={starRating} />
              <h3>Doli Chauhan</h3>
              <p>
                "It will be more helpful when they provide "download" option as
                "Unacademy". Because connectivity is the basic problem most of
                the time."
              </p>
            </div>
            <div className={styles["carousel-content"]}>
              <img src={starRating} />
              <h3>Jai</h3>
              <p>
                "This is Only Best Platform for NET/JRF aspirants I have came
                across. 👉Most Important Content delivery by Mohit Sir!!!!
                👉Explanation in Lucid Language 👉Excellent Study Material.
                👉Audios for Revision 👉 QB for Practice including Py &
                Expected. 👉 Quick resolution of Queries. Thanks to entire team
                of M. Smart Academy. Way to JRF🎓🎓🎓"
              </p>
            </div>
            {/* </div> */}
            {/* <div className={styles["carousel-wrapper"]}> */}
            <div className={styles["carousel-content"]}>
              <img src={starRating} />
              <h3>Ayushi Goyal</h3>
              <p>
                "Its very good class... Mohit sir is very good teacher and his
                teaching is Soo good... Full of study material of paper2 and
                each explaination is soo good and clear..."
              </p>
            </div>
            <div className={styles["carousel-content"]}>
              <img src={starRating} />
              <h3>Yogesh Solanki</h3>
              <p>
                "If you are in commerce you must buy this course.... No matter
                you are doing NET or not... All the commerce concepts are taught
                in such a manner that you can get them easily...."
              </p>
            </div>
            <div className={styles["carousel-content"]}>
              <img src={starRating} />
              <h3>Srinivas Sathyanaraya</h3>
              <p>
                "Very very clarity in teaching but I want it in more of English
                language"
              </p>
            </div>
            <div className={styles["carousel-content"]}>
              <img src={starRating} />
              <h3>Barkha Saxena</h3>
              <p>
                "If anyone want to crack UGC NET from commerce subject this is
                only the way or platform to crack ....even not only NET .....JRF
                or also have a lot of topics which help for IAS PCS main or some
                other exams ...... You make your afforts as well as your Ideal
                after that your success is sure .... In Start..."
              </p>
            </div>
            <div className={styles["carousel-content"]}>
              <img src={starRating} />
              <h3>Kunjal Modi</h3>
              <p>
                "I am very much satisfied with the content what Mr. Mohit sir
                teaching for us. I respect the sir from core of my heart.
                Thanks"
              </p>
            </div>
            <div className={styles["carousel-content"]}>
              <img src={starRating} />
              <h3>Swati Jha</h3>
              <p>
                "Mr.Mohit sharma.. ..One of the best teacher...have with easy
                way of learning...i must say those who want to get JRF...
                definitely enhance own learning with him...thank you..."
              </p>
            </div>
            {/* </div> */}
          </Slider>
          {/* <div>
            <img src={Image1} />
            <img src={Image2} />
            <img src={Image3} />
            <img src={Image4} />
          </div>
          <div>
            <a
              href="https://play.google.com/store/apps/details?id=com.codeera.msmart"
              target="_blank"
            >
              <img src={GooglePlay} />{" "}
            </a>
            <h1>Download Now</h1>
          </div> */}
        </section>
      </div>
    </>
  );
};

export default Home;
