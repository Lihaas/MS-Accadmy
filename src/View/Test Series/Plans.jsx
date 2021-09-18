import styles from "../../StyleSheets/Test Series/plans.module.css";
import DownloadBanner from "../../Components/Download Banner/Index"
import { radio , coupon} from "./Func"
import { useEffect, useState } from "react";
const Plans = () => {
  const [price, setPrice] = useState(false);
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  const couponHandler = () =>{
    coupon(price,setPrice)
  }
  return (
    <>
      <div className={styles.plans}>
        <div className={styles["banner"]}>
          <h1>Pay Once, Attempt Unlimited</h1>
          <h2>Choose a plan and proceed</h2>
        </div>
        <div className={styles["payment-section"]}>
          <div className={styles["payment-card"]} id="0">
            <input
              type="radio"
              name="payment"
              value="plan-1"
              onClick={(e) => {
                radio(e);
              }}
            />
            <h1>Selection</h1>
            <p>All Exams Untill Selection</p>
            <h1 className={styles["price"]} id="price">
              &#8377;299/-
            </h1>
            {price ? (
              <h1 className={styles["price"]} id="price">
                &#8377;199/-
              </h1>
            ) : null}
            <div id="plan-1" style={{ display: "none" }}>
              <div className={styles["coupon-area"]}>
                <input type="text" placeholder="coupon code" id="couponBox" />
                <button>Apply</button>
              </div>
              <div className={styles["coupon-code"]}>
                <input
                  type="radio"
                  id="couponCode"
                  onClick={() => {
                    couponHandler();
                  }}
                />
                <p>COUPON CODE</p>
              </div>
            </div>
            <button>Subscribe Now</button>
          </div>
          <div className={styles["payment-card"]} id="1">
            <input
              type="radio"
              name="payment"
              value="plan-2"
              onClick={(e) => {
                radio(e);
              }}
            />
            <h1>Yearly</h1>
            <p>All Exams for 1 year</p>
            <h1 className={styles["price"]} id="price1">&#8377;199/-</h1>
            {price ? (
              <h1 className={styles["price"]} id="price">
                &#8377;199/-
              </h1>
            ) : null}
            <div id="plan-2" style={{ display: "none" }}>
              <div className={styles["coupon-area"]}>
                <input type="text" placeholder="coupon code" id="couponBox1"/>
                <button>Apply</button>
              </div>
              <div className={styles["coupon-code"]}>
                <input
                  type="radio"
                  id="couponCode1"
                  onClick={() => {
                    couponHandler();
                  }}
                />
                <p>COUPON CODE</p>
              </div>
            </div>
            <button>Subscribe Now</button>
          </div>
        </div>
        <DownloadBanner />
      </div>
    </>
  );
};

export default Plans;
