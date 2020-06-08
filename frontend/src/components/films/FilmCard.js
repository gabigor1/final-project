import React from 'react'

const FilmCard = ({ title, year, image }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
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
  </div>
)

export default FilmCard