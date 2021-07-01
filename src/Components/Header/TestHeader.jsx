import { useEffect } from "react";
import Logo from "../../Assets/Image/logo.png";
import styles from "../../StyleSheets/Header/testHeader.module.css"
const TestHeader = () =>{
  var time = 3;
  var count = time*60*60;
  const countDown = () =>{
    count--;
    const second = count%60;
    const minute = count/60;
    const hour = minute/60;
    let texthour = Math.floor((hour));
    let textminute = Math.floor((minute%60));  
    let textsecond = Math.floor((second));
    textsecond=textsecond<10?"0"+textsecond:textsecond
    textminute=textminute<10?"0"+textminute:textminute
    texthour="0"+texthour
    let gap=(texthour+":"+textminute+":"+textsecond)
    document.getElementById("countdownTimer").value=gap
  }
  setInterval(countDown,1000);
    return(
        <div className={styles.navbar}>
        <div className={styles["nav-wrapper"]} >
          <div className={styles.brand}>
            <img src={Logo} />
            <span>M Smart Academy</span>
          </div>
          <div className={styles["count-down-area"]}>
          <input type="text" id="countdownTimer" value="03:00:00" className={styles["countDown"]} disabled/>
          </div>
          {/* // <p className={styles["timer"]} id="countdownTimer" value="">03:00:00</p> */}
          </div>
          </div>
    )
}
export default TestHeader;