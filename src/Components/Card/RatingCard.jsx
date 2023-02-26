import { useContext } from "react";
import { RatingContext } from "../../Context/RatingContext";
import styles from "./RatingCard.module.css";

const Card = () => {
  const numbers = [1, 2, 3, 4, 5]
  const {handlerating, handlesetShowRating, isDisable, isSubmitDisabled} = useContext(RatingContext)
  const star = <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/></svg>


  return (
    <>
      <div className={styles.cardWrapper}>
        <div>
          <span className={styles.img}>{star}</span>
        </div>
        <div className={styles.titleWrapper}>
          <h2 >How did we do?</h2>
        </div>
        <div className={styles.descriptionWrapper}>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div className={styles.buttonsGroup}>
          {numbers.map((number, index,)=>(
            <button key={index} className={styles.btn} value={number} onClick={handlerating}> <p>{number}</p> </button>
          ))}
        </div>
        <div className={styles.submit}>
        <button
        className={`${styles.submitButtom} ${isSubmitDisabled ? styles.disable : ""}`}
        disabled={isSubmitDisabled}
        onClick={handlesetShowRating}
      >
        Enviar
      </button>
        </div>
      </div>
    </>
  );
};
export default Card;
