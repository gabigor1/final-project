import React from 'react'

const FilmReview = ({ owner, text, rating }) => (
  <div className="review">
    <div className="review-container">
      <div className="review-header">
        <span>{rating}</span>
        <h4>{owner.username}</h4>
      </div>
      <div className="review-content">
        <p> {text} </p>
      </div>
    </div>
  </div>
)

export default FilmReview