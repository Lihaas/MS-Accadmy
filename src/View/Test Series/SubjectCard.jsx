import styles from "../../StyleSheets/Test Series/subjectcard.module.css";
import Card from "./Card";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../loading spinner/Loader";

const SubjectCard = () => {
  const [data, setData] = useState([]);
  const [type, setType] = useState("S");
  const [heading,setHeading] = useState("Choose Subject")
  let id = useParams();
  useEffect(() => {
    document.getElementById("blurScreen").style.display = "block";
    axios
      .get(
        process.env.REACT_APP_API_URL+"/v1/subject/getall?questionPaperID=" +
          id.subjectId,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((item) => {
        setData(item.data.searchResult);
        setType("S")
        setHeading("Choose Subject")
        document.getElementById("blurScreen").style.display = "none";
      })
      .catch((error) => {
        alert("Error Occurred, Please try again");
        window.location = "/home";
        document.getElementById("blurScreen").style.display = "none";
      });
  }, []);
  const openSubject = (e) => {
      document.getElementById("blurScreen").style.display="block"
    axios
      .get(
        process.env.REACT_APP_API_URL+"/v1/chapter/getall?subejectID=" +
          e.target.id,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((item) => {
        setData(item.data.searchResult);
        document.getElementById("blurScreen").style.display = "none";
        setType("C");
        setHeading("Choose Chapter")
        document.getElementById("subHeading").value="Choose Chapter"
      })
      .catch((error) => {
        alert("Error Occurred, Please try again");
        window.location = "/home";
        document.getElementById("blurScreen").style.display = "none";
      });
  };
  const openTestList = (e) =>{
      window.location="/info/"+e.target.id
  }
  return (
    <>
      <Loader />
      <div className={styles["subject-card-body"]}>
        <div className={styles["subject-heading"]}>
          <h1 id="subHeading">{heading}</h1>
        </div>
        <div className={styles["subject-card-content"]}>
          {data.map((item, index) => {
            if (type==="S") {
                return(
              <div
                onClick={(e) => {
                  openSubject(e);
                }}
                id={item._id}
              >
                <Card name={item.subjectName} id={item._id} />
              </div>
                )
            } else {
                    return(
                  <div
                    onClick={(e) => {
                      openTestList(e);
                    }}
                    id={item._id}
                  >
                    <Card name={item.chapterName} id={item._id} />
                  </div>
                    )
            }
          })}
        </div>
      </div>
    </>
  );
};
export default SubjectCard;
