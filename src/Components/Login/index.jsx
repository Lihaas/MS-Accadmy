import React, { useState } from "react";
import styles from '../../StyleSheets/Login/login.module.css'
import signUpImage from '../../Assets/Image/study-at-home-2527770-2114673.png'
import firebase from "../../firebase"
import  { Redirect } from 'react-router-dom'

const Login = ()=>{
  const [login,setLogin] = useState(false);
  const [incorrect,setIncorrect] = useState(false);
  const [recapMessage,setRecapMessage] = useState(false);
  const generateOtp=()=>{
    if(document.getElementById("phoneNumber").value.length===10){
      const captcha = new firebase.auth.RecaptchaVerifier("recaptchabox");
      const phoneNumber="+91" + document.getElementById("phoneNumber").value;
      document.getElementById("phoneNumber").disabled="true";
      setRecapMessage(true);
      firebase.auth().signInWithPhoneNumber(phoneNumber, captcha)
      .then((confirmationResult) => {
        document.getElementById("dialog-box").style.display = "flex";
        document.getElementById("recaptchabox").style.display = "none";
      window.confirmationResult = confirmationResult;
  
    }).catch(() => {
    });
    }else{
      alert("Please enter correct number")
    }
  }
  const submitLogin=()=>{
    setIncorrect(false);
    let code = document.getElementById("otpBox").value;
    window.confirmationResult.confirm(code).then((result)=>{
      console.log(result);
        setLogin(true);
    }).catch(()=>{
      setIncorrect(true);
    })
  }
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
              <h1>Login</h1>
              <p>
                Explore the future with us <br />
                Feel free to get in touch
                Feel free to get in touch
              </p>
              <div className={styles["sign-up-form"]}>
              <form>
                  <label>Phone Number</label>
                  <input type="text" id="phoneNumber" placeholder="Mobile Number (e.g, 8989112233)"/>
                  {
                    recapMessage?
                    <p style={{color:"red"}}>Please fill recaptcha</p>
                    :
                    null
                  }
                  <div id="recaptchabox" className={styles["captchabox"]}>
                  </div>
                  <button type="button" onClick={()=>{generateOtp()}}>Login</button>
                </form>
              </div>
          <dialog id="dialog-box" className={styles["dialog"]}>
            <div className={styles["otp-section"]}>
            <label>Enter OTP</label>
          <input type="password" placeholder="enter otp" id="otpBox"></input>
          {incorrect? <h4>Please enter correct OTP </h4>:null}
          <button type="button" onClick={()=>{submitLogin()}}>login</button>
          {login ? 
          <h1><Redirect to='/dashboard'  /></h1> : null}
            </div>          
          </dialog>
            </div>
          </div>
        </section>
        </div>
    )
   
}

export default Login;