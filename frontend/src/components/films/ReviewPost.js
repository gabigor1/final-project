import React from 'react'
import { postReview } from '../../lib/api'
import StarRating from '../common/StarRating'

class ReviewPost extends React.Component {
  state = {
    formData: {
      text: '',
      rating: '',
      film: this.props.filmId
    }
  }

  handleChange = event => {
    console.log(event.target.value)
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData })
  }

  handleSubmit = async event => {
    event.preventDefault()

    try {
      const res = await postReview(this.state.formData, this.props)
      console.log(res.data.id)
      console.log('Review send')
      this.setState({ formData: { ...this.state.form, text: '' } })
      this.props.loadData()
    } catch (err) {
      console.log(err)
    }
  }


  render() {
    console.log(this.props.filmId)
    console.log(this.state.formData.rating)
    return (
      <section className="post-container">
        <form onSubmit={this.handleSubmit}>
          <div className="top-section">
            <h4>{this.props.user}</h4>
            <StarRating 
              handleChange={this.handleChange} name="rating"
              rating={this.state.formData.rating}/>
            {/* <label>Rating: 
              <input onChange={this.handleChange}name ="rating" type="number" min="1" max="5"></input>
            </label> */}
            <div className="field">
              <textarea
                className="textarea"
                name="text"
                value={this.state.formData.text}
                placeholder="Make your review"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="bottom-section">
            <button className="button is-info" type="submit">Submit</button>
          </div>
        </form>
      </section>
    )
  }

}

export default ReviewPost