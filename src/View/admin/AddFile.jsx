import styles from "../../StyleSheets/admin/addsubject.module.css"
import prev from "../../Assets/Image/previous.png"

const AddFile = () =>{
    return(
        <>
         <div className={styles.admin}>
      <div className={styles["header"]}>
      <div className={styles["header-prev-btn"]}>
              <img src={prev} />
          </div>
        <div className={styles["header-section-wrapper"]}>
        <h1>Add File</h1>
        </div>
      </div>
      <div className={styles["content-section"]}>
        <form>
            <input type="file" placeholder="Select File"/>
            <button type="submit">Add</button>
        </form>
      </div>
    </div>
        </>
    )
}

export default AddFile;