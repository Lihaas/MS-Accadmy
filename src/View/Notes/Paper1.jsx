import styles from "../../StyleSheets/Notes/notes.module.css";
import samplepic from "../../Assets/Image/istockphoto-1209904658-612x612.jpg"
import dropdown from "../../Assets/Image/dropdownicon.png"
import { useEffect, useState } from "react";
import { Paper1NotesData } from "../../Firebase/NotesData";
import {show} from "./dropdown";

const NotesPaper1 = () => {
    const [notesData, setNotesData] = useState({})
    let max = 0;
    useEffect(()=>{
      Paper1NotesData(setNotesData)
    },[])
  return (
    <div className={styles.notes}>
      <section className={styles["paper-detail"]}>
        <div className={styles["section-wrapper"]}>
          <div className={styles["image-section"]}>
            <img src={samplepic} />
          </div>
          <div className={styles["paper-detail-content"]}>
            <h1>Paper 1</h1>
            <p>
              We exclusively deals in UGC net Popert & Paper 2 Commerce<br></br>
              We provide the best content material for stydu & in depth<br></br>
              analysis of topic that are being converted in the UGC/NTA NET
              examination.<br></br> Aprat from that institute gives the best
              results in recent UGC NET examination.<br></br> Join Our clases
              Today to crack UGC NTA NET Exam
            </p>
          </div>
        </div>
      </section>
      <section className={styles["chapter-section"]}>
          <h1>Chapters</h1>
          <br></br>
          {
            Object.keys(notesData).reverse().map((item,index)=>{
              max=index;
              return(
              <div className={styles["chapter"]} key={index}>
              <h1 onClick={()=>{show(index,max)}}>{item} <img src={dropdown} className={styles["dropdown"]} /></h1>
              <div id={index} style={{display: "none"}}>
              {
                notesData[item].map((subitem,index)=>{
                  return(
                    <div className={styles["notes-one"]} key={index}>
                    <a href={subitem.pdf} target="_blank" download><img src={subitem.img} width="250" /></a>
                    <span>{subitem.title}</span>
                  </div> 
                  )
                })
              }
              </div>
              </div>
              )
            })
          }
      </section>
    </div>
  );
};

export default NotesPaper1;
