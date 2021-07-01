import React, { useEffect, useState } from "react";
import Test from "../Assets/test.json";
const TestContext = React.createContext({});
var answers = [];
for (let i = 0; i < Test.length; i++) {
  answers[i] = {option: "null",color: "#cbcbcb"};
}
localStorage.setItem("answers", JSON.stringify(answers));
export const TestPanel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    if (currentIndex === length - 1) {
      document.getElementById("nextSpan").style.display = "none";
      document.getElementById("endTest").style.display = "block";
    }
    let answers = JSON.parse(localStorage.getItem("answers"));
    for (let i = 0; i < length; i++) {
        document.getElementById(i).style.backgroundColor = answers[i].color;
    }
    if(answers[currentIndex].option!=="null")
    {
        document.getElementById(answers[currentIndex].option).checked= true;
    }
    if(answers[currentIndex].color==="#B52B00")
    {
      document.getElementById("reviewbtn").value = "Unmark for Review";
    }
  }, [currentIndex]);
  const length = Test.length;
  const nextHander = () => {
    if (currentIndex <= length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const prevHander = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const reviewHandler = () => {
    let answers = JSON.parse(localStorage.getItem("answers"));
    if(answers[currentIndex].color==="#B52B00")
    {
      if (answers[currentIndex] !== "null") {
        document.getElementById("reviewbtn").value = "Mark for Review";
        document.getElementById(currentIndex).style.backgroundColor =
          "#00b536";
      answers[currentIndex].color = "#00b536"
      } else {
        document.getElementById("reviewbtn").value = "Mark for Review";
        document.getElementById(currentIndex).style.backgroundColor =
          "#CBCBCB";
      answers[currentIndex].color = "#CBCBCB"
      }
    }else{
      document.getElementById(currentIndex).style.backgroundColor = "#B52B00"
      document.getElementById("reviewbtn").value = "Unmark for Review";
      answers[currentIndex].color = "#B52B00"
    }
    localStorage.setItem("answers",JSON.stringify(answers));
  };
  let marks = 0;
  const endHandler = () => {
    let answers = JSON.parse(localStorage.getItem("answers"));
    Test.map((item, index) => {
      if (answers[index] === item.correctOption) {
        marks += item.totalMarks;
      }
    });
    console.log(marks);
  };
  const radioHandler = (e) => {
    let answers = JSON.parse(localStorage.getItem('answers'));
    answers[currentIndex].option = e;
    answers[currentIndex].color = "#00B536"
    localStorage.setItem("answers",JSON.stringify(answers));
    document.getElementById(currentIndex).style.backgroundColor = "#00B536"
    document.getElementById("reviewbtn").value = "Mark for Review";
  };

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
