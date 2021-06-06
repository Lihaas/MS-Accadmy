import styles from "../../StyleSheets/Home/Home.module.css";
import CoachingCenter from "../../Assets/Image/coaching_center.jpg";
import whatsapp from "../../Assets/Image/chatonwhatsapp.png"
import {  useEffect} from "react"
const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
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
                <input type="text" placeholder="Full Name" required/>
                <label>Phone Number</label>
                <input type="text" placeholder="Phone Number" required pattern="[0-9]{10}"/>
                <label>Email</label>
                <input type="email" placeholder="Email" required/>
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
              <div className={styles["whatsapp-section"]}>
              <h1>OR</h1>
              <a href="https://wa.me/919996177761" target="_blank"><img src={whatsapp} className={styles["whatsapp-png"]}/></a>
              </div>
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
