import React from 'react'

const FilmReview = ({ owner, text, rating }) => (
  <div className="review">
    <div className="review-container">
      <div className="review-header">
        <span>Rating: {rating}/5</span>
        <h4>User: {owner.username}</h4>
      </div>
      <div className="review-content">
        <p> {text} </p>
      </div>
    </div>
  </div>
)

export default FilmReview