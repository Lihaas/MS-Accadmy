import React from "react";
import { useContext, useEffect, useState } from "react";
import Logo from "../../Assets/Image/logo.png";
import styles from "../../StyleSheets/Header/testHeader.module.css";
// import TestContext from "../../Store/testPageContext";
const TestHeader = (props) => {
  // const { start, setStart } = useContext(TestContext);
  useEffect(() => {    
    if (props.timer === true) {
      setInterval(countDown, 1000);
    }
  }, [props.timer]);
  let time = localStorage.getItem("testTime")
  var count = time * 60;

  let hour = Math.floor(time/60);
  let min = time%60
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  let gap = hour + ":" + min + ":" + "00";


  const countDown = () => {
    count--;
    const second = count % 60;
    const minute = count / 60;
    const hour = minute / 60;
    let texthour = Math.floor(hour);
    let textminute = Math.floor(minute % 60);
    let textsecond = Math.floor(second);
    textsecond = textsecond < 10 ? "0" + textsecond : textsecond;
    textminute = textminute < 10 ? "0" + textminute : textminute;
    texthour = "0" + texthour;
    let gap = texthour + ":" + textminute + ":" + textsecond;
    document.getElementById("countdownTimer").value = gap;
    if(count===0)
    {
      props.endtimer(true)
    }
  };
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles["nav-wrapper"]}>
          <div className={styles.brand}>
            <a href="/home">
              {" "}
              <img src={Logo} />{" "}
            </a>
            <span>M Smart Academy</span>
          </div>
          <div className={styles["count-down-area"]}>
                <input
                  type="text"
                  id="countdownTimer"
                  value={gap}
                  className={styles["countDown"]}
                  disabled
                />
                <a href="/test-series" style={{display: "none"}} className={styles["header-testSeries-btn"]} id="headerTestSeriesButton"><button>Test Series</button></a>
          </div>
          {/* // <p className={styles["timer"]} id="countdownTimer" value="">03:00:00</p> */}
        </div>
      </div>
    </>
  );
};
export default TestHeader;
