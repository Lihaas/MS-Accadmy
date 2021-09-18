import React, { useEffect, useRef, useState } from "react";
import styles from "../../StyleSheets/Header/Header.module.css";
import Logo from "../../Assets/Image/logo.png";
import MaleUser from "../../Assets/Image/male-user.png";
import { changeBackground } from "./Header.ViewModel";
import { NavLink } from "react-router-dom";
import { isUserLoggedIn , logout } from "../../Firebase/Authentication";

const DesktopHeader = () => {
  const headerRef = useRef(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    changeBackground(headerRef);
    checkLogin();
  }, []);

  const checkLogin = () => {
    isUserLoggedIn(setUserLoggedIn);
  };
  const userLogout = () => {
    logout(setUserLoggedIn);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles["nav-wrapper"]} ref={headerRef}>
        <div className={styles.brand}>
          <a href="/home">
            <img src={Logo} />
          </a>
          <span>M Smart Academy</span>
        </div>

        <div className={styles["nav-center-items"]}>
          <NavLink to={{ pathname: "/home" }}>Home</NavLink>
          <div className={styles["dropdown"]}>
            <span className={styles["dropbtn"]}>Courses</span>
            <div className={styles["dropdown-content"]}>
              <NavLink to={{ pathname: "/courses/paper1" }}>Paper 1</NavLink>
              <NavLink to={{ pathname: "/courses/paper2" }}>Paper 2</NavLink>
              <NavLink to={{ pathname: "/test-series" }}>Test Series</NavLink>
            </div>
          </div>
          <div className={styles["dropdown"]}>
            <span className={styles["dropbtn"]}>Notes</span>
            <div className={styles["dropdown-content"]}>
              <NavLink to={{ pathname: "/notes/paper1" }}>Paper 1</NavLink>
              <NavLink to={{ pathname: "/notes/paper2" }}>Paper 2</NavLink>
            </div>
          </div>
          <NavLink to={{ pathname: "/test-series" }}>Test Series</NavLink>
          <NavLink to={{ pathname: "/contact-us" }}>ContactUs</NavLink>
          <NavLink to={{ pathname: "/about-us" }}>About Us</NavLink>
        </div>
        <div className={styles["nav-right-items"]}>
          {!userLoggedIn ? (
            <>
              <NavLink to={{ pathname: "/login" }}>Login</NavLink>
              <NavLink
                to={{ pathname: "/sign-up" }}
                className={styles["sign-up"]}
              >
                SignUp
              </NavLink>
            </>
          ) : (
            <>
              {/* create css class */}
              <div className={styles["dropdown"]}>
                <span className={styles["dropbtn"]}>
                  <img src={MaleUser} width="50" />
                </span>
                <div className={styles["profile-dropdown-content"]}>
                  <NavLink to={{ pathname: "/dashboard" }}>Profile</NavLink>
                  <NavLink to={{ pathname: "/test-series" }}>Test</NavLink>
                  <a href="/" onClick={userLogout}>
                    Logout
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
