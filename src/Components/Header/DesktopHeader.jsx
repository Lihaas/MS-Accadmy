import React, { useEffect, useRef, useState } from "react";
import styles from "../../StyleSheets/Header/Header.module.css";
import Logo from "../../Assets/Image/logo.png";
import MaleUser from "../../Assets/Image/male-user.png"
import { changeBackground, coursesDropdownHandler, notesDropdownHandler, profileDropdownHandler } from "./Header.ViewModel";
import { NavLink } from "react-router-dom";
import { isUserLoggedIn, logout } from "../../Firebase/Authentication";

const DesktopHeader = () => {
  const headerRef = useRef(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const checkLogin = () => {
    isUserLoggedIn(setUserLoggedIn);
  };

  useEffect(() => {
    changeBackground(headerRef);
    checkLogin();
  }, []);

  const userLogout = () => {
    logout(setUserLoggedIn)
  }

  return (
    <div className={styles.navbar}>
      <div className={styles["nav-wrapper"]} ref={headerRef}>
        <div className={styles.brand}>
          <img src={Logo} />
          <span>M Smart Academy</span>
        </div>

        <div className={styles["nav-center-items"]}>
          <NavLink to={{ pathname: "/home" }}>Home</NavLink>
          <div style={{position: "relative", cursor: "pointer"}}><span onClick={coursesDropdownHandler}>Courses</span>
          <div className={styles["courses-dropdown"]} id="courses-dropdown">
            <NavLink to={{pathname: "/courses/paper1"}} className={styles["courses-dropdown-item"]} onClick={coursesDropdownHandler}>Paper 1</NavLink>
            <NavLink to={{pathname: "/courses/paper2"}} className={styles["courses-dropdown-item"]} onClick={coursesDropdownHandler}>Paper 2</NavLink>
          </div>
          </div>
          <div style={{position: "relative", cursor: "pointer"}}><span onClick={notesDropdownHandler}>Notes</span>
          <div className={styles["courses-dropdown"]} id="notes-dropdown">
            <NavLink to={{pathname: "/notes/paper1"}} className={styles["courses-dropdown-item"]} onClick={notesDropdownHandler}>Paper 1</NavLink>
            <NavLink to={{pathname: "/notes/paper2"}} className={styles["courses-dropdown-item"]} onClick={notesDropdownHandler}>Paper 2</NavLink>
          </div></div>
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
              <div style={{ position: "relative" }}>
                <img src={MaleUser} width="50" id="profile-dropdown-img" onClick={profileDropdownHandler} />
                <div className={styles["profile-dropdown"]} id="profile-dropdown">
                  <NavLink to={{pathname: "/dashboard"}} className={styles["profile-dropdown-item"]} activeClassName={styles["active-profile-dropdown-item"]}>Profile</NavLink>
                  <NavLink to={{pathname: "/test"}} className={styles["profile-dropdown-item"]} activeClassName={styles["active-profile-dropdown-item"]}>Test</NavLink>
                  <a href="#" onClick={userLogout} className={styles["profile-dropdown-item"]}>Logout</a>
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
