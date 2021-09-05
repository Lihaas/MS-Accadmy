import firebase from "./firebase";
import Axios from "axios"
export const otpSender = (e) => {
  e.preventDefault();
  const captcha = new firebase.auth.RecaptchaVerifier("recaptchabox");
  const phoneNumber = "+91" + document.getElementById("phoneNumber").value;
  document.getElementById("recapMessage").style.display = "block";
  firebase
    .auth()
    .signInWithPhoneNumber(phoneNumber, captcha)
    .then((confirminationResult) => {
      document.getElementById("dialog-box").style.display = "flex";
      document.getElementById("recaptchabox").style.display = "none";
      window.confirminationResult = confirminationResult;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const SignUpVerification = (setUser) => {
    document.getElementById("blurScreen").style.display="block"
    document.getElementById("incorrectOTP").style.display = "none";
    document.getElementById("otpBox").style.borderColor = "#3164f4";
    let code = document.getElementById("otpBox").value;
    window.confirminationResult
      .confirm(code)
      .then((result) => {
        const data = {
          "user_name": document.getElementById("name").value,
          "phoneNum": document.getElementById("phoneNumber").value,
          "email": document.getElementById("email").value,
          "address": document.getElementById("address").value,
          "otpCode":"werwer@@rockon@$331"
        }
        Axios.post("https://msacadmy.herokuapp.com/v1/users",data)
        .then((item)=>{
          document.getElementById("blurScreen").style.display="none"
          localStorage.setItem("token",item.data.token)
          setUser(true)
        }).catch((error)=>{
          alert("error Occured try again")
          console.log(error)
        document.getElementById("blurScreen").style.display="none"
        })
        // setUser(true);
      })
      .catch(() => {
        document.getElementById("blurScreen").style.display="none"
        document.getElementById("incorrectOTP").style.display = "block";
        document.getElementById("otpBox").style.borderColor = "red";
        document.getElementById("otpBox").style.height = "2.5rem";
      });
};
export const LoginVerification = (setUser) => {
    document.getElementById("blurScreen").style.display="block"
    document.getElementById("incorrectOTP").style.display = "none";
    document.getElementById("otpBox").style.borderColor = "#3164f4";
    let code = document.getElementById("otpBox").value;
    window.confirminationResult
      .confirm(code)
      .then((result) => {
        Axios.post("https://msacadmy.herokuapp.com/v1/users",
        {"phoneNum":document.getElementById("phoneNumber").value,
        "otpCode":"werwer@@rockon@$331"
      })
        .then((item)=>{
          document.getElementById("blurScreen").style.display="none"
          localStorage.setItem("token",item.data.token)
          if(item.status===200 || item.status===201)
          {
            setUser(true)
          }
        }).catch((error)=>{
          alert("error Occured try again")
          console.log(error)
        document.getElementById("blurScreen").style.display="none"
        })
        // setUser(true);
      })
      .catch(() => {
        document.getElementById("blurScreen").style.display="none"
        document.getElementById("incorrectOTP").style.display = "block";
        document.getElementById("otpBox").style.borderColor = "red";
        document.getElementById("otpBox").style.height = "2.5rem";
      });
};
