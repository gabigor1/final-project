import React from 'react'
import { getAllFilms } from '../lib/api'

import FilmCard from './FilmCard'

class FilmsIndex extends React.Component {
  state = { films: [] }

  async componentDidMount() {
    try {
      const res = await getAllFilms()
      this.setState({ films: res.data })
    } catch (err) {
      console.log(err)
      // this.props.history.push('/notfound')
    }
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.films.map(film => (
              <FilmCard key={film._id} {...film}/>
            ))}
          </div>
        </div>
      </section>
    )
  }
}
export default FilmsIndex