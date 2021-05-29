import styles from "../../StyleSheets/Header/MobileHeader.module.css";
import HamMenuIcon from "../../Assets/Icons/menu.svg";
import Logo from "../../Assets/Image/logo.png";
import { useRef, useState } from "react";
import { navDrawerHandler } from "./Header.ViewModel";
import { NavLink } from "react-router-dom";

const MobileHeader = () => {
  const drawerRef = useRef(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
        <NavLink to={{ pathname: "/home" }}>Home</NavLink>
        <NavLink to={{ pathname: "/courses" }}>Courses</NavLink>
        <NavLink to={{ pathname: "/notes" }}>Notes</NavLink>
        <NavLink to={{ pathname: "/contact-us" }}>ContactUs</NavLink>
        <NavLink to={{ pathname: "/about-us" }}>About Us</NavLink>
        <NavLink to={{ pathname: "/sign-up" }}>Login</NavLink>
        <NavLink to={{ pathname: "/sign-up" }} className={styles["sign-up"]}>
          SignUp
        </NavLink>
      </div>
    </div>
  );
};

export default MobileHeader;
