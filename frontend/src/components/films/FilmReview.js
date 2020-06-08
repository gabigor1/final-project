import React from 'react'

const FilmReview = ({ owner, text, rating }) => (
  <div className="review">
    <div className="review-header">
      <h4>{owner.username} <span>{rating}</span></h4>
    </div>
    <div className="review-content">
      <p> {text} </p>
    </div>
  </div>
)

export default FilmReview