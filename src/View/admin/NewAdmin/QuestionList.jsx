import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styles from "../../../StyleSheets/admin/NewAdmin/questionList.module.css";
import { useParams } from "react-router";
import prev from "../../../Assets/Image/previous.png";
import Show from "./Show";
import List from "./List"
import Edit from "./Edit";
import Create from "./Create"
import Loader from "../../loading spinner/Loader";

const QuestionList = () => {
  const [data, setData] = useState([]);
  const [showData,setShowData] = useState([])
  const [quesNo,setQuesNo] = useState(0)
  const id = useParams();
  // console.log(id);
  useEffect(() => {
    document.getElementById("blurScreen").style.display="block"
    axios
      .get(process.env.REACT_APP_API_URL+"/v1/questions?testID=" + id.quesid, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((item) => {
        // console.log(item.data.searchResult);
        setData(item.data.searchResult);
        document.getElementById("blurScreen").style.display="none"
      })
      .catch((error) => {
        alert("error occurred, please try again")
        document.getElementById("blurScreen").style.display="none"
      });
  }, []);
  const deleteQuestion = (e) =>{
    axios.delete(process.env.REACT_APP_API_URL+"/v1/question/delete?qid="+e.target.id,{
        headers:{
          Authorization: localStorage.getItem("token")
        }
    }).then((item)=>{
      axios
    .get(process.env.REACT_APP_API_URL+"/v1/questions?testID=" + id.quesid, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((item) => {
      // console.log(item.data.searchResult);
      setData(item.data.searchResult);
    })
    .catch((error) => {
      console.log(error);
    });
    }).catch((error)=>{
        console.log(error);
    })
    // console.log(e.target.id);
}
  const showQuestion = (e) =>{
    document.getElementById("questionList").style.display="none"
    document.getElementById("questionShow").style.display="block"
    document.getElementById("questionEdit").style.display="none"
    setQuesNo(e);
}
  const showList = (e) =>{
    document.getElementById("questionList").style.display="block"
    document.getElementById("questionShow").style.display="none"
    document.getElementById("questionEdit").style.display="none"
    document.getElementById("questionCreate").style.display="none"
}
  const editQuestion = (e) =>{
    document.getElementById("questionEdit").style.display="block"
    document.getElementById("questionList").style.display="none"
    document.getElementById("questionShow").style.display="none"
  }
  const createQuestion = () =>{
    document.getElementById("questionCreate").style.display="block"
    document.getElementById("questionList").style.display="none"
  }
  return (
    <>
    <Loader />
      <div className={styles.Questions}>
        <div className={styles["question-body"]}>
          <div className={styles["header"]}>
            <div className={styles["header-img"]}>
              <a href="/admin/question">
                <img src={prev} />
              </a>
            </div>
            <h1>Question List</h1>
          </div>
          <div className={styles["content"]}>
            <div className={styles["inner-content"]}>
                <List data={data} setdata={setData} id={id.quesid} show={showQuestion} edit={editQuestion} create={createQuestion} />
                <Show data={data[quesNo]} id={id.quesid} hide={showList} edit={editQuestion} queno={quesNo}/>
                <Edit data={data[quesNo]} hide={showList}/>
                <Create hide={showList}/>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionList;
