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
  const [subjectName,setSubjectName] = useState("");
  let id = useParams();
  console.log(id.subjectId);
  useEffect(() => {
    document.getElementById("blurScreen").style.display = "block";
    axios
      .get(
        process.env.REACT_APP_API_URL+"/v2/subject/getall",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((item) => {
        setData(item.data.searchResult);
        console.log(item.data.searchResult.paperName);
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
      setSubjectName(e.target.id);
    axios
      .get(
        process.env.REACT_APP_API_URL+"/v2/chapter/getall",
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
          {
            type==="S"?
            data.filter(item=>item.paperName===id.subjectId).map(item=>{
              return(
                <div
                onClick={(e) => {
                  openSubject(e);
                }}
                id={item.subjectName}
              >
                <Card name={item.subjectName} id={item.subjectName} />
              </div>
                )
            })
            :
            data.filter(item=>item.subjectName===subjectName).map(item=>{
              return(
                <div
                onClick={(e) => {
                  openTestList(e);
                }}
                id={item.chapterName}
              >
                <Card name={item.chapterName} id={item.chapterName} />
              </div>
                )
            })
          }
        </div>
      </div>
    </>
  );
};
export default SubjectCard;
