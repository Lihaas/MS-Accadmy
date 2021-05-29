import React, { useEffect, useRef } from "react";
import styles from "../../StyleSheets/Header/Header.module.css";
import Logo from "../../Assets/Image/logo.png";
import {changeBackground} from "./Header.ViewModel"
import {NavLink} from "react-router-dom"

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
          <NavLink to={{pathname:"/home"}}>Home</NavLink>
          <NavLink to={{pathname:"/courses"}}>Courses</NavLink>
          <NavLink to={{pathname:"/notes"}}>Notes</NavLink>
          <NavLink to={{pathname:"/contact-us"}}>ContactUs</NavLink>
          <NavLink to={{pathname:"/about-us"}}>About Us</NavLink>
        </div>
        <div className={styles["nav-right-items"]}>
          <NavLink to={{pathname: "/sign-up"}}>Login</NavLink>
          <NavLink to={{pathname:"/sign-up"}} className={styles["sign-up"]}>
            SignUp
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
