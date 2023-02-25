import styles from "./RatingCard.module.css";
import star from "../../assets/icon-star.svg";

const RatingCard = () => {
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
      </div>
    </>
  );
};
export default RatingCard;
