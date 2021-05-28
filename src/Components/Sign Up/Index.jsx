import styles from '../../StyleSheets/Sign Up/signup.module.css'
import signUpImage from '../../Assets/Image/study-at-home-2527770-2114673.png'

const SignUp = ()=>{
    return(
        <div>
            <br></br>
            <section className={styles["sign-up"]}>
          <div className={styles["section-wrapper"]}
          >
            <div className={styles["image-section"]}>
            <img src={signUpImage} />
            </div>
            <div className={styles["sign-up-section"]}>
              <h1>Join Us</h1>
              <p>
                Explore the future with us <br />
                Feel free to get in touch
                Feel free to get in touch
              </p>
              <div className={styles["sign-up-form"]}>
              <form>
                  <label>Full Name</label>
                  <input type="text" />
                  <label>Phone Number</label>
                  <input type="text" />
                  <label>Email</label>
                  <input type="text" />
                  <button type="submit">Join</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        </div>
    )
}

export default SignUp