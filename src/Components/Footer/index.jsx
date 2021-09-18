import styles from "../../StyleSheets/Footer/Footer.module.css";
import Logo from "../../Assets/Image/logo.png"
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles["brand"]}>
        <img src={Logo} />
        <span>2021 @MS Academy</span>
        <span>All Copyrights Reserved</span>
      </div>
      <div className={styles["footer-menu-wrapper"]}>
        <div className={styles["footer-menu"]}>
          <NavLink to={{pathname:"/"}}>Home</NavLink>
          <a href="/courses/paper1">Courses</a>
          <NavLink to={{pathname:"/about-us"}}>About Us</NavLink>
          <NavLink to={{pathname:"/contact-us"}}>Contact Us</NavLink>
          <NavLink to={{pathname:"/notes/testseries"}}>Test Series</NavLink>
        </div>
        <div className={styles["footer-menu"]}>
          <a href="https://www.facebook.com/MOHITSHARMACLASSES" target="_blank">Facebook</a>
          {/* <a href="https://www.instagram.com/mohit_sharma_classes/" target="_blank">Instagram</a> */}
          <a href="https://www.youtube.com/c/MOHITSHARMACLASSES" target="_blank">Youtube</a>
        </div>
        <div className={styles["footer-menu"]}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms {"&"} Conditions</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
