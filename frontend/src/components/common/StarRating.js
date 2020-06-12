import React from 'react'
import { FaStar } from 'react-icons/fa'

const stars = [1, 2, 3, 4, 5]
const StarRating = ( { handleChange, rating } ) => {
  // console.log(rating)
  return (
    <div>
      {[ ...stars].map((star, i) => { 
        return (
          <label>
            <input 
              type="radio" 
              name="rating" 
              value={i + 1}
              onClick={handleChange}
            />
            <FaStar 
            className="star" 
            size={20}
            color={i + 1 <= rating ? "#ffc107" : "#e4e5e9" }
            />
          </label>
        )
      })}
    </div>
  )
}

export default StarRating