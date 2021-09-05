import styles from "../../StyleSheets/SignUpDialog/signup.module.css";
import closeIcon from "../../Assets/Image/close_black_24dp.svg";
import { otpDialog, VerifyDialog } from "../../Firebase/SignUpDialog";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import Loader from "../../View/loading spinner/Loader";
const SignUpDialog = (props) => {
  const [login, setLogin] = useState(false);
  const verify = (e) => {
    e.preventDefault();
    VerifyDialog(setLogin);
  };
  return (
    <>
      <Loader />
      <div className={styles["blur-section"]} id="blurDialog">
        <div className={styles["dialog"]}>
          <div className={styles["close-dialog"]}>
            <div className={styles["box"]}>
              <p>Create your Account</p>
              <img
                src={closeIcon}
                className={styles["closeImage"]}
                onClick={() => {
                  document.getElementById("blurDialog").style.display = "none";
                  props.show(false);
                }}
              />
            </div>
          </div>
          <div className={styles["form"]}>
            <div className={styles["form-section"]}>
              <form
                onSubmit={(e) => {
                  otpDialog(e);
                }}
              >
                <input
                  type="text"
                  placeholder="Name"
                  id="dialogName"
                  required
                />
                <input
                  type="text"
                  placeholder="Mobile Number"
                  id="dialogNumber"
                  required
                  pattern="[0-9]{10}"
                  maxLength="10"
                />
                <input
                  type="email"
                  placeholder="Email"
                  id="dialogEmail"
                  required
                />
                <input
                  type="text"
                  placeholder="Address"
                  id="dialogAddress"
                  required
                />
                <p id="recap" style={{ color: "red", display: "none" }}>
                  Please fill recaptcha
                </p>
                <div id="recaptcha" className={styles["captchabox"]}></div>
                <p
                  style={{ color: "red", display: "none", margin: "0" }}
                  id="incorrect"
                >
                  Please enter correct OTP{" "}
                </p>
                <p id="loginMessage">
                  Already have an account?{" "}
                  <span
                    onClick={() => {
                      window.location = "/login";
                    }}
                  >
                    Login
                  </span>
                </p>
                <input
                  type="submit"
                  value="Create Account"
                  id="button"
                  className={styles["button"]}
                />
                {login ? (window.location = props.redirectLink) : null}
              </form>
              <form
                onSubmit={(e) => {
                  verify(e);
                }}
              >
                <input
                  type="text"
                  placeholder="Please enter otp recieved on your mobile"
                  id="otp"
                  required
                  maxLength="6"
                  pattern="[0-9]{6}"
                  style={{ display: "none" }}
                />
                <input
                  type="submit"
                  value="Confirm OTP"
                  id="otpbutton"
                  style={{ display: "none" }}
                  className={styles["button"]}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpDialog;
