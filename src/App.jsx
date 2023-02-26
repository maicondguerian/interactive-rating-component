
import './App.css'
import { useState } from 'react'
import Card from './Components/Card/ratingCard'
import { RatingContext } from './Context/RatingContext'
import Rating from './Components/Rating/Rating'

function App() {
  const [rating, setRating] = useState(0)
  const [showRating, setShowRating] = useState(false)

  const handlerating = (e) =>{
    setRating(e.currentTarget.value)
  }

  const handlesetShowRating = () =>{
    setShowRating(true)
  }

  const disable = setRating === ''

  return (
    <div className="App">
      <RatingContext.Provider
      value={{
        rating,
        setRating,
        handlerating,
        handlesetShowRating,
        disable
        }}>
        {showRating ? <Rating /> : <Card />}
      </RatingContext.Provider>
    </div>
  )
}

export default App
