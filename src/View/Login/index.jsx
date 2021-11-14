import React, {  useEffect, useState } from "react";
import styles from "../../StyleSheets/Login/login.module.css";
import signUpImage from "../../Assets/Image/study-at-home-2527770-2114673.png";
import { otpSender, LoginVerification } from "../../Firebase/SignWithNumber";
import { Redirect } from "react-router-dom";
import dp from "../../Assets/Image/male-user.png";
import Loader from "../loading spinner/Loader";
const Login = () => {
  const [user,setUser] = useState(false);
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  const Verification = (event)=>{
      event.preventDefault();
      LoginVerification(setUser);
  }
  return (
    <div>
      <br></br>
      <section className={styles["sign-up"]}>
        <div className={styles["section-wrapper"]}>
          <div className={styles["image-section"]}>
            <img src={signUpImage} />
          </div>
          <div className={styles["sign-up-section"]}>
            <h1>Login</h1>
            <p>
              Explore the future with us <br />
              Feel free to get in touch Feel free to get in touch
            </p>
            <div className={styles["sign-up-form"]}>
              <form onSubmit={otpSender}>
                <label>Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  placeholder="Mobile Number (e.g, 8989112233)"
                  required
                  pattern="[0-9]{10}"
                  maxLength="10"
                />
                  <p id="recapMessage" style={{color: "red",display: "none"}}>Please fill recaptcha</p>
                <div id="recaptchabox" className={styles["captchabox"]}></div>
                <button type="submit">Login</button>
              </form>
            </div>
            <dialog id="dialog-box" className={styles["dialog"]}>
              <div className={styles["otp-section"]}>
                <h1>Verification</h1>
                <img src={dp} />
                <form onSubmit={Verification}>
                <label>Enter OTP</label>
                <input
                  type="password"
                  placeholder="enter otp"
                  id="otpBox"
                  maxLength="6"
                  required
                  pattern="[0-9]{6}"
                ></input>
                <p style={{color:"red",display: "none",margin:"0"}} id="incorrectOTP">Please enter correct OTP </p>
                <button
                  type="submit"
                >
                  login
                </button>
                {
                  user?
                  <Redirect to="/dashboard" />
                  :null
                }
                </form>
              </div>
            </dialog>
          </div>
        </div>
      </section>
          <Loader /> 
    </div>
  );
};

export default Login;
