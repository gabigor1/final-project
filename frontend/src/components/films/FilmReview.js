import React from 'react'
import { isOwner } from '../../lib/auth'

const FilmReview = ({ owner, text, rating, id, handleDeleteReview }) => (
  <div className="review">
    <div className="review-container">
      <div className="review-header">
        <span>Rating: {rating}/5</span>
        <h4>User: {owner.username}</h4>
      </div>
      <div className="review-content">
        <p> {text} </p>
      </div>
      {isOwner(owner.id) && <button onClick={handleDeleteReview} value={id}>Deleted</button>}
    </div>
  </div>
)

export default FilmReview