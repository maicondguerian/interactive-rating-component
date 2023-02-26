
import './App.css'
import { useState } from 'react'
import Card from './Components/Card/ratingCard'
import { RatingContext } from './Context/RatingContext'
import Rating from './Components/Rating/Rating'

function App() {
  const [rating, setRating] = useState(0);
  const [showRating, setShowRating] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

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
    setShowRating(true)
  }

  const handlesetOffShowRating= () =>{
    setShowRating(false)
    setIsSubmitDisabled(true);
  }
  const isDisable = rating
    
  return (
    <div className="App">
      <RatingContext.Provider
      value={{
        rating,
        setRating,
        handlerating,
        handlesetShowRating,
        isDisable,
        isSubmitDisabled,
        handlesetOffShowRating,
        }}>
        {showRating ? <Rating className="ratingAppear" /> : <Card />}
      </RatingContext.Provider>
    </div>
  )
}

export default App
