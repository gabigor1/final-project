import React from 'react'
import { getSingleFilm, deleteFilm, deleteReview } from '../../lib/api'
import { isOwner } from '../../lib/auth'
import FilmReview from './FilmReview'
import FilmGenre from './FilmGenre'
import ReviewPost from './ReviewPost'

class FilmShow extends React.Component {
  state = { 
    film: { 
      title: null,
      duration: null,
      year: null,
      director: null,
      image: null,
      owner: {
        id: null,
        username: null
      },
      reviews: null,
      genres: null
    } 
  }

  async componentDidMount() {
    try {
      this.loadData()
    } catch (err) {
      console.log(err)
    }
  }

  loadData = async () => {
    try {
      const filmId = this.props.match.params.id
      console.log(filmId)
      const res = await getSingleFilm(filmId)
      console.log(res.data.genres)
      this.setState({ film: res.data, reviews: res.data.reviews, genres: res.data.genres })
    } catch (err) {
      console.log(err)
    }
  }

  handleDelete = async () => {
    try {
      const filmId = this.props.match.params.id
      await deleteFilm(filmId)
      this.props.history.push('/films')
    } catch (err) {
      console.log(err.response)
    }
  }

  handleDeleteReview = async (e) => {
    try {
      console.log(e.target.value)
      await deleteReview(e.target.value)
      this.loadData()
    } catch (err) {
      console.log(err.response)
    }
  }

  render(){
    if (!this.state.reviews) return null
    const { film } = this.state
    const { reviews } = this.state
    const { genres } = this.state
    console.log(this.props.match.params)
    // console.log(genres.map(genre => {
    //   return genre.name
    // }))
    // console.log(reviews.map(review => {
    //   return review.text
    // }))
    return (
      <section className="show-section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={film.image} alt={film.title}/>
              </figure>
            </div>
            <div className="column is-half">
              <h4 className="title is-6">Title: {film.title}</h4>
              <hr />
              <h4 className="title is-6">Duration: {film.duration} Hours</h4>
              <hr />
              <h4 className="title is-6">Year: {film.year}</h4>
              <hr />
              <h4 className="title is-6">Director: {film.director}</h4>
              <hr />
              <h4 className="title is-6">Genres: {genres.map(review => (
                <FilmGenre key={review.id} {...review} />
              ))}
              </h4>
              <hr />
              <h4 className="title is-6">Added By: {film.owner.username}</h4>
              <hr />
              {isOwner(film.owner.id) && <button onClick={this.handleDelete} className="button is-danger">Delete</button>}
            </div>
          </div>
          <hr />
        </div>
        <div className="post">
          <ReviewPost
            filmId={this.props.match.params.id}
            loadData={this.loadData}
          />
        </div>
        <div className="reviews">
          {reviews.map(review => (
            <FilmReview key={review.id} {...review} handleDeleteReview={this.handleDeleteReview} />
          ))}
        </div>
      </section>
    )
  }
}

export default FilmShow 
