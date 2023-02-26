
import './App.css'
import { useState } from 'react'
import Card from './Components/Card/ratingCard'
import { RatingContext } from './Context/RatingContext'
import Rating from './Components/Rating/Rating'

function App() {
  const [rating, setRating] = useState(0);
  const [showRating, setShowRating] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [buttonText, setButtonText] = useState('Submit');

  const handlerating = (e) =>{
    const ratingValue = e.currentTarget.value;
    setRating(ratingValue);

    if (ratingValue === "0") {
      setIsSubmitDisabled(true);
    } else {
      setIsSubmitDisabled(false);
    }
  }
  
  const handlesetShowRating = () =>{
    setShowRating(false); 
    setButtonText('Sending...');
    setTimeout(() => {
      setShowRating(true);
      setButtonText('Submit');
    }, 2000);
  }


  const handlesetOffShowRating= () =>{
    setShowRating(false)
    setIsSubmitDisabled(true);
  }
  const isDisable = rating
    
  return (
    <main className="App">
      <section>
        <h1 className="hidden">Interactive rating component</h1>
        <RatingContext.Provider
        value={{
          rating,
          setRating,
          handlerating,
          handlesetShowRating,
          isDisable,
          isSubmitDisabled,
          handlesetOffShowRating,
          buttonText
          }}>
          {showRating ? (
            <div className="slide-in">
              <Rating />
            </div>
          ) : (
            <Card />
          )}
        </RatingContext.Provider>
      </section>
    </main>
  );
}
export default App
