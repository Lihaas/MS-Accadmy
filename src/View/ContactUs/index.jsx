import styles from "../../StyleSheets/Home/Home.module.css";
import CoachingCenter from "../../Assets/Image/Video Full Hd 1920X1080 Px (6)-1.m4v";
import whatsapp from "../../Assets/Image/chatonwhatsapp.png"
import {  useEffect} from "react"
import Axios from 'axios'
import Loader from "../../View/loading spinner/Loader"

import { addBook } from "../../Firebase/bookData";


const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  const enquiry = (e) =>{
    document.getElementById("blurScreen").style.display="block"
    e.preventDefault();
    if(document.getElementById("BatchName").value===null ||
    document.getElementById("BatchName").value==="Select"
    )
    {
      alert("Please Select Batch Type");
    document.getElementById("blurScreen").style.display="none"
    }else{
      Axios.post("https://msacadmy.herokuapp.com/create/form",{
        "name":document.getElementById("FullName").value,
        "phoneNumber":document.getElementById("PhoneNumber").value,
        "batchName":document.getElementById("BatchName").value,
        "inquary":document.getElementById("Enquiry").value
      })
      .then((item)=>{
        alert("Enquiry Submitted Succesfully")
    document.getElementById("blurScreen").style.display="none"
      }).catch((error)=>{
        console.log(error)
        alert("Error occurred, Please try again")
    document.getElementById("blurScreen").style.display="none"
      })
    }
  }
  return (
    <div className={styles.home}>
      <Loader />
        {/* Add a class for below section */}
      <section className={styles["section-5"]} style={{paddingTop: "120px"}}> 
        <div className={styles["section-wrapper"]}>
          <div>
            <h1>Make an Enquiry</h1>
            <span>We will arrange a callback for you</span>
          </div>
          <div>
            <div className={styles["contact-form"]}>
              <form 
              // onSubmit={(e)=>{enquiry(e)}}
              >
                <label>Full Name</label>
                <input type="text" placeholder="Full Name" required id="FullName"/>
                <label>Phone Number</label>
                <input type="text" placeholder="Phone Number" required pattern="[0-9]{10}" maxLength="10" id="PhoneNumber"/>
                <label>Email</label>
                <input type="email" placeholder="Email" required id="Email"/>
                {/* <label>Batch Name</label>
                <input
                  type="text"
                  placeholder="What Batch Do You Want To Choose?"
                  required
                  id="BatchName"
                /> */}
                <label>Batch Type</label>
                <select id="select" id="BatchName">
                  <option value="Select" selected>Select</option>
                  <option value="Paper-I commerce">Paper-I commerce</option>
                  <option value="Paper-II commerce">Paper-II commerce</option>
                  <option value="Both">Both</option>
                </select>
                <label>Enquiry</label>
                <input
                  type="text"
                  placeholder="What is your enquiry"
                  required
                  id="Enquiry"
                />
                <button type="submit" onClick={(e)=>{enquiry(e)}}>Submit</button>
              </form>
              <div className={styles["whatsapp-section"]}>
              <h1>OR</h1>
              <a href="https://wa.me/919996177761" target="_blank"><img src={whatsapp} className={styles["whatsapp-png"]}/></a>
              </div>
            </div>
            <div className={styles["image-layer"]}>
              <div>
                <video src={CoachingCenter} autoPlay loop />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
