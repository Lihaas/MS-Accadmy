import styles from "../../StyleSheets/loading spinner/loading.module.css"

const Loader = () =>{
    return(
        <>
        <div className={styles["blur-screen"]} id="blurScreen">
        <div className={styles["lds-roller"]}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
        </>
    )
}

export default Loader;