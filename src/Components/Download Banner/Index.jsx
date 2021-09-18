import  styles from "../../StyleSheets/DownloadBanner/download.module.css"
import phone from "../../Assets/Image/iPhone x tilted left.png"
import playstore from "../../Assets/Image/google-play-app.png"

const DownloadBanner = () =>{
    return(
        <>
        <a href="https://play.google.com/store/apps/details?id=com.codeera.msmart" target="_blank" className={styles["app-link"]}>
        <div className={styles["download-banner"]}>
            <div className={styles["flex-1"]}>
            <div className={styles["phone-img"]}>
                <img src={phone} />
            </div>
            </div>
            <div className={styles["flex-2"]}>
            <div className={styles["sub-flex"]}>
                <h1>Download &gt;</h1>
                <h1>Android App</h1>
                </div>
                <p>Download Mobile App and Prepare wherever you go & whenever you want!</p>
                <img src={playstore} />
            </div>
        </div>
        </a>
        </>
    )
}
export default DownloadBanner;