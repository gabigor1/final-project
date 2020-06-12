import React from 'react'
import { isOwner } from '../../lib/auth'

import StarRating from '../common/StarRating'

const FilmReview = ({ owner, text, rating, id, handleDeleteReview }) => (
  <div className="review">
    <div className="review-container">
      <div className="review-header">
        <StarRating rating={rating} />
        {/* <span>Rating: {rating}/5</span> */}
        <h4>User: {owner.username}</h4>
      </div>
      <div className="review-content">
        <p> {text} </p>
      </div>
      {isOwner(owner.id) && <button className="button is-danger"onClick={handleDeleteReview} value={id}>Deleted</button>}
    </div>
  </div>
)

export default FilmReview