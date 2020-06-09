import React from 'react'
import { postFilm } from '../../lib/api'

import FilmForm from './FilmForm'

class FilmNew extends React.Component {
  state = {
    formData: {
      title: '',
      duration: '',
      year: '',
      director: '',
      genres: []
    }
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData })
    console.log(formData)
  }

  handleSubmit = async event => {
    event.preventDefault()

    try {
      const res = await postFilm(this.state.formData)
      console.log(res.data)
      this.props.history.push(`api/films/${res.data.id}`)
    } catch (err) {
      this.props.history.push('/notfound')
      console.log(err.response)
    }
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <FilmForm 
            formData={this.state.formData}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            buttonText="Post a Film"
          />
        </div>
      </section>
    )
  }
}

export default FilmNew