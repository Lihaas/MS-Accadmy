import firebase from "./firebase";
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

export const otpVerification = (setUser) => {
  if(document.getElementById("otpBox").value.length!==6)
  {
    alert("Please enter 6-digit otp sent on your mobile");
  }else{
    document.getElementById("incorrectOTP").style.display = "none";
    document.getElementById("otpBox").style.borderColor = "#3164f4";
    let code = document.getElementById("otpBox").value;
    window.confirminationResult
      .confirm(code)
      .then((result) => {
        setUser(true);
      })
      .catch(() => {
        document.getElementById("incorrectOTP").style.display = "block";
        document.getElementById("otpBox").style.borderColor = "red";
        document.getElementById("otpBox").style.height = "2.5rem";
      });
  }
};
