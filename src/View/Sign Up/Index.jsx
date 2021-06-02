import React, { useEffect, useState } from "react";
import styles from "../../StyleSheets/Sign Up/signup.module.css"
import signUpImage from "../../Assets/Image/study-at-home-2527770-2114673.png";
import { otpSender, otpVerification } from "../../Firebase/SignWithNumber";
import { Redirect } from "react-router-dom";

const SignUp = () => {
  const [user,setUser] = useState(false);
  return (
    <div>
      <br></br>
      <section className={styles["sign-up"]}>
        <div className={styles["section-wrapper"]}>
          <div className={styles["image-section"]}>
            <img src={signUpImage} />
          </div>
          <div className={styles["sign-up-section"]}>
            <h1>Join Us</h1>
            <p>
              Explore the future with us <br />
              Feel free to get in touch Feel free to get in touch
            </p>
            <div className={styles["sign-up-form"]}>
              <form onSubmit={otpSender}>
              <label>Name</label>
                <input
                  type="text"
                  placeholder="Full Name (e.g, Ashish Garf)"
                  required
                />
                <label>Phone Number</label>
                <input
                  type="text"
                  id="phoneNumber"
                  placeholder="Mobile Number (e.g, 8989112233)"
                  required
                  pattern="[0-9]{10}"
                />
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email (e.g, ashish@gmail.com)"
                  required
                />
                  <label>Address</label>
                  <textarea placeholder="Full Address (e.g, xyz street,xyz,pincode-xxxxxx)" required/>
                  <label>Batch</label>
                  <select>
                  <option selected="true" disabled="disabled">Select</option>
                  <option>Batch-A</option>
                  <option>Batch-B</option>
                  </select>
                  <p id="recapMessage" style={{color: "red",display: "none"}}>Please fill recaptcha</p>
                <div id="recaptchabox" className={styles["captchabox"]}></div>
                <button type="submit">Join Us</button>
              </form>
            </div>
            <dialog id="dialog-box" className={styles["dialog"]}>
              <div className={styles["otp-section"]}>
                <label>Enter OTP</label>
                <input
                  type="password"
                  placeholder="enter otp"
                  id="otpBox"
                ></input>
                <p style={{color:"red",display: "none",margin:"0"}} id="incorrectOTP">Please enter correct OTP </p>
                <button
                  type="button"
                  onClick={() => {
                    otpVerification(setUser);
                  }}
                >
                  login
                </button>
                {
                  user?
                  <Redirect to="/dashboard" />
                  :null
                }
              </div>
            </dialog>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
