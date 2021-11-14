import firebase from "./firebase";
import Axios from "axios";
import {logout} from "./Authentication"
export const otpDialog = (e) => {
  e.preventDefault();
  const captcha = new firebase.auth.RecaptchaVerifier("recaptcha");
  const phoneNumber = "+91" + document.getElementById("dialogNumber").value;
  document.getElementById("recap").style.display = "block";
  firebase
    .auth()
    .signInWithPhoneNumber(phoneNumber, captcha)
    .then((confirminationResult) => {
    document.getElementById("recap").style.display = "none";
      document.getElementById("recaptcha").style.display = "none";
      document.getElementById("otp").style.display = "block";
      document.getElementById("button").style.display = "none";
      document.getElementById("otpbutton").style.display = "block";
      window.confirminationResult = confirminationResult;
    })
    .catch((error) => {
      // console.log(error);
    });
};

export const VerifyDialog = (setLogin) => {
  document.getElementById("blurScreen").style.display="block"
    document.getElementById("incorrect").style.display = "none";
    document.getElementById("otp").style.borderColor = "#3164f4";
    let code = document.getElementById("otp").value;
    window.confirminationResult
      .confirm(code)
      .then((result) => {
        const data = {
          "user_name": document.getElementById("dialogName").value,
          "phoneNum": document.getElementById("dialogNumber").value,
          "email": document.getElementById("dialogEmail").value,
          "address": document.getElementById("dialogAddress").value,
          "otpCode":"werwer@@rockon@$331"
        }
        Axios.post(process.env.REACT_APP_API_URL+"/v1/users",data)
        .then((item)=>{
          document.getElementById("blurScreen").style.display="none"
          localStorage.setItem("token",item.data.token)
          setLogin(true)
          // window.location="/test-series"
        }).catch((error)=>{
          alert("error Occured try again")
          // console.log(error)
        document.getElementById("blurScreen").style.display="none"
        logout();
        })

      })
      .catch((error) => {
        // console.log(error)
        document.getElementById("incorrect").style.display = "block";
        document.getElementById("otp").style.borderColor = "red";
        document.getElementById("otp").style.height = "2.5rem";
        logout();
      });
};
