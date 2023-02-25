import styles from "./RatingCard.module.css";
import star from "../../assets/icon-star.svg";

const RatingCard = () => {
  const numbers = [1, 2, 3, 4, 5]

  const teste =(e)=>{
    console.log(e.target.value)
  }
  
  return (
    <>
      <div className={styles.cardWrapper}>
        <div>
        <img src={star} alt="icon-star.svg" />
        </div>
        <div className={styles.titleWrapper}>
          <h2>How did we do?</h2>
        </div>
        <div className={styles.descriptionWrapper}>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div className={styles.buttonsGroup}>
          {numbers.map((number, index,)=>(
            <button key={index} className={styles.btn} value={number} onClick={teste}> {number} </button>
          ))}
        </div>
        <div className={styles.submit}>
          <button onClick={{}} className={styles.submitButtom} type="submit">Submit</button>
        </div>
      </div>
    </>
  );
};
export default RatingCard;
