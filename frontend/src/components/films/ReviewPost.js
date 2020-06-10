import React from 'react'

class ReviewPost extends React.Component {
  state = {
    formData: {
      text: '',
      rating: null
    }
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData })
  }

  handleSubmit = async event => {
    event.preventDefault()

    try {
      console.log('Review send')
    } catch (err) {
      console.log(err)
    }
  }


  render() {
    console.log(this.props.currentUser)
    return (
      <section className="post-container">
        <form>
          <div className="top-section">
            <h4>Rating</h4>
            <h4>{this.props.user}</h4>
            <div className="field">
              <textarea
                className="textarea"
                name="text"
                // value={this.state.formData.text}
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