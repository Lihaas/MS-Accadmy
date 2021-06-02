import firebase from "./firebase";
export const otpSender = (e) => {
  e.preventDefault();
  const captcha = new firebase.auth.RecaptchaVerifier("recaptchabox");
  const phoneNumber = "+91" + (document.getElementById("phoneNumber").value);
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

export const otpVerification = (setUser) =>{
  document.getElementById("incorrectOTP").style.display = "none";
  let code = document.getElementById("otpBox").value;
  window.confirminationResult.confirm(code).then(()=>{
    setUser(true)
  }).catch(()=>{
    document.getElementById("incorrectOTP").style.display = "block";
  })
}