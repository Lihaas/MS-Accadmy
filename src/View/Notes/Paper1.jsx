import styles from "../../StyleSheets/Notes/notes.module.css";
import samplepic from "../../Assets/Image/istockphoto-1209904658-612x612.jpg"
import dropdown from "../../Assets/Image/dropdownicon.png"
import { useEffect, useState } from "react";
import { Paper1NotesData } from "../../Firebase/NotesData";
import { paper1BookData } from "../../Firebase/bookData";
import {show} from "./dropdown";

const NotesPaper1 = () => {
    const [notesData, setNotesData] = useState({})
    const [book,setBook] = useState([])
    const [visibleBook,setVisibleBook] = useState(4)
    let max = 0;
    useEffect(()=>{
      Paper1NotesData(setNotesData)
      paper1BookData(setBook);
      window.scrollTo(0,0)
    },[])
    const seeMore = () =>{
      let morebtn = document.querySelector("#seemorebtn")
      if(visibleBook===4)
      {
        setVisibleBook(book.length)
        morebtn.innerHTML="Hide"
      }else{
        setVisibleBook(4)
        window.scrollTo(0,475)
        morebtn.innerHTML="See More"
      }
    }
    const buyBox = () =>{
      let bookOrder = ""
      document.getElementsByName("bookCheckbox").forEach((item,index)=>{
        if(item.checked==true)
        {
          bookOrder+="Book Name: "+book[index].name+" "
        }
      })
      if(bookOrder==="")
      {
        alert("Please select Book first")
      }else{
        window.location="https://api.whatsapp.com/send?phone=917404717750&text="+bookOrder
      }
    }
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
      <div className={styles["book-section-heading"]}>
        <h1>Books</h1>
      </div>
      <section className={styles["book-card-section"]}>
        {
          book.slice(0,visibleBook).map((item,index)=>{
            return (
              <div className={styles["book-card"]} key={index}>
                <input type="checkbox" name="bookCheckbox"/>
                  <div className={styles["book-image"]}>
                    <img src={item.img} />
                  </div>
                  <div className={styles["book-text"]}>
                    <p>{item.name}</p>
                  </div>
              </div>
            );
          })
        }
      </section>
        <div className={styles["book-section-button"]}>
          <button onClick={()=>{seeMore()}} id="seemorebtn">See More</button>
          <button onClick={()=>{buyBox()}}>Buy Now</button>
        </div>
      <section className={styles["chapter-section"]}>
          <h1>Demo Study Material</h1>
          <br></br>
          {
            Object.keys(notesData).map((item,index)=>{
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
