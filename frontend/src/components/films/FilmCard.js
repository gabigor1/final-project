import React from 'react'
import { Link } from 'react-router-dom'

const FilmCard = ({ title, year, image, id }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <Link to={`/films/${id}`}>
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={image} alt={title} loading="lazy" width="255" height="255" />
          </figure>
        </div>
        <div className="card-content">
          <h5 className="subtitle is-7">{title} - {year}</h5>
        </div>
      </div>
    </Link>
  </div>
)

export default FilmCard