import styles from "./rating.module.css";
import greeting from "../../assets/illustration-thank-you.svg";
import { useContext } from "react";
import { RatingContext } from "../../Context/RatingContext";
import { FaArrowLeft } from "react-icons/fa";


const Rating = () => {
  const { rating, handlesetOffShowRating } = useContext(RatingContext)
  return (
    <>
      <div className={styles.cardWrapper}>
        <div className={styles.return}>
          <button className={styles.iconReturn} onClick={handlesetOffShowRating}>
            <FaArrowLeft />
          </button>
        </div>
        <div className={styles.greetingThankYou}>
          <img src={greeting} alt="/illustration-thank-you" />
        </div>
        <div className={styles.ratingWrapper}>
          <p>You select {rating} out of 5</p>
        </div>
        <div className={styles.titleWrapper}>
          <h2>Thank you! </h2>
        </div>
        <div className={styles.descriptionWrapper}>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      </div>
    </>
  );
};
export default Rating;
