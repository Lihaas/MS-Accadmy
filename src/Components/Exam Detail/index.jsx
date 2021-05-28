import styles from "../../StyleSheets/Exam Detail/examdetail.module.css";
import signUpImage from "../../Assets/Image/study-at-home-2527770-2114673.png";
import providingImage1 from "../../Assets/Image/istockphoto-1209904658-612x612.jpg";
import providingImage2 from "../../Assets/Image/wide-test-series.png";
import providingImage3 from "../../Assets/Image/online-study-2710520-2261196.png";

const examDetail = () => {
  return (
    <div className={styles.examDetail}>
      <br></br>
      <section className={styles["paper-detail"]}>
        <div className={styles["section-wrapper"]}>
          <div className={styles["image-section"]}>
            <img src={signUpImage} />
          </div>
          <div className={styles["paper-detail"]}>
            <h1>Paper 1</h1>
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
            <span>200+ Full HD<br></br>Video Lectures</span>
          </div>
          <div className={styles["image-section"]}>
            <img src={providingImage2} />
            <span>Mock Test + Test Series</span>
          </div>
          <div className={styles["image-section"]}>
            <img src={providingImage3} />
            <span>A-Z India's Best<br></br> Study Materials</span>
          </div>
        </div>
        <div className={styles["button"]}>
          <button>See More</button>
        </div>
      </section>
      <section className={styles["demo-class"]}>
        <h1>Our Demo Class</h1>
        <div className={styles["section-wrapper"]}>
          <div className={styles["video-section"]}>
          <iframe src="https://www.youtube.com/embed/GfAG61wRjP8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
            <span>ABCD</span>
          </div>
          <div className={styles["video-section"]}>
            <iframe src="https://www.youtube.com/embed/GfAG61wRjP8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
            <span>ABCD</span>
          </div>
          <div className={styles["video-section"]}>
            <iframe src="https://www.youtube.com/embed/GfAG61wRjP8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
            <span>ABCD</span>
          </div>
          <div className={styles["video-section"]}>
            <iframe src="https://www.youtube.com/embed/GfAG61wRjP8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
            <span>ABCD</span>
          </div>
        </div>
        <div className={styles["button"]}>
          <button>See More</button>
        </div>
      </section>
    </div>
  );
};

export default examDetail;
