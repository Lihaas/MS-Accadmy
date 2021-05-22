import styles from "../../StyleSheets/Footer/Footer.module.css";
import Logo from "../../Assets/Image/logo.png"

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
          <a href="#">Home</a>
          <a href="#">Courses</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Test Series</a>
        </div>
        <div className={styles["footer-menu"]}>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Linkedin</a>
          <a href="#">Youtube</a>
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
