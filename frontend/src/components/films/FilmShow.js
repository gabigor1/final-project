import React from 'react'
import { getSingleFilm } from '../../lib/api'
import FilmReview from './FilmReview'

class FilmShow extends React.Component {
  state = { 
    film: { 
      title: null,
      duration: null,
      year: null,
      director: null,
      owner: {
        id: null,
        username: null
      },
      reviews: null
    } 
  }

  async componentDidMount() {
    try {

      const filmId = this.props.match.params.id
      console.log(filmId)
      const res = await getSingleFilm(filmId)
      console.log(res.data.reviews)
      this.setState({ film: res.data, reviews: res.data.reviews })
    } catch (err) {
      console.log(err)
    }
  }

  render(){
    if (!this.state.reviews) return null
    const { film } = this.state
    const { reviews } = this.state
    console.log(film)
    console.log(reviews.map(review => {
      return review.text
    }))
    return (
      <section className="show-section">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <figure className="image">
                <img src="" alt="Lord" />
              </figure>
            </div>
            <div className="column is-half">
              <h4 className="title is-6">{film.title}</h4>
              <hr />
              <h4 className="title is-6">Duration: {film.duration} Hours</h4>
              <hr />
              <h4 className="title is-6">Year: {film.year}</h4>
              <hr />
              <h4 className="title is-6">Director: {film.director}</h4>
              <hr />
              <h4 className="title is-6">Added By: {film.owner.username}</h4>
            </div>
          </div>
        </div>
        <div className="write-review">
          <textarea>
            
          </textarea>
        </div>
        <div className="reviews">
          {reviews.map(review => (
            <FilmReview key={review.id} {...review} />
          ))}
        </div>
      </section>
    )
  }
}

export default FilmShow 
