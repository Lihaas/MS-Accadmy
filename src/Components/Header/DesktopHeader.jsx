import React, { useEffect, useRef } from "react";
import styles from "../../StyleSheets/Header/Header.module.css";
import Logo from "../../Assets/Image/logo.png";
import {changeBackground} from "./Header.ViewModel"

const DesktopHeader = () => {

  const headerRef = useRef(null)

  useEffect(() => {
    changeBackground(headerRef)
  }, []);

  return (
    <div className={styles.navbar}>
      <div className={styles["nav-wrapper"]} ref={headerRef}>
        <div className={styles.brand}>
          <img src={Logo} />
          <span>M Smart Academy</span>
        </div>

        <div className={styles["nav-center-items"]}>
          <a href="#">Home</a>
          <a href="#">Courses</a>
          <a href="#">ContactUs</a>
          <a href="#">Results</a>
          <a href="#">App</a>
        </div>
        <div className={styles["nav-right-items"]}>
          <a href="#">Login</a>
          <a href="/sign-up" className={styles["sign-up"]}>
            SignUp
          </a>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
