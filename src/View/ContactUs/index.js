import styles from "../../StyleSheets/Home/Home.module.css";
import CoachingCenter from "../../Assets/Image/coaching_center.jpg";

const ContactUs = () => {
  return (
    <div className={styles.home}>
        {/* Add a class for below section */}
      <section className={styles["section-5"]} style={{paddingTop: "120px"}}> 
        <div className={styles["section-wrapper"]}>
          <div>
            <h1>Request Demo Class</h1>
            <span>We will arrange a callback for you</span>
          </div>
          <div>
            <div className={styles["contact-form"]}>
              <form>
                <label>Full Name</label>
                <input type="text" placeholder="Full Name" />
                <label>Phone Number</label>
                <input type="text" placeholder="Phone Number" />
                <label>Email</label>
                <input type="email" placeholder="Email" />
                <label>Batch Name</label>
                <input
                  type="text"
                  placeholder="What Batch Do You Want To Choose?"
                />
                <label>Batch Type</label>
                <input
                  type="text"
                  placeholder="Which Type Of Batch Do You Want?"
                />
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
    </div>
  );
};

export default ContactUs;
