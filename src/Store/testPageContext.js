import React, { useEffect, useState } from "react";
// import Test from "../Assets/test.json";
import Axios from "axios";

var Test = JSON.parse(localStorage.getItem('questions'));
const TestContext = React.createContext({});
if(Test!==null)
{
  var answers = [];
  for (let i = 0; i < Test.length; i++) {
    answers[i] = {option: "null",color: "#cbcbcb"};
  }
}
localStorage.setItem("answers", JSON.stringify(answers));
export const TestPanel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [start,setStart] = useState(false);
  const [marksObtained,setMarksObtained] = useState(0)
  const [rev,setRev] = useState(false);
  const [notAnswered,setNotAnswered] = useState(0)
  const [answered,setAnswered] = useState(0)
  const [reviewed,setReviewed] = useState(0)
  // const [Test,setTest] = useState([])
  useEffect(() => {
    // if(id!==0)
    // {
    //   Axios.get("https://msacadmy.herokuapp.com/v1/questions?testID="+id,{headers:{"Authorization":localStorage.getItem('token')}})
    //   .then((item)=>{
    //       console.log(item.data.searchResult)
    //   }).catch((error)=>{
    //       console.log(Error)
    //   })
    // }
    if (currentIndex === length - 1) {
      document.getElementById("nextSpan").style.display = "none";
      document.getElementById("endTest").style.display = "block";
    }
    let answers = JSON.parse(localStorage.getItem("answers"));
    if(start===true)
    {
      for (let i = 0; i < length; i++) {
          document.getElementsByClassName(i)[0].style.backgroundColor = answers[i].color;
          document.getElementsByClassName(i)[1].style.backgroundColor = answers[i].color;
      }
    }
    if(answers[currentIndex].option!=="null")
    {
        document.getElementById(answers[currentIndex].option).checked= true;
    }
    if(answers[currentIndex].color==="#B52B00")
    {
      document.getElementById("reviewbtn").value = "Unmark for Review";
    }
    if(rev===true)
    {
      reviewExam()
    }
  }, [currentIndex]);
  const length = Test.length;
  const nextHander = () => {
    if (currentIndex <= length - 1) {
      setCurrentIndex(currentIndex + 1);
      if(rev===true)
      {
        document.getElementById("A").disabled = true;
        document.getElementById("B").disabled = true;
        document.getElementById("C").disabled = true;
        document.getElementById("D").disabled = true;
        // reviewExam()
      }
    }
  };
  const prevHander = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
        // reviewExam(currentIndex-1)
    }
  };
  const reviewHandler = () => {
    let answers = JSON.parse(localStorage.getItem("answers"));
    if(answers[currentIndex].color==="#B52B00")
    {
      if (answers[currentIndex].option !== "null") {
        document.getElementById("reviewbtn").value = "Mark for Review";
        document.getElementsByClassName(currentIndex)[0].style.backgroundColor =
          "#00b536";
        document.getElementsByClassName(currentIndex)[1].style.backgroundColor =
          "#00b536";
      answers[currentIndex].color = "#00b536"
      } else {
        document.getElementById("reviewbtn").value = "Mark for Review";
        document.getElementsByClassName(currentIndex)[0].style.backgroundColor =
          "#CBCBCB";
        document.getElementsByClassName(currentIndex)[1].style.backgroundColor =
          "#CBCBCB";
      answers[currentIndex].color = "#CBCBCB"
      }
    }else{
      document.getElementsByClassName(currentIndex)[0].style.backgroundColor = "#B52B00"
      document.getElementsByClassName(currentIndex)[1].style.backgroundColor = "#B52B00"
      document.getElementById("reviewbtn").value = "Unmark for Review";
      answers[currentIndex].color = "#B52B00"
    }
    localStorage.setItem("answers",JSON.stringify(answers));
  };
  let marks = 0;
  const endHandler = () => {
    document.getElementById("blurScreen").style.display = "block"
    let answers = JSON.parse(localStorage.getItem("answers"));
    Test.map((item, index) => {
      if (answers[index].option === item.correctOption) {
        marks += item.totalMarks;
      }
    });
    let noanswer = 0;
    let answergiven = 0;
    let reviewedque = 0;
    for(let i=0;i<=Test.length-1;i++)
    {
      if(answers[i].option==="null")
      {
        noanswer++;
      }else{
        answergiven++;
      }
      if(answers[i].color==="#B52B00")
      {
        reviewedque++
      }
    }
      Axios.post("https://msacadmy.herokuapp.com/v1/result",
      {
        "paperId":localStorage.getItem('examID'),
        "marksGain":marks,
        "testName":localStorage.getItem('examName'),
        "totalQAttempt":answergiven,
        "totalMarksExam":localStorage.getItem('totalMarks')
      },{
        headers:{
          "Authorization": localStorage.getItem('token')
        }
      })
      .then((item)=>{
        Axios.post("https://msacadmy.herokuapp.com/create/result",
        {
          "tId":localStorage.getItem('examID'),
          "marksObtain":marks,
          "uid":item.data._id,
          "totalQuesAttempt":answergiven,
          "totalMarks":localStorage.getItem('totalMarks')
        },{
          headers:{
            "Authorization": localStorage.getItem('token')
          }
        })
        .then((item)=>{
        }).catch((error)=>{
          console.log(error)
        })
      }).catch((error)=>{
        console.log(error)
      })
    setMarksObtained(marks)
    setAnswered(answergiven)
    setNotAnswered(noanswer)
    setReviewed(reviewedque)
    document.getElementById("blurScreen").style.display = "none"
    document.getElementById("countdownTimer").style.display="none"
    document.getElementById("end-dialog").style.display="block"
    // setCurrentIndex(0);
  };
  const radioHandler = (e) => {
    let answers = JSON.parse(localStorage.getItem('answers'));
    answers[currentIndex].option = e;
    answers[currentIndex].color = "#00B536"
    localStorage.setItem("answers",JSON.stringify(answers));
    document.getElementsByClassName(currentIndex)[0].style.backgroundColor = "#00B536"
    document.getElementsByClassName(currentIndex)[1].style.backgroundColor = "#00B536"
    document.getElementById("reviewbtn").value = "Mark for Review";
  };
  const reviewExam = () =>{
    setRev(true)
    // console.log(currentIndex);
    document.getElementById("end-dialog").style.display="none"
    document.getElementById("reviewbtn").style.display="none"
    document.getElementById("endTest").style.display="none"
    document.getElementById("countdownTimer").style.display="none"
    document.getElementsByClassName("endbtn2")[0].style.display="none"
    document.getElementsByClassName("endbtn2")[1].style.display="none"
    let answers = JSON.parse(localStorage.getItem('answers'));
    Test.map((item,index)=>{
      if(index===currentIndex)
      {
        if(answers[currentIndex].option==="null")
        {
          document.getElementById(item.correctOption).labels[0].style.backgroundColor="#00b536"
          document.getElementById("A").disabled = true;
          document.getElementById("B").disabled = true;
          document.getElementById("C").disabled = true;
          document.getElementById("D").disabled = true;
        }else{
          document.getElementById(answers[currentIndex].option).labels[0].style.backgroundColor="#B52B00"
          document.getElementById(item.correctOption).labels[0].style.backgroundColor="#00b536"
          document.getElementById("A").disabled = true;
          document.getElementById("B").disabled = true;
          document.getElementById("C").disabled = true;
          document.getElementById("D").disabled = true;
        }
      }
    })
  }
  return (
    <>
      {Test.map((item, index) => {
        if (index === currentIndex) {
          return (
            <TestContext.Provider
              value={{
                item,
                currentIndex,
                setCurrentIndex,
                nextHander,
                prevHander,
                length,
                reviewHandler,
                endHandler,
                radioHandler,
                start,
                setStart,
                marksObtained,
                reviewExam,
                answered,
                notAnswered,
                reviewed,
                Test
              }}
            >
              {children}
            </TestContext.Provider>
          );
        }
      })}
    </>
  );
};

export default TestContext;
