import styles from "../../StyleSheets/Header/MobileHeader.module.css";
import HamMenuIcon from "../../Assets/Icons/menu.svg";
import Logo from "../../Assets/Image/logo.png"
import { useRef, useState } from "react";
import { navDrawerHandler } from "./Header.ViewModel";

const MobileHeader = () => {
  const drawerRef = useRef(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const drawerHandler = () => navDrawerHandler(isDrawerOpen, setIsDrawerOpen, drawerRef)

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
        <a href="#">Home</a>
        <a href="#">Courses</a>
        <a href="#">ContactUs</a>
        <a href="#">Results</a>
        <a href="#">App</a>
        <a href="#">Login</a>
        <a href="/sign-up">SignUp</a>
        <a href="#" className={styles["sign-up"]}>
          SignUp
        </a>
      </div>
    </div>
  );
};

export default MobileHeader;
