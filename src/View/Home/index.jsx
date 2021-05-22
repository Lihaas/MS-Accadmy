import styles from "../../StyleSheets/Home/Home.module.css"
import Mohit from "../../Assets/Image/mohit.png"
import Boom from "../../Assets/Image/boom.png"
import DesktopHeroImage from "../../Assets/Image/desktop-hero-image.svg"
import Section5 from "./Section5"
import Section3 from "./Section3"

const Home = () => {

  return (
    <div className={styles.home}>
      <section className={styles["hero-section"]}>
          <div className={styles["hero-content"]}>
            <h1>M Smart Academy</h1>
            <p>Online</p>
            <h5>Education</h5>
            <h4>FOR UGC NET</h4>
            <button>Register Now</button>
          </div>
          <div className={styles["hero-image"]}>
            <img src={DesktopHeroImage} />
          </div>
      </section>
      <section className={styles["mobile-hero-section"]}>
        <div className={styles["mobile-hero-section-container"]}>
          <div className={styles["mobile-hero-top"]}>
            <h2>M Smart Academy <br /> With</h2>
            <div>
              <img src={Boom} />
            </div>
          </div>
          <div className={styles["mobile-hero-bottom"]}>
            <h3>MS Academy <br /> Online Education <br />For <br />UGC NET</h3>
            <div>
              <img src={Mohit} />
            </div>
          </div>
        </div>
      </section>
      {/* <Section3 />
      <Section5 /> */}
    </div>
  );
};

export default Home;
