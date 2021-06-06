import styles from "../../StyleSheets/Courses/courses.module.css";
import signUpImage from "../../Assets/Image/study-at-home-2527770-2114673.png";
import providingImage1 from "../../Assets/Image/istockphoto-1209904658-612x612.jpg";
import providingImage2 from "../../Assets/Image/wide-test-series.png";
import providingImage3 from "../../Assets/Image/online-study-2710520-2261196.png";
import { useEffect, useState } from "react";
import { Paper2YoutubeData } from "../../Firebase/CoursesData";
import { bookData } from "../../Firebase/bookData";
import closeicon from "../../Assets/Image/closeIcon.png";

const Paper2 = () => {
  const [youtubeData, setYoutubeData] = useState([]);
  const [bookdata, setbookdata] = useState([]);


  useEffect(() => {
    Paper2YoutubeData(setYoutubeData);
    bookData(setbookdata);
    window.scrollTo(0,0)

  }, []);

  const seeMoreDialog = () => {
    if (
      document.getElementById("see-more").style.display === "none" ||
      document.getElementById("see-more").style.display === ""
    ) {
      document.getElementById("see-more").style.display = "block";
    } else {
      document.getElementById("see-more").style.display = "none";
    }
  };
  const closeDialog = () => {
    if (
      document.getElementById("see-more").style.display === "none" ||
      document.getElementById("see-more").style.display === ""
    ) {
      document.getElementById("see-more").style.display = "block";
    } else {
      document.getElementById("see-more").style.display = "none";
    }
  };

  return (
    <div className={styles.examDetail}>
      <br></br>
      <section className={styles["paper-detail"]}>
        <div className={styles["section-wrapper"]}>
          <div className={styles["image-section"]}>
            <img src={signUpImage} />
          </div>
          <div className={styles["paper-detail"]}>
            <h1>Paper 2</h1>
            <p>
              We exclusively deals in UGC net Popert & Paper 2 Commerce<br></br>
              We provide the best content material for stydu & in depth<br></br>
              analysis of topic that are being converted in the UGC/NTA NET
              examination.<br></br> Aprat from that institute gives the best
              results in recent UGC NET examination.<br></br> Join Our clases
              Today to crack UGC NTA NET Exam
            </p>
          </div>
        </div>
      </section>
      <section className={styles["providing"]}>
        <h1>Why We are Providing?</h1>
        <div className={styles["section-wrapper"]}>
          <div className={styles["image-section"]}>
            <img src={providingImage1} />
            <span>
              200+ Full HD<br></br>Video Lectures
            </span>
          </div>
          <div className={styles["image-section"]}>
            <img src={providingImage2} />
            <span>Mock Test + Test Series</span>
          </div>
          <div className={styles["image-section"]}>
            <img src={providingImage3} />
            <span>
              A-Z India's Best<br></br> Study Materials
            </span>
          </div>
        </div>
        <div className={styles["button"]}>
        <button
            onClick={() => {
              seeMoreDialog();
            }}
          >
            See More
          </button>
          <div className={styles["see-more-section"]} id="see-more">
            <div className={styles["book-heading"]}>
              <div className={styles["heading-area"]}>
            <h1>
              Books
            </h1>
              </div>
            <div className={styles["close-image"]}>
              <img
                src={closeicon}
                onClick={() => {
                  closeDialog();
                }}
              />
            </div>
            </div>
            <div className={styles["book-card-section"]}>
              {bookdata.map((item, index) => {
                let link="https://api.whatsapp.com/send?phone=919996177761&text=" + item.name
                return (
                  <div className={styles["book-card"]} key={index}>
                      <a href={link} target="_blank">
                      <div className={styles["book-image"]}>
                        <img src={item.img} />
                      </div>
                      <div className={styles["book-text"]}>
                        <p>{item.name}</p>
                      </div>
                  </a>
                    </div>
                );
              })}
            </div>
        </div>
        </div>
      </section>
      <section className={styles["demo-class"]}>
        <h1>Our Demo Class</h1>
        <div className={styles["section-wrapper"]}>
          {youtubeData.map((video, index) => {
            return (
              <div className={styles["video-section"]} key={index}>
                <iframe
                  src={video.link}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen={true}
                ></iframe>
                <span>{video.title}</span>
              </div>
            );
          })}
        </div>
        <div className={styles["button"]}>
          <a
            href="https://www.youtube.com/c/MOHITSHARMACLASSES"
            target="_blank"
          >
            <button>See More</button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Paper2;
