import styles from "../../StyleSheets/Notes/notes.module.css";
import samplepic from "../../Assets/Image/istockphoto-1209904658-612x612.jpg"
import pdf from "../../Assets/Image/pdf.png"
import notes from "../../Assets/Notes/sampleNotes.pdf"
import dropdown from "../../Assets/Image/dropdownicon.png"
import { useEffect, useState } from "react";
import { Paper1NotesData } from "../../Firebase/NotesData";

const NotesPaper2 = () => {
    const [show,setShow]=useState(false);
    const [show1,setShow1]=useState(false);
    const [show2,setShow2]=useState(false);
    const [show3,setShow3]=useState(false);
    const [notesData, setNotesData] = useState({})

    useEffect(()=>{
      Paper1NotesData(setNotesData)
    },[])

    //  Object.keys(notesData).map(item =>  // item = chapter 1
            // notesData[item].map(chapterData => {})
    // })

  return (
    <div className={styles.notes}>
      <section className={styles["paper-detail"]}>
        <div className={styles["section-wrapper"]}>
          <div className={styles["image-section"]}>
            <img src={samplepic} />
          </div>
          <div className={styles["paper-detail-content"]}>
            <h1>Paper 2</h1>
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
          <div className={styles["chapter"]}>
              <h1 onClick={()=>{setShow(!show)}}>1.ABCD &nbsp;&nbsp;<img src={dropdown} className={styles["dropdown"]}/></h1> 
              {
                  show?
                  <div className={styles["notes-area"]}>
                      <div className={styles["notes-one"]}>
                      <a href={notes} download><img src={pdf} /></a>
                      <span>abcd</span>
                      </div>
                      <div className={styles["notes-one"]}>
                      <a href={notes} download><img src={pdf} /></a>
                      <span>abcd</span>
                      </div>
                      <div className={styles["notes-one"]}>
                      <a href={notes} download><img src={pdf} /></a>
                      <span>abcd</span>
                      </div>
                      <div className={styles["notes-one"]}>
                      <a href={notes} download><img src={pdf} /></a>
                      <span>abcd</span>
                      </div>
                      <div className={styles["notes-one"]}>
                      <a href={notes} download><img src={pdf} /></a>
                      <span>abcd</span>
                      </div>
                  </div>
                  :null
              }
          </div>
          <div className={styles["chapter"]}>
              <h1 onClick={()=>{setShow1(!show1)}}>2.ABCD&nbsp;&nbsp;<img src={dropdown} className={styles["dropdown"]}/></h1>
              {
                  show1?
                  <div className={styles["notes-area"]}>
                  <div className={styles["notes-one"]}>
                  <a href={notes} download><img src={pdf} /></a>
                  <span>abcd</span>
                  </div>
                  <div className={styles["notes-one"]}>
                  <a href={notes} download><img src={pdf} /></a>
                  <span>abcd</span>
                  </div>
                  <div className={styles["notes-one"]}>
                  <a href={notes} download><img src={pdf} /></a>
                  <span>abcd</span>
                  </div>
                  <div className={styles["notes-one"]}>
                  <a href={notes} download><img src={pdf} /></a>
                  <span>abcd</span>
                  </div>
                  <div className={styles["notes-one"]}>
                  <a href={notes} download><img src={pdf} /></a>
                  <span>abcd</span>
                  </div>
              </div>
                  :null
              }
          </div>
          <div className={styles["chapter"]}>
              <h1 onClick={()=>{setShow2(!show2)}}>3.ABCD&nbsp;&nbsp;<img src={dropdown} className={styles["dropdown"]}/></h1>
              {
                  show2?
                  <div className={styles["notes-area"]}>
                  <div className={styles["notes-one"]}>
                  <a href={notes} download><img src={pdf} /></a>
                  <span>abcd</span>
                  </div>
                  <div className={styles["notes-one"]}>
                  <a href={notes} download><img src={pdf} /></a>
                  <span>abcd</span>
                  </div>
                  <div className={styles["notes-one"]}>
                  <a href={notes} download><img src={pdf} /></a>
                  <span>abcd</span>
                  </div>
                  <div className={styles["notes-one"]}>
                  <a href={notes} download><img src={pdf} /></a>
                  <span>abcd</span>
                  </div>
                  <div className={styles["notes-one"]}>
                  <a href={notes} download><img src={pdf} /></a>
                  <span>abcd</span>
                  </div>
              </div>
                  :null
              }
          </div>
          <div className={styles["chapter"]}>
              <h1 onClick={()=>{setShow3(!show3)}}>4.ABCD&nbsp;&nbsp;<img src={dropdown} className={styles["dropdown"]}/></h1>
              {
                  show3?
                  <div className={styles["notes-area"]}>
                  <div className={styles["notes-one"]}>
                  <a href={notes} download><img src={pdf} /></a>
                  <span>abcd</span>
                  </div>
                  <div className={styles["notes-one"]}>
                  <a href={notes} download><img src={pdf} /></a>
                  <span>abcd</span>
                  </div>
                  <div className={styles["notes-one"]}>
                  <a href={notes} download><img src={pdf} /></a>
                  <span>abcd</span>
                  </div>
                  <div className={styles["notes-one"]}>
                  <a href={notes} download><img src={pdf} /></a>
                  <span>abcd</span>
                  </div>
                  <div className={styles["notes-one"]}>
                  <a href={notes} download><img src={pdf} /></a>
                  <span>abcd</span>
                  </div>
              </div>
                  :null
              }
          </div>
      </section>
    </div>
  );
};

export default NotesPaper2;
