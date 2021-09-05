import styles from "../../StyleSheets/Test Series/card.module.css"

const Card = (props) => {
  return (
    <>
      <div className={styles["card"]} id={props.id}>
          <div className={styles["inner-card"]} id={props.id}><h1 id={props.id}>{props.name}</h1></div>
      </div>
    </>
  );
};

export default Card;
