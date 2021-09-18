import edit from "../../../Assets/Image/edit.png";
import deleteIcon from "../../../Assets/Image/delete (1).png";
import styles from "../../../StyleSheets/admin/NewAdmin/questionList.module.css";
import axios from "axios";
import showIcon from "../../../Assets/Image/view.png"
import Loader from "../../loading spinner/Loader";


const List = (props) =>{
    const deleteQuestion = (e) =>{
        document.getElementById("blurScreen").style.display="block"
        axios.delete("https://msacadmy.herokuapp.com/v1/question/delete?qid="+e.target.id,{
            headers:{
              Authorization: localStorage.getItem("token")
            }
        }).then((item)=>{
          axios
        .get("https://msacadmy.herokuapp.com/v1/questions?testID=" + props.id, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((item) => {
          console.log(item.data.searchResult);
          props.setdata(item.data.searchResult);
          document.getElementById("blurScreen").style.display="none"
        })
        .catch((error) => {
          document.getElementById("blurScreen").style.display="none"
          console.log(error);
        });
        }).catch((error)=>{
            console.log(error);
        })
        console.log(e.target.id);
    }
    const editQue = (e) =>{
      props.edit(e)
      console.log();
    }
    return(
        <>
        <Loader />
        <div id="questionList">
        <div className={styles["create-button"]}>
              <button onClick={()=>{props.create()}}>Create New</button>
                </div>
                {
                    props.data.length===0?
                    <h1>No Data Available</h1>
                    :
                    <table>
                <tr className={styles["ques-tabel-row"]}>
                  <th width="10%">Q No</th>
                  <th width="70%" align="left">Question Title</th>
                  <th width="20%">Action</th>
                </tr>
              {
                  props.data.map((item,index)=>{
                      return(
                        <tr className={styles["ques-tabel-row"]} style={{cursor: "pointer"}} id={index}>
                        <td id={index}>{index+1}</td>
                        <td id={index}> {item.Qtitle}</td>
                        <td  id={index} className={styles["ques-tabel-img"]}>
                          <img src={showIcon} id={index} onClick={(e)=>props.show(e.target.id)}/>
                        <img src={deleteIcon} id={item._id} onClick={(e)=>{deleteQuestion(e)}}/></td>
                        </tr>
                      )
                  })
              }
              </table>   
                }
        </div>
        </>
    )
}

export default List;