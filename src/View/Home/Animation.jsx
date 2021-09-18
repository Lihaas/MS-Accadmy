import { useEffect } from "react";
import styles from "../../StyleSheets/Home/animate.module.css"
import VisibilitySensor from "react-visibility-sensor"
import GooglePlay from "../../Assets/Image/google-play (1).png";
import Youtube from "../../Assets/Image/youtube (1).png";
import teacher from "../../Assets/Image/teacher.png"
import state from "../../Assets/Image/states.png"

const Animation = () =>{
    function onChange(isVisible) {
        if(isVisible===true)
        {
            load()
        }
      }
    function animate(obj, initVal, lastVal, duration) {

        let startTime = null;
    
        //get the current timestamp and assign it to the currentTime variable
        let currentTime = Date.now();
    
        //pass the current timestamp to the step function
        const step = (currentTime ) => {
    
            //if the start time is null, assign the current time to startTime
            if (!startTime) {
                  startTime = currentTime ;
            }
    
            //calculate the value to be used in calculating the number to be displayed
            const progress = Math.min((currentTime  - startTime) / duration, 1);
    
            //calculate what to be displayed using the value gotten above
            obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);
    
            //checking to make sure the counter does not exceed the last value (lastVal)
            if (progress < 1) {
                  window.requestAnimationFrame(step);
            }
            else{
                  window.cancelAnimationFrame(window.requestAnimationFrame(step));
            }
        };
    
        //start animating
        window.requestAnimationFrame(step);
    }
    const load = () => {
        animate(document.getElementById('0101'), 0, 100, 1000);
        animate(document.getElementById('0102'), 0, 10, 1000);
        animate(document.getElementById('0103'), 0, 29,1000);
        animate(document.getElementById('0104'), 0, 1,1000);
    }

    return(
        <>
        <VisibilitySensor onChange={onChange}>
       <div className={styles["counter-section"]}>
        <div className={styles["counter-content"]}>
        <fieldset>
            <legend><img src={Youtube} /></legend>
            <h1><span id="0101">100</span>k</h1>
        </fieldset>
        <fieldset>
            <legend><img src={GooglePlay} /></legend>
            <h1><span id="0102">95</span>k</h1>
        </fieldset>
        <fieldset>
            <legend><img src={state} /></legend>
            <h1><span id="0103">29</span>&nbsp;States</h1>
        </fieldset>
        <fieldset>
            <legend><img src={teacher} /></legend>
            <h1><span id="0104">1</span>&nbsp;Teacher</h1>
        </fieldset>
        </div>
       </div>
      </VisibilitySensor>
        </>
    )
}

export default Animation;;