import React from 'react'

const FilmForm = ({ formData, handleChange, handleMultiChange, handleSubmit, buttonText }) => (
  <div className="columns">
    <form onSubmit={handleSubmit} className="column is-half is-offset-one-quarter box">
      <div className="field">
        <label className="label">Title</label>
        <div className="control">
          <input 
            className="input"
            placeholder="Title"
            name="title"
            onChange={handleChange}
            value={formData.title}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Duration</label>
        <div className="control">
          <input 
            className="input"
            placeholder="Duration"
            name="duration"
            onChange={handleChange}
            value={formData.duration}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Year</label>
        <div className="control">
          <input 
            className="input"
            placeholder="Year"
            name="year"
            onChange={handleChange}
            value={formData.year}
          />
        </div>
        <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input 
              className="input"
              placeholder="Image Url"
              name="image"
              onChange={handleChange}
              value={formData.image}
            />
          </div>
        </div>
      </div>
      <div className="field">
        <label className="label">Director</label>
        <div className="control">
          <input
            className="input"
            placeholder="Director"
            name="director"
            onChange={handleChange}
            value={formData.director}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Genres</label>
        <div className="control">
          <select  onChange={handleMultiChange}
            value={formData.genres}
            name="genres" multiple>
            <option value="1">Action</option>
            <option value="2">Adventure</option>
            <option value="3">Comedy</option>
            <option value="4">Crime</option>
            <option value="5">Drama</option>
            <option value="6">Fantasy</option>
            <option value="7">Historical</option>
            <option value="8">Historical Fiction</option>
            <option value="9">Horror</option>
            <option value="10">Science Fiction</option>
          </select>
        </div>
      </div>
      <div className="field">
        <button type="submit" className="button is-fullwidth is-info">{buttonText}</button>
      </div>
    </form>
  </div>
)

export default FilmForm