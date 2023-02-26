
import { useState } from 'react'
import './App.css'
import RatingCard from './Components/Card/RatingCard'
import { RatingContext } from './Context/RatingContext'

function App() {
  const [rating, setRating] = useState(0)

  const handlerating = (e) =>{
    setRating(e.target.value)
  }


  return (
    <div className="App">
      <RatingContext.Provider
      value={{
        rating,
        setRating,
        handlerating}}>
        <RatingCard />
      </RatingContext.Provider>
    </div>
  )
}

export default App
