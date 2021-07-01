import styles from "../../StyleSheets/Header/MobileHeader.module.css";
import HamMenuIcon from "../../Assets/Icons/menu.svg";
import Logo from "../../Assets/Image/logo.png";
import { useEffect, useRef, useState } from "react";
import { navDrawerHandler } from "./Header.ViewModel";
import { NavLink } from "react-router-dom";
import dropdown from "../../Assets/Image/dropdownicon.png"
import {noteHideShow,courseHideShow} from "./Header.ViewModel"
import { isUserLoggedIn, logout } from "../../Firebase/Authentication";

const MobileHeader = () => {
  const drawerRef = useRef(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  useEffect(()=>{ 
    checkLogin();
    userLogout();
  },[])
  const checkLogin = () => {
    isUserLoggedIn(setUserLoggedIn);
  };
  const userLogout = () => {
    logout(setUserLoggedIn)
  }

  const drawerHandler = () =>
    navDrawerHandler(isDrawerOpen, setIsDrawerOpen, drawerRef);
  return (
    <div className={styles.navbar}>
      <div className={styles["nav-wrapper"]}>
        <div className={styles.brand}>
          <img src={Logo} />
          <span>M Smart Academy</span>
        </div>
        <div className={styles["ham-menu-icon"]} onClick={drawerHandler}>
          <img src={HamMenuIcon} width="35" />
        </div>
      </div>

      <div className={styles["nav-drawer"]} ref={drawerRef}>
      <NavLink to={{ pathname: "/home" }} onClick={drawerHandler}>Home</NavLink>
        <h1 onClick={courseHideShow}>Courses<img src={dropdown} /></ h1>
        <div className={styles["hide-show"]} id="course-drop-down">
        <NavLink to={{ pathname: "/courses/paper1" }} onClick={drawerHandler}>Paper 1</NavLink>
        <NavLink to={{ pathname: "/courses/paper2" }} onClick={drawerHandler}>Paper 2</NavLink>
        </div>
        <h1 onClick={noteHideShow}>Notes <img src={dropdown} /></ h1>
        <div className={styles["hide-show"]} id="notes-drop-down">
        <NavLink to={{ pathname: "/notes/paper1" }} onClick={drawerHandler}>Paper 1</NavLink>
        <NavLink to={{ pathname: "/notes/paper2" }} onClick={drawerHandler}>Paper 2</NavLink>
        <NavLink to={{ pathname: "/notes/testseries" }} onClick={drawerHandler}>Test Series</NavLink>
        </div>
        <NavLink to={{ pathname: "/contact-us" }} onClick={drawerHandler}>Contact Us</NavLink>
        <NavLink to={{ pathname: "/about-us" }} onClick={drawerHandler}>About Us</NavLink>
        {
          !userLoggedIn?
          <>
          <NavLink to={{ pathname: "/login" }} onClick={drawerHandler}>Login</NavLink>
          <NavLink to={{ pathname: "/sign-up" }} className={styles["sign-up"]} onClick={drawerHandler}>
            SignUp
          </NavLink>
          </>
          :
          <>
            <NavLink to={{pathname: "/dashboard"}} onClick={drawerHandler}>Profile</NavLink>
            <NavLink to={{pathname: "/test-series"}} onClick={drawerHandler}>Test</NavLink>
            <a href="/" onClick={()=>{userLogout()}} onClick={drawerHandler}>Logout</a>
          </>
        }
      </div>
    </div>
  );
};

export default MobileHeader;
